import { Search, MousePointer2, PanelsTopLeft, PenTool, ArrowDown } from "lucide-react";
import type { CaseStudy } from "@/lib/content/case-studies";

// A diagram of the recorded scope, not a simulated client report or screenshot.
export function CaseStudyScope({ study }: { study: CaseStudy }) {
  const Icon = { SEO: Search, PPC: MousePointer2, Website: PanelsTopLeft, Design: PenTool }[study.category];
  return (
    <figure className="relative overflow-hidden rounded-[4px] bg-[#253e3b] p-6 text-white sm:p-9">
      <figcaption className="text-base text-white/75">The project at a glance</figcaption>
      <div className="mx-auto mt-8 flex max-w-[28ch] flex-col items-center text-center">
        <Icon className="size-12 text-[#f2c675]" strokeWidth={1.4} aria-hidden />
        <p className="mt-4 font-sans text-2xl font-semibold">{study.client}</p>
        <p className="mt-2 text-base text-white/75">{study.category === "SEO" ? "Search visibility" : study.category === "PPC" ? "Paid search campaigns" : study.category === "Website" ? "Website experience" : "Brand illustration"}</p>
        <ArrowDown className="my-6 size-6 text-white/50" aria-hidden />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {study.work.map((group, index) => (
          <div key={group.title} className={"border-t border-white/30 pt-4 " + (study.work.length % 2 && index === study.work.length - 1 ? "sm:col-span-2" : "")}>
            <p className="font-sans text-xl font-semibold">{group.title}</p>
            <p className="mt-3 text-base leading-relaxed text-white/75">{group.items[0]}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}

export function CaseStudyChallenges({ study }: { study: CaseStudy }) {
  return (
    <section id="brief" className="scroll-mt-28 bg-surface">
      <div className="container-omh grid items-start gap-10 py-12 lg:grid-cols-2 lg:gap-20 lg:py-20">
        <div>
          <h2 className="font-sans text-h2 font-semibold">The brief</h2>
          <p className="mt-6 max-w-[48ch] text-[clamp(20px,1.8vw,26px)] leading-relaxed text-ink">{study.objective}</p>
          <details className="mt-8 border-y border-line py-5">
            <summary className="cursor-pointer font-sans text-xl font-semibold focus-visible:outline-2 focus-visible:outline-amber">What needed to change</summary>
            <ul className="mt-5 list-disc space-y-4 pl-5 text-body leading-relaxed text-ink/75">{study.challenges.map(challenge => <li key={challenge}>{challenge}</li>)}</ul>
          </details>
        </div>
        <CaseStudyScope study={study} />
      </div>
    </section>
  );
}

export function CaseStudyWorkSection({ study }: { study: CaseStudy }) {
  return (
    <section id="work" className="scroll-mt-28 bg-warm">
      <div className="container-omh py-12 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <h2 className="max-w-[20ch] font-sans text-h2 font-semibold">{study.category === "Website" ? "Building the experience" : study.category === "Design" ? "Developing the creative" : "Putting the strategy to work"}</h2>
          <p className="max-w-[36ch] text-body leading-relaxed text-muted">The work delivered for {study.client}.</p>
        </div>
        <div className="mt-10 grid gap-7 lg:grid-cols-2">
          {study.work.map((group, index) => <section key={group.title} className={"rounded-[4px] border border-line bg-surface p-6 sm:p-8 " + (study.work.length === 3 && index === 0 ? "lg:row-span-2 lg:flex lg:flex-col lg:justify-center" : "")}><h3 className="max-w-[32ch] font-sans text-[clamp(24px,2.3vw,32px)] font-semibold leading-tight">{group.title}</h3><ul className="mt-6 divide-y divide-line text-body leading-relaxed text-ink/75">{group.items.map(item => <li key={item} className="py-3 first:pt-0 last:pb-0">{item}</li>)}</ul></section>)}
        </div>
      </div>
    </section>
  );
}
