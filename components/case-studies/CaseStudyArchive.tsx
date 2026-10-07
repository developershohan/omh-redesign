"use client";

import { useState } from "react";
import Link from "next/link";
import { CaseStudyRow } from "@/components/case-studies/CaseStudyRow";
import { CaseStudyVisual } from "@/components/case-studies/CaseStudyVisual";
import { Button } from "@/components/ui/Button";
import { FinalCta } from "@/components/ui/FinalCta";
import { Eyebrow } from "@/components/ui/Proof";
import { caseStudies } from "@/lib/content/case-studies";

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

export function CaseStudyArchive() {
  const [category, setCategory] = useState("All projects");
  const categories = ["All projects", ...new Set(caseStudies.map((study) => study.category))];
  const projects = caseStudies.filter((study) => category === "All projects" || study.category === category);
  const featured = caseStudies.find((study) => study.slug === "fine-dining")!;

  return (
    <div data-case-archive>
      <header className="hero-grid overflow-x-clip border-b border-line bg-warm">
        <div className="container-omh section-md">
          <Eyebrow>Case studies</Eyebrow>
          <div className="mt-7 grid items-end gap-x-16 gap-y-8 lg:grid-cols-[1.2fr_1fr]">
            <h1 className="max-w-[16ch] font-sans text-display font-semibold text-balance">
              A closer look at <span className="text-amber-deep">our work</span>.
            </h1>
            <p className="max-w-[54ch] text-body leading-relaxed text-ink/75">
              From a neighbourhood bakery to a UK tour operator. Explore the brief, the decisions and the
              outcomes behind our SEO, advertising, website and design projects.
            </p>
          </div>
          <dl className="mt-14 grid grid-cols-3 border-y border-line max-md:grid-cols-1">
            {highlights.map(({ study, result }) => (
              <div
                key={study.slug}
                className="flex flex-col border-l border-line px-8 py-7 first:border-l-0 first:pl-0 max-md:border-l-0 max-md:border-t max-md:px-0 max-md:first:border-t-0"
              >
                <dt className="mt-2 text-body leading-snug text-ink/75">
                  {result.label}
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

      <section aria-label="Featured project" className="container-omh pt-[clamp(56px,6vw,88px)]">
        <div className="dark-grid grid overflow-hidden rounded-card bg-inverse text-oninverse shadow-[0_36px_90px_-48px_rgb(16_24_40/0.6)] lg:grid-cols-[1.1fr_1fr]">
          <Link
            href={`/case-studies/${featured.slug}`}
            aria-label={`Read the ${featured.client} case study`}
            className="block min-h-[300px] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-amber"
          >
            <CaseStudyVisual study={featured} ratio="4/3" priority className="h-full" frameClassName="h-full rounded-none" />
          </Link>
          <div className="flex flex-col justify-center p-[clamp(28px,4vw,56px)]">
            <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-amber">
              Featured project · {featured.category}
            </p>
            <h2 className="mt-5 max-w-[18ch] font-sans text-h2 font-semibold text-balance">
              Helping diners find {featured.client}.
            </h2>
            <p className="mt-5 max-w-[46ch] text-body leading-relaxed text-oninverse/75">{featured.lede}</p>
            <dl className="mt-8 grid grid-cols-3 gap-5 border-t border-oninverse/15 pt-6 max-sm:grid-cols-1">
              {featured.results.slice(0, 3).map((result) => (
                <div key={result.label} className="flex flex-col">
                  <dt className="mt-2 text-body leading-snug text-oninverse/70">{result.label}</dt>
                  <dd className="order-first font-sans text-h3 font-semibold text-[#f2c675]">{result.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-9">
              <Button href={`/case-studies/${featured.slug}`} variant="inverse" arrow data-event="case_studies_featured_click">
                Read the case study
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" aria-labelledby="project-heading" className="container-omh section-md">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div>
            <h2 id="project-heading" className="font-sans text-h2 font-semibold">Browse the work</h2>
            <p role="status" className="mt-3 text-body text-muted">
              {projects.length} {projects.length === 1 ? "project" : "projects"}
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
        <p className="mt-14 max-w-[80ch] border-t border-line pt-5 text-body leading-relaxed text-muted">
          Project covers use sector photography. Results are as reported for each project; they are not a forecast
          for another business.
        </p>
      </section>

      <FinalCta
        title="Have a project like these in mind?"
        titleAccent="in mind?"
        body="Tell us about your business and the result you are after, and we will come back with a practical plan."
        primary={{ label: "Discuss your project", href: "/contact", event: "case_studies_hub_cta_click" }}
        contactEvents={{ phone: "case_studies_phone_click", email: "case_studies_email_click" }}
      />
    </div>
  );
}
