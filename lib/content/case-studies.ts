export type CaseStudyServiceId =
  | "seo"
  | "google-ads"
  | "wordpress"
  | "shopify"
  | "maintenance"
  | "social-media"
  | "paid-social";

export type CaseStudy = {
  slug: string;
  title: string;
  shortTitle: string;
  sourceUrl: string;
  sourceTitle: string;
  client: string;
  sector: string;
  category: "SEO" | "Website" | "PPC" | "Design";
  /* Optional: the four legacy case-study pages imported in Phase 4 publish no
     timeframe, and inventing one would be a fabricated fact. */
  duration?: string;
  lede: string;
  objective: string;
  challenges: string[];
  work: { title: string; items: string[] }[];
  results: { value: string; label: string; context?: string }[];
  /* `attribution` is optional — the Phase 4 legacy pages print the client
     recommendation with no name against it. */
  testimonial?: { quote: string; attribution?: string };
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
  "social-media": { label: "Social Media Marketing", href: "/social-media-marketing" },
  "paid-social": { label: "Paid Social Advertising", href: "/social-media-paid-advertising" },
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
    serviceIds: ["wordpress", "seo", "google-ads", "social-media", "paid-social"],
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
    serviceIds: ["seo", "google-ads", "wordpress", "social-media", "paid-social"],
  },
  /*
    Phase 4 of docs/legacy-pages-plan.md — the four standalone legacy case-study
    pages, folded into this system on 19 Aug 2026 with their old URLs redirected
    in next.config.ts. Copy is verbatim from the live pages, including their own
    casing and typos ("Landig Pages", "campaginns", "Regulary", "In know time").

    None of the four publishes a metric, so `results` is empty and the results
    band does not render — the alternative would be inventing numbers.
  */
  {
    slug: "fleming-verandas",
    title: "PPC FOR FLEMING VERANDAS",
    shortTitle: "Fleming Verandas PPC",
    sourceUrl: "https://onlinemarketinghelp.co.uk/ppc-for-fleming-verandas-case-study/",
    sourceTitle: "PPC for Fleming Verandas Case Study",
    client: "FLEMING VERANDAS",
    sector: "Veranda and awning company IN THE UK",
    category: "PPC",
    lede: "Fleming Verandas was a start-up, small business in the West Midlands with an experience in delivering high quality verandas and glass rooms to customers.",
    /* ◈ Live-site defect, resolved 19 Aug 2026. The source page's "THE PROJECT"
       paragraph is the Out Out Entry *website* brief pasted onto a PPC case study
       ("an all encompassing multi-site … backend system that could manage incoming
       enquiries"). The user re-sent the page HTML and it carries the same error, so
       there is no corrected paragraph to copy. Rather than publish a website brief
       on a Google Ads case study, the objective is now the page's own PPC sentence,
       verbatim, from "The brief" — the second half of what used to be the lede, so
       nothing is duplicated and nothing is invented. */
    objective:
      "They tasked Online Marketing Help with starting their PPC strategy and kickstarting all of their PPC campaigns to enable business growth and to encourage customer acquisition in target areas.",
    challenges: [
      "PPC advertising is a form of internet marketing that allows businesses to pay for ad placement on search engines and social media platforms. It’s an integral part of any well-rounded marketing strategy, but poorly thought tactics could land you in hot water.",
      "Businesses who invest in PPC advertising need to be aware of the risks and rewards. There are many benefits to PPC advertising, such as the ability to quickly change strategies if something isn’t working. But there are also a number of pitfalls that can lead to wasted time and money.",
      "For example, PPC ads are often expensive, so it’s important not to spend too much on ads that aren’t working or don’t have enough traffic. It’s also important not to use too many different keywords in one ad campaign because it will be more difficult to measure which keywords are working.",
    ],
    work: [
      {
        title: "The project",
        items: [
          "Full audit of past performance",
          "Keyword targeting & prioritisation – Review messaging & ad structure to deliver higher CTR  & Conversion",
          "Testing plan – to expand reach & improve performance",
          "Daily Campaign Management",
          "Planning & Reporting",
          "Forecasting & Budget Spend – maximising budget",
          "Cross Channel considerations",
        ],
      },
      {
        title: "What We Did",
        items: [
          "Set-up Google Tag Manager and Google Ads Manager",
          "Set-up Review sites",
          "A/B Tested Multiple Ads within specific campaigns",
          "Competitor Analysis",
          "Keyword Brainstorming",
          "Negative Keyword Brainstorming",
          "Google Ads Extension set-up and testing",
          "Daily optimisation of campaigns",
          "Remarketing campaginns",
          "Regulary working on the right bid strategy",
          "Quality score optimisation",
        ],
      },
    ],
    results: [],
    testimonial: {
      quote:
        "Excellent service from the team with constant communication keeping us up to date, excellent results from their hard work, with a big thanks to Matt who has worked directly alongside us to give us the support needed, Matt has improved our campaign and answered any questions we have had. Great work Online Marketing Help.",
    },
    serviceIds: ["google-ads"],
  },
  {
    slug: "california-accounting",
    title: "Search Engine Optimisation for California Accounting",
    shortTitle: "California Accounting SEO",
    sourceUrl:
      "https://onlinemarketinghelp.co.uk/search-engine-optimisation-for-california-accounting-case-study/",
    sourceTitle: "Search Engine Optimisation for California Accounting Case Study",
    client: "california Accounting",
    sector: "accountancy firm in the u.s",
    category: "SEO",
    lede: "California Accounting is an established full solution accountancy firm that approached Online Marketing Help as they wanted to gain more organic traffic to their existing website. California Accounting wanted us to set-up a full paid ads strategy as well as using organic data to support it.",
    objective:
      "To offer an all encompassing Search Engine Optimisation strategy for a longstanding accountancy firm.",
    challenges: [
      "California Accounting had not done any Search Engine optimisation including no Google or Bing optimisation, Backlinks, Social optimisation and so on.",
      "Online Marketing Help, started the project with the end in mind and worked backwards. The ultimate goal was to generate additional organic leads alongside a strategic paid advertising campaign.",
    ],
    work: [
      {
        title: "The project",
        items: [
          "Create Strong White Hat Backlinks",
          "Create an Online Profile",
          "Generate Organic Traffic",
          "Strengthen Clients Domain Authority",
          "Maximise Page Speed",
          "Diversify High Traffic-Generating Landig Pages",
        ],
      },
      {
        title: "What We Did",
        items: [
          "Optimised All Existing Data on The Website.",
          "Optimised All Social Channels.",
          "Undertook Keyword and Competitor Analysis.",
          "Improved on Page SEO.",
          "Curated Weekly Blog Posts.",
          "Graphics Design Support.",
        ],
      },
    ],
    results: [],
    testimonial: {
      quote:
        "Thanks to Online Marketing Help we have seen an increase of 210% YOY growth with new clients driven by local searching. We have a much clearer communication channel with existing and new clients. We are now on page 1 for accounting firms in California, we continue to see a better ROI on our google ads spend although we have reduced this considerable due to the volume of leads we are getting organically.",
    },
    serviceIds: ["seo"],
  },
  {
    slug: "allied-hands",
    title: "Social Care Illustration Design Case Study",
    shortTitle: "Allied Hands Illustration",
    sourceUrl: "https://onlinemarketinghelp.co.uk/social-care-illustration-design-case-study/",
    sourceTitle: "Social Care Illustration Design Case Study",
    client: "ALLIED HANDS",
    sector: "social and health care business",
    category: "Design",
    lede: "Create some unique on brand illustrations to support a recruitment campaign that Allied Hands were wanting to launch in the coming weeks. The client wanted a creative, quirky look and feel but still with an element of professionalism suitable for their target audience 50+.",
    objective:
      "Our client needed (in a hurry) some illustrations for their social and health care business. The task was to create a few illustrations on brand and matching to their existing brand images and illustrations.",
    challenges: [
      "Allied Hands didn’t really know what they wanted in terms of design but had seen some examples they liked on the internet. We wanted to add an element of creativity for this client as we knew that an engaging creative would make all the difference in them attracting high quality candidates.",
      "We had no direct guidance from the client in terms of what or how they wanted the illustrations to look which has its advantages so we got working on some creative illustrations.",
    ],
    work: [
      {
        title: "Some of the questions we asked to help us establish  the full brief;",
        items: [
          "Can You Tell Me About Your Company?",
          "What Do You Want to Achieve with the Design?",
          "Who is Your Target Audience?”",
        ],
      },
      {
        title: "What We Did",
        items: [
          "Researched similar businesses",
          "Mocked up the logo so they had a transparent file",
          "Undertook a brand research task",
          "Hand drew illustration",
          "Re-worked their logo as an illustration",
          "Designed 12 illustrations",
          "Established their target audience",
          "Marketing collateral creation",
          "Optimised the images for SEO",
          "Design preferences questionnaire",
          "Worked within the clients budget",
        ],
      },
    ],
    results: [],
    testimonial: {
      quote:
        "We really needed some illustrations for our business quick smart and found Online Marketing Help. The lady that reached out to me was professional, speedy and super friendly. In know time she really understood my business and what I was looking for. Within 24 hours of contact I had my illustrations back and I didn’t need to make any changes as they were exactly what I wanted.",
    },
    serviceIds: [],
  },
  {
    slug: "out-out-entry",
    title: "WEBSITE DESIGN & DEVELOPMENT for OUT OUT ENTRY",
    shortTitle: "Out Out Entry Website",
    sourceUrl: "https://onlinemarketinghelp.co.uk/website-design-for-out-out-entry-website-design/",
    sourceTitle: "Web Development for Out Out Entry Website Design Case Study",
    client: "out out entry",
    sector: "TOUR OPERATOR IN THE UK",
    category: "Website",
    lede: "Out Out Entry was a start-up, small tour operator business wanting to showcase 1000’s of activities and accommodation options. They tasked Online Marketing Help with building a mobile friendly fully optimised custom built website to enable business growth and allow optimised landing pages to be used for targeted ads campaigns.",
    objective:
      "To create an all encompassing multi-site that offered a seamless User Experience for customers and suppliers alike with a backend system that could manage incoming enquiries.",
    challenges: [
      "With 1000’s of products requiring individual pages and the need for a speedy site, Online Marketing Help was tasked with making a website full of engaging content without slowing down the website speed.",
      "Also shifting existing data from a pre-designed off the shelf Wix website onto a custom built website.",
    ],
    work: [
      {
        title: "The project",
        items: [
          "Transfer Data From a Wix Website",
          "Custom Code Functionality",
          "Creative Logo",
          "A Fresh and Fun Look",
          "List Of Activities Easy To Find",
          "Super Easy Booking System",
        ],
      },
      {
        title: "What We Did",
        items: [
          "Shifted all existing data from Wix to WordPress",
          "Created a Multi-site WP Site With 4 Separate Sites",
          "Custom HTML Code Written and Implemented",
          "Search Engine Optimisation and Meta Tags on 200+ Pages",
          "Optimisation of local seo and Work for linkbuilding.",
          "Delivering a New and Packaged Brand That Worked With Both Male and Female With a Wide Age Range.",
          "Launch an E-commerce Shop.",
          "Custom Built CRM in The Back-end.",
          "Improving Website Security.",
        ],
      },
    ],
    results: [],
    testimonial: {
      quote:
        "I had a vision for my website but I couldn’t have dreamed of achieving what the Online Marketing Help team delivered. From regular updates and consultations to the excellent delivery of my social media channels and assets alike. I had been talking with a number of web design agencies prior to starting working with Online Marketing Help and I was blown away by their professionalism from the onset.",
    },
    serviceIds: ["wordpress", "seo"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudiesForService(serviceId: CaseStudyServiceId) {
  return caseStudies.filter((study) => study.serviceIds.includes(serviceId));
}
