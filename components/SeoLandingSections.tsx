import Link from "next/link";
import {
  BriefcaseBusiness,
  ChartLine,
  FilePen,
  Link2,
  Mail,
  MapPin,
  Phone,
  Quote,
  ScanSearch,
  ShoppingBag,
  Store,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { MediaFrame } from "@/components/ServiceMedia";
import { ServiceTestimonials } from "@/components/Testimonials";
import { ServiceBand, type ServiceBandLabel } from "@/components/services/ServiceBand";
import { CheckIcon, HighlightedText, withLinks } from "@/components/services/ServicePrimitives";
import { Accordion } from "@/components/ui/Accordion";
import { Button, TextLink } from "@/components/ui/Button";
import { FinalCta } from "@/components/ui/FinalCta";
import { Eyebrow } from "@/components/ui/Proof";
import { company } from "@/lib/content/nav";
import type { SeoLanding } from "@/lib/content/seo-landing";

/*
  Both SEO landing pages share one content shape and one renderer. The local page
  is the legacy Elementor copy; the national page (/seo-services) follows the
  client's rewrite brief and has its own hero, proof and service sections.

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

/* ───────────────────────── National (/seo-services) ───────────────────────── */

// Signature device: the page's own Google listing, laid over a photo of someone
// searching. Title and description come from `page.meta`, the same strings the
// page's <head> publishes, so the preview is always the real snippet.
function SerpPreview({ meta }: { meta: NonNullable<SeoLanding["meta"]> }) {
  return (
    <div
      aria-hidden="true"
      className="absolute -bottom-10 -left-10 z-10 w-[min(410px,92%)] rounded-2xl border border-black/5 bg-white p-5 text-left shadow-[0_28px_60px_-24px_rgba(16,24,40,0.45)] max-lg:left-6 max-sm:relative max-sm:bottom-0 max-sm:left-0 max-sm:-mt-12 max-sm:ml-3 max-sm:w-[calc(100%-24px)]"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#101828] text-[10px] font-bold tracking-wide text-white">
          OMH
        </span>
        <div className="min-w-0 leading-tight">
          <p className="text-[14px] text-[#202124]">{company.name}</p>
          <p className="truncate text-[12px] text-[#4d5156]">
            onlinemarketinghelp.co.uk › {meta.path.replace("/", "")}
          </p>
        </div>
      </div>
      <p className="mt-3 text-[19px] leading-snug text-[#1a0dab]">{meta.title}</p>
      <p className="mt-1.5 line-clamp-2 text-[14px] leading-[1.55] text-[#4d5156]">{meta.description}</p>
    </div>
  );
}

function NationalHero({ page, event }: { page: SeoLanding; event: string }) {
  return (
    <section className="hero-grid overflow-x-clip border-b border-line bg-warm">
      <div className="container-omh pb-[clamp(40px,30px+1.6vw,60px)] pt-[clamp(48px,34px+2.3vw,80px)]">
        <Reveal>
          <div className="grid grid-cols-12 items-center gap-x-14 gap-y-12 max-lg:block">
            <div className="col-span-7 max-lg:mb-14">
              <Eyebrow>{page.eyebrow}</Eyebrow>
              <div className="mt-7">
                <HeroCopy page={page} event={event} />
              </div>
            </div>
            <div className="col-span-5">
              <div className="relative max-sm:flex max-sm:flex-col">
                <MediaFrame
                  kind="image"
                  theme="seo"
                  ratio="5/4"
                  title="Searching for a service"
                  note="Hero photograph."
                  source="/images/Services/SEO 2.jpg"
                  alt="Hands holding a tablet showing a search engine results page."
                />
                {page.meta && <SerpPreview meta={page.meta} />}
              </div>
              <div className="mt-20 flex flex-wrap items-center justify-between gap-5 rounded-card border border-line bg-surface p-5 max-sm:mt-6 max-sm:flex-col max-sm:items-start">
                <div>
                  <p className="font-sans text-h4 font-semibold">{page.offer.heading}</p>
                  <p className="font-sans text-body font-semibold text-amber-deep">{page.offer.subheading}</p>
                </div>
                <div className="shrink-0">
                  <Button href="/contact" small arrow data-event={`${event}_consultation_click`}>
                    {page.offer.submit}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <ul className="mt-16 grid grid-cols-5 border-t border-line max-lg:grid-cols-2 max-sm:grid-cols-1">
            {page.about.claims.map((claim) => (
              <li
                key={claim}
                className="flex items-center gap-3 border-line py-5 pr-4 lg:border-l lg:pl-5 lg:first:border-l-0 lg:first:pl-0"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-tint-amber text-amber-deep">
                  <CheckIcon className="size-3.5" />
                </span>
                <span className="text-[15px] font-semibold leading-snug">{claim}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

// Split header, then the one hard number the page has, set as a proof card.
function NationalWhy({ page }: { page: SeoLanding }) {
  const [proof, ...rest] = page.about.body.split("\n\n");
  return (
    <ServiceBand label={page.about.eyebrow} tone="white" accent="bg-teal" labelStyle="topline">
      <Reveal>
        <div className="grid grid-cols-12 items-end gap-x-14 gap-y-8 max-lg:block">
          <h2 className="col-span-5 max-w-[16ch] font-sans text-h2 font-semibold text-balance">
            {page.about.title}
          </h2>
          <p className="col-span-7 max-w-[60ch] font-serif text-[clamp(19px,1.3vw,23px)] leading-[1.5] text-ink/80 max-lg:mt-7">
            {page.about.kicker}
          </p>
        </div>
        <div className="mt-14 grid grid-cols-12 gap-6 max-lg:grid-cols-1">
          <div className="col-span-5 flex flex-col justify-between rounded-card bg-inverse p-10 text-oninverse max-sm:p-7">
            <div>
              <p className="text-[14px] font-semibold uppercase tracking-[0.15em] text-oninverse/60">
                Organic traffic growth
              </p>
              <p className="mt-6 font-sans text-h4 font-semibold text-oninverse/80">Up to</p>
              <p className="font-sans text-[clamp(72px,48px+4vw,120px)] font-semibold leading-[0.95] tracking-tight text-amber">
                466%
              </p>
            </div>
            <p className="mt-8 max-w-[44ch] text-body leading-relaxed text-oninverse/75">{proof}</p>
          </div>
          <div className="col-span-7 flex flex-col justify-center rounded-card border border-line bg-warm p-10 max-sm:p-7">
            {rest.map((paragraph) => (
              <p key={paragraph} className="max-w-[44ch] font-sans text-[clamp(20px,1.5vw,25px)] leading-[1.45] text-ink/85">
                {paragraph}
              </p>
            ))}
            <div className="mt-8">
              <TextLink href="/contact">{page.ctas.audit}</TextLink>
            </div>
          </div>
        </div>
      </Reveal>
    </ServiceBand>
  );
}

// Icons follow the order of `page.services` in lib/content/seo-landing.ts.
const serviceIcons = [ScanSearch, FilePen, MapPin, Link2, ChartLine];

function NationalServices({ page }: { page: SeoLanding }) {
  return (
    <ServiceBand label={page.offering.eyebrow} tone="warm" accent="bg-amber" labelStyle="topline">
      <Reveal>
        <div className="grid grid-cols-12 items-end gap-x-14 gap-y-6 max-lg:block">
          <h2 className="col-span-5 font-sans text-h2 font-semibold text-balance">{page.offering.title}</h2>
          <p className="col-span-7 max-w-[62ch] text-lead leading-relaxed text-ink/75 max-lg:mt-6">
            {withLinks(page.offering.body)}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-6 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
          {page.services?.map((service, index) => {
            const Icon = serviceIcons[index] ?? ScanSearch;
            return (
              <article
                key={service.title}
                className={`surface-card rounded-card border border-line bg-surface p-8 max-sm:p-6 ${
                  index < 2 ? "lg:col-span-3" : "lg:col-span-2"
                } max-lg:last:col-span-2 max-md:last:col-span-1`}
              >
                <span className="grid size-12 place-items-center rounded-xl bg-tint-amber text-amber-deep">
                  <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-sans text-h4 font-semibold">{service.title}</h3>
                <p className="mt-3 text-body leading-relaxed text-ink/72">{withLinks(service.body)}</p>
              </article>
            );
          })}
        </div>
      </Reveal>
    </ServiceBand>
  );
}

function SeoLandingAffordable({ page }: { page: SeoLanding }) {
  if (!page.affordable) return null;
  const [lead, ...rest] = page.affordable.paragraphs;
  return (
    <ServiceBand label={page.affordable.eyebrow} tone="navy" accent="bg-amber" labelStyle="topline">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-14 gap-y-10 max-lg:block">
          <div className="col-span-7">
            <h2 className="max-w-[16ch] font-sans text-h2 font-semibold text-balance">{page.affordable.title}</h2>
            <p className="mt-8 max-w-[54ch] font-serif text-[clamp(19px,1.3vw,23px)] leading-[1.5] text-oninverse/90">
              {lead}
            </p>
            {rest.map((paragraph) => (
              <p key={paragraph} className="mt-5 max-w-[60ch] text-body leading-relaxed text-oninverse/70">
                {paragraph}
              </p>
            ))}
          </div>
          <dl className="col-span-5 grid content-end gap-5 max-lg:mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {page.affordable.stats.map(([value, label]) => (
              <div key={label} className="rounded-card border border-oninverse/15 bg-oninverse/[0.05] p-8">
                <dd className="font-sans text-[clamp(48px,36px+2vw,72px)] font-semibold leading-none text-amber">
                  {value}
                </dd>
                <dt className="mt-3 text-body text-oninverse/70">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </ServiceBand>
  );
}

// A real sequence, so the numbers carry meaning; the rule links the three steps.
function SeoLandingProcess({ page }: { page: SeoLanding }) {
  if (!page.process) return null;
  return (
    <ServiceBand label={page.process.eyebrow} tone="white" accent="bg-teal" labelStyle="topline">
      <Reveal>
        <h2 className="max-w-[20ch] font-sans text-h2 font-semibold text-balance">{page.process.title}</h2>
        <ol className="relative mt-14 grid grid-cols-3 gap-x-10 gap-y-12 max-lg:grid-cols-1">
          <span aria-hidden="true" className="absolute inset-x-0 top-6 h-0.5 bg-amber/35 max-lg:hidden" />
          {page.process.steps.map(([title, body], index) => (
            <li key={title} className="relative">
              <span className="grid size-12 place-items-center rounded-full bg-amber font-sans text-h4 font-semibold text-ink ring-8 ring-surface">
                {index + 1}
              </span>
              <h3 className="mt-7 font-sans text-h4 font-semibold">{title}</h3>
              <p className="mt-3 max-w-[40ch] text-body leading-relaxed text-ink/72">{body}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </ServiceBand>
  );
}

// Icons follow the order of `smallBusiness.audiences`.
const audienceIcons = [Store, ShoppingBag, BriefcaseBusiness];

// The copy names three kinds of client and ends on "an agency that picks up the
// phone", so the clients become a list and the closing line sits beside the number.
function NationalSmallBusiness({ page, event }: { page: SeoLanding; event: string }) {
  const s = page.smallBusiness;
  if (!s) return null;
  return (
    <ServiceBand label={s.eyebrow} tone="warm" accent="bg-amber" labelStyle="topline">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-14 gap-y-10 max-lg:block">
          <div className="col-span-6">
            <h2 className="max-w-[16ch] font-sans text-h2 font-semibold text-balance">{s.title}</h2>
            <p className="mt-8 max-w-[52ch] font-serif text-[clamp(19px,1.3vw,23px)] leading-[1.5] text-ink/85">
              {s.lead}
            </p>
          </div>
          <div className="col-span-6 max-lg:mt-10">
            <p className="text-[14px] font-semibold uppercase tracking-[0.15em] text-muted">{s.audiencesLabel}</p>
            <ul className="mt-5 grid gap-4">
              {s.audiences.map((audience, index) => {
                const Icon = audienceIcons[index] ?? Store;
                return (
                  <li key={audience} className="flex items-center gap-5 rounded-card border border-line bg-surface p-6 max-sm:p-5">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-tint-amber text-amber-deep">
                      <Icon className="size-6" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="font-sans text-h4 font-semibold leading-snug">{audience}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between gap-8 rounded-card bg-inverse px-10 py-8 text-oninverse max-md:flex-col max-md:items-start max-sm:px-6">
          <p className="max-w-[50ch] font-serif text-[clamp(19px,1.3vw,23px)] leading-[1.45] text-oninverse/90">
            {s.shared}
          </p>
          <Link
            href={company.phoneHref}
            data-event={`${event}_small_business_phone_click`}
            className="group flex shrink-0 items-center gap-4"
          >
            <span className="grid size-12 place-items-center rounded-full bg-amber text-ink">
              <Phone className="size-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[13px] font-semibold uppercase tracking-[0.15em] text-oninverse/60">
                Call the team
              </span>
              <span className="block font-sans text-h3 font-semibold group-hover:text-amber">{company.phoneDisplay}</span>
            </span>
          </Link>
        </div>
      </Reveal>
    </ServiceBand>
  );
}

const initials = (name: string) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

// All four reviews visible at once in a two-column wall; the first leads in ink.
function NationalTestimonials({ page }: { page: SeoLanding }) {
  const t = page.testimonials;
  return (
    <ServiceBand label={t.eyebrow} tone="mist" accent="bg-teal" labelStyle="topline">
      <Reveal>
        <div className="grid grid-cols-12 items-end gap-x-14 gap-y-6 max-lg:block">
          <h2 className="col-span-6 max-w-[18ch] font-sans text-h2 font-semibold text-balance">{t.title}</h2>
          <p className="col-span-6 max-w-[48ch] text-lead leading-relaxed text-ink/75 max-lg:mt-6">{t.body}</p>
        </div>
        <div className="mt-12 columns-2 gap-5 max-md:columns-1">
          {t.items.map((item, index) => {
            const featured = index === 0;
            return (
              <figure
                key={item.name}
                className={`mb-5 break-inside-avoid rounded-card p-8 max-sm:p-6 ${
                  featured ? "bg-inverse text-oninverse" : "border border-line bg-surface"
                }`}
              >
                <Quote className={`size-8 ${featured ? "text-amber" : "text-amber-deep"}`} aria-hidden="true" />
                <blockquote
                  className={`mt-5 leading-relaxed ${
                    featured
                      ? "font-serif text-[clamp(19px,1.3vw,22px)] text-oninverse/90"
                      : "text-body text-ink/80"
                  }`}
                >
                  {item.quote}
                </blockquote>
                <figcaption
                  className={`mt-7 flex items-center gap-3 border-t pt-5 ${featured ? "border-oninverse/15" : "border-line"}`}
                >
                  <span
                    aria-hidden="true"
                    className={`grid size-10 shrink-0 place-items-center rounded-full text-[14px] font-semibold ${
                      featured ? "bg-amber text-ink" : "bg-tint-amber text-amber-deep"
                    }`}
                  >
                    {initials(item.name)}
                  </span>
                  <span>
                    <span className="block font-sans font-semibold">{item.name}</span>
                    <span className={`block text-[14px] ${featured ? "text-oninverse/60" : "text-muted"}`}>
                      Google review
                    </span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </Reveal>
    </ServiceBand>
  );
}

function NationalFaq({ page, event }: { page: SeoLanding; event: string }) {
  if (!page.faq) return null;
  return (
    <ServiceBand label={page.faq.eyebrow} tone="white" accent="bg-amber" labelStyle="topline">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-14 gap-y-10 max-lg:block">
          <div className="col-span-5">
            <div className="lg:sticky lg:top-24">
              <h2 className="max-w-[16ch] font-sans text-h2 font-semibold text-balance">{page.faq.title}</h2>
              <div className="mt-10 rounded-card border border-line bg-warm p-8 max-lg:mb-10 max-sm:p-6">
                <p className="font-sans text-h4 font-semibold">Still have a question?</p>
                <p className="mt-2 text-body text-ink/70">Speak to the team directly.</p>
                <ul className="mt-6 grid gap-3 text-body">
                  <li>
                    <Link
                      href={company.phoneHref}
                      data-event={`${event}_faq_phone_click`}
                      className="inline-flex items-center gap-3 font-semibold hover:text-amber-deep"
                    >
                      <Phone className="size-4 text-amber-deep" aria-hidden="true" />
                      {company.phoneDisplay}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`mailto:${company.email}`}
                      data-event={`${event}_faq_email_click`}
                      className="inline-flex items-center gap-3 break-all font-semibold hover:text-amber-deep"
                    >
                      <Mail className="size-4 shrink-0 text-amber-deep" aria-hidden="true" />
                      {company.email}
                    </Link>
                  </li>
                </ul>
                <div className="mt-7">
                  <Button href="/contact" small arrow data-event={`${event}_faq_consultation_click`}>
                    {page.ctas.audit}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-7">
            <Accordion
              group={`${event}-faq`}
              items={page.faq.items.map((item) => ({ ...item, a: withLinks(item.a) }))}
            />
          </div>
        </div>
      </Reveal>
    </ServiceBand>
  );
}

// The free-audit offer as a receipt: the two published values, the struck-through
// total, then what it costs. Scalloped edges come from a CSS mask.
const perforation =
  "radial-gradient(circle 7px at 50% 0, #0000 98%, #000) top / 20px 51% repeat-x, radial-gradient(circle 7px at 50% 100%, #0000 98%, #000) bottom / 20px 51% repeat-x";

function AuditReceipt({ page, event }: { page: SeoLanding; event: string }) {
  return (
    <div className="rotate-[1.5deg] drop-shadow-[0_28px_40px_rgba(0,0,0,0.4)] max-lg:rotate-0">
      <div
        style={{ mask: perforation, WebkitMask: perforation }}
        className="bg-surface px-8 pb-10 pt-11 text-ink max-sm:px-6"
      >
        <div className="flex items-baseline justify-between border-b border-dashed border-line pb-5">
          <p className="font-sans text-h4 font-semibold">{page.checklist.audit}</p>
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">OMH</p>
        </div>
        <dl>
          {page.checklist.items.map((item) => (
            <div key={item.label} className="flex items-baseline justify-between gap-6 border-b border-dashed border-line py-4">
              <dt className="text-body text-ink/75">{item.label}</dt>
              <dd className="font-sans font-semibold tabular-nums">{item.value}</dd>
            </div>
          ))}
          <div className="flex items-baseline justify-between gap-6 py-4">
            <dt className="text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
              {page.checklist.totalLabel.replace(":", "")}
            </dt>
            <dd className="font-sans text-h4 font-semibold tabular-nums text-muted line-through">{page.checklist.total}</dd>
          </div>
        </dl>
        <div className="mt-2 flex items-center justify-between rounded-xl bg-tint-amber px-5 py-4">
          <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-amber-deep">Yours free</p>
          <p className="font-sans text-[44px] font-semibold leading-none tabular-nums">£0</p>
        </div>
        <Link
          href="/contact"
          data-event={`${event}_download_click`}
          className="mt-6 inline-flex text-body font-semibold underline underline-offset-4 hover:text-amber-deep"
        >
          {page.checklist.download}
        </Link>
      </div>
    </div>
  );
}

/* ─────────────────────── Local (/best-local-seo-services) ─────────────────────── */

function LocalHero({ page, event }: { page: SeoLanding; event: string }) {
  return (
    <section className="hero-grid border-b border-line bg-warm">
      <div className="container-omh section-md">
        <Reveal>
          <Eyebrow>{page.eyebrow}</Eyebrow>
          <div className="mt-9 grid grid-cols-12 items-start gap-x-12 gap-y-10 max-lg:block">
            <aside className="col-span-5 lg:order-1">
              <OfferCard page={page} event={event} />
              <MediaFrame
                kind="image"
                theme="seo"
                ratio="4/3"
                title="Your business on the local map pack"
                note="Replace with an approved Google Business Profile or map-pack screenshot."
                source="/images/Services/Images on the pages/Google Business Profile and local performance local SEO.png"
                alt="Illustrative Google Business Profile performance view showing calls, direction requests and website clicks for a dated period."
                className="mt-6"
              />
            </aside>
            <div className="col-span-7 lg:order-2 max-lg:mb-10">
              <HeroCopy page={page} event={event} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// A portrait photograph leads, claims run as a two-column strip beneath.
function LocalAbout({ page }: { page: SeoLanding }) {
  return (
    <ServiceBand label={page.about.eyebrow} tone="white" accent="bg-teal" labelStyle="centered">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-12 gap-y-10 max-lg:block">
          <MediaFrame
            kind="image"
            theme="seo"
            ratio="3/4"
            title="The local SEO team"
            note="Add a photograph of the consultants who run local accounts."
            source="/images/Services/local seo 1.jpg"
            alt="Consultants reviewing local search performance together at a desk."
            className="col-span-4"
          />
          <div className="col-span-8 max-lg:mt-10">
            <h2 className="max-w-[20ch] font-sans text-h2 font-semibold text-balance">{page.about.title}</h2>
            <p className="mt-6 max-w-[46ch] font-serif text-[clamp(19px,1.3vw,23px)] leading-[1.45] text-ink/85">
              {page.about.kicker}
            </p>
            <p className="mt-6 max-w-[62ch] text-body leading-relaxed text-ink/75">{page.about.body}</p>
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

// A single statement line — the shortest section on the page, so it reads as a
// breath between the two dense ones either side of it.
function LocalOffering({ page }: { page: SeoLanding }) {
  return (
    <ServiceBand label={page.offering.eyebrow} tone="warm" accent="bg-amber" labelStyle="centered">
      <Reveal>
        <div className="mx-auto max-w-[58ch] text-center">
          <h2 className="font-sans text-h2 font-semibold text-balance">{page.offering.title}</h2>
          <p className="mt-6 text-lead leading-relaxed text-ink/75">{withLinks(page.offering.body)}</p>
        </div>
      </Reveal>
    </ServiceBand>
  );
}

/* ──────────────────────────────── Shared ──────────────────────────────── */

// National: a wide performance strip. Local: three narrow views of local search.
function SeoLandingMedia({ variant }: { variant: SeoVariant }) {
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
            <MediaFrame kind="image" theme="seo" ratio="4/3" title="Business profile" note="Approved Google Business Profile view." source="/images/Services/Local SEO.png" alt="A local business owner reviewing their Google Business Profile listing." />
            <MediaFrame kind="screen" theme="seo" ratio="4/3" title="Local queries" note="Anonymised local search-term report." source="/images/Services/Images on the pages/Business details and directory review.png" alt="Illustrative directory and business-details audit showing name, address and phone consistency across listings." />
            <MediaFrame kind="image" theme="seo" ratio="4/3" title="Listing walkthrough" note="Short screen recording of a profile being optimised." source="/images/Services/Local SEO.png" alt="Local business profile review" />
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
            source="/images/Services/Images on the pages/Organic search performance view SEO.png"
            alt="Illustrative organic search performance report showing clicks, impressions, average position and top queries."
            className="col-span-7"
          />
        </div>
        <div className="mt-6 grid grid-cols-12 gap-6">
          <MediaFrame kind="image" theme="seo" ratio="5/4" title="Crawl and architecture map" note="Add a real sitemap or annotated page hierarchy." source="/images/Services/Images on the pages/Crawl and architecture map.png" alt="Illustrative site crawl and architecture map showing page hierarchy and internal linking depth." className="col-span-5 max-md:col-span-12" />
          <MediaFrame kind="image" theme="seo" ratio="16/8" title="SEO review walkthrough" note="Replace with a short audit-to-priority recording." className="col-span-7 max-md:col-span-12" source="/images/Services/SEO 1.jpg" alt="Search engine optimisation review" />
        </div>
      </Reveal>
    </ServiceBand>
  );
}

// The free-checklist offer is a priced bundle on the live local page, so it is set
// as a value ledger — line items, values, struck-through total. (The national page
// carries the same offer as the receipt in its closing section.)
function LocalChecklist({ page, event }: { page: SeoLanding; event: string }) {
  return (
    <ServiceBand label={page.checklist.eyebrow} id="checklist" tone="mist" accent="bg-amber" labelStyle="centered">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-12 gap-y-10 max-lg:block">
          <div className="col-span-5 lg:order-1">
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
                <dt className="text-[14px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {page.checklist.totalLabel}
                </dt>
                <dd className="shrink-0 font-sans text-h3 font-semibold tabular-nums text-ink line-through">
                  {page.checklist.total}
                </dd>
              </div>
            </dl>
          </div>
          <div className="col-span-7 lg:order-2 max-lg:mb-10">
            <h2 className="max-w-[18ch] font-sans text-h2 font-semibold text-balance">{page.checklist.title}</h2>
            <MediaFrame
              kind="image"
              theme="seo"
              ratio="16/10"
              title="Inside the checklist"
              note="Replace with a page from the downloadable checklist."
              source="/images/Services/SEO 4.jpg"
              alt="A hand-written SEO checklist covering titles, backlinks, images, on-page work and site structure."
              className="mt-8"
            />
            <div className="mt-9 flex flex-wrap items-center gap-3.5 max-sm:flex-col max-sm:items-stretch">
              <Button href="/contact" arrow data-event={`${event}_download_click`}>
                {page.checklist.download}
              </Button>
              <Button href="/contact" variant="secondary" data-event={`${event}_checklist_audit_click`}>
                {page.checklist.audit}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </ServiceBand>
  );
}

function LocalTestimonials({ page, event }: { page: SeoLanding; event: string }) {
  return (
    <ServiceTestimonials
      testimonials={page.testimonials.items}
      eyebrow={page.testimonials.eyebrow}
      title={page.testimonials.title}
      body={page.testimonials.body}
      label={page.testimonials.eyebrow}
      eventPrefix={event}
      tone="navy"
      accent="bg-[#9bc3f3]"
      labelStyle={labelStyle("local")}
    />
  );
}

function SeoLandingCta({ page, event, variant }: Props) {
  const national = variant === "national";
  return (
    <FinalCta
      // The hero's free-audit button scrolls here on the national page.
      id={national ? "checklist" : undefined}
      aside={national ? <AuditReceipt page={page} event={event} /> : undefined}
      title={page.cta.title}
      titleAccent={page.cta.accent}
      body={page.cta.body ?? `${page.cta.offerTitle}: ${page.cta.offerSave}`}
      primary={{ label: page.cta.submit, href: "/contact", event: `${event}_final_cta_click` }}
      secondary={
        page.cta.secondary
          ? { ...page.cta.secondary, event: `${event}_consultation_click` }
          : { label: "See the price list", href: "/pricing", event: `${event}_pricing_click` }
      }
      contactEvents={{ phone: `${event}_footer_phone_click`, email: `${event}_footer_email_click` }}
    />
  );
}

/* Band rhythm is deliberate — no two adjacent sections share a ground:
   national  warm → white → warm → mist → navy → white → warm → mist → white → ink
   local     warm → navy  → white → mist → warm  → navy → ink            */
export function SeoLandingPage({ page, event, variant }: Props) {
  return (
    <main>
      {variant === "local" ? (
        <>
          <LocalHero page={page} event={event} />
          <SeoLandingMedia variant={variant} />
          <LocalAbout page={page} />
          <LocalChecklist page={page} event={event} />
          <LocalOffering page={page} />
          <LocalTestimonials page={page} event={event} />
        </>
      ) : (
        <>
          <NationalHero page={page} event={event} />
          <NationalWhy page={page} />
          <NationalServices page={page} />
          <SeoLandingMedia variant={variant} />
          <SeoLandingAffordable page={page} />
          <SeoLandingProcess page={page} />
          <NationalSmallBusiness page={page} event={event} />
          <NationalTestimonials page={page} />
          <NationalFaq page={page} event={event} />
        </>
      )}
      <SeoLandingCta page={page} event={event} variant={variant} />
    </main>
  );
}
