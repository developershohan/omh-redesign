import { CaseStudyHero, CaseStudyOverview } from "@/components/case-studies/CaseStudyHero";
import { CaseStudyNavigation } from "@/components/case-studies/CaseStudyNavigation";
import {
  CaseStudyResults,
  CaseStudyServices,
  CaseStudyTestimonial,
} from "@/components/case-studies/CaseStudyResults";
import {
  CaseStudyChallenges,
  CaseStudyWorkSection,
} from "@/components/case-studies/CaseStudyWorkSection";
import { FinalCta } from "@/components/ui/FinalCta";
import { caseStudies, type CaseStudy } from "@/lib/content/case-studies";

export function CaseStudyArticle({ study }: { study: CaseStudy }) {
  const index = caseStudies.indexOf(study);

  return (
    <article>
      <CaseStudyHero study={study} index={index} />
      <CaseStudyOverview study={study} />
      <CaseStudyChallenges study={study} />
      <CaseStudyWorkSection study={study} index={index} />
      <CaseStudyResults study={study} />
      <CaseStudyTestimonial study={study} />
      <CaseStudyServices study={study} />
      <CaseStudyNavigation study={study} />
      <FinalCta
        title="Plan the work and measurement together."
        titleAccent="and measurement together."
        body="Tell us the business objective, starting data and service support you need. We will recommend a practical scope and what should be measured."
        primary={{
          label: "Discuss a Similar Project",
          event: "case_study_cta_click",
        }}
        contactEvents={{ phone: "case_study_phone_click", email: "case_study_email_click" }}
      />
    </article>
  );
}
