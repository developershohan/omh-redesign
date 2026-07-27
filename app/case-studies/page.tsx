import type { Metadata } from "next";
import { CaseStudiesHub } from "@/components/CaseStudies";

export const metadata: Metadata = {
  title: "Digital Marketing and Website Case Studies",
  description:
    "Explore nine SEO, paid media, ecommerce and website case studies, with published source claims and evidence status shown clearly.",
  alternates: {
    canonical: "https://onlinemarketinghelp.co.uk/case-studies/",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesHub />;
}
