import { CheckIcon } from "@/components/services/ServicePrimitives";
import type { CaseStudy } from "@/lib/content/case-studies";

const label = "text-[14px] font-semibold uppercase tracking-[0.14em] text-amber-deep";

// The brief: the objective as a lead, and what needed to change as a numbered,
// always-visible list (it used to be folded away in a <details>).
export function CaseStudyChallenges({ study }: { study: CaseStudy }) {
  return (
    <section id="brief" aria-labelledby="brief-heading" className="scroll-mt-28 border-b border-line bg-surface">
      <div className="container-omh section-md grid gap-x-16 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className={label}>The brief</p>
          <h2 id="brief-heading" className="mt-5 font-sans text-h2 font-semibold">
            Where {study.client} started
          </h2>
          <p className="mt-6 max-w-[44ch] font-sans text-h4 font-semibold leading-relaxed text-ink/85">{study.objective}</p>
        </div>
        <div className="lg:col-span-7">
          <h3 className="font-sans text-h4 font-semibold">What needed to change</h3>
          <ol className="mt-6 border-t border-line">
            {study.challenges.map((challenge, index) => (
              <li key={challenge} className="grid grid-cols-[auto_1fr] gap-6 border-b border-line py-5">
                <span className="pt-0.5 font-sans text-[14px] font-semibold tabular-nums text-amber-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-body leading-relaxed text-ink/80">{challenge}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// The approach: one numbered card per workstream, in the site's card style.
export function CaseStudyWorkSection({ study }: { study: CaseStudy }) {
  const heading =
    study.category === "Website"
      ? "Building the experience"
      : study.category === "Design"
        ? "Developing the creative"
        : "Putting the strategy to work";
  const columns = study.work.length === 2 || study.work.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3";
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-28 border-b border-line bg-warm">
      <div className="container-omh section-md">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
          <div>
            <p className={label}>Our approach</p>
            <h2 id="work-heading" className="mt-5 max-w-[20ch] font-sans text-h2 font-semibold">
              {heading}
            </h2>
          </div>
          <p className="max-w-[40ch] text-body leading-relaxed text-ink/70">
            The work delivered for {study.client}, grouped by workstream.
          </p>
        </div>
        <div className={`mt-12 grid gap-6 md:grid-cols-2 ${columns}`}>
          {study.work.map((group, index) => (
            <section key={group.title} className="surface-card rounded-card border border-line bg-surface p-7 max-sm:p-6">
              <span className="font-sans text-[14px] font-semibold tracking-[0.14em] text-amber-deep">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-sans text-h4 font-semibold">{group.title}</h3>
              <ul className="mt-5 grid gap-3">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-body leading-relaxed text-ink/75">
                    <CheckIcon className="mt-1.5 size-4 shrink-0 text-amber-deep" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
