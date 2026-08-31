import type { ReactNode } from "react";

// Native <details> accordion (FAQ pattern, brief §18). `group` name makes the
// set exclusive — no JS. Future Elementor widget: "OMH Accordion".
// ponytail: native details/summary; swap for shadcn/ui only if animated height is demanded.
export function Accordion({
  items,
  group,
}: {
  items: readonly { q: string; a: ReactNode }[];
  group?: string;
}) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} name={group} className="group py-1">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 font-sans text-h4 font-semibold [&::-webkit-details-marker]:hidden">
            {item.q}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="size-5 shrink-0 text-amber-deep transition-transform group-open:rotate-45"
              aria-hidden
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <div className="pb-5 text-body text-ink/85">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
