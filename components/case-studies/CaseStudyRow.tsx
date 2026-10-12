import Link from "next/link";
import { CaseStudyVisual } from "@/components/case-studies/CaseStudyVisual";
import { ArrowRight } from "@/components/ui/Button";
import { cardResults, type CaseStudy } from "@/lib/content/case-studies";

// Archive card, outcome-led (case studies SEO brief, Oct 2026): service + sector,
// client, outcome title, then the business result before the traffic metric.
// Studies without published results show the objective, so no figure is invented.
export function CaseStudyRow({ study }: { study: CaseStudy }) {
  const metrics = cardResults(study).slice(0, 2);
  // The card title reads "Client: outcome"; the client sits on its own line, and the
  // colon stays in the heading text for search engines and screen readers.
  const split = study.card.title.indexOf(": ");
  const [name, outcome] = split > 0 ? [study.card.title.slice(0, split), study.card.title.slice(split + 2)] : [study.client, study.card.title];
  return (
    <article data-case-study={study.slug} className="min-w-0">
      <Link
        href={`/case-studies/${study.slug}`}
        data-event="case_study_card_click"
        data-case-study={study.slug}
        className="surface-card group flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
      >
        <CaseStudyVisual study={study} ratio="16/10" frameClassName="rounded-none" />
        <div className="flex flex-1 flex-col p-7 max-sm:p-6">
          <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-amber-deep">
            {study.category} · {study.sector}
          </p>
          <h3 className="mt-3">
            <span className="block text-body font-semibold text-muted">{name}</span>
            <span className="sr-only">: </span>
            <span className="mt-1.5 block font-sans text-h4 font-semibold text-balance">{outcome}</span>
          </h3>
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
            Read the Case Study
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}
