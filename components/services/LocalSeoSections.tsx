import { Fragment } from "react";
import { Pointer } from "@/components/Pointer";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/ui/FinalCta";
import { MediaFrame } from "@/components/ServiceMedia";
import { SiteTestimonials } from "@/components/Testimonials";
import { ServiceFaqSection } from "@/components/services/ServiceFaqSection";
import { ServiceFitSection as SharedServiceFitSection } from "@/components/services/ServiceFitSection";
import { ServiceBand, type ServiceBandTone } from "@/components/services/ServiceBand";
import { ServiceProcessTimeline } from "@/components/services/ServiceProcessTimeline";
import { ServiceReasonGrid } from "@/components/services/ServiceReasonGrid";
import {
  CheckIcon as Check,
  FeatureValue,
} from "@/components/services/ServicePrimitives";
import { Button } from "@/components/ui/Button";
import { Eyebrow, ReviewProof } from "@/components/ui/Proof";
import { localSeo as content } from "@/lib/content/local-seo";

type Package = (typeof content.packages)[number];

function Band({ tone = "white", ...props }: Omit<Parameters<typeof ServiceBand>[0], "accent" | "tone"> & { tone?: ServiceBandTone }) {
  return <ServiceBand {...props} tone={tone} accent="bg-[#d96847]" />;
}

export function LocalSeoHero() {
  return (
    <section className="hero-grid overflow-x-clip border-b border-line bg-warm">
      <div className="container-omh pb-[clamp(56px,38px+2.9vw,88px)] pt-[clamp(48px,34px+2.3vw,80px)]">
        <div className="grid grid-cols-12 items-center gap-x-12 gap-y-12 max-lg:block">
          <Reveal className="col-span-7 max-lg:mb-12">
            <Eyebrow>{content.hero.eyebrow}</Eyebrow>
            <h1 className="mb-6 mt-7 font-sans text-display font-semibold text-balance">Local SEO services that help <span className="text-amber-deep">nearby customers find your business</span></h1>
            <p className="mb-9 text-body leading-relaxed text-ink/75">{content.hero.body}</p>
            <div className="flex flex-wrap gap-3.5 max-sm:flex-col max-sm:items-stretch">
              <Button href={content.hero.primary.href} arrow data-event="local_seo_hero_cta_click">{content.hero.primary.label}</Button>
              <Button href={content.hero.secondary.href} variant="secondary" data-event="local_seo_support_click">{content.hero.secondary.label}</Button>
            </div>
            <dl className="mt-10 grid max-w-[690px] grid-cols-3 border-t border-line pt-7 max-sm:grid-cols-1 max-sm:gap-5">
              {[["Packages from", "£450"], ["Published term", "3 months"], ["Published range", "10 to 20 hours*"]].map(([label, value]) => <div key={label} className="border-l border-line pl-5 first:border-l-0 first:pl-0 max-sm:border-l-0 max-sm:pl-0"><dt className="text-[14px] font-semibold uppercase tracking-[0.13em] text-muted">{label}</dt><dd className="mt-1.5 font-sans text-h4 font-semibold">{value}</dd></div>)}
            </dl>
          </Reveal>
          <Reveal className="col-span-5">
            <Pointer><div className="pointer-parallax"><MediaFrame kind="screen" theme="seo" ratio="16/11" title="Local search visibility view" note="Replace with an approved local rank, Google Business Profile or location-performance screen with dates and metric definitions visible." source="/images/Services/SEO 3.jpg" alt="Someone running a Google search on a phone, the moment a nearby business needs to appear." /></div></Pointer>
            <ReviewProof serviceId="seo" heading="Local SEO work backed by verified client trust" className="mt-6" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function LocalSeoMap() {
  return (
    <Band label="Local search footprint" tone="mist">
        <Reveal>
          <div className="grid grid-cols-12 items-end gap-x-12 gap-y-9 max-lg:block">
            <div className="col-span-5 max-lg:mb-9"><h2 className="font-sans text-h2 font-semibold">Your profile, website and business details should tell the same story.</h2><p className="mt-6 text-body leading-relaxed text-ink/68">We review the surfaces customers use before calling, requesting directions or visiting your website.</p></div>
            <MediaFrame kind="screen" theme="seo" ratio="16/9" title="Google Business Profile and local performance" note="Use an approved profile or reporting screen showing the business, date range and meaningful actions." source="/images/Services/Images on the pages/Google Business Profile and local performance local SEO.png" alt="Illustrative Google Business Profile performance view showing calls, direction requests, website clicks and search queries for a dated period." className="col-span-7" />
          </div>
          <div className="mt-7 grid grid-cols-12 gap-5"><MediaFrame kind="image" theme="seo" ratio="5/4" title="Business details and directory review" note="Add an approved NAP and citation audit view." source="/images/Services/Images on the pages/Business details and directory review.png" alt="Illustrative business details and directory audit showing name, address and phone consistency across listings." className="col-span-5 max-md:col-span-12" /><MediaFrame kind="image" theme="seo" ratio="16/9" title="Local visibility review" note="Replace with a short profile, website and location-page walkthrough." className="col-span-7 max-md:col-span-12" source="/images/Services/local seo 2.jpg" alt="Local search optimisation" /></div>
        </Reveal>
    </Band>
  );
}

export function LocalSeoSignals() {
  return (
    <Band label="Local visibility signals">
      <Reveal><div className="grid grid-cols-12 gap-x-10 gap-y-10 max-lg:block"><div className="col-span-4 max-lg:mb-10"><div className="lg:sticky lg:top-24"><p className="text-[14px] font-semibold uppercase tracking-[0.15em] text-amber-deep">Need help?</p><h2 className="mt-5 font-sans text-h3 font-semibold">Fix the local SEO gaps that stop nearby customers finding and trusting you.</h2><p className="mt-5 text-body leading-relaxed text-ink/70">A local SEO audit identifies whether the main issue sits in the profile, website, business data, reviews or reporting.</p></div></div><div className="col-span-8 grid grid-cols-2 gap-x-8 max-md:grid-cols-1">{content.signals.map(([title, body], index) => <article key={title} className="group border-t border-line px-3 py-6 transition-colors hover:border-teal/50 hover:bg-surface"><div className="flex items-baseline gap-4"><span className="font-sans text-body font-semibold tracking-[0.1em] text-muted group-hover:text-amber">{String(index + 1).padStart(2, "0")}</span><h3 className="font-sans text-h4 font-semibold">{title}</h3></div><p className="mt-2.5 pl-10 text-body leading-relaxed text-ink/75">{body}</p></article>)}</div></div></Reveal>
    </Band>
  );
}

export function LocalSeoFit() {
  return (
    <SharedServiceFitSection
      label="Who this is for"
      bandAccent="bg-[#d96847]"
      intro={
        <div>
          <p className="text-[14px] font-semibold uppercase tracking-[0.15em] text-amber-deep">A useful starting point</p>
          <h2 className="mt-5 font-sans text-h2 font-semibold">Local SEO services work best when the market and responsibilities are clear.</h2>
          <p className="mt-5 text-body leading-relaxed text-ink/70">Local SEO services are designed for small businesses serving real customers in defined locations. This is not a route to invented locations or guaranteed rankings.</p>
        </div>
      }
      good={content.fit.good}
      notFit={content.fit.notFit}
      notFitTitle="Not the right engagement"
      tone="warm"
    />
  );
}

export function LocalSeoBenefits() {
  return (
    <ServiceReasonGrid
      label="Local SEO benefits"
      bandAccent="bg-[#d96847]"
      title="How local SEO services make your business easier to find, check and contact."
      titleAccent="easier to find, check and contact."
      body="Traffic, leads, maps, reputation, geography and visibility are where local SEO marketing services pay off for small businesses. Here is what each one means in practice."
      reasons={content.benefits}
    />
  );
}

export function LocalSeoWorkstreams() {
  return (
    <Band label="Local SEO coverage">
      <Reveal>
        <div><h2 className="font-sans text-h2 font-semibold">What local SEO services can include.</h2><p className="mt-5 text-body leading-relaxed text-ink/68">Your local SEO package and written proposal confirm which profile, website, directory, review and reporting tasks are included.</p></div>
        <div className="mt-12 grid grid-cols-4 gap-5 max-xl:grid-cols-2 max-md:grid-cols-1">{content.workstreams.map((stream, index) => <article key={stream.title} className="surface-card rounded-card border border-[#c4d4e5] bg-surface p-7"><span className="text-body font-semibold tracking-[0.14em] text-amber-deep">0{index + 1}</span><p className="mt-4 text-[14px] font-semibold uppercase tracking-[0.15em] text-amber-deep">{stream.label}</p><h3 className="mt-3 font-sans text-h4 font-semibold">{stream.title}</h3><p className="mt-3 text-body leading-relaxed text-ink/68">{stream.body}</p><ul className="mt-5 border-t border-[#d5e0eb] pt-3">{stream.items.map((item) => <li key={item} className="flex gap-3 py-2 text-body leading-relaxed"><Check className="mt-0.5 size-4 shrink-0 text-[#ee8c67]" />{item}</li>)}</ul></article>)}</div>
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
          <h2 className="font-sans text-h3 font-semibold">From local SEO audit to monthly improvement.</h2>
          <p className="mt-5 text-body leading-relaxed text-ink/70">We agree the locations, access and measurement first, then work through the profile, website and local business data in priority order. Each step is documented so you can see what your local SEO consultant has done and what comes next.</p>
        </>
      }
      steps={content.process}
      action={{ label: "Request a local visibility review", event: "local_seo_review_click" }}
    />
  );
}

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <article className="overflow-hidden rounded-card border border-line bg-surface">
      <div className="border-b border-line bg-soft/50 p-6"><p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-muted">{pkg.stage}</p><h3 className="mt-2 font-sans text-h3 font-semibold">{pkg.name}</h3><p className="mt-3 font-sans text-[34px] font-semibold leading-none tracking-[-0.02em]">{pkg.price}</p><p className="mt-4 text-bsm leading-relaxed text-ink/70">{pkg.bestFor}</p></div>
      <dl className="p-6 text-bsm">{content.packageGroups.map((group) => <div key={group.label} className="border-b border-line py-4 first:pt-0 last:border-b-0"><p className="mb-1 text-[14px] font-semibold uppercase tracking-[0.14em] text-muted/80">{group.label}</p>{group.rows.map(([label, key]) => <div key={label} className="flex items-baseline justify-between gap-6 py-2"><dt className="text-muted">{label}</dt><dd className="text-right font-semibold text-ink"><FeatureValue value={pkg.features[key]} /></dd></div>)}</div>)}</dl>
      <div className="px-6 pb-6"><Button href="/contact" small className="min-h-11 w-full justify-center" data-event="local_seo_package_select" data-package={pkg.name}>Discuss this package</Button></div>
    </article>
  );
}

export function LocalSeoPricing() {
  return (
    <Band label="Packages" id="packages" tone="warm">
      <Reveal>
        <div><h2 className="font-sans text-h2 font-semibold">Compare the three published local SEO packages.</h2><p className="mt-5 text-body leading-relaxed text-ink/70">Three packages across sixteen comparison points, from included hours to keywords tracked.</p><p className="mt-5 text-body leading-relaxed text-ink/65">The package name is not a recommendation. Your local SEO specialist will confirm billing frequency, VAT, exact deliverables and agreement terms in the written proposal before work begins.</p></div>
        <div className="mt-12 hidden overflow-x-auto rounded-card border border-line bg-surface xl:block">
          <table className="w-full border-collapse text-left text-bsm">
            <caption className="sr-only">Local SEO package comparison by inclusion and price</caption>
            <thead>
              <tr>
                <th scope="col" className="w-[280px] p-6 align-bottom"><span className="text-[14px] font-semibold uppercase tracking-[0.14em] text-muted">Compare packages</span></th>
                {content.packages.map((pkg) => <th key={pkg.name} scope="col" className="border-l border-line bg-soft/40 p-5 align-bottom"><span className="block text-[14px] font-semibold uppercase tracking-[0.14em] text-muted">{pkg.stage}</span><span className="mt-2 block font-sans text-h4 font-semibold">{pkg.name}</span><span className="mt-4 block font-sans text-[32px] font-semibold leading-none tracking-[-0.02em]">{pkg.price}</span></th>)}
              </tr>
              <tr>
                <th scope="col" />
                {content.packages.map((pkg) => <td key={pkg.name} className="border-b-2 border-l border-b-ink border-line bg-soft/40 px-5 pb-5 align-top text-body font-normal leading-snug text-ink/70">{pkg.bestFor}</td>)}
              </tr>
            </thead>
            <tbody>
              {content.packageGroups.map((group) => (
                <Fragment key={group.label}>
                  <tr><th scope="colgroup" colSpan={4} className="border-b border-t border-line bg-warm/50 px-6 py-2.5 text-left text-[14px] font-semibold uppercase tracking-[0.14em] text-muted">{group.label}</th></tr>
                  {group.rows.map(([label, key]) => <tr key={label} className="border-b border-line transition-colors hover:bg-warm/60"><th scope="row" className="p-6 py-4 font-semibold">{label}</th>{content.packages.map((pkg) => <td key={pkg.name} className="border-l border-line p-5 py-4 text-ink/80"><FeatureValue value={pkg.features[key]} /></td>)}</tr>)}
                </Fragment>
              ))}
              <tr><th scope="row" className="p-6 font-semibold">Next step</th>{content.packages.map((pkg) => <td key={pkg.name} className="border-l border-line p-5"><Button href="/contact" small data-event="local_seo_package_select" data-package={pkg.name}>Discuss package</Button></td>)}</tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:hidden">{content.packages.map((pkg) => <PackageCard key={pkg.name} pkg={pkg} />)}</div>
        <ul className="mt-8 grid gap-2 border-l-2 border-line pl-5 text-body leading-relaxed text-muted">{content.notes.map((note) => <li key={note}>{note}</li>)}</ul>
      </Reveal>
    </Band>
  );
}

export function LocalSeoReviews() {
  return (
    <SiteTestimonials
      title="What customers said about working with OMH."
      body="These eight reviews are reproduced from the original Local SEO page. They are customer comments, not evidence of a guaranteed ranking or commercial result."
      eventPrefix="local_seo"
      tone="navy"
    />
  );
}

export function LocalSeoWhyOmh() {
  return (
    <ServiceReasonGrid
      label="Why work with OMH"
      tone="white"
      bandAccent="bg-[#d96847]"
      title="Know who is responsible and what is included in your local SEO package."
      titleAccent="what is included"
      body="The strongest reasons to choose a local SEO consultant are clear access, communication, scope and reporting, not vague claims about being different."
      reasons={content.differentiators}
    />
  );
}

export function LocalSeoPromise() {
  return (
    <Band label="What we can promise" tone="mist">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-12 gap-y-8 max-lg:block"><div className="col-span-5 max-lg:mb-8"><p className="text-[14px] font-semibold uppercase tracking-[0.15em] text-amber-deep">An honest replacement for the guarantee</p><h2 className="mt-5 font-sans text-h2 font-semibold">Clear local SEO work and communication, not a guaranteed Google position.</h2></div><div className="col-span-7"><p className="text-body leading-relaxed text-ink/72">Rankings cannot be guaranteed, so no money-back claim is included here. Any future guarantee would need clear, verified terms before publication.</p><ul className="mt-7 grid grid-cols-2 gap-x-8 border-t border-[#c7d7e7] pt-5 max-sm:grid-cols-1">{["The agreed local SEO audit and package tasks", "A named contact and scheduled communication", "Reporting against the agreed measures", "Clear notice when scope or access blocks work"].map((item) => <li key={item} className="flex gap-3 border-b border-[#c7d7e7] py-3 text-body"><Check className="mt-0.5 size-4 shrink-0 text-amber-deep" />{item}</li>)}</ul></div></div>
      </Reveal>
    </Band>
  );
}

export function LocalSeoFAQ() {
  return (
    <ServiceFaqSection
      label="Local SEO FAQ"
      title="Questions before choosing a local SEO package."
      description="Confirm locations, profile ownership, website access, exact deliverables, review responsibilities, reporting definitions and agreement terms before signing."
      items={content.faqs.map(([q, a]) => ({ q, a }))}
      group="local-seo-faq"
      phoneEvent="local_seo_phone_click"
      headingSize="lg"
      headingMaxWidthClassName=""
      bandAccent="bg-[#d96847]"
      tone="mist"
    />
  );
}

export function LocalSeoFinalCTA() {
  return (
    <FinalCta
      title="Check where your local SEO needs work."
      titleAccent="local SEO needs work."
      body="Tell us the services and locations that matter, share your website and Google Business Profile, and explain which calls, visits or enquiries you want to improve. A local SEO specialist will review your position and recommend the right package."
      primary={{ label: "Check My Local Visibility", event: "local_seo_final_cta_click" }}
      secondary={{
        label: "Discuss Local SEO Services",
        href: "/seo-request-quote",
        event: "local_seo_brief_start",
      }}
      contactEvents={{ phone: "local_seo_phone_click", email: "local_seo_email_click" }}
    />
  );
}
