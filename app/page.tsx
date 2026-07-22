import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { CaseEvidenceFpo, CaseStudyFeature, CaseStudyRow } from "@/components/ui/Case";
import { Eyebrow, Fpo, Section, VerifiedSlot } from "@/components/ui/Proof";
import { featuredCase, finalCta, hero, method, problems, routes, supportingCases } from "@/lib/content/home";

export default function Home() {
  return (
    <>
      {/* Hero — Future Elementor widget: "OMH Home Hero" */}
      <section className="container-omh pb-24 pt-[clamp(64px,42px+3.5vw,104px)] max-sm:pb-16">
        <div className="grid grid-cols-12 gap-x-6 max-lg:block">
          <Reveal className="col-span-8 pr-10 max-lg:pr-0">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="mb-6 mt-6 max-w-[18ch] font-sans text-display font-semibold">
              {hero.headline[0]}
              <span className="whitespace-nowrap shadow-[inset_0_-5px_0_rgba(215,154,55,0.5)]">
                {hero.headline[1]}
              </span>
              {hero.headline[2]}
            </h1>
            <p className="mb-9 max-w-[58ch] text-lead text-ink/80">{hero.standfirst}</p>
            <div className="flex flex-wrap items-center gap-3.5">
              <Button href={hero.primaryCta.href} arrow>
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>

          {/* Proof margin — Future Elementor widget: "OMH Proof Margin" */}
          <Reveal className="col-span-4 border-l border-line pl-8 max-lg:mt-11 max-lg:grid max-lg:grid-cols-3 max-lg:gap-6 max-lg:border-l-0 max-lg:border-t max-lg:pl-0 max-lg:pt-7 max-sm:grid-cols-1">
            <div className="border-b border-line pb-6 max-lg:border-b-0 max-lg:pb-0">
              <p className="mb-2.5 flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.15em] text-muted">
                <span aria-hidden className="text-[10px] text-amber">◈</span> Client rating
              </p>
              <VerifiedSlot>VERIFIED REVIEW SCORE REQUIRED</VerifiedSlot>
              <p className="mt-2 text-sm leading-snug text-muted">
                Google · Clutch · Bark — profile links and current scores to be confirmed.
              </p>
            </div>
            <div className="border-b border-line py-6 max-lg:border-b-0 max-lg:py-0">
              <p className="mb-2.5 flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.15em] text-muted">
                <span aria-hidden className="text-[10px] text-amber">◈</span> Selected clients
              </p>
              <VerifiedSlot>CLIENT LOGOS — PERMISSION REQUIRED</VerifiedSlot>
              <p className="mt-2 text-sm leading-snug text-muted">
                Eight client names found on the current site; each needs written permission.
              </p>
            </div>
            <div className="pt-6 max-lg:pt-0">
              <Fpo
                ratio="4/5"
                tag="Photo · 4:5"
                title="Real team photograph"
                note="Working session, natural light, no staging."
              />
              <p className="mt-2.5 text-[13.5px] leading-snug text-muted">
                <b className="font-semibold text-ink">The OMH team, Essex studio.</b> Caption and
                photo to be supplied.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Audience routes — Future Elementor widget: "OMH Audience Routes" */}
      <Section label="Routes">
        <Reveal>
          <h2 className="mb-4 max-w-[24ch] font-sans text-h2 font-semibold">
            Two ways in, depending on what you sell
          </h2>
          <p className="max-w-[62ch] text-[19px] leading-relaxed text-ink/80">
            The full service range stays available. The journey starts with the outcome you need,
            not a list of everything we do.
          </p>
          <div className="mt-11 grid grid-cols-[7fr_5fr] items-start gap-6 max-lg:grid-cols-1">
            {routes.map((r, i) => (
              <Link
                key={r.title}
                href={r.link.href}
                className={`group block rounded-card border p-10 pb-8 transition hover:-translate-y-0.5 max-sm:p-6 ${
                  i === 1
                    ? "mt-12 border-soft-dark bg-soft max-lg:mt-0"
                    : "border-line bg-white hover:border-muted/50"
                }`}
              >
                <p className="mb-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-teal">
                  {r.kick}
                </p>
                <h3 className="mb-3 font-sans text-h3 font-semibold">{r.title}</h3>
                <p className="mb-5 max-w-[44ch] text-[17px] leading-relaxed text-ink/80">{r.body}</p>
                <span className="inline-flex items-center gap-2 font-semibold text-teal">
                  {r.link.label}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform group-hover:translate-x-1" aria-hidden>
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Problems — text-led editorial (brief §8.5, no cards) */}
      <Section label="Problems">
        <Reveal>
          <p className="mb-11 max-w-[30ch] font-serif text-[clamp(24px,20px+1vw,29px)] leading-snug">
            If any of this sounds familiar, the problem is rarely effort. It is usually{" "}
            <em>structure, measurement, or both.</em>
          </p>
          <div className="grid grid-cols-2 gap-x-14 max-sm:grid-cols-1">
            {problems.map((p) => (
              <p
                key={p}
                className="flex gap-4 border-b border-line py-5 text-[17.5px] leading-relaxed text-ink/85 before:font-bold before:text-amber before:content-['—']"
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Growth solutions — alternating editorial rows (brief §8.6).
          Future Elementor widget: "OMH Solution Row" */}
      <Section label="Method">
        <Reveal>
          <h2 className="font-sans text-h2 font-semibold">Four disciplines, one connected system</h2>
        </Reveal>
        {method.map((m, i) => (
          <Reveal key={m.kick}>
            <div className="grid grid-cols-12 items-center gap-6 border-b border-line py-11 last:border-b-0 max-lg:block">
              <div className={`col-span-5 ${i % 2 ? "order-2 col-start-8" : ""} max-lg:mb-5`}>
                <p className="mb-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-teal">
                  {m.kick}
                </p>
                <h3 className="mb-2.5 font-sans text-h3 font-semibold">{m.title}</h3>
                <p className="mb-3.5 max-w-[46ch] text-[17px] leading-relaxed text-ink/80">{m.body}</p>
                <p className="text-[15.5px] leading-relaxed text-muted">
                  {m.services.map((s, j) => (
                    <span key={s.label}>
                      {j > 0 && " · "}
                      <Link
                        href={s.href}
                        className="font-medium text-ink underline decoration-line underline-offset-4 hover:text-teal hover:decoration-teal"
                      >
                        {s.label}
                      </Link>
                    </span>
                  ))}
                </p>
              </div>
              <div className={`col-span-7 ${i % 2 ? "order-1 col-start-1" : ""}`}>
                <Fpo ratio="16/10" tag={m.fpo.tag} title={m.fpo.title} note={m.fpo.note} />
              </div>
            </div>
          </Reveal>
        ))}
      </Section>

      {/* Results — one featured, two supporting (brief §8.7) */}
      <Section label="Proof" id="proof">
        <Reveal>
          <h2 className="mb-4 max-w-[24ch] font-sans text-h2 font-semibold">
            Results, with the measurement period attached
          </h2>
          <p className="max-w-[62ch] text-[19px] leading-relaxed text-ink/80">
            One featured case study, two supporting. Every figure on the live site will be a
            verified client result, or it will not be published.
          </p>
          <div className="mt-11">
            <CaseStudyFeature c={featuredCase} media={<CaseEvidenceFpo />} />
          </div>
          <div className="mt-7 border-t border-line">
            {supportingCases.map((c) => (
              <CaseStudyRow key={c.sector} c={c} />
            ))}
          </div>
          <p className="mt-4 max-w-[70ch] text-sm text-muted">
            Sectors above come from the eight case studies on the current site. Each will be
            published only once the problem, work, period, and outcome are verified with the client.
          </p>
        </Reveal>
      </Section>

      {/* Final CTA — the page's one ink band (brief §8.12).
          Future Elementor widget: "OMH CTA Band" */}
      <section className="mt-[clamp(64px,42px+3.5vw,104px)] bg-ink text-white">
        <div className="container-omh section-md grid grid-cols-12 items-start gap-6 max-lg:block">
          <Reveal className="col-span-7">
            <h2 className="mb-4 max-w-[22ch] font-serif text-[clamp(30px,24px+1.6vw,40px)] font-normal leading-tight tracking-normal">
              {finalCta.headline}
            </h2>
            <p className="mb-8 max-w-[56ch] text-body text-white/75">{finalCta.body}</p>
            <div className="flex flex-wrap items-center gap-3.5">
              <Button href={finalCta.primary.href} variant="inverse" arrow>
                {finalCta.primary.label}
              </Button>
              <Button href={finalCta.secondary.href} variant="ghost-white">
                {finalCta.secondary.label}
              </Button>
            </div>
          </Reveal>
          <Reveal className="col-span-4 col-start-9 border-l border-white/20 pl-8 max-lg:mt-9 max-lg:border-l-0 max-lg:pl-0">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/55">
              What happens next
            </p>
            {finalCta.nextSteps.map((s) => (
              <p
                key={s.lead}
                className="border-b border-white/15 py-3 text-[15.5px] leading-snug text-white/85 last:border-b-0"
              >
                <b className="font-semibold text-white">{s.lead}</b>
                {s.rest}
              </p>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
