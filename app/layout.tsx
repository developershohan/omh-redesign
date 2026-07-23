import type { Metadata } from "next";
import Link from "next/link";
import { Instrument_Sans, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
  title: {
    default: "Online Marketing Help — UK digital marketing & web development agency",
    template: "%s | Online Marketing Help",
  },
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
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-button focus:bg-teal focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <div className="bg-ink text-white">
          <div className="container-omh flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 py-2 text-center text-[13px] leading-snug">
            <span className="font-semibold">Redesign preview</span>
            <span className="text-white/70 max-sm:hidden">
              Home, WordPress Development and Contact are fully designed — other pages show a
              coming-soon placeholder.
            </span>
            <Link href="/wordpress-development" className="font-semibold text-soft underline underline-offset-2">
              See the example page
            </Link>
          </div>
        </div>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
