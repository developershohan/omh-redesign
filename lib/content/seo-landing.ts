// Verbatim copy from the live /best-seo-services/ and /best-local-seo-services/
// pages (docs/legacy-pages-plan.md Phase 3). Wording, figures and the source's
// own typos are reproduced exactly — only the typesetting changes.
//
// Both pages are built from the same Elementor template, so they share a shape.
// Sections present on the live pages but carrying no copy (the empty 3-column
// "SEO Services" grids, the results screenshots, the "Customised Work For"
// industries image, the empty "Popular SEO Articles" grid) have no text to
// reproduce and are therefore not rendered.

export type LandingTestimonial = { name: string; quote: string };

export type SeoLanding = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  standfirst: string;
  ctas: { checklist: string; audit: string; phone: string };
  offer: { heading: string; subheading: string; submit: string };
  about: {
    eyebrow: string;
    title: string;
    kicker: string;
    body: string;
    claims: readonly string[];
  };
  offering: { eyebrow: string; title: string; body: string };
  checklist: {
    eyebrow: string;
    title: string;
    items: readonly { label: string; value: string }[];
    totalLabel: string;
    total: string;
    download: string;
    audit: string;
  };
  testimonials: { eyebrow: string; title: string; body: string; items: readonly LandingTestimonial[] };
  cta: { title: string; accent: string; offerTitle: string; offerSave: string; submit: string };
};

// Identical review set on both pages, in the order the carousel lists them.
const sharedTestimonials: readonly LandingTestimonial[] = [
  {
    name: "Leah Cross",
    quote:
      "Online Marketing Help really supported my accounting business from the get go. I had no experience or knowledge of marketing and really wanted to find a company i could rely on and trust. I have now been with working with these guys for over a year and have been nothing short of amazed by the way they have handled my marketing and website development. I could not ask for a better company. They always seem to be right on the pulse with almost instant responses, flexible pricing plans and really insightful monthly meetings. I would not hesitate to recommend online marketing help.",
  },
  {
    name: "Tania Smyths",
    quote:
      "We have received excellent support and service building our new website from Melissa with follow on support from Sarah. They made the whole process so easy and communication was excellent from the onset. Everything was explained and we really felt like we learnt alot from the team. We have now signed up for SEO and paid ads for the next few months and we are so pleased to report our website visitor numbers has already increased. Thank you again!",
  },
  {
    name: "Gixxer 600",
    quote:
      "Sarah was a real pleasure to work with today, she helped me with all of my questions and concerns and then proceeded to take care of all my needs and requests. Sarah made me feel as if she really cared and went well above and beyond the call of duty in taking care of me today. She was patient, she listened to me and I appreciate her precise way as well as her expertise in quickly resolving my issues. Stuart Technical Director",
  },
  {
    name: "Natasha Kendle",
    quote:
      "Online Marketing Help created me a logo for my small business. Previously I had an Etsy shop where they were running ads for me and then I opted to have my own wordpress website built for me. The process was so easy and Sarah was fantastic in presenting me with ideas and making the changes I needed to be done. I am now running an SEO package with them and FB paid ads and I am really happy with the results. Thank you Online Marketing Help for your help so far with my new business, I really couldn't have done it without you.",
  },
];

export const bestSeoServices: SeoLanding = {
  eyebrow: "SEO Services",
  title: "SEO Services: Boost Traffic and Increases Revenue",
  titleAccent: "Revenue",
  standfirst:
    "Search Engine Optimisation (SEO) Helps You Get Organic Traffic To Your Business Website And Allows You To Turn Visitors Into Leads. Grow Your Business With The Top Rated SEO Company in the UK. Customized SEO Solutions For Your Specific Needs.",
  ctas: {
    checklist: "SEO Checklist",
    audit: "Free SEO Audit",
    phone: "or Call Your SEO Expert on +(44) 0203 4893934",
  },
  offer: {
    heading: "Free 30-Min Consultation",
    subheading: "Get 20% OFF Today",
    submit: "Get A Free SEO Consultation",
  },
  about: {
    eyebrow: "About",
    title: "best small business SEO agency",
    kicker: "Boost Your Organic traffic by Upto 466% with our Proven SEO Strategy.",
    body: "We have a team of skilled consultants available to help you with your SEO support needs. We are always open and ready to fix SEO issues and create SEO strategies that work for the long term. The average enquiry tp proposal time is 2 hours.",
    claims: [
      "Trusted SEO Agency",
      "Best Reviewed SEO agency on Trustpilot.",
      "High client retention rate of 97%.",
      "Client satisfaction rate of 99%.",
      "Certified partner of Google AdWords.",
    ],
  },
  offering: {
    eyebrow: "We Offer",
    title: "SEO Services",
    body: "Our professional services will drive relevant traffic, boost local leads & grow your business. [Contact us](/contact) to find out how.",
  },
  checklist: {
    eyebrow: "SEO checklist",
    title: "Get your marketing plan in top shape",
    items: [
      { label: "SEO Checklist Google Sheet", value: "£100" },
      { label: "Business Website Audit", value: "£200" },
    ],
    totalLabel: "TOTAL VALUE:",
    total: "£300",
    download: "Download SEO List",
    audit: "Free SEO Audit",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What Our Clients Say On Google",
    body: "Our Client Feedback Is What Keeps Us Striving For More And Improving Our Best Practices. See What Our Clients Say About Us Here.",
    items: sharedTestimonials,
  },
  cta: {
    title: "Want to speak with a SEO Expert? Reach us here!",
    accent: "Reach us here!",
    offerTitle: "Get Your Free SEO audit",
    offerSave: "Save £100",
    submit: "Claim Now!",
  },
};

export const bestLocalSeoServices: SeoLanding = {
  eyebrow: "Local SEO Services",
  title: "affordable local sEO services From £159",
  titleAccent: "£159",
  standfirst:
    "Local search is powerful for small businesses. Our local SEO packages focus on making your website visible and growing your online presence, both locally and globally.",
  ctas: {
    checklist: "Local SEO Checklist",
    audit: "Free Local SEO Audit",
    phone: "or Call Your Local SEO Expert on +(44) 0203 4893934",
  },
  offer: {
    heading: "Free 30-Min Consultation",
    subheading: "Get 20% OFF Today",
    submit: "Get A Free Local SEO Consultation",
  },
  about: {
    eyebrow: "About",
    title: "Best local SEO marketing company",
    kicker: "With 100's of successful small business Clients",
    body: "We have a team of skilled consultants available 24 hours a day 7 days a week to help you with your SEO support needs. We are always open and ready to fix SEO issues FAST! The average resolve time here is 30 minutes.",
    claims: [
      "Trusted Local SEO Agency",
      "Best Reviewed SEO agency on Trustpilot.",
      "High client retention rate of 97%.",
      "High client satisfaction rate of 99%.",
      "Certified partner of Google AdWords.",
    ],
  },
  offering: {
    eyebrow: "We Offer",
    title: "Local SEO Services",
    body: "Our professional services will drive relevant traffic, boost local leads & grow your business. [Contact us](/contact) to find out how.",
  },
  checklist: {
    eyebrow: "local SEO checklist",
    title: "Get your marketing plan in top shape",
    items: [
      { label: "137 Mega Local SEO Check List", value: "£100" },
      { label: "Business Website Audit", value: "£200" },
    ],
    totalLabel: "TOTAL VALUE:",
    total: "£300",
    download: "Download Local SEO List",
    audit: "Free Local SEO Audit",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What Our Clients Say On Google",
    body: "At Online Marketing Help we strive to do the best work for our clients. Don’t just take our word for it. View our client testimonials here.",
    items: sharedTestimonials,
  },
  cta: {
    title: "Want to speak with a Local SEO Expert? Reach us here!",
    accent: "Reach us here!",
    offerTitle: "Get Your Free audit",
    offerSave: "Save £100",
    submit: "Claim Now!",
  },
};
