import type { Metadata } from "next";
import { ServiceCaseStudies } from "@/components/CaseStudies";
import { RelatedServices } from "@/components/RelatedServices";
import {
  SocialFAQ,
  SocialFinalCTA,
  SocialGoals,
  SocialGuaranteeAndReporting,
  SocialHero,
  SocialPricing,
  SocialReviews,
  SocialSupport,
} from "@/components/services/SocialMediaMarketingSections";

export const metadata: Metadata = {
  title: "Social Media Marketing for UK Businesses",
  description:
    "Social media marketing support for UK businesses, including strategy, content, graphics, account optimisation, community management, reporting and paid social support.",
  alternates: { canonical: "https://onlinemarketinghelp.co.uk/social-media-marketing/" },
};

export default function SocialMediaMarketingPage() {
  return (
    <div className="service-page service-page-social">
      <SocialHero />
      <SocialGoals />
      <SocialSupport />
      <SocialPricing />
      <ServiceCaseStudies
        serviceId="social-media"
        title="Social media work in a wider acquisition programme"
        body="The source case-study library connects social media with website, search and paid campaign delivery. Published results remain labelled by their original workstream."
      />
      <SocialGuaranteeAndReporting />
      <SocialReviews />
      <SocialFAQ />
      <RelatedServices
        eventPrefix="social"
        title="Connect social activity to the creative, search and website around it"
        body="Social media works best when the brand, landing experience and connected acquisition channels tell the same story."
        links={[
          { title: "Google Ads Management", href: "/google-adwords-ppc", body: "Coordinate paid search with the offers and landing pages promoted through social." },
          { title: "Search Engine Optimisation", href: "/search-engine-optimisation", body: "Build lasting organic visibility around the same audience needs and topics." },
          { title: "WordPress Development", href: "/wordpress-development", body: "Improve the pages and conversion journeys visitors reach from social content." },
        ]}
      />
      <SocialFinalCTA />
    </div>
  );
}
