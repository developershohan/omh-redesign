// Verbatim copy from the live /facebook-marketing-agency/ and
// /instagram-marketing-agency/ pages (docs/legacy-pages-plan.md Phase 3).
//
// The two live pages are byte-for-byte the same content (Elementor page IDs
// 12307 and 12309 render an identical template with identical copy), so one
// content object serves both routes and the pages differ only in title,
// description and canonical.
//
// Only line-break normalisation was applied: the "packages" notes are one
// sentence flow that Elementor splits across five <p> tags mid-clause. The
// wording is unchanged.
//
// Not reproduced, because the live sections carry no copy of their own: the
// award-logo galleries, the pricing table (empty widget on the live page — the
// pricing heading has no table under it), the case-study carousel (placeholder
// lorem text) and the Calendly embed.

export const socialLanding = {
  eyebrow: "Online Marketing Help",
  title: "Social Media Marketing for Businesses",
  subtitle: "Grow Brand Awareness, Engagement, Traffic and Sell",
  standfirst:
    "We have a team of experienced SMM & SMO experts that can support the growth of your social channels and also work towards generating brand awareness and traffic. SMO with a well organise strategy and clear goals can be a great way to keep advertising costs low and create a great ROI.",
  ctas: { consultation: "Book a Free Consultation", pricing: "View Pricing" },

  jump: [
    { label: "Need Help?", href: "#need-help" },
    { label: "How We Can Help", href: "#how-can-help" },
    { label: "Get In Touch", href: "#get-in-touch" },
    { label: "Packages", href: "#packages" },
    { label: "Case Studies", href: "#case-studies" },
  ],

  goals: {
    label: "Need Help",
    title: "DEFINING SOCIAL MEDIA MARKETING GOALS",
    body: "Social media marketing includes activities like posting text and image updates, videos and and other content that drives audience engagement, as well as paid social media advertising. Before you begin creating social media marketing campaigns, consider your businesses goals. Starting a social media marketing campaign without a social strategy in mind is like wandering around a forest without a map.",
    questions: [
      "What are you hoping to achieve through social media marketing?",
      "Who is your target audience?",
      "Where would your target audience hang out and how would they use social media?",
      "What message do you want to send to your audience with social media marketing?",
    ],
    didYouKnow: {
      heading: "Did You Know?",
      body: "91% of social media users are accessing social channels via mobile devices. Facebook has more than 2 billion active users.",
    },
  },

  help: {
    label: "How",
    title: "We Can Help With Social Media Marketing Support",
    items: [
      {
        term: "Original social media posts",
        body: "We can support your online brand with content creation and assets to be able to showcase your product or service in a clear and on brand way. We have a team of experienced Graphic Designers that will be able to build up the look and feel of your brand to achieve your desired goal.",
      },
      {
        term: "Custom images design",
        body: "Online Marketing Help has a team of expert designers that can help create bespoke on brand custom images. If you want some eye-catching ad creative or templates for your social media marketing we can help you with a tailored package that suits your needs.",
      },
      {
        term: "Cover & profile photo design",
        body: "Cover and profile photos are generally the first thing your potential client will see which is why these are such important factors for your social profiles. We will help you create a clear and seamless design to make sure that your online accounts flow and link nicely.",
      },
      {
        term: "Social account optimisation",
        body: "SMO is exactly that, it is the optimisation of your social media through a number of different methods. It is the process of creating awareness about your product or service through using all of the various social channels such as Instagram, facebook, Twitter. We can talk you through the best package of Social account optimisation once we have reviewed what you have in place.",
      },
      {
        term: "Social media account audit",
        body: "You may not be new to Social Media and have an existing business account that might just need a little refresh. We can have a look at all of your existing social media accounts and best recommend you how to improve your account. Your social media may be one of the first representations of your business your potential client may see so it is important that this is consistent with the rest of your online accounts.",
      },
      {
        term: "Brand reputation analysis",
        body: "Customers will be talking about you to other potential customers on online forums and review groups. It is important that you keep on top of reviews (Good and Bad) and show your customers that you care. Our Social Media Managers will make sure they are looking for potential opportunities or problems online and deal with it in your tone of voice. We will of course pass on important reviews for you to manage and handle as well.",
      },
    ],
  },

  getInTouch: {
    label: "Get in touch",
    title: "Need Help With One Of Our Services?",
    telLabel: "+4402034893934",
  },

  packages: {
    label: "Packages",
    title: "Transparent Pricing That Are Perfect For Small Businesses That Want To Grow",
    subtitle:
      "With our website maintenance packages we will maintain your website and keep it upto date including 24/7 monitoring. We will advise you which package will be suitable for your requirements. This option is perfect for businesses that want peace of mind about their site.",
    notes: [
      "These packages include copy writing and content creation. The content we create will be inline with your existing brand if you don’t have a brand pallet we can help guide you with this. Our Social Media Marketing packages do not included as standard brand pallet creation so your account manager will discuss the packages available for this service should you need this.",
      "All designs for social media creative come with 1 review. We may use the same content across different platforms but will make sure it is optimised accordingly. The above packages are on a minimum 3 month basis.",
    ],
  },

  guarantee: {
    label: "Guarantee",
    title: "Don't Just Take Our Word For It",
    body: [
      "We are confident after years of experience that we will be able to deliver on our promise which is to support you in whatever way necessary with your technical support on your website. To show our fait in our capabilities at Online Marketing Help and our team our CEO wants to offer a you a money back guarantee to help make that decision to work with us a little easier.",
      "Start workint with Online Marketing Help today to bring your business to the next level. You deserve it.",
    ],
  },

  resources: {
    label: "Resources",
    title: "Looking For More Information?",
    subtitle:
      "Landed here because you want more information about Social Media Marketing. Well look no further.",
    items: [
      {
        term: "Monthly consultations",
        body: "Our expert team at Online Marketing Help understands how important it is to know what you are paying for when you have instructed a company to work on your behalf. With this in mind we make sure you get regular monthly updates on what we have achieved with a monthly consultation call. This isn’t to say you can’t get in touch before that but our experience shows that we will have collected enough data and information to be able to give you a good overview of what your account is doing and where your goal objectives are sitting and whether we are meeting them or surpassing them. Like everything the more time you give the process the more we will be able to optimise and build on the success.",
      },
      {
        term: "Transparent monthly reports",
        body: "We don’t want to bore you with the bits that aren’t relevant so we will show you a tailor made report based on the goals you have set with your customer care account manager. If you want a better understanding on a certain part of the work you have instructed us on then you can just let your account manager know on your monthly consultation call. Our goal is to showcase the achievements and successes we have delivered for you month on month and to showcase the progress achieved.",
      },
    ],
  },

  reviews: { title: "What Our Customers Say", subtitle: "After Working With Us" },

  faq: {
    label: "FAQ's",
    title: "Looking For More Information",
    items: [
      {
        q: "What other services do you offer?",
        a: "We are a full 360 website development and online marketing agency. We have marketers who solely specialise in Social Media Marketing. We offer all related services within social media, from strategy writing to content creation and management. Please have a look at our Social Media Marketing Case Studies, you will be able to see the kind of work we do and have done in the past, we have off the shelf marketing support or we can design a customised offer for you.",
      },
      {
        q: "How long will it take to start seeing results?",
        a: "It depends if you have opted for Pay Per Click Social Media Marketing support or if we are building up organic engagement and then what your goals are. You will almost instantly start seeing clicks and views from your campaign. In terms of conversions, like all things with advertising it takes time to see the best results. Typically most clients end up seeing a more steady stream of conversions during the 4-6 week period if we have built a paid advertising campaign, it can be considerably longer if we are doing this through engagement only posting on your pages. That being said we work out a strategy for you that best suits your budget and goals.",
      },
      {
        q: "How many times do you post content?",
        a: "This really does depend on the package you have signed up for with your account manager. We will best advise you what is appropriate for your style business and your business goals. When we post content to your Facebook page, it will be the same piece of content that will be sent to your other social media accounts.",
      },
      {
        q: "What kind of content do you post?",
        a: "Before we post anything we send it over for your approval and review. We do extensive research on your business and industry. Our content posts are made up of the following: Brand Message + Designed Graphic + Call-to-Action + Hashtags + External Links. If you have specific content that you need to be included we can make sure this is apart of the scheduled posts and your wider Social Media Strategy.",
      },
      {
        q: "Can I review the content before you post?",
        a: "Yes, before we schedule your campaign we send the newly designed social posts for your approval once these have been scheduled we will confirm this as well.",
      },
      {
        q: "Will you provide reports so we can track progress?",
        a: "Yes we will provide reporting showing you the progress every month. This will be a monthly analytics report.",
      },
      {
        q: "What is a monthly analytics report?",
        a: "A monthly analytics report is a document detailing all of the information about numbers of followers, likes, comments, posts and other vital statistics regarding your social media, to track the progress that has been made. This information also suggests ways to move forward with paid ads from our specialists at Online Marketing Help.",
      },
      {
        q: "What social media platforms do you offer support for?",
        a: "We can support you with Facebook, Instagram, LinkedIn and Youtube. Let’s chat. Message us today to discuss your project!",
      },
      {
        q: "How will you know what to post?",
        a: "We will send you a brief that you can fill out with all of your company information and brand vision. From there, we will make sure we understand how to respect your brand voice, creative and ultimately speak with your potential clients the way that you would. We will also research your industry before starting and you will be able to approve the content before it’s live.",
      },
      {
        q: "Can I request additional posts?",
        a: "Yes! We can definitely make you a custom proposal with additional posts if you are looking for a different Social Media Management to what we offer as standard.",
      },
      {
        q: "What is a custom social media strategy?",
        a: "There is a little more to just posting everyday and hoping for the best. We provide a comprehensive social media strategy customised for your business. We’ll perform a social audit, research your industry, trending hashtags, top influencers, competitor analysis, content marketing concepts, content calendar and custom action plan.",
      },
    ],
  },

  solutions: {
    label: "Solutions",
    title: "Our Services Are Goal Focussed",
    links: [
      { label: "Social Media Management", href: "/social-media-marketing" },
      { label: "Google Paid Advertising", href: "/google-adwords-ppc" },
      { label: "Graphic Design", href: "/logo-design" },
      { label: "Search Engine Optimisation", href: "/search-engine-optimisation" },
      { label: "Website Maintenance", href: "/wordpress-website-maintenance" },
      { label: "WordPress Development", href: "/wordpress-development" },
    ],
  },

  consultation: {
    label: "Free Consultation",
    title: "Let Us Help You Book A Call At A Time Convenient For You",
    accent: "Book A Call At A Time Convenient For You",
  },
} as const;
