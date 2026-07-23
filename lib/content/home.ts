import type { CaseMeta } from "@/components/ui/Case";

export const hero = {
  eyebrow: "★★★★★ UK digital marketing & web development agency",
  headline: "Digital Marketing for Service Businesses and Ecommerce Brands",
  standfirst:
    "We help UK companies generate qualified leads and sales through Google Ads, Meta Ads, SEO, and conversion-focused websites. You run the business, we handle the strategy, delivery, tracking, and reporting.",
  primaryCta: { label: "Book a Growth Consultation", href: "/contact" },
  secondaryCta: { label: "View Client Results", href: "#proof" },
};

export const programs = [
  {
    range: "Lead generation",
    title: "Service Business Growth",
    body: "For UK service companies that need a more reliable flow of enquiries and a clearer view of lead quality.",
    href: "/solutions/generate-qualified-leads",
  },
  {
    range: "Online sales",
    title: "Ecommerce Growth",
    body: "For ecommerce brands that want better acquisition, stronger conversion, and cleaner tracking across paid and organic channels.",
    href: "/solutions/increase-ecommerce-sales",
  },
  {
    range: "Websites",
    title: "Conversion Website Build",
    body: "For businesses whose current site gets attention but does not turn enough visitors into enquiries, bookings, or orders.",
    href: "/services/website-design",
  },
  {
    range: "Ongoing support",
    title: "Marketing Partnership",
    body: "For teams that want campaigns, development, reporting, and technical support joined up under one roof.",
    href: "/contact",
  },
];

export const stats = [
  { value: "£4M+", label: "In marketing spend" },
  { value: "150+", label: "Businesses scaled" },
  { value: "6+", label: "Years in business" },
  { value: "100%", label: "UK business focus" },
];

export const featuredCase: CaseMeta = {
  sector: "Home improvement",
  sampleNote: "Sample layout - verified client result to be supplied before launch.",
  challenge: "High lead volume but poor lead quality",
  work: "Google Ads restructuring, landing page improvement, conversion tracking",
  href: "/case-studies",
};

export const supportingCases: CaseMeta[] = [
  {
    sector: "Bakery",
    challenge: "",
    work: "Local SEO campaign and website improvements - details to be rebuilt from client records",
    href: "/case-studies",
  },
  {
    sector: "Car showroom",
    challenge: "",
    work: "SEO and website work - details to be rebuilt from client records",
    href: "/case-studies",
  },
  {
    sector: "Professional services",
    challenge: "",
    work: "Paid search, tracking, and landing page testing - verified proof required",
    href: "/case-studies",
  },
];

export const difference = [
  {
    title: "Campaigns Built Around Commercial Intent",
    body: "We focus on the searches, audiences, and journeys most likely to produce useful enquiries or profitable sales.",
  },
  {
    title: "Websites Designed to Convert",
    body: "Pages are planned around trust, clarity, speed, and the next action a real customer needs to take.",
  },
  {
    title: "Tracking That Supports Decisions",
    body: "Reporting should show what is working, what is wasting budget, and what to do next.",
  },
  {
    title: "SEO With Proper Structure",
    body: "Service, location, and category pages are organised so customers and search engines can understand the offer.",
  },
  {
    title: "Clean WordPress Development",
    body: "We build and maintain WordPress sites with performance, usability, and long-term editing in mind.",
  },
  {
    title: "Joined-Up Delivery",
    body: "Marketing, development, conversion, and reporting are treated as one connected system instead of separate tasks.",
  },
];

export const services = [
  { label: "Google Ads", href: "/services/google-ads-management" },
  { label: "Meta Ads", href: "/services/meta-ads-management" },
  { label: "SEO", href: "/services/seo" },
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "Website Design", href: "/services/website-design" },
  { label: "WordPress Development", href: "/wordpress-development" },
  { label: "Website Maintenance", href: "/services/website-maintenance" },
  { label: "Conversion Improvement", href: "/solutions/improve-website-conversion" },
];

export const testimonials = [
  {
    quote:
      "The right website and marketing structure makes it easier to understand what is working and where growth is coming from.",
    name: "Client proof slot",
  },
  {
    quote:
      "Clearer campaigns, stronger landing pages, and better tracking give the whole team more confidence in the next move.",
    name: "Verified review required",
  },
  {
    quote:
      "A joined-up marketing partner is valuable when the website, ads, SEO, and reporting all need to work together.",
    name: "Client name to confirm",
  },
];

export const recognition = [
  "Google Ads",
  "Meta Ads",
  "GA4",
  "Tag Manager",
  "WordPress",
  "WooCommerce",
  "Local SEO",
  "Landing Pages",
  "Reporting",
  "Conversion Rate",
  "Technical SEO",
  "Account Support",
];

export const insights = [
  {
    category: "Strategy",
    title: "How to Tell Whether Your Marketing Is Producing the Right Leads",
    body: "Look beyond form fills and track the quality signals that actually influence sales.",
    href: "/blog",
  },
  {
    category: "Websites",
    title: "Why Service Pages Still Matter for SEO and Conversion",
    body: "Dedicated pages help visitors understand your offer and help search engines rank the right topic.",
    href: "/blog",
  },
  {
    category: "Tracking",
    title: "The Reporting Setup Every Growing Business Should Have",
    body: "Useful reporting connects traffic, enquiries, sales value, and next actions.",
    href: "/blog",
  },
];

export const finalCta = {
  headline: "Ready to make your marketing easier to measure and easier to scale?",
  body: "Tell us what you are currently doing, what is not working, and what you want to improve. We will recommend the clearest next step.",
  primary: { label: "Book a Growth Consultation", href: "/contact" },
  secondary: { label: "Send a Project Brief", href: "/contact" },
};
