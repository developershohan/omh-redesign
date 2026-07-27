import type { Metadata } from "next";
import {
  PpcCapabilityGrid,
  PpcFAQAccordion,
  PpcFinalCTA,
  PpcFitSection,
  PpcHero,
  PpcNeedSection,
  PpcPricingPackages,
  PpcProcessSteps,
  PpcProofSection,
  PpcWhyChooseSection,
} from "@/components/services/GoogleAdsPpcSections";
import { RelatedServices } from "@/components/RelatedServices";
import { ServiceCaseStudies } from "@/components/CaseStudies";
import { PpcCampaignStudio } from "@/components/ServiceMedia";

export const metadata: Metadata = {
  title: "Google Ads PPC Management for UK Businesses",
  description:
    "Google Ads and PPC campaign management for UK businesses, covering Search, Display, remarketing, Shopping, tracking, optimisation and reporting.",
  alternates: { canonical: "https://onlinemarketinghelp.co.uk/google-adwords-ppc/" },
};

const relatedServices = [
  {
    title: "WordPress Development",
    href: "/wordpress-development",
    body: "Build or improve campaign landing pages, forms and conversion journeys on WordPress.",
  },
  {
    title: "Shopify Development",
    href: "/shopify-development",
    body: "Prepare product pages, checkout journeys and store foundations for Shopping traffic.",
  },
  {
    title: "Amazon PPC Advertising",
    href: "/amazon-ppc-advertising-agency-uk",
    body: "Extend paid acquisition into the Amazon marketplace with product, keyword and audience campaigns.",
  },
];

export default function GoogleAdwordsPpcPage() {
  return (
    <div className="service-page service-page-ppc">
      <PpcHero />
      <PpcCampaignStudio />
      <PpcCapabilityGrid />
      <PpcFitSection />
      <PpcNeedSection />
      <PpcProofSection />
      <PpcProcessSteps />
      <PpcPricingPackages />
      <PpcWhyChooseSection />
      <ServiceCaseStudies
        serviceId="google-ads"
        title="Campaign work alongside SEO and website delivery"
        body="The source library often combines paid media with organic and website work. These pages separate the workstreams and label every result claim that still needs evidence."
      />
      <RelatedServices
        eventPrefix="ppc"
        title="Connect paid traffic with the website it depends on"
        body="Google Ads works alongside the pages, product data, forms and technical setup visitors reach after a click. These services cover the most relevant next steps."
        links={relatedServices}
      />
      <PpcFAQAccordion />
      <PpcFinalCTA />
    </div>
  );
}
