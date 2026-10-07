"use client";

import { useState } from "react";
import Link from "next/link";
import { CaseStudyRow } from "@/components/case-studies/CaseStudyRow";
import { CaseStudyVisual } from "@/components/case-studies/CaseStudyVisual";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/lib/content/case-studies";

export function CaseStudyArchive() {
  const [category, setCategory] = useState("All projects");
  const categories = ["All projects", ...new Set(caseStudies.map(study => study.category))];
  const projects = caseStudies.filter(study => category === "All projects" || study.category === category);
  const featured = caseStudies.find(study => study.slug === "fine-dining")!;
  const featuredResult = featured.results.find(result => result.label.includes("organic-traffic"))!;
  return (
    <div data-case-archive>
      <header className="bg-surface">
        <div className="container-omh pb-10 pt-12 sm:pb-14 sm:pt-20">
          <p className="text-base font-medium text-muted">Case studies</p>
          <div className="mt-5 grid items-end gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
            <h1 className="max-w-[19ch] font-sans text-h1 font-semibold">A closer look<br />at our work.</h1>
            <p className="max-w-[54ch] text-lead leading-relaxed text-ink/75">From a neighbourhood bakery to a UK tour operator. Explore the brief, the decisions and the published outcomes behind our SEO, advertising, website and design projects.</p>
          </div>
        </div>
      </header>
      {/* Top padding mirrors the hero's bottom padding, so the card sits clear
          of the edge where the white hero meets the page ground. */}
      <section aria-label="Featured project" className="container-omh pb-14 pt-10 sm:pb-20 sm:pt-14">
        <div className="grid overflow-hidden rounded-[4px] bg-[#253e3b] text-white lg:grid-cols-[1.35fr_1fr]">
          <Link href={`/case-studies/${featured.slug}`} aria-label="Read the Savor Bistro case study" className="block focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white">
            <CaseStudyVisual study={featured} ratio="4/3" priority className="h-full [&_div]:h-full" />
          </Link>
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            <p className="text-base text-white/75">Featured project / SEO</p>
            <h2 className="mt-5 font-sans text-[clamp(30px,3vw,44px)] font-semibold leading-tight">Helping diners find Savor Bistro.</h2>
            <p className="mt-5 max-w-[40ch] text-body leading-relaxed text-white/80">A local-search project connecting restaurant discovery with reservations.</p>
            <p className="mt-8 border-t border-white/25 pt-6"><strong className="block font-sans text-[48px] font-semibold leading-none">{featuredResult.value}</strong><span className="mt-3 block text-base text-white/80">{featuredResult.label}</span></p>
            <Link href={`/case-studies/${featured.slug}`} className="mt-7 inline-flex min-h-11 items-center self-start text-base font-semibold underline underline-offset-4 hover:text-[#f2c675]">Explore the case study</Link>
          </div>
        </div>
      </section>
      <section id="projects" className="container-omh pb-16 sm:pb-24" aria-labelledby="project-heading">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-line pb-5">
          <h2 id="project-heading" className="font-sans text-h3 font-semibold">Browse the work</h2>
          <p role="status" className="text-base text-muted">{projects.length} {projects.length === 1 ? "project" : "projects"}</p>
        </div>
        <div role="group" aria-label="Filter projects by service" className="mb-9 flex flex-wrap gap-x-7 gap-y-2 pt-3">
          {categories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={"min-h-12 cursor-pointer border-b-2 py-3 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber " + (category === item ? "border-amber text-ink" : "border-transparent text-muted hover:text-ink")}>{item}</button>)}
        </div>
        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:gap-x-14">
          {projects.map(study => <CaseStudyRow key={study.slug} study={study} />)}
        </div>
        <p className="mt-12 max-w-[78ch] border-t border-line pt-5 text-base leading-relaxed text-muted">Project covers include sector photography. Results are reproduced from the published case studies; they are not a forecast for another business.</p>
      </section>
      <section className="border-t border-line bg-warm">
        <div className="container-omh flex flex-wrap items-center justify-between gap-7 py-12 sm:py-16">
          <div><h2 className="font-sans text-h3 font-semibold">What would you like to change?</h2><p className="mt-4 max-w-[54ch] text-body text-ink/75">Tell us about your business and the project you have in mind.</p></div>
          <Button href="/contact" data-event="case_studies_hub_cta_click">Discuss your project</Button>
        </div>
      </section>
    </div>
  );
}
