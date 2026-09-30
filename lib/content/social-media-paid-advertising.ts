import { siteTestimonials } from "@/lib/content/testimonials";

export const socialMediaPaidAdvertising = {
  hero: {
    eyebrow: "Social media paid advertising for UK businesses",
    title: "Paid social media advertising agency built for visibility and conversions.",
    body: "We are a UK paid social media advertising agency based in Essex, working with businesses across the country. Our specialists plan and manage paid campaigns across Facebook, Instagram, TikTok and LinkedIn that expand reach, bring in relevant website traffic and work towards a clear return on ad spend.",
  },
  strategyQuestions: [
    "What is the right budget allocation for each platform?",
    "How do we reach the right audience on each platform?",
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
  guarantee: {
    title: "A money-back promise, once final terms are confirmed.",
    body: "Our experience gives us confidence in the work we deliver.",
  },
  faq: {
    title: "Paid social media advertising, answered.",
    description: "The questions we are asked most often before starting a campaign.",
  },
  finalCta: {
    title: "Want your paid social handled properly?",
    titleAccent: "handled properly?",
    body: "Book a call at a time that suits you, or speak to the team. We will look at what you are running now before recommending a plan.",
  },
  faqs: [
    { q: "What is paid social media advertising?", a: "Paid social media advertising is running promoted ads on platforms like Facebook, Instagram, TikTok and LinkedIn, where you pay to place your message in front of a defined audience instead of relying on organic reach. You can target by interest, behaviour and location, and measure the return on what you spend." },
    { q: "What are the benefits of paid social media advertising?", a: "Paid social gives you fast visibility, precise audience targeting and clear measurement. You can reach the right people quickly, test what works, control spend day to day and tie results back to leads, sales or return on ad spend." },
    { q: "How does paid advertising on social media work?", a: "We set the campaign goal, choose the platforms your buyers use, build the audience targeting and creative, then launch and manage the ads. From there we track performance, run tests and move budget towards what is converting." },
    { q: "How much does paid social media advertising cost?", a: "Management starts at £850 a month with a £1,000 minimum ad spend on the Seed package, rising to £2,100 management on Sapling. Ad spend is separate and set around your goals. See the packages above for what each level includes." },
    { q: "What types of paid social media advertising do you run?", a: "We run the main paid formats on each platform, including image and video ads, carousels, stories and reels placements, lead generation ads and retargeting. The mix depends on your goal and where your audience is most active." },
    { q: "What platforms do you cover?", a: "We run paid campaigns across Facebook, Instagram, TikTok and LinkedIn, and will recommend the right channel mix for your audience and goal. If one platform matters most, see our [Facebook Ads marketing agency](/facebook-marketing-agency) service or our [Instagram advertising services](/instagram-marketing-agency)." },
    { q: "How soon will I see results?", a: "Paid social can generate clicks and views almost straight away, while conversions take time to optimise. Many campaigns settle into a steadier flow after four to six weeks. We shape the approach around your budget and goals." },
    { q: "Can I approve the ads before they go live?", a: "Yes. We send new ad creative for your approval before anything goes live, and confirm once the campaign is scheduled." },
    { q: "Will I get reports?", a: "Yes. You get a monthly analytics report showing campaign progress against your goals, plus a call to talk through it." },
    { q: "What other services do you offer?", a: "We are a full-service website development and online marketing agency. Alongside paid social we run [Google Ads](/google-adwords-ppc), [SEO](/search-engine-optimisation), and [website design and development](/wordpress-development), so paid, search and landing pages can work together. Paid campaigns drive immediate reach, but [organic social media marketing services](/social-media-marketing-services) build the community and content foundation that keeps working between campaigns." },
  ],
} as const;
