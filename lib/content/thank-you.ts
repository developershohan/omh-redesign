/*
  Phase 6 of docs/legacy-pages-plan.md — the eight legacy thank-you pages.
  Copy verbatim from the live pages (fetched 19 Aug 2026 through the logged-in
  browser), including the inconsistent phone formatting ("+44 0203 4893934" on
  some, "0203 4893934" on others) and "OUR All STARTER PACKAGES" as written.

  These are funnel pages, so they share one layout — same directive as Phase 5's
  quote forms, no per-page layout variety.
*/

export type ThankYouLink = { label: string; href: string };

export type ThankYouPage = {
  slug: string;
  /* The live H1 (breadcrumb title); the visible confirmation heading is `heading`. */
  title: string;
  heading: string;
  body: string[];
  /* Live pages put these as plain sentences under a lead-in line. */
  linksLead?: string;
  links?: ThankYouLink[];
  /* Live page repeats the starter-packages block here. It is the same content as
     /pricing, so we link there instead of shipping the tables a third time —
     same call as the free-consultation page in Phase 5. */
  packages?: { heading: string };
  seo: { title: string; description: string };
};

const urgent = (phone: string, join: string) =>
  `If you have a project that is urgent you can either call us on ${phone} ${join} support@onlinemarketinghelp.co.uk.`;

const websiteQuestionnaireLinks: ThankYouLink[] = [
  {
    label: "New Website Development Quotation Questionnaire.",
    href: "/new-website-development-quotation-questionnaire",
  },
  { label: "Redesign Website Questionnaire.", href: "/website-redesign-project-questionnaire" },
];

export const contactUsThankYou: ThankYouPage = {
  slug: "contact-us-thank-you",
  title: "Contact Us Thank You",
  heading: "Thank you",
  body: ["Thank you for contacting us at Online Marketing Help.", urgent("+44 0203 4893934", "Email:")],
  seo: {
    title: "Contact Us Thank You",
    description: "Thank you for contacting Online Marketing Help. We will come back to you shortly.",
  },
};

export const calendlyThankYou: ThankYouPage = {
  slug: "calendly-thank-you",
  title: "Calendly Thank You",
  heading: "Thank you",
  body: [
    "Thank you for scheduling a call with us at Online Marketing Help.",
    "If you have a project that is urgent you can either call us on 0203 4893934 Or email support@onlinemarketinghelp.co.uk",
    "We look forward to speaking with you at your scheduled date and time and would like to ask you to bring any information to the call that may help us to understand your project.",
  ],
  packages: { heading: "OUR All STARTER PACKAGES" },
  seo: {
    title: "Calendly Thank You",
    description:
      "Thank you for scheduling a call with Online Marketing Help. Here is what to bring to the call.",
  },
};

export const localSeoThankYou: ThankYouPage = {
  slug: "local-seo-thank-you",
  title: "Local SEO Thank You",
  heading: "Thank you",
  body: [
    "Thank you for requesting a local SEO audit from Online Marketing Help.",
    "If you have a project that is urgent you can either call us on 0203 4893934 Or email support@onlinemarketinghelp.co.uk.",
  ],
  packages: { heading: "OUR All STARTER PACKAGES" },
  seo: {
    title: "Local SEO Thank You",
    description: "Thank you for requesting a local SEO audit from Online Marketing Help.",
  },
};

export const quotationQuestionnaireThankYou: ThankYouPage = {
  slug: "quotation-questionnaire-thank-you",
  title: "Quotation Questionnaire Thank You",
  heading: "Thank You",
  body: ["Thank you for contacting us at Online Marketing Help.", urgent("+44 0203 4893934", "Email:")],
  seo: {
    title: "Quotation Questionnaire Thank You",
    description:
      "Thank you for completing the quotation questionnaire. We will review your answers and come back with a quote.",
  },
};

export const seoThankYou: ThankYouPage = {
  slug: "search-engine-optimisation-thank-you",
  title: "Search Engine Optimisation Thank You",
  heading: "Thank you",
  body: ["Thank you for your request.", urgent("+44 0203 4893934", "or email")],
  seo: {
    title: "Search Engine Optimisation Thank You",
    description: "Thank you for your SEO request. We will come back to you shortly.",
  },
};

export const wordpressDevelopmentThankYou: ThankYouPage = {
  slug: "wordpress-development-thank-you",
  title: "Wordpress Development Thank You",
  heading: "Thank You",
  body: [
    "Thank you for contacting us at Online Marketing Help. Call us: +44 0203 4893934",
    "Email: support@onlinemarketinghelp.co.uk",
  ],
  linksLead: "If you already have an idea of what support you need, you can fill out either of the following:",
  links: websiteQuestionnaireLinks,
  seo: {
    title: "WordPress Development Thank You",
    description:
      "Thank you for your WordPress development enquiry. Fill out a questionnaire if you already know what you need.",
  },
};

export const wordpressMaintenanceThankYou: ThankYouPage = {
  slug: "wordpress-maintenance-thank-you-page",
  title: "WordPress Maintenance Thank You Page",
  heading: "Thank You",
  body: [
    "Thank you for contacting us at Online Marketing Help.",
    "Call us: +44 0203 4893934",
    "Email: support@onlinemarketinghelp.co.uk",
  ],
  linksLead: "If you already have an idea of what support you need, you can fill out either of the following:",
  links: websiteQuestionnaireLinks,
  seo: {
    title: "WordPress Maintenance Thank You",
    description:
      "Thank you for your WordPress maintenance enquiry. Fill out a questionnaire if you already know what you need.",
  },
};

export const thankYouPages: ThankYouPage[] = [
  contactUsThankYou,
  calendlyThankYou,
  localSeoThankYou,
  quotationQuestionnaireThankYou,
  seoThankYou,
  wordpressDevelopmentThankYou,
  wordpressMaintenanceThankYou,
];

/* The subscription page is the odd one out — not a confirmation, a welcome with
   two numbered steps. Social URLs are the ones the live site links from its own
   header.

   ◈ Live-site defects, kept out of the rebuild rather than reproduced: the
   resource block is duplicated three times identically, and all three
   "Download Latest Version…" buttons point at `href="#"` — there is no file. We
   render the guide once, and the download is marked as pending rather than
   shipped as a dead link. Needs the real PDF from the client. */
export const subscriptionThankYou = {
  slug: "subscription-thank-you",
  title: "Subscription Thank You",
  heading: "WELCOME & THANK YOU FOR JOINING",
  socialHeading: "Step 1: Add Us on Social Media!",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/onlinemarketinghelpuk/" },
    { label: "Twitter", href: "https://twitter.com/MarketingHelp1" },
    { label: "Instagram", href: "https://www.instagram.com/onlinemarketinghelpuk/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/34580209/" },
    { label: "Pinterest", href: "https://www.pinterest.co.uk/onlinemarketinghelpuk/" },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCW-cKVLow1foFS0qd6QyBrw?view_as=subscriber",
    },
  ],
  resourcesHeading: "Step 2: Download Your Resources!",
  resource: {
    title: "1. Online Marketing Help: Onsite SEO Guide",
    body: "It’s my firm belief that onsite SEO is one of the most misunderstood and overlooked aspects of ranking. Ironically, having solid onsite will get you higher in the rankings than any amount of backlinks. Follow the concepts in this guide… these onsite methods are exactly what I use to get my rankings. If and when you see returns, please tell me about your success story.",
    downloadLabel: "Download Latest Version of the Onsite SEO Guide",
  },
  seo: {
    title: "Subscription Thank You",
    description:
      "Welcome — thank you for joining the Online Marketing Help list. Follow us and download the onsite SEO guide.",
  },
};
