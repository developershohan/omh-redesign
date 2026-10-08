import type { Metadata } from "next";
import { ServiceJsonLd } from "@/lib/schema";
import {
  MaintenanceCapabilityGrid,
  MaintenanceFAQAccordion,
  MaintenanceFinalCTA,
  MaintenanceFitSection,
  MaintenanceHero,
  MaintenanceIssueSection,
  MaintenancePricingPackages,
  MaintenanceProcessSteps,
  MaintenanceProofSection,
  MaintenanceWhyChooseSection,
} from "@/components/services/WordPressMaintenanceSections";
import { RelatedServices } from "@/components/RelatedServices";
import { ServiceCaseStudies } from "@/components/CaseStudies";
import { MaintenanceControlRoom } from "@/components/ServiceMedia";
import { SiteTestimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: { absolute: "WordPress Website Maintenance Packages for UK Businesses | OMH" },
  alternates: { canonical: "https://onlinemarketinghelp.co.uk/wordpress-website-maintenance/" },
  description:
    "WordPress website maintenance packages for UK businesses. Updates, backups, monitoring and technical support from £300. Three clear plans with published allowances.",
};

export default function WordPressWebsiteMaintenancePage() {
  return (
    <div className="service-page service-page-maintenance">
      <ServiceJsonLd path="/wordpress-website-maintenance" />
      <MaintenanceHero />
      <MaintenanceControlRoom />
      <MaintenancePricingPackages />
      <MaintenanceIssueSection />
      <MaintenanceProcessSteps />
      <MaintenanceCapabilityGrid />
      <MaintenanceProofSection />
      <MaintenanceFitSection />
      <MaintenanceWhyChooseSection />
      <ServiceCaseStudies
        serviceId="maintenance"
        title="WordPress maintenance packages inside a connected marketing programme"
        body="How routine maintenance sat alongside SEO, paid media and conversion work for a client website."
        limit={1}
      />
      <SiteTestimonials eventPrefix="maintenance" accent="bg-[#f2c675]" />
      <RelatedServices
        eventPrefix="maintenance"
        title="Move from routine WordPress maintenance to the right wider service"
        body="Maintenance keeps agreed WordPress work under control. Larger rebuilds, paid campaigns and ecommerce projects need their own scope, explained on these related pages."
        links={[
          {
            title: "WordPress Development",
            href: "/wordpress-development",
            body: "Plan a larger rebuild, new page structure or functionality that sits outside your WordPress maintenance package.",
          },
          {
            title: "Search Engine Optimisation",
            href: "/seo-services",
            body: "Connect ongoing WordPress maintenance services with crawl, index, content and internal-linking priorities.",
          },
          {
            title: "Shopify Development",
            href: "/shopify-development",
            body: "Explore a dedicated ecommerce build when the requirement is better suited to Shopify.",
          },
        ]}
      />
      <MaintenanceFAQAccordion />
      <MaintenanceFinalCTA />
    </div>
  );
}
