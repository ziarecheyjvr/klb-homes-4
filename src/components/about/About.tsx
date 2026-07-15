"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useLineReveal } from "@/hooks/useTextReveal";
import MagneticButton from "../MagneticButton";
import { useLanguage } from "@/i18n/LanguageContext";

const BADGES = ["Boutique Agency", "100% Buyer-Focused", "Costa del Sol Expertise"];

const PILLARS = [
  { title: "Trust", text: "Honest guidance built on genuine care for your interests." },
  { title: "Transparency", text: "Clear communication at every stage of the property journey." },
  { title: "Local Insight", text: "Trusted connections and deep knowledge of Marbella's communities." },
  { title: "Personal Guidance", text: "Understanding your lifestyle, priorities, and long-term goals." },
];

export default function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useLineReveal<HTMLHeadingElement>();
  const shapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const yearsEl = sectionRef.current?.querySelector(".about-stat-years");
      if (yearsEl) {
        gsap.fromTo(
          yearsEl,
          { innerText: 0 },
          {
            innerText: 6,
            duration: 1.4,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: { trigger: yearsEl, start: "top 85%" },
          }
        );
      }

      gsap.from(".timeline-item", {
        opacity: 0,
        x: -30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".timeline-wrap", start: "top 75%" },
      });

      gsap.to(shapeRef.current, {
        y: -80,
        rotate: 25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.from(".about-image", {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.4,
        ease: "expo.out",
        scrollTrigger: { trigger: ".about-image", start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden bg-[var(--color-ink)] px-6 py-32 md:px-12">
      <div
        ref={shapeRef}
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full border border-[var(--color-bronze-soft)]/30"
      />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rotate-12 border border-[var(--color-line)]" />

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
        <div className="about-image relative h-[500px] overflow-hidden rounded-sm md:h-[720px]">
          <Image
            src="/assets/KLB Homes/Lucie-Balasova.webp"
            alt="Lucie Balasova, Founder of KLB Homes"
            fill
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-image-overlay)] via-[var(--color-image-overlay)]/20 to-transparent p-6">
            <p className="font-serif text-xl text-[var(--color-sand)]">Lucie Balasova</p>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-bronze)]">
              {t("about", "lucieTitle")}
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-bronze)]">
            {t("about", "subtitle")}
          </p>
          <div ref={contentRef}>
            <h2 ref={headingRef} className="font-serif text-4xl leading-tight text-[var(--color-sand)] md:text-5xl">
              {t("about", "hello")}
            </h2>
            <p className="mt-6 font-serif text-xl italic text-gradient-bronze">
              {t("about", "p1")}
            </p>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-[var(--color-sand-dim)]">
              {t("about", "p2")}
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--color-sand-dim)]">
              {t("about", "p3")}
            </p>
            <div className="mt-10">
              <MagneticButton variant="link">{t("about", "cta")}</MagneticButton>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-end gap-10">
            <div>
              <div className="font-serif text-4xl text-[var(--color-bronze)]">
                <span className="about-stat-years">0</span>+
              </div>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[var(--color-sand-dim)]">
                {t("about", "experience")}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[var(--color-line)] px-4 py-1.5 text-[10px] uppercase tracking-[0.15em] text-[var(--color-sand-dim)]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="timeline-wrap mt-14 grid grid-cols-1 gap-6 border-l border-[var(--color-line)] pl-6 sm:grid-cols-2">
            {PILLARS.map((item) => (
              <div key={item.title} className="timeline-item">
                <span className="font-serif text-lg text-[var(--color-bronze)]">{item.title}</span>
                <p className="mt-1 text-sm text-[var(--color-sand-dim)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
