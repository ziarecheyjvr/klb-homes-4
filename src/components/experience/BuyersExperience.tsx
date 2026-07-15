"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

import { useLanguage } from "@/i18n/LanguageContext";
import MagneticButton from "../MagneticButton";

export default function BuyersExperience() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      gsap.fromTo(
        dotsRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "bottom 80%",
            scrub: true,
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative bg-[var(--color-ink)] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1000px]">
        <div className="text-center mb-16 md:mb-24">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-bronze)]">
            {t("experience", "subtitle")}
          </p>
          <h2 ref={headingRef} className="font-serif text-4xl text-[var(--color-sand)] md:text-6xl">
            {t("experience", "title")}
          </h2>
        </div>

        <div className="relative ml-2 md:ml-8 pl-8 md:pl-16 space-y-12 md:space-y-16">
          <div ref={lineRef} className="absolute left-0 top-0 h-full w-[1px] bg-[var(--color-bronze-soft)]/30 origin-top" />
          {(t("experience", "steps") as { title: string, desc: string }[]).map((step, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="relative"
            >
              <span 
                ref={(el) => { dotsRef.current[i] = el; }}
                className="absolute -left-[37px] md:-left-[69px] top-6 h-2 w-2 rounded-full bg-[var(--color-bronze)] ring-4 ring-[var(--color-ink)]" 
              />
              <div className="glass rounded-sm p-8 md:p-10 transition-transform duration-500 hover:-translate-y-1 hover:border-[var(--color-bronze)]">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-bronze)]">
                  {t("experience", "step")} {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-[var(--color-sand)] md:text-3xl capitalize">
                  {step.title.toLowerCase()}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-sand-dim)]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex justify-center">
           <MagneticButton as="a" href="/contact">{t("nav", "bookViewing")}</MagneticButton>
        </div>
      </div>
    </section>
  );
}
