export type SolutionTheme = "ppc" | "shopify" | "wordpress" | "seo" | "maintenance";

export type SolutionPageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  theme: SolutionTheme;
  signal: string;
  /** Line under the hero's growth path; defaults to the shared wording. */
  signalNote?: string;
  heroPoints: string[];
  /** Optional explainer between the hero and the problem section. */
  definition?: {
    title: string;
    body: string;
    /** Named factors, shown as cards. */
    factors?: { title: string; body: string }[];
    /** Or the aspects the definition lists, shown as a chip row under `tagsLabel`. */
    tagsLabel?: string;
    tags?: string[];
  };
  problem: {
    eyebrow: string;
    title: string;
    intro: string;
    symptoms: { title: string; body: string }[];
  };
  outcomes: {
    title: string;
    intro: string;
    items: { number: string; title: string; body: string }[];
  };
  media: {
    eyebrow: string;
    title: string;
    body: string;
    videoTitle: string;
    imageTitle: string;
    imageSrc: string;
    imageAlt?: string;
    screenTitle: string;
    screenSrc: string;
    screenAlt?: string;
    /** Optional journey strip under the media copy, e.g. profile → page → enquiry. */
    journey?: string[];
    /** Optional [label, text] captions for the three frames, in render order. */
    captions?: [string, string][];
  };
  approach: {
    title: string;
    intro: string;
    steps: { title: string; body: string }[];
  };
  services: {
    title: string;
    intro: string;
    items: { title: string; href: string; body: string; cta?: string }[];
  };
  fit: {
    title: string;
    intro?: string;
    good: string[];
    notYet: string[];
  };
  proof: {
    title: string;
    body: string;
    links: { label: string; href: string }[];
  };
  faq: { q: string; a: string }[];
  faqTitle?: string;
  final: {
    eyebrow?: string;
    title: string;
    body: string;
    cta: string;
    formNeed: string;
    formPrompt: string;
  };
};

export const solutions: Record<string, SolutionPageContent> = {
  "generate-qualified-leads": {
    slug: "generate-qualified-leads",
    eyebrow: "Lead generation for UK service businesses",
    title: "Turn marketing spend into",
    titleAccent: "better-fit enquiries",
    intro:
      "More leads are not useful if your team spends its time filtering out the wrong ones. We connect campaigns, landing pages and tracking around the enquiries your business can genuinely turn into customers.",
    primaryCta: "Discuss your lead generation",
    secondaryCta: "See how the plan works",
    theme: "ppc",
    signal: "Search intent → landing page → qualified enquiry",
    heroPoints: ["Built around lead quality", "Campaign and website support", "Clear commercial reporting"],
    problem: {
      eyebrow: "The real lead problem",
      title: "A busy inbox can still hide an underperforming campaign",
      intro:
        "Click and form totals only tell part of the story. The useful question is whether the right people are finding you, understanding the offer and taking an action your sales team values.",
      symptoms: [
        { title: "Plenty of enquiries, few real opportunities", body: "Forms are being completed, but location, budget, service need or buying intent is wrong." },
        { title: "Spend is rising without a clear reason", body: "Campaign reports explain traffic but not which enquiries became meaningful sales conversations." },
        { title: "The landing page loses the message", body: "The ad promises one thing, while the page makes visitors search for the next step." },
        { title: "Sales feedback never reaches marketing", body: "Campaigns optimise for every submission equally, even when lead quality varies sharply." },
      ],
    },
    outcomes: {
      title: "A lead system designed around what happens after the form",
      intro: "The work starts before the click and continues until the enquiry can be assessed properly.",
      items: [
        { number: "01", title: "Reach people with the right intent", body: "Choose channels, searches and audiences according to the problem you solve and the areas you can serve." },
        { number: "02", title: "Give each visitor a clear route", body: "Use focused landing pages, practical proof and useful qualification instead of sending every campaign to the homepage." },
        { number: "03", title: "Measure enquiry quality", body: "Connect calls, forms and sales feedback so reporting can separate a submission from a genuine opportunity." },
      ],
    },
    media: {
      eyebrow: "See the system",
      title: "Make the route from search to sales conversation visible",
      body: "Use this section for a short campaign walkthrough, an approved landing-page image and an anonymised reporting screen.",
      videoTitle: "Lead-generation campaign walkthrough",
      imageTitle: "Campaign landing-page example",
      imageSrc: "/images/Solutions/1.jpg",
      imageAlt: "A lead-generation landing page being reviewed on screen alongside a marketing plan.",
      screenTitle: "Lead quality reporting view",
      screenSrc: "/images/Services/Images on the pages/Search-term and budget view.png",
      screenAlt: "Illustrative search terms and budget report showing which queries produced enquiries over a dated period."
    },
    approach: {
      title: "What we would review first",
      intro: "No channel recommendation should come before we understand the offer, audience, economics and current evidence.",
      steps: [
        { title: "Define a qualified enquiry", body: "Agree the services, locations, customer profile and buying signals that make an enquiry worth pursuing." },
        { title: "Audit acquisition and conversion", body: "Review search terms, audiences, offers, landing pages, forms, calls and tracking as one connected journey." },
        { title: "Build the priority plan", body: "Fix the largest source of waste first, then test campaign, page and qualification improvements in a sensible order." },
        { title: "Optimise with sales context", body: "Use downstream feedback to make budget and messaging decisions, not click volume alone." },
      ],
    },
    services: {
      title: "The services commonly used in a qualified-lead programme",
      intro: "Your plan may use one channel or several. We recommend only the work that has a clear role in the journey.",
      items: [
        { title: "Google Ads management", href: "/google-adwords-ppc", body: "Capture active demand and reduce wasted search spend." },
        { title: "Paid social advertising", href: "/social-media-paid-advertising", body: "Reach and retarget defined audiences with relevant creative." },
        { title: "Search engine optimisation", href: "/search-engine-optimisation", body: "Build durable visibility around commercially useful searches." },
        { title: "WordPress development", href: "/wordpress-development", body: "Create focused pages, forms and tracking-ready website journeys." },
      ],
    },
    fit: {
      title: "Is this the right starting point?",
      good: ["You can describe which enquiries tend to become customers", "You serve a defined market or location", "Someone can respond to and assess new enquiries", "You want campaigns and website decisions made together"],
      notYet: ["The offer or target customer is still undecided", "Every form submission must be treated as equally valuable", "There is no capacity to follow up with leads", "You need a guaranteed number of leads or sales"],
    },
    proof: {
      title: "Review the work, the context and the published outcome",
      body: "Our case-study archive explains the business problem and work carried out. Where source evidence needs further confirmation, the page says so plainly.",
      links: [
        { label: "Browse all case studies", href: "/case-studies" },
        { label: "See the car showroom search project", href: "/case-studies/car-showroom" },
      ],
    },
    faq: [
      { q: "Which channel is best for generating leads?", a: "It depends on existing demand, sales cycle, location, budget and how clearly the offer can be explained. Google Ads may suit active demand, while SEO can build longer-term visibility and paid social can support awareness or retargeting. The review determines where to start." },
      { q: "Can you improve lead quality, not just lead volume?", a: "That is the focus. We can refine targeting, search terms, page messaging, forms and tracking. Your team’s feedback is still essential because only the business can confirm which enquiries became useful conversations." },
      { q: "Do we need a new website first?", a: "Not always. Sometimes a focused landing page or several targeted improvements are enough. If the current site creates a wider trust, speed or usability problem, we will explain why broader work should be considered." },
      { q: "How will performance be reported?", a: "Reporting should connect spend and traffic with calls, forms and lead-quality feedback where the available systems allow it. We agree the useful measures before campaign work begins." },
    ],
    final: {
      title: "Tell us what a good lead looks like for your business",
      body: "Share what you are doing now, where lead quality breaks down and what your sales team needs more of. We will review the detail and suggest the clearest next step.",
      cta: "Request a lead generation review",
      formNeed: "More qualified leads",
      formPrompt: "What makes an enquiry valuable to your business, and what is going wrong now?",
    },
  },
  "increase-ecommerce-sales": {
    slug: "increase-ecommerce-sales",
    // SEO brief (Oct 2026): focus keyword "ecommerce growth strategy"; "increase ecommerce
    // sales" stays as the URL/benefit phrase. The brief mixes "e-commerce" and "ecommerce";
    // the keyword spelling is used throughout.
    eyebrow: "Ecommerce growth strategy for UK retailers",
    title: "Build an Ecommerce Growth Strategy",
    titleAccent: "That Drives Sales",
    intro:
      "Ecommerce growth rarely comes from buying more traffic alone. We review acquisition, product pages, storefront performance, checkout, and measurement together to identify where sales are being lost and where the strongest growth opportunities sit.",
    primaryCta: "Request an Ecommerce Growth Review",
    secondaryCta: "Explore the Growth Approach",
    theme: "shopify",
    signal: "Acquisition → Product confidence → Checkout → Measurement",
    signalNote: "One connected buying journey, measured against the commercial actions that matter.",
    heroPoints: ["Acquisition & visibility", "Storefront & conversion", "Measurement & prioritisation"],
    problem: {
      eyebrow: "Where growth gets stuck",
      title: "Why Ecommerce Sales Growth Can Stall",
      intro: "A store can attract more visitors without generating enough profitable growth. Several smaller issues often work together – from traffic quality and product confidence to mobile friction and unclear measurement.",
      symptoms: [
        { title: "Customer acquisition costs keep climbing", body: "The budget is spread across campaigns without enough clarity on which products are profitable, contribution margins, returning customers, or which traffic is most likely to convert." },
        { title: "Product pages leave buying questions unanswered", body: "Visitors reach the store but do not get enough detail, reassurance or confidence around the product, delivery, returns, or final purchase decision." },
        { title: "Mobile shoppers drop before checkout", body: "Slow pages, navigation, variants, cart behaviour or checkout friction can interrupt the route to purchase at the point where intent is highest." },
        { title: "Reporting makes decisions harder", body: "Advertising platforms, analytics, and store data can tell different versions of the same story, making it difficult to know where budget and effort should go next." },
      ],
    },
    outcomes: {
      title: "What Makes an Effective Ecommerce Growth Strategy?",
      intro: "The strongest ecommerce growth strategies connect how people discover a product, decide it is right, and complete the order, and how the business measures the result. The priority should depend on the biggest commercial constraint – not on a pre-set channel plan.",
      items: [
        { number: "01", title: "Acquire more relevant shoppers", body: "Improve campaign structure, product feeds, search visibility and audience choices around the products and customer groups that matter most." },
        { number: "02", title: "Strengthen product confidence", body: "Make product information, imagery, variants, delivery, returns and social proof easier to understand at the moments buyers need reassurance." },
        { number: "03", title: "Remove friction from the route to purchase", body: "Review mobile performance, navigation, collection pages, product pages, cart and checkout so high-intent visitors have a clearer path to complete the order." },
        { number: "04", title: "Measure what supports profitable growth", body: "Connect store data, analytics, and advertising signals so decisions are based on commercial context rather than platform-reported revenue alone." },
      ],
    },
    media: {
      eyebrow: "One connected buying journey",
      title: "Connect Acquisition, Shopfront and Checkout",
      body: "Traffic, shopfront experience and measurement should not be treated as separate projects. A campaign can bring the right shopper to the wrong page, while a strong product page can still underperform if mobile speed, checkout or tracking is weak. We look at the journey as one system, so ecommerce growth solutions are prioritised around the point most likely to make a commercial difference.",
      captions: [
        ["Acquisition", "Reach the right shoppers"],
        ["Shopfront", "Build product confidence"],
        ["Measurement", "See what contributes to sales"],
      ],
      videoTitle: "Mobile shopping-journey walkthrough",
      imageTitle: "Product and collection page example",
      imageSrc: "/images/Services/Images on the pages/Shopify development after.png",
      imageAlt: "A demo storefront homepage with collections, featured products and checkout links laid out on desktop.",
      screenTitle: "Ecommerce performance dashboard",
      screenSrc: "/images/Services/Images on the pages/Search-term and ACoS view Amazon PPC.png",
      screenAlt: "Illustrative marketplace advertising report showing spend, sales, ACoS and ROAS by search term."
    },
    approach: {
      title: "Start With an Ecommerce Growth Review",
      intro: "Before recommending a service, we look at how the store makes money, how customers move from discovery to checkout, and where the strongest evidence of lost performance appears.",
      steps: [
        { title: "Understand the commercial model", body: "Review the product range, average order value, margin considerations, repeat purchase potential, and operational constraints." },
        { title: "Map the buying journey", body: "Assess acquisition sources, landing destinations, collections, product pages, mobile behaviour, cart, checkout and post-purchase measurement." },
        { title: "Find the biggest growth constraint", body: "Identify whether the first priority sits in campaigns, feeds, search visibility, content, development, conversion, or tracking." },
        { title: "Prioritise the next actions", body: "Recommend a practical sequence of changes, with a clear reason for each action and a way to measure whether it improves performance." },
      ],
    },
    services: {
      title: "Services That Support Your Ecommerce Growth Strategy",
      intro: "The service mix depends on the bottleneck, not on a pre-set bundle. We identify what is limiting ecommerce growth first, then connect the work to the service most likely to move that part of the buying journey forward.",
      items: [
        { title: "Shopify Development", href: "/shopify-development", cta: "Explore Shopify Development", body: "Improve storefront structure, product journeys, site performance and technical foundations to create a clearer route to purchase." },
        { title: "Google Ads Management", href: "/google-adwords-ppc", cta: "Explore Google Ads Management", body: "Reach high-intent shoppers through Search, Shopping and Performance Max campaigns built around product priorities and commercial goals." },
        { title: "Paid Social Advertising", href: "/social-media-paid-advertising", cta: "Explore Paid Social Advertising", body: "Build demand, test creative, reach new audiences and reconnect with potential customers through structured prospecting and remarketing." },
        { title: "Amazon PPC", href: "/amazon-ppc-advertising-agency-uk", cta: "Explore Amazon PPC", body: "Improve marketplace visibility and product discovery with more structured Amazon advertising and controlled ad spend." },
      ],
    },
    fit: {
      title: "Is This Ecommerce Growth Approach Right for You?",
      intro: "A useful first conversation should establish whether there is enough commercial and behavioural context to make sensible recommendations before anyone proposes an ecommerce growth service or channel plan.",
      good: ["Your store is already trading or close to launching", "You can share product, margin and fulfilment context", "There is enough traffic, sales history, or budget to learn from", "You are willing to improve the store as well as the acquisition channels"],
      notYet: ["The product range and pricing are not settled", "There is no reliable stock or fulfilment process", "You need guaranteed revenue or ROAS", "The only acceptable recommendation is to increase ad spend"],
    },
    proof: {
      title: "See Ecommerce Growth Work in Context",
      body: "Explore relevant case studies to see the commercial problem, the work completed, and the context behind the outcome. We use verified examples to show how acquisition, search, development, or conversion work supported a real business – not to promise the same result for every store.",
      links: [
        { label: "Browse Ecommerce-Related Work", href: "/case-studies" },
        { label: "View the Online Clothing Search Project", href: "/case-studies/clothing-business" },
      ],
    },
    faqTitle: "Ecommerce Growth Strategy FAQs",
    faq: [
      { q: "What is an ecommerce growth strategy?", a: "An ecommerce growth strategy is a prioritised plan for improving the parts of the customer journey that have the greatest commercial impact. Depending on the store, that can include acquisition, search visibility, product pages, mobile experience, checkout, tracking, or a combination of these areas." },
      { q: "Do you only work with Shopify stores?", a: "No. Shopify is one of the platforms we support, but the ecommerce growth review starts with the commercial model and customer journey rather than the platform name. We confirm whether the current setup is suitable before recommending development work." },
      { q: "Can you manage Google Shopping or Meta Ads?", a: "Yes. Paid campaign support can include Google Ads and paid social, with work around campaign structure, product feeds, creative, audiences, landing destinations, and tracking. The scope depends on the store, the current accounts, and the commercial priorities." },
      { q: "Will you improve conversion as well as traffic?", a: "Where the evidence points to storefront friction, we can review product pages, collections, mobile experience, and the route to checkout. We separate observed issues from assumptions that need testing, so changes have a clear reason behind them." },
      { q: "How do you decide which ecommerce growth solution to prioritise?", a: "We look at product economics, acquisition data, customer behaviour, storefront performance and measurement together. The first priority should be the constraint with the strongest evidence and the clearest commercial upside – not simply the channel with the largest available budget." },
      { q: "What information do you need from us?", a: "Useful starting information includes store access, product priorities, margin or contribution context, fulfilment constraints, analytics, advertising accounts and the commercial targets used by the business." },
    ],
    final: {
      title: "Find the Biggest Constraint on Ecommerce Growth",
      body: "Tell us which products matter, where sales feel inconsistent, and what your current reporting says. We will review the route from acquisition to checkout and recommend a practical starting point based on the evidence available.",
      cta: "Request an Ecommerce Growth Review",
      formNeed: "More ecommerce sales",
      formPrompt: "Which products or parts of the buying journey are underperforming?",
    },
  },
  "improve-website-conversion": {
    slug: "improve-website-conversion",
    // SEO brief (Oct 2026): provisional focus "improve website conversion". Keep the page
    // diagnosis-first; "CRO services"/"CRO agency UK" are reserved for a future CRO service page.
    eyebrow: "Website conversion improvement for UK businesses",
    title: "Improve Website Conversion and",
    titleAccent: "Turn More Visitors Into Enquiries",
    intro:
      "If your website already attracts relevant traffic but too few visitors enquire, book or buy, the problem may be in the journey itself. We review where people lose clarity, confidence or momentum, then prioritise the changes most likely to improve website conversion.",
    primaryCta: "Request a Website Conversion Review",
    secondaryCta: "See How We Find Conversion Friction",
    theme: "wordpress",
    signal: "Clarity → confidence → action",
    heroPoints: ["Evidence-led page reviews", "Design and development support", "Tracking before assumptions"],
    definition: {
      title: "What Is Website Conversion Optimisation?",
      body: "Website conversion optimisation is the process of improving the pages and journeys that turn relevant visitors into useful actions such as enquiries, calls, bookings or purchases. It looks at clarity, trust, usability, forms, mobile experience, traffic intent and measurement. The aim is not to change everything – it is to find the biggest source of friction and fix the right problem first.",
      // The seven areas the definition names, in its order.
      tagsLabel: "What it looks at",
      tags: ["Clarity", "Trust", "Usability", "Forms", "Mobile experience", "Traffic intent", "Measurement"],
    },
    problem: {
      eyebrow: "Conversion friction",
      title: "Why Website Visitors Do Not Convert",
      intro: "Visitors rarely explain why they leave without acting. The clues usually sit across message clarity, page structure, proof, mobile usability, forms, technical performance and the quality of the traffic arriving.",
      symptoms: [
        { title: "The Offer Is Not Clear Quickly Enough", body: "Visitors should be able to understand who the offer is for, what problem it solves, and what to do next without decoding vague marketing language." },
        { title: "Trust and Proof Appear Too Late", body: "Reviews, results, process information and reassurance need to appear close to the decisions where visitors are most likely to hesitate." },
        { title: "Mobile Friction Makes the Next Step Harder", body: "Dense layouts, difficult navigation, slow pages, or awkward forms can turn a simple enquiry into unnecessary work on a phone." },
        { title: "Tracking Shows Actions but Not Why They Happened", body: "A form submission or purchase is useful, but better decisions come from knowing which page, message, device, and traffic source helped or blocked the journey." },
      ],
    },
    outcomes: {
      title: "How to Improve Website Conversion",
      intro: "Improving website conversion is not about random button changes. It is a structured process of making the offer easier to understand, increasing confidence, reducing friction, and measuring whether the customer journey improves.",
      items: [
        { number: "01", title: "Make the Offer Clear", body: "Make the audience, problem, value, and next step obvious so the right visitor can quickly decide whether the offer fits." },
        { number: "02", title: "Add Trust Where Decisions Happen", body: "Place reviews, proof, process information, FAQs and expectation-setting close to the moments where a visitor needs reassurance." },
        { number: "03", title: "Make the Next Step Easier", body: "Improve calls to action, forms, mobile interactions, and page flow so the next step feels simple, then track meaningful conversions rather than vanity clicks." },
      ],
    },
    media: {
      eyebrow: "Before and after",
      title: "Website Conversion Improvements: What Changed and Why",
      // The brief's text here is an instruction to use a verified before-and-after example;
      // this is its customer-facing version, which does not present these images as that proof.
      body: "When we show a before-and-after, it sets out the original conversion problem, the change made and the verified outcome, with the page, date range, traffic context and the action measured.",
      videoTitle: "Conversion review walkthrough",
      imageTitle: "Before-and-after page comparison",
      imageSrc: "/images/Services/Images on the pages/Shopify development before.png",
      imageAlt: "A dated storefront layout before a conversion-focused rebuild.",
      screenTitle: "User journey and conversion view",
      screenSrc: "/images/Services/Images on the pages/Organic search performance view SEO.png",
      screenAlt: "Illustrative performance report showing the pages and queries people arrive on before converting."
    },
    approach: {
      title: "How We Find the Biggest Website Conversion Opportunities",
      intro: "The review combines business context, analytics, and direct inspection of the customer journey so recommendations are prioritised by evidence, likely value, and implementation effort.",
      steps: [
        { title: "Define the Conversion That Matters", body: "Agree which enquiries, calls, bookings, purchases or other actions have genuine commercial value and how quality will be judged." },
        { title: "Review Traffic, Pages and Behaviour", body: "Review landing pages, devices, traffic sources, navigation, forms, drop-off points and whether the existing tracking can be trusted." },
        { title: "Prioritise the Highest-Value Changes", body: "Rank content, design, UX and development changes by likely value, confidence and effort so the team knows what to address first." },
        { title: "Implement, Measure and Learn", body: "Release the agreed improvements, check the data and customer feedback, then use the evidence to decide what should happen next." },
      ],
    },
    services: {
      title: "Services That Support Better Website Conversion",
      intro: "Website conversion problems often cross service boundaries. Once the main source of friction is clearer, the right route may involve development, ecommerce improvements, maintenance, or acquisition alignment rather than a pre-set package.",
      items: [
        { title: "WordPress Development", href: "/wordpress-development", cta: "Explore WordPress Development", body: "Improve page structure, usability, forms and conversion paths when the website itself is limiting enquiries." },
        { title: "Shopify Development", href: "/shopify-development", cta: "Explore Shopify Development", body: "Improve product discovery, trust, product-page clarity and checkout journeys when ecommerce visitors are not progressing to purchase." },
        { title: "Website Maintenance", href: "/wordpress-website-maintenance", cta: "Explore Website Maintenance", body: "Fix forms, broken interactions, performance issues, and ongoing technical friction that can interrupt the path to conversion." },
        { title: "Google Ads Management", href: "/google-adwords-ppc", cta: "Explore Google Ads Management", body: "Align search intent, ad messaging, landing pages, and conversion tracking so paid traffic arrives with the right expectation." },
      ],
    },
    fit: {
      title: "When Website Conversion Work Makes Sense",
      intro: "Website conversion work is most useful when there is enough relevant traffic to learn from, a valuable action to measure, and a team that can implement changes. We establish that before recommending a programme.",
      good: ["The website receives relevant traffic already", "There is a meaningful action to measure", "Your team can provide sales or customer feedback", "You can implement design, content or development changes"],
      notYet: ["There is too little relevant traffic to learn from", "The offer changes every week", "No one can define a valuable conversion", "You want a redesign based only on visual preference"],
    },
    proof: {
      title: "Website Conversion Case Studies and Relevant Results",
      body: "Good conversion proof should explain the starting problem, what changed, the traffic or measurement context, and the verified outcome. We use real case studies rather than isolated percentage claims.",
      links: [
        { label: "View website case studies", href: "/case-studies" },
        { label: "Explore WordPress development", href: "/wordpress-development" },
      ],
    },
    faqTitle: "Website Conversion Questions, Answered",
    faq: [
      { q: "What is website conversion optimisation?", a: "Website conversion optimisation improves the pages and journeys that turn relevant visitors into useful actions such as enquiries, calls, bookings or purchases. It combines clarity, usability, trust, traffic context, and measurement." },
      { q: "Do we need a complete redesign to improve website conversion?", a: "Not necessarily. A focused set of page, form, navigation, content, or trust improvements may be more sensible. A wider redesign only makes sense when the current structure, platform, or credibility creates a broader constraint." },
      { q: "What counts as a website conversion?", a: "It depends on the business. It may be a qualified form submission, phone call, booked consultation, purchase, or another action connected to commercial value. We agree on the useful action before judging performance." },
      { q: "How do you know what is stopping visitors from converting?", a: "We look at the pages people enter on, the traffic source, device behaviour, navigation, forms, trust signals, drop-off points, tracking quality, and customer or sales feedback. The aim is to find the most credible source of friction before making changes." },
      { q: "Can you work with our current developer or marketing team?", a: "Yes. We can provide the review and prioritised recommendations, implement the work ourselves where appropriate, or coordinate with an existing team if responsibilities are clear." },
      { q: "Can you guarantee a higher website conversion rate?", a: "No. Traffic quality, the offer, market conditions, seasonality, and implementation all affect the outcome. We can identify credible friction, improve the journey, and measure results without presenting a hypothesis as a guarantee." },
    ],
    final: {
      eyebrow: "Start With the Real Conversion Problem",
      title: "Find Out What Is Limiting Your Website Conversion",
      body: "Share the pages that matter, the traffic they receive, and the enquiries, bookings, or purchases you want more visitors to complete. We will review the context, identify the most credible source of friction, and recommend the most useful next step.",
      cta: "Request My Website Conversion Review",
      formNeed: "Better website conversion",
      formPrompt: "Which pages and actions matter most, and where do you think visitors are getting stuck?",
    },
  },
  "grow-local-visibility": {
    slug: "grow-local-visibility",
    // SEO brief (Oct 2026): provisional focus topic "local search visibility". Commercial
    // "local SEO services/agency/packages" terms stay on /local-seo.
    eyebrow: "Local search visibility for UK service businesses",
    title: "Improve Local Search Visibility and",
    titleAccent: "Win More Local Enquiries",
    intro:
      "Local search visibility depends on more than a Google Business Profile. Your profile, service and location pages, reviews, business details, and wider search presence need to reinforce the same services and areas. We help you identify what is limiting visibility and which part of your local search strategy to fix first.",
    primaryCta: "Check My Local Visibility",
    secondaryCta: "See How Local Visibility Works",
    theme: "seo",
    signal: "Local search → useful page → call or enquiry",
    heroPoints: ["Google Business Profile", "Service and location pages", "Local enquiry measurement"],
    definition: {
      title: "What Is Local Search Visibility?",
      body: "Local search visibility is how easily nearby customers can discover and evaluate your business across Google Search, Google Maps, and the pages they reach from those results. Strong visibility comes from consistent signals: accurate business information, a relevant Google Business Profile, useful service and location pages, genuine reviews, and a website that makes the next step clear. Google says local results are mainly influenced by relevance, distance, and prominence, so the goal is not to appear everywhere – it is to be a strong match where your business genuinely operates.",
      // Google's three named local ranking factors, paraphrased from its Business Profile help page.
      factors: [
        { title: "Relevance", body: "How well your profile and pages match what someone searched for." },
        { title: "Distance", body: "How far your business is from the searcher or the location in their search." },
        { title: "Prominence", body: "How well known and trusted the business is, online and offline." },
      ],
    },
    problem: {
      eyebrow: "Local search gaps",
      title: "Why Local Businesses Struggle to Appear in Search",
      intro: "Being close to a customer is only one part of local discovery. Search engines and customers also need clear, consistent evidence about what you do, where you work, and why your business is a credible choice.",
      symptoms: [
        { title: "Competitors Appear Above You in Maps", body: "Your Google Business Profile, categories, services, reviews, or website relevance may not give Google enough confidence that you are the best match for the searches you want to win." },
        { title: "Location Pages Add Little Local Value", body: "Changing a town name across near-identical pages does not help customers understand your real coverage, the service available there, or what to do next. Useful local pages need genuine service and area context." },
        { title: "Business Information Is Inconsistent", body: "Business names, addresses, phone numbers, opening hours or service areas can differ between your website, Google Business Profile and other trusted listings, weakening confidence in the business information." },
        { title: "Local Enquiries Are Hard to Measure", body: "Calls, profile actions, direction requests and website forms are often measured separately, making it difficult to see which local searches and pages are contributing to real enquiries." },
      ],
    },
    outcomes: {
      title: "What Strong Local Search Visibility Looks Like",
      intro: "The goal is not to rank everywhere. It is to become easier to find and trust for the services and locations your business can genuinely support – then make the route from search to enquiry simple.",
      items: [
        { number: "01", title: "Keep Business Information Accurate", body: "Keep your Google Business Profile, categories, services, opening details, service areas and core business information accurate and consistent across the places customers rely on." },
        { number: "02", title: "Build Relevant Local Pages and Signals", body: "Create service and location content that answers real questions about what you offer, where you work, and how customers can take the next step. Support those pages with sensible internal links and trustworthy local signals." },
        { number: "03", title: "Turn Local Visibility Into Enquiries", body: "Make calls, forms and contact routes easy to use, then measure profile actions and website enquiries together so local visibility can be judged against meaningful business outcomes." },
      ],
    },
    media: {
      eyebrow: "Local search landscape",
      title: "How Local Search Visibility Works as a System",
      body: "A customer may discover you in Google Maps, compare your reviews, visit a service or location page, and then call or submit a form.",
      journey: ["Business Profile", "Useful local page", "Enquiry or call"],
      videoTitle: "Local visibility review walkthrough",
      imageTitle: "Service-area page example",
      imageSrc: "/images/Services/local seo 2.jpg",
      imageAlt: "A service-area page being reviewed for a local business.",
      screenTitle: "Google Business Profile view",
      screenSrc: "/images/Services/Images on the pages/Google Business Profile and local performance local SEO.png",
      screenAlt: "Illustrative Google Business Profile performance view showing calls, direction requests and website clicks."
    },
    approach: {
      title: "A Practical Local Visibility Strategy for Your Real Service Area",
      intro: "A useful local visibility strategy starts with the services that matter commercially, the areas you genuinely cover, and how customers search for them – not with a long list of town names to force onto pages.",
      steps: [
        { title: "Map Services and Real Coverage", body: "Confirm the priority services, genuine service areas, branches and physical locations before deciding what should be optimised." },
        { title: "Audit the Local Search Footprint", body: "Review the website, Google Business Profile, reviews, trusted listings, competitors, and current enquiry tracking to see where the strongest gaps sit." },
        { title: "Fix Relevance and Trust Gaps", body: "Improve the profile, local pages, website structure, business information and supporting trust signals in the order most likely to matter." },
        { title: "Measure Local Visibility and Enquiries", body: "Track visibility alongside calls, forms, website visits, direction requests and other useful actions so progress is connected to customer behaviour." },
      ],
    },
    services: {
      title: "Services That Support Your Local Visibility Strategy",
      intro: "The right service depends on the bottleneck. Local visibility may need focused Local SEO work, broader SEO, stronger service or location pages, or paid search support while organic visibility develops.",
      items: [
        { title: "Local SEO", href: "/local-seo", cta: "Explore Local SEO", body: "Improve Google Business Profile signals, local relevance, reviews, business information and reporting when the main problem is organic local discovery." },
        { title: "Search Engine Optimisation", href: "/search-engine-optimisation", cta: "Explore Search Engine Optimisation", body: "Fix wider technical, content and authority issues when the visibility problem extends beyond maps and local profile signals." },
        { title: "WordPress Development", href: "/wordpress-development", cta: "Explore WordPress Development", body: "Improve service and location pages, site structure, performance and enquiry routes when the website itself is limiting local growth." },
        { title: "Google Ads Management", href: "/google-adwords-ppc", cta: "Explore Google Ads Management", body: "Capture high-intent local searches with paid campaigns while longer-term organic and map visibility is being improved." },
      ],
    },
    fit: {
      title: "Is a Local Visibility Strategy Right for Your Business?",
      intro: "The approach works best when the business serves real locations, can keep its information accurate, and has a genuine customer journey from local search to contact. We check those basics before recommending any service.",
      good: ["You serve defined UK locations or service areas", "Business information can be kept accurate", "Customers genuinely search locally for the service", "Your team can ask for and respond to customer reviews appropriately"],
      notYet: ["The service area is intentionally vague or nationwide", "The business cannot verify its profile details", "You expect instant first-place map rankings", "There is no website or contact route to support local demand"],
    },
    proof: {
      title: "Local Search Results and Case Studies",
      // The brief's text here is an editorial instruction (show what changed and the verified
      // outcome, no undated ranking claims); this is its customer-facing version.
      body: "Real projects, showing what changed in the profile, website or search strategy, and the verified outcomes that followed.",
      links: [
        { label: "View local-search case studies", href: "/case-studies" },
        { label: "Read the bakery search project", href: "/case-studies/bakery" },
      ],
    },
    faqTitle: "Local Visibility Questions, Answered",
    faq: [
      { q: "What is local search visibility?", a: "Local search visibility is how easily nearby customers can discover and evaluate your business across Google Search, Google Maps, and the pages they reach from those results. It depends on accurate business information, relevance, trust, website quality, and the customer’s location." },
      { q: "Why is my business not showing on Google Maps?", a: "There is rarely one universal reason. The issue may involve profile eligibility or verification, categories and services, relevance, proximity, reviews, business information, website signals, or stronger competitors. A local visibility review should identify the most likely gaps before changes are made." },
      { q: "Do I need a physical address to improve local visibility?", a: "Not always. Service-area businesses can be eligible for a Google Business Profile without displaying a customer-facing address, but the profile must accurately represent how the business operates and follow Google’s current eligibility and service-area rules." },
      { q: "Do I need a location page for every town I serve?", a: "No. Create a location page only when it can be genuinely useful, accurate, and meaningfully different. Publishing many near-identical town pages can create a poor user experience and weak content." },
      { q: "Can Google Business Profile improvements help local visibility?", a: "Yes, when the profile is eligible and accurately represents the business. Categories, services, hours, service areas, reviews and other profile information should support the same real-world services and locations described on the website." },
      { q: "How long does it take to improve local search visibility?", a: "Timing varies with competition, proximity, the current profile, website quality, review activity, and how quickly agreed improvements can be implemented. We prioritise the clearest gaps and measure progress without promising a fixed ranking date." },
    ],
    final: {
      eyebrow: "Start With the Real Local Visibility Problem",
      title: "Find Out What Is Limiting Your Local Visibility",
      body: "Tell us which services and UK locations matter most. We will review the local search journey, look for the clearest profile, website, relevance or measurement gaps, and explain the most useful next step – whether that is Local SEO, wider SEO, website work or another route.",
      cta: "Request My Local Visibility Check",
      formNeed: "Better local visibility",
      formPrompt: "Which services and UK locations do you want customers to find you for?",
    },
  },
  "outsource-digital-marketing": {
    slug: "outsource-digital-marketing",
    eyebrow: "Outsourced digital marketing support",
    title: "Add joined-up marketing capability",
    titleAccent: "without building every role in-house",
    intro:
      "When campaigns, SEO, content and website work sit with separate suppliers, good ideas can stall between them. OMH gives your business one accountable team to plan priorities, deliver the work and explain performance clearly.",
    primaryCta: "Discuss outsourced marketing support",
    secondaryCta: "See how the partnership works",
    theme: "maintenance",
    signal: "Priorities → delivery → reporting → next decision",
    heroPoints: ["One joined-up delivery team", "Flexible specialist support", "Clear ownership and reporting"],
    problem: {
      eyebrow: "The coordination gap",
      title: "Marketing slows down when nobody owns the whole picture",
      intro: "The problem is often not a lack of suppliers. It is the time spent briefing, chasing, translating reports and deciding which recommendation should happen first.",
      symptoms: [
        { title: "Channels are managed in isolation", body: "Campaign, SEO and website decisions compete instead of supporting the same commercial priority." },
        { title: "Plans outpace delivery capacity", body: "The internal team knows what should happen but lacks the specialist time to implement it consistently." },
        { title: "Reporting creates more questions", body: "Several dashboards describe activity without giving leadership a clear next decision." },
        { title: "Website changes become a bottleneck", body: "Campaign and content improvements wait for technical support, weakening speed and message match." },
      ],
    },
    outcomes: {
      title: "A practical extension of your internal team",
      intro: "Outsourcing works best when responsibilities, decision rights and commercial priorities are explicit.",
      items: [
        { number: "01", title: "One prioritised plan", body: "Translate business goals into a realistic sequence across acquisition, content, conversion and measurement." },
        { number: "02", title: "Specialists when the work needs them", body: "Bring in paid media, SEO, social, development or maintenance capability without pretending every channel is always required." },
        { number: "03", title: "Reporting that leads to action", body: "Explain what changed, what the evidence suggests and what should happen next in plain commercial language." },
      ],
    },
    media: {
      eyebrow: "Inside the partnership",
      title: "Make the plan, delivery and decisions easy to see",
      body: "This section can hold an approved planning-session video, a delivery-board image and an anonymised monthly report.",
      videoTitle: "Monthly strategy and performance review",
      imageTitle: "Shared priority and delivery plan",
      imageSrc: "/images/Solutions/2.jpg",
      imageAlt: "Two marketers planning channels and priorities against a digital marketing map on a whiteboard.",
      screenTitle: "Plain-English reporting view",
      screenSrc: "/images/Services/Images on the pages/Verified PPC result after.png",
      screenAlt: "Illustrative campaign report showing conversions, cost per conversion, conversion value and ROAS against the previous period."
    },
    approach: {
      title: "How an outsourced marketing relationship is set up",
      intro: "The first job is to create clarity about goals, people, systems and what is already in motion.",
      steps: [
        { title: "Business and capability review", body: "Understand goals, customer groups, internal skills, suppliers, technology, current activity and decision-making." },
        { title: "Agree priorities and ownership", body: "Define the first work programme, who approves it, what OMH owns and what stays with the internal team." },
        { title: "Deliver in visible cycles", body: "Plan and complete campaign, content, website and tracking work with a shared view of progress." },
        { title: "Review, learn and reset", body: "Use performance and business feedback to update priorities rather than repeating a fixed monthly checklist." },
      ],
    },
    services: {
      title: "A team that can cover acquisition, conversion and delivery",
      intro: "Your programme is shaped around the capability gap. These are common parts of the mix.",
      items: [
        { title: "Google Ads management", href: "/google-adwords-ppc", body: "Plan, manage and improve demand-capture campaigns." },
        { title: "Search engine optimisation", href: "/search-engine-optimisation", body: "Build technical and content priorities into the wider plan." },
        { title: "Social media marketing", href: "/social-media-marketing-services", body: "Maintain a useful, credible and consistent social presence." },
        { title: "Website maintenance", href: "/wordpress-website-maintenance", body: "Keep implementation moving with reliable technical support." },
      ],
    },
    fit: {
      title: "When outsourced marketing works well",
      good: ["Leadership can set clear commercial priorities", "There is an internal decision-maker and point of contact", "You need several connected skills, not a single isolated task", "You value visible planning and honest recommendations"],
      notYet: ["No one is available to approve work", "The business wants activity without sharing commercial context", "Every channel must be used regardless of evidence", "You need an instant substitute for sales, product or operational strategy"],
    },
    proof: {
      title: "Look at the range of problems we have worked on",
      body: "The case-study archive shows projects spanning search, paid media and websites. It also makes source limitations visible rather than turning them into sales claims.",
      links: [
        { label: "Browse all client work", href: "/case-studies" },
        { label: "Learn more about OMH", href: "/about-us" },
      ],
    },
    faq: [
      { q: "Is this a replacement for an in-house marketing manager?", a: "It can support a director or internal lead, but every relationship needs a named client-side decision-maker. We can add specialist planning and delivery capacity; we cannot replace access to business context and approvals." },
      { q: "Do we have to outsource every marketing channel?", a: "No. A useful programme can cover only the gaps that matter. Existing staff or suppliers can remain involved if ownership, communication and access are clear." },
      { q: "How do you decide what to work on each month?", a: "Priorities should follow commercial goals, evidence, deadlines and available capacity. We agree the work programme, report what changed and revise the next cycle when new information warrants it." },
      { q: "Can you work with our website developer or sales team?", a: "Yes. Joined-up delivery depends on that cooperation. We define handovers and responsibilities early so recommendations do not stall between teams." },
    ],
    final: {
      title: "Show us where marketing delivery is getting stuck",
      body: "Tell us what your internal team covers, which suppliers are involved and what keeps falling between them. We will suggest a sensible shape for the support.",
      cta: "Discuss an outsourced marketing team",
      formNeed: "Outsourced digital marketing",
      formPrompt: "Which marketing responsibilities do you need help planning or delivering?",
    },
  },
};

export const solutionOrder = [
  "generate-qualified-leads",
  "increase-ecommerce-sales",
  "improve-website-conversion",
  "grow-local-visibility",
  "outsource-digital-marketing",
] as const;
