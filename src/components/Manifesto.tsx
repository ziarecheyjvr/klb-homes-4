"use client";

import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "@/lib/gsap";

const TEXT =
  "At KLB Homes, we go beyond traditional real estate — we're your dedicated Personal Property Consultants, focused entirely on representing you, the buyer.";

export default function Manifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitType(textRef.current!, { types: "words", tagName: "span" });

      gsap.set(split.words, { opacity: 0.12 });

      gsap.to(split.words, {
        opacity: 1,
        stagger: 0.06,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          scrub: 0.6,
          pin: true,
        },
      });

      gsap.fromTo(
        bgRef.current,
        { scale: 1.3, opacity: 0.12 },
        {
          scale: 1,
          opacity: 0.22,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=120%",
            scrub: 0.6,
          },
        }
      );

      return () => split.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative flex h-screen items-center justify-center overflow-hidden bg-[var(--color-ink)]">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-[var(--color-ink)]/70" />
      <div className="relative z-10 mx-auto max-w-4xl px-8 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[var(--color-bronze)]">
          Beyond Real Estate — The KLB Homes Advantage
        </p>
        <p
          ref={textRef}
          className="font-serif text-3xl leading-snug text-[var(--color-sand)] md:text-5xl"
        >
          {TEXT}
        </p>
      </div>
    </section>
  );
}
