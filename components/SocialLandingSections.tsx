import { Reveal } from "@/components/Reveal";
import { ServiceCaseStudies } from "@/components/CaseStudies";
import { MediaFrame } from "@/components/ServiceMedia";
import { RelatedServices } from "@/components/RelatedServices";
import { CheckIcon } from "@/components/services/ServicePrimitives";
import {
  Band,
  SocialFAQ,
  SocialFinalCTA,
  SocialGoals,
  SocialGuaranteeAndReporting,
  SocialHero,
  SocialPricing,
  SocialReviews,
  SocialSupport,
  socialHeroStats,
} from "@/components/services/SocialMediaMarketingSections";
import { facebookLanding, instagramLanding } from "@/lib/content/social-landing";

/*
  /facebook-marketing-agency and /instagram-marketing-agency use the same scaffold as
  /social-media-marketing-services (hero with proof badge, navy goals, mist service
  cards, package cards, case studies, guarantee + resources, reviews, FAQ, related
  services, final CTA). Each page keeps its own SEO copy from `social-landing.ts`
  and one platform-specific band: Facebook's small-business and reporting bands,
  Instagram's creative, why-OMH and process bands.
*/

export type SocialVariant = "facebook" | "instagram";
type V = { variant: SocialVariant; event: string };

const pages = {
  facebook: {
    content: facebookLanding,
    platform: "Facebook",
    heroImage: "/images/Services/social media marketing 1(1).jpg",
    heroAlt: "A social media team reviewing campaign charts on tablets, with Facebook, Twitter and LinkedIn icons on the table.",
    proofHeading: "Facebook marketing backed by verified client trust",
    related: facebookLanding.solutions.links,
    cta: { body: facebookLanding.consultation.body, secondary: { label: "Start the Facebook Ads Questionnaire", href: "/facebook-paid-ads-questionnaire" } },
  },
  instagram: {
    content: instagramLanding,
    platform: "Instagram",
    heroImage: "/images/Services/social media marketing 1(2).jpg",
    heroAlt: "A phone's social media folder with the Instagram app beside X, TikTok, LinkedIn and YouTube, and Instagram open on a screen behind.",
    proofHeading: "Instagram marketing backed by verified client trust",
    related: instagramLanding.solutions.links,
    cta: { body: instagramLanding.standfirst, secondary: { label: "Request an Instagram Ads Quote", href: "/social-media-paid-marketing-request-quote" } },
  },
} as const;

// Facebook-only band from its SEO guide.
function FacebookSmallBusiness() {
  const smb = facebookLanding.smallBusiness;
  return (
    <Band label={smb.label} id="small-business">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-12 gap-y-8 max-lg:block">
          <div className="col-span-5">
            <h2 className="font-sans text-h2 font-semibold text-balance">{smb.title}</h2>
            <p className="mt-6 text-body leading-relaxed text-ink/85">{smb.intro}</p>
          </div>
          <div className="col-span-7 max-lg:mt-8">
            {smb.body.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-body leading-relaxed text-ink/75 first:mt-0">{paragraph}</p>
            ))}
          </div>
        </div>
      </Reveal>
    </Band>
  );
}

function FacebookReporting() {
  return (
    <Band label="Reporting" tone="navy">
      <Reveal>
        <div>
          <h2 className="font-sans text-h2 font-semibold text-balance">{facebookLanding.media.title}</h2>
          <p className="mt-5 text-body leading-relaxed text-oninverse/70">Content, ad creative and the reporting that shows what each post did.</p>
        </div>
        <div className="mt-12 grid grid-cols-12 gap-6">
          <MediaFrame kind="screen" theme="seo" ratio="16/9" title="Campaign manager view" note="Anonymised ad-set and audience screen." className="col-span-7 max-md:col-span-12" source="/images/Services/social media paid advertising.jpg" alt="Paid social campaign planning" />
          <MediaFrame kind="image" theme="seo" ratio="5/4" title="Ad creative set" note="Approved branded post and ad designs." source="/images/Services/social media paid advertising 1.jpg" alt="A set of branded paid social ad designs." className="col-span-5 max-md:col-span-12" />
        </div>
      </Reveal>
    </Band>
  );
}

// Instagram-only bands from its SEO guide.
function InstagramCreative() {
  const creative = instagramLanding.creative;
  return (
    <Band label="Creative" tone="navy">
      <Reveal>
        <div className="grid grid-cols-12 items-center gap-x-12 gap-y-10 max-lg:block">
          <MediaFrame kind="image" theme="amazon" ratio="9/16" title="Vertical creative in the feed" note="Add a Reel or Story cut from a real campaign." className="col-span-4" source="/images/Services/social media marketing 1(2).jpg" alt="Instagram and social media apps on a phone" />
          <div className="col-span-8 max-lg:mt-10">
            <h2 className="font-sans text-h2 font-semibold text-balance">{creative.title}</h2>
            <p className="mt-6 text-body leading-relaxed text-oninverse/70">{creative.body}</p>
            <div className="mt-10 grid grid-cols-2 gap-6 max-sm:grid-cols-1">
              <MediaFrame kind="image" theme="amazon" ratio="16/10" title="Carousel frames" note="Approved multi-slide creative." source="/images/Services/social media paid advertising.jpg" alt="A marketing team reviewing paid social campaign results on a tablet, with performance charts on the table." />
              <MediaFrame kind="screen" theme="amazon" ratio="16/10" title="Engagement report" note="Anonymised monthly analytics screen." source="/images/Services/social media marketing 1(1).jpg" alt="Social media team reviewing campaign charts" />
            </div>
          </div>
        </div>
      </Reveal>
    </Band>
  );
}

function InstagramWhy() {
  const why = instagramLanding.why;
  return (
    <Band label={why.label} id="why-omh">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-12 gap-y-10 max-lg:block">
          <div className="col-span-6">
            <h2 className="font-sans text-h2 font-semibold text-balance">{why.title}</h2>
            {why.body.map((paragraph) => (
              <p key={paragraph} className="mt-6 text-body leading-relaxed text-ink/75">{paragraph}</p>
            ))}
          </div>
          <ul className="col-span-6 self-end border-t border-line max-lg:mt-10">
            {why.points.map((point) => (
              <li key={point} className="flex gap-4 border-b border-line py-5 text-body leading-relaxed text-ink/80">
                <CheckIcon className="mt-1 size-4 shrink-0 text-amber-deep" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Band>
  );
}

function InstagramProcess() {
  const process = instagramLanding.process;
  return (
    <Band label={process.label} id="how-it-works" tone="navy">
      <Reveal>
        <h2 className="font-sans text-h2 font-semibold text-balance">{process.title}</h2>
        <ol className="mt-12 grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-sm:grid-cols-1">
          {process.steps.map(([title, body], i) => (
            <li key={title} className="rounded-card border border-oninverse/12 bg-oninverse/[0.04] p-6">
              <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-[#9bc3f3]">Step {i + 1}</p>
              <h3 className="mt-3 font-sans text-h4 font-semibold text-balance">{title}</h3>
              <p className="mt-3.5 text-body leading-relaxed text-oninverse/72">{body}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Band>
  );
}

/* Band rhythm — no two adjacent sections share a ground:
   facebook   warm → navy(goals) → mist(services) → white(small business) → navy(reporting) → white(packages) → cases → navy → mist → navy(reviews) → mist(faq) → white(related) → ink
   instagram  warm → navy(goals) → mist(services) → navy(creative)* → white(why) → navy(process) → white(packages) → cases → navy → mist → navy(reviews) → mist(faq) → white(related) → ink
   (*the creative band sits between two light grounds)  */
export function SocialLandingPage({ variant, event }: V) {
  const { content: page, platform, heroImage, heroAlt, proofHeading, related, cta } = pages[variant];
  const insta = variant === "instagram";
  return (
    <div className="service-page service-page-social">
      <SocialHero
        eyebrow={page.eyebrow}
        title={page.title}
        highlight={page.titleAccent}
        body={page.standfirst}
        primary={{ label: page.ctas.consultation, event: `${event}_consultation_click` }}
        secondary={{ label: page.ctas.pricing, event: `${event}_pricing_click` }}
        stats={socialHeroStats}
        visual={<MediaFrame kind="image" theme="seo" ratio="5/4" title={`${platform} marketing`} note="" source={heroImage} alt={heroAlt} />}
        proofHeading={proofHeading}
      />
      <SocialGoals
        label={page.goals.label}
        title={page.goals.title}
        body={page.goals.body}
        goals={page.goals.questions}
        note={<><strong className="font-semibold text-oninverse/85">{page.goals.didYouKnow.heading}</strong> {page.goals.didYouKnow.body}</>}
      />
      <SocialSupport
        label={page.help.label}
        title={page.help.title}
        body={"intro" in page.help ? page.help.intro : undefined}
        items={page.help.items.map((item) => ({ title: item.term, body: item.body }))}
      />
      {insta ? (
        <>
          <InstagramCreative />
          <InstagramWhy />
          <InstagramProcess />
        </>
      ) : (
        <>
          <FacebookSmallBusiness />
          <FacebookReporting />
        </>
      )}
      <SocialPricing
        label={page.packages.label}
        title={page.packages.title}
        body={page.packages.subtitle}
        notes={page.packages.notes}
        event={event}
      />
      <div id="case-studies">
        <ServiceCaseStudies
          serviceId="social-media"
          title={insta ? instagramLanding.caseStudies.title : "See the work behind the results."}
          body={insta ? instagramLanding.caseStudies.body : "Social and search projects we have delivered for UK businesses."}
        />
      </div>
      <SocialGuaranteeAndReporting
        guarantee={{ label: page.guarantee.label, title: page.guarantee.title, body: page.guarantee.body }}
        reporting={{ label: page.resources.label, eyebrow: undefined, title: page.resources.title, intro: page.resources.subtitle, items: page.resources.items }}
      />
      <SocialReviews label={insta ? "Reviews" : page.reviews.title} title="What our customers say after working with us." eventPrefix={event} />
      <SocialFAQ
        label={page.faq.label}
        title={page.faq.title}
        description={"subtitle" in page.faq ? page.faq.subtitle : `The ${page.faq.items.length} questions we are asked most often.`}
        items={page.faq.items}
        group={`${event}_faq`}
      />
      <RelatedServices
        eventPrefix={event}
        label={page.solutions.label}
        title={page.solutions.title}
        body={"subtitle" in page.solutions ? page.solutions.subtitle : undefined}
        links={related.map((link) => ({ title: link.label, href: link.href, body: "body" in link ? link.body : undefined }))}
      />
      <SocialFinalCTA
        title={page.consultation.title}
        titleAccent={page.consultation.accent}
        body={cta.body}
        primaryLabel={page.ctas.consultation}
        secondary={{ label: cta.secondary.label, href: cta.secondary.href, event: `${event}_final_quote_click` }}
        eventPrefix={event}
      />
    </div>
  );
}
