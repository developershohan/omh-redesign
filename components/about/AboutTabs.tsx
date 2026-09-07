"use client";

import { useState } from "react";

/*
  The live page presents the three sustainability initiatives as tabs, so this
  keeps that shape. Panels are rendered but hidden rather than unmounted, so the
  copy stays in the page for search engines and for find-in-page.
*/
export function AboutTabs({
  items,
}: {
  items: readonly { title: string; stat: string; statLabel: string; body: readonly string[] }[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-12 gap-x-12 gap-y-8 max-lg:block">
      <div role="tablist" aria-label="Sustainability initiatives" className="col-span-4 max-lg:mb-8">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            id={`sustain-tab-${index}`}
            aria-selected={active === index}
            aria-controls={`sustain-panel-${index}`}
            onClick={() => setActive(index)}
            className={`flex w-full cursor-pointer items-baseline gap-4 border-b border-line py-5 text-left transition-colors first:border-t ${
              active === index ? "text-ink" : "text-ink/70 hover:text-amber-deep"
            }`}
          >
            <span
              aria-hidden
              className={`font-sans text-[18px] font-semibold tabular-nums ${
                active === index ? "text-amber-deep" : "text-muted"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-sans text-h4 font-semibold leading-snug">{item.title}</span>
          </button>
        ))}
      </div>

      <div className="col-span-8">
        {items.map((item, index) => (
          <div
            key={item.title}
            role="tabpanel"
            id={`sustain-panel-${index}`}
            aria-labelledby={`sustain-tab-${index}`}
            hidden={active !== index}
          >
            <p className="font-sans text-[clamp(44px,34px+2.4vw,72px)] font-semibold leading-none text-amber-deep">
              {item.stat}
            </p>
            <p className="mt-3 text-[14px] font-semibold uppercase tracking-[0.15em] text-muted">
              {item.statLabel}
            </p>
            <div className="mt-8 grid gap-5 border-t border-line pt-7">
              {item.body.map((paragraph) => (
                <p key={paragraph} className="max-w-[68ch] text-body leading-relaxed text-ink/75">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
