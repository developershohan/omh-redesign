import type { Metadata } from "next";
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
  title: "WordPress Website Maintenance for UK Businesses",
  description:
    "Ongoing WordPress maintenance, updates, backups, monitoring and technical support for UK businesses that need a more reliable website.",
};

export default function WordPressWebsiteMaintenancePage() {
  return (
    <div className="service-page service-page-maintenance">
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
        title="Maintenance inside a connected marketing programme"
        body="The car-showroom source describes maintenance alongside SEO, paid media and conversion work, with its result claims retained for verification."
        limit={1}
      />
      <SiteTestimonials eventPrefix="maintenance" accent="bg-[#f2c675]" />
      <RelatedServices
        eventPrefix="maintenance"
        title="Move from routine care to the right wider service"
        body="Maintenance keeps agreed WordPress work under control. Larger rebuilds, paid campaigns and ecommerce projects need their own scope, explained on these related pages."
        links={[
          {
            title: "WordPress Development",
            href: "/wordpress-development",
            body: "Plan a larger rebuild, new page structure or functionality that sits outside routine maintenance.",
          },
          {
            title: "Search Engine Optimisation",
            href: "/search-engine-optimisation",
            body: "Connect ongoing technical care with crawl, index, content and internal-linking priorities.",
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
