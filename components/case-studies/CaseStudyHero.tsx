import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CaseStudyVisual } from "@/components/case-studies/CaseStudyVisual";
import { caseStudyServices, type CaseStudy } from "@/lib/content/case-studies";

export function CaseStudyHero({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <header className="border-b border-line bg-surface">
      <div className="container-omh section-md">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-9 flex items-center gap-2 text-[14px] text-muted">
            <Link href="/case-studies" className="hover:text-amber-deep hover:underline underline-offset-4">
              Case Studies
            </Link>
            <span aria-hidden>/</span>
            <span>{study.shortTitle}</span>
          </nav>

          <div className="grid grid-cols-12 items-center gap-x-12 gap-y-10 max-lg:block">
            <div className="col-span-6 max-lg:mb-10">
              <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-amber-deep">
                {study.category}
                <span className="text-muted"> · {study.sector}</span>
              </p>
              <h1 className="mt-6 max-w-[18ch] font-sans text-h1 font-semibold text-balance">
                {study.title}
              </h1>
              <p className="mt-6 max-w-[54ch] text-body leading-relaxed text-ink/72">{study.lede}</p>

              <ul className="mt-9 flex flex-wrap gap-2">
                {study.serviceIds.map((serviceId) => (
                  <li
                    key={serviceId}
                    className="rounded-full border border-line bg-warm px-3.5 py-1.5 text-[14px] font-medium text-ink/70"
                  >
                    {caseStudyServices[serviceId].label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-6">
              <CaseStudyVisual study={study} index={index} ratio="5/4" />
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  );
}

export function CaseStudyOverview({ study }: { study: CaseStudy }) {
  const facts = [
    ["Client", study.client],
    ["Sector", study.sector],
    ["Service", study.category === "SEO" ? "Search Engine Optimisation" : "Website Development"],
    ["Duration", study.duration],
    ["Objective", study.objective],
  ] as const;

  return (
    <section className="border-b border-line bg-warm" aria-label="Project overview">
      <div className="container-omh py-10">
        <dl className="grid grid-cols-6 gap-x-8 gap-y-7 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {facts.map(([label, value]) => (
            <div
              key={label}
              className={`border-l border-line pl-6 max-sm:border-l-0 max-sm:pl-0 ${
                label === "Objective" ? "col-span-2 max-lg:col-span-full" : ""
              }`}
            >
              <dt className="text-[13px] font-semibold uppercase tracking-[0.13em] text-muted">
                {label}
              </dt>
              <dd className="mt-2 text-body leading-snug font-medium text-ink/85">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
