import type { CaseStudy } from "@/lib/content/case-studies";

/*
  Project visual for case studies.

  There is no approved client photography for these projects, and inventing
  dashboards or dropping in stock imagery is off-limits (brief §2). So each
  project gets an intentional branded plate built from information the study
  already publishes: sector, category, position in the series and the headline
  result. Brand tokens only — no random gradients, no decorative blobs.
*/

type Tone = "ink" | "soft";

type ToneStyles = {
  panel: string;
  grid: string;
  arc: string;
  label: string;
  index: string;
  rule: string;
  meta: string;
};

const tones: Record<Tone, ToneStyles> = {
  ink: {
    panel: "border-ink/70 bg-inverse text-oninverse",
    grid: "[background-image:linear-gradient(rgb(255_255_255/0.055)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.055)_1px,transparent_1px)]",
    arc: "border-amber/25",
    label: "text-amber",
    index: "text-oninverse/25",
    rule: "border-oninverse/15",
    meta: "text-oninverse/60",
  },
  soft: {
    panel: "border-soft-dark bg-soft text-ink",
    grid: "[background-image:linear-gradient(rgb(16_24_40/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(16_24_40/0.05)_1px,transparent_1px)]",
    arc: "border-amber-deep/20",
    label: "text-amber-deep",
    index: "text-ink/20",
    rule: "border-ink/15",
    meta: "text-ink/70",
  },
};

export function CaseStudyVisual({
  study,
  index,
  ratio = "4/3",
  className = "",
}: {
  study: CaseStudy;
  index: number;
  ratio?: string;
  className?: string;
}) {
  const tone = tones[index % 2 === 0 ? "ink" : "soft"];
  // Lead on an outcome, not a timeframe — some studies list the implementation
  // period first, which reads as a result when it is set this large.
  const headline = study.results.find((r) => /%|st\b/.test(r.value)) ?? study.results[0];

  return (
    <div
      role="img"
      aria-label={`${study.client} — ${study.sector} ${study.category} project`}
      style={{ aspectRatio: ratio }}
      className={`media-card relative flex w-full flex-col justify-between overflow-hidden rounded-media border p-8 max-sm:p-6 ${tone.panel} ${className}`}
    >
      <div aria-hidden className={`absolute inset-0 [background-size:44px_44px] ${tone.grid}`} />
      <div
        aria-hidden
        className={`absolute -bottom-[38%] -right-[16%] aspect-square w-[68%] rounded-full border-[28px] ${tone.arc}`}
      />

      <div className="relative flex items-start justify-between gap-6">
        <p className={`font-sans text-[14px] font-semibold uppercase tracking-[0.16em] ${tone.label}`}>
          {study.category}
        </p>
        <p className={`font-sans text-[18px] font-semibold tabular-nums ${tone.index}`}>
          {String(index + 1).padStart(2, "0")}
        </p>
      </div>

      <div className="relative">
        <p className="font-sans text-h3 font-semibold leading-tight text-balance">{study.sector}</p>
        {headline && (
          <div className={`mt-6 border-t pt-5 ${tone.rule}`}>
            <p className="font-sans text-[clamp(30px,24px+1.4vw,42px)] font-semibold leading-none">
              {headline.value}
            </p>
            <p className={`mt-2 text-body leading-snug ${tone.meta}`}>{headline.label}</p>
          </div>
        )}
      </div>
    </div>
  );
}
