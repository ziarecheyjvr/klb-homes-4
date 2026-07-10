"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useCharReveal } from "@/hooks/useTextReveal";
import MagneticButton from "../MagneticButton";

export default function Hero() {
  const headlineRef = useCharReveal<HTMLHeadingElement>(0.5);
  const ctaRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set([ctaRef.current, subRef.current], {
      opacity: 0,
      y: 20,
    });
    gsap.to(subRef.current, { opacity: 1, y: 0, duration: 1, ease: "power4.out", delay: 1.6 });
    gsap.to(ctaRef.current, { opacity: 1, y: 0, duration: 1, ease: "power4.out", delay: 1.85 });

    gsap.fromTo(
      imageRef.current,
      { scale: 1 },
      { scale: 1.12, duration: 22, ease: "none" }
    );

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(parallaxRef.current, {
        x: x * 10,
        y: y * 6,
        duration: 1,
        ease: "power3.out",
      });
      gsap.to(imageRef.current, {
        x: -x * 20,
        y: -y * 14,
        duration: 1.4,
        ease: "power3.out",
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex h-[100svh] w-full flex-col overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div ref={imageRef} className="absolute inset-0 will-change-transform">
          <Image
            src="https://klb-homes.com/wp-content/uploads/2026/04/Las-Palmeras-Exteriors-10mb-5-scaled.jpg"
            alt="Las Palmeras, Marbella"
            fill
            priority
            sizes="100vw"
            className="scale-110 object-cover"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/15 to-[var(--color-ink)]/55" />

      <div ref={parallaxRef} className="relative z-10 flex h-full flex-1 flex-col justify-end px-6 pb-16 md:px-12 md:pb-20">
        {/* headline block */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-6">
          <div className="lg:col-span-8">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[var(--color-bronze)]">
              Marbella&apos;s Premier Boutique Real Estate Agency
            </p>
            <h1
              ref={headlineRef}
              className="font-serif text-[15vw] leading-[0.88] tracking-tight text-[var(--color-sand)] opacity-0 sm:text-[10vw] lg:text-[6.4vw]"
            >
              Your Dream Marbella
              <br />
              <span className="italic text-gradient-bronze">Property Awaits</span>
            </h1>
          </div>

          <div className="glass rounded-sm p-6 lg:col-span-4">
            <p ref={subRef} className="max-w-sm text-sm leading-relaxed text-[var(--color-sand)] md:text-base">
              Discover exceptional properties and personalized service with Marbella&apos;s
              premier boutique real estate agency. Led by Lucie Balasova, we specialize in
              finding your perfect Spanish sanctuary.
            </p>
            <div ref={ctaRef} className="mt-6">
              <MagneticButton variant="link">Book Your Personal Property Consultation</MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
