import type { ReactNode } from "react";

// Single "label + hairline rule + content" band shared by every service page.
// Previously duplicated near-identically across 6 files (WordPress Dev/Maintenance,
// Shopify, Google Ads, SEO, Amazon PPC) with drifting spacing/border rules — this
// is the converged version. Each page keeps its own accent colour via `accent`.

export type ServiceBandTone = "warm" | "white" | "mist" | "navy" | "dark";

const toneClass: Record<ServiceBandTone, string> = {
  warm: "",
  white: "border-b border-line bg-surface",
  mist: "bg-tint-blue text-ink",
  navy: "bg-[#0e2035] text-oninverse",
  dark: "bg-[#211a12] text-oninverse",
};

const darkTones: ServiceBandTone[] = ["navy", "dark"];

export function ServiceBand({
  label,
  id,
  tone = "warm",
  accent = "bg-amber",
  children,
}: {
  label: string;
  id?: string;
  tone?: ServiceBandTone;
  accent?: string;
  children: ReactNode;
}) {
  const dark = darkTones.includes(tone);
  return (
    <section id={id} className={toneClass[tone] || undefined}>
      <div className="container-omh section-md">
        <div
          className={`mb-11 flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.17em] ${dark ? "text-oninverse/55" : "text-muted"}`}
        >
          <span aria-hidden className={`h-0.5 w-7 shrink-0 ${accent}`} />
          <span className="shrink-0">{label}</span>
          <span aria-hidden className={`h-px flex-1 ${dark ? "bg-oninverse/12" : "bg-line"}`} />
        </div>
        {children}
      </div>
    </section>
  );
}
