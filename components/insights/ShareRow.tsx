"use client";

import { useState, useSyncExternalStore } from "react";
import { Check, Link2, Share2 } from "lucide-react";

const enc = encodeURIComponent;

export function ShareRow({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);
  // Server renders without the native share button; the client adds it when the browser supports it.
  const native = useSyncExternalStore(() => () => {}, () => typeof navigator.share === "function", () => false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the X / LinkedIn / email links still work */
    }
  };

  const chip =
    "inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-[15px] font-semibold text-ink/80 transition-colors hover:border-amber hover:text-amber-deep";

  return (
    <div>
      <p className="text-[14px] font-semibold uppercase tracking-[0.15em] text-muted">Share this article</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={copy} className={chip} data-event="insight_share_copy">
          {copied ? <Check className="size-4 text-amber-deep" aria-hidden /> : <Link2 className="size-4" aria-hidden />}
          {copied ? "Copied" : "Copy link"}
        </button>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`} target="_blank" rel="noopener noreferrer" className={chip} data-event="insight_share_linkedin">
          LinkedIn
        </a>
        <a href={`https://x.com/intent/post?url=${enc(url)}&text=${enc(title)}`} target="_blank" rel="noopener noreferrer" className={chip} data-event="insight_share_x">
          X
        </a>
        <a href={`mailto:?subject=${enc(title)}&body=${enc(url)}`} className={chip} data-event="insight_share_email">
          Email
        </a>
        {native && (
          <button type="button" onClick={() => navigator.share({ title, url }).catch(() => {})} className={chip} data-event="insight_share_native">
            <Share2 className="size-4" aria-hidden />
            More
          </button>
        )}
      </div>
    </div>
  );
}
