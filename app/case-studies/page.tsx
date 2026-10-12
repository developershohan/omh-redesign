import type { Metadata } from "next";
import { CaseStudyArchive } from "@/components/case-studies/CaseStudyArchive";
import { defaultOgImages } from "@/lib/schema";

const title = "Digital Marketing Case Studies | SEO, PPC & Websites | OMH";
const description =
  "Explore digital marketing case studies across SEO, PPC, websites and ecommerce. See the challenge, work delivered, and measured results behind real projects.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "https://onlinemarketinghelp.co.uk/case-studies/",
  },
  openGraph: {
    title,
    description,
    url: "https://onlinemarketinghelp.co.uk/case-studies/",
    type: "website",
    locale: "en_GB",
    images: defaultOgImages,
  },
};

export default function CaseStudiesPage() {
  return <CaseStudyArchive />;
}
