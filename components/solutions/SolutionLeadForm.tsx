"use client";

import { useId, useState } from "react";
import { ArrowRight } from "@/components/ui/Button";

const controlClass =
  "min-h-12 w-full rounded-input border-[1.5px] border-line bg-white px-4 text-[17px] text-ink placeholder:text-muted/65 focus:outline-2 focus:outline-offset-2 focus:outline-teal";

export function SolutionLeadForm({
  need,
  prompt,
  submitLabel,
  eventPrefix,
}: {
  need: string;
  prompt: string;
  submitLabel: string;
  eventPrefix: string;
}) {
  const [sent, setSent] = useState(false);
  const nameId = useId();
  const emailId = useId();
  const websiteId = useId();
  const detailId = useId();

  if (sent) {
    return (
      <div role="status" className="rounded-card border border-[#f2c675]/30 bg-white/[0.06] p-7">
        <p className="font-sans text-h4 font-semibold text-white">Thanks. Your enquiry is ready for review.</p>
        <p className="mt-3 max-w-[50ch] text-[17px] leading-relaxed text-white/68">
          A real person will look at the context you shared before suggesting a next step. If you
          prefer to talk, call 020 3489 3934.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 text-[15px] font-semibold text-[#f5d394] underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      data-event={`${eventPrefix}_form_submit`}
      className="rounded-card border border-white/12 bg-white/[0.055] p-7 max-sm:p-5"
    >
      <input type="hidden" name="service_interest" value={need} />
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <div>
          <label htmlFor={nameId} className="mb-1.5 block text-[14px] font-semibold text-white">
            Name <span className="text-[#f5d394]">*</span>
          </label>
          <input id={nameId} name="name" required autoComplete="name" className={controlClass} />
        </div>
        <div>
          <label htmlFor={emailId} className="mb-1.5 block text-[14px] font-semibold text-white">
            Work email <span className="text-[#f5d394]">*</span>
          </label>
          <input id={emailId} name="email" type="email" required autoComplete="email" className={controlClass} />
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <label htmlFor={websiteId} className="mb-1.5 block text-[14px] font-semibold text-white">
            Website
          </label>
          <input id={websiteId} name="website" type="url" inputMode="url" placeholder="https://" className={controlClass} />
        </div>
        <div className="col-span-2 max-sm:col-span-1">
          <label htmlFor={detailId} className="mb-1.5 block text-[14px] font-semibold text-white">
            {prompt} <span className="text-[#f5d394]">*</span>
          </label>
          <textarea id={detailId} name="details" required rows={4} className={`${controlClass} min-h-32 py-3 leading-relaxed`} />
        </div>
      </div>
      <button
        type="submit"
        className="button-motion group mt-5 inline-flex min-h-12 items-center gap-2 rounded-button bg-[#f2c675] px-6 py-4 text-[17px] font-semibold text-ink hover:bg-white max-sm:w-full max-sm:justify-center"
      >
        {submitLabel}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="mt-4 text-[13.5px] leading-relaxed text-white/55">
        We use your details only to respond to this enquiry. No mailing-list opt-in is assumed.
      </p>
    </form>
  );
}
