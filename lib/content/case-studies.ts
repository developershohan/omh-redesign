export type CaseStudyServiceId =
  | "seo"
  | "google-ads"
  | "wordpress"
  | "shopify"
  | "maintenance";

export type CaseStudy = {
  slug: string;
  title: string;
  shortTitle: string;
  sourceUrl: string;
  sourceTitle: string;
  client: string;
  sector: string;
  category: "SEO" | "Website";
  duration: string;
  lede: string;
  objective: string;
  challenges: string[];
  work: { title: string; items: string[] }[];
  results: { value: string; label: string; context?: string }[];
  testimonial?: { quote: string; attribution: string };
  serviceIds: CaseStudyServiceId[];
};

export const caseStudyServices: Record<
  CaseStudyServiceId,
  { label: string; href: string }
> = {
  seo: { label: "Search Engine Optimisation", href: "/search-engine-optimisation" },
  "google-ads": { label: "Google Ads PPC Management", href: "/google-adwords-ppc" },
  wordpress: { label: "WordPress Development", href: "/wordpress-development" },
  shopify: { label: "Shopify Development", href: "/shopify-development" },
  maintenance: { label: "WordPress Website Maintenance", href: "/wordpress-website-maintenance" },
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "bakery",
    title: "A local bakery’s organic search journey",
    shortTitle: "Bakery SEO",
    sourceUrl: "https://onlinemarketinghelp.co.uk/project/bakery/",
    sourceTitle: "Optimising Sweet Success: A Bakery's SEO Journey",
    client: "Sweet Delights Bakery",
    sector: "Local bakery",
    category: "SEO",
    duration: "4 years shown on source",
    lede: "SEO, local-search, content and website work for a family-owned bakery competing against established local names.",
    objective: "Improve local search visibility, attract relevant organic visitors and support more online orders and bakery enquiries.",
    challenges: [
      "A limited online presence in a market with established local competitors.",
      "The need to connect bakery-product searches with useful local landing pages.",
    ],
    work: [
      { title: "Search demand", items: ["Bakery-product and local keyword research", "Content and metadata optimisation"] },
      { title: "Local visibility", items: ["Business-profile and NAP consistency work", "Location pages and local link activity"] },
      { title: "Content and website", items: ["Baking and cake-decorating articles", "Speed, mobile and technical/on-page improvements"] },
    ],
    results: [
      { value: "6 months", label: "Published implementation period" },
      { value: "50%", label: "Published organic-traffic increase" },
      { value: "83%", label: "Published share of traffic from new users" },
      { value: "51%", label: "Published reduction in broken pages" },
      { value: "8.3%", label: "Published GA4 conversion rate" },
    ],
    testimonial: {
      quote: "The team's professionalism, keyword analysis and strategy gave real attention to what the bakery needed.",
      attribution: "Penny Williams, Owner",
    },
    serviceIds: ["seo", "wordpress"],
  },
  {
    slug: "car-showroom",
    title: "An SEO roadmap for an automotive showroom",
    shortTitle: "Car Showroom SEO",
    sourceUrl: "https://onlinemarketinghelp.co.uk/project/car-showroom/",
    sourceTitle: "Driving Success: An SEO Roadmap for CarShow Hub",
    client: "CarShow Hub",
    sector: "Automotive retail",
    category: "SEO",
    duration: "3 years shown on source",
    lede: "A multi-channel campaign covering organic search, local visibility, paid media, conversion work and website maintenance.",
    objective: "Increase organic visibility, website visits, customer enquiries and visits to the showroom.",
    challenges: [
      "Strong competition from other automotive retailers.",
      "Weak visibility for geographically relevant vehicle searches.",
    ],
    work: [
      { title: "SEO and local search", items: ["Vehicle and local keyword research", "Business-profile, citation and location-page work"] },
      { title: "Content and technical", items: ["Buying-guide and maintenance content", "Speed, mobile and technical-audit improvements"] },
      { title: "Connected delivery", items: ["Google paid advertising", "Website maintenance and conversion review"] },
    ],
    results: [
      { value: "63%", label: "Published organic-traffic increase" },
      { value: "15%", label: "Published uplift in car sales attributed to SEO" },
      { value: "1st", label: "Published local business-profile position" },
      { value: "43%", label: "Published conversion-value increase" },
      { value: "15%", label: "Published CTR increase" },
      { value: "7%", label: "Published CPC decrease" },
      { value: "15%", label: "Published conversion increase after CRO work" },
    ],
    testimonial: {
      quote: "The SEO work strengthened the company's position in a competitive automotive market.",
      attribution: "Stuart Pelton, Owner",
    },
    serviceIds: ["seo", "google-ads", "maintenance"],
  },
  {
    slug: "clothing-business",
    title: "Organic search for an online clothing retailer",
    shortTitle: "Clothing Ecommerce SEO",
    sourceUrl: "https://onlinemarketinghelp.co.uk/project/clothing-business/",
    sourceTitle: "Fashion Forward: SEO Strategies Powering TrendyThreads",
    client: "TrendyThreads (anonymised in source)",
    sector: "Fashion ecommerce",
    category: "SEO",
    duration: "3 years shown on source",
    lede: "An ecommerce SEO campaign covering search demand, technical improvements, editorial content and authority building.",
    objective: "Increase organic visibility and relevant visits, then turn more of those visits into online clothing sales.",
    challenges: [
      "A saturated fashion ecommerce market.",
      "Poor visibility for commercially relevant clothing and fashion searches.",
    ],
    work: [
      { title: "Research and pages", items: ["Fashion, product and trend keyword research", "Content and metadata optimisation"] },
      { title: "Technical and experience", items: ["Technical audit", "Speed, mobile and user-experience improvements"] },
      { title: "Content and authority", items: ["Fashion-trend and style content", "Relevant blogger and influencer outreach"] },
    ],
    results: [
      { value: "6 months", label: "Published implementation period" },
      { value: "73%", label: "Published organic-traffic increase" },
      { value: "35%", label: "Published purchase-conversion increase" },
      { value: "52%", label: "Published average ranking-position improvement" },
    ],
    testimonial: {
      quote: "The traffic increase and first-page visibility for target fashion searches speaks for itself.",
      attribution: "Clive Houseton",
    },
    serviceIds: ["seo", "shopify"],
  },
  {
    slug: "craft-business",
    title: "SEO growth for an online craft business",
    shortTitle: "Craft Business SEO",
    sourceUrl: "https://onlinemarketinghelp.co.uk/project/craft-business/",
    sourceTitle: "CraftyCreations' SEO Magic: 5 Strategies That Catapulted Success",
    client: "CraftyCreations",
    sector: "Craft ecommerce",
    category: "SEO",
    duration: "4 years shown on source",
    lede: "A craft ecommerce SEO campaign covering keyword research, technical fixes, content and paid search alongside organic growth.",
    objective: "Improve organic visibility, relevant traffic and ecommerce sales in a competitive online craft market.",
    challenges: [
      "Competition from many established craft suppliers.",
      "Low visibility for commercially relevant craft and hobby searches.",
    ],
    work: [
      { title: "Search foundation", items: ["Craft keyword research", "Metadata, descriptions and on-page optimisation"] },
      { title: "Website and content", items: ["Technical, speed, mobile and UX work", "Tutorials, ideas and product-recommendation content"] },
      { title: "Authority and acquisition", items: ["Relevant outreach and influencer collaboration", "Google paid advertising alongside SEO"] },
    ],
    results: [
      { value: "60%", label: "Published organic-traffic increase" },
      { value: "45%", label: "Published average ranking-position improvement" },
      { value: "30%", label: "Published purchase-conversion increase" },
      { value: "33%", label: "Published reduction in broken pages" },
      { value: "9%", label: "Published cost-per-conversion reduction" },
      { value: "43%", label: "Published increase in clicks" },
    ],
    testimonial: {
      quote: "SEO helped the craft business compete properly in its market for the first time.",
      attribution: "George Peters, Owner",
    },
    serviceIds: ["seo", "google-ads"],
  },
  {
    slug: "bar",
    title: "A hospitality website launch for a New York steakhouse",
    shortTitle: "Restaurant Website",
    sourceUrl: "https://onlinemarketinghelp.co.uk/project/bar/",
    sourceTitle: "How We worked with Keens Steakhouse in New York to launch their New Website",
    client: "Keens Steak House",
    sector: "Hospitality",
    category: "Website",
    duration: "4 years shown on source",
    lede: "A new website and connected marketing campaign, built to help visitors find restaurant locations, menus, events and reservation information.",
    objective: "Launch a more usable and informative hospitality website and support discovery through organic and paid channels.",
    challenges: [
      "Presenting practical restaurant information clearly.",
      "Connecting the website launch with ongoing search and campaign activity.",
    ],
    work: [
      { title: "Website", items: ["Website launch support", "Usability and information access"] },
      { title: "Acquisition", items: ["Long-term SEO", "Google Ads and social media marketing"] },
    ],
    results: [
      { value: "58%", label: "Published organic-traffic increase" },
      { value: "36%", label: "Published bounce-rate reduction" },
      { value: "78%", label: "Published reservation increase" },
      { value: "43%", label: "Published reduction in broken pages" },
      { value: "96%", label: "Published positive booking-experience survey" },
    ],
    testimonial: {
      quote: "A reliable digital-marketing partner from the website launch through to ongoing campaigns.",
      attribution: "George Schwarz, Owner",
    },
    serviceIds: ["wordpress", "seo", "google-ads"],
  },
  {
    slug: "fine-dining",
    title: "Organic search and reservations for fine dining",
    shortTitle: "Fine Dining SEO",
    sourceUrl: "https://onlinemarketinghelp.co.uk/project/fine-dining/",
    sourceTitle: "Savoring Success: A Restaurant's SEO Transformation",
    client: "Savor Bistro",
    sector: "Fine dining",
    category: "SEO",
    duration: "3 years shown on source",
    lede: "A local-search and website optimisation story focused on restaurant discovery, relevant organic visits and reservations.",
    objective: "Improve local organic visibility and translate relevant search demand into more reservations and foot traffic.",
    challenges: [
      "Strong competition from established local restaurants.",
      "Weak visibility for cuisine, location and dining-intent searches.",
    ],
    work: [
      { title: "Search and local", items: ["Cuisine, location and intent research", "Business-profile, NAP and review activity"] },
      { title: "Content and website", items: ["Dish, chef and local-event content", "Speed, mobile, UX and structured-data improvements"] },
      { title: "Connected marketing", items: ["Google paid advertising", "Long-term SEO and social-media marketing"] },
    ],
    results: [
      { value: "98%", label: "Published organic-traffic increase" },
      { value: "1st", label: "Published local business-profile position" },
      { value: "22%", label: "Published bounce-rate reduction" },
      { value: "38%", label: "Published CPC decrease" },
      { value: "16%", label: "Published CTR increase" },
      { value: "12%", label: "Published increase in walk-ins" },
    ],
    testimonial: {
      quote: "The team's SEO implementation made a real difference in a competitive restaurant market.",
      attribution: "Serg Zinki, Owner",
    },
    serviceIds: ["seo", "google-ads", "wordpress"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudiesForService(serviceId: CaseStudyServiceId) {
  return caseStudies.filter((study) => study.serviceIds.includes(serviceId));
}
