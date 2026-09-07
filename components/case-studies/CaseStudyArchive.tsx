import { Reveal } from "@/components/Reveal";
import { CaseStudyRow } from "@/components/case-studies/CaseStudyRow";
import { FinalCta } from "@/components/ui/FinalCta";
import { Eyebrow } from "@/components/ui/Proof";
import { caseStudies } from "@/lib/content/case-studies";

export function CaseStudyArchive() {
  // Counted per category rather than "SEO and everything else" — Phase 4 added
  // PPC and Design studies, which that assumption used to file under Website.
  const byCategory = caseStudies.reduce<Record<string, number>>((acc, study) => {
    acc[study.category] = (acc[study.category] ?? 0) + 1;
    return acc;
  }, {});
  const counts: [string, number][] = [
    ["Studies", caseStudies.length],
    ...(Object.entries(byCategory) as [string, number][]),
  ];
  const sectors = [...new Set(caseStudies.map((study) => study.sector))];

  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="container-omh section-md">
          <Reveal>
            <Eyebrow>Case studies</Eyebrow>
            <div className="mt-8 grid grid-cols-12 items-end gap-x-12 gap-y-9 max-lg:block">
              <div className="col-span-7">
                <h1 className="max-w-[18ch] font-sans text-h1 font-semibold text-balance">
                  Real work, real sectors, real numbers.
                </h1>
                <p className="mt-6 max-w-[60ch] text-body leading-relaxed text-ink/72">
                  A cross-section of SEO, paid media, website and design projects across
                  hospitality, retail, professional services and local service businesses — what we
                  were asked to fix, what we did, and what changed.
                </p>
              </div>
              <dl className="col-span-4 col-start-9 flex flex-wrap gap-y-4 border-y border-line py-6 max-lg:mt-10">
                {counts.map(([label, value]) => (
                  <div key={label} className="border-l border-line px-5 first:border-l-0 first:pl-0">
                    <dt className="text-[14px] font-semibold uppercase tracking-[0.13em] text-muted">
                      {label}
                    </dt>
                    <dd className="mt-1.5 font-sans text-h3 font-semibold">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-6 text-[18px] text-muted">
              <span className="font-sans font-semibold uppercase tracking-[0.14em] text-ink/70">
                Sectors
              </span>
              <span>{sectors.join(" · ")}</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-warm">
        <div className="container-omh section-md pt-0">
          {caseStudies.map((study, index) => (
            <CaseStudyRow key={study.slug} study={study} index={index} />
          ))}
        </div>
      </section>

      <FinalCta
        title="Want to be the next project story?"
        titleAccent="next project story?"
        body="Tell us the objective and how you’ll measure success, and we’ll recommend a practical scope."
        primary={{ label: "Discuss Your Project", event: "case_studies_hub_cta_click" }}
        contactEvents={{ phone: "case_studies_phone_click", email: "case_studies_email_click" }}
      />
    </>
  );
}
