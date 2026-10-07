import Link from "next/link";
import { CaseStudyVisual } from "@/components/case-studies/CaseStudyVisual";
import { caseStudyServices, type CaseStudy } from "@/lib/content/case-studies";

export function CaseStudyResults({ study }: { study: CaseStudy }) {
  if (!study.results.length) return null;
  const headline = study.results.find(result => result.value.includes("%")) ?? study.results[0];
  return (
    <section id="results" className="scroll-mt-28 bg-[#253e3b] text-white">
      <div className="container-omh py-12 sm:py-20">
        <h2 className="font-sans text-h2 font-semibold">Published results</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col justify-center border-b border-white/25 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
            <p className="font-sans text-[clamp(72px,10vw,144px)] font-semibold leading-none tracking-tight text-[#f2c675]">{headline.value}</p>
            <p className="mt-5 max-w-[28ch] text-[22px] leading-relaxed">{headline.label}</p>
            {headline.context && <p className="mt-3 text-base leading-relaxed text-white/75">{headline.context}</p>}
          </div>
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {study.results.filter(result => result !== headline).map(result => <div key={result.label} className="border-t border-white/25 pt-5"><dt className="text-base leading-relaxed text-white/75">{result.label}</dt><dd className="mt-3 font-sans text-[clamp(30px,3vw,44px)] font-semibold leading-tight">{result.value}</dd>{result.context && <dd className="mt-2 text-base leading-relaxed text-white/75">{result.context}</dd>}</div>)}
          </dl>
        </div>
        <p className="mt-10 max-w-[80ch] border-t border-white/25 pt-5 text-base leading-relaxed text-white/75">Figures reproduced from the original case study. Its published material does not provide a complete baseline, measurement period and analytics source for independent verification.</p>
      </div>
    </section>
  );
}

export function CaseStudyTestimonial({ study }: { study: CaseStudy }) {
  if (!study.testimonial) return null;
  return (
    <section id="client-feedback" className="scroll-mt-28 bg-surface">
      <div className="container-omh grid items-center gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-20">
        <CaseStudyVisual study={study} ratio="4/3" caption />
        <div><h2 className="text-base font-medium text-muted">Client feedback</h2><blockquote className="mt-6 max-w-[56ch] font-serif text-[clamp(23px,2.2vw,32px)] leading-relaxed">“{study.testimonial.quote}”</blockquote><p className="mt-6 text-base font-semibold">{study.testimonial.attribution ?? study.client}</p>{study.testimonial.attribution && <p className="mt-1 text-base text-muted">{study.client}</p>}</div>
      </div>
    </section>
  );
}

export function CaseStudyServices({ study }: { study: CaseStudy }) {
  if (!study.serviceIds.length) return null;
  return (
    <section className="border-t border-line bg-surface">
      <div className="container-omh py-9"><h2 className="font-sans text-xl font-semibold">Explore these services</h2><ul className="mt-4 flex flex-wrap gap-x-7 gap-y-3 text-base">{study.serviceIds.map(id => <li key={id}><Link href={caseStudyServices[id].href} className="inline-flex min-h-11 items-center font-medium text-amber-deep underline underline-offset-4">{caseStudyServices[id].label}</Link></li>)}</ul></div>
    </section>
  );
}
