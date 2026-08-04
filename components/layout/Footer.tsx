import Link from "next/link";
import { ArrowRight } from "@/components/ui/Button";
import { company, footerCols, legalLinks } from "@/lib/content/nav";

const linkClass =
  "footer-link block py-1 text-label leading-snug text-oninverse/62 transition-colors hover:text-oninverse focus-visible:text-oninverse";
const headingClass =
  "mb-4 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-oninverse";

/*
  The footer carries the last impression, so it runs on the same ink ground as
  the closing CTA above it: one continuous dark block rather than a pale link
  grid bolted to the bottom of the page.
  Future Elementor widget: "OMH Footer" (brief §31).
*/
export function Footer() {
  const [solutions, services, companyLinks] = footerCols;

  return (
    <footer className="bg-inverse text-oninverse">
      <div className="container-omh">
        {/* Contact strip: the two things people actually come down here for. */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-8 border-b border-oninverse/12 py-12 max-md:grid-cols-1 max-md:py-9">
          <div>
            <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-amber">
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
            <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-oninverse/50">
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
            <p className="font-sans text-[21px] font-bold leading-none tracking-tight">
              OMH<i className="not-italic text-amber">.</i>
            </p>
            <p className="mt-2 text-[13px] uppercase tracking-[0.14em] text-oninverse/50">
              {company.name}
            </p>
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

        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-oninverse/12 py-7 text-[14px] text-oninverse/50">
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
