"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { useLineReveal } from "@/hooks/useTextReveal";
import MagneticButton from "../MagneticButton";

export default function Invest() {
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
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[var(--color-bronze)]">
            KLB Homes Developments
          </p>
          <h2 ref={headingRef} className="font-serif text-4xl leading-tight text-[var(--color-sand)] md:text-5xl">
            Property Investment
            <br />& Renovation Service
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-[var(--color-sand-dim)]">
            At KLB Homes, we believe real estate investment should be both profitable and
            stress-free. Renovating a property can be one of the most rewarding strategies in
            today&apos;s market — offering the potential for strong returns and long-term value.
            But for many investors, the process can feel overwhelming, filled with time-consuming
            decisions, complex planning, and unexpected construction challenges.
          </p>
          <p className="mt-4 max-w-lg font-serif text-lg italic text-gradient-bronze">
            That&apos;s where we come in. Let your capital work for you — while we take care of
            the rest.
          </p>

          <div className="mt-10">
            <MagneticButton>Discover</MagneticButton>
          </div>

          <div className="journey-card glass mt-14 max-w-lg rounded-sm p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-bronze)]">
              Property Buyers Experience — Step 01
            </p>
            <h3 className="mt-3 font-serif text-2xl text-[var(--color-sand)]">
              Discovery Consultation
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-sand-dim)]">
              Our collaboration begins with a comprehensive consultation — available via video
              call or in person — to thoroughly understand your preferences, requirements, and
              investment goals. We&apos;ll gather all essential details into your exclusive
              client portfolio, defining the scope of our engagement before beginning our search.
            </p>
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
