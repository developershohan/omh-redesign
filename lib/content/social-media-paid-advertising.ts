import { socialMediaMarketing } from "@/lib/content/social-media-marketing";
import { siteTestimonials } from "@/lib/content/testimonials";

export const socialMediaPaidAdvertising = {
  hero: {
    eyebrow: "Social media paid advertising for businesses",
    title: "Paid social campaigns built for visibility, interaction and conversions.",
    body: "Our social media specialists create organised paid campaigns that expand reach, increase relevant website traffic and pursue a clear return on advertising investment.",
  },
  strategyQuestions: [
    "What is the right budget allocation for each platform?",
    "How can the campaign target the right audience effectively?",
    "Which advertising formats best fit the goal?",
  ],
  capabilities: [
    { title: "Advanced audience segmentation", body: "We use demographic, geographic, interest, behaviour and purchase data to group audiences and present more relevant advertising to the people most likely to respond." },
    { title: "Ad creative optimisation", body: "We develop and refine images, video, headlines and copy that communicate the brand’s value, then test combinations against clicks, engagement and conversions." },
    { title: "Tracking and analytics", body: "We configure measurement for click-through rate, conversion rate, cost per conversion and return on ad spend, using performance data to guide campaign decisions." },
    { title: "Strategic budget management", body: "We allocate budget around your goals and resources, monitor performance and move spend towards the campaigns with the strongest potential." },
    { title: "A/B testing", body: "Controlled comparisons of copy, imagery and targeting help reveal what resonates with the audience and create a practical basis for continuous improvement." },
    { title: "Continuous campaign optimisation", body: "We refine targeting, bids, placements and campaign structure as performance and market conditions change, keeping activity aligned with the objective." },
  ],
  packages: [
    { name: "Seed", price: "£850", adSpend: "£1,000", bestFor: "A focused paid-social starting point.", features: ["Campaign planning and strategy", "Platform selection and setup", "Audience research and segmentation", "Ad creative development", "Advertising campaign setup", "Social media page creation: not included", "Social media page optimisation: not included", "Monthly meeting", "24-hour onboarding", "Campaign research", "Monitoring and performance tracking: not included", "Monthly reporting"] },
    { name: "Shoot", price: "£1,450", adSpend: "£3,000", bestFor: "Campaign delivery with page setup and active optimisation.", features: ["Campaign planning and strategy", "Platform selection and setup", "Audience research and segmentation", "Ad creative development", "Advertising campaign setup", "1 social media page created", "2 social media pages optimised", "Monthly meeting", "24-hour onboarding", "Campaign research", "Monitoring and performance tracking", "Monthly reporting"] },
    { name: "Sapling", price: "£2,100", adSpend: "£3,000", bestFor: "The most complete published paid-social package.", features: ["Campaign planning and strategy", "Platform selection and setup", "Audience research and segmentation", "Ad creative development", "Advertising campaign setup", "2 social media pages created", "3 social media pages optimised", "Monthly meeting", "24-hour onboarding", "Campaign research", "Monitoring and performance tracking", "Monthly reporting"] },
  ],
  reviews: siteTestimonials,
  faqs: socialMediaMarketing.faqs,
} as const;
