"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import MagneticButton from "./MagneticButton";

const NAV_LINKS = [
  { label: "DOMŮ", href: "#hero", menu: null },
  {
    label: "KOUPĚ",
    href: "#showcase",
    menu: [
      { title: "Vily", desc: "Luxusní vily s výhledem na moře" },
      { title: "Apartmány", desc: "Moderní apartmány v srdci Marbelly" },
      { title: "Rezidence", desc: "Rezidence v prestižních lokalitách" },
      { title: "Nové projekty", desc: "Off-market a připravované projekty" },
    ],
  },
  { label: "PRODEJ", href: "#contact", menu: null },
  { label: "PRONÁJEM", href: "#contact", menu: null },
  { label: "INVESTICE", href: "#invest", menu: null },
  { label: "O NÁS", href: "#about", menu: null },
  { label: "KONTAKT", href: "#contact", menu: null },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);
  const megaRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
      setScrolled(y > 40);

      const nav = navRef.current;
      if (!nav) return;
      if (y > lastY.current && y > 200) {
        gsap.to(nav, { yPercent: -100, duration: 0.5, ease: "power3.inOut" });
      } else {
        gsap.to(nav, { yPercent: 0, duration: 0.5, ease: "power3.inOut" });
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <nav
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color] duration-500 ${
        scrolled ? "glass" : "border-b border-transparent bg-transparent"
      }`}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="hidden items-center justify-end gap-6 border-b border-[var(--color-line)]/60 px-6 py-2 text-[11px] text-[var(--color-sand-dim)] md:flex md:px-12">
        <a href="mailto:info@klb-homes.com" data-cursor-hover className="transition-colors hover:text-[var(--color-sand)]">
          info@klb-homes.com
        </a>
        <span className="text-[var(--color-line)]">|</span>
        <a href="tel:+34600145534" data-cursor-hover className="flex items-center gap-2 transition-colors hover:text-[var(--color-bronze)]">
          <span className="tracking-wide">+34 600 145 534</span>
          <span className="uppercase tracking-[0.2em] text-[var(--color-bronze)]">Call us</span>
        </a>
      </div>

      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#hero" data-cursor-hover className="relative block h-9 w-[160px]">
          <Image
            src="https://assets.cdn.filesafe.space/WKyceqEYmEdWqTzWB9Ns/media/6a4b7ba88a69aa2441e780bb.png"
            alt="KLB Homes"
            fill
            className="object-contain object-left"
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
                className="group relative text-xs uppercase tracking-[0.2em] text-[var(--color-sand-dim)] transition-colors duration-300 hover:text-[var(--color-sand)]"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[var(--color-bronze)] transition-all duration-400 ease-out group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <MagneticButton className="text-[11px]">Book a Viewing</MagneticButton>
        </div>

        <button
          data-cursor-hover
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-[var(--color-sand)] transition-transform duration-300 ${
              mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-[var(--color-sand)] transition-transform duration-300 ${
              mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        ref={megaRef}
        className="glass hidden border-t border-[var(--color-line)]"
        style={{ visibility: "hidden" }}
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-4 gap-8 px-12 py-10">
          {NAV_LINKS[koupeIndex]?.menu?.map((item) => (
            <a key={item.title} href="#showcase" data-cursor-hover className="group">
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
        className="absolute inset-x-0 top-full hidden h-[calc(100svh-var(--nav-h,72px))] flex-col items-center justify-center gap-6 overflow-y-auto border-t border-[var(--color-line)] bg-[var(--color-ink)]/98 py-10 backdrop-blur-2xl lg:hidden"
        style={{ visibility: "hidden" }}
      >
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
        <MagneticButton className="mt-4 text-xs">Book a Viewing</MagneticButton>
        <a href="tel:+34600145534" data-cursor-hover className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--color-bronze)]">
          +34 600 145 534
        </a>
      </div>
    </nav>
  );
}
