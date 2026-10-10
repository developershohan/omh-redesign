// Navigation and company facts, kept out of layout code (brief §21/§22).
// IA matches the master brief §7. `ready: true` marks pages that are actually
// designed in this preview; every other route falls through to the coming-soon
// page (app/[...slug]), so the client can walk the full planned structure
// without hitting a 404.

export type NavLink = { label: string; href: string; ready?: boolean };
export type NavColumn = { heading?: string; links: NavLink[] };
export type NavItem = { label: string; href?: string; columns?: NavColumn[] };

// Shared by the Services mega menu and the footer.
const serviceColumns: NavColumn[] = [
  {
    heading: "Websites",
    links: [
      { label: "Website Designs", href: "/website-designs", ready: true },
      { label: "Shopify Development", href: "/shopify-development", ready: true },
      { label: "Website Maintenance", href: "/wordpress-website-maintenance", ready: true },
      { label: "WordPress Development", href: "/wordpress-development", ready: true },
    ],
  },
  {
    heading: "Paid Advertising",
    links: [
      { label: "Paid Social Advertising", href: "/social-media-paid-advertising", ready: true },
      { label: "Amazon PPC Advertising", href: "/amazon-ppc-advertising-agency-uk", ready: true },
      { label: "Google Ads Management", href: "/google-adwords-ppc", ready: true },
    ],
  },
  {
    heading: "Organic Growth",
    links: [
      { label: "Local SEO", href: "/local-seo", ready: true },
      { label: "SEO Services", href: "/seo-services", ready: true },
    ],
  },
  {
    heading: "Creative & Social",
    links: [
      { label: "Facebook Marketing", href: "/facebook-marketing-agency", ready: true },
      { label: "Instagram Marketing", href: "/instagram-marketing-agency", ready: true },
      { label: "Social Media Management", href: "/social-media-marketing-services", ready: true },
    ],
  },
];

export const primaryNav: NavItem[] = [
  {
    label: "Solutions",
    columns: [
      {
        links: [
          { label: "Grow Local Visibility", href: "/solutions/grow-local-visibility", ready: true },
          { label: "Increase Ecommerce Sales", href: "/solutions/increase-ecommerce-sales", ready: true },
          { label: "Improve Website Conversion", href: "/solutions/improve-website-conversion", ready: true },
          { label: "Generate More Qualified Leads", href: "/solutions/generate-qualified-leads", ready: true },
          { label: "Outsource Your Digital Marketing", href: "/solutions/outsource-digital-marketing", ready: true },
        ],
      },
    ],
  },
  {
    label: "Services",
    columns: serviceColumns,
  },
  {
    // AI Voice Agents has its own page; the other services are sections of /ai-services.
    label: "AI Services",
    columns: [
      {
        links: [
          { label: "AI Voice Agents", href: "/ai-voice-agents", ready: true },
          { label: "AI Websites & Software", href: "/ai-services#ai-websites-software", ready: true },
          { label: "AI Technology Consulting", href: "/ai-services#ai-consulting", ready: true },
          { label: "AI Integrations", href: "/ai-services#ai-integrations", ready: true },
          { label: "AI Agents", href: "/ai-services#ai-agents", ready: true },
          { label: "AI Chatbot", href: "/ai-services#ai-chatbot", ready: true },
          { label: "AI UGC", href: "/ai-services#ai-ugc", ready: true },
        ],
      },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Company",
    columns: [
      {
        heading: "About OMH",
        links: [
          { label: "FAQ", href: "/faq", ready: true },
          { label: "Contact", href: "/contact", ready: true },
          { label: "About Us", href: "/about-us", ready: true },
        ],
      },
      {
        heading: "Policies",
        links: [
          { label: "Warranty", href: "/warranty", ready: true },
          { label: "Cookie Policy", href: "/cookies", ready: true },
          { label: "Privacy Policy", href: "/privacy", ready: true },
          { label: "Terms & Conditions", href: "/terms", ready: true },
        ],
      },
    ],
  },
];

// Pages designed in this preview. The coming-soon page points visitors here.
export const readyPages: NavLink[] = [
  { label: "Home", href: "/", ready: true },
  { label: "WordPress Development", href: "/wordpress-development", ready: true },
  { label: "Website Designs", href: "/website-designs", ready: true },
  { label: "Shopify Development", href: "/shopify-development", ready: true },
  { label: "WordPress Maintenance", href: "/wordpress-website-maintenance", ready: true },
  { label: "Google Ads PPC", href: "/google-adwords-ppc", ready: true },
  { label: "Amazon PPC Advertising", href: "/amazon-ppc-advertising-agency-uk", ready: true },
  { label: "Local SEO", href: "/local-seo", ready: true },
  { label: "Social Media Marketing", href: "/social-media-marketing-services", ready: true },
  { label: "Paid Social Advertising", href: "/social-media-paid-advertising", ready: true },
  { label: "About", href: "/about-us", ready: true },
  { label: "Case Studies", href: "/case-studies", ready: true },
  { label: "Insights", href: "/insights", ready: true },
  { label: "Contact", href: "/contact", ready: true },
  { label: "Generate More Qualified Leads", href: "/solutions/generate-qualified-leads", ready: true },
  { label: "Increase Ecommerce Sales", href: "/solutions/increase-ecommerce-sales", ready: true },
  { label: "Improve Website Conversion", href: "/solutions/improve-website-conversion", ready: true },
  { label: "Grow Local Visibility", href: "/solutions/grow-local-visibility", ready: true },
  { label: "Outsource Your Digital Marketing", href: "/solutions/outsource-digital-marketing", ready: true },
  { label: "Pricing", href: "/pricing", ready: true },
  { label: "FAQ", href: "/faq", ready: true },
  { label: "Warranty", href: "/warranty", ready: true },
  { label: "Privacy Policy", href: "/privacy", ready: true },
  { label: "Cookie Policy", href: "/cookies", ready: true },
  { label: "Terms & Conditions", href: "/terms", ready: true },
  { label: "SEO Services", href: "/seo-services", ready: true },
  { label: "AI Services", href: "/ai-services", ready: true },
  { label: "AI Voice Agents", href: "/ai-voice-agents", ready: true },
  { label: "Facebook Marketing", href: "/facebook-marketing-agency", ready: true },
  { label: "Instagram Marketing", href: "/instagram-marketing-agency", ready: true },
];

// href → friendly label, so the coming-soon page can title itself correctly.
export const navLabels: Record<string, string> = (() => {
  const out: Record<string, string> = { "/": "Home", "/contact": "Contact" };
  for (const item of primaryNav) {
    if (item.href) out[item.href] = item.label;
    for (const col of item.columns ?? []) {
      for (const link of col.links) out[link.href] = link.label;
    }
  }
  return out;
})();

export const company = {
  name: "Online Marketing Help",
  phoneDisplay: "020 3489 3934",
  phoneHref: "tel:+442034893934",
  email: "support@onlinemarketinghelp.co.uk",
  address: "The Hut, Central Ave, Hullbridge SS5 6AU", // ◈ confirm current
  companyNo: "12328533", // ◈ confirm
  // Profiles as listed on the live thank-you page; the footer links and the
  // schema's sameAs both read this list.
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/onlinemarketinghelpuk/" },
    { label: "Instagram", href: "https://www.instagram.com/onlinemarketinghelpuk/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/34580209/" },
    { label: "X", href: "https://twitter.com/MarketingHelp1" },
  ],
  positioning:
    "Full-service digital marketing and web development for UK service businesses and ecommerce brands.",
};

// Footer link groups after the brand intro: the first three service groups as
// in the mega menu, then Solutions, with Company last. Within every column the
// links run narrowest to widest by rendered width (measured in the footer font,
// not character count — "Paid Social Advertising" renders narrower than
// "Google Ads Management"). Re-measure if a label changes.
export const footerCols: NavColumn[] = [
  ...serviceColumns.slice(0, 3),
  {
    heading: "Solutions",
    links: [
      { label: "Grow Local Visibility", href: "/solutions/grow-local-visibility" },
      { label: "Increase Ecommerce Sales", href: "/solutions/increase-ecommerce-sales" },
      { label: "Improve Website Conversion", href: "/solutions/improve-website-conversion" },
      { label: "Generate More Qualified Leads", href: "/solutions/generate-qualified-leads" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about-us" },
      { label: "Pricing", href: "/pricing" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
  { label: "Terms", href: "/terms" }
];
