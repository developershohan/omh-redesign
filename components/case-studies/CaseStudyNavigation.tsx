import Link from "next/link";
import { ArrowRight } from "@/components/ui/Button";
import { caseStudies, type CaseStudy } from "@/lib/content/case-studies";

export function CaseStudyNavigation({ study }: { study: CaseStudy }) {
  const index = caseStudies.indexOf(study);
  const previous = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <nav aria-label="Case study navigation" className="border-b border-line bg-warm">
      <div className="container-omh py-9">
        <div className="grid grid-cols-2 border border-line bg-surface max-sm:grid-cols-1">
          <Link
            href={`/case-studies/${previous.slug}`}
            className="group flex items-center gap-4 p-6 transition-colors hover:bg-warm max-sm:border-b max-sm:border-line"
          >
            <ArrowRight
              className="size-5 shrink-0 rotate-180 text-amber-deep transition-transform duration-500 group-hover:-translate-x-1"
            />
            <span className="min-w-0">
              <span className="block text-[13px] font-semibold uppercase tracking-[0.13em] text-muted">
                Previous project
              </span>
              <span className="mt-1.5 block font-sans text-h4 font-semibold">
                {previous.shortTitle}
              </span>
              <span className="mt-1 block text-[14px] text-muted">
                {previous.category} · {previous.sector}
              </span>
            </span>
          </Link>

          <Link
            href={`/case-studies/${next.slug}`}
            className="group flex items-center justify-end gap-4 border-l border-line p-6 text-right transition-colors hover:bg-warm max-sm:justify-start max-sm:border-l-0 max-sm:text-left"
          >
            <span className="min-w-0 max-sm:order-first">
              <span className="block text-[13px] font-semibold uppercase tracking-[0.13em] text-muted">
                Next project
              </span>
              <span className="mt-1.5 block font-sans text-h4 font-semibold">{next.shortTitle}</span>
              <span className="mt-1 block text-[14px] text-muted">
                {next.category} · {next.sector}
              </span>
            </span>
            <ArrowRight
              className="size-5 shrink-0 text-amber-deep transition-transform duration-500 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <p className="mt-5 text-[14px] text-muted">
          <a
            href={study.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline underline-offset-4 hover:text-amber-deep"
          >
            View the live project
          </a>{" "}
          <span aria-hidden>·</span> Opens on onlinemarketinghelp.co.uk
        </p>
      </div>
    </nav>
  );
}
