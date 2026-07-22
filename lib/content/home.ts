import type { CaseMeta } from "@/components/ui/Case";

// Homepage content (brief §8). Copy comes from the brief where supplied;
// every unverified fact stays a slot — see Phase 0 §7 asklist.

export const hero = {
  eyebrow: "UK digital marketing & web development agency",
  // brief-supplied headline; annotated phrase marked in the page component
  headline: ["Generate More ", "Qualified Leads", " and Sales From Your Digital Marketing"] as const,
  standfirst:
    "We help UK service businesses and ecommerce brands grow through Google Ads, Meta Ads, SEO, and conversion-focused websites, supported by clear reporting and reliable tracking.",
  primaryCta: { label: "Book a Growth Consultation", href: "/contact" },
  secondaryCta: { label: "View Client Results", href: "#proof" },
};

export const routes = [
  {
    kick: "For UK service businesses",
    title: "“I need more qualified leads”",
    body: "For service businesses that want a more reliable flow of enquiries, with lead quality measured, not assumed.",
    link: { label: "Generate more qualified leads", href: "/solutions/generate-qualified-leads" },
  },
  {
    kick: "For UK ecommerce brands",
    title: "“I want more ecommerce sales”",
    body: "For online retailers that want to improve acquisition, conversion, and measurement across Google, Meta, and Amazon.",
    link: { label: "Increase ecommerce sales", href: "/solutions/increase-ecommerce-sales" },
  },
];

export const problems = [
  "Your campaigns are producing enquiries, but too many are poor quality.",
  "Your website gets traffic but does not turn enough visitors into customers.",
  "You are spending on marketing without a clear view of what is profitable.",
  "Your reports show numbers but do not explain what to do next.",
  "Your marketing suppliers and developers are not working together.",
  "Your tracking does not reflect the real value of your leads or sales.",
];

export const method = [
  {
    kick: "Attract",
    title: "Attract qualified traffic",
    body: "Campaigns built around commercial intent rather than click volume.",
    services: [
      { label: "Google Ads", href: "/services/google-ads-management" },
      { label: "Meta Ads", href: "/services/meta-ads-management" },
      { label: "SEO", href: "/services/seo" },
      { label: "Local SEO", href: "/services/local-seo" },
    ],
    fpo: { tag: "Screenshot · 16:10", title: "Real campaign structure", note: "Actual Google Ads account view, client permission required." },
  },
  {
    kick: "Convert",
    title: "Convert more visitors",
    body: "Pages designed and built to turn attention into enquiries and orders.",
    services: [
      { label: "Website design", href: "/services/website-design" },
      { label: "Landing pages", href: "/solutions/improve-website-conversion" },
      { label: "WordPress development", href: "/wordpress-development" },
      { label: "Conversion improvement", href: "/solutions/improve-website-conversion" },
    ],
    fpo: { tag: "Client work · 16:10", title: "Real website work", note: "Editorial mock-up of a live client build." },
  },
  {
    kick: "Measure",
    title: "Measure what drives growth",
    body: "Tracking that reflects lead quality and sales, so decisions rest on evidence.",
    services: [
      { label: "GA4", href: "/services/seo" },
      { label: "Tag Manager", href: "/services/seo" },
      { label: "Conversion tracking", href: "/solutions/improve-website-conversion" },
      { label: "Reporting", href: "/about" },
    ],
    fpo: { tag: "Analytics · 16:10", title: "Real GA4 report", note: "Shown tastefully, annotated, permission required." },
  },
  {
    kick: "Scale",
    title: "Scale with ongoing support",
    body: "Strategy, optimisation, and technical support under one roof, with a named account manager.",
    services: [
      { label: "Strategy", href: "/about" },
      { label: "Optimisation", href: "/services/google-ads-management" },
      { label: "Technical support", href: "/services/website-maintenance" },
      { label: "Account management", href: "/about" },
    ],
    fpo: { tag: "Photo · 16:10", title: "Real strategy session", note: "Team photography, natural colour, no staging." },
  },
];

export const featuredCase: CaseMeta = {
  sector: "Home improvement",
  sampleNote: "Sample layout — structure from the brief; data to be populated from client records.",
  challenge: "High lead volume but poor lead quality",
  work: "Google Ads restructuring, landing page improvement, conversion tracking",
  href: "/case-studies",
};

export const supportingCases: CaseMeta[] = [
  {
    sector: "Bakery",
    challenge: "",
    work: "Local SEO campaign — details to be rebuilt from client records",
    href: "/case-studies",
  },
  {
    sector: "Car showroom",
    challenge: "",
    work: "SEO and website work — details to be rebuilt from client records",
    href: "/case-studies",
  },
];

export const finalCta = {
  headline: "Not sure what is holding back your growth?",
  body: "Tell us what you are currently doing, what is not working, and what you want to improve. We will recommend the clearest next step.",
  primary: { label: "Book a Growth Consultation", href: "/contact" },
  secondary: { label: "Send a Project Brief", href: "/contact" },
  nextSteps: [
    { lead: "Your enquiry is reviewed", rest: " — by whom, and how fast, to be confirmed with the team. ◈" },
    { lead: "A short call, if it fits", rest: " — no obligation, no scripted pitch." },
    { lead: "A clear recommendation", rest: " — even if that is “not yet” or “not us”." },
  ],
};
