import type { Metadata } from "next";
import { ServiceJsonLd } from "@/lib/schema";
import {
  SeoEvidence,
  SeoFAQ,
  SeoFinalCTA,
  SeoHero,
  SeoInternalLinkingMap,
  SeoPillarAtlas,
  SeoPricing,
  SeoProcess,
  SeoSignalSection,
} from "@/components/services/SearchEngineOptimisationSections";
import { RelatedServices } from "@/components/RelatedServices";
import { ServiceCaseStudies } from "@/components/CaseStudies";
import { SeoSearchLandscape } from "@/components/ServiceMedia";
import { SiteTestimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Search Engine Optimisation Services UK",
  description:
    "SEO services for UK businesses covering audits, keyword research, technical SEO, on-page optimisation, content architecture, authority and reporting.",
  alternates: {
    canonical: "https://onlinemarketinghelp.co.uk/search-engine-optimisation/",
  },
};

export default function SearchEngineOptimisationPage() {
  return (
    <div className="service-page service-page-seo">
      <ServiceJsonLd path="/search-engine-optimisation" />
      <SeoHero />
      <SeoSearchLandscape />
      <SeoSignalSection />
      <SeoPillarAtlas />
      <SeoInternalLinkingMap />
      <SeoProcess />
      <SeoPricing />
      <SeoEvidence />
      <ServiceCaseStudies
        serviceId="seo"
        title="See the SEO work in context"
        body="Audits, local visibility, content, technical improvements and measurement, shown against the projects that needed them."
        limit={4}
      />
      <SiteTestimonials eventPrefix="seo" accent="bg-[#ee8c67]" />
      <RelatedServices
        eventPrefix="seo"
        title="Connect organic visibility with the website and acquisition around it"
        body="SEO recommendations often depend on development, ongoing technical care and a sensible paid-search plan. These pages explain the closest connected services."
        links={[
          {
            title: "WordPress Development",
            href: "/wordpress-development",
            body: "Build or restructure the service pages, templates and content architecture an SEO plan requires.",
          },
          {
            title: "WordPress Website Maintenance",
            href: "/wordpress-website-maintenance",
            body: "Keep agreed technical fixes, software updates and important website checks under control.",
          },
          {
            title: "Google Ads PPC Management",
            href: "/google-adwords-ppc",
            body: "Capture relevant search demand while organic visibility and content mature over time.",
          },
        ]}
      />
      <SeoFAQ />
      <SeoFinalCTA />
    </div>
  );
}
