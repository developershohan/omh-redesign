import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CaseStudyVisual } from "@/components/case-studies/CaseStudyVisual";
import { ArrowRight } from "@/components/ui/Button";
import { caseStudyServices, type CaseStudy } from "@/lib/content/case-studies";

/*
  One project per full-width row, alternating sides on desktop (brief §3).
  On mobile and tablet the visual always comes first — the order never flips,
  so the page reads image → context → proof → action every time.
*/
export function CaseStudyRow({ study, index }: { study: CaseStudy; index: number }) {
  const flipped = index % 2 === 1;
  const metrics = study.results.slice(0, 3);

  return (
    <Reveal>
      <article className="grid grid-cols-12 items-center gap-x-12 gap-y-8 border-t border-line py-[clamp(48px,4vw,72px)] max-lg:block">
        <div className={`col-span-6 ${flipped ? "lg:order-2" : ""}`}>
          <Link
            href={`/case-studies/${study.slug}`}
            tabIndex={-1}
            aria-hidden
            className="block"
          >
            <CaseStudyVisual study={study} index={index} />
          </Link>
        </div>

        <div className={`col-span-6 max-lg:mt-9 ${flipped ? "lg:order-1" : ""}`}>
          <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-amber-deep">
            {study.category}
            <span className="text-muted"> · {study.sector}</span>
          </p>
          <h2 className="mt-5 max-w-[20ch] font-sans text-h3 font-semibold text-balance">
            <Link
              href={`/case-studies/${study.slug}`}
              data-event="case_study_card_click"
              data-case-study={study.slug}
              className="hover:text-amber-deep hover:underline underline-offset-[6px]"
            >
              {study.title}
            </Link>
          </h2>
          <p className="mt-5 max-w-[52ch] text-body leading-relaxed text-ink/72">{study.lede}</p>

          {metrics.length > 0 && (
          <dl className="mt-8 grid grid-cols-3 gap-x-6 gap-y-5 border-y border-line py-6 max-sm:grid-cols-1">
            {metrics.map((metric) => (
              <div key={`${metric.value}-${metric.label}`}>
                <dt className="font-sans text-[clamp(24px,20px+0.8vw,30px)] font-semibold leading-none text-ink">
                  {metric.value}
                </dt>
                <dd className="mt-2 text-body leading-snug text-muted">{metric.label}</dd>
              </div>
            ))}
          </dl>
          )}

          {study.serviceIds.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {study.serviceIds.map((serviceId) => (
              <li
                key={serviceId}
                className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[14px] font-medium text-ink/70"
              >
                {caseStudyServices[serviceId].label}
              </li>
            ))}
          </ul>
          )}

          <Link
            href={`/case-studies/${study.slug}`}
            data-event="case_study_row_cta_click"
            data-case-study={study.slug}
            className="group mt-8 inline-flex items-center gap-2 text-body font-semibold text-amber-deep hover:underline underline-offset-4"
          >
            View case study
            <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
