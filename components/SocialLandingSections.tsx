import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ServiceCaseStudies } from "@/components/CaseStudies";
import { MediaFrame } from "@/components/ServiceMedia";
import { SiteTestimonials } from "@/components/Testimonials";
import { ServiceBand, type ServiceBandLabel } from "@/components/services/ServiceBand";
import { ArrowRight, Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { FinalCta } from "@/components/ui/FinalCta";
import { Eyebrow } from "@/components/ui/Proof";
import { company } from "@/lib/content/nav";
import { socialLanding as page } from "@/lib/content/social-landing";

/*
  /facebook-marketing-agency and /instagram-marketing-agency carry identical copy
  on the live site (Elementor 12307 and 12309), so the copy lives in one module
  and `variant` swaps section order, media composition and band rhythm.

  Scaffold rule: every section is a `ServiceBand` — symmetric vertical padding and
  a single label style. Mixing it with the margin-label `Section` was what caused
  the uneven gaps, the colliding bands and the empty label gutter.
*/

export type SocialVariant = "facebook" | "instagram";

// One label treatment per page — the two must not share a heading bar.
const labelStyle = (v: SocialVariant): ServiceBandLabel => (v === "instagram" ? "plain" : "dot");
type V = { variant: SocialVariant; event: string };

function SocialHero({ variant, event }: V) {
  const insta = variant === "instagram";

  const actions = (
    <div
      className={`mt-9 flex flex-wrap items-center gap-3.5 max-sm:flex-col max-sm:items-stretch ${insta ? "justify-center" : ""}`}
    >
      <Button href="/contact" arrow data-event={`${event}_consultation_click`}>
        {page.ctas.consultation}
      </Button>
      <Button href="/pricing" variant="secondary" data-event={`${event}_pricing_click`}>
        {page.ctas.pricing}
      </Button>
    </div>
  );

  if (insta) {
    // Centred masthead over a portrait strip — a feed, not a page banner.
    return (
      <section className="hero-grid border-b border-line bg-warm">
        <div className="container-omh section-md">
          <Reveal>
            <div className="mx-auto max-w-[68ch] text-center">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-muted">
                {page.eyebrow}
              </p>
              <h1 className="mx-auto mt-7 max-w-[16ch] font-sans text-display font-semibold text-balance">
                {page.title}
              </h1>
              <p className="mx-auto mt-7 max-w-[26ch] font-serif text-[clamp(21px,1.7vw,28px)] leading-[1.32] text-ink/85">
                {page.subtitle}
              </p>
              <p className="mx-auto mt-6 max-w-[58ch] text-body leading-relaxed text-ink/75">
                {page.standfirst}
              </p>
              {actions}
            </div>
            <div className="mt-14 grid grid-cols-4 gap-6 max-md:grid-cols-2">
              <MediaFrame kind="image" theme="amazon" ratio="4/5" title="Feed post" note="Approved branded feed image." />
              <MediaFrame kind="video" theme="amazon" ratio="4/5" title="Reel" note="Short vertical video for Reels or Stories." />
              <MediaFrame kind="image" theme="amazon" ratio="4/5" title="Carousel" note="Multi-slide carousel creative." />
              <MediaFrame kind="screen" theme="amazon" ratio="4/5" title="Profile grid" note="Anonymised profile showing the grid layout." />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="hero-grid border-b border-line bg-warm">
      <div className="container-omh section-md">
        <Reveal>
          <Eyebrow>{page.eyebrow}</Eyebrow>
          <h1 className="mt-9 max-w-[16ch] font-sans text-display font-semibold text-balance">
            {page.title}
          </h1>
          <div className="mt-10 grid grid-cols-12 items-center gap-x-12 gap-y-10 max-lg:block">
            <div className="col-span-6">
              <p className="max-w-[24ch] font-serif text-[clamp(21px,1.7vw,28px)] leading-[1.32] text-ink/85">
                {page.subtitle}
              </p>
              <p className="mt-6 max-w-[54ch] text-body leading-relaxed text-ink/75">
                {page.standfirst}
              </p>
              {actions}
            </div>
            <MediaFrame
              kind="video"
              theme="seo"
              ratio="16/10"
              title="Social campaign walkthrough"
              note="Replace with a short, anonymised campaign and creative review."
              className="col-span-6 max-lg:mt-10"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SocialJumpNav({ event }: { event: string }) {
  return (
    <nav aria-label="Sections on this page" className="border-b border-line bg-surface">
      <div className="container-omh flex flex-wrap items-center gap-x-8 gap-y-3 py-5">
        {page.jump.map((item) => (
          <a
            key={item.href}
            href={item.href}
            data-event={`${event}_jump_click`}
            className="text-[14px] font-semibold text-ink/70 transition-colors hover:text-amber-deep"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function SocialGoals({ variant }: { variant: SocialVariant }) {
  const insta = variant === "instagram";
  const questions = (
    <ul
      className={
        insta
          ? "grid grid-cols-2 gap-x-12 border-t border-line max-md:grid-cols-1"
          : "mt-9 border-t border-line"
      }
    >
      {page.goals.questions.map((question) => (
        <li key={question} className="flex items-baseline gap-4 border-b border-line py-4">
          <span aria-hidden className="font-serif text-[22px] leading-none text-amber-deep">?</span>
          <span className="text-body leading-snug text-ink/80">{question}</span>
        </li>
      ))}
    </ul>
  );

  if (insta) {
    return (
      <ServiceBand label={page.goals.label} id="need-help" tone="white" accent="bg-teal" labelStyle={labelStyle(variant)}>
        <Reveal>
          <div className="grid grid-cols-12 gap-x-12 gap-y-6 max-lg:block">
            <h2 className="col-span-5 max-w-[18ch] font-sans text-h2 font-semibold text-balance">
              {page.goals.title}
            </h2>
            <p className="col-span-7 max-w-[62ch] text-body leading-relaxed text-ink/75 max-lg:mt-6">
              {page.goals.body}
            </p>
          </div>
          <div className="mt-12">{questions}</div>
          <div className="mt-12 border-y border-line py-10 text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
              {page.goals.didYouKnow.heading}
            </p>
            <p className="mx-auto mt-5 max-w-[46ch] font-serif text-[clamp(21px,1.7vw,28px)] leading-[1.35] text-ink/85">
              {page.goals.didYouKnow.body}
            </p>
          </div>
        </Reveal>
      </ServiceBand>
    );
  }

  return (
    <ServiceBand label={page.goals.label} id="need-help" tone="white" accent="bg-teal" labelStyle={labelStyle(variant)}>
      <Reveal>
        <h2 className="max-w-[22ch] font-sans text-h2 font-semibold text-balance">
          {page.goals.title}
        </h2>
        <div className="mt-9 grid grid-cols-12 gap-x-12 gap-y-10 max-lg:block">
          <div className="col-span-7">
            <p className="max-w-[62ch] text-body leading-relaxed text-ink/75">{page.goals.body}</p>
            {questions}
          </div>
          <aside className="col-span-5 max-lg:mt-10">
            <div className="rounded-card border border-line bg-warm p-8 max-sm:p-6">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
                {page.goals.didYouKnow.heading}
              </p>
              <p className="mt-5 font-serif text-[clamp(19px,1.4vw,24px)] leading-[1.4] text-ink/85">
                {page.goals.didYouKnow.body}
              </p>
            </div>
          </aside>
        </div>
      </Reveal>
    </ServiceBand>
  );
}

function SocialHelp({ variant }: { variant: SocialVariant }) {
  // Facebook: ruled definition list. Instagram: a card grid — the same six items
  // should not arrive in the same shape on both pages.
  if (variant === "instagram") {
    return (
      <ServiceBand label={page.help.label} id="how-can-help" tone="warm" accent="bg-amber" labelStyle={labelStyle(variant)}>
        <Reveal>
          <h2 className="max-w-[24ch] font-sans text-h2 font-semibold text-balance">
            {page.help.title}
          </h2>
          <div className="mt-12 grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {page.help.items.map((item, i) => (
              <article key={item.term} className="rounded-card border border-line bg-surface p-7 max-sm:p-6">
                <span aria-hidden className="text-[12px] font-semibold tabular-nums text-amber-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-sans text-h4 font-semibold text-balance">{item.term}</h3>
                <p className="mt-3.5 text-[15px] leading-relaxed text-ink/75">{item.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </ServiceBand>
    );
  }

  return (
    <ServiceBand label={page.help.label} id="how-can-help" tone="mist" accent="bg-amber" labelStyle={labelStyle(variant)}>
      <Reveal>
        <h2 className="max-w-[24ch] font-sans text-h2 font-semibold text-balance">
          {page.help.title}
        </h2>
        <dl className="mt-11 border-t border-[#10243a]/15">
          {page.help.items.map((item) => (
            <div
              key={item.term}
              className="grid grid-cols-12 gap-x-12 gap-y-2 border-b border-[#10243a]/15 py-7 max-md:block"
            >
              <dt className="col-span-4 font-sans text-h4 font-semibold text-balance">{item.term}</dt>
              <dd className="col-span-8 max-w-[62ch] text-body leading-relaxed text-ink/75 max-md:mt-3">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </ServiceBand>
  );
}

function SocialMediaBand({ variant }: { variant: SocialVariant }) {
  if (variant === "instagram") {
    return (
      <ServiceBand label="Creative" tone="dark" accent="bg-[#ffb84d]" labelStyle={labelStyle(variant)}>
        <Reveal>
          <div className="grid grid-cols-12 items-center gap-x-12 gap-y-10 max-lg:block">
            <MediaFrame
              kind="video"
              theme="amazon"
              ratio="9/16"
              title="Vertical creative in the feed"
              note="Add a Reel or Story cut from a real campaign."
              className="col-span-4"
            />
            <div className="col-span-8 max-lg:mt-10">
              <h2 className="max-w-[18ch] font-sans text-h2 font-semibold text-balance">
                Creative built for the format it lands in.
              </h2>
              <p className="mt-6 max-w-[52ch] text-body leading-relaxed text-oninverse/70">
                The same message, optimised per placement — feed, story and carousel are not one
                asset resized.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6 max-sm:grid-cols-1">
                <MediaFrame kind="image" theme="amazon" ratio="16/10" title="Carousel frames" note="Approved multi-slide creative." />
                <MediaFrame kind="screen" theme="amazon" ratio="16/10" title="Engagement report" note="Anonymised monthly analytics screen." />
              </div>
            </div>
          </div>
        </Reveal>
      </ServiceBand>
    );
  }

  return (
    <ServiceBand label="Creative" tone="navy" accent="bg-[#9bc3f3]" labelStyle={labelStyle(variant)}>
      <Reveal>
        <div className="grid grid-cols-12 items-end gap-x-12 gap-y-8 max-lg:block">
          <h2 className="col-span-5 max-w-[16ch] font-sans text-h2 font-semibold text-balance">
            What the work actually looks like.
          </h2>
          <p className="col-span-7 max-w-[52ch] text-body leading-relaxed text-oninverse/70 max-lg:mt-6">
            Content, ad creative and the reporting that shows what each post did.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-12 gap-6">
          <MediaFrame kind="screen" theme="seo" ratio="16/9" title="Campaign manager view" note="Anonymised ad-set and audience screen." className="col-span-7 max-md:col-span-12" />
          <MediaFrame kind="image" theme="seo" ratio="5/4" title="Ad creative set" note="Approved branded post and ad designs." className="col-span-5 max-md:col-span-12" />
        </div>
      </Reveal>
    </ServiceBand>
  );
}

function SocialGetInTouch({ variant, event }: V) {
  return (
    <ServiceBand
      label={page.getInTouch.label}
      id="get-in-touch"
      tone={variant === "instagram" ? "white" : "warm"}
      accent="bg-teal" labelStyle={labelStyle(variant)}>
      <Reveal>
        <div className="grid grid-cols-12 items-center gap-x-12 gap-y-7 max-lg:block">
          <h2 className="col-span-7 max-w-[20ch] font-sans text-h2 font-semibold text-balance">
            {page.getInTouch.title}
          </h2>
          <p className="col-span-5 max-lg:mt-7 lg:justify-self-end">
            <Link
              href={company.phoneHref}
              data-event={`${event}_tel_click`}
              className="font-sans text-h3 font-semibold text-amber-deep underline underline-offset-[6px] transition-colors hover:text-ink"
            >
              Tel: {page.getInTouch.telLabel}
            </Link>
          </p>
        </div>
      </Reveal>
    </ServiceBand>
  );
}

function SocialPackages({ variant, event }: V) {
  const insta = variant === "instagram";
  return (
    <ServiceBand
      label={page.packages.label}
      id="packages"
      tone={insta ? "mist" : "white"}
      accent="bg-amber" labelStyle={labelStyle(variant)}>
      <Reveal>
        {insta ? (
          <>
            <div className="mx-auto max-w-[60ch] text-center">
              <h2 className="font-sans text-h2 font-semibold text-balance">{page.packages.title}</h2>
              <p className="mt-6 text-body leading-relaxed text-ink/75">{page.packages.subtitle}</p>
              <div className="mt-9">
                <Button href="/pricing" arrow data-event={`${event}_packages_pricing_click`}>
                  See the full price list
                </Button>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-x-12 border-t border-[#10243a]/15 pt-9 max-md:grid-cols-1">
              {page.packages.notes.map((note) => (
                <p key={note} className="text-[15px] leading-relaxed text-ink/70 max-md:mt-4 max-md:first:mt-0">
                  {note}
                </p>
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-12 gap-x-12 gap-y-10 max-lg:block">
            <div className="col-span-6">
              <h2 className="max-w-[20ch] font-sans text-h2 font-semibold text-balance">
                {page.packages.title}
              </h2>
              <p className="mt-6 max-w-[54ch] text-body leading-relaxed text-ink/75">
                {page.packages.subtitle}
              </p>
              <div className="mt-9">
                <Button href="/pricing" arrow data-event={`${event}_packages_pricing_click`}>
                  See the full price list
                </Button>
              </div>
            </div>
            <div className="col-span-6 max-lg:mt-10">
              <div className="border-t border-line pt-8">
                {page.packages.notes.map((note) => (
                  <p key={note} className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-ink/70 first:mt-0">
                    {note}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </Reveal>
    </ServiceBand>
  );
}

// Real case studies rather than a heading with a button — the live page's own
// carousel here is unedited placeholder text, so this is the honest substitute.
function SocialCaseStudies() {
  return (
    <div id="case-studies">
      <ServiceCaseStudies
        serviceId="social-media"
        title="See the work behind the results."
        body="Social and search projects we have delivered for UK businesses."
      />
    </div>
  );
}

function SocialGuarantee({ variant }: { variant: SocialVariant }) {
  const insta = variant === "instagram";
  return (
    <ServiceBand
      label={page.guarantee.label}
      tone={insta ? "warm" : "dark"}
      accent={insta ? "bg-amber" : "bg-[#f2c675]"} labelStyle={labelStyle(variant)}>
      <Reveal>
        {insta ? (
          <div className="mx-auto max-w-[62ch] text-center">
            <h2 className="font-sans text-h2 font-semibold text-balance">{page.guarantee.title}</h2>
            {page.guarantee.body.map((paragraph) => (
              <p key={paragraph} className="mt-6 text-body leading-relaxed text-ink/75">
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-x-12 gap-y-8 max-lg:block">
            <h2 className="col-span-5 max-w-[16ch] font-sans text-h2 font-semibold text-balance">
              {page.guarantee.title}
            </h2>
            <div className="col-span-7 max-lg:mt-8">
              {page.guarantee.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-5 max-w-[62ch] text-body leading-relaxed text-oninverse/75 first:mt-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}
      </Reveal>
    </ServiceBand>
  );
}

function SocialResources({ variant }: { variant: SocialVariant }) {
  const insta = variant === "instagram";
  return (
    <ServiceBand
      label={page.resources.label}
      tone={insta ? "white" : "warm"}
      accent="bg-teal" labelStyle={labelStyle(variant)}>
      <Reveal>
        <div className="grid grid-cols-12 items-end gap-x-12 gap-y-6 max-lg:block">
          <h2 className="col-span-5 max-w-[18ch] font-sans text-h2 font-semibold text-balance">
            {page.resources.title}
          </h2>
          <p className="col-span-7 max-w-[58ch] text-body leading-relaxed text-ink/75 max-lg:mt-5">
            {page.resources.subtitle}
          </p>
        </div>
        {insta ? (
          <dl className="mt-12 border-t border-line">
            {page.resources.items.map((item) => (
              <div key={item.term} className="grid grid-cols-12 gap-x-12 border-b border-line py-7 max-md:block">
                <dt className="col-span-4 font-sans text-h4 font-semibold text-balance">{item.term}</dt>
                <dd className="col-span-8 max-w-[62ch] text-body leading-relaxed text-ink/75 max-md:mt-3">
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>
        ) : (
          <div className="mt-12 grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {page.resources.items.map((item) => (
              <article key={item.term} className="rounded-card border border-line bg-surface p-8 max-sm:p-6">
                <h3 className="font-sans text-h4 font-semibold">{item.term}</h3>
                <p className="mt-4 text-body leading-relaxed text-ink/75">{item.body}</p>
              </article>
            ))}
          </div>
        )}
      </Reveal>
    </ServiceBand>
  );
}

function SocialReviews({ variant, event }: V) {
  return (
    <SiteTestimonials
      eventPrefix={event}
      eyebrow={page.reviews.subtitle}
      title={page.reviews.title}
      tone={variant === "instagram" ? "dark" : "navy"}
      accent={variant === "instagram" ? "bg-[#ffb84d]" : "bg-[#9bc3f3]"}
      labelStyle={labelStyle(variant)}
    />
  );
}

function SocialFaq({ variant }: { variant: SocialVariant }) {
  const insta = variant === "instagram";
  return (
    <ServiceBand label={page.faq.label} tone={insta ? "warm" : "white"} accent="bg-amber" labelStyle={labelStyle(variant)}>
      <Reveal>
        {insta ? (
          <div className="grid grid-cols-12 gap-x-12 gap-y-8 max-lg:block">
            <div className="col-span-4">
              <div className="lg:sticky lg:top-24">
                <h2 className="max-w-[14ch] font-sans text-h2 font-semibold text-balance">
                  {page.faq.title}
                </h2>
                <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {page.faq.items.length} questions
                </p>
              </div>
            </div>
            <div className="col-span-8 max-lg:mt-8">
              <Accordion
                group="social-landing-faq"
                items={page.faq.items.map((item) => ({
                  q: item.q,
                  a: <p className="leading-relaxed">{item.a}</p>,
                }))}
              />
            </div>
          </div>
        ) : (
          <>
            <h2 className="mb-11 max-w-[20ch] font-sans text-h2 font-semibold text-balance">
              {page.faq.title}
            </h2>
            <Accordion
              group="social-landing-faq"
              items={page.faq.items.map((item) => ({
                q: item.q,
                a: <p className="leading-relaxed">{item.a}</p>,
              }))}
            />
          </>
        )}
      </Reveal>
    </ServiceBand>
  );
}

// Neither variant repeats the full-width ruled link list: Facebook gets numbered
// tiles with a rule above each label, Instagram gets bordered cards with arrows.
function SocialSolutions({ variant, event }: V) {
  const insta = variant === "instagram";
  return (
    <ServiceBand
      label={page.solutions.label}
      tone={insta ? "mist" : "warm"}
      accent="bg-amber" labelStyle={labelStyle(variant)}>
      <Reveal>
        <h2 className="max-w-[20ch] font-sans text-h2 font-semibold text-balance">
          {page.solutions.title}
        </h2>
        <div className="mt-12 grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          {page.solutions.links.map((link, i) =>
            insta ? (
              <Link
                key={link.href}
                href={link.href}
                data-event={`${event}_solution_click`}
                className="group flex items-center justify-between gap-4 rounded-card border border-line bg-surface px-6 py-5 font-sans text-body font-semibold transition-colors hover:border-teal hover:text-amber-deep"
              >
                {link.label}
                <ArrowRight className="size-4 shrink-0 text-amber-deep transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                data-event={`${event}_solution_click`}
                className="group border-t-2 border-line pt-5 transition-colors hover:border-teal"
              >
                <span aria-hidden className="text-[12px] font-semibold tabular-nums text-amber-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-3 block font-sans text-h4 font-semibold transition-colors group-hover:text-amber-deep">
                  {link.label}
                </span>
              </Link>
            ),
          )}
        </div>
      </Reveal>
    </ServiceBand>
  );
}

/* Facebook has its own questionnaire on the live site; Instagram doesn't, so it
   goes to the paid-social quote form. The closing button used to repeat /pricing,
   which is already linked three times higher up the page. */
const quoteCta = {
  facebook: { label: "Start the Facebook Ads Questionnaire", href: "/facebook-paid-ads-questionnaire" },
  instagram: { label: "Request a Paid Social Quote", href: "/social-media-paid-marketing-request-quote" },
} as const;

function SocialCta({ variant, event }: V) {
  const quote = quoteCta[variant];
  return (
    <FinalCta
      title={page.consultation.title}
      titleAccent={page.consultation.accent}
      body={page.standfirst}
      primary={{ label: page.ctas.consultation, href: "/contact", event: `${event}_final_cta_click` }}
      secondary={{ label: quote.label, href: quote.href, event: `${event}_final_quote_click` }}
      contactEvents={{ phone: `${event}_footer_phone_click`, email: `${event}_footer_email_click` }}
    />
  );
}

function SocialFaqJsonLd() {
  const mainEntity = page.faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  }));
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity }).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/* Band rhythm — no two adjacent sections share a ground:
   facebook   warm → white → mist  → navy → warm  → white → warm(cases) → dark  → warm  → navy → white → warm → ink
   instagram  warm → dark  → white → warm → mist  → white → warm(cases) → warm* → white → navy → warm → mist → ink
   (*guarantee sits after the case-study band, which has its own border rules)  */
export function SocialLandingPage({ variant, event }: V) {
  const v = { variant, event };
  return (
    <main>
      <SocialFaqJsonLd />
      <SocialHero {...v} />
      <SocialJumpNav event={event} />
      {variant === "instagram" ? (
        <>
          <SocialMediaBand variant={variant} />
          <SocialGoals variant={variant} />
          <SocialHelp variant={variant} />
          <SocialPackages {...v} />
          <SocialGetInTouch {...v} />
        </>
      ) : (
        <>
          <SocialGoals variant={variant} />
          <SocialHelp variant={variant} />
          <SocialMediaBand variant={variant} />
          <SocialGetInTouch {...v} />
          <SocialPackages {...v} />
        </>
      )}
      <SocialCaseStudies />
      <SocialGuarantee variant={variant} />
      <SocialResources variant={variant} />
      <SocialReviews {...v} />
      <SocialFaq variant={variant} />
      <SocialSolutions {...v} />
      <SocialCta {...v} />
    </main>
  );
}
