import { Pointer } from "@/components/Pointer";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/ui/FinalCta";
import { MediaFrame } from "@/components/ServiceMedia";
import { SiteTestimonials } from "@/components/Testimonials";
import { ServiceFaqSection } from "@/components/services/ServiceFaqSection";
import { ServiceFitSection as SharedServiceFitSection } from "@/components/services/ServiceFitSection";
import { ServiceBand, type ServiceBandTone } from "@/components/services/ServiceBand";
import { ServiceProcessTimeline } from "@/components/services/ServiceProcessTimeline";
import {
  CheckIcon as Check,
  FeatureValue,
} from "@/components/services/ServicePrimitives";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Proof";
import { localSeo as content } from "@/lib/content/local-seo";

type Package = (typeof content.packages)[number];

function Band({ tone = "white", ...props }: Omit<Parameters<typeof ServiceBand>[0], "accent" | "tone"> & { tone?: ServiceBandTone }) {
  return <ServiceBand {...props} tone={tone} accent="bg-[#d96847]" />;
}

export function LocalSeoHero() {
  return (
    <section className="border-b border-line">
      <div className="container-omh pb-[clamp(56px,38px+2.9vw,88px)] pt-[clamp(48px,34px+2.3vw,80px)]">
        <div className="grid grid-cols-12 items-center gap-x-12 gap-y-12 max-lg:block">
          <Reveal className="col-span-7 max-lg:mb-12">
            <Eyebrow>{content.hero.eyebrow}</Eyebrow>
            <h1 className="mb-6 mt-7 max-w-[20ch] font-sans text-h1 font-semibold text-balance">Local SEO services that help <span className="text-amber-deep">nearby customers find your business</span></h1>
            <p className="mb-9 max-w-[60ch] text-lead leading-relaxed text-ink/75">{content.hero.body}</p>
            <div className="flex flex-wrap gap-3.5 max-sm:flex-col max-sm:items-stretch">
              <Button href={content.hero.primary.href} arrow data-event="local_seo_hero_cta_click">{content.hero.primary.label}</Button>
              <Button href={content.hero.secondary.href} variant="secondary" data-event="local_seo_support_click">{content.hero.secondary.label}</Button>
            </div>
            <dl className="mt-10 grid max-w-[690px] grid-cols-3 border-t border-line pt-7 max-sm:grid-cols-1 max-sm:gap-5">
              {[["Packages from", "£450"], ["Published term", "3 months"], ["Published range", "10–20 hours*"]].map(([label, value]) => <div key={label} className="border-l border-line pl-5 first:border-l-0 first:pl-0 max-sm:border-l-0 max-sm:pl-0"><dt className="text-[11.5px] font-semibold uppercase tracking-[0.13em] text-muted">{label}</dt><dd className="mt-1.5 font-sans text-h4 font-semibold">{value}</dd></div>)}
            </dl>
          </Reveal>
          <Reveal className="col-span-5">
            <Pointer><div className="pointer-parallax"><MediaFrame kind="screen" theme="seo" ratio="16/11" title="Local search visibility view" note="Replace with an approved local rank, Google Business Profile or location-performance screen with dates and metric definitions visible." source="/images/Services/SEO 3.jpg" alt="Someone running a Google search on a phone, the moment a nearby business needs to appear." /></div></Pointer>
            <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5 text-label"><div><dt className="text-muted">Published package range</dt><dd className="mt-1 font-semibold">£450–£700</dd></div><div><dt className="text-muted">Published contract term</dt><dd className="mt-1 font-semibold">3 months</dd></div></dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function LocalSeoMap() {
  return (
    <section className="overflow-hidden border-b border-[#cad9eb] bg-tint-blue text-ink">
      <div className="container-omh section-md">
        <Reveal>
          <div className="grid grid-cols-12 items-end gap-x-12 gap-y-9 max-lg:block">
            <div className="col-span-5 max-lg:mb-9"><p className="text-[14px] font-semibold uppercase tracking-[0.17em] text-amber-deep">Local search footprint</p><h2 className="mt-5 max-w-[15ch] font-sans text-h2 font-semibold">Your profile, website and business details should tell the same story.</h2><p className="mt-6 max-w-[48ch] text-body leading-relaxed text-ink/68">We review the surfaces customers use before calling, requesting directions or visiting your website.</p></div>
            <MediaFrame kind="screen" theme="seo" ratio="16/10" title="Google Business Profile and local performance" note="Use an approved profile or reporting screen showing the business, date range and meaningful actions." source="/images/Services/Images on the pages/Google Business Profile and local performance local SEO.png" alt="Illustrative Google Business Profile performance view showing calls, direction requests, website clicks and search queries for a dated period." className="col-span-7" />
          </div>
          <div className="mt-7 grid grid-cols-12 gap-5"><MediaFrame kind="image" theme="seo" ratio="5/4" title="Business details and directory review" note="Add an approved NAP and citation audit view." source="/images/Services/Images on the pages/Business details and directory review.png" alt="Illustrative business details and directory audit showing name, address and phone consistency across listings." className="col-span-5 max-md:col-span-12" /><MediaFrame kind="video" theme="seo" ratio="16/8" title="Local visibility review" note="Replace with a short profile, website and location-page walkthrough." className="col-span-7 max-md:col-span-12" /></div>
        </Reveal>
      </div>
    </section>
  );
}

export function LocalSeoSignals() {
  return (
    <Band label="Local visibility signals">
      <Reveal><div className="grid grid-cols-12 gap-x-10 gap-y-10 max-lg:block"><div className="col-span-4 max-lg:mb-10"><div className="lg:sticky lg:top-24"><p className="text-[14px] font-semibold uppercase tracking-[0.15em] text-amber-deep">Need help?</p><h2 className="mt-5 max-w-[15ch] font-sans text-h3 font-semibold">Fix the gaps that stop local customers finding and trusting you.</h2><p className="mt-5 max-w-[42ch] text-body leading-relaxed text-ink/70">The audit identifies whether the main issue sits in the profile, website, local business data, reviews or reporting.</p></div></div><div className="col-span-8 grid grid-cols-2 gap-x-8 max-md:grid-cols-1">{content.signals.map(([title, body], index) => <article key={title} className="group border-t border-line px-3 py-6 transition-colors hover:border-teal/50 hover:bg-surface"><div className="flex items-baseline gap-4"><span className="font-sans text-[14px] font-semibold tracking-[0.1em] text-muted group-hover:text-amber">{String(index + 1).padStart(2, "0")}</span><h3 className="font-sans text-h4 font-semibold">{title}</h3></div><p className="mt-2.5 pl-10 text-body leading-relaxed text-ink/75">{body}</p></article>)}</div></div></Reveal>
    </Band>
  );
}

export function LocalSeoFit() {
  return (
    <SharedServiceFitSection
      label="Who this is for"
      bandAccent="bg-[#d96847]"
      intro={
        <div className="flex items-end justify-between gap-10 max-lg:block">
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-[0.15em] text-amber-deep">A useful starting point</p>
            <h2 className="mt-5 max-w-[18ch] font-sans text-h2 font-semibold">Local SEO works best when the market and responsibilities are clear.</h2>
          </div>
          <p className="max-w-[48ch] text-body leading-relaxed text-ink/70 max-lg:mt-5">This service is designed for businesses serving real customers in defined locations. It is not a route to invented locations or guaranteed rankings.</p>
        </div>
      }
      good={content.fit.good}
      notFit={content.fit.notFit}
      notFitTitle="Not the right engagement"
      showNotFitIcon={false}
    />
  );
}

export function LocalSeoBenefits() {
  return (
    <Band label="Local SEO benefits">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-10 gap-y-8 max-lg:block"><div className="col-span-5 max-lg:mb-9"><p className="text-[14px] font-semibold uppercase tracking-[0.15em] text-amber-deep">What the work is there to improve</p><h2 className="mt-5 max-w-[15ch] font-sans text-h2 font-semibold">Make the business easier to find, check and contact locally.</h2><p className="mt-5 max-w-[46ch] text-body leading-relaxed text-ink/70">Traffic, leads, maps, reputation, geography and visibility are where local SEO pays off. Here is what each one means in practice.</p></div><div className="col-span-7 grid grid-cols-2 gap-x-8 max-md:grid-cols-1">{content.benefits.map(([title, body], index) => <article key={title} className="border-t border-line py-6"><span className="text-[11px] font-semibold text-amber-deep">0{index + 1}</span><h3 className="mt-3 font-sans text-h4 font-semibold">{title}</h3><p className="mt-2.5 text-body leading-relaxed text-ink/70">{body}</p></article>)}</div></div>
      </Reveal>
    </Band>
  );
}

export function LocalSeoWorkstreams() {
  return (
    <Band label="Local SEO coverage" tone="mist">
      <Reveal>
        <div className="flex items-end justify-between gap-10 max-lg:block"><h2 className="max-w-[18ch] font-sans text-h2 font-semibold">What local SEO work can include.</h2><p className="max-w-[50ch] text-body leading-relaxed text-ink/68 max-lg:mt-5">The selected package and written proposal should confirm which profile, website, directory, review and reporting tasks are included.</p></div>
        <div className="mt-12 grid grid-cols-4 gap-5 max-xl:grid-cols-2 max-md:grid-cols-1">{content.workstreams.map((stream, index) => <article key={stream.title} className="surface-card rounded-card border border-[#c4d4e5] bg-surface p-7"><span className="text-[11px] font-semibold tracking-[0.14em] text-amber-deep">0{index + 1}</span><p className="mt-4 text-[11.5px] font-semibold uppercase tracking-[0.15em] text-amber-deep">{stream.label}</p><h3 className="mt-3 font-sans text-h4 font-semibold">{stream.title}</h3><p className="mt-3 text-body leading-relaxed text-ink/68">{stream.body}</p><ul className="mt-5 border-t border-[#d5e0eb] pt-3">{stream.items.map((item) => <li key={item} className="flex gap-3 py-2 text-body leading-relaxed"><Check className="mt-0.5 size-4 shrink-0 text-[#ee8c67]" />{item}</li>)}</ul></article>)}</div>
      </Reveal>
    </Band>
  );
}

export function LocalSeoProcess() {
  return (
    <ServiceProcessTimeline
      label="How local SEO is delivered"
      bandAccent="bg-[#d96847]"
      intro={
        <>
          <h2 className="max-w-[14ch] font-sans text-h3 font-semibold">From local audit to monthly improvement.</h2>
          <p className="mt-5 max-w-[42ch] text-body leading-relaxed text-ink/70">We agree the locations, access and measurement first, then work through the profile, website and local business data in priority order.</p>
        </>
      }
      steps={content.process}
      action={{ label: "Request a local visibility review", event: "local_seo_review_click" }}
    />
  );
}

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <article className="flex min-h-full flex-col overflow-hidden rounded-card border border-line bg-surface"><div className="border-b border-line bg-soft/50 p-6"><p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-muted">{pkg.stage}</p><h3 className="mt-2 font-sans text-h3 font-semibold">{pkg.name}</h3><p className="mt-3 font-sans text-[34px] font-semibold leading-none tracking-[-0.02em]">{pkg.price}</p><p className="mt-4 text-body leading-relaxed text-ink/70">{pkg.bestFor}</p></div><dl className="grid grid-cols-3 border-b border-line p-6 text-label"><div><dt className="text-muted">Hours*</dt><dd className="mt-1 font-semibold">{pkg.features.hours}</dd></div><div><dt className="text-muted">Keywords</dt><dd className="mt-1 font-semibold">{pkg.features.keywords}</dd></div><div><dt className="text-muted">Term</dt><dd className="mt-1 font-semibold">{pkg.features.term} months</dd></div></dl><details className="group flex-1 border-b border-line px-6 py-4"><summary className="flex cursor-pointer list-none items-center justify-between font-semibold [&::-webkit-details-marker]:hidden">Full package details <span aria-hidden className="text-xl text-amber-deep transition-transform group-open:rotate-45">+</span></summary><div className="mt-4">{content.packageGroups.map((group) => <div key={group.label} className="border-t border-line py-4 first:border-t-0 first:pt-0"><p className="mb-2 text-[10.5px] font-semibold uppercase tracking-[0.13em] text-muted">{group.label}</p>{group.rows.map(([label, key]) => <div key={label} className="flex items-baseline justify-between gap-4 py-1.5 text-label"><dt className="text-muted">{label}</dt><dd className="text-right font-semibold"><FeatureValue value={pkg.features[key]} includedClassName="text-amber-deep" falseFallback="—" /></dd></div>)}</div>)}</div></details><div className="p-6"><Button href="/contact" small className="w-full justify-center" data-event="local_seo_package_select" data-package={pkg.name}>Discuss this package</Button></div></article>
  );
}

export function LocalSeoPricing() {
  return (
    <Band label="Packages" id="packages"><Reveal><div className="grid grid-cols-12 items-end gap-x-10 gap-y-6 max-lg:block"><div className="col-span-7"><h2 className="max-w-[18ch] font-sans text-h2 font-semibold">Compare the three published Local SEO packages.</h2><p className="mt-5 max-w-[62ch] text-body leading-relaxed text-ink/70">Open a card for its full list of inclusions.</p></div><p className="col-span-5 text-body leading-relaxed text-ink/65 max-lg:mt-5">The package name is not a recommendation. Confirm billing frequency, VAT, exact deliverables and agreement terms in the written proposal.</p></div><div className="mt-12 grid grid-cols-3 gap-5 max-lg:grid-cols-1">{content.packages.map((pkg) => <PackageCard key={pkg.name} pkg={pkg} />)}</div><ul className="mt-8 grid gap-2 border-l-2 border-amber pl-5 text-body leading-relaxed text-muted">{content.notes.map((note) => <li key={note}>{note}</li>)}</ul></Reveal></Band>
  );
}

export function LocalSeoReviews() {
  return (
    <SiteTestimonials
      title="What customers said about working with OMH."
      body="These eight reviews are reproduced from the original Local SEO page. They are customer comments, not evidence of a guaranteed ranking or commercial result."
      eyebrow="Published packages"
      eventPrefix="local_seo"
      tone="navy"
    />
  );
}

export function LocalSeoWhyOmh() {
  return (
    <Band label="Why work with OMH">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-10 gap-y-9 max-lg:block"><div className="col-span-4 max-lg:mb-9"><p className="text-[14px] font-semibold uppercase tracking-[0.15em] text-amber-deep">Practical service details</p><h2 className="mt-5 max-w-[14ch] font-sans text-h2 font-semibold">Know who is responsible and what is included.</h2><p className="mt-5 max-w-[42ch] text-body leading-relaxed text-ink/70">The strongest reasons to choose an agency are clear access, communication, scope and reporting—not vague claims about being different.</p></div><div className="col-span-8 grid grid-cols-2 border-l border-t border-line max-md:grid-cols-1">{content.differentiators.map(([title, body], index) => <article key={title} className="border-b border-r border-line p-7"><span className="text-[11px] font-semibold text-amber">0{index + 1}</span><h3 className="mt-4 font-sans text-h4 font-semibold">{title}</h3><p className="mt-3 text-body leading-relaxed text-ink/70">{body}</p></article>)}</div></div>
      </Reveal>
    </Band>
  );
}

export function LocalSeoPromise() {
  return (
    <Band label="What we can promise" tone="mist">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-12 gap-y-8 max-lg:block"><div className="col-span-5 max-lg:mb-8"><p className="text-[14px] font-semibold uppercase tracking-[0.15em] text-amber-deep">An honest replacement for the guarantee</p><h2 className="mt-5 max-w-[15ch] font-sans text-h2 font-semibold">Clear work and communication—not a guaranteed Google position.</h2></div><div className="col-span-7"><p className="text-lead leading-relaxed text-ink/72">Rankings cannot be guaranteed, so no money-back claim is included here. Any future guarantee would need clear, verified terms before publication.</p><ul className="mt-7 grid grid-cols-2 gap-x-8 border-t border-[#c7d7e7] pt-5 max-sm:grid-cols-1">{["The agreed audit and package tasks", "A named contact and scheduled communication", "Reporting against the agreed measures", "Clear notice when scope or access blocks work"].map((item) => <li key={item} className="flex gap-3 border-b border-[#c7d7e7] py-3 text-body"><Check className="mt-0.5 size-4 shrink-0 text-amber-deep" />{item}</li>)}</ul></div></div>
      </Reveal>
    </Band>
  );
}

export function LocalSeoFAQ() {
  return (
    <ServiceFaqSection
      label="Local SEO FAQ"
      title="Questions before starting a local-search programme."
      description="Confirm locations, profile ownership, website access, exact deliverables, review responsibilities, reporting definitions and agreement terms before signing."
      items={content.faqs.map(([q, a]) => ({ q, a }))}
      group="local-seo-faq"
      phoneEvent="local_seo_phone_click"
      headingSize="lg"
      headingMaxWidthClassName="max-w-[13ch]"
      bandAccent="bg-[#d96847]"
    />
  );
}

export function LocalSeoFinalCTA() {
  return (
    <FinalCta
      title="Check where your local visibility needs work."
      titleAccent="local visibility needs work."
      body="Tell us the services and locations that matter, share your website and business profile, and explain which calls, visits or enquiries you want to improve."
      primary={{ label: "Check My Local Visibility", event: "local_seo_final_cta_click" }}
      secondary={{
        label: "Send a Local SEO Brief",
        href: "/seo-request-quote",
        event: "local_seo_brief_start",
      }}
      contactEvents={{ phone: "local_seo_phone_click", email: "local_seo_email_click" }}
    />
  );
}
