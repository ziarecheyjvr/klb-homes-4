import type { Metadata } from "next";
import { Instrument_Serif, Archivo } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { LanguageProvider, LanguageKeyWrapper } from "@/i18n/LanguageContext";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KLB Homes — Extraordinary Residences",
  description:
    "KLB Homes curates the world's most exceptional residences — architectural masterpieces for a life without compromise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${archivo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--color-ink)] text-[var(--color-sand)]">
        <LanguageProvider>
          <SmoothScroll>
            <LanguageKeyWrapper>{children}</LanguageKeyWrapper>
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
