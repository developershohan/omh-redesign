import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { ServiceBand, type ServiceBandTone } from "@/components/services/ServiceBand";
import { ServiceSectionIntro, withLinks } from "@/components/services/ServicePrimitives";
import { Accordion } from "@/components/ui/Accordion";
import { company } from "@/lib/content/nav";

export function ServiceFaqSection({
  label = "FAQ",
  title,
  titleAccent,
  description,
  items,
  group,
  phoneEvent,
  tone = "white",
  bandAccent = "bg-amber",
  headingSize = "md",
  sticky = true,
  headingMaxWidthClassName,
  headingClassName = "",
  descriptionClassName = "",
}: {
  label?: string;
  title: string;
  titleAccent?: string;
  description?: ReactNode;
  items: readonly { q: string; a: ReactNode }[];
  group: string;
  phoneEvent?: string;
  tone?: ServiceBandTone;
  bandAccent?: string;
  headingSize?: "lg" | "md";
  sticky?: boolean;
  headingMaxWidthClassName?: string;
  headingClassName?: string;
  descriptionClassName?: string;
}) {
  const defaultDescriptionClass =
    headingSize === "md"
      ? "text-bsm text-ink/70"
      : "max-w-[40ch] text-[16.5px] text-ink/70";

  return (
    <ServiceBand label={label} tone={tone} accent={bandAccent}>
      <Reveal>
        <div className="grid grid-cols-12 gap-x-12 gap-y-8 max-lg:block">
          <div className="col-span-4 max-lg:mb-8">
            <div className={sticky ? "lg:sticky lg:top-24" : undefined}>
              <ServiceSectionIntro
                size={headingSize}
                title={title}
                accent={titleAccent}
                headingMaxWidthClassName={headingMaxWidthClassName}
                headingClassName={headingClassName}
              />
              {description && (
                <p className={`mt-5 leading-relaxed ${descriptionClassName || defaultDescriptionClass}`}>
                  {description}
                </p>
              )}
              {phoneEvent && (
                <p className={headingSize === "md" ? "mt-5 text-bsm" : "mt-5"}>
                  <Link
                    href={company.phoneHref}
                    data-event={phoneEvent}
                    className="font-semibold text-amber-deep underline underline-offset-4"
                  >
                    {company.phoneDisplay}
                  </Link>
                </p>
              )}
            </div>
          </div>
          <div className="col-span-8">
            <Accordion
              group={group}
              items={items.map((item) => ({
                ...item,
                a: typeof item.a === "string" ? withLinks(item.a) : item.a,
              }))}
            />
          </div>
        </div>
      </Reveal>
    </ServiceBand>
  );
}
