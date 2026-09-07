import type { ReactNode } from "react";

/*
  Placeholder discipline (brief §1): unverified facts never render as if they
  were proof. Styled quietly (not as an alarm) so pages read as in-progress
  rather than broken while these are swapped for the real thing pre-launch.
*/

// Future Elementor widget: "OMH Verified Slot"
export function VerifiedSlot({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-warm px-3 py-1 text-[12.5px] font-medium text-muted">
      {children}
    </span>
  );
}

// Future Elementor widget: "OMH Image" (with real asset swapped in)
export function Fpo({
  ratio,
  tag,
  title,
  note,
  className = "",
}: {
  ratio: string; // e.g. "16/10"
  tag: string;
  title: string;
  note: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${title} — ${note}`}
      style={{ aspectRatio: ratio }}
      className={`fpo-hatch relative flex items-center justify-center overflow-hidden rounded-media border border-line ${className}`}
    >
      <span className="absolute left-3.5 top-3.5 rounded-md border border-line bg-surface/85 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
        {tag}
      </span>
      <span className="max-w-[75%] text-center text-[14.5px] leading-snug text-muted">
        <b className="block font-sans text-body font-semibold text-ink">{title}</b>
      </span>
    </div>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`flex items-center text-[14px] font-semibold uppercase ${
        light
          ? "gap-3 tracking-[0.15em] text-oninverse/60"
          : "gap-2.5 tracking-[0.16em] text-muted"
      }`}
    >
      <span aria-hidden className={`h-0.5 w-5 ${light ? "bg-[#f2c675]" : "bg-amber"}`} />
      {children}
    </p>
  );
}

