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
  heroPoints: string[];
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
    imageSrc?: string;
    imageAlt?: string;
    screenTitle: string;
    screenSrc?: string;
    screenAlt?: string;
  };
  approach: {
    title: string;
    intro: string;
    steps: { title: string; body: string }[];
  };
  services: {
    title: string;
    intro: string;
    items: { title: string; href: string; body: string }[];
  };
  fit: {
    title: string;
    good: string[];
    notYet: string[];
  };
  proof: {
    title: string;
    body: string;
    links: { label: string; href: string }[];
  };
  faq: { q: string; a: string }[];
  final: {
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
    eyebrow: "Ecommerce growth for UK retailers",
    title: "Build a clearer route from",
    titleAccent: "product discovery to sale",
    intro:
      "Ecommerce growth is rarely fixed by buying more traffic alone. We review acquisition, product pages, store experience and measurement together so you can see where sales are being won or lost.",
    primaryCta: "Discuss your ecommerce growth",
    secondaryCta: "Explore the growth model",
    theme: "shopify",
    signal: "Acquisition → product confidence → checkout",
    heroPoints: ["Paid and organic acquisition", "Shopify and store improvements", "Revenue-aware measurement"],
    problem: {
      eyebrow: "Where sales leak",
      title: "Traffic can grow while commercial performance stands still",
      intro: "A store may have several small problems working together: the wrong traffic, weak product information, slow pages, a difficult mobile journey or attribution that obscures the real picture.",
      symptoms: [
        { title: "Customer acquisition costs keep climbing", body: "Budget is spread across campaigns without enough clarity on contribution margin, returning customers or profitable products." },
        { title: "Product pages do not answer buying questions", body: "Visitors reach the store but lack the detail, confidence or reassurance needed to choose." },
        { title: "Mobile traffic drops before checkout", body: "Navigation, variants, cart behaviour or page speed introduce friction at the point of purchase." },
        { title: "Platforms report different versions of revenue", body: "Ad platforms, analytics and store data disagree, making budget decisions harder than they should be." },
      ],
    },
    outcomes: {
      title: "Growth across the whole buying journey",
      intro: "The strongest plan considers how people find the product, decide it is right and complete the order.",
      items: [
        { number: "01", title: "Acquire more relevant shoppers", body: "Improve campaign structure, product feeds, search visibility and audience choices around the products that matter." },
        { number: "02", title: "Strengthen product confidence", body: "Clarify imagery, information, variants, delivery, returns and social proof at the moments buyers need them." },
        { number: "03", title: "Protect the route to purchase", body: "Review mobile speed, navigation, cart and checkout friction alongside accurate ecommerce tracking." },
      ],
    },
    media: {
      eyebrow: "Storefront story",
      title: "Show the product, campaign and checkout in one view",
      body: "Use approved store screens and a short journey walkthrough here to demonstrate how acquisition and development decisions connect.",
      videoTitle: "Mobile shopping-journey walkthrough",
      imageTitle: "Product and collection page example",
      imageSrc: "/images/Services/Images on the pages/Shopify development after.png",
      imageAlt: "A demo storefront homepage with collections, featured products and checkout links laid out on desktop.",
      screenTitle: "Ecommerce performance dashboard",
      screenSrc: "/images/Services/Images on the pages/Search-term and ACoS view Amazon PPC.png",
      screenAlt: "Illustrative marketplace advertising report showing spend, sales, ACoS and ROAS by search term."
    },
    approach: {
      title: "A commercially grounded ecommerce review",
      intro: "We look beyond platform totals to understand products, margins, customer behaviour and the store itself.",
      steps: [
        { title: "Understand the commercial model", body: "Review product range, average order value, margin considerations, repeat purchase and operational constraints." },
        { title: "Map the buying journey", body: "Assess acquisition sources, collection and product pages, mobile behaviour, cart, checkout and post-purchase measurement." },
        { title: "Prioritise the biggest constraint", body: "Decide whether the first move belongs in campaigns, feeds, content, development, tracking or a combination." },
        { title: "Test and learn responsibly", body: "Make changes with a clear reason, measure the effect and avoid treating platform attribution as the only truth." },
      ],
    },
    services: {
      title: "Ecommerce support from acquisition to storefront",
      intro: "The service mix depends on the bottleneck, not on a pre-set bundle.",
      items: [
        { title: "Shopify development", href: "/shopify-development", body: "Improve storefront structure, product journeys and technical foundations." },
        { title: "Google Ads management", href: "/google-adwords-ppc", body: "Manage Shopping, search and campaign traffic with stronger commercial context." },
        { title: "Paid social advertising", href: "/social-media-paid-advertising", body: "Test creative, prospecting and remarketing around defined audiences." },
        { title: "Amazon PPC", href: "/amazon-ppc-advertising-agency-uk", body: "Coordinate marketplace visibility, listings and controlled ad spend." },
      ],
    },
    fit: {
      title: "What helps an ecommerce programme work",
      good: ["Your store is already trading or close to launch", "You can share product, margin and fulfilment context", "There is enough traffic or budget to learn from", "You are willing to improve the store as well as the ads"],
      notYet: ["The product range and pricing are not settled", "There is no reliable stock or fulfilment process", "You need guaranteed revenue or ROAS", "The only acceptable recommendation is to spend more on ads"],
    },
    proof: {
      title: "See ecommerce and search work in context",
      body: "Use our case studies to understand the problems addressed and the work completed. We do not present an unsupported number as a promise for another store.",
      links: [
        { label: "Browse ecommerce-related work", href: "/case-studies" },
        { label: "View the online clothing search project", href: "/case-studies/clothing-business" },
      ],
    },
    faq: [
      { q: "Do you only work with Shopify stores?", a: "Shopify is one of the platforms we support, but the growth review begins with the commercial and customer journey rather than the platform name. We will confirm whether the current setup is suitable before recommending development work." },
      { q: "Can you manage Google Shopping or Meta Ads?", a: "Yes. Paid campaign support can cover Google Ads and paid social, including campaign structure, creative or feed considerations, landing destinations and tracking. Scope depends on the store and current accounts." },
      { q: "Will you improve conversion as well as traffic?", a: "Where the evidence points to store friction, we can review and improve product pages, collections, mobile experience and the route to checkout. We will separate observed issues from assumptions that need testing." },
      { q: "What information do you need from us?", a: "Useful starting information includes store access, product priorities, margins or contribution context, fulfilment constraints, analytics, advertising accounts and the commercial targets used by the business." },
    ],
    final: {
      title: "Find the part of the buying journey that deserves attention first",
      body: "Tell us which products matter, where sales feel inconsistent and what your current reporting says. We will review the route from acquisition to checkout and recommend a practical starting point.",
      cta: "Request an ecommerce growth review",
      formNeed: "More ecommerce sales",
      formPrompt: "Which products or parts of the buying journey are underperforming?",
    },
  },
  "improve-website-conversion": {
    slug: "improve-website-conversion",
    eyebrow: "Conversion improvement for UK business websites",
    title: "Make your website easier to",
    titleAccent: "understand, trust and act on",
    intro:
      "If your website already receives useful traffic, the next opportunity may be on the page itself. We identify the points where visitors hesitate, lose confidence or miss the next step, then improve them in a measured order.",
    primaryCta: "Discuss your website conversion",
    secondaryCta: "See what we review",
    theme: "wordpress",
    signal: "Clarity → confidence → action",
    heroPoints: ["Evidence-led page reviews", "Design and development support", "Tracking before assumptions"],
    problem: {
      eyebrow: "Conversion friction",
      title: "A website can look polished and still make the decision difficult",
      intro: "Visitors rarely announce why they left. The clues sit across page structure, message clarity, mobile behaviour, form design, trust signals and the quality of the traffic arriving.",
      symptoms: [
        { title: "The offer takes too long to understand", body: "Pages describe the business, but do not quickly explain who the service is for or what to do next." },
        { title: "Important proof arrives too late", body: "Relevant work, process or reassurance is buried after the point where the visitor needs confidence." },
        { title: "Mobile pages make action harder", body: "Dense layouts, awkward navigation or forms create unnecessary work on smaller screens." },
        { title: "Tracking counts actions without context", body: "The business knows a form was sent, but not which page, message or traffic source helped the decision." },
      ],
    },
    outcomes: {
      title: "Improve the decisions that happen on the page",
      intro: "Conversion improvement is not a collection of tricks. It is a disciplined way to remove uncertainty and friction.",
      items: [
        { number: "01", title: "Clarify the offer", body: "Make the audience, problem, value and next step clear without forcing visitors to decode agency language." },
        { number: "02", title: "Put confidence in the right place", body: "Use process, proof, FAQs and expectation-setting where they help a buying decision." },
        { number: "03", title: "Make action feel manageable", body: "Improve calls to action, forms, mobile interactions and measurement around meaningful conversions." },
      ],
    },
    media: {
      eyebrow: "Before and after",
      title: "Show what changed and why it mattered",
      body: "This section is ready for an approved page walkthrough, a before-and-after screen and an anonymised user-journey view.",
      videoTitle: "Conversion review walkthrough",
      imageTitle: "Before-and-after page comparison",
      imageSrc: "/images/Services/Images on the pages/Shopify development before.png",
      imageAlt: "A dated storefront layout before a conversion-focused rebuild.",
      screenTitle: "User journey and conversion view",
      screenSrc: "/images/Services/Images on the pages/Organic search performance view SEO.png",
      screenAlt: "Illustrative performance report showing the pages and queries people arrive on before converting."
    },
    approach: {
      title: "How we find a practical conversion priority",
      intro: "The review balances business context, analytics and direct inspection of the customer journey.",
      steps: [
        { title: "Agree the valuable actions", body: "Define the calls, forms, bookings or purchases that matter and how quality will be assessed." },
        { title: "Inspect traffic and behaviour", body: "Review landing pages, devices, sources, navigation, drop-off points and the reliability of existing tracking." },
        { title: "Create a prioritised backlog", body: "Rank message, design, content and development changes by likely value, confidence and effort." },
        { title: "Implement and evaluate", body: "Release improvements, check the data and keep decisions grounded in evidence rather than preference." },
      ],
    },
    services: {
      title: "Website, content and acquisition working together",
      intro: "Conversion problems often cross service boundaries. These are the most common supporting routes.",
      items: [
        { title: "WordPress development", href: "/wordpress-development", body: "Restructure or rebuild pages around usability and meaningful actions." },
        { title: "Shopify development", href: "/shopify-development", body: "Improve product discovery, confidence and the route to checkout." },
        { title: "Website maintenance", href: "/wordpress-website-maintenance", body: "Fix forms, layouts, performance issues and ongoing technical friction." },
        { title: "Google Ads management", href: "/google-adwords-ppc", body: "Align campaign intent and landing-page message before buying more traffic." },
      ],
    },
    fit: {
      title: "When conversion work is a sensible investment",
      good: ["The website receives relevant traffic already", "There is a meaningful action to measure", "Your team can provide sales or customer feedback", "You can implement design, content or development changes"],
      notYet: ["There is too little relevant traffic to learn from", "The offer changes every week", "No one can define a valuable conversion", "You want a redesign based only on visual preference"],
    },
    proof: {
      title: "See website and campaign work with the business context included",
      body: "Good proof explains the starting problem, the work and the measurement limits. Browse the project archive before deciding whether our approach fits.",
      links: [
        { label: "View website case studies", href: "/case-studies" },
        { label: "Explore WordPress development", href: "/wordpress-development" },
      ],
    },
    faq: [
      { q: "Do we need a complete website redesign?", a: "Not necessarily. A focused set of page, form or navigation improvements may be more sensible. We recommend a wider redesign only when the current structure, platform or visual credibility creates a broader constraint." },
      { q: "What counts as a website conversion?", a: "It depends on the business. It may be a qualified form submission, phone call, booked consultation, purchase or another action connected to commercial value. We agree this before measuring improvement." },
      { q: "Can you work with our current developer or marketing team?", a: "Yes. We can provide the review and prioritised recommendations, implement the work ourselves where appropriate, or coordinate with an existing team if responsibilities are clear." },
      { q: "Can you guarantee a conversion-rate increase?", a: "No. Traffic quality, offer, market conditions and implementation all affect the result. We can identify evidence, improve the journey and measure outcomes without presenting a test hypothesis as a guarantee." },
    ],
    final: {
      title: "Find out where your website is making the next step harder",
      body: "Share the pages that matter, the traffic they receive and the actions you want more visitors to take. We will review the context and suggest a useful first move.",
      cta: "Request a website conversion review",
      formNeed: "Better website conversion",
      formPrompt: "Which pages and actions matter most, and where do you think visitors are getting stuck?",
    },
  },
  "grow-local-visibility": {
    slug: "grow-local-visibility",
    eyebrow: "Local visibility for UK service-area businesses",
    title: "Be easier to find when local customers",
    titleAccent: "need what you do",
    intro:
      "Local visibility is built across your Google Business Profile, website, reviews and wider search presence. We connect those signals so customers can find the right service, in the right area, with a clear route to contact you.",
    primaryCta: "Check your local visibility",
    secondaryCta: "See the local framework",
    theme: "seo",
    signal: "Local search → useful page → call or enquiry",
    heroPoints: ["Google Business Profile", "Service and location pages", "Local enquiry measurement"],
    problem: {
      eyebrow: "Local search gaps",
      title: "Being nearby does not automatically make a business visible",
      intro: "Search engines and customers both need consistent evidence about what you do, where you operate and why the business is a credible choice.",
      symptoms: [
        { title: "The map results favour competitors", body: "Your profile, category choices, reviews or local relevance may not reflect the services you want to win." },
        { title: "Location pages repeat the same copy", body: "Thin pages change the town name without helping customers understand coverage, service or next steps." },
        { title: "Business details are inconsistent", body: "Names, addresses, phone numbers, opening information or service areas differ across the web." },
        { title: "Local enquiries are not measured clearly", body: "Calls, profile actions and website forms are counted separately with little commercial context." },
      ],
    },
    outcomes: {
      title: "A stronger local presence across maps and organic search",
      intro: "The goal is not visibility everywhere. It is useful visibility for the services and locations the business can genuinely support.",
      items: [
        { number: "01", title: "Make business information dependable", body: "Strengthen profile setup, service details, categories, opening information and wider consistency." },
        { number: "02", title: "Build useful local relevance", body: "Create service and area content that answers real customer questions instead of repeating place names." },
        { number: "03", title: "Turn visibility into contact", body: "Improve calls, forms, reviews and measurement so local performance connects to actual enquiries." },
      ],
    },
    media: {
      eyebrow: "Local search landscape",
      title: "Show how profiles, pages and enquiries connect",
      body: "Use an approved profile screen, location-page example and a short local search review in this visual section.",
      videoTitle: "Local visibility review walkthrough",
      imageTitle: "Service-area page example",
      imageSrc: "/images/Services/local seo 2.jpg",
      imageAlt: "A service-area page being reviewed for a local business.",
      screenTitle: "Google Business Profile view",
      screenSrc: "/images/Services/Images on the pages/Google Business Profile and local performance local SEO.png",
      screenAlt: "Illustrative Google Business Profile performance view showing calls, direction requests and website clicks."
    },
    approach: {
      title: "A local visibility plan based on your real service area",
      intro: "We begin with commercial coverage and customer behaviour, not a long list of town-name keywords.",
      steps: [
        { title: "Map services and locations", body: "Confirm the services to prioritise, the areas actually covered and any branches or physical locations." },
        { title: "Audit local signals", body: "Review the website, Google Business Profile, reviews, directories, competitors and current measurement." },
        { title: "Fix trust and relevance gaps", body: "Improve profile information, local pages, on-site structure and supporting signals in priority order." },
        { title: "Track useful local actions", body: "Monitor visibility alongside calls, forms, direction requests and business feedback where available." },
      ],
    },
    services: {
      title: "The services that support local customer discovery",
      intro: "Local visibility often depends on the quality of the wider website and search foundation.",
      items: [
        { title: "Local SEO", href: "/local-seo", body: "Improve profiles, maps visibility, local relevance and reporting." },
        { title: "Search engine optimisation", href: "/search-engine-optimisation", body: "Resolve technical, content and authority issues affecting organic search." },
        { title: "WordPress development", href: "/wordpress-development", body: "Build clearer service and location pages with reliable enquiry routes." },
        { title: "Google Ads management", href: "/google-adwords-ppc", body: "Capture local demand while longer-term organic visibility develops." },
      ],
    },
    fit: {
      title: "What we need for useful local SEO work",
      good: ["You serve defined UK locations or service areas", "Business information can be kept accurate", "Customers genuinely search locally for the service", "Your team can ask for and respond to customer reviews appropriately"],
      notYet: ["The service area is intentionally vague or nationwide", "The business cannot verify its profile details", "You expect instant first-place map rankings", "There is no website or contact route to support local demand"],
    },
    proof: {
      title: "See search work for location-led businesses",
      body: "Local and organic search projects, with the work and the measured outcome set out on each page.",
      links: [
        { label: "View local-search case studies", href: "/case-studies" },
        { label: "Read the bakery search project", href: "/case-studies/bakery" },
      ],
    },
    faq: [
      { q: "Do I need a physical address for local SEO?", a: "Not every service-area business displays an address, but Google has eligibility and representation rules for Business Profiles. We review the actual operating model and avoid recommending details that misrepresent the business." },
      { q: "Will you create a page for every town?", a: "Only where a page can be useful, accurate and meaningfully different. Publishing many near-identical town pages can create a poor experience and weak content rather than stronger local visibility." },
      { q: "Can you help with Google Business Profile?", a: "Yes. Support may include profile review, categories, services, business information, content and a practical review process, subject to account access and Google’s current policies." },
      { q: "How long does local SEO take?", a: "Timing varies with competition, current profile and website quality, review activity and the scale of technical or content work. We set priorities and report progress without promising a fixed ranking date." },
    ],
    final: {
      title: "See where local customers are finding competitors first",
      body: "Tell us the services and areas that matter. We will review the local search journey and explain which profile, website or measurement gaps deserve attention.",
      cta: "Request a local visibility check",
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
        { title: "Social media marketing", href: "/social-media-marketing", body: "Maintain a useful, credible and consistent social presence." },
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
