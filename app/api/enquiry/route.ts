import { NextResponse } from "next/server";

/*
  The single destination for every form on the site — contact, the five solution
  pages, the six quote forms and the three questionnaires.

  Field-agnostic on purpose: forms here range from 3 fields to 34, and the
  questionnaires' labels are verbatim legacy copy. Rather than model each one, the
  client posts whatever the form contains and this lays it out in the email. A new
  form needs no change here.

  Every submission is stored as an `enquiry` document first (the Studio's "Form
  submissions" list is the dashboard), then emailed over SMTP. Set on the server
  (/opt/omh/.env):
    SANITY_API_WRITE_TOKEN — an Editor token from sanity.io/manage
    SANITY_ENQUIRY_DATASET — defaults to "enquiries" (private; must exist)
    SMTP_HOST        — defaults to smtp.hostinger.com
    SMTP_PORT        — defaults to 465 (implicit TLS); use 587 for STARTTLS
    SMTP_USER        — the full mailbox address
    SMTP_PASS        — that mailbox's password
    ENQUIRY_TO       — defaults to support@onlinemarketinghelp.co.uk
    ENQUIRY_FROM     — defaults to the mailbox in SMTP_USER

  nodejs runtime is required: the edge runtime cannot open an SMTP socket.
*/

import { createClient } from "next-sanity";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const TO = process.env.ENQUIRY_TO ?? "support@onlinemarketinghelp.co.uk";
const FROM = process.env.ENQUIRY_FROM;

type Payload = { form?: string; page?: string; fields?: Record<string, string | string[]>; company?: string };

const escape = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a field no human sees. Bots fill it, so accept and drop silently
  // rather than telling them why nothing happened.
  if (body.company) return NextResponse.json({ ok: true });

  const fields = body.fields ?? {};
  const entries = Object.entries(fields).filter(([, v]) => (Array.isArray(v) ? v.length : String(v).trim()));
  if (!entries.length) {
    return NextResponse.json({ error: "Nothing to send." }, { status: 400 });
  }

  const formName = body.form?.slice(0, 120) ?? "Website form";
  const rows = entries
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 14px 6px 0;vertical-align:top;color:#667085;font:14px system-ui">${escape(
          label,
        )}</td><td style="padding:6px 0;vertical-align:top;color:#101828;font:14px system-ui">${escape(
          Array.isArray(value) ? value.join(", ") : String(value),
        ).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  const html = `<div style="font:14px system-ui;color:#101828">
    <p style="margin:0 0 4px"><strong>${escape(formName)}</strong></p>
    <p style="margin:0 0 18px;color:#667085">Submitted from ${escape(body.page ?? "the website")}</p>
    <table style="border-collapse:collapse">${rows}</table>
  </div>`;

  const reply = entries.find(([label]) => /e-?mail/i.test(label))?.[1];
  const email = typeof reply === "string" && reply.includes("@") ? reply : undefined;

  // Stored before it is emailed, so an SMTP outage cannot lose a lead and the
  // Studio doubles as the submissions dashboard. Without a token (local dev)
  // this is skipped. ponytail: no database, no third-party form service.
  let stored = false;
  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (token) {
    try {
      await createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        // A separate, private dataset: `production` is public so the site can
        // read the blog with no token, which would make every lead readable too.
        dataset: process.env.SANITY_ENQUIRY_DATASET ?? "enquiries",
        apiVersion: "2024-10-01",
        token,
        useCdn: false,
      }).create({
        _type: "enquiry",
        form: formName,
        page: body.page ?? "",
        submittedAt: new Date().toISOString(),
        email,
        fields: entries.map(([label, value]) => ({
          _type: "field",
          _key: label.replace(/\W+/g, "-").slice(0, 40) || "field",
          label,
          value: Array.isArray(value) ? value.join(", ") : String(value),
        })),
      });
      stored = true;
    } catch (error) {
      console.error("Could not store the enquiry in Sanity:", error);
    }
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    console.error("SMTP_USER/SMTP_PASS are not set — enquiry not emailed:", formName);
    // Stored is an honest yes to the visitor; nothing stored is a real failure.
    return stored
      ? NextResponse.json({ ok: true })
      : NextResponse.json({ error: "Email is not configured." }, { status: 503 });
  }

  // ponytail: a fresh connection per request. Serverless invocations are not
  // reused predictably, so a pooled transport would mostly go to waste.
  const port = Number(process.env.SMTP_PORT ?? 465);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.hostinger.com",
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    await transport.sendMail({
      from: FROM ?? user,
      to: TO,
      subject: `${formName} — website enquiry`,
      html,
      ...(typeof reply === "string" && reply.includes("@") ? { replyTo: reply } : {}),
    });
  } catch (error) {
    // Hostinger rejects on a bad password, an unauthorised From, or the hourly
    // send cap. The message says which, so log it rather than a bare status.
    console.error("SMTP rejected the enquiry:", error);
    if (!stored) return NextResponse.json({ error: "Could not send." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
