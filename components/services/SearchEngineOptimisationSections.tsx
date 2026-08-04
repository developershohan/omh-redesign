import Link from "next/link";
import { Pointer } from "@/components/Pointer";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/ui/FinalCta";
import { MediaFrame } from "@/components/ServiceMedia";
import { ServiceFaqSection } from "@/components/services/ServiceFaqSection";
import { ServiceBand, type ServiceBandTone } from "@/components/services/ServiceBand";
import {
  CheckIcon as Check,
  FeatureValue,
} from "@/components/services/ServicePrimitives";
import { Button, TextLink, ArrowRight } from "@/components/ui/Button";
import { Eyebrow, VerifiedSlot } from "@/components/ui/Proof";
import { searchEngineOptimisation as content } from "@/lib/content/search-engine-optimisation";

type Package = (typeof content.packages)[number];

function Band({ tone = "white", ...props }: Omit<Parameters<typeof ServiceBand>[0], "accent" | "tone"> & { tone?: ServiceBandTone }) {
  return <ServiceBand {...props} tone={tone} accent="bg-[#ee8c67]" />;
}

export function SeoHero() {
  return (
    <section className="border-b border-line">
      <div className="container-omh pb-[clamp(56px,38px+2.9vw,88px)] pt-[clamp(48px,34px+2.3vw,80px)]">
        <div className="grid grid-cols-12 items-center gap-x-12 gap-y-12 max-lg:block">
          <Reveal className="col-span-7 max-lg:mb-12">
            <Eyebrow>{content.hero.eyebrow}</Eyebrow>
            <h1 className="mb-6 mt-7 max-w-[20ch] font-sans text-h1 font-semibold text-balance">
              SEO that connects <span className="text-amber-deep">search intent to the right page</span>
            </h1>
            <p className="mb-9 max-w-[59ch] text-lead leading-relaxed text-ink/75">{content.hero.body}</p>
            <div className="flex flex-wrap gap-3.5 max-sm:flex-col max-sm:items-stretch">
              <Button href={content.hero.primary.href} arrow data-event="seo_hero_cta_click">{content.hero.primary.label}</Button>
              <Button href={content.hero.secondary.href} variant="secondary" data-event="seo_packages_click">{content.hero.secondary.label}</Button>
            </div>
            <dl className="mt-10 grid max-w-[690px] grid-cols-3 border-t border-line pt-7 max-sm:grid-cols-1 max-sm:gap-5">
              {[["Packages from", "£850"], ["Published terms", "6–9 months"], ["Published set-up time", "14 days"]].map(([label, value]) => (
                <div key={label} className="border-l border-line pl-5 first:border-l-0 first:pl-0 max-sm:border-l-0 max-sm:pl-0"><dt className="text-[11.5px] font-semibold uppercase tracking-[0.13em] text-muted">{label}</dt><dd className="mt-1.5 font-sans text-h4 font-semibold">{value}</dd></div>
              ))}
            </dl>
          </Reveal>
          <Reveal className="col-span-5">
            <Pointer><div className="pointer-parallax"><MediaFrame kind="screen" theme="seo" ratio="16/11" title="Organic search opportunity view" note="Replace with an approved search-performance view showing queries, pages, dates and meaningful actions." /></div></Pointer>
            <div className="mt-6 flex flex-wrap gap-2.5 border-t border-line pt-5"><VerifiedSlot>SEO case study — pending</VerifiedSlot><VerifiedSlot>Current credentials — pending</VerifiedSlot></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function SeoSignalSection() {
  return (
    <Band label="Search signals">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-12 gap-y-9 max-lg:block">
          <div className="col-span-4 max-lg:mb-9">
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-amber-deep">Where SEO loses clarity</p>
            <h2 className="mt-5 max-w-[14ch] font-sans text-h2 font-semibold">Recognise the problem before choosing the task.</h2>
            <p className="mt-5 max-w-[42ch] text-body leading-relaxed text-ink/70">Most SEO pages list services. This one starts with the symptoms those services are meant to resolve.</p>
          </div>
          <div className="col-span-8 grid grid-cols-2 gap-5 max-md:grid-cols-1">
            {content.signals.map(([title, body], index) => (
              <article key={title} className={`${index % 3 === 1 ? "md:translate-y-5" : ""} surface-card rounded-card border border-line bg-tint-blue p-7`}>
                <span className="font-sans text-[11px] font-semibold tracking-[0.14em] text-amber-deep">0{index + 1}</span>
                <h3 className="mt-4 font-sans text-h4 font-semibold">{title}</h3>
                <p className="mt-3 text-body leading-relaxed text-ink/70">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </Band>
  );
}

export function SeoPillarAtlas() {
  return (
    <Band label="SEO coverage" tone="mist">
      <Reveal>
        <div className="flex items-end justify-between gap-10 max-lg:block">
          <h2 className="max-w-[18ch] font-sans text-h2 font-semibold">Four connected workstreams, not nine disconnected services.</h2>
          <p className="max-w-[50ch] text-body leading-relaxed text-ink/68 max-lg:mt-5">Audit, keyword research, on-page work, technical SEO, indexing, authority, branding, tracking and reporting — the whole scope, in one place.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {content.pillars.map((pillar, index) => (
            <article key={pillar.title} className={`${index === 0 || index === 3 ? "bg-[#0e2035] text-oninverse" : "bg-surface text-ink"} rounded-card border border-[#b9cee5] p-8 max-sm:p-6`}>
              <div className="flex items-start justify-between gap-5"><p className={`text-[11.5px] font-semibold uppercase tracking-[0.15em] ${index === 0 || index === 3 ? "text-[#9bc3f3]" : "text-amber-deep"}`}>{pillar.label}</p><span className={`text-[12px] font-semibold ${index === 0 || index === 3 ? "text-oninverse/30" : "text-ink/25"}`}>0{index + 1}</span></div>
              <h3 className="mt-5 font-sans text-h3 font-semibold">{pillar.title}</h3>
              <p className={`mt-4 text-body leading-relaxed ${index === 0 || index === 3 ? "text-oninverse/68" : "text-ink/68"}`}>{pillar.body}</p>
              <ul className={`mt-6 border-t pt-5 ${index === 0 || index === 3 ? "border-oninverse/12" : "border-[#cad9eb]"}`}>
                {pillar.items.map((item) => <li key={item} className="flex gap-3 py-1.5 text-body"><Check className="mt-0.5 size-4 shrink-0 text-[#ee8c67]" />{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>
    </Band>
  );
}

export function SeoInternalLinkingMap() {
  const routes = [
    { title: "WordPress development", href: "/wordpress-development", body: "Build the page structure and templates an SEO plan needs." },
    { title: "Website maintenance", href: "/wordpress-website-maintenance", body: "Keep technical fixes, updates and monitoring moving." },
    { title: "Shopify development", href: "/shopify-development", body: "Improve ecommerce architecture, collections and product journeys." },
    { title: "Google Ads management", href: "/google-adwords-ppc", body: "Support demand while organic visibility develops." },
  ];
  return (
    <Band label="Internal linking" tone="navy">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-12 gap-y-10 max-lg:block">
          <div className="col-span-5 max-lg:mb-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#9bc3f3]">Content architecture</p>
            <h2 className="mt-5 max-w-[15ch] font-sans text-h2 font-semibold">Help people and search engines follow the relationship between pages.</h2>
            <p className="mt-5 max-w-[48ch] text-body leading-relaxed text-oninverse/66">Internal links should be contextual and useful: a clear route from a service hub to supporting services, explanations and evidence. This page now demonstrates that structure instead of leaving related pages isolated.</p>
          </div>
          <div className="col-span-7">
            <div className="rounded-card border border-[#76a9e8]/30 bg-[#081626] p-5">
              <div className="rounded-xl border border-[#76a9e8]/40 bg-[#132d49] p-5 text-center"><span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9bc3f3]">Current hub</span><p className="mt-2 font-sans text-h4 font-semibold">Search Engine Optimisation</p></div>
              <div aria-hidden className="mx-auto h-8 w-px bg-[#76a9e8]/35" />
              <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                {routes.map((route) => (
                  <Link key={route.href} href={route.href} className="group rounded-xl border border-oninverse/12 bg-oninverse/[0.035] p-5 transition-colors hover:border-[#ee8c67]/65 hover:bg-oninverse/[0.06]" data-event="seo_contextual_link_click" data-service={route.title}>
                    <span className="flex items-center justify-between gap-3 font-sans font-semibold">{route.title}<ArrowRight className="size-4 text-[#ee8c67] transition-transform group-hover:translate-x-1" /></span>
                    <span className="mt-2 block text-body leading-relaxed text-oninverse/58">{route.body}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Band>
  );
}

export function SeoProcess() {
  return (
    <Band label="How SEO is delivered">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-10 gap-y-8 max-lg:block">
          <div className="col-span-4 max-lg:mb-9"><h2 className="max-w-[14ch] font-sans text-h2 font-semibold">A five-stage operating cycle with a visible next action.</h2><p className="mt-5 max-w-[42ch] text-body leading-relaxed text-ink/70">This condenses the original analytics, audit, strategy, optimisation and competitor-analysis chapters.</p><div className="mt-7"><TextLink href="/contact" data-event="seo_audit_click">Request an SEO review</TextLink></div></div>
          <ol className="col-span-8 grid grid-cols-5 border-l border-t border-line max-md:grid-cols-1">
            {content.process.map(([title, body], index) => (
              <li key={title} className="border-b border-r border-line p-5 max-md:p-6"><span className="text-[11px] font-semibold text-amber-deep">0{index + 1}</span><h3 className="mt-4 font-sans text-body font-semibold leading-tight">{title}</h3><p className="mt-3 text-body leading-relaxed text-ink/68">{body}</p></li>
            ))}
          </ol>
        </div>
      </Reveal>
    </Band>
  );
}

function PackageRow({ pkg, index }: { pkg: Package; index: number }) {
  return (
    <details className="group border-t border-[#b7cbe0] first:border-t-0">
      <summary className="grid cursor-pointer list-none grid-cols-[1.35fr_.65fr_.65fr_.65fr_auto] items-center gap-6 py-7 [&::-webkit-details-marker]:hidden max-lg:grid-cols-2 max-sm:grid-cols-1">
        <div><p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-deep">0{index + 1} · {pkg.stage}</p><h3 className="mt-2 font-sans text-h3 font-semibold">{pkg.name}</h3><p className="mt-2 max-w-[48ch] text-body leading-relaxed text-ink/65">{pkg.bestFor}</p></div>
        <div><span className="block text-[11px] uppercase tracking-[0.12em] text-muted">Price</span><strong className="mt-1 block font-sans text-h4">{pkg.price}</strong></div>
        <div><span className="block text-[11px] uppercase tracking-[0.12em] text-muted">Hours*</span><strong className="mt-1 block font-sans text-h4">{pkg.features.includedHours}</strong></div>
        <div><span className="block text-[11px] uppercase tracking-[0.12em] text-muted">Term</span><strong className="mt-1 block font-sans text-h4">{pkg.features.contractLength} months</strong></div>
        <span className="flex size-10 items-center justify-center rounded-full border border-[#88acd1] text-2xl text-amber-deep transition-transform group-open:rotate-45" aria-hidden>+</span>
      </summary>
      <div className="mb-7 rounded-card border border-[#c4d4e5] bg-surface p-6">
        <div className="grid grid-cols-2 gap-x-12 max-md:grid-cols-1">
          {content.packageGroups.map((group) => (
            <dl key={group.label}><p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{group.label}</p>{group.rows.map(([label, key]) => <div key={label} className="flex items-baseline justify-between gap-5 border-t border-line py-2.5 text-label"><dt className="text-muted">{label}</dt><dd className="font-semibold"><FeatureValue value={pkg.features[key]} includedClassName="text-amber-deep" excludedClassName="text-muted/50" /></dd></div>)}</dl>
          ))}
        </div>
        <div className="mt-6"><Button href="/contact" small data-event="seo_package_select" data-package={pkg.name}>Discuss this package</Button></div>
      </div>
    </details>
  );
}

export function SeoPricing() {
  return (
    <Band label="Published packages" id="packages" tone="mist">
      <Reveal>
        <div className="grid grid-cols-12 items-end gap-x-10 gap-y-6 max-lg:block"><div className="col-span-7"><h2 className="max-w-[18ch] font-sans text-h2 font-semibold">A quieter package comparison that expands when needed.</h2></div><p className="col-span-5 text-body leading-relaxed text-ink/68 max-lg:mt-5">All four prices, hours, terms and original inclusions are preserved. Open a tier to inspect the complete scope.</p></div>
        <div className="mt-11 border-y border-[#b7cbe0]">{content.packages.map((pkg, index) => <PackageRow key={pkg.name} pkg={pkg} index={index} />)}</div>
        <ul className="mt-8 grid gap-2 border-l-2 border-[#ee8c67] pl-5 text-body leading-relaxed text-muted">{content.pricingNotes.map((note) => <li key={note}>{note}</li>)}</ul>
      </Reveal>
    </Band>
  );
}

export function SeoEvidence() {
  return (
    <Band label="Evidence" tone="navy">
      <Reveal>
        <div className="grid grid-cols-12 items-center gap-x-12 gap-y-10 max-lg:block">
          <div className="col-span-5 max-lg:mb-9"><p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#9bc3f3]">Proof before promises</p><h2 className="mt-5 max-w-[15ch] font-sans text-h2 font-semibold">Show the starting point, work and verified organic outcome.</h2><p className="mt-5 text-body leading-relaxed text-oninverse/66">Every SEO case study we publish identifies the period, market, pages changed and how the result was measured.</p><ul className="mt-7 grid gap-3 border-t border-oninverse/12 pt-5 text-body text-oninverse/72">{["Search and website baseline", "Technical and content work completed", "Comparable measurement period", "Verified visibility and commercial context"].map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-[#ee8c67]" />{item}</li>)}</ul></div>
          <div className="col-span-7"><MediaFrame kind="video" theme="seo" ratio="16/10" title="Verified SEO case-study walkthrough" note="Replace with approved evidence and an explanation of what the metrics do and do not prove." /><div className="mt-5 flex flex-wrap gap-2"><VerifiedSlot>Client approval — pending</VerifiedSlot><VerifiedSlot>Result method — pending</VerifiedSlot></div></div>
        </div>
      </Reveal>
    </Band>
  );
}

export function SeoFAQ() {
  return (
    <ServiceFaqSection
      label="SEO FAQ"
      title="Questions before starting an SEO programme."
      description="Ask for clear deliverables, access, ownership, reporting definitions, agreement terms and limits on claims before signing."
      items={content.faqs.map(([q, a]) => ({ q, a }))}
      group="seo-faq"
      phoneEvent="seo_phone_click"
      headingSize="lg"
      headingMaxWidthClassName="max-w-[13ch]"
      bandAccent="bg-[#ee8c67]"
    />
  );
}

export function SeoFinalCTA() {
  return (
    <FinalCta
      title="Ready to turn search visibility into a clearer plan?"
      titleAccent="into a clearer plan?"
      body="Tell us which pages matter, what organic search currently contributes and where progress has stalled. We will review the starting point and recommend the next practical step."
      primary={{ label: "Discuss SEO Services", event: "seo_final_cta_click" }}
      secondary={{ label: "Send an SEO Brief", event: "seo_brief_start" }}
      contactEvents={{ phone: "seo_phone_click", email: "seo_email_click" }}
    />
  );
}
