import Link from "next/link";
import { Check, Minus, ArrowUpRight, MoveRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { MediaFrame } from "@/components/ServiceMedia";
import { Accordion } from "@/components/ui/Accordion";
import { ArrowRight, Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Proof";
import { SolutionLeadForm } from "@/components/solutions/SolutionLeadForm";
import { solutionOrder, solutions, type SolutionPageContent } from "@/lib/content/solutions";

function SolutionHero({ content }: { content: SolutionPageContent }) {
  return (
    <section className="solution-hero relative overflow-hidden border-b border-line bg-warm">
      <div className="solution-orbit" aria-hidden />
      <div className="container-omh grid min-h-[690px] grid-cols-[minmax(0,1.05fr)_minmax(390px,.75fr)] items-center gap-[clamp(48px,7vw,110px)] py-[clamp(64px,7vw,105px)] max-lg:min-h-0 max-lg:grid-cols-1">
        <Reveal className="relative z-10">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h1 className="mt-7 max-w-[14ch] font-sans text-display font-semibold text-balance max-lg:max-w-[18ch]">
            {content.title} <span className="text-amber-deep">{content.titleAccent}</span>
          </h1>
          <p className="mt-7 max-w-[62ch] text-[19px] leading-[1.65] text-ink/72">{content.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3 max-sm:flex-col">
            <Button href="#enquire" arrow data-event={`${content.slug}_hero_primary_click`}>
              {content.primaryCta}
            </Button>
            <Button href="#approach" variant="secondary" data-event={`${content.slug}_hero_secondary_click`}>
              {content.secondaryCta}
            </Button>
          </div>
          <div className="mt-11 grid max-w-[760px] grid-cols-3 border-y border-line max-sm:grid-cols-1 max-sm:divide-y max-sm:divide-line">
            {content.heroPoints.map((point, index) => (
              <p key={point} className="flex min-h-20 items-center gap-3 pr-5 text-body font-semibold text-ink/68 max-sm:min-h-14 max-sm:py-3">
                <span className="text-[12px] tabular-nums text-amber-deep">0{index + 1}</span>
                {point}
              </p>
            ))}
          </div>
        </Reveal>

        {/* pb reserves room for the badge below the panel — it used to overhang
            the card and cover the closing caption on every solution page. */}
        <Reveal className="relative z-10 pb-24 max-lg:mx-auto max-lg:w-full max-lg:max-w-[760px] max-sm:pb-20">
          <div className={`solution-signal solution-signal-${content.theme} relative aspect-[4/5] overflow-hidden rounded-[10px] border border-oninverse/10 bg-inverse p-7 text-oninverse shadow-[0_36px_90px_-44px_rgb(16_24_40/.72)] max-lg:aspect-[16/10] max-sm:aspect-auto max-sm:min-h-[520px] max-sm:p-5`}>
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:42px_42px]" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between border-b border-oninverse/12 pb-4 text-[12px] uppercase tracking-[0.14em] text-oninverse/55">
                <span>Growth path</span>
                <span className="size-2 rounded-full bg-[#f2c675] shadow-[0_0_0_6px_rgb(242_198_117/.12)]" />
              </div>
              <div className="py-8">
                {content.signal.split(" → ").map((item, index, all) => (
                  <div key={item}>
                    <div className="flex items-center justify-between gap-5 border border-oninverse/12 bg-oninverse/[0.055] px-5 py-5 backdrop-blur-sm">
                      {/* Source strings are mid-sentence fragments, so the step
                          labels arrived as "Acquisition → product confidence". */}
                      <span className="font-sans text-[clamp(19px,2vw,26px)] font-semibold first-letter:uppercase">
                        {item}
                      </span>
                      <span className="text-[12px] tabular-nums text-[#f5d394]">0{index + 1}</span>
                    </div>
                    {index < all.length - 1 && <div className="ml-7 h-8 w-px bg-[#f2c675]/55" />}
                  </div>
                ))}
              </div>
              <div className="border-t border-oninverse/12 pt-4 text-[14px] leading-relaxed text-oninverse/55">
                One connected journey. Measured against the action that matters.
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 -left-7 rounded-[8px] bg-teal px-5 py-4 text-white shadow-[0_18px_45px_-22px_rgb(215_154_55/.8)] max-sm:left-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-inverse/70">Starting point</p>
            <p className="mt-1 font-sans text-body font-semibold">Find the real constraint</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProblemSection({ content }: { content: SolutionPageContent }) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-omh section-lg">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-[clamp(40px,7vw,104px)] gap-y-10 max-lg:block">
            <div className="col-span-5 lg:sticky lg:top-28 lg:self-start max-lg:mb-10">
              <Eyebrow>{content.problem.eyebrow}</Eyebrow>
              <h2 className="mt-6 max-w-[15ch] font-sans text-h2 font-semibold text-balance">{content.problem.title}</h2>
              <p className="mt-6 max-w-[50ch] text-body leading-relaxed text-ink/70">{content.problem.intro}</p>
            </div>
            <div className="col-span-7 border-t border-line">
              {content.problem.symptoms.map((item, index) => (
                <article key={item.title} className="grid grid-cols-[56px_1fr] gap-5 border-b border-line py-8 max-sm:grid-cols-[38px_1fr]">
                  <span className="pt-1 font-sans text-[13px] font-semibold tabular-nums text-amber">0{index + 1}</span>
                  <div>
                    <h3 className="font-sans text-h4 font-semibold">{item.title}</h3>
                    <p className="mt-3 max-w-[58ch] text-body leading-relaxed text-ink/68">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function OutcomesSection({ content }: { content: SolutionPageContent }) {
  return (
    <section className="dark-grid border-b border-oninverse/10 bg-inverse text-oninverse">
      <div className="container-omh section-lg">
        <Reveal>
          <div className="max-w-[850px]">
            <Eyebrow light>What better looks like</Eyebrow>
            <h2 className="mt-6 max-w-[18ch] font-sans text-h2 font-semibold text-balance">{content.outcomes.title}</h2>
            <p className="mt-5 max-w-[60ch] text-body leading-relaxed text-oninverse/65">{content.outcomes.intro}</p>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-0 border-y border-oninverse/15 max-md:grid-cols-1 max-md:divide-y max-md:divide-oninverse/15">
            {content.outcomes.items.map((item) => (
              <article key={item.number} className="min-h-[320px] border-r border-oninverse/15 px-8 py-9 first:pl-0 last:border-r-0 max-md:min-h-0 max-md:border-r-0 max-md:px-0">
                <span className="font-sans text-[13px] font-semibold text-[#f5d394]">{item.number}</span>
                <h3 className="mt-16 max-w-[15ch] font-sans text-[clamp(24px,2vw,31px)] font-semibold leading-tight max-md:mt-7">{item.title}</h3>
                <p className="mt-5 max-w-[40ch] text-body leading-relaxed text-oninverse/62">{item.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MediaSection({ content }: { content: SolutionPageContent }) {
  return (
    <section className="overflow-hidden border-b border-line bg-tint-green">
      <div className="container-omh section-md">
        <Reveal>
          <div className="grid grid-cols-12 items-end gap-x-12 gap-y-8 max-lg:block">
            <div className="col-span-5 max-lg:mb-9">
              <Eyebrow>{content.media.eyebrow}</Eyebrow>
              <h2 className="mt-6 max-w-[14ch] font-sans text-h2 font-semibold text-balance">{content.media.title}</h2>
              <p className="mt-5 max-w-[48ch] text-body leading-relaxed text-ink/68">{content.media.body}</p>
            </div>
            <MediaFrame kind="video" theme={content.theme} ratio="16/10" title={content.media.videoTitle} note="Video placeholder for approved project media." className="col-span-7" />
          </div>
          <div className="mt-6 grid grid-cols-12 gap-6">
            <MediaFrame kind="image" theme={content.theme} ratio="5/4" title={content.media.imageTitle} note="Image placeholder for approved project media." className="col-span-5 max-md:col-span-12" />
            <MediaFrame kind="screen" theme={content.theme} ratio="16/8" title={content.media.screenTitle} note="Screen placeholder for approved, anonymised reporting media." className="col-span-7 max-md:col-span-12" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ApproachSection({ content }: { content: SolutionPageContent }) {
  return (
    <section id="approach" className="scroll-mt-24 border-b border-line bg-warm">
      <div className="container-omh section-lg">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-12 gap-y-12 max-lg:block">
            <div className="col-span-4 max-lg:mb-10">
              <Eyebrow>A clear first move</Eyebrow>
              <h2 className="mt-6 max-w-[15ch] font-sans text-h2 font-semibold text-balance">{content.approach.title}</h2>
              <p className="mt-5 max-w-[44ch] text-body leading-relaxed text-ink/68">{content.approach.intro}</p>
            </div>
            <ol className="col-span-8 border-t border-line">
              {content.approach.steps.map((step, index) => (
                <li key={step.title} className="group grid grid-cols-[64px_0.7fr_1fr] gap-5 border-b border-line py-7 transition-colors hover:bg-surface/55 max-md:grid-cols-[42px_1fr]">
                  <span className="font-sans text-[13px] font-semibold tabular-nums text-amber-deep">0{index + 1}</span>
                  <h3 className="font-sans text-[21px] font-semibold max-md:col-start-2">{step.title}</h3>
                  <p className="text-body leading-relaxed text-ink/68 max-md:col-start-2">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesSection({ content }: { content: SolutionPageContent }) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-omh section-md">
        <Reveal>
          <div className="flex items-end justify-between gap-10 max-md:block">
            <div>
              <Eyebrow>Connected services</Eyebrow>
              <h2 className="mt-6 max-w-[20ch] font-sans text-h2 font-semibold text-balance">{content.services.title}</h2>
            </div>
            <p className="max-w-[48ch] text-body leading-relaxed text-ink/68 max-md:mt-5">{content.services.intro}</p>
          </div>
          <div className="mt-12 grid grid-cols-2 border-l border-t border-line max-md:grid-cols-1">
            {content.services.items.map((item, index) => (
              <Link key={item.href} href={item.href} className="group min-h-[230px] border-b border-r border-line p-7 transition-colors duration-300 hover:bg-soft/45">
                <div className="flex items-start justify-between gap-5">
                  <span className="text-[12px] font-semibold tabular-nums text-amber">0{index + 1}</span>
                  <ArrowUpRight className="size-5 text-amber-deep transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <h3 className="mt-12 font-sans text-[26px] font-semibold">{item.title}</h3>
                <p className="mt-3 max-w-[44ch] text-body leading-relaxed text-ink/66">{item.body}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FitSection({ content }: { content: SolutionPageContent }) {
  return (
    <section className="border-b border-line bg-soft/55">
      <div className="container-omh section-md">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-12 gap-y-9 max-lg:block">
            <div className="col-span-4 max-lg:mb-9">
              <Eyebrow>Fit matters</Eyebrow>
              <h2 className="mt-6 max-w-[14ch] font-sans text-h2 font-semibold text-balance">{content.fit.title}</h2>
              <p className="mt-5 max-w-[40ch] text-body leading-relaxed text-ink/68">A useful first conversation should establish this honestly, before anyone proposes a programme.</p>
            </div>
            <div className="col-span-8 grid grid-cols-2 overflow-hidden rounded-card border border-line bg-surface max-md:grid-cols-1">
              <div className="p-7">
                <h3 className="font-sans text-h4 font-semibold text-amber-deep">A good basis to start</h3>
                <ul className="mt-6 space-y-4">
                  {content.fit.good.map((item) => <li key={item} className="flex gap-3 text-body leading-relaxed text-ink/72"><Check className="mt-1 size-4 shrink-0 text-amber-deep" />{item}</li>)}
                </ul>
              </div>
              <div className="border-l border-line bg-warm/70 p-7 max-md:border-l-0 max-md:border-t">
                <h3 className="font-sans text-h4 font-semibold">Worth resolving first</h3>
                <ul className="mt-6 space-y-4">
                  {content.fit.notYet.map((item) => <li key={item} className="flex gap-3 text-body leading-relaxed text-ink/68"><Minus className="mt-1 size-4 shrink-0 text-amber" />{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProofSection({ content }: { content: SolutionPageContent }) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-omh section-md">
        <Reveal>
          <div className="grid grid-cols-[1fr_1.1fr] items-end gap-16 max-lg:grid-cols-1 max-lg:gap-8">
            <div>
              <Eyebrow>Relevant proof</Eyebrow>
              <h2 className="mt-6 max-w-[17ch] font-serif text-[clamp(34px,3.8vw,52px)] leading-[1.08] text-balance">{content.proof.title}</h2>
            </div>
            <div>
              <p className="max-w-[60ch] text-body leading-relaxed text-ink/68">{content.proof.body}</p>
              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4">
                {content.proof.links.map((link) => (
                  <Link key={link.href} href={link.href} className="group inline-flex items-center gap-2 font-semibold text-amber-deep hover:underline underline-offset-4">
                    {link.label}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqAndNext({ content }: { content: SolutionPageContent }) {
  const currentIndex = solutionOrder.indexOf(content.slug as (typeof solutionOrder)[number]);
  const nextSlugs = solutionOrder.filter((slug) => slug !== content.slug).slice(currentIndex % 2, currentIndex % 2 + 2);
  return (
    <section className="border-b border-line bg-warm">
      <div className="container-omh section-lg">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-14 gap-y-12 max-lg:block">
            <div className="col-span-4 max-lg:mb-10">
              <Eyebrow>Questions before you enquire</Eyebrow>
              <h2 className="mt-6 font-sans text-h2 font-semibold">Straight answers</h2>
              <p className="mt-5 max-w-[42ch] text-body leading-relaxed text-ink/68">If the right answer depends on your circumstances, we say so.</p>
            </div>
            <div className="col-span-8"><Accordion items={content.faq} group={`${content.slug}-faq`} /></div>
          </div>
          <div className="mt-20 border-t border-line pt-9">
            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">You may also be trying to</p>
            <div className="mt-5 grid grid-cols-2 gap-5 max-md:grid-cols-1">
              {nextSlugs.map((slug) => {
                const item = solutions[slug];
                return <Link key={slug} href={`/solutions/${slug}`} className="group flex items-start justify-between gap-6 border-b border-line py-5 font-sans text-[22px] font-semibold leading-snug hover:text-amber-deep"><span>{`${item.title} ${item.titleAccent}`}</span><MoveRight className="mt-1.5 size-5 shrink-0 transition-transform group-hover:translate-x-1" /></Link>;
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalSection({ content }: { content: SolutionPageContent }) {
  return (
    <section id="enquire" className="scroll-mt-24 bg-inverse text-oninverse">
      <div className="container-omh section-lg">
        <Reveal>
          <div className="grid grid-cols-[.82fr_1.18fr] gap-[clamp(48px,8vw,120px)] max-lg:grid-cols-1">
            <div>
              <Eyebrow light>Start with the real problem</Eyebrow>
              <h2 className="mt-6 max-w-[14ch] font-sans text-[clamp(36px,4.4vw,60px)] font-semibold leading-[1.04] text-balance">{content.final.title}</h2>
              <p className="mt-6 max-w-[48ch] text-body leading-relaxed text-oninverse/66">{content.final.body}</p>
              <div className="mt-9 space-y-3 text-body text-oninverse/58">
                <p><span className="mr-3 text-[#f5d394]">01</span>Your enquiry is read by a person.</p>
                <p><span className="mr-3 text-[#f5d394]">02</span>We look at the context before suggesting a service.</p>
                <p><span className="mr-3 text-[#f5d394]">03</span>You receive a clear recommendation on the next step.</p>
              </div>
            </div>
            <SolutionLeadForm need={content.final.formNeed} prompt={content.final.formPrompt} submitLabel={content.final.cta} eventPrefix={content.slug.replaceAll("-", "_")} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SolutionPage({ content }: { content: SolutionPageContent }) {
  return (
    <div className={`solution-page solution-page-${content.theme}`}>
      <SolutionHero content={content} />
      <ProblemSection content={content} />
      <OutcomesSection content={content} />
      <MediaSection content={content} />
      <ApproachSection content={content} />
      <ServicesSection content={content} />
      <FitSection content={content} />
      <ProofSection content={content} />
      <FaqAndNext content={content} />
      <FinalSection content={content} />
    </div>
  );
}
