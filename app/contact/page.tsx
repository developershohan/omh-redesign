import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Eyebrow } from "@/components/ui/Proof";
import { company } from "@/lib/content/nav";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "https://onlinemarketinghelp.co.uk/contact-us/" },
  description:
    "Tell us what you need your website or marketing to do and we'll recommend the most practical next step. UK-based, marketing and development under one roof.",
};

const steps = [
  "Your enquiry is reviewed by a real person.",
  "We discuss your goals, current problems and practical options.",
  "You receive a clear recommendation on the next step.",
];

export default function ContactPage() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-omh section-md">
        <div className="grid grid-cols-12 gap-x-14 gap-y-12 max-lg:block">
          {/* Left: intro, details, what happens next */}
          <div className="col-span-5 max-lg:mb-12">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mb-5 mt-6 max-w-[18ch] font-sans text-h1 font-semibold text-balance">
              Tell us what you need and we&apos;ll recommend <span className="text-amber-deep">the next step</span>
            </h1>
            <p className="max-w-[52ch] text-lead leading-relaxed text-ink/75">
              Whether it&apos;s a new website, a redesign, WordPress support or wider marketing,
              send a few details and we&apos;ll come back with a practical recommendation. No
              hard sell.
            </p>

            <dl className="mt-9 grid gap-5 border-t border-line pt-8">
              <div>
                <dt className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Call
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={company.phoneHref}
                    data-event="wpdev_phone_click"
                    className="font-sans text-h4 font-semibold hover:text-amber-deep"
                  >
                    {company.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Email
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={`mailto:${company.email}`}
                    data-event="wpdev_email_click"
                    className="break-all font-sans text-body font-semibold hover:text-amber-deep"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Where we are
                </dt>
                <dd className="mt-1.5 text-body text-ink/80">
                  {company.address} <span title="To be confirmed with the client">◈</span>
                </dd>
              </div>
            </dl>

            <div className="mt-9 rounded-card border border-line bg-warm/60 p-6">
              <p className="mb-5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                What happens next
              </p>
              <ol className="grid gap-4">
                {steps.map((step, i) => (
                  <li key={step} className="grid grid-cols-[auto_1fr] items-start gap-3.5">
                    <span
                      aria-hidden
                      className="flex size-7 items-center justify-center rounded-full border border-line bg-surface font-sans text-[13px] font-semibold tabular-nums text-amber-deep"
                    >
                      {i + 1}
                    </span>
                    <span className="text-body leading-snug text-ink/85">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: form */}
          <div className="col-span-7 col-start-6">
            <ContactForm />
            <p className="mt-5 text-bsm text-muted">
              Prefer email? Write to{" "}
              <Link href={`mailto:${company.email}`} className="font-semibold text-amber-deep underline underline-offset-4">
                {company.email}
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
