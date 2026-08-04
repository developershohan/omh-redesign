"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Entry reveal (brief §19). Purely additive: without JS or with reduced
// motion the content is simply visible. Elementor equivalent: entrance animation preset.
export function Reveal({ className = "", children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      // threshold must stay 0: a percentage threshold can never be reached by an
      // element taller than the viewport (a long article body never gets 12% of
      // itself on screen), which left the whole post stuck at opacity 0.
      // rootMargin does the "wait until it's properly in view" job instead.
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`rv ${className}`}>
      {children}
    </div>
  );
}
