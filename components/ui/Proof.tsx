import type { ReactNode } from "react";

/*
  Placeholder discipline (brief §1): unverified facts render as unmistakable
  amber slots; imagery without a real asset renders as a labelled FPO frame.
  Nothing in these components can be mistaken for real proof.
*/

// Future Elementor widget: "OMH Verified Slot"
export function VerifiedSlot({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border-[1.5px] border-dashed border-[#b9a26b] bg-amber/10 px-3 py-1.5 text-[13.5px] font-semibold tracking-wide text-[#7a5a1e]">
      <span aria-hidden className="text-xs text-amber">◈</span>
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
        <b className="mb-1 block font-sans text-[15px] font-semibold text-ink">{title}</b>
        {note}
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
