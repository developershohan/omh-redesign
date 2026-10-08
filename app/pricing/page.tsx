import type { Metadata } from "next";
import {
  PriceListFinalCta,
  PriceListHero,
  PriceTables,
} from "@/components/PriceListSections";

export const metadata: Metadata = {
  title: "All Services Price List",
  description:
    "Published package pricing for every Online Marketing Help service: WordPress and Shopify development, website maintenance, Google Ads, Amazon PPC, SEO, local SEO, social media management, Facebook, Instagram and paid social.",
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
