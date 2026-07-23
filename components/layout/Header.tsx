"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { primaryNav, company, type NavLink } from "@/lib/content/nav";

// Ready = designed in this preview; Soon = falls through to the coming-soon page.
function Tag({ ready }: { ready?: boolean }) {
  return ready ? (
    <span className="shrink-0 rounded-full border border-teal/30 bg-teal/10 px-1.5 py-px text-[10px] font-semibold uppercase tracking-[0.06em] text-teal">
      Ready
    </span>
  ) : (
    <span className="shrink-0 rounded-full border border-line bg-warm px-1.5 py-px text-[10px] font-semibold uppercase tracking-[0.06em] text-muted/75">
      Soon
    </span>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MenuLink({ link, onClick }: { link: NavLink; onClick?: () => void }) {
  return (
    <Link
      href={link.href}
      onClick={onClick}
      className="flex items-center justify-between gap-3 rounded-button px-2.5 py-2 text-[14.5px] transition-colors hover:bg-warm"
    >
      <span className={link.ready ? "font-medium text-ink" : "text-muted"}>{link.label}</span>
      <Tag ready={link.ready} />
    </Link>
  );
}

// Future Elementor widget: "OMH Header".
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu
  const [menu, setMenu] = useState<string | null>(null); // open desktop dropdown

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-warm transition-[box-shadow,border-color] duration-200 ${
        scrolled ? "border-b border-line shadow-[0_1px_0_rgba(16,24,40,0.02)]" : "border-b border-transparent"
      }`}
    >
      <div
        className={`container-omh flex items-center gap-8 transition-[height] duration-200 max-xl:gap-3 ${
          scrolled ? "h-[68px]" : "h-[84px]"
        }`}
      >
        <Link href="/" aria-label="Online Marketing Help — home" className="flex flex-col gap-px">
          <b className="font-sans text-[21px] font-bold tracking-tight leading-none">
            OMH<i className="not-italic text-amber">.</i>
          </b>
          <span className="text-[10.5px] uppercase tracking-[0.14em] text-muted">
            Online Marketing Help
          </span>
        </Link>

        <nav aria-label="Primary" className="ml-auto flex items-center gap-1 max-xl:hidden">
          {primaryNav.map((item) =>
            item.columns ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setMenu(item.label)}
                onMouseLeave={() => setMenu(null)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setMenu(null);
                }}
              >
                <button
                  type="button"
                  aria-expanded={menu === item.label}
                  aria-haspopup="true"
                  onClick={() => setMenu(menu === item.label ? null : item.label)}
                  className="flex items-center gap-1 px-3 py-1.5 text-[15.5px] font-medium"
                >
                  {item.label}
                  <Chevron
                    className={`size-4 text-muted transition-transform duration-200 ${
                      menu === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {menu === item.label && (
                  <div className="absolute left-0 top-full z-50 pt-2.5">
                    <div
                      className={`rounded-card border border-line bg-white p-4 shadow-[0_24px_50px_-28px_rgb(16_24_40/0.5)] ${
                        item.columns.length > 1
                          ? "grid w-[720px] grid-cols-4 gap-x-5"
                          : "w-[320px]"
                      }`}
                    >
                      {item.columns.map((col) => (
                        <div key={col.heading ?? item.label}>
                          {col.heading && (
                            <p className="mb-1.5 px-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                              {col.heading}
                            </p>
                          )}
                          <ul>
                            {col.links.map((link) => (
                              <li key={link.href}>
                                <MenuLink link={link} onClick={() => setMenu(null)} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className="relative px-3 py-1.5 text-[15.5px] font-medium after:absolute after:bottom-0 after:left-3 after:h-[1.5px] after:w-0 after:bg-teal after:transition-[width] after:duration-200 hover:after:w-[calc(100%-24px)]"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <a
          href={company.phoneHref}
          className="whitespace-nowrap text-[15px] text-muted hover:text-ink max-xl:hidden"
        >
          {company.phoneDisplay}
        </a>
        <span className="max-xl:ml-auto max-md:hidden">
          <Button href="/contact" small>
            Book a Growth Consultation
          </Button>
        </span>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="hidden size-11 items-center justify-center rounded-button max-xl:flex max-md:ml-auto"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-6" aria-hidden>
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-warm xl:hidden">
          <div className="container-omh max-h-[calc(100dvh-84px)] overflow-y-auto py-4">
            {primaryNav.map((item) =>
              item.columns ? (
                <details key={item.label} name="mobile-nav" className="group border-b border-line">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between py-3 font-sans text-[17px] font-semibold [&::-webkit-details-marker]:hidden">
                    {item.label}
                    <Chevron className="size-5 text-teal transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pb-3">
                    {item.columns.map((col) => (
                      <div key={col.heading ?? item.label} className="mb-1">
                        {col.heading && (
                          <p className="px-2.5 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                            {col.heading}
                          </p>
                        )}
                        {col.links.map((link) => (
                          <MenuLink key={link.href} link={link} onClick={() => setOpen(false)} />
                        ))}
                      </div>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center justify-between border-b border-line py-3 font-sans text-[17px] font-semibold"
                >
                  {item.label}
                  <Tag />
                </Link>
              ),
            )}
            <div className="flex flex-col gap-3 py-5">
              <Button href="/contact">Book a Growth Consultation</Button>
              <a href={company.phoneHref} className="text-center text-bsm text-muted">
                {company.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
