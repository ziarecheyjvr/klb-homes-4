"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import MagneticButton from "./MagneticButton";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

const getNavLinks = (t: any) => [
  { label: t("nav", "home"), href: "/", menu: null },
  {
    label: t("nav", "buy"),
    href: "/buy",
    menu: [
      { title: t("nav", "villas"), desc: t("nav", "villasDesc"), href: "/buy?category=Villa" },
      { title: t("nav", "apartments"), desc: t("nav", "apartmentsDesc"), href: "/buy?category=Apartment" },
      { title: t("nav", "penthouses"), desc: t("nav", "penthousesDesc"), href: "/buy?category=Penthouse" },
    ],
  },
  { label: t("nav", "sell"), href: "/sell", menu: null },
  { label: t("nav", "rent"), href: "/rent", menu: null },
  { label: t("nav", "invest"), href: "/invest", menu: null },
  { label: t("nav", "about"), href: "/about", menu: null },
  { label: t("nav", "contact"), href: "/contact", menu: null },
];

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(solid);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);
  const megaRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const NAV_LINKS = getNavLinks(t);

  useEffect(() => {
    const el = mobileMenuRef.current;
    if (!el) return;
    if (mobileOpen) {
      gsap.set(el, { display: "flex" });
      gsap.fromTo(
        el,
        { autoAlpha: 0, clipPath: "inset(0% 0% 100% 0%)" },
        { autoAlpha: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "expo.out" }
      );
      gsap.fromTo(
        el.querySelectorAll("a"),
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, delay: 0.15, ease: "power3.out" }
      );
    } else {
      gsap.to(el, {
        autoAlpha: 0,
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => gsap.set(el, { display: "none" }),
      });
    }
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(solid || y > 40);

      const nav = navRef.current;
      if (!nav) return;
      
      // Header remains perfectly sticky at all times; no aggressive hide/show animations.
      lastY.current = y;
    };
    
    // Set initial state
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  useEffect(() => {
    const el = megaRef.current;
    if (!el) return;
    if (openMenu !== null) {
      gsap.set(el, { display: "block" });
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: -16, clipPath: "inset(0% 0% 100% 0%)" },
        { autoAlpha: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "expo.out" }
      );
    } else {
      gsap.to(el, {
        autoAlpha: 0,
        y: -16,
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => gsap.set(el, { display: "none" }),
      });
    }
  }, [openMenu]);

  const koupeIndex = NAV_LINKS.findIndex((l) => l.menu);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color] duration-500 ${
        solid ? "bg-[var(--color-ink)]/95 backdrop-blur-xl border-b border-[var(--color-line)]" : scrolled ? "glass" : "border-b border-transparent bg-transparent"
      }`}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className={`hidden items-center justify-end gap-6 border-b px-6 py-2 text-[11px] md:flex md:px-12 transition-colors duration-500 ${scrolled ? "border-[var(--color-line)]/60" : "border-white/20"}`}>
        <a href="mailto:info@klb-homes.com" data-cursor-hover className={`font-bold transition-colors ${scrolled ? "text-[var(--color-sand-dim)] hover:text-[var(--color-sand)]" : "text-white/80 hover:text-white"}`}>
          info@klb-homes.com
        </a>
        <span className={`transition-colors duration-500 ${scrolled ? "text-[var(--color-line)]" : "text-white/20"}`}>|</span>
        <a href="tel:+34600145534" data-cursor-hover className={`flex items-center gap-2 transition-colors ${scrolled ? "text-[var(--color-sand-dim)] hover:text-[var(--color-bronze)]" : "text-white/80 hover:text-white"}`}>
          <span className="font-bold tracking-wide">+34 600 145 534</span>
          <span className="font-bold uppercase tracking-[0.2em] text-[var(--color-bronze)]">{t("nav", "callUs")}</span>
        </a>
      </div>

      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
        <a href="/" data-cursor-hover className="relative block h-14 w-[240px]">
          <Image
            src="https://assets.cdn.filesafe.space/WKyceqEYmEdWqTzWB9Ns/media/6a4b78fc1209780f80962f73.webp"
            alt="KLB Homes"
            fill
            className={`object-contain object-left transition-all duration-500 ${!scrolled && "brightness-0 invert"}`}
            priority
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.label}
              onMouseEnter={() => setOpenMenu(link.menu ? i : null)}
              className="relative"
            >
              <a
                href={link.href}
                data-cursor-hover
                className={`group relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${scrolled ? "text-[var(--color-sand-dim)] hover:text-[var(--color-sand)]" : "text-white/80 hover:text-white"}`}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[var(--color-bronze)] transition-all duration-400 ease-out group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="relative group">
            <button className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest ${scrolled ? "text-[var(--color-sand-dim)] hover:text-[var(--color-sand)]" : "text-white/80 hover:text-white"}`}>
              {language}
              <span className="text-[8px]">▼</span>
            </button>
            <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className={`flex flex-col rounded-sm border ${scrolled ? "border-[var(--color-line)] bg-white text-[var(--color-sand-dim)]" : "border-white/20 bg-black/50 backdrop-blur-md text-white/80"} overflow-hidden shadow-xl`}>
                <button onClick={() => setLanguage("en")} className={`px-4 py-2 text-xs hover:bg-[var(--color-bronze)] hover:text-white text-left ${language === 'en' ? 'font-bold' : ''}`}>EN</button>
                <button onClick={() => setLanguage("es")} className={`px-4 py-2 text-xs hover:bg-[var(--color-bronze)] hover:text-white text-left ${language === 'es' ? 'font-bold' : ''}`}>ES</button>
                <button onClick={() => setLanguage("cs")} className={`px-4 py-2 text-xs hover:bg-[var(--color-bronze)] hover:text-white text-left ${language === 'cs' ? 'font-bold' : ''}`}>CS</button>
              </div>
            </div>
          </div>
          <MagneticButton as="a" href="/contact" className={`text-[11px] font-bold ${!scrolled && "!text-white !border-white/50 hover:!border-white"}`}>{t("nav", "bookViewing")}</MagneticButton>
        </div>

        <button
          data-cursor-hover
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 transition-transform duration-300 ${scrolled ? "bg-[var(--color-sand)]" : "bg-white"} ${
              mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 transition-transform duration-300 ${scrolled ? "bg-[var(--color-sand)]" : "bg-white"} ${
              mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        ref={megaRef}
        className="hidden border-t border-[var(--color-line)] bg-[var(--color-ink)]/98 backdrop-blur-xl"
        style={{ visibility: "hidden" }}
      >
        <div className="mx-auto flex max-w-[1600px] justify-center gap-16 px-12 py-10">
          {NAV_LINKS[koupeIndex]?.menu?.map((item) => (
            <a key={item.title} href={item.href || "/buy"} data-cursor-hover className="group">
              <h4 className="font-serif text-lg text-[var(--color-sand)] transition-colors group-hover:text-[var(--color-bronze)]">
                {item.title}
              </h4>
              <p className="mt-1 text-xs text-[var(--color-sand-dim)]">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className="fixed inset-0 hidden h-[100svh] w-full flex-col items-center justify-center gap-6 overflow-y-auto bg-[var(--color-ink)]/98 py-10 backdrop-blur-2xl lg:hidden"
        style={{ visibility: "hidden" }}
      >
        <button 
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 p-2 text-white"
          aria-label="Close menu"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            data-cursor-hover
            onClick={() => setMobileOpen(false)}
            className="font-serif text-2xl text-[var(--color-sand)]"
          >
            {link.label}
          </a>
        ))}
        <div className="flex gap-4 mt-2">
          <button onClick={() => { setLanguage("en"); setMobileOpen(false); }} className={`text-sm ${language === 'en' ? 'text-[var(--color-sand)] font-bold' : 'text-[var(--color-sand-dim)]'}`}>EN</button>
          <button onClick={() => { setLanguage("es"); setMobileOpen(false); }} className={`text-sm ${language === 'es' ? 'text-[var(--color-sand)] font-bold' : 'text-[var(--color-sand-dim)]'}`}>ES</button>
          <button onClick={() => { setLanguage("cs"); setMobileOpen(false); }} className={`text-sm ${language === 'cs' ? 'text-[var(--color-sand)] font-bold' : 'text-[var(--color-sand-dim)]'}`}>CS</button>
        </div>
        <MagneticButton as="a" href="/contact" className="mt-4 text-xs">{t("nav", "bookViewing")}</MagneticButton>
        <a href="tel:+34600145534" data-cursor-hover className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--color-bronze)]">
          +34 600 145 534
        </a>
      </div>
    </nav>
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-ink)] border border-[var(--color-line)] text-[var(--color-sand)] shadow-2xl transition-all duration-300 lg:hidden ${
        scrolled && !mobileOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 15l-7-7-7 7"/></svg>
    </button>
  </>
  );
}
