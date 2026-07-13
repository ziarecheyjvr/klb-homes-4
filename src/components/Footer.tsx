"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-ink)] px-6 py-16 md:px-12">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-12 md:flex-row md:justify-between">
        <div>
          <div className="relative h-14 w-[240px]">
            <Image
              src="https://assets.cdn.filesafe.space/WKyceqEYmEdWqTzWB9Ns/media/6a4b78fc1209780f80962f73.webp"
              alt="KLB Homes"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm text-[var(--color-sand-dim)]" dangerouslySetInnerHTML={{ __html: t("footer", "description") }} />
        </div>

        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[var(--color-bronze)]">{t("footer", "navTitle")}</p>
            <ul className="space-y-2 text-sm text-[var(--color-sand-dim)]">
              <li><a href="#hero" data-cursor-hover className="hover:text-[var(--color-sand)]">{t("nav", "home")}</a></li>
              <li><a href="#contact" data-cursor-hover className="hover:text-[var(--color-sand)]">{t("nav", "sell")}</a></li>
              <li><a href="#contact" data-cursor-hover className="hover:text-[var(--color-sand)]">{t("nav", "rent")}</a></li>
              <li><a href="#invest" data-cursor-hover className="hover:text-[var(--color-sand)]">{t("nav", "invest")}</a></li>
              <li><a href="#about" data-cursor-hover className="hover:text-[var(--color-sand)]">{t("nav", "about")}</a></li>
              <li><a href="#contact" data-cursor-hover className="hover:text-[var(--color-sand)]">{t("nav", "contact")}</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[var(--color-bronze)]">{t("footer", "legalTitle")}</p>
            <ul className="space-y-2 text-sm text-[var(--color-sand-dim)]">
              <li><a href="#" data-cursor-hover className="hover:text-[var(--color-sand)]">{t("footer", "privacy")}</a></li>
              <li><a href="#" data-cursor-hover className="hover:text-[var(--color-sand)]">{t("footer", "terms")}</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[var(--color-bronze)]">{t("footer", "connectTitle")}</p>
            <ul className="space-y-2 text-sm text-[var(--color-sand-dim)]">
              <li><a href="#" data-cursor-hover className="hover:text-[var(--color-sand)]">Instagram</a></li>
              <li><a href="#" data-cursor-hover className="hover:text-[var(--color-sand)]">Youtube</a></li>
              <li><a href="mailto:info@klb-homes.com" data-cursor-hover className="hover:text-[var(--color-sand)]">info@klb-homes.com</a></li>
              <li><a href="tel:+34600145534" data-cursor-hover className="hover:text-[var(--color-sand)]">+34 600 145 534</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1600px] flex-col items-center justify-between gap-2 border-t border-[var(--color-line)] pt-8 text-center text-xs text-[var(--color-sand-dim)] md:flex-row md:text-left">
        <p>© {new Date().getFullYear()} KLB Homes. {t("footer", "rights")}</p>
        <p>{t("footer", "disclaimer")}</p>
      </div>
    </footer>
  );
}
