import type { Metadata } from "next";
import {
  CaseStudyFeature,
  FAQAccordion,
  FinalCTA,
  FitSection,
  IncludedFeatures,
  PainPointSection,
  PricingPackages,
  ProcessSteps,
  ServiceCapabilityGrid,
  ServiceHero,
  WhyChooseSection,
} from "@/components/services/WordPressServiceSections";

export const metadata: Metadata = {
  title: "WordPress Development for UK Businesses | OMH",
  description:
    "WordPress websites built for UK businesses that need better structure, easier management, stronger performance and clearer conversion support.",
};

export default function WordPressDevelopmentPage() {
  return (
    <>
      <ServiceHero />
      <PainPointSection />
      <FitSection />
      <ServiceCapabilityGrid />
      <ProcessSteps />
      <PricingPackages />
      <IncludedFeatures />
      <CaseStudyFeature />
      <WhyChooseSection />
      <FAQAccordion />
      <FinalCTA />
    </>
  );
}
