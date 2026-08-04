import type { ReactNode } from "react";
import { FinalCta, type CtaAction } from "@/components/ui/FinalCta";

/*
  Service-page wrapper around the one shared closing section (brief §5), kept so
  the nine service pages can carry their own copy, steps and analytics events
  without each maintaining a CTA layout of its own.
*/
export function ServiceNextStepsCTA({
  title,
  titleAccent,
  body,
  primary,
  secondary,
  phoneEvent,
  emailEvent,
  steps,
}: {
  title: string;
  titleAccent?: string;
  body: ReactNode;
  primary: CtaAction;
  secondary: CtaAction;
  phoneEvent: string;
  emailEvent: string;
  steps: readonly string[];
}) {
  return (
    <FinalCta
      title={title}
      titleAccent={titleAccent}
      body={body}
      primary={primary}
      secondary={secondary}
      steps={steps}
      contactEvents={{ phone: phoneEvent, email: emailEvent }}
    />
  );
}
