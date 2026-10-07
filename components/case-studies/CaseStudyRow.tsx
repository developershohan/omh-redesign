import Link from "next/link";
import { CaseStudyVisual } from "@/components/case-studies/CaseStudyVisual";
import { ArrowRight } from "@/components/ui/Button";
import type { CaseStudy } from "@/lib/content/case-studies";

// Archive card: sector photo with the service on it, then the client, the
// project and its two lead results. Studies without published results (the
// four legacy pages) show the objective instead, so no figure is invented.
export function CaseStudyRow({ study }: { study: CaseStudy }) {
  // Percentages lead; a duration such as "6 months" only fills a gap.
  const metrics = study.results
    .filter((result) => /\d/.test(result.value))
    .sort((a, b) => Number(b.value.endsWith("%")) - Number(a.value.endsWith("%")))
    .slice(0, 2);
  return (
    <article data-case-study={study.slug} className="min-w-0">
      <Link
        href={`/case-studies/${study.slug}`}
        data-event="case_study_card_click"
        data-case-study={study.slug}
        className="surface-card group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
      >
        <div className="relative">
          <CaseStudyVisual study={study} ratio="16/10" frameClassName="rounded-none" />
          <span className="absolute left-4 top-4 rounded-full bg-surface/95 px-3.5 py-1.5 text-[14px] font-semibold uppercase tracking-[0.12em] text-ink">
            {study.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-7 max-sm:p-6">
          <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-amber-deep">{study.sector}</p>
          <h3 className="mt-3 font-sans text-h4 font-semibold">{study.client}</h3>
          <p className="mt-2 text-body leading-relaxed text-ink/75">{study.title}</p>
          {metrics.length > 0 ? (
            <dl className="mt-6 grid grid-cols-2 gap-5 border-t border-line pt-5">
              {metrics.map((result) => (
                <div key={result.label} className="flex flex-col">
                  <dt className="mt-1.5 text-body leading-snug text-muted">{result.label}</dt>
                  <dd className="order-first font-sans text-h3 font-semibold text-ink">{result.value}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="mt-6 line-clamp-3 border-t border-line pt-5 text-body leading-relaxed text-muted">{study.objective}</p>
          )}
          <span className="mt-auto inline-flex items-center gap-2 pt-7 font-semibold text-amber-deep">
            Read the case study
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}
