import { Reveal } from "@/components/Reveal";
import { ServiceFaqSection } from "@/components/services/ServiceFaqSection";
import { ServiceBand, type ServiceBandTone } from "@/components/services/ServiceBand";
import { CheckIcon as Check } from "@/components/services/ServicePrimitives";
import { Button } from "@/components/ui/Button";
import { Eyebrow, VerifiedSlot } from "@/components/ui/Proof";
import { SiteTestimonials } from "@/components/Testimonials";
import { socialMediaMarketing as content } from "@/lib/content/social-media-marketing";
import { company } from "@/lib/content/nav";

function Band({ tone = "white", ...props }: Omit<Parameters<typeof ServiceBand>[0], "accent" | "tone"> & { tone?: ServiceBandTone }) {
  return <ServiceBand {...props} tone={tone} accent="bg-[#ef8067]" />;
}

function SocialDashboard() {
  return (
    <div className="service-media-frame relative overflow-hidden rounded-card border border-[#b8cde3] bg-[#10243a] p-5 text-white shadow-xl" role="img" aria-label="Illustrated social media campaign planning dashboard">
      <div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9bc3f3]">Campaign studio</span><span className="flex gap-1.5"><i className="size-2 rounded-full bg-[#ef8067]" /><i className="size-2 rounded-full bg-[#76a9e8]" /><i className="size-2 rounded-full bg-white/30" /></span></div>
      <div className="mt-5 grid grid-cols-[1.2fr_.8fr] gap-4 max-sm:grid-cols-1">
        <div className="rounded-xl bg-white p-5 text-[#10243a]"><p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#3d709f]">Content calendar</p><div className="mt-4 grid grid-cols-4 gap-2">{Array.from({ length: 12 }).map((_, i) => <span key={i} className={`aspect-square rounded-md ${[1,4,6,9,10].includes(i) ? "bg-[#ef8067]" : i === 7 ? "bg-[#76a9e8]" : "bg-[#e8eff6]"}`} />)}</div><div className="mt-5 h-2 rounded-full bg-[#dbe7f2]"><span className="block h-full w-[72%] rounded-full bg-[#d79a37]" /></div></div>
        <div className="grid gap-4"><div className="rounded-xl border border-white/12 bg-white/[0.045] p-4"><p className="text-[10px] uppercase tracking-[0.13em] text-white/50">Channels</p><p className="mt-2 font-sans text-[26px] font-semibold">4</p></div><div className="rounded-xl border border-white/12 bg-white/[0.045] p-4"><p className="text-[10px] uppercase tracking-[0.13em] text-white/50">Status</p><p className="mt-2 text-[14px] font-semibold text-[#a8dfd8]">Ready for review</p></div></div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] font-semibold uppercase tracking-[0.1em] text-white/55"><span className="rounded-lg border border-white/10 py-3">Create</span><span className="rounded-lg border border-white/10 py-3">Approve</span><span className="rounded-lg border border-white/10 py-3">Report</span></div>
    </div>
  );
}

export function SocialHero() {
  return (
    <section className="border-b border-line bg-[radial-gradient(circle_at_86%_28%,rgba(239,128,103,.2),transparent_27%),linear-gradient(145deg,#fff_0%,#f6eef3_100%)]">
      <div className="container-omh pb-[clamp(56px,38px+2.9vw,88px)] pt-[clamp(48px,34px+2.3vw,80px)]">
        <div className="grid grid-cols-12 items-center gap-x-12 gap-y-12 max-lg:block">
          <Reveal className="col-span-7 max-lg:mb-12"><Eyebrow>{content.hero.eyebrow}</Eyebrow><h1 className="mb-6 mt-7 max-w-[18ch] font-sans text-h1 font-semibold text-balance">{content.hero.title}</h1><p className="mb-9 max-w-[58ch] text-lead leading-relaxed text-ink/75">{content.hero.body}</p><div className="flex flex-wrap gap-3.5 max-sm:flex-col"><Button href="/contact" arrow data-event="social_hero_cta_click">Discuss Social Media Support</Button><Button href="#packages" variant="secondary" data-event="social_packages_click">View Social Media Packages</Button></div><dl className="mt-10 grid max-w-[650px] grid-cols-3 border-t border-line pt-7 max-sm:grid-cols-1 max-sm:gap-5">{[["Packages from", "£450"], ["Published term", "3 months"], ["Onboarding", "24 hours"]].map(([label,value]) => <div key={label} className="border-l border-line pl-5 first:border-l-0 first:pl-0 max-sm:border-l-0 max-sm:pl-0"><dt className="text-[11.5px] font-semibold uppercase tracking-[0.13em] text-muted">{label}</dt><dd className="mt-1.5 font-sans text-h4 font-semibold">{value}</dd></div>)}</dl></Reveal>
          <Reveal className="col-span-5"><SocialDashboard /><div className="mt-5 flex flex-wrap gap-2"><VerifiedSlot>Current social case study — pending</VerifiedSlot><VerifiedSlot>Current channel credentials — pending</VerifiedSlot></div></Reveal>
        </div>
      </div>
    </section>
  );
}

export function SocialGoals() {
  return <Band label="Define the goal" tone="navy"><Reveal><div className="grid grid-cols-12 gap-x-12 gap-y-10 max-lg:block"><div className="col-span-5 max-lg:mb-10"><p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#9bc3f3]">Need help?</p><h2 className="mt-5 max-w-[14ch] font-sans text-h2 font-semibold">Start with the outcome, not the posting schedule.</h2><p className="mt-5 max-w-[48ch] text-[17px] leading-relaxed text-white/68">Social media marketing can include text, images, video, community activity and paid advertising. A clear strategy keeps those activities connected to the business goal.</p></div><ol className="col-span-7 grid grid-cols-2 gap-4 max-md:grid-cols-1">{content.goals.map((goal,index)=><li key={goal} className="rounded-card border border-white/12 bg-white/[0.04] p-6"><span className="text-[11px] font-semibold text-[#ef8067]">0{index+1}</span><p className="mt-4 text-[17px] leading-relaxed text-white/82">{goal}</p></li>)}</ol></div><div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-white/12 pt-6"><p className="max-w-[70ch] text-[13px] leading-relaxed text-white/46">Platform audience figures move constantly, so we work from current platform documentation at planning stage rather than quoting a number here. [CONFIRM SERVICE DETAIL]</p><Button href="/contact" variant="ghost-white" small>Talk Through Your Goals</Button></div></Reveal></Band>;
}

export function SocialSupport() {
  return <Band label="How we can help" tone="mist"><Reveal><div className="flex items-end justify-between gap-10 max-lg:block"><h2 className="max-w-[17ch] font-sans text-h2 font-semibold">Creative, optimisation and account support in one joined-up service.</h2><p className="max-w-[51ch] text-[17px] leading-relaxed text-[#10243a]/68 max-lg:mt-5">From branded assets and profile design through to account refreshes and review management.</p></div><div className="mt-11 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">{content.support.map((item,index)=><article key={item.title} className="surface-card rounded-card border border-[#bfd1e3] bg-white p-7"><span className="text-[11px] font-semibold text-[#d56d47]">0{index+1}</span><h3 className="mt-4 font-sans text-h4 font-semibold">{item.title}</h3><p className="mt-3 text-[16px] leading-relaxed text-ink/70">{item.body}</p></article>)}</div></Reveal></Band>;
}

export function SocialPricing() {
  return <Band label="Published packages" id="packages"><Reveal><div className="grid grid-cols-12 items-end gap-x-10 gap-y-6 max-lg:block"><div className="col-span-7"><h2 className="max-w-[17ch] font-sans text-h2 font-semibold">Transparent packages for small businesses that want to grow.</h2></div><p className="col-span-5 text-[17px] leading-relaxed text-ink/68 max-lg:mt-5">The three original prices, channel volumes and inclusions are preserved below.</p></div><div className="mt-11 grid grid-cols-3 gap-6 max-lg:grid-cols-1">{content.packages.map((pkg,index)=><article key={pkg.name} className={`rounded-card border p-7 ${index===1 ? "border-[#ef8067] bg-[#fff7f4]" : "border-line bg-white"}`}><p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#3d709f]">0{index+1} · Social media marketing</p><h3 className="mt-4 font-sans text-h3 font-semibold">{pkg.name}</h3><p className="mt-2 text-[15px] leading-relaxed text-muted">{pkg.bestFor}</p><p className="mt-6 border-y border-line py-5 font-sans text-[36px] font-semibold">{pkg.price}<span className="ml-1 text-[13px] font-normal text-muted">published price</span></p><ul className="mt-5 grid gap-2.5">{pkg.features.map(feature=><li key={feature} className="flex gap-3 text-[14px] leading-relaxed text-ink/74"><Check className="mt-0.5 size-4 shrink-0 text-amber-deep" />{feature}</li>)}</ul><div className="mt-7"><Button href="/contact" small data-event="social_package_select" data-package={pkg.name}>Discuss {pkg.name}</Button></div></article>)}</div><div className="mt-8 rounded-card border border-line bg-warm p-6 text-[14.5px] leading-relaxed text-muted"><p>Packages include copywriting and content creation aligned to your existing brand. If you do not have an established brand palette, we can discuss the separate options available.</p><p className="mt-3">Social creative includes one review. Content may be adapted across platforms and optimised for each channel. The published packages have a minimum three-month term.</p></div></Reveal></Band>;
}

export function SocialGuaranteeAndReporting() {
  return <><Band label="Guarantee" tone="navy"><Reveal><div className="grid grid-cols-12 gap-x-12 gap-y-9 max-lg:block"><div className="col-span-5 max-lg:mb-8"><p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#9bc3f3]">Don’t just take our word for it</p><h2 className="mt-5 max-w-[14ch] font-sans text-h2 font-semibold">A published money-back promise, ready for final terms.</h2></div><div className="col-span-7"><p className="text-[18px] leading-relaxed text-white/72">Our experience gives us confidence in the work. [CONFIRM SERVICE DETAIL — exact guarantee terms] Deciding to work together easier.</p><p className="mt-4 text-[18px] leading-relaxed text-white/72">Start working with Online Marketing Help to move your business forward.</p><div className="mt-6"><VerifiedSlot>Guarantee terms and eligibility — confirm before launch</VerifiedSlot></div></div></div></Reveal></Band><Band label="Resources" tone="mist"><Reveal><div className="grid grid-cols-12 gap-x-12 gap-y-9 max-lg:block"><div className="col-span-4 max-lg:mb-8"><p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#3d709f]">Looking for more information?</p><h2 className="mt-5 max-w-[14ch] font-sans text-h2 font-semibold">Reporting that stays tied to your goals.</h2></div><div className="col-span-8 space-y-5 text-[17px] leading-relaxed text-[#10243a]/70"><p>Your account manager provides regular monthly updates and a consultation call so there is enough data to explain what has been achieved, where your objectives stand and whether the campaign is meeting or exceeding them.</p><p>Your report is tailored to the goals you set, without burying you in irrelevant detail. If you want to understand a specific part of the work, use the monthly call to ask. The purpose is to make achievements, results and month-on-month progress clear.</p></div></div></Reveal></Band></>;
}

export function SocialReviews() {
  return <SiteTestimonials eventPrefix="social" title="What customers say." body="Eight unique testimonials were present in the original source carousel. Duplicate carousel slides have been removed." accent="bg-[#ef8067]" />;
}

export function SocialFAQ() {
  return (
    <ServiceFaqSection
      label="FAQs"
      title="Looking for more information?"
      description="The eleven questions we are asked most often."
      items={content.faqs}
      group="social-faq"
      tone="mist"
      bandAccent="bg-[#ef8067]"
      headingSize="lg"
      headingMaxWidthClassName="max-w-[13ch]"
      descriptionClassName="max-w-[42ch] text-[17px] text-[#10243a]/68"
      sticky={false}
    />
  );
}

export function SocialFinalCTA() {
  return <section className="bg-[#76a9e8] text-[#10243a]"><div className="container-omh section-md grid grid-cols-12 items-center gap-10 max-lg:block"><Reveal className="col-span-8"><p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#10243a]/55">Free consultation · Get in touch</p><h2 className="mt-5 max-w-[22ch] font-sans text-h2 font-semibold">Want your social media handled consistently?</h2><p className="mt-5 max-w-[58ch] text-lead leading-relaxed text-[#10243a]/70">Book a call at a convenient time, or speak to the team on <a className="font-semibold underline underline-offset-4" href={company.phoneHref}>{company.phoneDisplay}</a>.</p></Reveal><Reveal className="col-span-4 max-lg:mt-8"><Button href="/contact" variant="inverse" arrow data-event="social_final_cta_click">Discuss Social Media Support</Button></Reveal></div></section>;
}
