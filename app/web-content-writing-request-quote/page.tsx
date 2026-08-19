import type { Metadata } from "next";
import { QuoteFormPage } from "@/components/forms/QuoteFormPage";
import { webContentWritingRequestQuote } from "@/lib/content/quote-forms";

export const metadata: Metadata = {
  title: webContentWritingRequestQuote.seo.title,
  description: webContentWritingRequestQuote.seo.description,
  alternates: { canonical: "https://onlinemarketinghelp.co.uk/web-content-writing-request-quote/" },
};

export default function Page() {
  return <QuoteFormPage page={webContentWritingRequestQuote} />;
}
