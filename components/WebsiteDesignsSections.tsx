import Image from "next/image";
import Link from "next/link";
import { MediaFrame } from "@/components/ServiceMedia";
import { SiteTestimonials } from "@/components/Testimonials";
import { ServiceBand } from "@/components/services/ServiceBand";
import { Button } from "@/components/ui/Button";
import { FinalCta } from "@/components/ui/FinalCta";
import { caseStudies } from "@/lib/content/case-studies";
import { company } from "@/lib/content/nav";
import { websiteDesigns as page } from "@/lib/content/website-designs";

/*
  Phase 7 — /website-designs. Scaffold rule: every section is a `ServiceBand`,
  one label treatment (`topline`) for the whole page, alternating grounds so no
  two consecutive bands share one.

  The gallery's 38 screenshots are catalogued in `website-designs.ts` but cannot
  be hotlinked from the WordPress host — Cloudflare answers every cross-origin
  request with its bot-check page, so all 38 fail. The files have to be copied
  into `public/images/website-designs/` first; until then each category shows a
  frame plus the names of the themes it holds.

  ◈ The live "CASE STUDIES" band is lorem ipsum repeated five times. Rather than
  reproduce filler, this renders the real Website-category case studies.
*/

const LABEL = "topline" as const;
const ACCENT = "bg-amber";

export function WebsiteDesignsPage() {
  const websiteCases = caseStudies.filter((c) => c.category === "Website").slice(0, 3);

  return (
    <main>
      <ServiceBand label={page.title} tone="warm" accent={ACCENT} labelStyle={LABEL}>
        <div className="grid grid-cols-12 items-center gap-x-12 gap-y-11 max-lg:block">
          <div className="col-span-6">
            <h1 className="font-sans text-display font-semibold text-balance">{page.title}</h1>
            <p className="mt-5 font-sans text-h3 font-semibold text-amber-deep text-balance">
              {page.standfirst}
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5 max-sm:flex-col max-sm:items-stretch">
              <Button href="/omh-free-consultation" arrow data-event="website_designs_consultation_click">
                {page.ctas.consultation}
              </Button>
              <Button href="/contact" variant="secondary" data-event="website_designs_contact_click">
                {page.ctas.contact}
              </Button>
            </div>
          </div>
          <div className="col-span-6 max-lg:mt-11">
            <MediaFrame
              kind="screen"
              theme="wordpress"
              title="Website design templates"
              note="Replaced with the real design screenshots before launch."
              ratio="4/3"
            />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-x-12 gap-y-8 border-t border-line pt-12 max-lg:block">
          <h2 className="col-span-5 font-sans text-h3 font-semibold text-balance">
            {page.statHeading}
          </h2>
          <div className="col-span-6 col-start-7 max-lg:mt-8">
            {page.intro.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-body leading-relaxed text-ink/75 first:mt-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </ServiceBand>

      <ServiceBand
        id="how-we-can-help"
        label={page.help.eyebrow}
        tone="white"
        accent={ACCENT}
        labelStyle={LABEL}
      >
        <h2 className="max-w-[24ch] font-sans text-h2 font-semibold text-balance">
          {page.help.heading}
        </h2>
        <ul className="mt-11 grid grid-cols-4 border-t border-line max-md:grid-cols-2 max-sm:grid-cols-1">
          {page.help.sectors.map((sector) => (
            <li
              key={sector}
              className="border-b border-line px-1 py-4 text-body font-medium text-ink/80"
            >
              {sector}
            </li>
          ))}
        </ul>
        <p className="mt-11 max-w-[60ch] text-lead leading-relaxed text-ink/75">
          {page.help.tradesLead}
        </p>
        <ul className="mt-7 flex flex-wrap gap-2.5">
          {page.help.trades.map((trade) => (
            <li
              key={trade}
              className="rounded-full border border-line bg-warm px-4 py-2 text-body text-ink/75"
            >
              {trade}
            </li>
          ))}
        </ul>
      </ServiceBand>

      <ServiceBand label={page.gallery.eyebrow} tone="mist" accent={ACCENT} labelStyle={LABEL}>
        <h2 className="max-w-[22ch] font-sans text-h2 font-semibold text-balance">
          {page.gallery.heading}
        </h2>
        {/* The 38 screenshots cannot be hotlinked from the WordPress host —
            Cloudflare answers cross-origin requests with its bot-check page, so
            every image 400s. Run `node scripts/import-uploads.mjs <uploads>` once
            the files are on disk: it copies them into public/ and flips
            `galleryReady`, and this switches from frames to the real grid. */}
        <div className="mt-12 flex flex-col gap-14">
          {page.gallery.categories.map((category, index) => (
            <section key={category.title} aria-label={category.title}>
              <h3 className="flex items-center gap-4 font-sans text-h4 font-semibold">
                {category.title}
                <span aria-hidden className="h-px flex-1 bg-line" />
                <span className="text-bsm font-medium text-muted tabular-nums">
                  {category.images.length} designs
                </span>
              </h3>
              {page.gallery.galleryReady ? (
                <ul className="mt-7 grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
                  {category.images.map((image) => (
                    <li
                      key={image.file}
                      className="overflow-hidden rounded-media border border-line bg-surface"
                    >
                      <Image
                        src={`${page.gallery.base}${image.file}`}
                        alt={image.alt}
                        width={1024}
                        height={576}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        className="h-auto w-full"
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-7 grid grid-cols-12 gap-x-10 gap-y-7 max-lg:block">
                  <div className="col-span-7">
                    <MediaFrame
                      kind="screen"
                      theme={index % 2 === 0 ? "wordpress" : "shopify"}
                      title={category.title}
                      note={`${category.images.length} theme screenshots to be added.`}
                      ratio="16/9"
                    />
                  </div>
                  <ul className="col-span-5 max-lg:mt-7">
                    {category.images.map((image) => (
                      <li
                        key={image.file}
                        className="border-b border-line py-2.5 text-bsm leading-snug text-ink/70"
                      >
                        {image.alt}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
        </div>
      </ServiceBand>

      <ServiceBand label={page.pricing.eyebrow} tone="warm" accent={ACCENT} labelStyle={LABEL}>
        <div className="grid grid-cols-12 gap-x-12 gap-y-8 max-lg:block">
          <h2 className="col-span-5 font-sans text-h2 font-semibold text-balance">
            {page.pricing.heading}
          </h2>
          <div className="col-span-6 col-start-7 max-lg:mt-8">
            {page.pricing.body.map((paragraph) => (
              <p key={paragraph} className="mt-6 text-body leading-relaxed text-ink/75 first:mt-0">
                {paragraph}
              </p>
            ))}
            <div className="mt-9">
              <Button href="/pricing" arrow data-event="website_designs_pricing_click">
                View the price list
              </Button>
            </div>
          </div>
        </div>
      </ServiceBand>

      <ServiceBand label={page.caseStudies.eyebrow} tone="white" accent={ACCENT} labelStyle={LABEL}>
        <h2 className="max-w-[24ch] font-sans text-h2 font-semibold text-balance">
          {page.caseStudies.heading}
        </h2>
        <ul className="mt-11 grid grid-cols-3 gap-7 max-md:grid-cols-1">
          {websiteCases.map((study) => (
            <li
              key={study.slug}
              className="surface-card flex flex-col rounded-card border border-line bg-warm/55 p-7"
            >
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-amber-deep">
                {study.sector}
              </p>
              <h3 className="mt-4 font-sans text-h4 font-semibold">
                <Link
                  href={`/case-studies/${study.slug}`}
                  data-event="website_designs_case_study_click"
                  className="text-ink hover:text-amber-deep"
                >
                  {study.title}
                </Link>
              </h3>
              <p className="mt-3 text-body leading-relaxed text-ink/70">{study.lede}</p>
            </li>
          ))}
        </ul>
      </ServiceBand>

      <ServiceBand label={page.contact.eyebrow} tone="navy" accent={ACCENT} labelStyle={LABEL}>
        <div className="grid grid-cols-12 items-center gap-x-12 gap-y-8 max-lg:block">
          <h2 className="col-span-6 font-sans text-h2 font-semibold text-balance">
            {page.contact.heading}
          </h2>
          <div className="col-span-5 col-start-8 max-lg:mt-8">
            <p className="font-sans text-h3 font-semibold">
              <Link href={company.phoneHref} className="hover:text-amber">
                Tel: {page.contact.phone}
              </Link>
            </p>
            <p className="mt-4 text-body leading-relaxed text-oninverse/70">
              {page.consultation.heading}
            </p>
            <div className="mt-7">
              <Button
                href="/omh-free-consultation"
                variant="inverse"
                arrow
                data-event="website_designs_booking_click"
              >
                {page.consultation.eyebrow}
              </Button>
            </div>
          </div>
        </div>
      </ServiceBand>

      <ServiceBand label={page.guarantee.eyebrow} tone="warm" accent={ACCENT} labelStyle={LABEL}>
        <div className="max-w-[70ch]">
          <h2 className="font-sans text-h2 font-semibold text-balance">{page.guarantee.heading}</h2>
          {page.guarantee.body.map((paragraph) => (
            <p key={paragraph} className="mt-6 text-lead leading-relaxed text-ink/75">
              {paragraph}
            </p>
          ))}
          <div className="mt-9">
            <Button href="/warranty" variant="secondary" data-event="website_designs_warranty_click">
              Read the guarantee
            </Button>
          </div>
        </div>
      </ServiceBand>

      <SiteTestimonials eventPrefix="website_designs" tone="white" accent={ACCENT} labelStyle={LABEL} />

      <FinalCta
        title="Let's design the site your business actually needs."
        titleAccent="your business actually needs."
        body="Tell us what the website has to do — sell, book, generate enquiries — and we will recommend a custom build or a theme customisation, with the pricing that fits."
        primary={{ label: "Request a Website Quote", href: "/wordpress-development-request-quote", event: "website_designs_final_quote_click" }}
        secondary={{ label: "Book a Free Consultation", href: "/omh-free-consultation", event: "website_designs_final_consultation_click" }}
        contactEvents={{ phone: "website_designs_phone_click", email: "website_designs_email_click" }}
      />
    </main>
  );
}
