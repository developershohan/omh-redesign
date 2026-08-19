import { Fragment } from "react";
import { Pointer } from "@/components/Pointer";
import { Reveal } from "@/components/Reveal";
import { ServiceFaqSection } from "@/components/services/ServiceFaqSection";
import { ServiceFitSection as SharedServiceFitSection } from "@/components/services/ServiceFitSection";
import { ServiceNextStepsCTA } from "@/components/services/ServiceNextStepsCTA";
import { ServiceProcessTimeline } from "@/components/services/ServiceProcessTimeline";
import { ServiceReasonGrid } from "@/components/services/ServiceReasonGrid";
import {
  CheckIcon as Check,
  FeatureValue,
  ServiceSectionIntro as SectionIntro,
} from "@/components/services/ServicePrimitives";
import { Button, TextLink } from "@/components/ui/Button";
import { Eyebrow, Fpo, VerifiedSlot } from "@/components/ui/Proof";
import { MediaFrame } from "@/components/ServiceMedia";
import { ServiceBand as Band } from "@/components/services/ServiceBand";
import { wordpressDevelopment as content } from "@/lib/content/wordpress-development";

type Package = (typeof content.packages)[number];

/*
  Each section uses a different structural device on purpose — ruled editorial
  list, bento, numbered spine, comparison table, chip rows. Every device is
  grid/flex + hairline borders only, so all of it maps to Elementor containers.
*/

/* `size="md"` steps the heading down to h3 for sections whose heading sits in a
   narrow sidebar column — at h2 those wrapped to three and four lines. */
// ── Section 1: Hero ─────────────────────────────────────────────────────────
// Future Elementor widget: "OMH Service Hero"
export function ServiceHero() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-omh pb-[clamp(56px,38px+2.9vw,88px)] pt-[clamp(48px,34px+2.3vw,80px)]">
        <div className="grid grid-cols-12 items-center gap-x-12 gap-y-12 max-lg:block">
          <div className="col-span-7 max-lg:mb-12">
            <Reveal>
              <Eyebrow>{content.hero.eyebrow}</Eyebrow>
              {/* text-h1, not text-display: 72px in a 7-col measure wrapped to six
                  lines and pushed the hero past the fold. U+2011 keeps "long-term"
                  from breaking across lines at its hyphen. */}
              <h1 className="mb-6 mt-7 max-w-[19ch] font-sans text-h1 font-semibold text-balance">
                WordPress websites built to support enquiries, sales and <span className="text-amber-deep">long-term growth</span>
              </h1>
              <p className="mb-9 max-w-[54ch] text-lead leading-relaxed text-ink/75">
                {content.hero.body}
              </p>
              <div className="flex flex-wrap items-center gap-3.5 max-sm:flex-col max-sm:items-stretch">
                <Button href={content.hero.primary.href} arrow data-event="wpdev_hero_cta_click">
                  {content.hero.primary.label}
                </Button>
                <Button
                  href={content.hero.secondary.href}
                  variant="secondary"
                  data-event="wpdev_view_packages_click"
                >
                  {content.hero.secondary.label}
                </Button>
              </div>
              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-7">
                {[
                  ["Packages from", "£200"],
                  ["Turnaround from", "4 weeks"],
                  ["Based in", "Essex, UK"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                      {label}
                    </dt>
                    <dd className="mt-1.5 font-sans text-h4 font-semibold">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal className="col-span-5 col-start-8">
            {/* Signature interaction: the hero visual drifts a few px with the
                pointer. Wrapper stays fixed so the tracked rect never moves. */}
            <Pointer>
              <div className="pointer-parallax">
                <MediaFrame
                  kind="screen"
                  theme="wordpress"
                  ratio="16/11"
                  title="WordPress project preview"
                  note="Replace with a real project, before-and-after view or planning board."
                />
              </div>
            </Pointer>
            {/* One caption, then the slots. The previous ruled rows paired a
                "Review score" label with a "[CLIENT REVIEW SCORE REQUIRED]" chip,
                which said the same thing twice in the busiest part of the page. */}
            <div className="mt-6 border-t border-line pt-5">
              <p className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                Proof to add before launch
              </p>
              <div className="flex flex-wrap gap-2.5">
                <VerifiedSlot>Client review score — pending</VerifiedSlot>
                <VerifiedSlot>Client logos/permission — pending</VerifiedSlot>
                <VerifiedSlot>Real website result — pending</VerifiedSlot>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ── Section 2: Problems ─────────────────────────────────────────────────────
// Future Elementor widget: "OMH Pain List"
export function PainPointSection() {
  return (
    <Band label="Problems">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-10 gap-y-10 max-lg:block">
          <div className="col-span-5 max-lg:mb-10">
            <div className="lg:sticky lg:top-24">
              <SectionIntro title="A WordPress website can look fine and still hold the business back" accent="business back" />
              {/* Serif pull quote — the direction's editorial accent, used once */}
              <p className="mt-7 border-l-2 border-amber pl-5 font-serif text-[21px] leading-snug text-ink/85">
                Most businesses do not come to us because the website failed. They come
                because it is slow, hard to update, or quietly costing them enquiries.
              </p>
              <div className="mt-8 max-lg:max-w-md">
                <Fpo
                  ratio="4/3"
                  tag="Annotated screen"
                  title="Website issue snapshot"
                  note="Add a real annotated screenshot from a reviewed WordPress site."
                />
              </div>
            </div>
          </div>

          <ol className="col-span-7 col-start-6 border-t border-line">
            {content.pains.map((pain, index) => (
              <li
                key={pain}
                className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b border-line py-6 px-6 transition-colors hover:bg-surface"
              >
                <span
                  aria-hidden
                  className="font-sans text-[13px] font-semibold tabular-nums tracking-[0.1em] text-muted transition-colors group-hover:text-amber"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-serif text-[21px] leading-snug text-ink/90 max-sm:text-[19px]">
                  {pain}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </Band>
  );
}

// ── Section 3: Fit ──────────────────────────────────────────────────────────
// Future Elementor widget: "OMH Fit Columns"
export function FitSection() {
  return (
    <SharedServiceFitSection
      title="Built for businesses that need a serious WordPress website"
      titleAccent="serious WordPress website"
      body="This service works best when there is a clear business reason for the build and enough planning time to do the work properly. If that is not where you are yet, it is better to say so early."
      good={content.fit.good}
      notFit={content.fit.notFit}
      footer={
        <p className="mt-6 text-bsm leading-relaxed text-ink/70">
          Not sure which side you are on? Say so on the call and we will tell you plainly.
        </p>
      }
    />
  );
}

// ── Section 4: What we build ────────────────────────────────────────────────
// Future Elementor widget: "OMH Capability Bento"
export function ServiceCapabilityGrid() {
  const [featured, ...rest] = content.capabilities;

  return (
    <Band label="Build">
      <Reveal>
        <SectionIntro
          title="WordPress development shaped around how your business actually works"
          accent="business actually works"
          body="The scope can cover a new build, a careful redesign, technical improvements or the functionality needed to support your sales process."
        />
        <div className="mt-12 grid grid-cols-6 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <Pointer className="pointer-spotlight relative col-span-3 row-span-2 flex flex-col justify-between overflow-hidden rounded-card bg-inverse p-9 text-oninverse max-lg:col-span-2 max-sm:col-span-1 max-sm:p-6">
            <div className="relative z-10">
              <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-oninverse/55">
                Most projects start here
              </p>
              <h3 className="mt-5 font-sans text-h2 font-semibold">{featured.title}</h3>
              <p className="mt-5 max-w-[42ch] text-lead leading-relaxed text-oninverse/75">
                {featured.body}
              </p>
            </div>
            <ul className="relative z-10 mt-10 grid gap-2.5 border-t border-oninverse/15 pt-7">
              {["Structure planned before design", "Built to be edited without a developer", "Set up for tracking from day one"].map(
                (line) => (
                  <li key={line} className="flex gap-3 text-body leading-snug text-oninverse/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-soft" />
                    {line}
                  </li>
                ),
              )}
            </ul>
          </Pointer>

          {rest.map((item) => (
            <article
              key={item.title}
              className={`group rounded-card border border-line bg-surface p-7 transition duration-200 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_16px_34px_-24px_rgb(16_24_40/0.45)] max-lg:col-span-1 max-sm:col-span-1 max-sm:p-6 ${
                item.size === "medium" ? "col-span-3" : "col-span-2"
              }`}
            >
              <h3 className="font-sans text-h4 font-semibold">{item.title}</h3>
              <p className="mt-3 text-body leading-relaxed text-ink/75">{item.body}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </Band>
  );
}

// ── Section 5: Process ──────────────────────────────────────────────────────
// Future Elementor widget: "OMH Process Spine" — order genuinely matters here,
// which is the only reason this section is numbered.
export function ProcessSteps() {
  return (
    <ServiceProcessTimeline
      label="Process"
      title="A clear process from planning to launch"
      titleAccent="planning to launch"
      body="The goal, content and design decisions are agreed before development becomes expensive to change."
      steps={content.process}
      action={{ label: "Start at discovery", event: "wpdev_form_start" }}
    />
  );
}

// ── Section 6: Packages ─────────────────────────────────────────────────────
function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <article className="overflow-hidden rounded-card border border-line bg-surface">
      <div className="border-b border-line bg-soft/50 p-6">
        <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">
          {pkg.stage}
        </p>
        <h3 className="mt-2 font-sans text-h3 font-semibold">{pkg.name}</h3>
        <p className="mt-3 font-sans text-[34px] font-semibold leading-none tracking-[-0.02em]">
          {pkg.price}
        </p>
        <p className="mt-4 text-bsm leading-relaxed text-ink/70">{pkg.bestFor}</p>
      </div>
      <dl className="p-6 text-bsm">
        {content.packageGroups.map((group) => (
          <div key={group.label} className="border-b border-line py-4 first:pt-0 last:border-b-0">
            <p className="mb-1 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-muted/80">
              {group.label}
            </p>
            {group.rows.map(([label, key]) => (
              <div key={label} className="flex items-baseline justify-between gap-6 py-2">
                <dt className="text-muted">{label}</dt>
                <dd className="text-right font-semibold text-ink">
                  <FeatureValue value={pkg.features[key]} />
                </dd>
              </div>
            ))}
          </div>
        ))}
      </dl>
      <div className="px-6 pb-6">
        <Button
          href="/contact"
          small
          className="min-h-11 w-full justify-center"
          data-event="wpdev_package_select"
          data-package={pkg.name}
        >
          Discuss this package
        </Button>
      </div>
    </article>
  );
}

// Future Elementor widget: "OMH Pricing Comparison"
export function PricingPackages() {
  return (
    <Band label="Packages" id="packages">
      <div>
        <div data-event="wpdev_pricing_view">
          <div className="grid grid-cols-12 items-end gap-x-10 gap-y-6 max-lg:block">
            <SectionIntro
              className="col-span-7"
              title="Website packages for different stages of growth"
              accent="stages of growth"
              body="Every WordPress project needs the right scope. These packages are a starting point, and your account manager will recommend the right option during the consultation."
            />
            <p className="col-span-5 text-bsm leading-relaxed text-ink/70 max-lg:mt-6">
              Some businesses only need a focused starter site. Others need more pages,
              deeper content, advanced functionality or ongoing support. Final scope
              depends on content, functionality and business needs.
            </p>
          </div>

          {/* Comparison table only from xl: its 1000px minimum forced horizontal
              scrolling on the essential pricing content between 1024 and 1279,
              where the stacked cards read better anyway. */}
          <div className="mt-12 hidden overflow-x-auto rounded-card border border-line bg-surface xl:block">
            <table className="w-full min-w-[1000px] border-collapse text-left text-bsm">
              <caption className="sr-only">
                WordPress website package comparison by inclusion and price
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="sticky left-0 z-10 w-[220px] bg-surface p-6 align-bottom">
                    <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Compare packages
                    </span>
                  </th>
                  {content.packages.map((pkg) => (
                    <th key={pkg.name} scope="col" className="border-l border-line bg-soft/40 p-6 align-bottom">
                      <span className="block text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                        {pkg.stage}
                      </span>
                      <span className="mt-2 block font-sans text-h4 font-semibold">{pkg.name}</span>
                      <span className="mt-4 block font-sans text-[34px] font-semibold leading-none tracking-[-0.02em]">
                        {pkg.price}
                      </span>
                    </th>
                  ))}
                </tr>
                <tr>
                  <th scope="col" className="sticky left-0 z-10 bg-surface" />
                  {content.packages.map((pkg) => (
                    <td
                      key={pkg.name}
                      className="border-l border-b-2 border-b-ink border-line bg-soft/40 px-6 pb-6 align-top text-body font-normal leading-snug text-ink/70"
                    >
                      {pkg.bestFor}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.packageGroups.map((group) => (
                  <Fragment key={group.label}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={5}
                        className="border-b border-t border-line bg-warm/50 px-6 py-2.5 text-left text-[12px] font-semibold uppercase tracking-[0.14em] text-muted"
                      >
                        {group.label}
                      </th>
                    </tr>
                    {group.rows.map(([label, key]) => (
                      <tr key={label} className="border-b border-line transition-colors hover:bg-warm/60">
                        <th scope="row" className="sticky left-0 z-10 bg-surface p-6 py-4 font-semibold">
                          {label}
                        </th>
                        {content.packages.map((pkg) => (
                          <td key={pkg.name} className="border-l border-line p-6 py-4 text-ink/80">
                            <FeatureValue value={pkg.features[key]} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
                <tr>
                  <th scope="row" className="sticky left-0 z-10 bg-surface p-6 font-semibold">
                    Next step
                  </th>
                  {content.packages.map((pkg) => (
                    <td key={pkg.name} className="border-l border-line p-6">
                      <Button
                        href="/contact"
                        small
                        data-event="wpdev_package_select"
                        data-package={pkg.name}
                      >
                        Discuss package
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile / tablet stacked cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:hidden">
            {content.packages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>

          <ul className="mt-8 grid gap-2 border-l-2 border-line pl-5 text-body leading-relaxed text-muted">
            {content.pricingNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </Band>
  );
}

// ── Section 7: What is included ─────────────────────────────────────────────
// Future Elementor widget: "OMH Inclusion Rows"
export function IncludedFeatures() {
  return (
    <Band label="Included">
      <Reveal>
        <SectionIntro
          title="What is included"
          accent="included"
          body="Exact scope depends on the package you choose, but the work always groups into these five areas."
        />
        <div className="mt-12 border-t border-line">
          {content.included.map(([title, blurb, items]) => (
            <div
              key={title}
              className="grid grid-cols-12 gap-x-10 gap-y-4 border-b border-line py-8 px-6 transition-colors duration-200 hover:bg-surface max-lg:block"
            >
              <div className="col-span-4">
                <h3 className="font-sans text-h4 font-semibold">{title}</h3>
                <p className="mt-2 text-bsm leading-relaxed text-muted">{blurb}</p>
              </div>
              <ul className="col-span-8 flex flex-wrap content-start gap-2.5 max-lg:mt-5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-surface py-2 pl-3 pr-4 text-body leading-none text-ink/80 transition-colors duration-200 hover:border-teal/45 hover:bg-soft/50"
                  >
                    <Check className="size-3.5 shrink-0 text-amber-deep" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-[62ch] text-bsm text-muted">
          Anything outside these areas is quoted separately rather than assumed.
        </p>
      </Reveal>
    </Band>
  );
}

// ── Section 8: Proof ────────────────────────────────────────────────────────
// Future Elementor widget: "OMH Case Study Feature"
export function CaseStudyFeature() {
  return (
    <Band label="Proof" tone="white">
      <Reveal>
        <div className="overflow-hidden rounded-card border border-soft-dark bg-soft/60">
          <div className="grid grid-cols-12 gap-x-10 gap-y-8 p-10 max-lg:block max-sm:p-6">
            <div className="col-span-5">
              <Eyebrow>Case study placeholder</Eyebrow>
              <h2 className="mb-5 mt-6 font-sans text-h3 font-semibold text-balance">
                A real WordPress project, <span className="text-amber-deep">explained properly</span>
              </h2>
              <p className="text-body leading-relaxed text-ink/75">
                This slot is built for the real client name or anonymised sector, business
                type, location, original problem, website goal, scope, functionality,
                timeline, result and testimonial. Nothing here is filled with invented
                figures.
              </p>
              <ul className="mt-7 border-t border-soft-dark">
                {["Original problem", "Work completed", "Timeline and scope", "Verified result"].map(
                  (field) => (
                    <li
                      key={field}
                      className="border-b border-soft-dark py-3 text-body text-ink/70"
                    >
                      {field}
                    </li>
                  ),
                )}
              </ul>
              <div className="mt-7">
                <TextLink href="/case-studies" data-event="wpdev_case_study_click">
                  View case studies
                </TextLink>
              </div>
            </div>

            <div className="col-span-7 col-start-6 max-lg:mt-9">
              <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                <Fpo ratio="4/3" tag="Before" title="Before website screenshot" note="Use the real previous website screen." />
                <Fpo ratio="4/3" tag="After" title="After website screenshot" note="Use the real launched website screen." />
              </div>
              <div className="mt-6 rounded-card border border-soft-dark bg-surface/70 p-6">
                <VerifiedSlot>WordPress case study — pending</VerifiedSlot>
                <div className="mt-4 flex flex-wrap gap-3">
                  <VerifiedSlot>Verified result — pending</VerifiedSlot>
                  <VerifiedSlot>Client testimonial — pending</VerifiedSlot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Band>
  );
}

// ── Section 9: Why OMH ──────────────────────────────────────────────────────
// Future Elementor widget: "OMH Reason Rows"
export function WhyChooseSection() {
  return (
    <ServiceReasonGrid
      title="WordPress development connected to marketing, not separated from it"
      titleAccent="not separated from it"
      body="A better website is not only a design job. It has to support the way people find the business, compare the offer and decide to enquire or buy."
      reasons={content.reasons}
    />
  );
}

// ── Section 10: FAQ ─────────────────────────────────────────────────────────
export function FAQAccordion() {
  return (
    <ServiceFaqSection
      title="Questions before you brief a WordPress project"
      titleAccent="WordPress project"
      description="If your question is not here, ask it on the consultation call and you will get a straight answer."
      items={content.faqs.map(([q, a]) => ({ q, a }))}
      group="wpdev-faq"
      phoneEvent="wpdev_phone_click"
    />
  );
}

// ── Section 11: Final CTA ───────────────────────────────────────────────────
export function FinalCTA() {
  return (
    <ServiceNextStepsCTA
      title="Ready to improve your WordPress website?"
      titleAccent="WordPress website?"
      body="Tell us what you need your website to do, what is not working now, and what you want to improve. We will review the details and recommend the most practical next step."
      primary={{ label: "Book a WordPress Consultation", event: "wpdev_final_cta_click" }}
      secondary={{
        label: "Send a Website Brief",
        href: "/wordpress-development-request-quote",
        event: "wpdev_form_start",
      }}
      phoneEvent="wpdev_phone_click"
      emailEvent="wpdev_email_click"
      steps={[
        "Your enquiry is reviewed by a real person.",
        "We discuss your goals, website problems and practical options.",
        "You receive a clear recommendation on the next step.",
      ]}
    />
  );
}
