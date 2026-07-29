import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  BarChart3,
  Blocks,
  Crown,
  Gauge,
  Globe2,
  Layers3,
  MonitorUp,
  MousePointerClick,
  Quote,
  Search,
  Target,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Pointer } from "@/components/Pointer";
import { ArrowRight, Button } from "@/components/ui/Button";
import {
  difference,
  featuredCase,
  finalCta,
  hero,
  insights,
  programs,
  recognition,
  services,
  stats,
  supportingCases,
  testimonials,
} from "@/lib/content/home";

function StarRating({ label }: { label: string }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[15px] font-semibold text-ink shadow-[0_12px_28px_-24px_rgb(16_24_40/0.55)]">
      {/* ponytail: no star glyphs — five stars next to no rating reads as a
          review score, which brief §6/§33 forbids inventing. Restore only
          alongside a real, attributed rating. */}
      <span className="size-1.5 rounded-full bg-amber" aria-hidden />
      {label}
    </p>
  );
}

function CardArrow({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-line bg-warm text-amber-deep transition-[color,background-color,border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.035] group-hover:border-teal group-hover:bg-teal group-hover:text-ink group-hover:shadow-[0_12px_26px_-18px_rgb(215_154_55/0.8)] max-sm:size-10 ${className}`}>
      <ArrowRight className="size-5 transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-x-0.5" />
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-sans text-[14px] font-semibold uppercase tracking-[0.14em] text-muted before:h-0.5 before:w-5 before:bg-amber before:content-['']">
      {children}
    </p>
  );
}

const programIcons: LucideIcon[] = [Zap, Activity, MonitorUp, Crown];
const recognitionIcons: LucideIcon[] = [
  Target,
  MousePointerClick,
  BarChart3,
  Gauge,
  Blocks,
  Globe2,
  Search,
  Layers3,
];

export default function Home() {
  return (
    <>
      <section className="hero-grid relative overflow-x-clip border-b border-line bg-warm">
        <div className="container-omh grid min-h-[680px] grid-cols-[minmax(0,0.92fr)_minmax(440px,0.78fr)] items-center gap-[clamp(48px,7vw,116px)] py-[clamp(40px,3.5vw,60px)] max-lg:min-h-0 max-lg:grid-cols-1 max-lg:gap-8 max-sm:gap-8">
          <Reveal className="relative z-10">
            <StarRating label="Growth-focused UK agency" />
            <h1 className="mb-7 mt-8 max-w-[14ch] font-sans text-display font-semibold max-lg:max-w-none">
              Digital marketing and WordPress support for <span className="text-amber-deep">UK businesses</span>
            </h1>
            <p className="mb-10 max-w-[59ch] text-[18px] leading-relaxed text-ink/75 max-lg:max-w-none">
              {hero.standfirst}
            </p>
            <div className="flex flex-wrap items-center gap-4 max-sm:flex-col max-sm:items-stretch">
              <Button href={hero.primaryCta.href} arrow>
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
            <div className="mt-12 grid max-w-[650px] grid-cols-3 border-y border-line py-5 max-lg:max-w-none max-sm:grid-cols-1 max-sm:gap-4">
              {["Strategy first", "Senior delivery", "Clear reporting"].map((item, index) => (
                <p key={item} className="flex items-center gap-3 text-[16px] font-semibold text-ink/65">
                  <span className="font-sans text-[13px] text-amber-deep">0{index + 1}</span>
                  {item}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative max-lg:mx-auto max-lg:w-full max-lg:max-w-[760px]">
            <Pointer className="hero-media relative mb-9">
              <div className="pointer-parallax relative">
              <div className="image-hover-frame media-shine relative aspect-[4/5] overflow-hidden rounded-[8px] bg-ink shadow-[0_36px_90px_-42px_rgb(16_24_40/0.48)] max-lg:aspect-[16/10] max-sm:aspect-[4/5]">
                <Image
                  src="/images/home/campaign-review.png"
                  alt="Digital strategists reviewing campaign and website performance"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgb(16_24_40/0.72)_100%)]" />
                <p className="absolute bottom-36 left-7 right-7 font-sans text-[22px] font-semibold leading-snug text-white max-sm:bottom-32 max-sm:text-[18px]">
                  Decisions grounded in the campaign, the website, and the numbers.
                </p>
              </div>
              <div className="absolute -bottom-7 -left-8 w-[250px] rounded-[8px] border border-white/15 bg-ink p-5 text-white shadow-[0_24px_60px_-24px_rgb(16_24_40/0.65)] max-sm:-bottom-10 max-sm:left-4">
                <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-amber">Connected delivery</p>
                <p className="mt-2 text-[18px] font-semibold">Plan &rarr; Build &rarr; Measure</p>
              </div>
              <div className="absolute -right-5 top-9 flex size-24 flex-col items-center justify-center rounded-[8px] bg-teal text-center text-ink shadow-[0_20px_45px_-22px_rgb(215_154_55/0.75)] max-sm:right-3 max-sm:top-4 max-sm:size-20">
                <Gauge className="mb-1 size-7" aria-hidden />
                <span className="text-[13px] font-semibold">Growth ready</span>
              </div>
              </div>
            </Pointer>
          </Reveal>
        </div>
      </section>

      <section className="dark-grid border-y border-white/10 bg-ink py-[clamp(84px,8vw,132px)] text-white">
        <div className="container-omh">
          <Reveal>
            <div className="mx-auto max-w-[1120px] text-center">
              <p className="font-sans text-[14px] font-semibold uppercase tracking-[0.14em] text-amber">
                Our programs
              </p>
              <h2 className="mt-5 font-sans text-h2 font-semibold">
                Marketing programs <span className="text-[#f2c675]">built for growth</span>
              </h2>
              <p className="mx-auto mt-5 max-w-[850px] text-[18px] leading-relaxed text-white/68">
                Choose the starting point that fits your business. Every program joins acquisition,
                conversion, development, and reporting around one outcome.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-4 gap-5 max-xl:grid-cols-2 max-sm:grid-cols-1">
              {programs.map((program, index) => {
                const ProgramIcon = programIcons[index];
                return (
                  <Link key={program.title} href={program.href} className="program-card group min-h-[410px] max-sm:min-h-[360px]">
                    <div className="program-icon">
                      <ProgramIcon className="size-8" strokeWidth={1.8} aria-hidden />
                    </div>
                    <p className="mt-7 inline-flex self-start rounded-full bg-teal/20 px-3 py-1.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#f5d394]">
                      {program.range}
                    </p>
                    <h3 className="mt-5 font-sans text-[clamp(25px,22px+0.45vw,31px)] font-semibold leading-tight">
                      {program.title}
                    </h3>
                    <p className="mt-4 text-[18px] leading-relaxed text-white/65">{program.body}</p>
                    <span className="program-link mt-auto pt-8">
                      Explore program
                      <ArrowRight className="size-5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-white text-ink">
        <div className="stats-grid container-omh grid grid-cols-4 divide-x divide-line max-lg:grid-cols-2 max-lg:divide-x-0 max-sm:grid-cols-1">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item px-8 py-11 first:pl-0 max-lg:px-6 max-sm:px-0">
              <p className="font-sans text-[clamp(42px,34px+2vw,66px)] font-semibold leading-none text-amber-deep">
                {stat.value}
              </p>
              <p className="mt-3 text-[18px] font-semibold text-ink/65">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="proof" className="container-omh py-[clamp(72px,8vw,128px)]">
        <Reveal>
          <div className="grid grid-cols-[0.74fr_1.26fr] items-start gap-[clamp(48px,7vw,112px)] max-lg:grid-cols-1 max-sm:gap-10">
            <div className="lg:sticky lg:top-24">
              <SectionLabel>Success stories</SectionLabel>
              <h2 className="mt-6 max-w-[15ch] font-sans text-h2 font-semibold">
                Proof should sit beside <span className="text-amber-deep">the work, not below it</span>
              </h2>
              <p className="mt-5 text-[18px] leading-relaxed text-ink/75">
                Campaign thinking, web design, and reporting come together in one view of what
                each project actually achieved.
              </p>
              <div className="mt-8">
                <Button href="/case-studies" variant="secondary" arrow>
                  View all client work
                </Button>
              </div>
            </div>

            <div>
              <Pointer className="media-card group overflow-hidden rounded-[8px] bg-ink text-white">
                <div className="image-hover-frame media-shine pointer-parallax relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/home/campaign-review.png"
                    alt="Digital strategists reviewing campaign and website performance"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-[0.42fr_1fr] gap-8 p-8 max-sm:grid-cols-1 max-sm:p-6">
                  <div>
                    <p className="text-[15px] font-semibold uppercase tracking-[0.12em] text-amber">
                      Featured work
                    </p>
                    <h3 className="mt-3 font-sans text-[28px] font-semibold">{featuredCase.sector}</h3>
                  </div>
                  <div>
                    <p className="text-[18px] leading-relaxed text-white/78">{featuredCase.work}</p>
                    <div className="mt-5">
                      <span className="inline-flex items-center gap-2 rounded-lg border border-amber/40 bg-amber/10 px-3 py-1.5 text-[13.5px] font-semibold tracking-wide text-amber">
                        {featuredCase.result}
                      </span>
                    </div>
                  </div>
                </div>
              </Pointer>

              <div className="mt-8 border-t border-line">
                {supportingCases.map((item) => (
                  <Link
                    key={item.sector}
                    href={item.href}
                    className="case-row group grid grid-cols-[0.55fr_1fr_auto] items-center gap-6 border-b border-line py-6 max-sm:grid-cols-[1fr_auto] max-sm:gap-x-4 max-sm:gap-y-2"
                  >
                    <span className="font-sans text-[20px] font-semibold max-sm:col-start-1 max-sm:row-start-1">{item.sector}</span>
                    <span className="text-[18px] leading-relaxed text-ink/70 max-sm:col-span-2 max-sm:row-start-2">{item.work}</span>
                    <CardArrow className="max-sm:col-start-2 max-sm:row-start-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="dark-grid border-y border-white/10 bg-ink py-[clamp(72px,8vw,128px)] text-white">
        <div className="container-omh">
          <Reveal>
            <div className="grid grid-cols-[1fr_0.92fr] items-center gap-[clamp(64px,9vw,144px)] max-lg:grid-cols-1 max-sm:gap-12">
              <Pointer className="story-collage">
                <div className="pointer-parallax relative pb-16 pr-14 max-sm:pb-14 max-sm:pr-0">
                <div className="image-hover-frame media-shine relative aspect-[5/4] overflow-hidden rounded-[8px] border border-white/10 bg-black shadow-[0_34px_80px_-32px_rgb(0_0_0/0.78)] max-sm:aspect-[4/5]">
                  <Image
                    src="/images/home/agency-collaboration.png"
                    alt="Digital agency team collaborating on web design and analytics"
                    fill
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    className="object-cover"
                  />
                </div>
                <div className="image-hover-frame media-shine absolute bottom-0 left-[-22px] h-[42%] w-[43%] overflow-hidden rounded-[8px] border-4 border-teal bg-ink shadow-[0_24px_60px_-24px_rgb(0_0_0/0.8)] max-sm:left-0 max-sm:h-[34%] max-sm:w-[50%] max-sm:border-[3px]">
                  <Image
                    src="/images/home/campaign-review.png"
                    alt="Campaign review in progress"
                    fill
                    sizes="(max-width: 640px) 42vw, 22vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-5 right-2 flex size-28 flex-col items-center justify-center rounded-[8px] bg-teal text-center text-ink shadow-[0_0_42px_rgb(215_154_55/0.42)] max-sm:bottom-4 max-sm:size-20">
                  <span className="font-sans text-[26px] font-semibold">One</span>
                  <span className="mt-1 text-[13px] font-semibold uppercase tracking-[0.1em] text-white/75">joined-up team</span>
                </div>
                </div>
              </Pointer>

              <div>
                <p className="font-sans text-[14px] font-semibold uppercase tracking-[0.14em] text-amber">
                  Why choose us
                </p>
                <h2 className="mt-6 font-sans text-h2 font-semibold">
                  A senior team for <span className="text-[#f2c675]">connected digital growth</span>
                </h2>
                <p className="mt-6 text-[18px] leading-relaxed text-white/70">
                  The strongest work happens when strategy, creative, acquisition, conversion, and
                  reporting are handled together instead of passed between disconnected suppliers.
                </p>
                <div className="mt-9 border-t border-white/15">
                  {difference.slice(0, 3).map((item, index) => (
                    <div key={item.title} className="story-point group flex gap-5 border-b border-white/15 py-5">
                      <span className="font-sans text-[14px] font-semibold text-amber">0{index + 1}</span>
                      <div>
                        <h3 className="font-sans text-[21px] font-semibold">{item.title}</h3>
                        <p className="mt-2 text-[18px] leading-relaxed text-white/58">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-9">
                  <Button href="/about-us" variant="inverse" arrow>
                    Learn about OMH
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-omh py-[clamp(72px,8vw,128px)]">
        <Reveal>
          <div className="grid grid-cols-[1.08fr_0.72fr] gap-[clamp(48px,8vw,128px)] max-lg:grid-cols-1">
            <div className="border-t border-line">
              {services.map((service, index) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="service-row group grid grid-cols-[72px_1fr_auto] items-center gap-5 border-b border-line py-7 max-sm:grid-cols-[36px_1fr_auto] max-sm:gap-3"
                >
                  <span className="font-sans text-[16px] font-semibold text-amber-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[clamp(22px,20px+0.5vw,29px)] font-semibold">
                    {service.label}
                  </span>
                  <CardArrow />
                </Link>
              ))}
            </div>
            <div className="order-first lg:order-last lg:sticky lg:top-24 lg:self-start">
              <SectionLabel>Services</SectionLabel>
              <h2 className="mt-6 font-sans text-h2 font-semibold">
                Everything a <span className="text-amber-deep">growing website</span> needs around it
              </h2>
              <p className="mt-5 text-[18px] leading-relaxed text-ink/75">
                Pick a specialist service or connect several disciplines around one commercial goal.
              </p>
              <div className="mt-8">
                <Button href="/services" variant="secondary" arrow>
                  Explore all services
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-line bg-white py-[clamp(72px,8vw,128px)]">
        <div className="container-omh">
          <Reveal>
            <div className="mb-12 flex items-end justify-between gap-10 max-lg:block">
              <div>
                <StarRating label="Client success stories" />
                <h2 className="mt-6 max-w-[19ch] font-sans text-h2 font-semibold">
                  What working with <span className="text-amber-deep">OMH should feel like</span>
                </h2>
              </div>
              <p className="max-w-[42ch] text-[18px] leading-relaxed text-ink/70 max-lg:mt-5">
                Feedback drawn from published client case studies across SEO, paid media and web
                development.
              </p>
            </div>

            <div className="grid grid-cols-[1.1fr_0.9fr] gap-6 max-lg:grid-cols-1">
              <figure className="quote-feature group relative flex min-h-[520px] flex-col justify-between overflow-hidden rounded-[8px] bg-ink p-[clamp(28px,4vw,56px)] text-white max-sm:min-h-[420px]">
                <Quote className="size-12 text-white/22 transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-translate-y-1 group-hover:rotate-[-4deg]" strokeWidth={1.5} aria-hidden />
                <blockquote className="my-12 font-serif text-[clamp(30px,25px+1.3vw,44px)] leading-tight">
                  &ldquo;{testimonials[0].quote}&rdquo;
                </blockquote>
                <figcaption className="text-[18px] font-semibold text-white/75">
                  {testimonials[0].name}
                </figcaption>
              </figure>

              <div className="grid gap-6">
                {testimonials.slice(1).map((testimonial) => (
                  <figure
                    key={testimonial.name}
                    className="surface-card group flex flex-col justify-between rounded-[8px] border border-teal/20 bg-white p-8"
                  >
                    <blockquote className="text-[22px] leading-relaxed text-ink/85">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-8 flex items-center justify-between gap-4 text-[18px] font-semibold max-sm:flex-col max-sm:items-start">
                      {testimonial.name}
                      <span className="text-amber" aria-hidden>
                        &#9733;&#9733;&#9733;&#9733;&#9733;
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="recognition-field overflow-hidden border-y border-line bg-warm py-[clamp(72px,8vw,128px)]">
        <div className="container-omh">
          <Reveal>
            <div className="grid grid-cols-[0.7fr_1.3fr] items-center gap-[clamp(52px,8vw,124px)] max-lg:grid-cols-1">
              <div>
                <SectionLabel>Capability map</SectionLabel>
                <h2 className="mt-6 font-sans text-h2 font-semibold">
                  The platforms behind <span className="text-amber-deep">connected growth</span>
                </h2>
                <p className="mt-5 text-[18px] leading-relaxed text-ink/70">
                  Strategy becomes useful when every delivery channel shares the same commercial
                  goal and the reporting is easy to act on.
                </p>
                <div className="mt-9 grid grid-cols-3 border-y border-line py-5">
                  {["Acquisition", "Conversion", "Measurement"].map((label, index) => (
                    <div key={label}>
                      <p className="font-sans text-[26px] font-semibold text-amber-deep">0{index + 1}</p>
                      <p className="mt-1 text-[15px] font-semibold text-ink/55">{label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button href="/about-us" variant="secondary" arrow>
                    Learn about our approach
                  </Button>
                </div>
              </div>

              <div className="recognition-masonry">
                {recognition.map((item, index) => {
                  const RecognitionIcon = recognitionIcons[index % recognitionIcons.length];
                  return (
                    <div key={item} className={`recognition-tile recognition-tile-${(index % 4) + 1}`}>
                      <RecognitionIcon className="size-7" strokeWidth={1.7} aria-hidden />
                      <span>{item}</span>
                      <ArrowRight className="recognition-arrow size-4" />
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-white py-[clamp(72px,8vw,128px)]">
        <div className="container-omh">
          <Reveal>
            <div className="mb-12 flex items-end justify-between gap-8 max-lg:block">
              <div>
                <SectionLabel>Latest insights</SectionLabel>
                <h2 className="mt-6 font-sans text-h2 font-semibold">From the <span className="text-amber-deep">OMH blog</span></h2>
              </div>
              <Button href="/insights" variant="secondary" className="max-lg:mt-6">
                View all articles
              </Button>
            </div>

            <div className="grid grid-cols-[1.12fr_0.88fr] gap-8 max-lg:grid-cols-1">
              <Link
                href={insights[0].href}
                className="surface-card group flex min-h-[520px] flex-col justify-between rounded-[8px] bg-ink p-[clamp(28px,4vw,52px)] text-white max-sm:min-h-0 max-sm:gap-20"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[15px] font-semibold uppercase tracking-[0.14em] text-amber">
                    {insights[0].category}
                  </p>
                  <CardArrow />
                </div>
                <div>
                  <h3 className="max-w-[19ch] font-sans text-[clamp(32px,26px+1.5vw,50px)] font-semibold leading-tight">
                    {insights[0].title}
                  </h3>
                  <p className="mt-5 max-w-[54ch] text-[18px] leading-relaxed text-white/70">
                    {insights[0].body}
                  </p>
                </div>
              </Link>

              <div className="border-t border-line">
                {insights.slice(1).map((post) => (
                  <Link
                    key={post.title}
                    href={post.href}
                    className="insight-row group grid min-h-[250px] grid-cols-[1fr_auto] content-between gap-6 border-b border-line py-8"
                  >
                    <div>
                      <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-amber-deep">
                        {post.category}
                      </p>
                      <h3 className="mt-4 max-w-[24ch] font-sans text-[27px] font-semibold leading-tight">
                        {post.title}
                      </h3>
                    </div>
                    <CardArrow />
                    <p className="col-span-2 text-[18px] leading-relaxed text-ink/70">{post.body}</p>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-omh grid grid-cols-[1fr_0.55fr] items-center gap-12 py-[clamp(76px,8vw,124px)] max-lg:grid-cols-1">
          <Reveal>
            <h2 className="max-w-[20ch] font-sans text-h2 font-semibold">
              Ready to make your marketing easier to measure and <span className="text-[#f2c675]">easier to scale?</span>
            </h2>
            <p className="mt-5 max-w-[58ch] text-[18px] leading-relaxed text-white/75">
              {finalCta.body}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 max-sm:flex-col max-sm:items-stretch">
              <Button href={finalCta.primary.href} variant="inverse" arrow>
                {finalCta.primary.label}
              </Button>
              <Button href={finalCta.secondary.href} variant="ghost-white">
                {finalCta.secondary.label}
              </Button>
            </div>
          </Reveal>
          <Reveal>
            <div className="border-y border-white/20">
              {["Review your current activity", "Find the clearest next step", "Build a connected growth plan"].map(
                (step, index) => (
                  <p
                    key={step}
                    className="flex items-center gap-4 border-b border-white/15 py-5 text-[18px] font-semibold text-white/85 last:border-b-0"
                  >
                    <span className="font-sans text-[16px] text-amber">0{index + 1}</span>
                    {step}
                  </p>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
