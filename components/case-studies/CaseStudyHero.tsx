import Link from "next/link";
import { CaseStudyVisual } from "@/components/case-studies/CaseStudyVisual";
import { caseStudyServices, type CaseStudy } from "@/lib/content/case-studies";

export function CaseStudyHero({ study }: { study: CaseStudy }) {
  return (
    <header className="border-b border-line bg-warm">
      <div className="container-omh py-10 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-x-3 gap-y-2 text-base text-muted"><Link href="/case-studies" className="underline underline-offset-4 hover:text-amber-deep">All case studies</Link><span aria-hidden>/</span><span>{study.client}</span></nav>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-base font-medium text-amber-deep">{study.category} / {study.sector}</p>
            <h1 className="mt-5 max-w-[20ch] font-sans text-[clamp(32px,3.5vw,54px)] font-semibold leading-[1.1] text-balance">{study.title}</h1>
            <p className="mt-6 max-w-[58ch] text-lead leading-relaxed text-ink/75">{study.lede}</p>
          </div>
          <CaseStudyVisual study={study} ratio="5/4" priority caption />
        </div>
      </div>
    </header>
  );
}

export function CaseStudyOverview({ study }: { study: CaseStudy }) {
  return (
    <section aria-label="Project details" className="border-b border-line bg-surface"><div className="container-omh py-8">
      <h2 className="sr-only">Project details</h2>
      <dl className="grid gap-x-10 gap-y-5 text-base leading-relaxed sm:grid-cols-2 lg:grid-cols-4">
        <div><dt className="text-muted">Client</dt><dd className="mt-1 font-semibold">{study.client}</dd></div>
        <div><dt className="text-muted">Sector</dt><dd className="mt-1">{study.sector}</dd></div>
        {study.duration && <div><dt className="text-muted">Published project duration</dt><dd className="mt-1">{study.duration}</dd></div>}
        <div><dt className="text-muted">Services</dt><dd className="mt-1">{study.serviceIds.length ? study.serviceIds.map(id => caseStudyServices[id].label).join(", ") : "Illustration and graphic design"}</dd></div>
      </dl>
      <nav aria-label="On this page" className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-line pt-5 text-base">
        <a href="#brief" className="underline underline-offset-4 hover:text-amber-deep">The brief</a>
        <a href="#work" className="underline underline-offset-4 hover:text-amber-deep">Our approach</a>
        {study.results.length > 0 && <a href="#results" className="underline underline-offset-4 hover:text-amber-deep">Published results</a>}
        {study.testimonial && <a href="#client-feedback" className="underline underline-offset-4 hover:text-amber-deep">Client feedback</a>}
      </nav>
    </div></section>
  );
}
