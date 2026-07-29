import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { HighlightedText } from "@/components/services/ServicePrimitives";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/content/nav";

type CtaAction = {
  label: ReactNode;
  event: string;
  href?: string;
};

export function ServiceNextStepsCTA({
  title,
  titleAccent,
  body,
  primary,
  secondary,
  phoneEvent,
  emailEvent,
  steps,
}: {
  title: string;
  titleAccent?: string;
  body: ReactNode;
  primary: CtaAction;
  secondary: CtaAction;
  phoneEvent: string;
  emailEvent: string;
  steps: readonly string[];
}) {
  return (
    <section className="bg-ink text-white">
      <div className="container-omh section-md grid grid-cols-12 items-start gap-x-10 gap-y-10 max-lg:block">
        <Reveal className="col-span-7">
          <h2 className="mb-5 max-w-[20ch] font-serif text-[clamp(30px,24px+1.6vw,42px)] font-normal leading-tight tracking-normal">
            <HighlightedText
              text={title}
              highlight={titleAccent}
              highlightClassName="text-[#f2c675]"
            />
          </h2>
          <p className="mb-9 max-w-[56ch] text-lead leading-relaxed text-white/75">{body}</p>
          <div className="flex flex-wrap items-center gap-3.5 max-sm:flex-col max-sm:items-stretch">
            <Button
              href={primary.href ?? "/contact"}
              variant="inverse"
              arrow
              data-event={primary.event}
            >
              {primary.label}
            </Button>
            <Button
              href={secondary.href ?? "/contact"}
              variant="ghost-white"
              data-event={secondary.event}
            >
              {secondary.label}
            </Button>
          </div>
          <p className="mt-8 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-bsm text-white/65">
            <Link
              href={company.phoneHref}
              data-event={phoneEvent}
              className="underline underline-offset-4"
            >
              {company.phoneDisplay}
            </Link>
            <span aria-hidden className="text-white/35 max-sm:hidden">
              /
            </span>
            <Link
              href={`mailto:${company.email}`}
              data-event={emailEvent}
              className="break-all underline underline-offset-4 max-sm:basis-full"
            >
              {company.email}
            </Link>
          </p>
        </Reveal>

        <Reveal className="col-span-4 col-start-9 max-lg:mt-10">
          <div className="rounded-card border border-white/15 bg-white/[0.04] p-8 max-sm:p-6">
            <p className="mb-6 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-white/55">
              What happens next
            </p>
            <ol className="grid gap-5">
              {steps.map((step, index) => (
                <li key={step} className="grid grid-cols-[auto_1fr] items-start gap-4">
                  <span
                    aria-hidden
                    className="flex size-7 items-center justify-center rounded-full border border-white/25 font-sans text-[13px] font-semibold tabular-nums text-white/80"
                  >
                    {index + 1}
                  </span>
                  <span className="text-[16px] leading-snug text-white/85">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
