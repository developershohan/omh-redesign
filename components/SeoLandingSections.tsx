import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { MediaFrame } from "@/components/ServiceMedia";
import { ServiceTestimonials } from "@/components/Testimonials";
import { ServiceBand, type ServiceBandLabel } from "@/components/services/ServiceBand";
import { CheckIcon, HighlightedText, withLinks } from "@/components/services/ServicePrimitives";
import { Button } from "@/components/ui/Button";
import { FinalCta } from "@/components/ui/FinalCta";
import { Eyebrow } from "@/components/ui/Proof";
import { company } from "@/lib/content/nav";
import type { SeoLanding } from "@/lib/content/seo-landing";

/*
  Both legacy SEO landing pages come from one Elementor template, so the copy
  structure is shared and one renderer serves both. `variant` mirrors the section
  order, media composition and band rhythm so the pages don't read as one page
  twice.

  Scaffold rule: every section is a `ServiceBand`. It carries symmetric vertical
  padding and one label style, so bands can never collide or drift — mixing it
  with the margin-label `Section` was what produced the uneven gaps and the empty
  label gutter.

  The live pages put a lead form in the hero and again above the footer. There is
  no submission endpoint in this codebase (Phase 5 builds the real quote forms),
  so the offer panels keep their exact headings and carry the form's own submit
  wording as the link label — no dead form fields.
*/

export type SeoVariant = "national" | "local";

// One label treatment per page, so the heading bar is not the same on both.
const labelStyle = (v: SeoVariant): ServiceBandLabel => (v === "local" ? "centered" : "topline");
type Props = { page: SeoLanding; event: string; variant: SeoVariant };

function OfferCard({ page, event }: { page: SeoLanding; event: string }) {
  return (
    <div className="rounded-card border border-line bg-surface p-8 max-sm:p-6">
      <p className="font-sans text-h3 font-semibold text-balance">{page.offer.heading}</p>
      <p className="mt-2 font-sans text-h3 font-semibold text-amber-deep text-balance">
        {page.offer.subheading}
      </p>
      <div className="mt-7 border-t border-line pt-7">
        <Button href="/contact" arrow data-event={`${event}_consultation_click`}>
          {page.offer.submit}
        </Button>
      </div>
    </div>
  );
}

function HeroCopy({ page, event }: { page: SeoLanding; event: string }) {
  return (
    <>
      <h1 className="max-w-[16ch] font-sans text-display font-semibold text-balance">
        <HighlightedText text={page.title} highlight={page.titleAccent} />
      </h1>
      <p className="mt-7 max-w-[54ch] text-lead leading-relaxed text-ink/75">{page.standfirst}</p>
      <div className="mt-9 flex flex-wrap items-center gap-3.5 max-sm:flex-col max-sm:items-stretch">
        <Button href="#checklist" arrow data-event={`${event}_checklist_click`}>
          {page.ctas.checklist}
        </Button>
        <Button href="/contact" variant="secondary" data-event={`${event}_audit_click`}>
          {page.ctas.audit}
        </Button>
      </div>
      <p className="mt-7 text-body text-ink/70">
        <Link
          href={company.phoneHref}
          data-event={`${event}_phone_click`}
          className="underline underline-offset-4 hover:text-amber-deep"
        >
          {page.ctas.phone}
        </Link>
      </p>
    </>
  );
}

export function SeoLandingHero({ page, event, variant }: Props) {
  const local = variant === "local";
  return (
    <section className="hero-grid border-b border-line bg-warm">
      <div className="container-omh section-md">
        <Reveal>
          <Eyebrow>{page.eyebrow}</Eyebrow>
          <div className="mt-9 grid grid-cols-12 items-start gap-x-12 gap-y-10 max-lg:block">
            {local ? (
              <>
                <aside className="col-span-5 lg:order-1">
                  <OfferCard page={page} event={event} />
                  <MediaFrame
                    kind="image"
                    theme="seo"
                    ratio="4/3"
                    title="Your business on the local map pack"
                    note="Replace with an approved Google Business Profile or map-pack screenshot."
                    className="mt-6"
                  />
                </aside>
                <div className="col-span-7 lg:order-2 max-lg:mb-10">
                  <HeroCopy page={page} event={event} />
                </div>
              </>
            ) : (
              <>
                <div className="col-span-7">
                  <HeroCopy page={page} event={event} />
                </div>
                <aside className="col-span-5 max-lg:mt-10">
                  <OfferCard page={page} event={event} />
                </aside>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// National: heading rail, copy and claims in three measured columns.
// Local: a portrait photograph leads, claims run as a two-column strip beneath.
export function SeoLandingAbout({ page, variant }: Omit<Props, "event">) {
  const local = variant === "local";

  if (local) {
    return (
      <ServiceBand label={page.about.eyebrow} tone="white" accent="bg-teal" labelStyle={labelStyle(variant)}>
        <Reveal>
          <div className="grid grid-cols-12 gap-x-12 gap-y-10 max-lg:block">
            <MediaFrame
              kind="image"
              theme="seo"
              ratio="3/4"
              title="The local SEO team"
              note="Add a photograph of the consultants who run local accounts."
              className="col-span-4"
            />
            <div className="col-span-8 max-lg:mt-10">
              <h2 className="max-w-[20ch] font-sans text-h2 font-semibold text-balance">
                {page.about.title}
              </h2>
              <p className="mt-6 max-w-[46ch] font-serif text-[clamp(19px,1.3vw,23px)] leading-[1.45] text-ink/85">
                {page.about.kicker}
              </p>
              <p className="mt-6 max-w-[62ch] text-body leading-relaxed text-ink/75">
                {page.about.body}
              </p>
              <ul className="mt-10 grid grid-cols-2 gap-x-10 border-t border-line max-md:grid-cols-1">
                {page.about.claims.map((claim) => (
                  <li key={claim} className="flex items-start gap-3.5 border-b border-line py-4">
                    <CheckIcon className="mt-1 size-4 shrink-0 text-teal" />
                    <span className="text-body leading-snug text-ink/80">{claim}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </ServiceBand>
    );
  }

  return (
    <ServiceBand label={page.about.eyebrow} tone="white" accent="bg-teal" labelStyle={labelStyle(variant)}>
      <Reveal>
        <div className="grid grid-cols-12 gap-x-12 gap-y-10 max-lg:block">
          <div className="col-span-4">
            <h2 className="max-w-[16ch] font-sans text-h2 font-semibold text-balance">
              {page.about.title}
            </h2>
          </div>
          <div className="col-span-4 max-lg:mt-8">
            <p className="max-w-[40ch] font-serif text-[clamp(19px,1.3vw,23px)] leading-[1.45] text-ink/85">
              {page.about.kicker}
            </p>
            <p className="mt-6 max-w-[46ch] text-body leading-relaxed text-ink/75">
              {page.about.body}
            </p>
          </div>
          <ul className="col-span-4 max-lg:mt-8">
            {page.about.claims.map((claim) => (
              <li
                key={claim}
                className="flex items-start gap-3.5 border-b border-line py-4 first:border-t"
              >
                <CheckIcon className="mt-1 size-4 shrink-0 text-teal" />
                <span className="text-body leading-snug text-ink/80">{claim}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </ServiceBand>
  );
}

// National: a wide performance strip. Local: three narrow views of local search.
export function SeoLandingMedia({ variant }: { variant: SeoVariant }) {
  if (variant === "local") {
    return (
      <ServiceBand label="Local search" tone="navy" accent="bg-[#9bc3f3]" labelStyle={labelStyle(variant)}>
        <Reveal>
          <div className="grid grid-cols-12 items-end gap-x-12 gap-y-8 max-lg:block">
            <h2 className="col-span-5 max-w-[16ch] font-sans text-h2 font-semibold text-balance">
              Three views of how customers nearby find you.
            </h2>
            <p className="col-span-7 max-w-[52ch] text-body leading-relaxed text-oninverse/70 max-lg:mt-6">
              The listing, the reviews and the queries that put you in front of people searching in
              your area.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-md:grid-cols-1">
            <MediaFrame kind="image" theme="seo" ratio="4/3" title="Business profile" note="Approved Google Business Profile view." />
            <MediaFrame kind="screen" theme="seo" ratio="4/3" title="Local queries" note="Anonymised local search-term report." />
            <MediaFrame kind="video" theme="seo" ratio="4/3" title="Listing walkthrough" note="Short screen recording of a profile being optimised." />
          </div>
        </Reveal>
      </ServiceBand>
    );
  }

  return (
    <ServiceBand label="Search landscape" tone="mist" accent="bg-amber" labelStyle={labelStyle(variant)}>
      <Reveal>
        <div className="grid grid-cols-12 items-end gap-x-12 gap-y-10 max-lg:block">
          <div className="col-span-5">
            <h2 className="max-w-[15ch] font-sans text-h2 font-semibold text-balance">
              Make the route from search to useful page visible.
            </h2>
            <p className="mt-6 max-w-[46ch] text-body leading-relaxed text-ink/70">
              How a site is crawled, how it performs in search, and how its content is structured.
            </p>
          </div>
          <MediaFrame
            kind="screen"
            theme="seo"
            ratio="16/10"
            title="Organic search performance view"
            note="Use an anonymised Search Console screen with dates and metric definitions."
            className="col-span-7"
          />
        </div>
        <div className="mt-6 grid grid-cols-12 gap-6">
          <MediaFrame kind="image" theme="seo" ratio="5/4" title="Crawl and architecture map" note="Add a real sitemap or annotated page hierarchy." className="col-span-5 max-md:col-span-12" />
          <MediaFrame kind="video" theme="seo" ratio="16/8" title="SEO review walkthrough" note="Replace with a short audit-to-priority recording." className="col-span-7 max-md:col-span-12" />
        </div>
      </Reveal>
    </ServiceBand>
  );
}

// A single statement line — the shortest section on the page, so it reads as a
// breath between the two dense ones either side of it.
export function SeoLandingOffering({ page, variant }: Omit<Props, "event">) {
  const local = variant === "local";
  return (
    <ServiceBand label={page.offering.eyebrow} tone="warm" accent="bg-amber" labelStyle={labelStyle(variant)}>
      <Reveal>
        {local ? (
          <div className="mx-auto max-w-[58ch] text-center">
            <h2 className="font-sans text-h2 font-semibold text-balance">{page.offering.title}</h2>
            <p className="mt-6 text-lead leading-relaxed text-ink/75">
              {withLinks(page.offering.body)}
            </p>
          </div>
        ) : (
          <div className="max-w-[46ch]">
            <h2 className="font-sans text-h2 font-semibold text-balance">{page.offering.title}</h2>
            <p className="mt-6 font-serif text-[clamp(21px,1.6vw,28px)] leading-[1.38] text-ink/85">
              {withLinks(page.offering.body)}
            </p>
          </div>
        )}
      </Reveal>
    </ServiceBand>
  );
}

// Signature device: the free-checklist offer is a priced bundle on the live page,
// so it is set as a value ledger — line items, values, struck-through total.
export function SeoLandingChecklist({ page, event, variant }: Props) {
  const local = variant === "local";

  const ledger = (
    <dl className="rounded-card border border-line bg-surface p-8 max-sm:p-6">
      {page.checklist.items.map((item) => (
        <div
          key={item.label}
          className="flex items-baseline justify-between gap-6 border-b border-line py-4 first:pt-0"
        >
          <dt className="text-body leading-snug text-ink/80">{item.label}</dt>
          <dd className="shrink-0 font-sans text-h4 font-semibold tabular-nums text-amber-deep">
            {item.value}
          </dd>
        </div>
      ))}
      <div className="flex items-baseline justify-between gap-6 pt-5">
        <dt className="text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
          {page.checklist.totalLabel}
        </dt>
        <dd className="shrink-0 font-sans text-h3 font-semibold tabular-nums text-ink line-through">
          {page.checklist.total}
        </dd>
      </div>
    </dl>
  );

  const copy = (
    <div>
      <h2 className="max-w-[18ch] font-sans text-h2 font-semibold text-balance">
        {page.checklist.title}
      </h2>
      {local && (
        <MediaFrame
          kind="image"
          theme="seo"
          ratio="16/10"
          title="Inside the checklist"
          note="Replace with a page from the downloadable checklist."
          className="mt-8"
        />
      )}
      <div className="mt-9 flex flex-wrap items-center gap-3.5 max-sm:flex-col max-sm:items-stretch">
        <Button href="/contact" arrow data-event={`${event}_download_click`}>
          {page.checklist.download}
        </Button>
        <Button href="/contact" variant="secondary" data-event={`${event}_checklist_audit_click`}>
          {page.checklist.audit}
        </Button>
      </div>
    </div>
  );

  return (
    <ServiceBand
      label={page.checklist.eyebrow}
      id="checklist"
      tone={local ? "mist" : "white"}
      accent="bg-amber"
      labelStyle={labelStyle(variant)}
    >
      <Reveal>
        <div className="grid grid-cols-12 gap-x-12 gap-y-10 max-lg:block">
          {local ? (
            <>
              <div className="col-span-5 lg:order-1">{ledger}</div>
              <div className="col-span-7 lg:order-2 max-lg:mb-10">{copy}</div>
            </>
          ) : (
            <>
              <div className="col-span-6">{copy}</div>
              <div className="col-span-6 max-lg:mt-10">{ledger}</div>
            </>
          )}
        </div>
      </Reveal>
    </ServiceBand>
  );
}

export function SeoLandingTestimonials({ page, event, variant }: Props) {
  return (
    <ServiceTestimonials
      testimonials={page.testimonials.items}
      eyebrow={page.testimonials.eyebrow}
      title={page.testimonials.title}
      body={page.testimonials.body}
      label={page.testimonials.eyebrow}
      eventPrefix={event}
      tone={variant === "local" ? "navy" : "mist"}
      accent={variant === "local" ? "bg-[#9bc3f3]" : "bg-teal"}
      labelStyle={labelStyle(variant)}
    />
  );
}

export function SeoLandingCta({ page, event }: Omit<Props, "variant">) {
  return (
    <FinalCta
      title={page.cta.title}
      titleAccent={page.cta.accent}
      body={`${page.cta.offerTitle} — ${page.cta.offerSave}`}
      primary={{ label: page.cta.submit, href: "/contact", event: `${event}_final_cta_click` }}
      secondary={{ label: "See the price list", href: "/pricing", event: `${event}_pricing_click` }}
      contactEvents={{ phone: `${event}_footer_phone_click`, email: `${event}_footer_email_click` }}
    />
  );
}

/* Band rhythm is deliberate — no two adjacent sections share a ground:
   national  warm → white → warm → mist  → white → navy → ink
   local     warm → navy  → white → mist → warm  → dark → ink            */
export function SeoLandingPage({ page, event, variant }: Props) {
  const shared = { page, event, variant };
  return (
    <main>
      <SeoLandingHero {...shared} />
      {variant === "local" ? (
        <>
          <SeoLandingMedia variant={variant} />
          <SeoLandingAbout page={page} variant={variant} />
          <SeoLandingChecklist {...shared} />
          <SeoLandingOffering page={page} variant={variant} />
        </>
      ) : (
        <>
          <SeoLandingAbout page={page} variant={variant} />
          <SeoLandingOffering page={page} variant={variant} />
          <SeoLandingMedia variant={variant} />
          <SeoLandingChecklist {...shared} />
        </>
      )}
      <SeoLandingTestimonials {...shared} />
      <SeoLandingCta page={page} event={event} />
    </main>
  );
}
