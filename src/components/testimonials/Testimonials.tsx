"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const quoteRef = useRef<HTMLDivElement>(null);

  const go = (dir: 1 | -1) => {
    const next = (index + dir + testimonials.length) % testimonials.length;
    const el = quoteRef.current;
    gsap.to(el, {
      opacity: 0,
      y: dir * -16,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setIndex(next);
        gsap.fromTo(
          el,
          { opacity: 0, y: dir * 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" }
        );
      },
    });
  };

  const t = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-[var(--color-ink-soft)] px-6 py-32 md:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[var(--color-bronze)]">Testimonials</p>
        <h2 className="font-serif text-3xl text-[var(--color-sand)] md:text-5xl">Words from our clients</h2>

        <div className="glass mt-16 rounded-lg p-10 md:p-16">
          <div ref={quoteRef}>
            <div className="mb-6 flex justify-center gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-[var(--color-bronze)]">
                  <path d="M10 1.5l2.6 5.7 6.2.6-4.7 4.2 1.4 6.1L10 15l-5.5 3.1 1.4-6.1L1.2 7.8l6.2-.6L10 1.5z" />
                </svg>
              ))}
            </div>
            <p className="font-serif text-xl leading-relaxed text-[var(--color-sand)] italic md:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image src={t.portrait} alt={t.name} fill className="object-cover" />
              </div>
              <div className="text-left">
                <p className="text-sm text-[var(--color-sand)]">{t.name}</p>
                <p className="text-xs text-[var(--color-sand-dim)]">{t.role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            data-cursor-hover
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-sand)] transition-colors hover:border-[var(--color-bronze)]"
          >
            ←
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === index ? "bg-[var(--color-bronze)]" : "bg-[var(--color-line)]"
                }`}
              />
            ))}
          </div>
          <button
            data-cursor-hover
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-sand)] transition-colors hover:border-[var(--color-bronze)]"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
