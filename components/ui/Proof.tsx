import Image from "@/components/ui/SiteImage";
import { Star } from "lucide-react";
import type { ReactNode } from "react";

/*
  Placeholder discipline (brief §1): unverified facts never render as if they
  were proof. Styled quietly (not as an alarm) so pages read as in-progress
  rather than broken while these are swapped for the real thing pre-launch.
*/

// Future Elementor widget: "OMH Verified Slot"
export function VerifiedSlot({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-warm px-3 py-1 text-body font-medium text-muted">
      {children}
    </span>
  );
}

// Verified company-level review proof (proof brief, Oct 2026): 37 Trustpilot reviews
// averaging 4.95 and 10 Google reviews averaging 4.60. Never relabel it as a
// service-specific rating, and don't combine the averages — the dashboard's 4.6
// overall method is unconfirmed. It replaces the pending proof chips that used to
// sit under the service heroes; add service-specific items only once verified.
export const REVIEW_PROOF = "47 Reviews Across Trustpilot & Google";

export function ReviewProof({ heading, className = "" }: { heading: string; className?: string }) {
  return (
    <div className={`border-t border-line pt-5 ${className}`}>
      <p className="mb-3.5 text-[14px] font-semibold uppercase tracking-[0.14em] text-muted">{heading}</p>
      <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2 font-sans text-[16px] font-semibold text-ink">
        <Star className="size-4 shrink-0 fill-amber text-amber" aria-hidden="true" />
        {REVIEW_PROOF}
      </p>
    </div>
  );
}

// Illustrative evidence images; client verification remains in VerifiedSlot.
export function Fpo({ ratio, tag, title, source, alt, className = "" }: {
  ratio: string;
  tag: string;
  title: string;
  note: string;
  source: string;
  alt?: string;
  className?: string;
}) {
  return (
    <figure style={{ aspectRatio: ratio }} className={"relative overflow-hidden rounded-media border border-line " + className}>
      <Image src={source} alt={alt ?? title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      <figcaption className="absolute bottom-3 left-3 rounded-md border border-line bg-surface/95 px-2 py-1 text-body font-semibold text-ink">
        {tag} · Illustration
      </figcaption>
    </figure>
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

