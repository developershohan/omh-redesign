import Link from "next/link";
import { Fragment } from "react";
import { Pointer } from "@/components/Pointer";
import { Reveal } from "@/components/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Button, TextLink } from "@/components/ui/Button";
import { Eyebrow, Fpo, VerifiedSlot } from "@/components/ui/Proof";
import { MediaFrame } from "@/components/ServiceMedia";
import { ServiceBand as Band } from "@/components/services/ServiceBand";
import { googleAdsPpc as content } from "@/lib/content/google-ads-ppc";
import { company } from "@/lib/content/nav";

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
        ) : title}
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
    <span className="inline-flex items-center"><Check className="size-4 text-teal" /><span className="sr-only">Included</span></span>
  ) : (
    <span className="inline-flex items-center"><Minus className="size-4 text-muted/55" /><span className="sr-only">Not included</span></span>
  );
}

export function PpcHero() {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-omh pb-[clamp(56px,38px+2.9vw,88px)] pt-[clamp(48px,34px+2.3vw,80px)]">
        <div className="grid grid-cols-12 items-center gap-x-12 gap-y-12 max-lg:block">
          <div className="col-span-7 max-lg:mb-12">
            <Reveal>
              <Eyebrow>{content.hero.eyebrow}</Eyebrow>
              <h1 className="mb-6 mt-7 max-w-[20ch] font-sans text-h1 font-semibold text-balance">
                Google Ads management built around <span className="text-teal">measurable action</span>
              </h1>
              <p className="mb-9 max-w-[57ch] text-lead leading-relaxed text-ink/75">{content.hero.body}</p>
              <div className="flex flex-wrap items-center gap-3.5 max-sm:flex-col max-sm:items-stretch">
                <Button href={content.hero.primary.href} arrow data-event="ppc_hero_cta_click">{content.hero.primary.label}</Button>
                <Button href={content.hero.secondary.href} variant="secondary" data-event="ppc_view_packages_click">{content.hero.secondary.label}</Button>
              </div>
              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-7">
                {[["Published packages from", "£750"], ["Required ad spend from", "£500"], ["Published set-up time", "14 days"]].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">{label}</dt>
                    <dd className="mt-1.5 font-sans text-h4 font-semibold">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <Reveal className="col-span-5 col-start-8">
            <Pointer><div className="pointer-parallax"><MediaFrame kind="screen" theme="ppc" ratio="16/11" title="Google Ads campaign view" note="Replace with a real, anonymised account view with spend, date range and conversion definition visible." /></div></Pointer>
            <div className="mt-6 border-t border-line pt-5">
              <p className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">Proof to verify before launch</p>
              <div className="flex flex-wrap gap-2.5">
                <VerifiedSlot>Google partner status — pending</VerifiedSlot>
                <VerifiedSlot>PPC client result — pending</VerifiedSlot>
                <VerifiedSlot>Approved client review — pending</VerifiedSlot>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function PpcNeedSection() {
  return (
    <Band label="Need help?">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-10 gap-y-10 max-lg:block">
          <div className="col-span-4 max-lg:mb-10">
            <div className="lg:sticky lg:top-24">
              <SectionIntro size="md" title="Getting Google Ads to work for the business" accent="work for the business" body="The original page lists the campaign tasks. This version starts with the commercial problems those tasks need to solve." />
              <p className="mt-7 border-l-2 border-amber pl-5 font-serif text-[20px] leading-snug text-ink/85">More clicks are not the goal. Useful enquiries, bookings or sales—and reliable evidence of them—are what make optimisation possible.</p>
            </div>
          </div>
          <div className="col-span-8 grid grid-cols-2 gap-x-8 max-md:grid-cols-1">
            {content.problems.map(([title, body], index) => (
              <article key={title} className="group border-t border-line px-3 py-6 transition-colors hover:border-teal/50 hover:bg-white">
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-[12px] font-semibold tracking-[0.1em] text-muted group-hover:text-amber">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-sans text-h4 font-semibold">{title}</h3>
                </div>
                <p className="mt-2.5 pl-10 text-[17px] leading-relaxed text-ink/75">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </Band>
  );
}

export function PpcFitSection() {
  return (
    <Band label="Fit" tone="white">
      <Reveal>
        <SectionIntro title="For businesses ready to measure, learn and improve" accent="measure, learn and improve" body="A useful PPC engagement needs a clear offer, a usable destination, appropriate measurement and realistic expectations about testing." />
        <div className="mt-12 grid grid-cols-12 gap-x-10 gap-y-8 max-lg:block">
          <div className="col-span-7 rounded-card border border-soft-dark bg-soft/70 p-9 max-lg:mb-8 max-sm:p-6">
            <h3 className="flex items-center gap-2.5 font-sans text-h3 font-semibold"><Check className="size-5 text-teal" />A good fit</h3>
            <ul className="mt-6">
              {content.fit.good.map((item) => <li key={item} className="flex gap-3.5 border-b border-soft-dark py-3.5 text-[17px] leading-snug text-ink/85 last:border-b-0 last:pb-0"><Check className="mt-1 size-4 shrink-0 text-teal" />{item}</li>)}
            </ul>
          </div>
          <div className="col-span-5 max-lg:pt-2">
            <h3 className="flex items-center gap-2.5 font-sans text-h3 font-semibold text-muted"><Minus className="size-5" />Not the right engagement</h3>
            <ul className="mt-6 border-t border-line">
              {content.fit.notFit.map((item) => <li key={item} className="border-b border-line py-3.5 text-[16.5px] leading-snug text-muted">{item}</li>)}
            </ul>
          </div>
        </div>
      </Reveal>
    </Band>
  );
}

export function PpcCapabilityGrid() {
  const [featured, ...rest] = content.capabilities;
  return (
    <Band label="Campaign formats">
      <Reveal>
        <SectionIntro title="Four Google Ads formats from the original service page" accent="Four Google Ads formats" body="The right mix depends on search demand, audience eligibility, creative, product data, budget and the commercial goal." />
        <Pointer className="pointer-spotlight relative mt-12 overflow-hidden rounded-card bg-ink p-10 text-white max-sm:p-6">
          <div className="relative z-10 grid grid-cols-12 items-start gap-x-10 gap-y-8 max-lg:block">
            <div className="col-span-6">
              <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-white/55">High-intent demand</p>
              <h3 className="mt-5 font-sans text-h2 font-semibold">{featured.title}</h3>
              <p className="mt-5 max-w-[46ch] text-lead leading-relaxed text-white/75">{featured.body}</p>
            </div>
            <ul className="col-span-5 col-start-8 grid gap-3 border-t border-white/15 pt-6 max-lg:mt-8">
              {featured.detail?.map((line) => <li key={line} className="flex gap-3 text-[17px] leading-snug text-white/85"><Check className="mt-0.5 size-4 shrink-0 text-[#5fc8bd]" />{line}</li>)}
            </ul>
          </div>
        </Pointer>
        <div className="mt-8 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          {rest.map((item, index) => (
            <article key={item.title} className="surface-card rounded-card border border-line bg-white p-7">
              <span className="text-[12px] font-semibold tracking-[0.12em] text-amber">{String(index + 2).padStart(2, "0")}</span>
              <h3 className="mt-5 font-sans text-h4 font-semibold">{item.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-ink/75">{item.body}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </Band>
  );
}

export function PpcProcessSteps() {
  return (
    <Band label="How we help" tone="white">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-10 gap-y-10 max-lg:block">
          <div className="col-span-4 max-lg:mb-10">
            <div className="lg:sticky lg:top-24">
              <SectionIntro size="md" title="A controlled route from account access to optimisation" accent="account access to optimisation" body="The process joins campaign planning, analytics, copywriting, management and reporting—the recurring work listed in the source packages." />
              <div className="mt-8"><TextLink href="/contact" data-event="ppc_form_start">Request an account review</TextLink></div>
            </div>
          </div>
          <ol className="relative col-span-8 border-l border-line pl-9 max-sm:pl-7">
            {content.process.map(([title, body], index) => (
              <li key={title} className="group/step relative pb-10 last:pb-0">
                <span aria-hidden className="absolute -left-[51px] top-0.5 flex size-[30px] items-center justify-center rounded-full border border-line bg-white font-sans text-[13px] font-semibold tabular-nums text-teal transition-colors group-hover/step:border-teal group-hover/step:bg-teal group-hover/step:text-white max-sm:-left-[43px]">{index + 1}</span>
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
            {group.rows.map(([label, key]) => <div key={label} className="flex items-baseline justify-between gap-6 py-2"><dt className="text-muted">{label}</dt><dd className="text-right font-semibold text-ink"><FeatureValue value={pkg.features[key]} /></dd></div>)}
          </div>
        ))}
      </dl>
      <div className="px-6 pb-6"><Button href="/contact" small className="min-h-11 w-full justify-center" data-event="ppc_package_select" data-package={pkg.name}>Discuss this package</Button></div>
    </article>
  );
}

export function PpcPricingPackages() {
  return (
    <Band label="Packages" id="packages">
      <div data-event="ppc_pricing_view">
        <div className="grid grid-cols-12 items-end gap-x-10 gap-y-6 max-lg:block">
          <SectionIntro className="col-span-7" title="All four published PPC packages, compared clearly" accent="compared clearly" body="The source table contains four packages and sixteen comparison points. Every published value is preserved below, including the two exclusions in PPC Seed." />
          <p className="col-span-5 text-bsm leading-relaxed text-ink/70 max-lg:mt-6">Package names do not imply a recommendation. Scope, billing frequency, VAT, ad-spend period and agreement terms should be confirmed in the written proposal.</p>
        </div>
        <div className="mt-12 hidden overflow-x-auto rounded-card border border-line bg-white xl:block">
          <table className="w-full min-w-[1100px] border-collapse text-left text-bsm">
            <caption className="sr-only">Google Ads PPC package comparison by inclusion and price</caption>
            <thead>
              <tr>
                <th scope="col" className="sticky left-0 z-10 w-[240px] bg-white p-6 align-bottom"><span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">Compare packages</span></th>
                {content.packages.map((pkg) => <th key={pkg.name} scope="col" className="border-l border-line bg-soft/40 p-5 align-bottom"><span className="block text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">{pkg.stage}</span><span className="mt-2 block font-sans text-h4 font-semibold">{pkg.name}</span><span className="mt-4 block font-sans text-[32px] font-semibold leading-none tracking-[-0.02em]">{pkg.price}</span></th>)}
              </tr>
              <tr>
                <th scope="col" className="sticky left-0 z-10 bg-white" />
                {content.packages.map((pkg) => <td key={pkg.name} className="border-b-2 border-l border-b-ink border-line bg-soft/40 px-5 pb-5 align-top text-[15px] font-normal leading-snug text-ink/70">{pkg.bestFor}</td>)}
              </tr>
            </thead>
            <tbody>
              {content.packageGroups.map((group) => (
                <Fragment key={group.label}>
                  <tr><th scope="colgroup" colSpan={5} className="border-b border-t border-line bg-warm/50 px-6 py-2.5 text-left text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">{group.label}</th></tr>
                  {group.rows.map(([label, key]) => <tr key={label} className="border-b border-line transition-colors hover:bg-warm/60"><th scope="row" className="sticky left-0 z-10 bg-white p-6 py-4 font-semibold">{label}</th>{content.packages.map((pkg) => <td key={pkg.name} className="border-l border-line p-5 py-4 text-ink/80"><FeatureValue value={pkg.features[key]} /></td>)}</tr>)}
                </Fragment>
              ))}
              <tr><th scope="row" className="sticky left-0 z-10 bg-white p-6 font-semibold">Next step</th>{content.packages.map((pkg) => <td key={pkg.name} className="border-l border-line p-5"><Button href="/contact" small data-event="ppc_package_select" data-package={pkg.name}>Discuss package</Button></td>)}</tr>
            </tbody>
          </table>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:hidden">{content.packages.map((pkg) => <PackageCard key={pkg.name} pkg={pkg} />)}</div>
        <ul className="mt-8 grid gap-2 border-l-2 border-line pl-5 text-[15px] leading-relaxed text-muted">{content.pricingNotes.map((note) => <li key={note}>{note}</li>)}</ul>
      </div>
    </Band>
  );
}

export function PpcProofSection() {
  return (
    <Band label="Proof" tone="white">
      <Reveal>
        <div className="overflow-hidden rounded-card border border-soft-dark bg-soft/60">
          <div className="grid grid-cols-12 gap-x-10 gap-y-8 p-10 max-lg:block max-sm:p-6">
            <div className="col-span-5">
              <Eyebrow>Client work</Eyebrow>
              <h2 className="mb-5 mt-6 font-sans text-h3 font-semibold text-balance">Show spend, measurement and the <span className="text-teal">verified commercial outcome</span></h2>
              <p className="text-body leading-relaxed text-ink/75">Every Google Ads case study we publish includes the date range and what counted as a conversion, so the result can actually be evaluated.</p>
              <ul className="mt-7 border-t border-soft-dark">{["Starting account and business goal", "Campaign and landing-page work", "Spend and measurement period", "Verified lead, sale or efficiency outcome"].map((field) => <li key={field} className="border-b border-soft-dark py-3 text-[15.5px] text-ink/70">{field}</li>)}</ul>
              <div className="mt-7"><TextLink href="/case-studies" data-event="ppc_case_study_click">View case studies</TextLink></div>
            </div>
            <div className="col-span-7 col-start-6 max-lg:mt-9">
              <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
                <Fpo ratio="4/3" tag="Before" title="Account baseline" note="Show an approved starting view and date range." />
                <Fpo ratio="4/3" tag="After" title="Verified PPC result" note="Use the same metric definition and a comparable period." />
              </div>
              <div className="mt-6 rounded-card border border-soft-dark bg-white/70 p-6"><VerifiedSlot>Google ads case study — pending</VerifiedSlot><div className="mt-4 flex flex-wrap gap-3"><VerifiedSlot>Client approval — pending</VerifiedSlot><VerifiedSlot>Result method — pending</VerifiedSlot></div></div>
            </div>
          </div>
        </div>
      </Reveal>
    </Band>
  );
}

export function PpcWhyChooseSection() {
  return (
    <Band label="Why OMH">
      <Reveal>
        <SectionIntro title="Campaign management connected to the website behind every click" accent="website behind every click" body="The old page covers keyword choice, landing-page analysis, tracking, copywriting and regular optimisation. Keeping those parts joined up makes the service easier to evaluate." />
        <div className="mt-12 grid grid-cols-2 gap-x-12 max-lg:grid-cols-1">
          {content.reasons.map(([title, body]) => <article key={title} className="group border-t border-line py-6 transition-colors hover:border-teal/50"><h3 className="flex items-start gap-3 font-sans text-h4 font-semibold"><Check className="mt-1 size-4 shrink-0 text-teal" />{title}</h3><p className="mt-2.5 pl-7 text-[18px] leading-relaxed text-ink/75">{body}</p></article>)}
        </div>
        <div className="mt-12 rounded-card bg-ink p-9 text-white max-sm:p-6">
          <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-white/55">Before increasing spend</p>
          <div className="mt-6 grid grid-cols-3 gap-8 max-lg:grid-cols-1">
            {content.warnings.map(([title, body]) => <article key={title} className="border-t border-white/15 pt-5"><h3 className="font-sans text-h4 font-semibold">{title}</h3><p className="mt-3 text-[16.5px] leading-relaxed text-white/72">{body}</p></article>)}
          </div>
        </div>
      </Reveal>
    </Band>
  );
}

export function PpcFAQAccordion() {
  return (
    <Band label="FAQ" tone="white">
      <Reveal>
        <div className="grid grid-cols-12 gap-x-12 gap-y-8 max-lg:block">
          <div className="col-span-4 max-lg:mb-8"><div className="lg:sticky lg:top-24"><SectionIntro size="md" title="Questions before appointing a PPC agency" accent="PPC agency" /><p className="mt-5 text-bsm leading-relaxed text-ink/70">Ask for written confirmation of scope, access, ad-spend ownership, billing, VAT, agreement length and conversion definitions before signing.</p><p className="mt-5 text-bsm"><Link href={company.phoneHref} data-event="ppc_phone_click" className="font-semibold text-teal underline underline-offset-4">{company.phoneDisplay}</Link></p></div></div>
          <div className="col-span-8"><Accordion group="ppc-faq" items={content.faqs.map(([q, a]) => ({ q, a }))} /></div>
        </div>
      </Reveal>
    </Band>
  );
}

export function PpcFinalCTA() {
  return (
    <section className="bg-ink text-white">
      <div className="container-omh section-md grid grid-cols-12 items-start gap-x-10 gap-y-10 max-lg:block">
        <Reveal className="col-span-7">
          <h2 className="mb-5 max-w-[20ch] font-serif text-[clamp(30px,24px+1.6vw,42px)] font-normal leading-tight tracking-normal">Need a clearer plan for <span className="text-[#5fc8bd]">Google Ads?</span></h2>
          <p className="mb-9 max-w-[56ch] text-lead leading-relaxed text-white/75">Tell us what you sell, where you advertise, what you spend and what a useful conversion means. We will review the starting point and recommend a practical next step.</p>
          <div className="flex flex-wrap items-center gap-3.5 max-sm:flex-col max-sm:items-stretch"><Button href="/contact" variant="inverse" arrow data-event="ppc_final_cta_click">Discuss Google Ads Management</Button><Button href="/contact" variant="ghost-white" data-event="ppc_form_start">Send a Campaign Brief</Button></div>
          <p className="mt-8 text-bsm text-white/65"><Link href={company.phoneHref} data-event="ppc_phone_click" className="underline underline-offset-4">{company.phoneDisplay}</Link><span aria-hidden className="px-2.5 text-white/35">/</span><Link href={`mailto:${company.email}`} data-event="ppc_email_click" className="underline underline-offset-4">{company.email}</Link></p>
        </Reveal>
        <Reveal className="col-span-4 col-start-9 max-lg:mt-10">
          <div className="rounded-card border border-white/15 bg-white/[0.04] p-8 max-sm:p-6">
            <p className="mb-6 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-white/55">What happens next</p>
            <ol className="grid gap-5">{["Your account, website and campaign goal are reviewed by a real person.", "We discuss measurement, budget, targeting, access and the appropriate package.", "You receive a scoped recommendation with exclusions and next actions."].map((step, index) => <li key={step} className="grid grid-cols-[auto_1fr] items-start gap-4"><span aria-hidden className="flex size-7 items-center justify-center rounded-full border border-white/25 font-sans text-[13px] font-semibold tabular-nums text-white/80">{index + 1}</span><span className="text-[16px] leading-snug text-white/85">{step}</span></li>)}</ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
