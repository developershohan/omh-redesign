"use client";

import { useId, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ServiceBand } from "@/components/services/ServiceBand";
import { ArrowRight } from "@/components/ui/Button";
import { company } from "@/lib/content/nav";
import { Honeypot, sendEnquiry } from "@/lib/send-enquiry";
import type { QuoteField, QuoteFormPage as PageData } from "@/lib/content/quote-forms";

/*
  One renderer for all nine legacy quote/questionnaire pages (Phase 5).

  One shell for all nine: a single band with the page copy on the left and the
  form card on the right. No media placeholder — on a page whose whole job is the
  form, the form is the thing to show. The plan's "no two pages share a layout"
  rule is deliberately overridden here (user directive, 19 Aug 2026): these are
  funnel pages, and one predictable form layout beats variety.

  The card holds one of two forms, picked by how much the live form asks for:

  - **2 groups** (the six quote pages): every field in one list.
  - **3+ groups** (the three questionnaires): the live forms ask 25–34 questions
    in one unbroken column, which ran 8 screens. They run a step at a time with a
    progress bar, validating each step before it advances.

  Validation is the browser's own constraint validation, driven manually:
  `noValidate` on the form (so hidden later steps can't block submit), then
  `checkValidity()`/`reportValidity()` on the visible step's controls. There is no
  submission endpoint in this codebase, so a valid submit confirms inline — or
  pushes to `thankYou` once Phase 6 builds the live thank-you pages.

  Scaffold rule: every section is a `ServiceBand`, never mixed with the
  margin-label `Section`.
*/

const controlCls =
  "min-h-12 w-full rounded-input border-[1.5px] border-line bg-surface px-3.5 text-body text-ink placeholder:text-muted/70 focus-visible:border-teal";

function RequiredMark() {
  return (
    <span className="text-error" aria-hidden>
      {" "}
      *
    </span>
  );
}

/* Browsers fill these from the user's saved details — the single cheapest
   usability win on a contact-detail form. */
function autoCompleteFor(field: QuoteField): string | undefined {
  if (field.kind === "email") return "email";
  if (field.kind === "tel") return "tel";
  const label = field.label.toLowerCase();
  if (label.startsWith("first name")) return "given-name";
  if (label.startsWith("last name")) return "family-name";
  if (label.includes("name")) return "name";
  return undefined;
}

function Control({ field }: { field: QuoteField }) {
  const id = useId();

  if (field.kind === "textarea") {
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id} className="text-label font-semibold text-ink">
          {field.label}
          {field.required && <RequiredMark />}
        </label>
        <textarea
          id={id}
          name={field.label}
          rows={3}
          required={field.required}
          className={`${controlCls} min-h-24 py-3 leading-relaxed`}
        />
      </div>
    );
  }

  /* Packages are priced choices, not a list to hunt through in a dropdown —
     every option and its price stays visible and is a full-size tap target. */
  if (field.kind === "select") {
    return (
      <fieldset className="flex flex-col gap-3">
        <legend className="mb-3 text-label font-semibold text-ink">
          {field.label}
          {field.required && <RequiredMark />}
        </legend>
        <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
          {field.options.map((option, i) => (
            <label
              key={option}
              className="flex min-h-14 cursor-pointer items-center gap-3 rounded-input border-[1.5px] border-line bg-surface px-4 py-3 text-body leading-snug text-ink/85 transition-colors hover:border-teal has-[:checked]:border-teal has-[:checked]:bg-tint-amber"
            >
              <input
                type="radio"
                name={field.label}
                value={option}
                required={field.required && i === 0}
                className="size-4.5 shrink-0 accent-teal"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>
    );
  }

  if (field.kind === "checkbox") {
    return (
      <fieldset>
        <legend className="mb-3 text-label font-semibold text-ink">{field.label}</legend>
        <div className="flex flex-wrap gap-2.5">
          {field.options.map((option) => (
            <label
              key={option}
              className="flex min-h-11 cursor-pointer items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2 text-body text-ink/80 transition-colors hover:border-teal has-[:checked]:border-teal has-[:checked]:bg-tint-amber"
            >
              <input type="checkbox" name={field.label} value={option} className="size-4 accent-teal" />
              {option}
            </label>
          ))}
        </div>
      </fieldset>
    );
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-label font-semibold text-ink">
        {field.label}
        {field.required && <RequiredMark />}
      </label>
      <input
        id={id}
        name={field.label}
        type={field.kind}
        required={field.required}
        autoComplete={autoCompleteFor(field)}
        className={controlCls}
      />
    </div>
  );
}

/* Short answers pair up on wide screens; anything with a long control or a long
   question runs full width so the label never wraps into a two-line stub. */
function isWide(field: QuoteField) {
  return field.kind !== "text" && field.kind !== "email" && field.kind !== "tel";
}

function FieldGrid({ fields }: { fields: QuoteField[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-7 gap-y-6 max-sm:grid-cols-1">
      {fields.map((field) => (
        <div key={field.label} className={isWide(field) ? "col-span-2 max-sm:col-span-1" : undefined}>
          <Control field={field} />
        </div>
      ))}
    </div>
  );
}

function SubmitButton({ children, pending }: { children: React.ReactNode; pending?: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="button-motion group inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-button border-[1.5px] border-transparent bg-teal px-6 py-4 text-body font-semibold leading-none text-white hover:bg-teal-dark disabled:cursor-wait disabled:opacity-70 max-sm:w-full max-sm:justify-center"
    >
      {pending ? "Sending…" : children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

function FormError({ message }: { message: string }) {
  return (
    <p role="alert" className="mt-5 flex items-start gap-2 text-body font-medium text-error">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="mt-0.5 size-5 shrink-0" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4m0 4h.01" />
      </svg>
      {message}
    </p>
  );
}

function Notes({ page }: { page: PageData }) {
  return (
    <div className="mt-7 border-t border-line pt-6">
      {page.notes?.map((note) => (
        <p key={note} className="text-bsm text-muted">
          {note}
        </p>
      ))}
      <p className="mt-3 text-bsm text-muted">We only use your details to respond to this enquiry.</p>
    </div>
  );
}

function Sent({ onReset }: { onReset: () => void }) {
  return (
    <div className="rounded-card border border-teal/25 bg-soft/50 p-9 max-sm:p-6" role="status">
      <h2 className="font-sans text-h3 font-semibold">Thanks — that&apos;s with us.</h2>
      <p className="mt-3 max-w-[48ch] text-body leading-relaxed text-ink/75">
        A real person will read this and come back with the quote and the next step. If it&apos;s
        urgent, call us on{" "}
        <Link href={company.phoneHref} className="font-semibold text-ink hover:text-amber-deep">
          {company.phoneDisplay}
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 cursor-pointer text-body font-semibold text-amber-deep underline underline-offset-4"
      >
        Send another enquiry
      </button>
    </div>
  );
}

function HeroCopy({ page }: { page: PageData }) {
  return (
    <>
      <h1 className="font-sans text-h1 font-semibold text-balance">{page.title}</h1>
      <p className="mt-6 max-w-[54ch] text-lead leading-relaxed text-ink/75">{page.intro}</p>
      <p className="mt-7 font-sans text-h4 font-semibold text-balance">
        <Link href={company.phoneHref} className="hover:text-amber-deep">
          {page.callHeading}
        </Link>
      </p>
    </>
  );
}

/* ---------------------------------------------------------------- short form */

function CompactForm({ page }: { page: PageData }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const fields = page.groups.flatMap((group) => group.fields);
  const hasRequired = fields.some((f) => f.kind !== "checkbox" && f.required);

  if (sent) return <Sent onReset={() => setSent(false)} />;

  return (
    <form
      data-event={`${page.slug.replace(/-/g, "_")}_form_submit`}
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setSending(true);
        setError(null);
        const result = await sendEnquiry(form, page.seo.title);
        setSending(false);
        // On failure the answers stay on screen — never lose what was typed.
        if (!result.ok) return setError(result.message);
        if (page.thankYou) router.push(page.thankYou);
        else setSent(true);
      }}
      className="rounded-card border border-line bg-surface p-9 max-sm:p-6"
    >
      {hasRequired && (
        <p className="mb-7 text-bsm text-muted">
          Fields marked <span className="font-semibold text-error">*</span> are required.
        </p>
      )}
      <div className="flex flex-col gap-8">
        {page.groups.map((group) => (
          <FieldGrid key={group.label} fields={group.fields} />
        ))}
      </div>
      <Honeypot />
      <div className="mt-9">
        <SubmitButton pending={sending}>{page.submitLabel}</SubmitButton>
        {error && <FormError message={error} />}
        <Notes page={page} />
      </div>
    </form>
  );
}

/* ----------------------------------------------------------- long form steps */

function SteppedForm({ page }: { page: PageData }) {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const total = page.groups.length;
  const isLast = step === total - 1;

  // Validates one step's controls by hand. The form is `noValidate` because a
  // required control inside a hidden later step would otherwise block submit
  // with an unfocusable-control error.
  function stepIsValid(index: number) {
    const node = stepRefs.current[index];
    if (!node) return true;
    const controls = node.querySelectorAll<HTMLInputElement>("input, select, textarea");
    for (const control of controls) {
      if (!control.checkValidity()) {
        if (index === step) control.reportValidity();
        return false;
      }
    }
    return true;
  }

  function goTo(next: number) {
    setStep(next);
    cardRef.current?.scrollIntoView({ block: "start" });
  }

  if (sent) return <Sent onReset={() => { setSent(false); setStep(0); }} />;

  return (
    <form
      noValidate
      data-event={`${page.slug.replace(/-/g, "_")}_form_submit`}
      onSubmit={async (e) => {
        e.preventDefault();
        // Belt and braces: an earlier step can only be invalid if the user got
        // past it before answering, but jump back to it rather than dropping it.
        const firstInvalid = page.groups.findIndex((_, i) => !stepIsValid(i));
        if (firstInvalid !== -1) {
          goTo(firstInvalid);
          return;
        }
        const form = e.currentTarget;
        setSending(true);
        setError(null);
        const result = await sendEnquiry(form, page.seo.title);
        setSending(false);
        // 25-34 answers are far too much to lose — keep them on screen and let
        // the visitor retry.
        if (!result.ok) return setError(result.message);
        if (page.thankYou) router.push(page.thankYou);
        else setSent(true);
      }}
    >
      <div
        ref={cardRef}
        className="scroll-mt-28 rounded-card border border-line bg-surface p-9 max-sm:p-6"
      >
        <div className="border-b border-line pb-6">
          <div className="flex items-baseline justify-between gap-6">
            <p className="text-label font-semibold text-ink">{page.groups[step].label}</p>
            <p className="shrink-0 text-bsm font-semibold tabular-nums text-muted">
              Step {step + 1} of {total}
            </p>
          </div>
          <div
            role="progressbar"
            aria-valuenow={step + 1}
            aria-valuemin={1}
            aria-valuemax={total}
            aria-label="Form progress"
            className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-line"
          >
            <div
              className="h-full rounded-full bg-teal transition-[width] duration-300"
              style={{ width: `${((step + 1) / total) * 100}%` }}
            />
          </div>
          <p className="mt-4 text-bsm text-muted">
            Fields marked <span className="font-semibold text-error">*</span> are required. Nothing
            is sent until the last step.
          </p>
        </div>

        <Honeypot />
        <div className="pt-8">
          {page.groups.map((group, i) => (
            <div
              key={group.label}
              ref={(node) => {
                stepRefs.current[i] = node;
              }}
              hidden={i !== step}
            >
              <FieldGrid fields={group.fields} />
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-4 border-t border-line pt-7 max-sm:flex-col-reverse max-sm:items-stretch">
          {step > 0 && (
            <button
              type="button"
              onClick={() => goTo(step - 1)}
              className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-button border-[1.5px] border-line px-6 py-4 text-body font-semibold leading-none text-ink hover:border-ink/40"
            >
              Back
            </button>
          )}
          {isLast ? (
            <SubmitButton pending={sending}>{page.submitLabel}</SubmitButton>
          ) : (
            <button
              type="button"
              onClick={() => {
                if (stepIsValid(step)) goTo(step + 1);
              }}
              className="button-motion group inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-button border-[1.5px] border-transparent bg-teal px-6 py-4 text-body font-semibold leading-none text-white hover:bg-teal-dark max-sm:w-full max-sm:justify-center"
            >
              Continue
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          )}
        </div>
        {error && <FormError message={error} />}
        {isLast && <Notes page={page} />}
      </div>
    </form>
  );
}

/* ---------------------------------------------------------------------- page */

export function QuoteFormPage({ page }: { page: PageData }) {
  const { design } = page;
  // One layout for all nine (user directive, 19 Aug 2026): copy left, form
  // right, one band. The questionnaires differ only inside the card, where
  // 25–34 questions run as steps instead of one list.
  const form = page.groups.length >= 3 ? <SteppedForm page={page} /> : <CompactForm page={page} />;
  const label = page.slug.endsWith("questionnaire") ? "Questionnaire" : "Request a quote";

  return (
    <main>
      <ServiceBand
        label={label}
        tone="warm"
        accent={design.accent}
        labelStyle={design.labelStyle}
        index={1}
      >
        <div className="grid grid-cols-12 items-start gap-x-12 gap-y-11 max-lg:block">
          <div className="col-span-5 lg:sticky lg:top-28">
            <HeroCopy page={page} />
          </div>
          <div className="col-span-7 max-lg:mt-11">{form}</div>
        </div>
      </ServiceBand>
    </main>
  );
}
