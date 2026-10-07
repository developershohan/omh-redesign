import Link from "next/link";
import { CaseStudyVisual } from "@/components/case-studies/CaseStudyVisual";
import { ArrowRight } from "@/components/ui/Button";
import { caseStudies, type CaseStudy } from "@/lib/content/case-studies";

// Previous/next as two cards with a cover thumbnail, so the way on is a
// visual choice rather than two bare text links.
export function CaseStudyNavigation({ study }: { study: CaseStudy }) {
  const index = caseStudies.indexOf(study);
  const links = [
    { label: "Previous project", target: caseStudies[(index - 1 + caseStudies.length) % caseStudies.length], back: true },
    { label: "Next project", target: caseStudies[(index + 1) % caseStudies.length], back: false },
  ];

  return (
    <nav aria-label="More case studies" className="border-b border-line bg-surface">
      <div className="container-omh section-sm grid gap-6 md:grid-cols-2">
        {links.map(({ label, target, back }) => (
          <Link
            key={label}
            href={`/case-studies/${target.slug}`}
            className="surface-card group grid grid-cols-[112px_1fr_auto] items-center gap-5 rounded-card border border-line bg-surface p-4 pr-6 max-sm:grid-cols-[88px_1fr_auto]"
          >
            <CaseStudyVisual study={target} ratio="1/1" frameClassName="rounded-[10px]" />
            <span className="min-w-0">
              <span className="block text-[14px] font-semibold uppercase tracking-[0.14em] text-muted">{label}</span>
              <span className="mt-2 block font-sans text-h4 font-semibold">{target.client}</span>
              <span className="mt-1 block text-body text-muted">
                {target.category} · {target.sector}
              </span>
            </span>
            <ArrowRight
              className={`size-5 shrink-0 text-amber-deep transition-transform duration-300 ${back ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
}
