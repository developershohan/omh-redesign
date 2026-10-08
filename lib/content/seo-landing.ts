// Verbatim copy from the live /best-local-seo-services/ page (docs/legacy-pages-plan.md
// Phase 3). Wording, figures and the source's own typos are reproduced exactly —
// only the typesetting changes. The national page (/seo-services, formerly
// /best-seo-services) follows the client's SEO rewrite brief of 1 Oct 2026 instead.
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
  cta: {
    title: string;
    accent: string;
    offerTitle: string;
    offerSave: string;
    submit: string;
    body?: string;
    secondary?: { label: string; href: string };
  };
  // Sections only the national page carries (SEO brief, 1 Oct 2026).
  // meta feeds both the page <head> and the hero's search-result card, so they cannot drift.
  meta?: { title: string; description: string; path: string };
  services?: readonly { title: string; body: string }[];
  affordable?: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
    stats: readonly (readonly [string, string])[];
  };
  process?: { eyebrow: string; title: string; steps: readonly (readonly [string, string])[] };
  smallBusiness?: {
    eyebrow: string;
    title: string;
    lead: string;
    audiencesLabel: string;
    audiences: readonly string[];
    shared: string;
  };
  faq?: { eyebrow: string; title: string; items: readonly { q: string; a: string }[] };
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
  meta: {
    title: "Professional SEO Services UK | SEO Agency Essex",
    description:
      "Professional SEO services for UK businesses. We grow your organic traffic, improve rankings, and turn search visitors into paying customers. Based in Essex. Free SEO audit included.",
    path: "/seo-services",
  },
  eyebrow: "SEO Services",
  title: "Professional SEO Services That Grow Your Revenue",
  titleAccent: "Grow Your Revenue",
  standfirst:
    "We deliver professional SEO services that bring the right visitors to your website and turn them into leads. As a UK SEO agency based in Essex, we work with service businesses and ecommerce brands to build organic traffic that keeps growing month after month. Every strategy is built around your business, your market, and the keywords your customers are already searching for.",
  // The primary hero button scrolls to the free-audit offer; the secondary goes to contact.
  ctas: {
    checklist: "Get Your Free SEO Audit",
    audit: "Book a Growth Consultation",
    phone: "or Call Your SEO Expert on +44 20 3489 3934",
  },
  offer: {
    heading: "Free 30-Min Consultation",
    subheading: "Get 20% OFF Today",
    submit: "Get A Free SEO Consultation",
  },
  about: {
    eyebrow: "About",
    title: "Why Businesses Choose Our Professional SEO Services",
    // Brief said "over a decade"; the company was incorporated in 2019 (Companies House 12328533).
    kicker:
      "Most businesses know they need SEO. The hard part is finding an agency that delivers results instead of reports. At Online Marketing Help, we have been helping UK service businesses and ecommerce brands grow their organic search traffic since 2019. Our clients stay with us because we focus on revenue, not vanity metrics.",
    body: "We have increased organic traffic by up to 466% for clients in competitive sectors. That number matters because it represents real visitors searching for what you sell, landing on your pages, and picking up the phone or filling out a form.\n\nAs a small business SEO services provider ourselves, we understand the pressures smaller companies face. You need results you can measure against actual sales, from a team that responds quickly and explains what they are doing in plain language.",
    claims: [
      "Trusted Professional SEO Agency",
      "Best Reviewed on Trustpilot",
      "97% Client Retention Rate",
      "99% Client Satisfaction Rate",
      "Google Ads Certified Partner",
    ],
  },
  offering: {
    eyebrow: "We Offer",
    title: "Our SEO Services",
    body: "Combining SEO with [social media marketing services](/social-media-marketing-services) and [Facebook marketing services](/facebook-marketing-agency) creates a wider organic footprint, reaching potential customers through both search and social channels.",
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
    title: "What Our Clients Say About Our SEO Services",
    body: "Our clients rate us among the best SEO agencies in the UK. Here is what they say on Google.",
    items: sharedTestimonials,
  },
  cta: {
    title: "Get Your Free SEO Audit Today",
    accent: "Free SEO Audit Today",
    offerTitle: "Get Your Free SEO audit",
    offerSave: "Save £100",
    submit: "Claim Your Free SEO Audit",
    body: "Find out exactly where your website stands and what it would take to rank higher. Our free SEO audit covers technical health, on-page optimisation, content gaps, and backlink profile. You get a clear, prioritised action plan, whether you work with us or not.",
    // The brief's offer line ("Free SEO Audit (worth £200) + SEO Checklist (worth £100) =
    // £300 value, yours free") is typeset as the receipt beside this copy, from `checklist`.
    secondary: { label: "Book a Growth Consultation", href: "/contact" },
  },
  services: [
    {
      title: "Technical SEO Audit and Fixes",
      body: "Every engagement starts with a full technical SEO audit of your website. We check crawlability, indexing, site speed, mobile experience, structured data, and internal linking. You get a clear report that shows exactly what needs fixing, ranked by impact. Then we fix it.",
    },
    {
      title: "On-Page SEO and Content Optimisation",
      body: "We optimise every page that matters to your business: title tags, meta descriptions, heading structure, internal links, and the content itself. We write copy that ranks and reads well, targeting the keywords your ideal customers use when they are ready to buy.",
    },
    {
      title: "Local SEO for Essex and UK Businesses",
      body: "If your customers search with local intent (“near me”, town names, service areas), [local SEO](/local-seo) is where your budget works hardest. We optimise your Google Business Profile, build local citations, and make sure your site sends clear location signals to Google.",
    },
    {
      title: "Organic SEO and Link Building",
      body: "Rankings depend on authority. We build high-quality backlinks from relevant UK websites through digital PR, guest content, and resource-based outreach. No bought links, no PBNs. Every link is one you would be happy to show Google.",
    },
    {
      title: "Ongoing Reporting and Strategy",
      body: "Every month you receive a report that ties rankings and traffic to leads and revenue. We adjust the strategy based on what the data shows, not what a template dictates. You also get direct access to your SEO consultant for questions between reports.",
    },
  ],
  // Brief edits held back here: "No account management overhead" (other service pages
  // publish a named account manager) and "average response time" (the published figure
  // is enquiry-to-proposal time).
  affordable: {
    eyebrow: "Affordable SEO",
    title: "Affordable SEO Services for UK Businesses",
    stats: [
      ["97%", "Client retention rate"],
      ["2 hrs", "Average enquiry-to-proposal time"],
    ],
    paragraphs: [
      "We built Online Marketing Help to give smaller businesses access to the same quality of SEO that large agencies charge five figures for. Our pricing is transparent, our contracts are flexible, and we do not lock you in for 12 months before you have seen results.",
      "You pay for work that moves the needle. Every hour goes into research, optimisation, content, or link building.",
      "That is why our client retention rate sits at 97%. Businesses stay because the ROI is clear, the communication is fast (average enquiry-to-proposal time: 2 hours), and the results speak for themselves.",
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "How Our SEO Process Works",
    steps: [
      ["Review Your Current Position", "We audit your website, analyse your competitors, and map the keywords that represent real commercial opportunity in your market. This gives us a clear picture of where you stand and where the gaps are."],
      ["Define the Commercial Objective", "SEO without a commercial goal is just traffic for the sake of traffic. We agree on what success looks like for your business: more leads, more sales, more bookings, more calls. Then we build the strategy to get there."],
      ["Execute and Measure", "We carry out the technical fixes, on-page optimisation, content creation, and link building. Every action is tracked. Every month, you see what moved and what it means for your bottom line."],
    ],
  },
  smallBusiness: {
    eyebrow: "Who we work with",
    title: "The Best SEO Company for Small Businesses in the UK",
    lead: "We work with businesses that do not have a marketing department. You might be the owner running everything yourself, or you might have a small team that handles marketing alongside a dozen other responsibilities. Either way, you need an SEO partner who gets things done without needing to be managed.",
    // The brief's second paragraph, typeset as a list: same words, split at its commas.
    audiencesLabel: "Our clients include",
    audiences: [
      "Service businesses across Essex and London",
      "Ecommerce brands selling nationally",
      "Specialist firms that need to rank in competitive professional sectors",
    ],
    shared: "What they share is a preference for straight talk, measurable results, and an agency that picks up the phone.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions About SEO Services",
    items: [
      { q: "What are professional SEO services?", a: "Professional SEO services cover the technical, content, and authority-building work needed to improve your website’s visibility in Google search results. This includes technical audits, keyword research, on-page optimisation, content strategy, and link building. The goal is more organic traffic from people actively searching for what you sell." },
      // Brief said "flexible monthly contracts with no long-term lock-in"; /search-engine-optimisation publishes 6- and 9-month terms.
      { q: "How much do SEO services cost in the UK?", a: "SEO pricing in the UK varies widely. At Online Marketing Help, our packages start from a level that works for small businesses and scale based on the scope of work. Contract terms are agreed upfront, and we do not lock you in for 12 months before you have seen results. Every pound goes into work that improves your rankings and traffic." },
      { q: "How long does SEO take to show results?", a: "Most businesses start seeing measurable improvements in organic traffic within 3 to 6 months. The exact timeline depends on your current site health, the competitiveness of your keywords, and how much optimisation work is needed upfront. We set realistic expectations from day one and report progress monthly." },
      { q: "Do you offer SEO audits?", a: "Yes. Every new client receives a comprehensive SEO audit covering technical issues, on-page gaps, content opportunities, and backlink analysis. We also offer a standalone free SEO audit for businesses who want to understand their current position before committing to ongoing work." },
      { q: "What makes you different from other SEO agencies?", a: "We are a small team. You work directly with the people doing the work. We focus on commercial outcomes (leads, sales, revenue), turn enquiries into proposals within 2 hours on average, and maintain a 97% client retention rate because we deliver what we promise." },
      { q: "Do you work with small businesses?", a: "Small businesses are our core clients. We built our agency to provide enterprise-level SEO at pricing that works for smaller companies. Whether you are a sole trader, a growing service business, or an ecommerce brand doing six figures, we have packages designed for your stage of growth." },
    ],
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
    phone: "or Call Your Local SEO Expert on +44 20 3489 3934",
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
