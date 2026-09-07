import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/ui/Button";

// Global contextual-link section for any page that needs related routes.

export type RelatedServiceLink = {
  title: string;
  href: string;
  body: string;
};

export function RelatedServices({
  title,
  body,
  links,
  eventPrefix,
}: {
  title: string;
  body: string;
  links: RelatedServiceLink[];
  eventPrefix: string;
}) {
  return (
    <section className="border-y border-line bg-surface" aria-labelledby={`${eventPrefix}-related-title`}>
      <div className="container-omh section-md">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-10 gap-y-8 max-lg:block">
            <div className="col-span-4 max-lg:mb-10">
              <p className="flex items-center gap-2.5 text-[14px] font-semibold uppercase tracking-[0.16em] text-muted before:h-0.5 before:w-5 before:bg-amber before:content-['']">
                Related services
              </p>
              <h2 id={`${eventPrefix}-related-title`} className="mt-6 max-w-[18ch] font-sans text-h3 font-semibold text-balance">
                {title}
              </h2>
              <p className="mt-5 max-w-[40ch] text-body leading-relaxed text-ink/70">{body}</p>
            </div>
            <div className="col-span-8 grid grid-cols-3 gap-5 max-md:grid-cols-1">
              {links.map((link, index) => (
                <article key={link.href} className="surface-card flex min-h-full flex-col rounded-card border border-line bg-warm/55 p-6">
                  <span className="text-[18px] font-semibold tabular-nums tracking-[0.12em] text-amber">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-sans text-h4 font-semibold">
                    <Link
                      href={link.href}
                      data-event={`${eventPrefix}_related_service_click`}
                      data-service={link.title}
                      className="group inline-flex items-start gap-2 text-ink transition-colors hover:text-amber-deep"
                    >
                      <span>{link.title}</span>
                      <ArrowRight className="mt-1 size-4 shrink-0 transition-transform duration-500 group-hover:translate-x-1" />
                    </Link>
                  </h3>
                  <p className="mt-3 text-body leading-relaxed text-ink/70">{link.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
