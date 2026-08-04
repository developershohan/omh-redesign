import type { Metadata } from "next";
import { CaseStudyArchive } from "@/components/case-studies/CaseStudyArchive";
import { caseStudies } from "@/lib/content/case-studies";

export const metadata: Metadata = {
  title: "Digital Marketing and Website Case Studies",
  description: `Explore ${caseStudies.length} SEO, paid media, ecommerce and website case studies across hospitality, retail and local service businesses.`,
  alternates: {
    canonical: "https://onlinemarketinghelp.co.uk/case-studies/",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudyArchive />;
}
