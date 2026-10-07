import Link from "next/link";
import { caseStudyServices, type CaseStudy } from "@/lib/content/case-studies";

// Results on the homepage's ink band: the lead figure large in the light-amber
// accent, the rest in a ruled grid. Studies without published figures skip it.
export function CaseStudyResults({ study }: { study: CaseStudy }) {
  if (!study.results.length) return null;
  const headline = study.results.find((result) => result.value.includes("%")) ?? study.results[0];
  const rest = study.results.filter((result) => result !== headline);
  return (
    <section id="results" aria-labelledby="results-heading" className="dark-grid scroll-mt-28 bg-inverse text-oninverse">
      <div className="container-omh section-md">
        <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-amber">Results</p>
        <h2 id="results-heading" className="mt-5 max-w-[22ch] font-sans text-h2 font-semibold text-balance">
          What changed for {study.client}
        </h2>
        <div className="mt-12 grid gap-x-16 gap-y-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-center lg:border-r lg:border-oninverse/15 lg:pr-14">
            <p className="font-sans text-[clamp(72px,9vw,128px)] font-semibold leading-none text-[#f2c675]">{headline.value}</p>
            <p className="mt-5 max-w-[24ch] font-sans text-h4 font-semibold">{headline.label}</p>
            {headline.context && <p className="mt-3 text-body leading-relaxed text-oninverse/70">{headline.context}</p>}
          </div>
          {rest.length > 0 && (
            <dl className="grid gap-px self-start overflow-hidden rounded-card border border-oninverse/15 bg-oninverse/15 sm:grid-cols-2">
              {rest.map((result, index) => (
                <div
                  key={result.label}
                  className={`flex flex-col bg-inverse p-6 ${rest.length % 2 && index === rest.length - 1 ? "sm:col-span-2" : ""}`}
                >
                  <dt className="mt-2 text-body leading-snug text-oninverse/70">
                    {result.label}
                    {result.context && <span className="mt-1 block text-oninverse/55">{result.context}</span>}
                  </dt>
                  <dd className="order-first font-sans text-h3 font-semibold">{result.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        <p className="mt-12 border-t border-oninverse/15 pt-5 text-body text-oninverse/60">
          Figures as reported for this project. They are not a forecast for another business.
        </p>
      </div>
    </section>
  );
}

export function CaseStudyTestimonial({ study }: { study: CaseStudy }) {
  if (!study.testimonial) return null;
  return (
    <section id="client-feedback" aria-label="Client feedback" className="scroll-mt-28 border-b border-line bg-surface">
      <div className="container-omh section-md">
        <figure className="mx-auto max-w-[62ch] text-center">
          <span aria-hidden className="block font-serif text-[72px] leading-none text-amber">“</span>
          <blockquote className="mt-2 font-serif text-[clamp(24px,2.3vw,34px)] leading-snug text-ink text-balance">
            {study.testimonial.quote}
          </blockquote>
          <figcaption className="mt-8">
            <span className="block font-sans text-body font-semibold">{study.testimonial.attribution ?? study.client}</span>
            {study.testimonial.attribution && <span className="mt-1 block text-body text-muted">{study.client}</span>}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function CaseStudyServices({ study }: { study: CaseStudy }) {
  if (!study.serviceIds.length) return null;
  return (
    <section aria-labelledby="case-services-heading" className="border-b border-line bg-warm">
      <div className="container-omh flex flex-wrap items-center gap-x-10 gap-y-5 py-12">
        <h2 id="case-services-heading" className="font-sans text-h4 font-semibold">
          Services in this project
        </h2>
        <ul className="flex flex-wrap gap-2.5">
          {study.serviceIds.map((id) => (
            <li key={id}>
              <Link
                href={caseStudyServices[id].href}
                className="inline-flex min-h-11 items-center rounded-full border border-line bg-surface px-5 text-body font-semibold text-ink transition-colors hover:border-amber hover:text-amber-deep"
              >
                {caseStudyServices[id].label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
