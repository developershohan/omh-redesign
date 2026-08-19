"use client";

/*
  Collects a whole <form> and posts it to /api/enquiry.

  Uses the browser's own FormData, so every control the form contains is captured
  by its `name` — including checkbox groups, which arrive as an array. That is why
  the field components set `name` to the visible label: the email then reads as the
  questions the visitor actually answered, in their own words, with no mapping
  table to keep in step with 15 different forms.
*/

export type SendResult = { ok: true } | { ok: false; message: string };

export async function sendEnquiry(form: HTMLFormElement, formName: string): Promise<SendResult> {
  const data = new FormData(form);
  const fields: Record<string, string | string[]> = {};

  for (const [key, value] of data.entries()) {
    if (typeof value !== "string" || key === "company") continue;
    const existing = fields[key];
    if (existing === undefined) fields[key] = value;
    else if (Array.isArray(existing)) existing.push(value);
    else fields[key] = [existing, value];
  }

  try {
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        form: formName,
        page: window.location.pathname,
        company: String(data.get("company") ?? ""), // honeypot
        fields,
      }),
    });
    if (response.ok) return { ok: true };
    return {
      ok: false,
      message:
        response.status === 503
          ? "We couldn't send that just now. Please call 020 3489 3934 and we'll take the details."
          : "Something went wrong sending that. Please try again, or call 020 3489 3934.",
    };
  } catch {
    return { ok: false, message: "No connection. Please try again, or call 020 3489 3934." };
  }
}

/* A field bots fill in and people never see. Cheaper and kinder than a captcha. */
export function Honeypot() {
  return (
    <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
      <label>
        Company
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}
