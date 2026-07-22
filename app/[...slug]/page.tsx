import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Proof";
import { company, navLabels, readyPages } from "@/lib/content/nav";

// One catch-all for every route that isn't designed yet. Explicit routes
// (/, /wordpress-development, /contact, /design-system) take precedence, so this
// only ever renders for planned-but-unbuilt pages — no 404s during the demo.
// Future Elementor equivalent: a shared "Coming soon" template.

function titleFor(slug: string[]): string {
  const path = "/" + slug.join("/");
  return navLabels[path] ?? slug[slug.length - 1].replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${titleFor(slug)} — Coming soon` };
}

export default async function ComingSoon({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const title = titleFor(slug);

  return (
    <section className="border-b border-line bg-white">
      <div className="container-omh section-md">
        <div className="mx-auto max-w-[640px] text-center">
          <Eyebrow>Coming soon</Eyebrow>
          <h1 className="mb-5 mt-6 font-sans text-h1 font-semibold text-balance">
            {title}
          </h1>
          <p className="text-lead leading-relaxed text-ink/75">
            This page is part of the Online Marketing Help redesign and is being built next.
            The navigation shows the full planned site so you can see where everything will
            live — the pages below are already designed.
          </p>

          <ul className="mx-auto mt-9 grid max-w-[420px] gap-2.5 text-left">
            {readyPages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="flex items-center justify-between gap-4 rounded-card border border-line bg-warm px-5 py-4 transition-colors hover:border-teal/40 hover:bg-soft/50"
                >
                  <span className="font-sans text-[17px] font-semibold">{page.label}</span>
                  <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-teal">
                    View
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
            <Button href="/contact" arrow>
              Book a Growth Consultation
            </Button>
            <a href={company.phoneHref} className="text-[15px] font-medium text-muted hover:text-ink">
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
