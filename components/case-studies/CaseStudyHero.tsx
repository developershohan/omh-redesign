import Link from "next/link";
import { CaseStudyVisual } from "@/components/case-studies/CaseStudyVisual";
import { caseStudyServices, type CaseStudy } from "@/lib/content/case-studies";
import { AccentTitle } from "@/components/services/ServicePrimitives";

function Fact({ label, value, wide = false }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={wide ? "col-span-2 max-sm:col-span-1" : undefined}>
      <dt className="text-[14px] font-semibold uppercase tracking-[0.14em] text-muted">{label}</dt>
      <dd className="mt-2 text-body font-semibold text-ink">{value}</dd>
    </div>
  );
}

// Homepage hero ground and type, with the project facts under the lede rather
// than in a separate strip, and the cover framed like the homepage hero image.
export function CaseStudyHero({ study }: { study: CaseStudy }) {
  const services = study.serviceIds.length
    ? study.serviceIds.map((id) => caseStudyServices[id].label).join(", ")
    : "Illustration and graphic design";
  return (
    <header className="hero-grid overflow-x-clip border-b border-line bg-warm">
      <div className="container-omh section-md">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-body text-muted">
          <Link href="/case-studies" className="underline-offset-4 hover:text-amber-deep hover:underline">
            Case studies
          </Link>
          <span aria-hidden>/</span>
          <span>{study.client}</span>
        </nav>
        <div className="mt-10 grid items-center gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-amber-deep">
              {study.category} · {study.sector}
            </p>
            <h1 className="mt-6 max-w-[18ch] font-sans text-display font-semibold text-balance"><AccentTitle text={study.title} /></h1>
            <p className="mt-7 max-w-[56ch] text-body leading-relaxed text-ink/75">{study.lede}</p>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-7 max-sm:grid-cols-1">
              <Fact label="Client" value={study.client} />
              {study.duration ? <Fact label="Duration" value={study.duration} /> : <Fact label="Sector" value={study.sector} />}
              <Fact label="Services" value={services} wide />
            </dl>
          </div>
          <CaseStudyVisual
            study={study}
            ratio="5/4"
            priority
            caption
            frameClassName="shadow-[0_36px_90px_-42px_rgb(16_24_40/0.48)]"
          />
        </div>
      </div>
    </header>
  );
}
