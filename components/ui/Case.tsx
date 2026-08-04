import { ArrowRight, TextLink } from "@/components/ui/Button";
import { Fpo, VerifiedSlot } from "@/components/ui/Proof";
import Link from "next/link";

export type CaseMeta = {
  sector: string;
  challenge: string;
  work: string;
  period?: string; // omit → verified slot
  result?: string; // omit → verified slot
  href: string;
  sampleNote?: string;
};

// Future Elementor widget: "OMH Featured Case Study"
export function CaseStudyFeature({ c, media }: { c: CaseMeta; media: React.ReactNode }) {
  const rows: [string, React.ReactNode][] = [
    ["Challenge", c.challenge],
    ["Work", c.work],
    ["Period", c.period ?? <VerifiedSlot>Period — pending</VerifiedSlot>],
    ["Result", c.result ?? <VerifiedSlot>Verified result — pending</VerifiedSlot>],
  ];
  return (
    <div className="grid grid-cols-[7fr_5fr] items-start gap-8 max-lg:grid-cols-1">
      {media}
      <div className="rounded-card border border-line bg-surface p-8 max-sm:p-6">
        <p className="font-sans text-xl font-semibold">{c.sector}</p>
        {c.sampleNote && <p className="mt-1 text-[12.5px] text-muted">{c.sampleNote}</p>}
        <dl className="mt-4">
          {rows.map(([dt, dd]) => (
            <div key={dt} className="grid grid-cols-[92px_1fr] gap-x-4 border-t border-line py-3">
              <dt className="pt-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted">{dt}</dt>
              <dd className="text-bsm text-ink/85">{dd}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-4">
          <TextLink href={c.href}>Read the case study</TextLink>
        </div>
      </div>
    </div>
  );
}

// Future Elementor widget: "OMH Case Study Row"
export function CaseStudyRow({ c }: { c: CaseMeta }) {
  return (
    <Link
      href={c.href}
      className="grid grid-cols-[2fr_5fr_3fr_auto] items-center gap-5 border-b border-line px-1 py-5 transition-colors hover:bg-surface/75 max-sm:grid-cols-1 max-sm:gap-1.5"
    >
      <span className="font-sans text-body font-semibold">{c.sector}</span>
      <span className="text-body leading-snug text-muted">{c.work}</span>
      <span>{c.result ?? <VerifiedSlot>Verified result — pending</VerifiedSlot>}</span>
      <ArrowRight className="size-4 max-sm:hidden" />
    </Link>
  );
}

// Convenience media slot used until real evidence assets arrive
export function CaseEvidenceFpo() {
  return (
    <Fpo
      ratio="16/10"
      tag="Evidence · 16:10"
      title="Verified campaign data"
      note="Real dashboard screenshot for this case, with client permission."
    />
  );
}
