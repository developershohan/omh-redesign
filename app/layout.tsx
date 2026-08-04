import type { Metadata } from "next";
import { Instrument_Sans, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { searchIndex } from "@/lib/content/search-index";
import { JsonLd, SITE, organisation, website } from "@/lib/schema";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Online Marketing Help — UK digital marketing & web development agency",
    template: "%s | Online Marketing Help",
  },
  alternates: { canonical: "https://onlinemarketinghelp.co.uk/" },
  description:
    "We help UK service businesses and ecommerce brands grow through Google Ads, Meta Ads, SEO, and conversion-focused websites, supported by clear reporting and reliable tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${instrument.variable} ${sourceSans.variable} ${sourceSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs before first paint: sets the theme so the page never flashes the
            wrong one, and marks that JS is alive so scroll reveals may hide
            content. Without it, a failed script would leave .rv invisible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var r=document.documentElement,s=localStorage.getItem("omh-theme");r.dataset.theme=s==="dark"||s==="light"?s:(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");r.dataset.js="1"}catch(e){}`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <JsonLd data={[organisation, website]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-button focus:bg-teal focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header searchEntries={searchIndex} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
