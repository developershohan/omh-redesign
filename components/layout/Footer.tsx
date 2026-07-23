import Link from "next/link";
import { company, footerCols, legalLinks } from "@/lib/content/nav";

// Future Elementor widget: "OMH Footer" (brief §31)
export function Footer() {
  return (
    <footer className="border-t border-line bg-warm">
      <div className="container-omh pb-10 pt-16">
        <div className="grid grid-cols-[4fr_2.5fr_2.5fr_3fr] gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
          <div>
            <p className="font-sans text-[21px] font-bold tracking-tight leading-none">
              OMH<i className="not-italic text-amber">.</i>
            </p>
            <p className="mt-1 text-[10.5px] uppercase tracking-[0.14em] text-muted">
              {company.name}
            </p>
            <p className="mt-4 text-[18px] leading-relaxed text-muted">{company.positioning}</p>
            <p className="mt-3 text-[18px] leading-relaxed text-muted">
              <a href={company.phoneHref} className="hover:text-ink">
                {company.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${company.email}`} className="hover:text-ink">
                {company.email}
              </a>
              <br />
              {company.address} <span title="To be confirmed with the client">◈</span>
            </p>
          </div>
          {footerCols.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <p className="mb-3.5 font-sans text-sm font-semibold uppercase tracking-[0.1em]">
                {col.heading}
              </p>
              {col.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block py-1 text-[15.5px] text-muted hover:text-teal"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
        <div className="mt-11 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5 text-[13.5px] text-muted">
          <span>
            © {new Date().getFullYear()} {company.name} · Company No. {company.companyNo}{" "}
            <span title="To be confirmed with the client">◈</span>
          </span>
          {legalLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
