import type { ReactNode } from "react";

export function HighlightedText({
  text,
  highlight,
  highlightClassName = "text-amber-deep",
}: {
  text: string;
  highlight?: string;
  highlightClassName?: string;
}) {
  if (!highlight || !text.includes(highlight)) return <>{text}</>;

  const start = text.indexOf(highlight);
  return (
    <>
      {text.slice(0, start)}
      <span className={highlightClassName}>{highlight}</span>
      {text.slice(start + highlight.length)}
    </>
  );
}

export function ServiceSectionIntro({
  title,
  accent,
  body,
  size = "lg",
  className = "",
  headingMaxWidthClassName = "max-w-[22ch]",
  headingClassName = "",
  bodyClassName = "",
  accentClassName = "text-amber-deep",
}: {
  title: string;
  accent?: string;
  body?: ReactNode;
  size?: "lg" | "md";
  className?: string;
  headingMaxWidthClassName?: string;
  headingClassName?: string;
  bodyClassName?: string;
  accentClassName?: string;
}) {
  return (
    <div className={className}>
      <h2
        className={`${headingMaxWidthClassName} font-sans font-semibold text-balance ${
          size === "md" ? "text-h3" : "text-h2"
        } ${headingClassName}`}
      >
        <HighlightedText
          text={title}
          highlight={accent}
          highlightClassName={accentClassName}
        />
      </h2>
      {body && (
        <p className={`mt-5 max-w-[64ch] text-lead leading-relaxed text-ink/75 ${bodyClassName}`}>
          {body}
        </p>
      )}
    </div>
  );
}

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="m5 13 4.5 4.5L19 7" />
    </svg>
  );
}

export function MinusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      aria-hidden
      className={className}
    >
      <path d="M6 12h12" />
    </svg>
  );
}

// Shared package-table cell: strings are shown verbatim, booleans use an
// accessible included/not-included status that can be recoloured per service.
export function FeatureValue({
  value,
  includedClassName = "text-amber-deep",
  excludedClassName = "text-muted/55",
  falseFallback,
}: {
  value: boolean | string;
  includedClassName?: string;
  excludedClassName?: string;
  falseFallback?: ReactNode;
}) {
  if (typeof value === "string") return <>{value}</>;

  if (value) {
    return (
      <span className={`inline-flex items-center ${includedClassName}`}>
        <CheckIcon className="size-4" />
        <span className="sr-only">Included</span>
      </span>
    );
  }

  if (falseFallback !== undefined) return <>{falseFallback}</>;

  return (
    <span className={`inline-flex items-center ${excludedClassName}`}>
      <MinusIcon className="size-4" />
      <span className="sr-only">Not included</span>
    </span>
  );
}
