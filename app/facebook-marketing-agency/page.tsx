import type { Metadata } from "next";
import { SocialLandingPage } from "@/components/SocialLandingSections";

export const metadata: Metadata = {
  title: "Facebook Marketing Agency",
  description:
    "Social media marketing for businesses: SMM and SMO support that grows brand awareness, engagement and traffic across your social channels.",
  alternates: { canonical: "https://onlinemarketinghelp.co.uk/facebook-marketing-agency/" },
};

export default function FacebookMarketingPage() {
  return <SocialLandingPage variant="facebook" event="facebook_marketing" />;
}
