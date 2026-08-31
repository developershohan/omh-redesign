"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SiteSearch } from "@/components/layout/SiteSearch";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";
import type { SearchEntry } from "@/lib/content/search-index";
import { primaryNav, company, type NavItem, type NavLink } from "@/lib/content/nav";

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
      className="block rounded-button px-2.5 py-2 text-label font-medium text-ink transition-colors hover:bg-warm hover:text-amber-deep"
    >
      {link.label}
    </Link>
  );
}

function isCurrent(pathname: string, item: NavItem) {
  if (item.href) return pathname === item.href || pathname.startsWith(`${item.href}/`);
  return (item.columns ?? []).some((col) => col.links.some((link) => pathname === link.href));
}

// Future Elementor widget: "OMH Header".
export function Header({ searchEntries }: { searchEntries: SearchEntry[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu
  const [menu, setMenu] = useState<string | null>(null); // open desktop dropdown
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenu(null);
      setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      data-scrolled={scrolled ? "" : undefined}
      className={`sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-line bg-warm/85 shadow-[0_10px_30px_-24px_rgb(16_24_40/0.5)] backdrop-blur-md"
          : "border-transparent bg-warm"
      }`}
    >
      <div
        className={`container-omh flex items-center gap-3 transition-[height] duration-300 max-lg:gap-3 xl:gap-6 ${
          scrolled ? "h-[68px]" : "h-[84px]"
        }`}
      >
        <Link href="/" aria-label="Online Marketing Help — home" className="flex shrink-0 flex-col gap-px">
          <b className="font-sans text-[21px] font-bold tracking-tight leading-none">
            OMH<i className="not-italic text-amber">.</i>
          </b>
          {/* The strapline is the widest part of the lockup. Between the
              desktop nav appearing (1024px) and ~1200px there is no room for it
              alongside seven nav items and the CTA, so only the wordmark shows. */}
          <span className="text-[10.5px] uppercase tracking-[0.14em] text-muted max-[1200px]:hidden max-lg:block">
            Online Marketing Help
          </span>
        </Link>

        <nav aria-label="Primary" className="ml-auto flex items-center gap-0.5 max-lg:hidden xl:gap-1">
          {primaryNav.map((item) => {
            const current = isCurrent(pathname, item);
            return item.columns ? (
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
                  className={`nav-item flex cursor-pointer items-center gap-1 whitespace-nowrap px-1.5 py-1.5 text-label font-medium xl:px-3 ${
                    current || menu === item.label ? "is-active" : ""
                  }`}
                >
                  {item.label}
                  <Chevron
                    className={`size-4 text-muted transition-transform duration-300 ${
                      menu === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {menu === item.label && (
                  <div className="absolute left-0 top-full z-50 pt-3">
                    <div
                      className={`menu-pop rounded-card border border-line bg-surface p-4 shadow-[0_28px_60px_-30px_rgb(16_24_40/0.55)] ${
                        // Sized by column count — "Get a Quote" has 3 columns and
                        // used to leave an empty cell in a hardcoded 4-col grid.
                        item.columns.length > 3
                          ? "grid w-[720px] grid-cols-4 gap-x-6"
                          : item.columns.length === 3
                            ? "grid w-[600px] grid-cols-3 gap-x-6"
                            : item.columns.length === 2
                              ? "grid w-[440px] grid-cols-2 gap-x-6"
                              : "w-[340px]"
                      }`}
                    >
                      {item.columns.map((col) => (
                        <div key={col.heading ?? item.label}>
                          {col.heading && (
                            <p className="mb-2 border-b border-line px-2.5 pb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
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
                aria-current={current ? "page" : undefined}
                className={`nav-item whitespace-nowrap px-1.5 py-1.5 text-label font-medium xl:px-3 ${current ? "is-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-3 xl:ml-6">
          {/* Seven top-level items leave no room for the number until 2xl; it
              is still in the mobile menu and the footer. The CTA is the primary
              action, so it keeps its space. */}
          <span className="max-2xl:hidden">
            <a
              href={company.phoneHref}
              className="mr-2 whitespace-nowrap text-label font-medium text-muted transition-colors hover:text-ink"
            >
              {company.phoneDisplay}
            </a>
          </span>
          <SiteSearch entries={searchEntries} />
          <ThemeToggle />
          <span className="max-md:hidden">
            <Button href="/contact" small className="whitespace-nowrap max-xl:px-3.5">
              Book a Growth Consultation
            </Button>
          </span>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="hidden size-10 cursor-pointer items-center justify-center rounded-button border border-line max-lg:flex"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-5" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="menu-pop border-t border-line bg-warm lg:hidden">
          <div className="container-omh max-h-[calc(100dvh-84px)] overflow-y-auto py-4">
            {primaryNav.map((item) =>
              item.columns ? (
                <details key={item.label} name="mobile-nav" className="group border-b border-line">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between py-3 font-sans text-body font-semibold [&::-webkit-details-marker]:hidden">
                    {item.label}
                    <Chevron className="size-5 text-amber-deep transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pb-3">
                    {item.columns.map((col) => (
                      <div key={col.heading ?? item.label} className="mb-1">
                        {col.heading && (
                          <p className="px-2.5 pb-1 pt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
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
                  className="flex min-h-12 items-center justify-between border-b border-line py-3 font-sans text-body font-semibold"
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="flex flex-col gap-3 py-5">
              <Button href="/contact" onClick={() => setOpen(false)}>
                Book a Growth Consultation
              </Button>
              <a
                href={company.phoneHref}
                onClick={() => setOpen(false)}
                className="text-center text-body text-muted"
              >
                {company.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
