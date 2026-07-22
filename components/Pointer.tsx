"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

/*
  Publishes pointer position inside the element as CSS custom properties:
  --px/--py (0–1), --dx/--dy (−1 to 1) and --on (0/1 on enter/leave).

  What to do with them is left entirely to CSS, so this one component drives
  both the hero parallax and the featured-card spotlight. The CSS that consumes
  the vars is gated behind prefers-reduced-motion + pointer:fine, so this is
  inert on touch and for users who asked for less motion. Nothing about layout
  depends on it — the page is identical with JS off.

  Elementor equivalent: a short custom-JS snippet on the container.
*/
export function Pointer({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function track(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--px", px.toFixed(3));
    el.style.setProperty("--py", py.toFixed(3));
    el.style.setProperty("--dx", (px * 2 - 1).toFixed(3));
    el.style.setProperty("--dy", (py * 2 - 1).toFixed(3));
    el.style.setProperty("--on", "1");
  }

  function reset() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--dx", "0");
    el.style.setProperty("--dy", "0");
    el.style.setProperty("--on", "0");
  }

  return (
    <div ref={ref} onPointerMove={track} onPointerLeave={reset} className={className}>
      {children}
    </div>
  );
}
