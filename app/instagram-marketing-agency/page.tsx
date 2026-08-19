import type { Metadata } from "next";
import { SocialLandingPage } from "@/components/SocialLandingSections";

export const metadata: Metadata = {
  title: "Instagram Marketing Agency",
  description:
    "Social media marketing for businesses: SMM and SMO support that grows brand awareness, engagement and traffic across your social channels.",
  alternates: { canonical: "https://onlinemarketinghelp.co.uk/instagram-marketing-agency/" },
};

export default function InstagramMarketingPage() {
  return <SocialLandingPage variant="instagram" event="instagram_marketing" />;
}
