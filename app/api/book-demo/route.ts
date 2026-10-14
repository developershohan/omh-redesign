import { NextResponse } from "next/server";
import { demoTimes } from "@/lib/book-demo";

/*
  Puts a demo request in OMH's Google Calendar at the slot the visitor picked in
  components/BookDemo.tsx. The same submit also posts to /api/enquiry, which
  stores and emails the lead, so a calendar failure never loses one.

  The calendar write runs in a Google Apps Script web app on OMH's own Google
  account (setup and script: docs/google-calendar-booking.md), so there is no
  Cloud project or service-account key to look after. Set on the server:
    GOOGLE_BOOKING_WEBHOOK — the script's web app URL (ends in /exec)
    GOOGLE_BOOKING_SECRET  — the same string as SECRET in the script
*/

const DAY = 864e5;

export async function POST(request: Request) {
  const webhook = process.env.GOOGLE_BOOKING_WEBHOOK;
  const secret = process.env.GOOGLE_BOOKING_SECRET;
  if (!webhook || !secret) {
    console.error("GOOGLE_BOOKING_WEBHOOK/GOOGLE_BOOKING_SECRET are not set — demo not added to the calendar.");
    return NextResponse.json({ error: "Calendar is not configured." }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  // Honeypot filled: the enquiry route keeps it as spam; nothing goes in the calendar.
  if (body.hp) return NextResponse.json({ ok: true });

  const text = (key: string) => String(body[key] ?? "").trim().slice(0, 300);
  const date = text("date");
  const time = text("time");
  const name = text("name");
  const email = text("email");

  // Trust boundary: a listed time, on a weekday, within the next three weeks.
  const day = new Date(`${date}T12:00:00Z`);
  const ahead = (day.getTime() - Date.now()) / DAY;
  const validSlot =
    /^\d{4}-\d{2}-\d{2}$/.test(date) && demoTimes.includes(time) && day.getUTCDay() % 6 !== 0 && ahead > -1 && ahead < 21;
  if (!validSlot || !name || !email.includes("@")) {
    return NextResponse.json({ error: "Pick a listed day and time, and add your name and email." }, { status: 400 });
  }

  const business = text("business");
  const description = [
    "Requested on the website. Email the customer to confirm, or offer another time.",
    "",
    `Name: ${name}`,
    `Business: ${business}`,
    `Industry: ${text("industry")}`,
    `Based in: ${text("city")}`,
    `Phone: ${text("phone")}`,
    `Email: ${email}`,
    `Booked from: ${text("page")}`,
  ].join("\n");

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret,
        date,
        time,
        title: `Demo request: ${name}${business ? `, ${business}` : ""}`,
        description,
      }),
      signal: AbortSignal.timeout(15_000),
    });
    // Apps Script answers 200 whatever happens, so the body is the result.
    const result = (await response.text()).trim();
    if (result !== "ok") throw new Error(`Apps Script replied: ${result.slice(0, 200)}`);
  } catch (error) {
    console.error("Could not add the demo to Google Calendar:", error);
    return NextResponse.json({ error: "Could not add the booking to the calendar." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
