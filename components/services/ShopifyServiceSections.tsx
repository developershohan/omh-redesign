import Link from "next/link";
import { Fragment } from "react";
import { Pointer } from "@/components/Pointer";
import { Reveal } from "@/components/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Button, TextLink } from "@/components/ui/Button";
import { Eyebrow, Fpo, VerifiedSlot } from "@/components/ui/Proof";
import { MediaFrame } from "@/components/ServiceMedia";
import { ServiceBand as Band } from "@/components/services/ServiceBand";
import { company } from "@/lib/content/nav";
import { shopifyDevelopment as content } from "@/lib/content/shopify-development";

type Package = (typeof content.packages)[number];

function SectionIntro({
  title,
  accent,
  body,
  size = "lg",
  className = "",
}: {
  title: string;
  accent?: string;
  body?: string;
  size?: "lg" | "md";
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className={`max-w-[22ch] font-sans font-semibold text-balance ${size === "md" ? "text-h3" : "text-h2"}`}>
        {accent && title.includes(accent) ? (
          <>
            {title.slice(0, title.indexOf(accent))}
            <span className="text-teal">{accent}</span>
            {title.slice(title.indexOf(accent) + accent.length)}
          </>
        ) : (
          title
        )}
      </h2>
      {body && <p className="mt-5 max-w-[64ch] text-lead leading-relaxed text-ink/75">{body}</p>}
    </div>
  );
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="m5 13 4.5 4.5L19 7" />
    </svg>
  );
}

function Minus({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden className={className}>
      <path d="M6 12h12" />
    </svg>
  );
}

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") return <>{value}</>;
  return value ? (
    <span className="inline-flex items-center">
      <Check className="size-4 text-teal" />
      <span className="sr-only">Included</span>
    </span>
  ) : (
    <span className="inline-flex items-center">
      <Minus className="size-4 text-muted/55" />
      <span className="sr-only">Not included</span>
    </span>
  );
}

export function ShopifyHero() {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-omh pb-[clamp(56px,38px+2.9vw,88px)] pt-[clamp(48px,34px+2.3vw,80px)]">
        <div className="grid grid-cols-12 items-center gap-x-12 gap-y-12 max-lg:block">
          <div className="col-span-7 max-lg:mb-12">
            <Reveal>
              <Eyebrow>{content.hero.eyebrow}</Eyebrow>
              <h1 className="mb-6 mt-7 max-w-[20ch] font-sans text-h1 font-semibold text-balance">
                Shopify stores built to sell clearly, run reliably and <span className="text-teal">grow with the business</span>
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
                <MediaFrame kind="image" theme="shopify" ratio="4/5" title="Shopify storefront feature" note="Replace with a real product, collection or storefront view from an approved client project." />
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
              <li key={need} className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b border-line px-6 py-6 transition-colors hover:bg-white">
                <span aria-hidden className="font-sans text-[13px] font-semibold tabular-nums tracking-[0.1em] text-muted transition-colors group-hover:text-amber">
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
    <Band label="Fit" tone="white">
      <Reveal>
        <SectionIntro
          title="For businesses treating ecommerce as a serious sales channel"
          accent="serious sales channel"
          body="A clear commercial reason for the project makes design and development decisions easier. This section helps qualify the fit before either side commits time to a proposal."
        />
        <div className="mt-12 grid grid-cols-12 gap-x-10 gap-y-8 max-lg:block">
          <div className="col-span-7 rounded-card border border-soft-dark bg-soft/70 p-9 max-lg:mb-8 max-sm:p-6">
            <h3 className="flex items-center gap-2.5 font-sans text-h3 font-semibold">
              <Check className="size-5 text-teal" /> A good fit
            </h3>
            <ul className="mt-6">
              {content.fit.good.map((item) => (
                <li key={item} className="flex gap-3.5 border-b border-soft-dark py-3.5 text-[17px] leading-snug text-ink/85 last:border-b-0 last:pb-0">
                  <Check className="mt-1 size-4 shrink-0 text-teal" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-5 max-lg:pt-2">
            <h3 className="flex items-center gap-2.5 font-sans text-h3 font-semibold text-muted">
              <Minus className="size-5" /> Probably not yet
            </h3>
            <ul className="mt-6 border-t border-line">
              {content.fit.notFit.map((item) => (
                <li key={item} className="border-b border-line py-3.5 text-[16.5px] leading-snug text-muted">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Band>
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

        <Pointer className="pointer-spotlight relative mt-12 overflow-hidden rounded-card bg-ink p-10 text-white max-sm:p-6">
          <div className="relative z-10 grid grid-cols-12 items-start gap-x-10 gap-y-8 max-lg:block">
            <div className="col-span-6">
              <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-white/55">Most projects start here</p>
              <h3 className="mt-5 font-sans text-h2 font-semibold">{featured.title}</h3>
              <p className="mt-5 max-w-[46ch] text-lead leading-relaxed text-white/75">{featured.body}</p>
            </div>
            <ul className="col-span-5 col-start-8 grid gap-3 border-t border-white/15 pt-6 max-lg:mt-8">
              {featured.detail?.map((line) => (
                <li key={line} className="flex gap-3 text-[17px] leading-snug text-white/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#5fc8bd]" /> {line}
                </li>
              ))}
            </ul>
          </div>
        </Pointer>

        <div className="mt-8 grid grid-cols-2 gap-x-10 max-lg:grid-cols-1">
          {rest.map((item, index) => (
            <article key={item.title} className="group grid grid-cols-[auto_1fr] gap-x-5 border-t border-line px-3 py-7 transition-colors hover:border-teal/50 hover:bg-white">
              <span className="font-sans text-[13px] font-semibold tabular-nums tracking-[0.1em] text-muted group-hover:text-amber">
                {String(index + 2).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-sans text-h4 font-semibold">{item.title}</h3>
                <p className="mt-2.5 text-[17px] leading-relaxed text-ink/75">{item.body}</p>
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
    <Band label="Process" tone="white">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-10 gap-y-10 max-lg:block">
          <div className="col-span-4 max-lg:mb-10">
            <div className="lg:sticky lg:top-24">
              <SectionIntro size="md" title="A controlled route from store planning to launch" accent="planning to launch" body="Migration, integration and buying-journey risks are raised before they become last-minute launch problems." />
              <div className="mt-8">
                <TextLink href="/contact" data-event="shopify_form_start">Start at discovery</TextLink>
              </div>
            </div>
          </div>

          <ol className="relative col-span-8 border-l border-line pl-9 max-sm:pl-7">
            {content.process.map(([title, body], index) => (
              <li key={title} className="group/step relative pb-10 last:pb-0">
                <span aria-hidden className="absolute -left-[51px] top-0.5 flex size-[30px] items-center justify-center rounded-full border border-line bg-white font-sans text-[13px] font-semibold tabular-nums text-teal transition-colors group-hover/step:border-teal group-hover/step:bg-teal group-hover/step:text-white max-sm:-left-[43px]">
                  {index + 1}
                </span>
                <h3 className="font-sans text-h3 font-semibold">{title}</h3>
                <p className="mt-2.5 max-w-[62ch] text-body leading-relaxed text-ink/75">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </Band>
  );
}

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <article className="overflow-hidden rounded-card border border-line bg-white">
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
            Website Seed and Website Shoot are both £300 on the source page. No package has been labelled as recommended because that decision has not been confirmed.
          </p>
        </div>

        <div className="mt-12 hidden overflow-x-auto rounded-card border border-line bg-white xl:block">
          <table className="w-full min-w-[1000px] border-collapse text-left text-bsm">
            <caption className="sr-only">Shopify website package comparison by inclusion and price</caption>
            <thead>
              <tr>
                <th scope="col" className="sticky left-0 z-10 w-[220px] bg-white p-6 align-bottom">
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
                <th scope="col" className="sticky left-0 z-10 bg-white" />
                {content.packages.map((pkg) => (
                  <td key={pkg.name} className="border-b-2 border-l border-b-ink border-line bg-soft/40 px-6 pb-6 align-top text-[15px] font-normal leading-snug text-ink/70">{pkg.bestFor}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.packageGroups.map((group) => (
                <Fragment key={group.label}>
                  <tr>
                    <th scope="colgroup" colSpan={5} className="border-b border-t border-line bg-warm/50 px-6 py-2.5 text-left text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">{group.label}</th>
                  </tr>
                  {group.rows.map(([label, key]) => (
                    <tr key={label} className="border-b border-line transition-colors hover:bg-warm/60">
                      <th scope="row" className="sticky left-0 z-10 bg-white p-6 py-4 font-semibold">{label}</th>
                      {content.packages.map((pkg) => (
                        <td key={pkg.name} className="border-l border-line p-6 py-4 text-ink/80"><FeatureValue value={pkg.features[key]} /></td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
              <tr>
                <th scope="row" className="sticky left-0 z-10 bg-white p-6 font-semibold">Next step</th>
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

        <ul className="mt-8 grid gap-2 border-l-2 border-line pl-5 text-[15px] leading-relaxed text-muted">
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
                Show the store, the challenge and <span className="text-teal">what changed</span>
              </h2>
              <p className="text-body leading-relaxed text-ink/75">
                Every Shopify case study we publish covers the same ground: the starting problem, what we built, the timeline, and a result the client can stand behind.
              </p>
              <ul className="mt-7 border-t border-soft-dark">
                {["Original platform or store problem", "Theme, migration or functionality delivered", "Timeline and package or scope", "Verified commercial or usability result"].map((field) => (
                  <li key={field} className="border-b border-soft-dark py-3 text-[15.5px] text-ink/70">{field}</li>
                ))}
              </ul>
              <div className="mt-7"><TextLink href="/case-studies" data-event="shopify_case_study_click">View case studies</TextLink></div>
            </div>

            <div className="col-span-7 col-start-6 max-lg:mt-9">
              <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                <Fpo ratio="4/3" tag="Before" title="Before Shopify screenshot" note="Use the real previous store or platform." />
                <Fpo ratio="4/3" tag="After" title="After Shopify screenshot" note="Use the real launched Shopify store." />
              </div>
              <div className="mt-6 rounded-card border border-soft-dark bg-white/70 p-6">
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
          <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">Trust signals</p>
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
    <Band label="Why OMH">
      <Reveal>
        <SectionIntro title="Shopify development connected to the wider job of selling online" accent="selling online" body="A useful ecommerce build considers products, operations, customer confidence, marketing and measurement—not only the storefront theme." />
        <div className="mt-12 grid grid-cols-2 gap-x-12 max-lg:grid-cols-1">
          {content.reasons.map(([title, body]) => (
            <article key={title} className="group border-t border-line py-6 transition-colors hover:border-teal/50">
              <h3 className="flex items-start gap-3 font-sans text-h4 font-semibold"><Check className="mt-1 size-4 shrink-0 text-teal" />{title}</h3>
              <p className="mt-2.5 pl-7 text-[18px] leading-relaxed text-ink/75">{body}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </Band>
  );
}

export function ShopifyFAQAccordion() {
  return (
    <Band label="FAQ" tone="white">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-12 gap-y-8 max-lg:block">
          <div className="col-span-4 max-lg:mb-8">
            <div className="lg:sticky lg:top-24">
              <SectionIntro size="md" title="Questions before you brief a Shopify project" accent="Shopify project" />
              <p className="mt-5 text-bsm leading-relaxed text-ink/70">Support and commercial terms carried over from the current service page are clearly marked where confirmation is still needed.</p>
              <p className="mt-5 text-bsm">
                <Link href={company.phoneHref} data-event="shopify_phone_click" className="font-semibold text-teal underline underline-offset-4">{company.phoneDisplay}</Link>
              </p>
            </div>
          </div>
          <div className="col-span-8">
            <Accordion group="shopify-faq" items={content.faqs.map(([q, a]) => ({ q, a }))} />
          </div>
        </div>
      </Reveal>
    </Band>
  );
}

export function ShopifyFinalCTA() {
  return (
    <section className="bg-ink text-white">
      <div className="container-omh section-md grid grid-cols-12 items-start gap-x-10 gap-y-10 max-lg:block">
        <Reveal className="col-span-7">
          <h2 className="mb-5 max-w-[20ch] font-serif text-[clamp(30px,24px+1.6vw,42px)] font-normal leading-tight tracking-normal">
            Ready to plan a better <span className="text-[#5fc8bd]">Shopify store?</span>
          </h2>
          <p className="mb-9 max-w-[56ch] text-lead leading-relaxed text-white/75">
            Tell us what you sell, what the current setup is making difficult and what the new store needs to support. We will review the detail and recommend a practical next step.
          </p>
          <div className="flex flex-wrap items-center gap-3.5 max-sm:flex-col max-sm:items-stretch">
            <Button href="/contact" variant="inverse" arrow data-event="shopify_final_cta_click">Discuss Your Shopify Project</Button>
            <Button href="/contact" variant="ghost-white" data-event="shopify_form_start">Send a Store Brief</Button>
          </div>
          <p className="mt-8 text-bsm text-white/65">
            <Link href={company.phoneHref} data-event="shopify_phone_click" className="underline underline-offset-4">{company.phoneDisplay}</Link>
            <span aria-hidden className="px-2.5 text-white/35">/</span>
            <Link href={`mailto:${company.email}`} data-event="shopify_email_click" className="underline underline-offset-4">{company.email}</Link>
          </p>
        </Reveal>

        <Reveal className="col-span-4 col-start-9 max-lg:mt-10">
          <div className="rounded-card border border-white/15 bg-white/[0.04] p-8 max-sm:p-6">
            <p className="mb-6 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-white/55">What happens next</p>
            <ol className="grid gap-5">
              {[
                "Your store brief is reviewed by a real person.",
                "We discuss the products, platform, goals and technical requirements.",
                "You receive a recommendation on package, scope or discovery work.",
              ].map((step, index) => (
                <li key={step} className="grid grid-cols-[auto_1fr] items-start gap-4">
                  <span aria-hidden className="flex size-7 items-center justify-center rounded-full border border-white/25 font-sans text-[13px] font-semibold tabular-nums text-white/80">{index + 1}</span>
                  <span className="text-[16px] leading-snug text-white/85">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
