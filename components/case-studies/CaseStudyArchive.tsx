"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { CaseStudyRow } from "@/components/case-studies/CaseStudyRow";
import { CaseStudyVisual } from "@/components/case-studies/CaseStudyVisual";
import { ArrowRight, Button } from "@/components/ui/Button";
import { FinalCta } from "@/components/ui/FinalCta";
import { Eyebrow } from "@/components/ui/Proof";
import { cardResults, caseStudies, getCaseStudy } from "@/lib/content/case-studies";

// Three standout percentage results for the hero strip: highest first, each
// from a different study and a different kind of result, so the strip doesn't
// read "organic traffic" three times. Drawn from the data, never invented.
const highlights = (() => {
  const picked: { study: (typeof caseStudies)[number]; result: (typeof caseStudies)[number]["results"][number] }[] = [];
  const all = caseStudies
    .flatMap((study) => study.results.filter((result) => result.value.endsWith("%")).map((result) => ({ study, result })))
    .sort((a, b) => parseFloat(b.result.value) - parseFloat(a.result.value));
  for (const entry of all) {
    if (picked.length === 3) break;
    if (picked.some((p) => p.study === entry.study || p.result.label === entry.result.label)) continue;
    picked.push(entry);
  }
  return picked;
})();

// Fixed order from the SEO brief; Local SEO / Ecommerce filters wait until there are enough projects.
const categories = ["All Projects", "SEO", "PPC", "Website", "Design"];

// Business-goal routes into the solution pages, each with the projects that show it.
const goals = [
  { title: "Grow Local Visibility", href: "/solutions/grow-local-visibility", slugs: ["fine-dining", "bakery", "car-showroom"] },
  { title: "Increase Ecommerce Sales", href: "/solutions/increase-ecommerce-sales", slugs: ["clothing-business", "craft-business"] },
  { title: "Improve Website Conversion", href: "/solutions/improve-website-conversion", slugs: ["bar", "out-out-entry"] },
  { title: "Generate Qualified Leads", href: "/solutions/generate-qualified-leads", slugs: ["fleming-verandas", "california-accounting"] },
].map((goal) => ({ ...goal, studies: goal.slugs.map((slug) => getCaseStudy(slug)!) }));

const reportingChecks = [
  "The result, and what it measures",
  "The comparison period, where available",
  "The measurement source where appropriate, such as GA4, Search Console, Google Ads or a CRM",
  "Attribution limits for multi-channel projects",
];

export function CaseStudyArchive() {
  const [category, setCategory] = useState("All Projects");
  const projects = caseStudies.filter((study) => category === "All Projects" || study.category === category);
  const featured = caseStudies.find((study) => study.slug === "fine-dining")!;

  return (
    <div data-case-archive>
      <header className="hero-grid overflow-x-clip border-b border-line bg-warm">
        <div className="container-omh section-md">
          <Eyebrow>Digital Marketing Case Studies</Eyebrow>
          <div className="mt-7">
            <h1 className="font-sans text-display font-semibold text-balance">
              Digital Marketing Case Studies with <span className="text-amber-deep">Real Results</span>
            </h1>
            <p className="mt-6 text-body leading-relaxed text-ink/75">
              Explore real SEO, PPC, website and ecommerce case studies across different sectors. See the original
              challenge, the work delivered, and the measured outcome – with the context behind the numbers.
            </p>
          </div>
          <dl className="mt-14 grid grid-cols-3 border-y border-line max-md:grid-cols-1">
            {highlights.map(({ study, result }) => (
              <div
                key={study.slug}
                className="flex flex-col border-l border-line px-8 py-7 first:border-l-0 first:pl-0 max-md:border-l-0 max-md:border-t max-md:px-0 max-md:first:border-t-0"
              >
                <dt className="mt-2 text-body leading-snug text-ink/75">
                  {study.card.results?.[result.label] ?? result.label}
                  <span className="mt-1 block text-[14px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {study.client}
                  </span>
                </dt>
                <dd className="order-first font-sans text-h2 font-semibold text-amber-deep">{result.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section aria-label="Featured case study" className="container-omh pt-[clamp(56px,6vw,88px)]">
        <div className="dark-grid grid overflow-hidden rounded-card bg-inverse text-oninverse shadow-[0_36px_90px_-48px_rgb(16_24_40/0.6)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <Link
            href={`/case-studies/${featured.slug}`}
            aria-label={`Read the ${featured.client} case study`}
            className="block min-h-[300px] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-amber"
          >
            <CaseStudyVisual study={featured} ratio="4/3" priority className="h-full" frameClassName="h-full rounded-none" />
          </Link>
          <div className="flex flex-col justify-center p-[clamp(28px,4vw,56px)]">
            <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-amber">
              Featured Case Study · SEO &amp; Local Search
            </p>
            <h2 className="mt-5 font-sans text-h2 font-semibold text-balance">
              Savor Bistro: 98% Organic Traffic Growth and Stronger Local Visibility
            </h2>
            <p className="mt-5 text-body leading-relaxed text-oninverse/75">
              A local SEO and website optimisation project focused on improving restaurant discovery, attracting more
              relevant organic visitors and supporting reservations and in-person visits.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-5 border-t border-oninverse/15 pt-6 max-sm:grid-cols-1">
              {cardResults(featured).map((result) => (
                <div key={result.label} className="flex flex-col">
                  <dt className="mt-2 text-body leading-snug text-oninverse/70">{result.label}</dt>
                  <dd className="order-first font-sans text-h3 font-semibold text-[#f2c675]">{result.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-9">
              <Button href={`/case-studies/${featured.slug}`} variant="inverse" arrow data-event="case_studies_featured_click">
                Read the Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" aria-labelledby="project-heading" className="container-omh section-md">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div>
            <h2 id="project-heading" className="font-sans text-h2 font-semibold">Browse Digital Marketing Case Studies</h2>
            <p role="status" className="mt-3 text-body text-muted">
              {projects.length} {projects.length === 1 ? "Client Project" : "Client Projects"}
            </p>
          </div>
          <div role="group" aria-label="Filter projects by service" className="flex flex-wrap gap-2.5">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
                className={`min-h-11 cursor-pointer rounded-full border px-5 text-body font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
                  category === item
                    ? "border-inverse bg-inverse text-oninverse"
                    : "border-line bg-surface text-ink/75 hover:border-ink/40 hover:text-ink"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-11 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((study) => (
            <CaseStudyRow key={study.slug} study={study} />
          ))}
        </div>
      </section>

      <section aria-labelledby="goal-heading" className="border-y border-line bg-surface">
        <div className="container-omh section-md">
          <div>
            <h2 id="goal-heading" className="font-sans text-h2 font-semibold text-balance">
              Explore Results by <span className="text-amber-deep">Business Goal</span>
            </h2>
            <p className="mt-5 text-body leading-relaxed text-ink/75">
              Know the result you want but not which service gets you there? Start with the goal, see the projects
              behind it, then explore how we approach it.
            </p>
          </div>
          <ol className="mt-12 grid border-t border-line md:grid-cols-2 xl:grid-cols-4">
            {goals.map((goal, index) => (
              <li
                key={goal.href}
                className="flex flex-col border-b border-line py-8 md:px-7 md:odd:border-r xl:border-r xl:first:pl-0 xl:last:border-r-0 xl:last:pr-0 md:max-xl:odd:pl-0 md:max-xl:even:pr-0"
              >
                <span className="font-sans text-[26px] font-semibold text-amber-deep">0{index + 1}</span>
                <h3 className="mt-3 font-sans text-h4 font-semibold">{goal.title}</h3>
                <p className="mt-5 text-[14px] font-semibold uppercase tracking-[0.14em] text-muted">Featured work</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {goal.studies.map((study) => (
                    <li key={study.slug}>
                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex min-h-11 items-center rounded-full border border-line bg-warm px-4 text-body font-semibold text-ink/80 transition-colors hover:border-ink/40 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                      >
                        {study.client}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={goal.href}
                  data-event="case_studies_goal_click"
                  className="group mt-auto inline-flex items-center gap-2 pt-7 font-semibold text-amber-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
                >
                  {goal.title}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="reporting-heading" className="container-omh section-md">
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 id="reporting-heading" className="font-sans text-h2 font-semibold text-balance">
              How We Report <span className="text-amber-deep">Case Study Results</span>
            </h2>
            <p className="mt-6 text-body leading-relaxed text-ink/75">
              We show the starting challenge, the work delivered and the result in context. Where a percentage or
              ranking is used, the individual case study should state the metric clearly and, where available,
              include the comparison period, measurement source and relevant attribution limits. Results from one
              project demonstrate past work; they are not a guarantee of the same outcome for another business.
            </p>
          </div>
          <div className="self-start rounded-card border border-line bg-surface p-[clamp(24px,3vw,40px)]">
            <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-muted">What each result should come with</p>
            <ul className="mt-5 divide-y divide-line">
              {reportingChecks.map((item) => (
                <li key={item} className="flex gap-3.5 py-4 text-body leading-relaxed text-ink/85">
                  <Check className="mt-1 size-5 shrink-0 text-amber-deep" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-14 border-t border-line pt-5 text-body leading-relaxed text-muted">
          Project imagery may use sector photography. Results are reported for the individual project and should be
          read with the context provided in the full case study. Past results are not a forecast or guarantee for
          another business.
        </p>
      </section>

      <FinalCta
        title="Have a Similar Growth Challenge?"
        titleAccent="Growth Challenge?"
        body="Tell us what you want to improve and how you currently measure success. We’ll review the context, identify the most relevant starting point, and recommend a practical next step."
        primary={{ label: "Discuss Your Project", href: "/contact", event: "case_studies_hub_cta_click" }}
        contactEvents={{ phone: "case_studies_phone_click", email: "case_studies_email_click" }}
      />
    </div>
  );
}
