import type { Metadata } from "next";
import {
  PriceListFinalCta,
  PriceListHero,
  PriceTables,
} from "@/components/PriceListSections";

export const metadata: Metadata = {
  title: "All Services Price List",
  description:
    "Published package pricing for every Online Marketing Help service: WordPress and Shopify development, website maintenance, PPC, SEO, local SEO, social media, logo, brochure and copywriting.",
  alternates: { canonical: "https://onlinemarketinghelp.co.uk/all-services-price-list/" },
};

export default function PriceListPage() {
  return (
    <main>
      <PriceListHero />
      <PriceTables />
      <PriceListFinalCta />
    </main>
  );
}
