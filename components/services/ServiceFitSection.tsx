import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { ServiceBand, type ServiceBandTone } from "@/components/services/ServiceBand";
import {
  CheckIcon,
  MinusIcon,
  ServiceSectionIntro,
} from "@/components/services/ServicePrimitives";

export function ServiceFitSection({
  label = "Fit",
  title,
  titleAccent,
  body,
  intro,
  good,
  notFit,
  goodTitle = "A good fit",
  notFitTitle = "Probably not yet",
  showNotFitIcon = true,
  footer,
  tone = "white",
  bandAccent = "bg-amber",
}: {
  label?: string;
  title?: string;
  titleAccent?: string;
  body?: ReactNode;
  intro?: ReactNode;
  good: readonly string[];
  notFit: readonly string[];
  goodTitle?: string;
  notFitTitle?: string;
  showNotFitIcon?: boolean;
  footer?: ReactNode;
  tone?: ServiceBandTone;
  bandAccent?: string;
}) {
  return (
    <ServiceBand label={label} tone={tone} accent={bandAccent}>
      <Reveal>
        {intro ??
          (title ? (
            <ServiceSectionIntro title={title} accent={titleAccent} body={body} />
          ) : null)}

        <div className="mt-12 grid grid-cols-12 gap-x-10 gap-y-8 max-lg:block">
          <div className="col-span-7 rounded-card border border-soft-dark bg-soft/70 p-9 max-lg:mb-8 max-sm:p-6">
            <h3 className="flex items-center gap-2.5 font-sans text-h3 font-semibold">
              <CheckIcon className="size-5 text-amber-deep" />
              {goodTitle}
            </h3>
            <ul className="mt-6">
              {good.map((item) => (
                <li
                  key={item}
                  className="flex gap-3.5 border-b border-soft-dark py-3.5 text-[17px] leading-snug text-ink/85 last:border-b-0 last:pb-0"
                >
                  <CheckIcon className="mt-1 size-4 shrink-0 text-amber-deep" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-5 max-lg:pt-2">
            <h3 className="flex items-center gap-2.5 font-sans text-h3 font-semibold text-muted">
              {showNotFitIcon && <MinusIcon className="size-5" />}
              {notFitTitle}
            </h3>
            <ul className="mt-6 border-t border-line">
              {notFit.map((item) => (
                <li
                  key={item}
                  className="border-b border-line py-3.5 text-[16.5px] leading-snug text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
            {footer}
          </div>
        </div>
      </Reveal>
    </ServiceBand>
  );
}
