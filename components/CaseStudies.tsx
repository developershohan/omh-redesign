import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Button, TextLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Proof";
import {
  caseStudies,
  caseStudyServices,
  getCaseStudiesForService,
  type CaseStudy,
  type CaseStudyServiceId,
} from "@/lib/content/case-studies";

const palettes = [
  "from-[#d9e8f6] via-[#edf4fa] to-[#f6e1d7]",
  "from-[#dcebe5] via-[#edf5ef] to-[#e7dff2]",
  "from-[#eadfd4] via-[#f6eee7] to-[#d9e8f6]",
  "from-[#e7dff2] via-[#f3edf7] to-[#f6e1d7]",
  "from-[#f0e6c9] via-[#f8f3e5] to-[#dcebe5]",
  "from-[#d8ebe9] via-[#ebf5f3] to-[#d9e8f6]",
  "from-[#ead6cd] via-[#f7eae4] to-[#e9dfd3]",
  "from-[#d9e2ee] via-[#eef2f6] to-[#e6d8ce]",
  "from-[#e4ddd4] via-[#f3eee8] to-[#d8e6e3]",
];

function CaseVisual({ study, index, compact = false }: { study: CaseStudy; index: number; compact?: boolean }) {
  return (
    <div className={`media-shine relative overflow-hidden bg-gradient-to-br ${palettes[index % palettes.length]} ${compact ? "aspect-[16/8]" : "aspect-[16/10]"}`} role="img" aria-label={`${study.sector} case study`}>
      <div aria-hidden className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(16,36,58,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(16,36,58,.09)_1px,transparent_1px)] [background-size:30px_30px]" />
      <div aria-hidden className="absolute -bottom-[38%] -right-[10%] size-[72%] rounded-full border-[34px] border-white/45" />
      <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/65 bg-white/72 p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#3d5e7c]">{study.category}</span>
          <span className="font-sans text-[11px] font-semibold tabular-nums text-[#10243a]/35">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <p className="mt-2 font-sans text-[17px] font-semibold text-[#10243a]">{study.sector}</p>
      </div>
    </div>
  );
}

export function CaseStudyCard({ study, index, compact = false }: { study: CaseStudy; index: number; compact?: boolean }) {
  return (
    <article className="surface-card group overflow-hidden rounded-card border border-line bg-white">
      <Link href={`/case-studies/${study.slug}`} className="block" data-event="case_study_card_click" data-case-study={study.slug}>
        <CaseVisual study={study} index={index} compact={compact} />
        <div className={compact ? "p-5" : "p-7"}>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3d709f]">{study.category} · {study.sector}</span>
          <h3 className={`mt-5 font-sans font-semibold text-balance ${compact ? "text-h4" : "text-h3"}`}>{study.title}</h3>
          {!compact && <p className="mt-4 text-[16.5px] leading-relaxed text-ink/70">{study.lede}</p>}
          <span className="mt-6 inline-flex items-center gap-2 font-semibold text-amber-deep">Read case study <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
        </div>
      </Link>
    </article>
  );
}

export function CaseStudyGrid({ studies = caseStudies }: { studies?: CaseStudy[] }) {
  return (
    <div className="grid grid-cols-2 gap-7 max-md:grid-cols-1">
      {studies.map((study, index) => (
        <div key={study.slug} className={index === 0 || index === studies.length - 1 ? "md:col-span-2" : undefined}>
          <CaseStudyCard study={study} index={caseStudies.indexOf(study)} />
        </div>
      ))}
    </div>
  );
}

export function CaseStudiesHub() {
  const seoCount = caseStudies.filter((study) => study.category === "SEO").length;
  const websiteCount = caseStudies.length - seoCount;
  return (
    <>
      <section className="overflow-hidden border-b border-line bg-[#f1f5f8]">
        <div className="container-omh section-md">
          <Reveal>
            <Eyebrow>Case studies</Eyebrow>
            <div className="mt-8 grid grid-cols-12 items-end gap-x-12 gap-y-8 max-lg:block">
              <div className="col-span-8">
                <h1 className="max-w-[18ch] font-sans text-h1 font-semibold text-balance">Real work, real sectors, real numbers.</h1>
                <p className="mt-6 max-w-[64ch] text-lead leading-relaxed text-ink/72">A cross-section of SEO, paid media and website projects across hospitality, retail and local service businesses — what we were asked to fix, what we did, and what changed.</p>
              </div>
              <dl className="col-span-4 grid grid-cols-3 border-y border-line py-6 max-lg:mt-9">
                {[["Studies", caseStudies.length], ["SEO", seoCount], ["Website", websiteCount]].map(([label, value]) => <div key={label} className="border-l border-line px-4 first:border-l-0 first:pl-0"><dt className="text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">{label}</dt><dd className="mt-1 font-sans text-h3 font-semibold">{value}</dd></div>)}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-omh section-md">
          <Reveal><div className="mb-11 flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.17em] text-muted"><span className="h-0.5 w-7 bg-amber" />All case studies<span className="h-px flex-1 bg-line" /></div></Reveal>
          <CaseStudyGrid />
        </div>
      </section>

      <section className="bg-[#76a9e8] text-[#10243a]">
        <div className="container-omh section-md grid grid-cols-12 items-center gap-10 max-lg:block">
          <Reveal className="col-span-8"><h2 className="max-w-[20ch] font-sans text-h2 font-semibold">Want to be the next project story?</h2><p className="mt-5 max-w-[58ch] text-lead leading-relaxed text-[#10243a]/70">Tell us the objective and how you’ll measure success, and we’ll recommend a practical scope.</p></Reveal>
          <Reveal className="col-span-4 max-lg:mt-8"><Button href="/contact" variant="inverse" arrow data-event="case_studies_hub_cta_click">Discuss Your Project</Button></Reveal>
        </div>
      </section>
    </>
  );
}

export function CaseStudyArticle({ study }: { study: CaseStudy }) {
  const index = caseStudies.indexOf(study);
  const next = caseStudies[(index + 1) % caseStudies.length];
  return (
    <article>
      <header className="border-b border-line bg-[#f4f7fa]">
        <div className="container-omh section-md">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[13px] text-muted"><Link href="/case-studies" className="hover:text-amber-deep hover:underline">Case Studies</Link><span aria-hidden>/</span><span>{study.shortTitle}</span></nav>
            <div className="grid grid-cols-12 items-center gap-x-12 gap-y-10 max-lg:block">
              <div className="col-span-7 max-lg:mb-10">
                <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#3d709f]">{study.category} · {study.sector}</span>
                <h1 className="mt-6 max-w-[18ch] font-sans text-h1 font-semibold text-balance">{study.title}</h1>
                <p className="mt-6 max-w-[58ch] text-lead leading-relaxed text-ink/72">{study.lede}</p>
                <dl className="mt-9 grid grid-cols-2 gap-5 border-t border-line pt-6 max-sm:grid-cols-1"><div><dt className="text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">Client</dt><dd className="mt-1.5 font-semibold">{study.client}</dd></div><div><dt className="text-[11px] font-semibold uppercase tracking-[0.13em] text-muted">Duration</dt><dd className="mt-1.5 font-semibold">{study.duration}</dd></div></dl>
              </div>
              <div className="col-span-5"><CaseVisual study={study} index={index} /></div>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="border-b border-line bg-white">
        <div className="container-omh section-md">
          <Reveal>
            <div className="grid grid-cols-12 gap-x-12 gap-y-10 max-lg:block">
              <div className="col-span-5 max-lg:mb-10"><Eyebrow>Objective</Eyebrow><h2 className="mt-6 max-w-[15ch] font-sans text-h2 font-semibold">What the project needed to achieve.</h2><p className="mt-5 text-[18px] leading-relaxed text-ink/72">{study.objective}</p></div>
              <div className="col-span-7"><p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-muted">The challenges</p><ul className="mt-5 border-t border-line">{study.challenges.map((challenge, challengeIndex) => <li key={challenge} className="grid grid-cols-[auto_1fr] gap-5 border-b border-line py-5"><span className="text-[12px] font-semibold text-amber">0{challengeIndex + 1}</span><span className="text-[17px] leading-relaxed text-ink/75">{challenge}</span></li>)}</ul></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-[#edf4fb] text-[#10243a]">
        <div className="container-omh section-md">
          <Reveal><div><p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#3d709f]">The work</p><h2 className="mt-5 max-w-[16ch] font-sans text-h2 font-semibold">What we did.</h2></div></Reveal>
          <div className="mt-11 grid grid-cols-3 gap-6 max-lg:grid-cols-1">{study.work.map((group, groupIndex) => <Reveal key={group.title}><article className="h-full rounded-card border border-[#bfd1e3] bg-white p-7"><span className="text-[11px] font-semibold text-[#d56d47]">0{groupIndex + 1}</span><h3 className="mt-4 font-sans text-h4 font-semibold">{group.title}</h3><ul className="mt-5 border-t border-line pt-3">{group.items.map((item) => <li key={item} className="flex gap-3 py-2 text-[15px] leading-relaxed text-ink/72"><span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-[#76a9e8]" />{item}</li>)}</ul></article></Reveal>)}</div>
        </div>
      </section>

      <section className="bg-[#10243a] text-white">
        <div className="container-omh section-md">
          <Reveal><div className="grid grid-cols-12 gap-x-10 gap-y-8 max-lg:block"><div className="col-span-4 max-lg:mb-9"><p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#9bc3f3]">The results</p><h2 className="mt-5 max-w-[14ch] font-sans text-h2 font-semibold">What changed.</h2></div><div className="col-span-8 grid grid-cols-2 gap-4 max-sm:grid-cols-1">{study.results.map((result) => <div key={`${result.value}-${result.label}`} className="rounded-card border border-white/12 bg-white/[0.035] p-6"><p className="font-sans text-[clamp(30px,25px+1vw,42px)] font-semibold">{result.value}</p><p className="mt-2 text-[15px] leading-relaxed text-white/72">{result.label}</p></div>)}</div></div></Reveal>
        </div>
      </section>

      {study.testimonial && <section className="border-b border-line bg-[#f7f1e8]"><div className="container-omh section-md"><Reveal><div className="grid grid-cols-12 gap-x-12 gap-y-8 max-lg:block"><div className="col-span-3"><p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-muted">In their words</p></div><div className="col-span-9 max-lg:mt-8"><blockquote className="max-w-[42ch] font-serif text-[clamp(26px,21px+1.35vw,38px)] leading-tight text-ink/90">“{study.testimonial.quote}”</blockquote><p className="mt-6 text-[14px] font-semibold text-muted">{study.testimonial.attribution}</p></div></div></Reveal></div></section>}

      <section className="border-b border-line bg-white">
        <div className="container-omh section-md">
          <Reveal><div className="grid grid-cols-12 gap-x-12 gap-y-8 max-lg:block"><div className="col-span-4 max-lg:mb-8"><Eyebrow>Services connected to this study</Eyebrow><h2 className="mt-6 max-w-[15ch] font-sans text-h3 font-semibold">Follow the workstream, not just the result headline.</h2></div><div className="col-span-8 grid grid-cols-2 gap-4 max-sm:grid-cols-1">{study.serviceIds.map((serviceId) => { const service = caseStudyServices[serviceId]; return <Link key={serviceId} href={service.href} className="group rounded-card border border-line bg-warm/50 p-5 transition-colors hover:border-teal/45"><span className="flex items-center justify-between gap-3 font-sans font-semibold">{service.label}<ArrowRight className="size-4 text-amber-deep transition-transform group-hover:translate-x-1" /></span></Link>; })}</div></div></Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-line pt-7"><a href={study.sourceUrl} target="_blank" rel="noreferrer" className="text-[14px] font-semibold text-muted underline underline-offset-4 hover:text-amber-deep">Open original source page</a><TextLink href={`/case-studies/${next.slug}`}>Next: {next.shortTitle}</TextLink></div>
        </div>
      </section>

      <section className="bg-[#76a9e8] text-[#10243a]"><div className="container-omh section-md grid grid-cols-12 items-center gap-10 max-lg:block"><Reveal className="col-span-8"><h2 className="max-w-[18ch] font-sans text-h2 font-semibold">Plan the work and measurement together.</h2><p className="mt-5 max-w-[58ch] text-lead leading-relaxed text-[#10243a]/70">Tell us the business objective, starting data and service support you need. We will recommend a practical scope and what should be measured.</p></Reveal><Reveal className="col-span-4 max-lg:mt-8"><Button href="/contact" variant="inverse" arrow data-event="case_study_cta_click" data-case-study={study.slug}>Discuss a Similar Project</Button></Reveal></div></section>
    </article>
  );
}

export function ServiceCaseStudies({
  serviceId,
  title,
  body,
  limit = 3,
}: {
  serviceId: CaseStudyServiceId;
  title: string;
  body: string;
  limit?: number;
}) {
  const matchingStudies = getCaseStudiesForService(serviceId);
  const studies = matchingStudies.slice(0, limit);
  const remainingStudies = matchingStudies.slice(limit);
  if (studies.length === 0) return null;
  return (
    <section className="border-y border-line bg-[#f1f5f8]" aria-labelledby={`${serviceId}-case-studies-title`}>
      <div className="container-omh section-md">
        <Reveal><div className="flex items-end justify-between gap-10 max-lg:block"><div><p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#3d709f]">Related case studies</p><h2 id={`${serviceId}-case-studies-title`} className="mt-5 max-w-[18ch] font-sans text-h2 font-semibold">{title}</h2></div><div className="max-lg:mt-5"><p className="max-w-[48ch] text-[17px] leading-relaxed text-ink/68">{body}</p><div className="mt-4"><TextLink href="/case-studies">View all case studies</TextLink></div></div></div></Reveal>
        <div className="mt-10 grid grid-cols-3 gap-6 max-lg:grid-cols-1">{studies.map((study) => <CaseStudyCard key={study.slug} study={study} index={caseStudies.indexOf(study)} compact />)}</div>
        {remainingStudies.length > 0 && (
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#cbd8e4] pt-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">More related studies</span>
            {remainingStudies.map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-amber-deep hover:underline underline-offset-4">
                {study.shortTitle}<ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
