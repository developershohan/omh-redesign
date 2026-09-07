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
import { shopifyDevelopment as content } from "@/lib/content/shopify-development";

type Package = (typeof content.packages)[number];

export function ShopifyHero() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-omh pb-[clamp(56px,38px+2.9vw,88px)] pt-[clamp(48px,34px+2.3vw,80px)]">
        <div className="grid grid-cols-12 items-center gap-x-12 gap-y-12 max-lg:block">
          <div className="col-span-7 max-lg:mb-12">
            <Reveal>
              <Eyebrow>{content.hero.eyebrow}</Eyebrow>
              <h1 className="mb-6 mt-7 max-w-[20ch] font-sans text-h1 font-semibold text-balance">
                Shopify stores built to sell clearly, run reliably and <span className="text-amber-deep">grow with the business</span>
              </h1>
              <p className="mb-9 max-w-[55ch] text-lead leading-relaxed text-ink/75">{content.hero.body}</p>
              <div className="flex flex-wrap items-center gap-3.5 max-sm:flex-col max-sm:items-stretch">
                <Button href={content.hero.primary.href} arrow data-event="shopify_hero_cta_click">
                  {content.hero.primary.label}
                </Button>
                <Button href={content.hero.secondary.href} variant="secondary" data-event="shopify_view_packages_click">
                  {content.hero.secondary.label}
                </Button>
              </div>
              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-7">
                {[
                  ["Packages from", "£300"],
                  ["Turnaround from", "4 weeks"],
                  ["Primary market", "UK businesses"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">{label}</dt>
                    <dd className="mt-1.5 font-sans text-h4 font-semibold">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal className="col-span-5 col-start-8">
            <Pointer>
              <div className="pointer-parallax">
                <MediaFrame kind="image" theme="shopify" ratio="4/5" title="Shopify storefront feature" note="Replace with a real product, collection or storefront view from an approved client project." source="/images/Services/Shopify Development.jpg" alt="A Shopify storefront product page shown on screen." />
              </div>
            </Pointer>
            <div className="mt-6 border-t border-line pt-5">
              <p className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">Proof to add before launch</p>
              <div className="flex flex-wrap gap-2.5">
                <VerifiedSlot>Shopify client result — pending</VerifiedSlot>
                <VerifiedSlot>Client logos/permission — pending</VerifiedSlot>
                <VerifiedSlot>Shopify review — pending</VerifiedSlot>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ShopifyNeedSection() {
  return (
    <Band label="Need">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-10 gap-y-10 max-lg:block">
          <div className="col-span-5 max-lg:mb-10">
            <div className="lg:sticky lg:top-24">
              <SectionIntro title="A Shopify store can be easy to use and still be hard to grow" accent="hard to grow" />
              <p className="mt-7 border-l-2 border-amber pl-5 font-serif text-[21px] leading-snug text-ink/85">
                The platform is only one part of the job. The store still needs clear product information, sensible structure and a buying journey customers can trust.
              </p>
              <div className="mt-8 max-lg:max-w-md">
                <Fpo ratio="4/3" tag="Store review" title="Shopify friction snapshot" note="Add a real annotated mobile or desktop screen from a reviewed store." />
              </div>
            </div>
          </div>

          <ol className="col-span-7 col-start-6 border-t border-line">
            {content.needs.map((need, index) => (
              <li key={need} className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b border-line px-6 py-6 transition-colors hover:bg-surface">
                <span aria-hidden className="font-sans text-[18px] font-semibold tabular-nums tracking-[0.1em] text-muted transition-colors group-hover:text-amber">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-serif text-[21px] leading-snug text-ink/90 max-sm:text-[19px]">{need}</p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </Band>
  );
}

export function ShopifyFitSection() {
  return (
    <SharedServiceFitSection
      title="For businesses treating ecommerce as a serious sales channel"
      titleAccent="serious sales channel"
      body="A clear commercial reason for the project makes design and development decisions easier. This section helps qualify the fit before either side commits time to a proposal."
      good={content.fit.good}
      notFit={content.fit.notFit}
    />
  );
}

export function ShopifyCapabilityGrid() {
  const [featured, ...rest] = content.capabilities;

  return (
    <Band label="Build">
      <Reveal>
        <SectionIntro
          title="Shopify development shaped around the store you need to operate"
          accent="store you need to operate"
          body="The work can cover the complete store, theme changes, extensions, apps, migration, integrations, testing and ongoing improvement. Scope is shaped around the parts your business actually needs."
        />

        <Pointer className="pointer-spotlight relative mt-12 overflow-hidden rounded-card bg-inverse p-10 text-oninverse max-sm:p-6">
          <div className="relative z-10 grid grid-cols-12 items-start gap-x-10 gap-y-8 max-lg:block">
            <div className="col-span-6">
              <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-oninverse/55">Most projects start here</p>
              <h3 className="mt-5 font-sans text-h2 font-semibold">{featured.title}</h3>
              <p className="mt-5 max-w-[46ch] text-lead leading-relaxed text-oninverse/75">{featured.body}</p>
            </div>
            <ul className="col-span-5 col-start-8 grid gap-3 border-t border-oninverse/15 pt-6 max-lg:mt-8">
              {featured.detail?.map((line) => (
                <li key={line} className="flex gap-3 text-body leading-snug text-oninverse/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#f2c675]" /> {line}
                </li>
              ))}
            </ul>
          </div>
        </Pointer>

        <div className="mt-8 grid grid-cols-2 gap-x-10 max-lg:grid-cols-1">
          {rest.map((item, index) => (
            <article key={item.title} className="group grid grid-cols-[auto_1fr] gap-x-5 border-t border-line px-3 py-7 transition-colors hover:border-teal/50 hover:bg-surface">
              <span className="font-sans text-[18px] font-semibold tabular-nums tracking-[0.1em] text-muted group-hover:text-amber">
                {String(index + 2).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-sans text-h4 font-semibold">{item.title}</h3>
                <p className="mt-2.5 text-body leading-relaxed text-ink/75">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </Band>
  );
}

export function ShopifyProcessSteps() {
  return (
    <ServiceProcessTimeline
      label="Process"
      title="A controlled route from store planning to launch"
      titleAccent="planning to launch"
      body="Migration, integration and buying-journey risks are raised before they become last-minute launch problems."
      steps={content.process}
      action={{ label: "Start at discovery", event: "shopify_form_start" }}
    />
  );
}

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <article className="overflow-hidden rounded-card border border-line bg-surface">
      <div className="border-b border-line bg-soft/50 p-6">
        <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">{pkg.stage}</p>
        <h3 className="mt-2 font-sans text-h3 font-semibold">{pkg.name}</h3>
        <p className="mt-3 font-sans text-[34px] font-semibold leading-none tracking-[-0.02em]">{pkg.price}</p>
        <p className="mt-4 text-bsm leading-relaxed text-ink/70">{pkg.bestFor}</p>
      </div>
      <dl className="p-6 text-bsm">
        {content.packageGroups.map((group) => (
          <div key={group.label} className="border-b border-line py-4 first:pt-0 last:border-b-0">
            <p className="mb-1 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-muted/80">{group.label}</p>
            {group.rows.map(([label, key]) => (
              <div key={label} className="flex items-baseline justify-between gap-6 py-2">
                <dt className="text-muted">{label}</dt>
                <dd className="text-right font-semibold text-ink"><FeatureValue value={pkg.features[key]} /></dd>
              </div>
            ))}
          </div>
        ))}
      </dl>
      <div className="px-6 pb-6">
        <Button href="/contact" small className="min-h-11 w-full justify-center" data-event="shopify_package_select" data-package={pkg.name}>
          Discuss this package
        </Button>
      </div>
    </article>
  );
}

export function ShopifyPricingPackages() {
  return (
    <Band label="Packages" id="packages">
      <div data-event="shopify_pricing_view">
        <div className="grid grid-cols-12 items-end gap-x-10 gap-y-6 max-lg:block">
          <SectionIntro className="col-span-7" title="Website packages for different stages of ecommerce growth" accent="ecommerce growth" body="These four published packages are starting points. Migration, integrations, catalogue size and advanced functionality still need a proper scope before work begins." />
          <p className="col-span-5 text-bsm leading-relaxed text-ink/70 max-lg:mt-6">
            Website Seed and Website Shoot are both £300. [CONFIRM PRICE] No package is marked as recommended.
          </p>
        </div>

        <div className="mt-12 hidden overflow-x-auto rounded-card border border-line bg-surface xl:block">
          <table className="w-full min-w-[1000px] border-collapse text-left text-bsm">
            <caption className="sr-only">Shopify website package comparison by inclusion and price</caption>
            <thead>
              <tr>
                <th scope="col" className="sticky left-0 z-10 w-[220px] bg-surface p-6 align-bottom">
                  <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">Compare packages</span>
                </th>
                {content.packages.map((pkg) => (
                  <th key={pkg.name} scope="col" className="border-l border-line bg-soft/40 p-6 align-bottom">
                    <span className="block text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">{pkg.stage}</span>
                    <span className="mt-2 block font-sans text-h4 font-semibold">{pkg.name}</span>
                    <span className="mt-4 block font-sans text-[34px] font-semibold leading-none tracking-[-0.02em]">{pkg.price}</span>
                  </th>
                ))}
              </tr>
              <tr>
                <th scope="col" className="sticky left-0 z-10 bg-surface" />
                {content.packages.map((pkg) => (
                  <td key={pkg.name} className="border-b-2 border-l border-b-ink border-line bg-soft/40 px-6 pb-6 align-top text-body font-normal leading-snug text-ink/70">{pkg.bestFor}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.packageGroups.map((group) => (
                <Fragment key={group.label}>
                  <tr>
                    <th scope="colgroup" colSpan={5} className="border-b border-t border-line bg-warm/50 px-6 py-2.5 text-left text-[14px] font-semibold uppercase tracking-[0.14em] text-muted">{group.label}</th>
                  </tr>
                  {group.rows.map(([label, key]) => (
                    <tr key={label} className="border-b border-line transition-colors hover:bg-warm/60">
                      <th scope="row" className="sticky left-0 z-10 bg-surface p-6 py-4 font-semibold">{label}</th>
                      {content.packages.map((pkg) => (
                        <td key={pkg.name} className="border-l border-line p-6 py-4 text-ink/80"><FeatureValue value={pkg.features[key]} /></td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
              <tr>
                <th scope="row" className="sticky left-0 z-10 bg-surface p-6 font-semibold">Next step</th>
                {content.packages.map((pkg) => (
                  <td key={pkg.name} className="border-l border-line p-6">
                    <Button href="/contact" small data-event="shopify_package_select" data-package={pkg.name}>Discuss package</Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:hidden">
          {content.packages.map((pkg) => <PackageCard key={pkg.name} pkg={pkg} />)}
        </div>

        <ul className="mt-8 grid gap-2 border-l-2 border-line pl-5 text-body leading-relaxed text-muted">
          {content.pricingNotes.map((note) => <li key={note}>{note}</li>)}
        </ul>
      </div>
    </Band>
  );
}

export function ShopifyCaseStudyFeature() {
  return (
    <Band label="Proof" tone="white">
      <Reveal>
        <div className="overflow-hidden rounded-card border border-soft-dark bg-soft/60">
          <div className="grid grid-cols-12 gap-x-10 gap-y-8 p-10 max-lg:block max-sm:p-6">
            <div className="col-span-5">
              <Eyebrow>Client work</Eyebrow>
              <h2 className="mb-5 mt-6 font-sans text-h3 font-semibold text-balance">
                Show the store, the challenge and <span className="text-amber-deep">what changed</span>
              </h2>
              <p className="text-body leading-relaxed text-ink/75">
                Every Shopify case study we publish covers the same ground: the starting problem, what we built, the timeline, and a result the client can stand behind.
              </p>
              <ul className="mt-7 border-t border-soft-dark">
                {["Original platform or store problem", "Theme, migration or functionality delivered", "Timeline and package or scope", "Verified commercial or usability result"].map((field) => (
                  <li key={field} className="border-b border-soft-dark py-3 text-body text-ink/70">{field}</li>
                ))}
              </ul>
              <div className="mt-7"><TextLink href="/case-studies" data-event="shopify_case_study_click">View case studies</TextLink></div>
            </div>

            <div className="col-span-7 col-start-6 max-lg:mt-9">
              <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                <Fpo ratio="4/3" tag="Before" title="Before Shopify screenshot" note="Use the real previous store or platform." />
                <Fpo ratio="4/3" tag="After" title="After Shopify screenshot" note="Use the real launched Shopify store." />
              </div>
              <div className="mt-6 rounded-card border border-soft-dark bg-surface/70 p-6">
                <VerifiedSlot>Shopify case study — pending</VerifiedSlot>
                <div className="mt-4 flex flex-wrap gap-3">
                  <VerifiedSlot>Verified result — pending</VerifiedSlot>
                  <VerifiedSlot>Client testimonial — pending</VerifiedSlot>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-card border border-line bg-warm/60 p-7">
          <p className="font-sans text-[14px] font-semibold uppercase tracking-[0.14em] text-muted">Trust signals</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <VerifiedSlot>Shopify certification — pending</VerifiedSlot>
            <VerifiedSlot>Trustpilot rating — pending</VerifiedSlot>
            <VerifiedSlot>Money-back guarantee terms — pending</VerifiedSlot>
            <VerifiedSlot>30-day support term — pending</VerifiedSlot>
          </div>
        </div>
      </Reveal>
    </Band>
  );
}

export function ShopifyWhyChooseSection() {
  return (
    <ServiceReasonGrid
      title="Shopify development connected to the wider job of selling online"
      titleAccent="selling online"
      body="A useful ecommerce build considers products, operations, customer confidence, marketing and measurement—not only the storefront theme."
      reasons={content.reasons}
    />
  );
}

export function ShopifyFAQAccordion() {
  return (
    <ServiceFaqSection
      title="Questions before you brief a Shopify project"
      titleAccent="Shopify project"
      description="Support and commercial terms carried over from the current service page are clearly marked where confirmation is still needed."
      items={content.faqs.map(([q, a]) => ({ q, a }))}
      group="shopify-faq"
      phoneEvent="shopify_phone_click"
    />
  );
}

export function ShopifyFinalCTA() {
  return (
    <ServiceNextStepsCTA
      title="Ready to plan a better Shopify store?"
      titleAccent="Shopify store?"
      body="Tell us what you sell, what the current setup is making difficult and what the new store needs to support. We will review the detail and recommend a practical next step."
      primary={{ label: "Discuss Your Shopify Project", event: "shopify_final_cta_click" }}
      secondary={{
        label: "Send a Store Brief",
        href: "/new-website-development-quotation-questionnaire",
        event: "shopify_form_start",
      }}
      phoneEvent="shopify_phone_click"
      emailEvent="shopify_email_click"
      steps={[
        "Your store brief is reviewed by a real person.",
        "We discuss the products, platform, goals and technical requirements.",
        "You receive a recommendation on package, scope or discovery work.",
      ]}
    />
  );
}
