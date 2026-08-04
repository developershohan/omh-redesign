"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

/*
  The theme lives on <html data-theme>, set by the boot script in app/layout.tsx
  before first paint. That attribute is the source of truth, so this subscribes
  to it rather than keeping a second copy in React state. The server snapshot is
  "light" so the markup is stable; the observer corrects it on hydration.
*/
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme ?? "light",
    () => "light",
  );
  const isDark = theme === "dark";

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("omh-theme", next);
    } catch {
      // Private browsing: the choice just will not persist.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      className="flex size-10 cursor-pointer items-center justify-center rounded-button border border-line text-muted transition-colors hover:border-ink/25 hover:text-ink"
    >
      <span className="sr-only">{isDark ? "Switch to light theme" : "Switch to dark theme"}</span>
      {isDark ? <Sun className="size-[18px]" aria-hidden /> : <Moon className="size-[18px]" aria-hidden />}
    </button>
  );
}
