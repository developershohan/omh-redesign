import { Check, Minus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { MediaFrame } from "@/components/ServiceMedia";
import { ServiceBand, type ServiceBandTone } from "@/components/services/ServiceBand";
import { Button } from "@/components/ui/Button";
import { FinalCta } from "@/components/ui/FinalCta";
import { Eyebrow } from "@/components/ui/Proof";
import { priceList, type PriceCell, type PriceTable } from "@/lib/content/price-list";

function Value({ value, label }: { value: PriceCell; label: string }) {
  if (value === true) {
    return (
      <>
        <Check className="mx-auto size-5 text-teal" aria-hidden />
        <span className="sr-only">Included</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <Minus className="mx-auto size-5 text-muted/60" aria-hidden />
        <span className="sr-only">Not included</span>
      </>
    );
  }
  return <span aria-label={`${label}: ${value}`}>{value}</span>;
}

// Sticky first column so the feature label stays readable while the tiers scroll
// on narrow screens — the tables run to 27 rows and 4 tiers.
function ComparisonTable({ table }: { table: PriceTable }) {
  const isPricing = (label: string) => label.startsWith("Pricing");

  return (
    <div className="overflow-x-auto rounded-card border border-line bg-surface">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <caption className="sr-only">{table.title} packages compared</caption>
        <thead>
          <tr className="border-b border-line">
            <th
              scope="col"
              className="sticky left-0 z-10 bg-surface px-5 py-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted"
            >
              Feature
            </th>
            {table.tiers.map((tier) => (
              <th
                key={tier}
                scope="col"
                className="px-5 py-4 text-center font-sans text-[15px] font-semibold text-ink"
              >
                {tier}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr
              key={row.label}
              className={`border-b border-line last:border-0 ${isPricing(row.label) ? "bg-warm" : ""}`}
            >
              <th
                scope="row"
                className={`sticky left-0 z-10 px-5 py-3.5 text-left text-[15px] font-normal text-ink/80 ${isPricing(row.label) ? "bg-warm font-semibold text-ink" : "bg-surface"}`}
              >
                {row.label}
              </th>
              {row.values.map((value, index) => (
                <td
                  key={`${row.label}-${table.tiers[index] ?? index}`}
                  className={`px-5 py-3.5 text-center text-[15px] ${isPricing(row.label) ? "font-sans text-[19px] font-semibold text-amber-deep" : "text-ink/80"}`}
                >
                  <Value value={value} label={row.label} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PriceListHero() {
  return (
    <section className="hero-grid border-b border-line bg-warm">
      <div className="container-omh section-md">
        <Reveal>
          <Eyebrow>{priceList.eyebrow}</Eyebrow>
          <div className="mt-8 grid grid-cols-12 items-center gap-x-12 gap-y-8 max-lg:block">
            <div className="col-span-6">
              <h1 className="max-w-[13ch] font-sans text-display font-semibold text-balance">
                {priceList.title}
              </h1>
              <p className="mt-7 max-w-[52ch] text-lead leading-relaxed text-ink/75">
                {priceList.standfirst}
              </p>
              <div className="mt-9">
                <Button href="/contact" arrow data-event="pricing_hero_cta_click">
                  Book a Free Consultation
                </Button>
              </div>
            </div>
            <MediaFrame
              kind="screen"
              theme="wordpress"
              ratio="4/3"
              title="What a quote looks like"
              note="Replace with an anonymised proposal or package summary."
              className="col-span-6 max-lg:mt-10"
            />
          </div>
          <nav aria-label="Services on this page" className="mt-12 border-t border-line pt-8">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
              Jump to a service
            </p>
            <ul className="grid grid-cols-4 gap-x-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {priceList.tables.map((table) => (
                <li key={table.id} className="border-b border-line">
                  <a
                    href={`#${table.id}`}
                    className="block py-2.5 text-body text-ink/75 transition-colors hover:text-amber-deep"
                  >
                    {table.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}

// Eleven consecutive comparison tables read as one endless grid if they all sit
// on the same ground, so the bands alternate and a media break splits the run.
const tableTones: ServiceBandTone[] = ["warm", "white", "mist"];

export function PriceTables() {
  return (
    <>
      {priceList.tables.map((table, index) => (
        <div key={table.id}>
          {index === 5 && <PricingMediaBreak />}
          <ServiceBand
            label="Package"
            id={table.id}
            tone={tableTones[index % tableTones.length]}
            accent={index % 2 ? "bg-teal" : "bg-amber"}
            labelStyle="index"
            index={index + 1}
          >
            <h2 className="mb-8 max-w-[24ch] font-sans text-h2 font-semibold">{table.title}</h2>
            {table.rows.length > 0 && <ComparisonTable table={table} />}
            <div className="mt-8 max-w-[74ch] border-t border-line pt-7">
              {table.notes.map((note) => (
                <p key={note} className="mt-3 text-[15px] leading-relaxed text-ink/70 first:mt-0">
                  {note}
                </p>
              ))}
            </div>
          </ServiceBand>
        </div>
      ))}
    </>
  );
}

function PricingMediaBreak() {
  return (
    <ServiceBand label="Before you choose" tone="dark" accent="bg-[#f2c675]" labelStyle="index">
      <Reveal>
        <div className="grid grid-cols-12 items-center gap-x-12 gap-y-10 max-lg:block">
          <MediaFrame
            kind="video"
            theme="ppc"
            ratio="16/10"
            title="How we scope and price a project"
            note="Add a short walkthrough of a real quote being put together."
            className="col-span-6"
          />
          <div className="col-span-6 max-lg:mt-10">
            <h2 className="max-w-[16ch] font-sans text-h2 font-semibold text-balance">
              Not sure which column you belong in?
            </h2>
            <p className="mt-6 max-w-[46ch] text-body leading-relaxed text-oninverse/70">
              Your account manager will recommend the package that matches what you actually need,
              not the one with the most ticks.
            </p>
            <div className="mt-9">
              <Button href="/contact" variant="inverse" arrow data-event="pricing_media_cta_click">
                Talk it through
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </ServiceBand>
  );
}

export function PriceListFinalCta() {
  return (
    <FinalCta
      title="Not sure which package fits? Start with the consultation."
      titleAccent="Start with the consultation."
      body="Your account manager will recommend the best package based on your business needs, including how much content you need added."
      primary={{ label: "Book a Call", href: "/contact", event: "pricing_final_cta_click" }}
      secondary={{ label: "Read the FAQ", href: "/faq", event: "pricing_faq_click" }}
      contactEvents={{ phone: "pricing_phone_click", email: "pricing_email_click" }}
    />
  );
}
