import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

// Future Elementor widget: "OMH Button"
type Variant = "primary" | "secondary" | "inverse" | "ghost-white";

/* Every variant sets its own border colour. The base used to declare
   `border-transparent`, which collides with `border-ink` at equal specificity —
   stylesheet order decided the winner and the secondary button rendered with an
   invisible border, so it read as bare text with no affordance. */
const styles: Record<Variant, string> = {
  primary: "border-transparent bg-teal text-white hover:bg-teal-dark",
  secondary: "border-ink text-ink hover:bg-ink/5",
  inverse: "border-transparent bg-white text-ink hover:bg-soft",
  "ghost-white": "border-white/55 text-white hover:border-white hover:bg-white/10",
};

export function Button({
  href,
  variant = "primary",
  arrow = false,
  small = false,
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
  arrow?: boolean;
  small?: boolean;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  return (
    <Link
      href={href}
      {...props}
      className={`button-motion group inline-flex items-center gap-2 rounded-button border-[1.5px] font-semibold leading-none
        ${small ? "px-4.5 py-3 text-[16px]" : "px-7 py-4 text-[18px]"} ${styles[variant]} ${props.className ?? ""}`}
    >
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-x-0.5" />}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  return (
    <Link
      href={href}
      {...props}
      className={`group inline-flex items-center gap-2 font-semibold text-teal transition-colors duration-500 hover:text-teal-dark hover:underline underline-offset-4 ${props.className ?? ""}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-x-0.5" />
    </Link>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
  );
}
