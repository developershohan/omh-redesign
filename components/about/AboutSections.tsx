import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/ui/FinalCta";
import { ServiceBand } from "@/components/services/ServiceBand";
import { Button } from "@/components/ui/Button";
import { Eyebrow, VerifiedSlot } from "@/components/ui/Proof";
import { about } from "@/lib/content/about";

function AboutBand({ label, ...props }: Omit<Parameters<typeof ServiceBand>[0], "accent">) {
  return <ServiceBand {...props} label={label} accent="bg-[#ef8067]" />;
}

export function AboutHero() {
  return <section className="overflow-hidden border-b border-line bg-[radial-gradient(circle_at_86%_30%,rgba(118,169,232,.2),transparent_27%),linear-gradient(145deg,#fff_0%,#f1f4f6_100%)]"><div className="container-omh section-md"><Reveal><Eyebrow>About Online Marketing Help</Eyebrow><div className="mt-8 grid grid-cols-12 items-end gap-x-12 gap-y-8 max-lg:block"><div className="col-span-8"><h1 className="max-w-[17ch] font-sans text-h1 font-semibold text-balance">How Online Marketing Help works with UK businesses</h1><p className="mt-6 max-w-[60ch] text-lead leading-relaxed text-ink/72">A UK agency that keeps marketing and development specialists in the same room, so the website, the campaigns and the tracking are built around the same goal.</p></div><div className="col-span-4 max-lg:mt-8"><div className="rounded-card border border-line bg-surface/80 p-6"><p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">What we bring together</p><ul className="mt-4 grid gap-2 text-body font-semibold"><li>Websites and development</li><li>Search and paid acquisition</li><li>Social media and content</li><li>Creative and campaign support</li></ul></div></div></div></Reveal></div></section>;
}

export function AboutStory() {
  return <AboutBand label="Our story" tone="white"><Reveal><div className="grid grid-cols-12 gap-x-12 gap-y-10 max-lg:block"><div className="col-span-4 max-lg:mb-9"><p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-amber-deep">A real-talk approach</p><h2 className="mt-5 max-w-[13ch] font-sans text-h2 font-semibold">Built after experiencing the agency problem first-hand.</h2></div><div className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-6 max-md:grid-cols-1">{about.story.map((paragraph,index)=><p key={paragraph} className={`${index===0 ? "text-[19px] font-medium text-ink" : "text-body text-ink/70"} leading-relaxed`}>{paragraph}</p>)}</div></div></Reveal></AboutBand>;
}

export function AboutAwards() {
  return <AboutBand label="Our awards" tone="navy"><Reveal><div className="grid grid-cols-12 gap-x-12 gap-y-10 max-lg:block"><div className="col-span-5 max-lg:mb-9"><p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#9bc3f3]">Mindset is everything</p><h2 className="mt-5 max-w-[13ch] font-sans text-h2 font-semibold">Research, craft and measurable thinking.</h2><div className="mt-7 flex flex-wrap gap-2"><VerifiedSlot>Current award names — pending</VerifiedSlot><VerifiedSlot>Accreditation dates — pending</VerifiedSlot></div></div><div className="col-span-7 space-y-5 text-body leading-relaxed text-oninverse/70">{about.awards.map(item=><p key={item}>{item}</p>)}</div></div></Reveal></AboutBand>;
}

export function AboutSustainability() {
  return <AboutBand label="Sustainability" tone="mist"><Reveal><div className="grid grid-cols-12 gap-x-12 gap-y-9 max-lg:block"><div className="col-span-5 max-lg:mb-8"><p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-amber-deep">Now is the time to act, not tomorrow</p><h2 className="mt-5 max-w-[14ch] font-sans text-h2 font-semibold">A more responsible way to communicate and work.</h2></div><div className="col-span-7 space-y-4 text-body leading-relaxed text-ink/70">{about.sustainability.introduction.map(item=><p key={item}>{item}</p>)}</div></div><div className="mt-11 grid grid-cols-2 gap-5 max-md:grid-cols-1">{about.sustainability.initiatives.map((item,index)=><article key={item.title} className={`${index===0 ? "bg-[#10243a] text-oninverse" : "bg-surface text-ink"} rounded-card border border-[#bfd1e3] p-7`}><span className={`text-[11px] font-semibold ${index===0 ? "text-[#ffac99]" : "text-amber-deep"}`}>0{index+1}</span><h3 className="mt-4 font-sans text-h4 font-semibold">{item.title}</h3><p className={`mt-3 text-body leading-relaxed ${index===0 ? "text-oninverse/68" : "text-ink/70"}`}>{item.body}</p></article>)}</div><div className="mt-7"><VerifiedSlot>Sustainability figures — revalidate before launch</VerifiedSlot></div></Reveal></AboutBand>;
}

export function AboutCharity() {
  return <AboutBand label="Charity" tone="white"><Reveal><div className="grid grid-cols-12 gap-x-12 gap-y-10 max-lg:block"><div className="col-span-4 max-lg:mb-9"><p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-amber-deep">Service of others</p><h2 className="mt-5 max-w-[15ch] font-sans text-h2 font-semibold">Skills, support and meaningful campaigns for good causes.</h2><div className="mt-7"><Button href="/contact" variant="secondary" small>Tell Us About a Charity</Button></div></div><div className="col-span-8"><div className="grid grid-cols-2 gap-x-8 gap-y-6 max-md:grid-cols-1">{about.charity.map((paragraph,index)=><p key={paragraph} className={`${index===0 ? "text-[19px] font-medium" : "text-body text-ink/70"} leading-relaxed`}>{paragraph}</p>)}</div><div className="mt-7"><VerifiedSlot>Charity partnerships — confirm current year</VerifiedSlot></div></div></div></Reveal></AboutBand>;
}

export function AboutTeam() {
  const palette = ["bg-tint-blue", "bg-tint-rose", "bg-tint-green", "bg-tint-rose"];
  return <AboutBand label="Our team" tone="mist"><Reveal><div className="flex items-end justify-between gap-10 max-lg:block"><div><p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-amber-deep">An extension of your team</p><h2 className="mt-5 max-w-[15ch] font-sans text-h2 font-semibold">Specialists who understand how the work connects.</h2></div><p className="max-w-[54ch] text-body leading-relaxed text-ink/68 max-lg:mt-5">Our team covers SEO, social media, PPC, web development, content, creative production, lead generation, finance and client support. Together, they build custom plans around the needs of each business.</p></div><div className="mt-11 grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">{about.team.map(([name,role],index)=><article key={name} className="surface-card overflow-hidden rounded-card border border-[#bfd1e3] bg-surface"><div className={`${palette[index%palette.length]} flex aspect-[5/4] items-center justify-center`}><span className="font-sans text-[clamp(34px,28px+1.8vw,52px)] font-semibold text-ink/28" aria-hidden>{name.slice(0,2).toUpperCase()}</span></div><div className="p-5"><h3 className="font-sans text-h4 font-semibold">{name}</h3><p className="mt-1 text-[13px] uppercase tracking-[0.1em] text-muted">{role}</p></div></article>)}</div><div className="mt-7"><VerifiedSlot>Current roster — confirm before launch</VerifiedSlot></div></Reveal></AboutBand>;
}

export function AboutFinalCTA() {
  return (
    <FinalCta
      title="Bring the right specialists into your next stage of growth."
      titleAccent="next stage of growth."
      body="Tell us what you are trying to achieve. We’ll recommend the services, people and next steps that fit."
      primary={{ label: "Meet the Team", event: "about_final_cta_click" }}
      contactEvents={{ phone: "about_phone_click", email: "about_email_click" }}
    />
  );
}
