import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Proof";
import { caseStudyServices, type CaseStudy } from "@/lib/content/case-studies";

export function CaseStudyResults({ study }: { study: CaseStudy }) {
  return (
    <section className="bg-inverse text-oninverse">
      <div className="container-omh section-md">
        <Reveal>
          <div className="max-w-[42ch]">
            <Eyebrow light>The results</Eyebrow>
            <h2 className="mt-6 font-sans text-h2 font-semibold text-balance">What changed.</h2>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-x-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {study.results.map((result) => (
              <div
                key={`${result.value}-${result.label}`}
                className="border-t border-oninverse/15 py-8 pr-6"
              >
                <dt className="font-sans text-[clamp(38px,30px+1.8vw,56px)] font-semibold leading-none text-[#f2c675]">
                  {result.value}
                </dt>
                <dd className="mt-4 max-w-[26ch] text-body leading-snug text-oninverse/70">
                  {result.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export function CaseStudyTestimonial({ study }: { study: CaseStudy }) {
  if (!study.testimonial) return null;
  return (
    <section className="border-b border-line bg-soft">
      <div className="container-omh section-md">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-12 gap-y-8 max-lg:block">
            <p className="col-span-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-muted">
              In their words
            </p>
            <div className="col-span-8 max-lg:mt-8">
              <blockquote className="max-w-[42ch] text-[clamp(26px,21px+1.35vw,38px)] leading-tight text-ink/90">
                “{study.testimonial.quote}”
              </blockquote>
              <p className="mt-7 text-body font-semibold text-ink/70">
                {study.testimonial.attribution}
                <span className="block font-normal text-muted">{study.client}</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CaseStudyServices({ study }: { study: CaseStudy }) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-omh section-md">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-12 gap-y-8 max-lg:block">
            <div className="col-span-4 max-lg:mb-9">
              <Eyebrow>Connected services</Eyebrow>
              <h2 className="mt-6 max-w-[16ch] font-sans text-h3 font-semibold text-balance">
                Follow the workstream, not just the result headline.
              </h2>
            </div>
            <ul className="col-span-7 col-start-6 border-t border-line">
              {study.serviceIds.map((serviceId) => {
                const service = caseStudyServices[serviceId];
                return (
                  <li key={serviceId}>
                    <Link
                      href={service.href}
                      className="service-row group flex items-center justify-between gap-6 border-b border-line py-5"
                    >
                      <span className="font-sans text-h4 font-semibold">{service.label}</span>
                      <ArrowRight className="size-5 shrink-0 text-amber-deep transition-transform duration-500 group-hover:translate-x-1" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
