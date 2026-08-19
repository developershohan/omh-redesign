import Link from "next/link";
import { ServiceBand } from "@/components/services/ServiceBand";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/content/nav";
import { subscriptionThankYou, type ThankYouPage as PageData } from "@/lib/content/thank-you";

/*
  Phase 6 — one renderer for the seven confirmation pages, plus the subscription
  welcome below. Funnel pages share one layout by the same directive as the
  Phase 5 forms: a visitor who lands here has just submitted something and wants
  confirmation and a next step, not a bespoke page each time.

  Scaffold rule: every section is a `ServiceBand`.
*/

// Phone numbers and the support address are written into the live copy rather
// than sitting in their own fields, so they get linked in place instead of being
// pulled out — the sentence stays exactly as published.
function withContactLinks(text: string) {
  const pattern = /(\+?44 0203 4893934|0203 4893934|support@onlinemarketinghelp\.co\.uk)/g;
  return text.split(pattern).map((part, i) =>
    pattern.test(part) ? (
      <Link
        key={i}
        href={part.includes("@") ? `mailto:${part}` : company.phoneHref}
        className="font-semibold text-ink underline underline-offset-4 hover:text-amber-deep"
      >
        {part}
      </Link>
    ) : (
      part
    ),
  );
}

export function ThankYouPage({ page }: { page: PageData }) {
  return (
    <main>
      <ServiceBand label={page.title} tone="warm" accent="bg-teal" labelStyle="underline">
        <div className="max-w-[62ch]">
          <h1 className="font-sans text-display font-semibold text-balance">{page.heading}</h1>
          {page.body.map((paragraph) => (
            <p key={paragraph} className="mt-6 text-lead leading-relaxed text-ink/75">
              {withContactLinks(paragraph)}
            </p>
          ))}

          {page.links && (
            <div className="mt-9 border-t border-line pt-7">
              {page.linksLead && <p className="text-body leading-relaxed text-ink/75">{page.linksLead}</p>}
              <ul className="mt-5 flex flex-col gap-3">
                {page.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 font-sans text-h4 font-semibold text-ink hover:text-amber-deep"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-3.5 max-sm:flex-col max-sm:items-stretch">
            <Button href="/case-studies" arrow data-event={`${page.slug}_case_studies_click`}>
              See recent work
            </Button>
            <Button href="/insights" variant="secondary" data-event={`${page.slug}_insights_click`}>
              Read the insights
            </Button>
          </div>
        </div>
      </ServiceBand>

      {page.packages && (
        <ServiceBand
          label={page.packages.heading}
          tone="mist"
          accent="bg-teal"
          labelStyle="underline"
        >
          <div className="max-w-[62ch]">
            <h2 className="font-sans text-h2 font-semibold text-balance">
              Every starter package, side by side.
            </h2>
            <p className="mt-5 text-body leading-relaxed text-ink/75">
              The live page repeats the package summaries here. They are the same figures as the
              full price list, so this links there instead of showing a shorter copy of it.
            </p>
            <div className="mt-8">
              <Button href="/pricing" arrow data-event={`${page.slug}_pricing_click`}>
                View the price list
              </Button>
            </div>
          </div>
        </ServiceBand>
      )}
    </main>
  );
}

export function SubscriptionThankYouPage() {
  const page = subscriptionThankYou;
  return (
    <main>
      <ServiceBand label={page.title} tone="warm" accent="bg-teal" labelStyle="underline">
        <h1 className="max-w-[20ch] font-sans text-display font-semibold text-balance">
          {page.heading}
        </h1>
      </ServiceBand>

      <ServiceBand label={page.socialHeading} tone="white" accent="bg-teal" labelStyle="underline">
        <ul className="flex flex-wrap gap-3">
          {page.social.map((channel) => (
            <li key={channel.href}>
              <Link
                href={channel.href}
                rel="noopener noreferrer"
                target="_blank"
                className="inline-flex min-h-12 items-center rounded-full border border-line bg-surface px-5 text-body font-semibold text-ink transition-colors hover:border-teal hover:text-amber-deep"
              >
                {channel.label}
              </Link>
            </li>
          ))}
        </ul>
      </ServiceBand>

      <ServiceBand label={page.resourcesHeading} tone="mist" accent="bg-teal" labelStyle="underline">
        <div className="max-w-[70ch] rounded-card border border-line bg-surface p-9 max-sm:p-6">
          <h2 className="font-sans text-h3 font-semibold text-balance">{page.resource.title}</h2>
          <p className="mt-5 text-body leading-relaxed text-ink/75">{page.resource.body}</p>
          {/* The live page's three download buttons all point at `href="#"` — no
              file exists. Shipping a dead link is worse than saying so. */}
          <p className="mt-7 border-t border-line pt-6 text-bsm text-muted">
            {page.resource.downloadLabel} — available shortly. Ask us for a copy in the meantime on{" "}
            <Link href={company.phoneHref} className="font-semibold text-ink hover:text-amber-deep">
              {company.phoneDisplay}
            </Link>
            .
          </p>
        </div>
      </ServiceBand>
    </main>
  );
}
