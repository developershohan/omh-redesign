import { statSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { Pointer } from "@/components/Pointer";
import { ArrowRight } from "@/components/ui/Button";
import { company, footerCols, legalLinks } from "@/lib/content/nav";

const DECK = "/company-deck.pdf";

// The wordmark band's viewBox. At 137 units the name's ink runs 101 above the
// baseline and 30 below (measured), so a baseline at 126 leaves ~25 units clear
// above the caps and below the descenders.
const WORDMARK_VIEWBOX = "0 0 1600 180";

// The name spans 90% of the band (x 80–1520). Its fill is a left-to-right
// gradient that turns into the site's light-amber heading accent from
// "rketing" (≈45%) through "Help".
function WordmarkText({ fill, mask }: { fill: string; mask?: string }) {
  return (
    <text
      x="80"
      y="126"
      textLength="1440"
      lengthAdjust="spacing"
      fontSize="137"
      fill={fill}
      mask={mask}
      className="font-sans font-semibold"
    >
      {company.name}
    </text>
  );
}

// ponytail: the deck link renders only once public/company-deck.pdf exists, and
// its size label is read from the file, so it can't 404 or go stale on replace.
function deckSize() {
  try {
    const mb = statSync(path.join(process.cwd(), "public", DECK)).size / 1e6;
    return mb >= 1 ? `${mb.toFixed(1).replace(/\.0$/, "")}MB` : `${Math.max(1, Math.round(mb * 1000))}KB`;
  } catch {
    return null;
  }
}

const linkClass =
  "footer-link block py-1 text-label leading-snug text-oninverse/62 transition-colors hover:text-oninverse focus-visible:text-oninverse";
const headingClass =
  "mb-4 font-sans text-[14px] font-semibold uppercase tracking-[0.14em] text-oninverse";

/*
  The footer carries the last impression, so it runs on the same ink ground as
  the closing CTA above it: one continuous dark block rather than a pale link
  grid bolted to the bottom of the page.
  Future Elementor widget: "OMH Footer" (brief §31).
*/
export function Footer() {
  const [solutions, services, companyLinks] = footerCols;
  const deck = deckSize();

  return (
    <footer className="bg-inverse text-oninverse">
      <div className="container-omh">
        {/* Contact strip: the two things people actually come down here for. */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-8 border-b border-oninverse/12 py-12 max-md:grid-cols-1 max-md:py-9">
          <div>
            <p className="font-sans text-[14px] font-semibold uppercase tracking-[0.16em] text-amber">
              Start a conversation
            </p>
            <a
              href={company.phoneHref}
              className="mt-3 block font-sans text-[clamp(28px,22px+1.4vw,40px)] font-semibold leading-none transition-colors hover:text-amber"
            >
              {company.phoneDisplay}
            </a>
          </div>
          <div className="md:justify-self-end md:text-right">
            <p className="font-sans text-[14px] font-semibold uppercase tracking-[0.16em] text-oninverse/50">
              Or send the brief
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-3 inline-flex items-center gap-3 break-all font-sans text-[clamp(19px,17px+0.5vw,24px)] font-semibold transition-colors hover:text-amber"
            >
              {company.email}
              <ArrowRight className="size-5 shrink-0 max-sm:hidden" />
            </a>
          </div>
        </div>

        {/* Four columns: brand 4 / solutions 3 / services 3 / company 2. The
            services list runs as one column so the footer reads as four groups,
            not five. */}
        <div className="grid grid-cols-12 gap-x-8 gap-y-12 py-14 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div className="col-span-4 max-lg:col-span-full">
            <Image src="/images/logo-white.png" alt={company.name} width={180} height={44} className="h-auto w-[180px]" />
            <p className="mt-5 max-w-[38ch] text-body leading-relaxed text-oninverse/62">
              {company.positioning}
            </p>
            <address className="mt-5 not-italic text-body leading-relaxed text-oninverse/62">
              {company.address}
            </address>
          </div>

          <nav aria-label={solutions.heading} className="col-span-3 max-lg:col-span-1">
            <h2 className={headingClass}>{solutions.heading}</h2>
            {solutions.links.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </nav>

          <nav aria-label={services.heading} className="col-span-3 max-lg:col-span-1">
            <h2 className={headingClass}>{services.heading}</h2>
            {services.links.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </nav>

          <nav aria-label={companyLinks.heading} className="col-span-2 max-lg:col-span-1">
            <h2 className={headingClass}>{companyLinks.heading}</h2>
            {companyLinks.links.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Wordmark band, in the site's own vocabulary: the hero's 48px grid and
          amber glow behind a faint watermark of the name, and the ink cards'
          pointer spotlight, which here lights the letters under the cursor.
          Decorative (the logo already names the company), so hidden from
          assistive tech. */}
      <div aria-hidden>
        <Pointer className="footer-wordmark relative">
          {/* relative: paints above the grid glints in .footer-wordmark::before */}
          <svg viewBox={WORDMARK_VIEWBOX} className="relative block h-auto w-full">
            <defs>
              {/* Colour runs left to right: faint white, then light amber. */}
              <linearGradient id="fw-fill" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1600" y2="0">
                <stop offset="0.45" stopColor="currentColor" stopOpacity="0.22" />
                <stop offset="0.6" stopColor="#f2c675" stopOpacity="0.36" />
                <stop offset="0.8" stopColor="#f2c675" stopOpacity="0.44" />
              </linearGradient>
              {/* The top-to-bottom fade is a mask, so it combines with that colour. */}
              <linearGradient id="fw-fade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#fff" />
                <stop offset="1" stopColor="#fff" stopOpacity="0.25" />
              </linearGradient>
              <mask id="fw-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1600" height="180">
                <rect width="1600" height="180" fill="url(#fw-fade)" />
              </mask>
            </defs>
            <WordmarkText fill="url(#fw-fill)" mask="url(#fw-mask)" />
          </svg>
          <svg viewBox={WORDMARK_VIEWBOX} className="footer-wordmark-lit absolute inset-0 block h-full w-full">
            <defs>
              <linearGradient id="fw-lit" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1600" y2="0">
                <stop offset="0.45" stopColor="#f8eddc" stopOpacity="0.6" />
                <stop offset="0.6" stopColor="#f2c675" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <WordmarkText fill="url(#fw-lit)" />
          </svg>
        </Pointer>
      </div>

      <div className="container-omh">
        {deck && (
          <div className="py-8">
            <a
              href={DECK}
              download="Online-Marketing-Help-Company-Deck.pdf"
              data-event="footer_company_deck_download"
              className="group inline-flex items-center gap-4"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-amber text-inverse transition-transform duration-300 group-hover:scale-110">
                <Download aria-hidden className="size-5" strokeWidth={2.25} />
              </span>
              <span>
                <span className="block font-sans text-lg leading-tight underline decoration-oninverse decoration-1 underline-offset-4 transition-colors group-hover:decoration-amber md:text-xl">
                  Company Deck
                </span>
                <span className="block pt-1 text-body text-oninverse/50 md:text-lg">PDF, {deck}</span>
              </span>
            </a>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-oninverse/12 py-7 text-[18px] text-oninverse/50">
          <span>
            © {new Date().getFullYear()} {company.name} · Company No. {company.companyNo}
          </span>
          <span className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-oninverse">
                {link.label}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
