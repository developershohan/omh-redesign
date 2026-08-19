/*
  Phase 7 of docs/legacy-pages-plan.md — /website-designs, the last legacy page.
  Copy verbatim from the live page (fetched 19 Aug 2026 through the logged-in
  browser), including its typos ("our fait in our capabilities", "Start workint
  with", "ecommerce Designs" in lower case).

  ◈ Live-site defect: the page's "CASE STUDIES" band is unfinished — five
  identical cards reading "Hospitality / It is a long established fact that a
  reader will be distracted by the readable content. / WEBSITE WEBSITE". That is
  lorem ipsum, not content, so it is NOT reproduced. The rebuild puts the real
  website case studies from case-studies.ts in that slot instead.
*/

export const websiteDesigns = {
  title: "Website Designs",
  standfirst: "Online Marketing Help Website Designs And Templates",
  statHeading:
    "Did you know that 70% of small businesses that have a website don’t have a clear CTA (Call To Action) on their website homepage?",
  intro: [
    "Call to Actions encourage users to take action which drives a conversion (a sale). At Online Marketing Help we build websites with conversions in mind. Here are some example themes and websites that we have used for existing clients.",
    "We can build custom websites as well as using theme templates to give you the best visual representation of your business online.",
  ],
  ctas: {
    consultation: "Book a free consultation",
    help: "How we can help",
    contact: "Get in touch",
    caseStudies: "Case studies",
  },

  help: {
    eyebrow: "How",
    heading: "We Can Help With WordPress Website Design Support",
    sectors: [
      "Construction Websites",
      "Accountancy Websites",
      "eCommerce Websites",
      "Non-Profit Websites",
      "Marketing Websites",
      "Fitness Websites",
      "Cleaning Websites",
      "Legal Websites",
      "Medical Websites",
      "Real Estate Websites",
      "Nightclub Websites",
      "Restaurant Websites",
    ],
    tradesLead:
      "Whether you offer Landscaping services or are an electrician we can help you create the perfect website to showcase your offering.",
    trades: [
      "Bricklayer",
      "Tiler",
      "Electrician",
      "Plumber",
      "Landscape Gardener",
      "Architect",
      "Builders’ Merchant",
      "Carpenter",
      "Building Surveyor",
      "and so much more…",
    ],
  },

  gallery: {
    eyebrow: "Just",
    heading: "Some Of Our Websites We Have Designed",
    /* The live page's own 38 theme screenshots — filename and alt text as
       published (except the ninth accountancy shot, where the live site repeats
       the eighth image's alt; corrected here).

       ◈ These CANNOT be hotlinked from onlinemarketinghelp.co.uk. Cloudflare
       answers cross-origin requests with its bot-check page, so Next's image
       optimizer gets a 400 ("not a valid image") and a visitor's browser gets an
       HTML page instead of a JPEG — verified, all 38 fail. On the live site they
       work only because the visitor already holds a Cloudflare clearance cookie
       for that domain.

       To switch the gallery on: download these 38 files from the WordPress media
       library into `public/images/website-designs/`, set `base` to
       "/images/website-designs/", and render `<Image src={base + file} />` in
       WebsiteDesignsSections.tsx in place of the frame-and-list fallback. */
    /* Flipped to true by scripts/import-uploads.mjs once the files are in
       public/images/website-designs/. Until then the section renders a frame
       plus the theme names instead of 38 broken images. */
    galleryReady: true,
    base: "/images/website-designs/",
    categories: [
      {
        title: "Accountancy Firm Designs",
        images: [
          { file: "Modern-and-Efficient-Accounting-Online-Marketing-Help-Theme.jpg", alt: "Modern and Efficient Accounting Online Marketing Help Theme" },
          { file: "Sophisticated-Online-Marketing-Assistance-Theme-for-Accountancy-Websites.jpg", alt: "Sophisticated Online Marketing Assistance Theme for Accountancy Websites" },
          { file: "Conversion-Boosting-Marketing-Support-Theme-for-Accountants.jpg", alt: "Conversion-Boosting Marketing Support Theme for Accountants" },
          { file: "Dynamic-and-Engaging-Marketing-Solutions-for-Accounting-Sites.jpg", alt: "Dynamic and Engaging Marketing Solutions for Accounting Sites" },
          { file: "Crisp-and-Results-Driven-Online-Marketing-Help-Theme-for-Accountancy-Sites.jpg", alt: "Crisp and Results-Driven Online Marketing Help Theme for Accountancy Sites" },
          { file: "Clean-and-Professional-Accounting-Website-Theme-Design-for-Online-Marketing-Help.jpg", alt: "Clean and Professional Accounting Website Theme Design for Online Marketing Help" },
          { file: "User-Friendly-Online-Marketing-Support-Design-for-Accounting-Firms.jpg", alt: "User-Friendly Online Marketing Support Design for Accounting Firms" },
          { file: "Sleek-and-Trusted-Accounting-Website-Theme-with-Online-Marketing-Aid.jpg", alt: "Sleek and Trusted Accounting Website Theme with Online Marketing Aid" },
          { file: "Responsive-Online-Marketing-Assistance-Theme-Tailored-for-Accountants.jpg", alt: "Responsive Online Marketing Assistance Theme Tailored for Accountants" },
        ],
      },
      {
        title: "Hospitality Designs",
        images: [
          { file: "Hospitality-Theme-Online-Marketing-Help-UK.jpg", alt: "Hospitality Theme Online Marketing Help UK" },
          { file: "Essex-web-designer-Website-Theme.jpg", alt: "Essex web designer Website Theme" },
          { file: "Dark-hospitality-website-theme.jpg", alt: "Dark hospitality website theme" },
          { file: "Bar-Restaurant-Website-Theme.jpg", alt: "Bar Restaurant Website Theme" },
          { file: "Hospitality-Theme-Online-Marketing-Help.jpg", alt: "Hospitality Theme Online Marketing Help" },
          { file: "Restaurant-Website-Theme.jpg", alt: "Restaurant Website Theme" },
        ],
      },
      {
        title: "Construction Designs",
        images: [
          { file: "WordPress-Website-Theme-Essex-Construction.png", alt: "WordPress Website Theme Essex Construction" },
          { file: "WordPress-Website-Theme.png", alt: "WordPress Website Theme" },
          { file: "WordPress-Website-Theme-Essex.png", alt: "WordPress Website Theme Essex" },
          { file: "Brand-New-Website-Development.png", alt: "Brand New Website Development" },
          { file: "WordPress-Website-Theme-Essex-Team.png", alt: "WordPress Website Theme Essex Team" },
          { file: "New-Website-Theme-Design-Experts-Essex-UK.png", alt: "New Website Theme Design Experts Essex UK" },
          { file: "UK-WordPress-Website-Theme-Experts.png", alt: "UK WordPress Website Theme Experts" },
          { file: "New-Website-Theme-Design.png", alt: "New Website Theme Design" },
          { file: "New-Website-Theme-Design-Experts-UK.png", alt: "New Website Theme Design Experts UK" },
        ],
      },
      {
        title: "Legal Firm Designs",
        images: [
          { file: "Legal-Firm-Website-Design-Essex.jpg", alt: "Legal Firm Website Design Essex" },
          { file: "Legal-Firm-Website-Design-Light-Essex.jpg", alt: "Legal Firm Website Design Light Essex" },
          { file: "Legal-Firm-Website-Design-Professional-Theme.jpg", alt: "Legal Firm Website Design Professional Theme" },
          { file: "Legal-Firm-Website-Design-Custom-Site.jpg", alt: "Legal Firm Website Design Custom Site" },
          { file: "Legal-Firm-Website-Design-Dark-Website-Scratch.jpg", alt: "Legal Firm Website Design Dark Website Scratch" },
          { file: "Legal-Firm-Website-Design-Uk-Designer.jpg", alt: "Legal Firm Website Design Uk Designer" },
        ],
      },
      {
        title: "ecommerce Designs",
        images: [
          { file: "Sleek-and-Modern-eCommerce-Website-Theme-Design-for-Online-Marketing-Help.jpg", alt: "Sleek and Modern eCommerce Website Theme Design for Online Marketing Help" },
          { file: "User-Friendly-Online-Marketing-Support-Design-for-eCommerce-Stores.jpg", alt: "User-Friendly Online Marketing Support Design for eCommerce Stores" },
          { file: "Responsive-eCommerce-Marketing-Assistance-Design.jpg", alt: "Responsive eCommerce Marketing Assistance Design" },
          { file: "High-Performance-Online-Marketing-Help-Theme-for-E-commerce.jpg", alt: "High-Performance Online Marketing Help Theme for E-commerce" },
          { file: "Efficient-Online-Marketing-Tools-and-Resources-for-eCommerce.jpg", alt: "Efficient Online Marketing Tools and Resources for eCommerce" },
          { file: "Dynamic-and-Engaging-Online-Marketing-Solutions-for-E-commerce.jpg", alt: "Dynamic and Engaging Online Marketing Solutions for E-commerce" },
          { file: "Contemporary-eCommerce-Marketing-Aid-Website-Theme.jpg", alt: "Contemporary eCommerce Marketing Aid Website Theme" },
          { file: "Vibrant-Online-Marketing-Assistance-Theme-with-Elegance-for-eCommerce.jpg", alt: "Vibrant Online Marketing Assistance Theme with Elegance for eCommerce" },
        ],
      },
    ] as { title: string; images: { file: string; alt: string }[] }[],
  },

  pricing: {
    eyebrow: "Custom Pricing",
    heading: "Transparent Pricing That Is Perfect For Small Businesses That Want To Grow",
    body: [
      "With our web design and theme development services, we offer from scratch packages to customisation of existing themes. We do this both on a White Label basis for companies that may need this service and don’t have a development team in place, and we also do this for businesses know what they want from a website but don’t know how to make it all come together. We'll recommend the most suitable package based on your specific needs.",
      "We specialise in crafting unique and tailor-made website themes from the ground up to perfectly align with your vision and brand identity. Our approach involves starting each project with a blank canvas, allowing us to meticulously design and develop a website theme that is exclusively yours. During the initial consultation, we prioritise understanding your specific requirements, preferences, and objectives. Based on the insights gathered, we provide a personalised pricing structure that reflects the complexity and intricacy of the theme you envision. This bespoke pricing model ensures that you only pay for the features, functionalities, and design elements that are essential to achieving your desired website aesthetics and functionality. Our goal is to deliver a website theme that not only meets but exceeds your expectations, making your online presence truly distinctive and captivating.",
    ],
  },

  contact: {
    eyebrow: "Get in touch",
    heading: "Need Help With One Of Our Services?",
    phone: "+4402034893934",
  },

  consultation: {
    eyebrow: "Free Consultation",
    heading: "Let Us Help You Book A Call At A Time Convenient For You",
  },

  guarantee: {
    eyebrow: "Guarantee",
    heading: "Don't Just Take Our Word For It",
    body: [
      "We are confident after years of experience that we will be able to deliver on our promise which is to support you in whatever way necessary with your technical support on your website. To show our fait in our capabilities at Online Marketing Help and our team our CEO wants to offer a you a money back guarantee to help make that decision to work with us a little easier.",
      "Start workint with Online Marketing Help today to bring your business to the next level. You deserve it.",
    ],
  },

  caseStudies: {
    eyebrow: "Case studies",
    heading: "Websites we have built and what changed after launch.",
  },

  seo: {
    title: "Website Designs",
    description:
      "Website designs and templates built with conversions in mind — custom builds and theme customisation for UK small businesses across construction, accountancy, legal, hospitality and ecommerce.",
  },
};
