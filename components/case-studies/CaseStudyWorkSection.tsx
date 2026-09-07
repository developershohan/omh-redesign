import { Reveal } from "@/components/Reveal";
import { CaseStudyVisual } from "@/components/case-studies/CaseStudyVisual";
import { Eyebrow } from "@/components/ui/Proof";
import type { CaseStudy } from "@/lib/content/case-studies";

/*
  The work is told as full chapters rather than a row of small repeated cards
  (brief §4): each group alternates sides on desktop, keeps its own rule and
  ground, and always puts the visual first on smaller screens.
*/
export function CaseStudyChallenges({ study }: { study: CaseStudy }) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-omh section-md">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-12 gap-y-10 max-lg:block">
            <div className="col-span-5 max-lg:mb-10">
              <Eyebrow>The challenge</Eyebrow>
              <h2 className="mt-6 max-w-[16ch] font-sans text-h2 font-semibold text-balance">
                What stood between the business and the result.
              </h2>
            </div>
            <ul className="col-span-6 col-start-7 border-t border-line">
              {study.challenges.map((challenge, index) => (
                <li key={challenge} className="grid grid-cols-[auto_1fr] gap-6 border-b border-line py-6">
                  <span className="font-sans text-[18px] font-semibold tabular-nums text-amber-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-body leading-relaxed text-ink/75">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function CaseStudyWorkSection({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <section className="border-b border-line bg-warm">
      <div className="container-omh section-md">
        <Reveal>
          <div className="max-w-[46ch]">
            <Eyebrow>The work</Eyebrow>
            <h2 className="mt-6 font-sans text-h2 font-semibold text-balance">What we did.</h2>
          </div>
        </Reveal>

        <div className="mt-4">
          {study.work.map((group, groupIndex) => {
            const flipped = groupIndex % 2 === 1;
            return (
              <Reveal key={group.title}>
                <article className="grid grid-cols-12 items-center gap-x-12 gap-y-8 border-t border-line py-[clamp(44px,3.6vw,68px)] max-lg:block">
                  <div className={`col-span-5 ${flipped ? "lg:order-2 lg:col-start-8" : ""}`}>
                    <CaseStudyVisual
                      study={study}
                      index={index + groupIndex}
                      ratio="16/11"
                    />
                  </div>
                  <div
                    className={`col-span-6 max-lg:mt-9 ${flipped ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}
                  >
                    <p className="font-sans text-[18px] font-semibold tabular-nums text-amber-deep">
                      {String(groupIndex + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 max-w-[20ch] font-sans text-h3 font-semibold text-balance">
                      {group.title}
                    </h3>
                    <ul className="mt-6 border-t border-line">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-4 border-b border-line py-4 text-body leading-relaxed text-ink/75"
                        >
                          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-amber" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
