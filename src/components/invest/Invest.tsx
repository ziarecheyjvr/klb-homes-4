"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useLineReveal } from "@/hooks/useTextReveal";
import MagneticButton from "../MagneticButton";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Invest() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useLineReveal<HTMLHeadingElement>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".invest-image", {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.4,
        ease: "expo.out",
        scrollTrigger: { trigger: ".invest-image", start: "top 80%" },
      });

      gsap.from(".journey-card", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".journey-card", start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="invest" ref={sectionRef} className="relative overflow-hidden bg-[var(--color-ink-soft)] px-6 py-32 md:px-12">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-bronze)]">
            {t("invest", "subtitle")}
          </p>
          <h2 ref={headingRef} className="font-serif text-4xl leading-tight text-[var(--color-sand)] md:text-5xl whitespace-pre-line">
            {t("invest", "title")}
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--color-sand-dim)]">
            {t("invest", "p1")}
          </p>
          <p className="mt-4 max-w-xl font-serif text-lg italic text-[var(--color-bronze)]">
            {t("invest", "p2")}
          </p>

          <div className="mt-10">
            <MagneticButton as="a" href="/invest">{t("invest", "cta")}</MagneticButton>
          </div>
        </div>

        <div className="invest-image relative h-[420px] overflow-hidden rounded-sm md:h-[620px]">
          <Image
            src="https://klb-homes.com/wp-content/uploads/2026/04/Las-Palmeras-Exteriors-10mb-28-scaled.jpg"
            alt="KLB Homes Developments — Las Palmeras"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
