// Navigation and company facts, kept out of layout code (brief §21/§22).
// IA matches the master brief §7. `ready: true` marks pages that are actually
// designed in this preview; every other route falls through to the coming-soon
// page (app/[...slug]), so the client can walk the full planned structure
// without hitting a 404.

export type NavLink = { label: string; href: string; ready?: boolean };
export type NavColumn = { heading?: string; links: NavLink[] };
export type NavItem = { label: string; href?: string; columns?: NavColumn[] };

export const primaryNav: NavItem[] = [
  {
    label: "Solutions",
    columns: [
      {
        links: [
          { label: "Generate More Qualified Leads", href: "/solutions/generate-qualified-leads" },
          { label: "Increase Ecommerce Sales", href: "/solutions/increase-ecommerce-sales" },
          { label: "Improve Website Conversion", href: "/solutions/improve-website-conversion" },
          { label: "Grow Local Visibility", href: "/solutions/grow-local-visibility" },
          { label: "Outsource Your Digital Marketing", href: "/solutions/outsource-digital-marketing" },
        ],
      },
    ],
  },
  {
    label: "Services",
    columns: [
      {
        heading: "Websites",
        links: [
          { label: "WordPress Development", href: "/wordpress-development", ready: true },
          { label: "Website Design", href: "/services/website-design" },
          { label: "Shopify Development", href: "/shopify-development", ready: true },
          { label: "Website Maintenance", href: "/wordpress-website-maintenance", ready: true },
        ],
      },
      {
        heading: "Paid Advertising",
        links: [
          { label: "Google Ads Management", href: "/google-adwords-ppc", ready: true },
          { label: "Meta Ads Management", href: "/services/meta-ads-management" },
          { label: "Amazon PPC Advertising", href: "/amazon-ppc-advertising-agency-uk", ready: true },
          { label: "Paid Social Advertising", href: "/services/paid-social-advertising" },
        ],
      },
      {
        heading: "Organic Growth",
        links: [
          { label: "Search Engine Optimisation", href: "/search-engine-optimisation", ready: true },
          { label: "Local SEO", href: "/services/local-seo" },
          { label: "Content Writing", href: "/services/content-writing" },
        ],
      },
      {
        heading: "Creative & Social",
        links: [
          { label: "Social Media Management", href: "/services/social-media-management" },
          { label: "Logo Design", href: "/services/logo-design" },
          { label: "Brochure Design", href: "/services/brochure-design" },
        ],
      },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

// Pages designed in this preview. The coming-soon page points visitors here.
export const readyPages: NavLink[] = [
  { label: "Home", href: "/", ready: true },
  { label: "WordPress Development", href: "/wordpress-development", ready: true },
  { label: "Shopify Development", href: "/shopify-development", ready: true },
  { label: "WordPress Maintenance", href: "/wordpress-website-maintenance", ready: true },
  { label: "Google Ads PPC", href: "/google-adwords-ppc", ready: true },
  { label: "Amazon PPC Advertising", href: "/amazon-ppc-advertising-agency-uk", ready: true },
  { label: "Search Engine Optimisation", href: "/search-engine-optimisation", ready: true },
  { label: "Case Studies", href: "/case-studies", ready: true },
  { label: "Contact", href: "/contact", ready: true },
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
  positioning:
    "Marketing and development under one roof, for UK service businesses and ecommerce brands.",
};

export const footerCols = [
  {
    heading: "Solutions",
    links: [
      { label: "Generate More Qualified Leads", href: "/solutions/generate-qualified-leads" },
      { label: "Increase Ecommerce Sales", href: "/solutions/increase-ecommerce-sales" },
      { label: "Improve Website Conversion", href: "/solutions/improve-website-conversion" },
      { label: "Grow Local Visibility", href: "/solutions/grow-local-visibility" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "WordPress Development", href: "/wordpress-development" },
      { label: "Google Ads", href: "/google-adwords-ppc" },
      { label: "Amazon PPC", href: "/amazon-ppc-advertising-agency-uk" },
      { label: "Meta Ads", href: "/services/meta-ads-management" },
      { label: "SEO", href: "/search-engine-optimisation" },
      { label: "Shopify Development", href: "/shopify-development" },
      { label: "Website Maintenance", href: "/wordpress-website-maintenance" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];
