import Link from "next/link";
import { CaseStudyVisual } from "@/components/case-studies/CaseStudyVisual";
import type { CaseStudy } from "@/lib/content/case-studies";

export function CaseStudyRow({ study }: { study: CaseStudy }) {
  const result = study.results.find(result => /%|st\b/.test(result.value));
  return (
    <article data-case-study={study.slug} className="min-w-0">
      <Link href={`/case-studies/${study.slug}`} className="group block rounded-[4px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber" data-event="case_study_card_click" data-case-study={study.slug}>
        <CaseStudyVisual study={study} />
        <p className="mt-5 text-base text-muted">{study.category} / <span className="normal-case">{study.sector}</span></p>
        <h2 className="mt-2 font-sans text-[clamp(24px,2.2vw,32px)] font-semibold leading-tight text-ink group-hover:underline underline-offset-4">{study.client}</h2>
        <p className="mt-3 max-w-[58ch] text-body leading-relaxed text-ink/75">{study.title}</p>
        <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-5 gap-y-3 border-t border-line pt-4">
          {result ? <p className="max-w-[40ch] text-base leading-relaxed text-muted"><strong className="mr-2 text-xl font-semibold text-ink">{result.value}</strong>{result.label}</p> : <p className="text-base text-muted">{study.category === "Design" ? "Creative brief and delivery" : "Project brief and delivery"}</p>}
          <span className="text-base font-semibold text-amber-deep underline underline-offset-4">Read the project</span>
        </div>
      </Link>
    </article>
  );
}
