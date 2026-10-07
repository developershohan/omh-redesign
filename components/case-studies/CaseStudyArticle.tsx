import { CaseStudyHero, CaseStudyOverview } from "@/components/case-studies/CaseStudyHero";
import { CaseStudyNavigation } from "@/components/case-studies/CaseStudyNavigation";
import { CaseStudyResults, CaseStudyServices, CaseStudyTestimonial } from "@/components/case-studies/CaseStudyResults";
import { CaseStudyChallenges, CaseStudyWorkSection } from "@/components/case-studies/CaseStudyWorkSection";
import { Button } from "@/components/ui/Button";
import type { CaseStudy } from "@/lib/content/case-studies";

export function CaseStudyArticle({ study }: { study: CaseStudy }) {
  return (
    <article data-case-article={study.slug}>
      <CaseStudyHero study={study} />
      <CaseStudyOverview study={study} />
      <CaseStudyChallenges study={study} />
      <CaseStudyWorkSection study={study} />
      <CaseStudyResults study={study} />
      <CaseStudyTestimonial study={study} />
      <CaseStudyServices study={study} />
      <CaseStudyNavigation study={study} />
      <section className="bg-warm">
        <div className="container-omh flex flex-wrap items-center justify-between gap-7 py-12 sm:py-16">
          <div><h2 className="font-sans text-h3 font-semibold">Have a similar project in mind?</h2><p className="mt-4 max-w-[60ch] text-body text-ink/75">Let’s talk about your business, the challenge and what a useful result would look like.</p></div>
          <Button href="/contact" data-event="case_study_cta_click">Discuss your project</Button>
        </div>
      </section>
    </article>
  );
}
