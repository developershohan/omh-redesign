import type { ReactNode } from "react";
import { Pointer } from "@/components/Pointer";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/ui/FinalCta";
import { MediaFrame } from "@/components/ServiceMedia";
import { ServiceFaqSection } from "@/components/services/ServiceFaqSection";
import { ServiceBand } from "@/components/services/ServiceBand";
import {
  CheckIcon as Check,
  FeatureValue,
} from "@/components/services/ServicePrimitives";
import { Button, TextLink } from "@/components/ui/Button";
import { Eyebrow, VerifiedSlot } from "@/components/ui/Proof";
import { amazonPpc as content } from "@/lib/content/amazon-ppc";

type Package = (typeof content.packages)[number];

function SectionShell({
  label,
  id,
  dark = false,
  children,
}: {
  label: string;
  id?: string;
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <ServiceBand label={label} id={id} tone={dark ? "dark" : "white"} accent="bg-[#ff9900]">
      {children}
    </ServiceBand>
  );
}

export function AmazonPpcHero() {
  return (
    <section className="border-b border-line">
      <div className="container-omh pb-[clamp(56px,38px+2.9vw,88px)] pt-[clamp(48px,34px+2.3vw,80px)]">
        <div className="grid grid-cols-12 items-center gap-x-12 gap-y-12 max-lg:block">
          <Reveal className="col-span-7 max-lg:mb-12">
            <Eyebrow>{content.hero.eyebrow}</Eyebrow>
            <h1 className="mb-6 mt-7 max-w-[19ch] font-sans text-h1 font-semibold text-balance">
              Amazon PPC built around <span className="text-amber-deep">products, profit and control</span>
            </h1>
            <p className="mb-9 max-w-[58ch] text-lead leading-relaxed text-ink/75">{content.hero.body}</p>
            <div className="flex flex-wrap gap-3.5 max-sm:flex-col max-sm:items-stretch">
              <Button href={content.hero.primary.href} arrow data-event="amazon_hero_cta_click">{content.hero.primary.label}</Button>
              <Button href={content.hero.secondary.href} variant="secondary" data-event="amazon_packages_click">{content.hero.secondary.label}</Button>
            </div>
            <dl className="mt-10 grid max-w-[690px] grid-cols-3 border-t border-line pt-7 max-sm:grid-cols-1 max-sm:gap-5">
              {[["Packages from", "£750"], ["Required ad spend from", "£500"], ["Published set-up time", "14 days"]].map(([label, value]) => (
                <div key={label} className="border-l border-line pl-5 first:border-l-0 first:pl-0 max-sm:border-l-0 max-sm:pl-0">
                  <dt className="text-[11.5px] font-semibold uppercase tracking-[0.13em] text-muted">{label}</dt>
                  <dd className="mt-1.5 font-sans text-h4 font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal className="col-span-5">
            <Pointer>
              <div className="pointer-parallax">
                <MediaFrame kind="screen" theme="amazon" ratio="16/11" title="Amazon advertising account view" note="Replace with an approved, anonymised account showing date range, spend and attributed sales." />
              </div>
            </Pointer>
            <div className="mt-6 flex flex-wrap gap-2.5 border-t border-line pt-5">
              <VerifiedSlot>Amazon PPC case study — pending</VerifiedSlot>
              <VerifiedSlot>Approved client review — pending</VerifiedSlot>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function AmazonAccountDiagnosis() {
  return (
    <SectionShell label="Account diagnosis">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-12 gap-y-9 max-lg:block">
          <div className="col-span-4 max-lg:mb-9">
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-amber-deep">Is the account learning?</p>
            <h2 className="mt-5 max-w-[14ch] font-sans text-h2 font-semibold">Six signs Amazon advertising needs attention.</h2>
            <p className="mt-5 max-w-[42ch] text-body leading-relaxed text-ink/70">Dozens of tasks sit under Amazon PPC. This diagnosis groups them around the problems a seller can actually recognise.</p>
            <div className="mt-8"><TextLink href="/contact" data-event="amazon_account_review_click">Request an account review</TextLink></div>
          </div>
          <div className="col-span-8 grid grid-cols-2 border-l border-t border-line max-md:grid-cols-1">
            {content.problems.map(([title, body], index) => (
              <article key={title} className="group border-b border-r border-line p-7 transition-colors hover:bg-tint-amber max-sm:p-5">
                <span className="text-[11px] font-semibold tracking-[0.14em] text-amber-deep">0{index + 1}</span>
                <h3 className="mt-4 font-sans text-h4 font-semibold">{title}</h3>
                <p className="mt-3 text-body leading-relaxed text-ink/70">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

export function AmazonCampaignMap() {
  return (
    <SectionShell label="Advertising formats" dark>
      <Reveal>
        <div className="flex items-end justify-between gap-10 max-lg:block">
          <h2 className="max-w-[18ch] font-sans text-h2 font-semibold">A campaign mix shaped around the shopper journey.</h2>
          <p className="max-w-[48ch] text-body leading-relaxed text-oninverse/65 max-lg:mt-5">Four Amazon advertising formats. Availability and suitability depend on account eligibility, catalogue, brand registration, creative and budget.</p>
        </div>
        <div className="mt-12 grid grid-cols-12 gap-5">
          {content.campaignTypes.map((item, index) => (
            <article key={item.title} className={`${index === 0 || index === 3 ? "col-span-7" : "col-span-5"} rounded-card border border-oninverse/12 bg-oninverse/[0.035] p-7 transition-colors hover:border-[#ff9900]/55 hover:bg-[#ff9900]/[0.045] max-lg:col-span-6 max-md:col-span-12`}>
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.15em] text-[#ffb84d]">{item.label}</p>
                  <h3 className="mt-4 font-sans text-h3 font-semibold">{item.title}</h3>
                </div>
                <span aria-hidden className="font-sans text-[38px] font-semibold leading-none text-oninverse/[0.08]">0{index + 1}</span>
              </div>
              <p className="mt-4 max-w-[55ch] text-body leading-relaxed text-oninverse/68">{item.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {item.detail.map((detail) => <li key={detail} className="rounded-full border border-oninverse/12 px-3 py-1.5 text-[14px] font-medium text-oninverse/72">{detail}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}

export function AmazonProcess() {
  return (
    <SectionShell label="How it is delivered">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-10 gap-y-9 max-lg:block">
          <div className="col-span-4 max-lg:mb-9">
            <h2 className="max-w-[14ch] font-sans text-h2 font-semibold">From catalogue context to controlled optimisation.</h2>
            <p className="mt-5 max-w-[42ch] text-body leading-relaxed text-ink/70">Each stage should end with a decision, not another page of unexplained metrics.</p>
          </div>
          <ol className="col-span-8 grid grid-cols-2 gap-x-8 max-md:grid-cols-1">
            {content.process.map(([title, body], index) => (
              <li key={title} className={`${index === content.process.length - 1 ? "md:col-span-2" : ""} border-t border-line py-6`}>
                <div className="flex gap-5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-tint-amber text-[12px] font-semibold text-amber-deep">{index + 1}</span>
                  <div><h3 className="font-sans text-h4 font-semibold">{title}</h3><p className="mt-2.5 text-body leading-relaxed text-ink/70">{body}</p></div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </SectionShell>
  );
}

function PackageCard({ pkg, index }: { pkg: Package; index: number }) {
  return (
    <article className="flex min-h-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-[0_20px_65px_-55px_rgba(45,30,10,.8)]">
      <div className={`${index === 3 ? "bg-[#211a12] text-oninverse" : "bg-tint-amber"} p-6`}>
        <p className={`text-[11px] font-semibold uppercase tracking-[0.15em] ${index === 3 ? "text-[#ffb84d]" : "text-amber-deep"}`}>{pkg.stage}</p>
        <h3 className="mt-3 font-sans text-h4 font-semibold">{pkg.name}</h3>
        <p className="mt-4 font-sans text-[36px] font-semibold leading-none">{pkg.price}</p>
        <p className={`mt-4 text-body leading-relaxed ${index === 3 ? "text-oninverse/68" : "text-ink/68"}`}>{pkg.bestFor}</p>
      </div>
      <dl className="grid grid-cols-2 border-b border-line p-6 text-label">
        <div><dt className="text-muted">Included hours*</dt><dd className="mt-1 font-semibold">{pkg.features.includedHours}</dd></div>
        <div><dt className="text-muted">Required ad spend</dt><dd className="mt-1 font-semibold">{pkg.features.requiredAdSpend}</dd></div>
      </dl>
      <details className="group flex-1 border-b border-line px-6 py-4">
        <summary className="flex cursor-pointer list-none items-center justify-between font-semibold [&::-webkit-details-marker]:hidden">Full package details <span aria-hidden className="text-xl text-amber-deep transition-transform group-open:rotate-45">+</span></summary>
        <div className="mt-4">
          {content.packageGroups.map((group) => (
            <div key={group.label} className="border-t border-line py-4 first:border-t-0 first:pt-0">
              <p className="mb-2 text-[10.5px] font-semibold uppercase tracking-[0.13em] text-muted">{group.label}</p>
              {group.rows.map(([label, key]) => (
                <div key={label} className="flex items-baseline justify-between gap-4 py-1.5 text-label"><dt className="text-muted">{label}</dt><dd className="text-right font-semibold"><FeatureValue value={pkg.features[key]} includedClassName="text-amber-deep" /></dd></div>
              ))}
            </div>
          ))}
        </div>
      </details>
      <div className="p-6"><Button href="/contact" small className="w-full justify-center" data-event="amazon_package_select" data-package={pkg.name}>Discuss this package</Button></div>
    </article>
  );
}

export function AmazonPricing() {
  return (
    <section id="packages" className="border-b border-line bg-tint-amber">
      <div className="container-omh section-md" data-event="amazon_pricing_view">
        <Reveal>
          <div className="grid grid-cols-12 items-end gap-x-10 gap-y-7 max-lg:block">
            <div className="col-span-7"><Eyebrow>Published Amazon PPC packages</Eyebrow><h2 className="mt-6 max-w-[18ch] font-sans text-h2 font-semibold">Four tiers with the detail available on demand.</h2></div>
            <p className="col-span-5 text-body leading-relaxed text-ink/70 max-lg:mt-5">Core figures stay visible; full inclusions expand inside each card, keeping the page easier to scan without dropping the original package content.</p>
          </div>
          <div className="mt-12 grid grid-cols-4 gap-5 max-xl:grid-cols-2 max-sm:grid-cols-1">
            {content.packages.map((pkg, index) => <PackageCard key={pkg.name} pkg={pkg} index={index} />)}
          </div>
          <ul className="mt-8 grid gap-2 border-l-2 border-[#ff9900] pl-5 text-body leading-relaxed text-muted">
            {content.pricingNotes.map((note) => <li key={note}>{note}</li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function AmazonProofGuide() {
  return (
    <SectionShell label="Proof and preparation" dark>
      <Reveal>
        <div className="grid grid-cols-12 items-center gap-x-12 gap-y-10 max-lg:block">
          <div className="col-span-5 max-lg:mb-9">
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#ffb84d]">Before increasing spend</p>
            <h2 className="mt-5 max-w-[15ch] font-sans text-h2 font-semibold">Use a real account story, with the measurement explained.</h2>
            <p className="mt-5 text-body leading-relaxed text-oninverse/68">An approved Amazon example belongs here, stating the products, date range, spend, attribution window and commercial context. [VERIFIED CASE STUDY REQUIRED]</p>
            <ul className="mt-7 grid gap-3 border-t border-oninverse/12 pt-5 text-body text-oninverse/72">
              {["Starting account and catalogue context", "Campaign and listing work completed", "Spend and comparison period", "Verified outcome with metric definitions"].map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-[#ffb84d]" />{item}</li>)}
            </ul>
            <div className="mt-7"><TextLink href="/case-studies" className="text-[#ffb84d] hover:text-[#ffc96f]" data-event="amazon_case_study_click">View case studies</TextLink></div>
          </div>
          <div className="col-span-7">
            <MediaFrame kind="image" theme="amazon" ratio="16/10" title="Verified Amazon PPC case study" note="Replace with approved product imagery and a comparable before-and-after account view." />
            <div className="mt-5 flex flex-wrap gap-2"><VerifiedSlot>Client approval — pending</VerifiedSlot><VerifiedSlot>Result method — pending</VerifiedSlot></div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

export function AmazonFAQ() {
  return (
    <ServiceFaqSection
      label="Amazon PPC FAQ"
      title="Questions before appointing an Amazon PPC agency."
      description="Confirm access, ownership, ad spend, VAT, agreement length, platform eligibility and attribution definitions in the written proposal."
      items={content.faqs.map(([q, a]) => ({ q, a }))}
      group="amazon-faq"
      phoneEvent="amazon_phone_click"
      headingSize="lg"
      headingMaxWidthClassName="max-w-[13ch]"
      bandAccent="bg-[#ff9900]"
    />
  );
}

export function AmazonFinalCTA() {
  return (
    <FinalCta
      title="Ready to make Amazon ad spend easier to understand?"
      titleAccent="easier to understand?"
      body="Tell us what you sell, where you advertise, your current spend and the account problem you want to solve. We will recommend a practical next step."
      primary={{ label: "Discuss Amazon PPC", event: "amazon_final_cta_click" }}
      secondary={{
        label: "Send an Account Brief",
        // No Amazon-specific quote form exists on the live site; the PPC one
        // is the nearest real destination.
        href: "/ppc-request-quote",
        event: "amazon_brief_start",
      }}
      contactEvents={{ phone: "amazon_phone_click", email: "amazon_email_click" }}
    />
  );
}
