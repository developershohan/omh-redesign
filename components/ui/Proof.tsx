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
      <span className="absolute left-3.5 top-3.5 rounded-md border border-line bg-white/85 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
        {tag}
      </span>
      <span className="max-w-[75%] text-center text-[14.5px] leading-snug text-muted">
        <b className="block font-sans text-[15px] font-semibold text-ink">{title}</b>
      </span>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-muted before:h-0.5 before:w-5 before:bg-amber before:content-['']">
      {children}
    </p>
  );
}

// The direction's margin-label scaffold: sticky small-caps label beside content.
// Future Elementor widget: "OMH Section" (label + content columns).
export function Section({
  label,
  id,
  children,
}: {
  label: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="container-omh pt-[clamp(64px,42px+3.5vw,96px)]">
      <div className="grid grid-cols-12 gap-x-6 border-t border-line pt-14 max-lg:block">
        <div className="col-span-2 max-lg:mb-6">
          <p className="sticky top-6 flex items-center gap-2.5 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-muted before:h-0.5 before:w-[18px] before:bg-amber before:content-[''] max-lg:static">
            {label}
          </p>
        </div>
        <div className="col-span-10">{children}</div>
      </div>
    </section>
  );
}
