import { NextResponse } from "next/server";

/*
  The single destination for every form on the site — contact, the five solution
  pages, the six quote forms and the three questionnaires.

  Field-agnostic on purpose: forms here range from 3 fields to 34, and the
  questionnaires' labels are verbatim legacy copy. Rather than model each one, the
  client posts whatever the form contains and this lays it out in the email. A new
  form needs no change here.

  Sending goes through Resend's REST API directly — no SDK dependency for one
  fetch. Set in the Vercel project:
    RESEND_API_KEY   — from resend.com, after verifying the sending domain
    ENQUIRY_TO       — defaults to support@onlinemarketinghelp.co.uk
    ENQUIRY_FROM     — must be on the verified domain
*/

export const runtime = "nodejs";

const TO = process.env.ENQUIRY_TO ?? "support@onlinemarketinghelp.co.uk";
const FROM = process.env.ENQUIRY_FROM ?? "Website enquiries <enquiries@onlinemarketinghelp.co.uk>";

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

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    // Better a visible failure than a form that silently swallows enquiries.
    console.error("RESEND_API_KEY is not set — enquiry not sent:", formName);
    return NextResponse.json({ error: "Email is not configured." }, { status: 503 });
  }

  const reply = entries.find(([label]) => /e-?mail/i.test(label))?.[1];

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      subject: `${formName} — website enquiry`,
      html,
      ...(typeof reply === "string" && reply.includes("@") ? { reply_to: reply } : {}),
    }),
  });

  if (!response.ok) {
    console.error("Resend rejected the enquiry:", response.status, await response.text());
    return NextResponse.json({ error: "Could not send." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
