"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { gsap, Flip, ScrollTrigger } from "@/lib/gsap";
import { properties, Property } from "@/data/properties";
import { useEffect } from "react";
import { useLineReveal } from "@/hooks/useTextReveal";

const CATEGORIES = ["All", "Villa", "Apartment", "Penthouse", "Estate", "Residence"] as const;

const sizeClasses: Record<Property["size"], string> = {
  tall: "md:row-span-2",
  wide: "md:col-span-2",
  square: "",
};

export default function PropertyShowcase() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const gridRef = useRef<HTMLDivElement>(null);
  const headingRef = useLineReveal<HTMLHeadingElement>();
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => (active === "All" ? properties : properties.filter((p) => p.category === active)),
    [active]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".prop-card", {
        opacity: 0,
        y: 60,
        stagger: 0.08,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleFilter = (cat: (typeof CATEGORIES)[number]) => {
    if (cat === active || !gridRef.current) return;
    const state = Flip.getState(".prop-card");
    setActive(cat);
    requestAnimationFrame(() => {
      Flip.from(state, {
        duration: 0.7,
        scale: true,
        ease: "power3.inOut",
        stagger: 0.04,
        absolute: true,
        onEnter: (els) =>
          gsap.fromTo(els, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.6, delay: 0.15 }),
        onLeave: (els) => gsap.to(els, { opacity: 0, scale: 0.85, duration: 0.3 }),
        // Wait until cards settle back into normal flow before recalculating
        // ScrollTrigger positions — refreshing mid-animation reads the grid's
        // transient collapsed height (Flip sets position:absolute while
        // animating) and shifts every pinned section below it, causing the
        // page to jump to an unrelated section.
        onComplete: () => ScrollTrigger.refresh(),
      });
    });
  };

  return (
    <section id="showcase" ref={sectionRef} className="relative bg-[var(--color-ink)] px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[var(--color-bronze)]">The Collection</p>
            <h2 ref={headingRef} className="max-w-2xl font-serif text-4xl leading-tight text-[var(--color-sand)] md:text-6xl">
              Marbella residences of uncommon distinction
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                data-cursor-hover
                onClick={() => handleFilter(cat)}
                className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-400 ${
                  active === cat
                    ? "border-[var(--color-bronze)] bg-[var(--color-bronze)] text-[var(--color-ink)]"
                    : "border-[var(--color-line)] text-[var(--color-sand-dim)] hover:border-[var(--color-bronze-soft)] hover:text-[var(--color-sand)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={gridRef}
          className="grid auto-rows-[280px] grid-cols-1 gap-5 md:grid-cols-3 md:grid-flow-dense"
        >
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property }: { property: Property }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLSpanElement>(null);

  const handleEnter = () => {
    gsap.to(imgRef.current, { scale: 1.12, duration: 1.1, ease: "power3.out" });
    gsap.to(cardRef.current!.querySelector(".card-details"), {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(imgRef.current, { scale: 1, duration: 1.1, ease: "power3.out" });
    gsap.to(cardRef.current!.querySelector(".card-details"), {
      y: 12,
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
    });
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  const handleTilt = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(el, {
      rotateY: px * 8,
      rotateX: -py * 8,
      transformPerspective: 900,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={cardRef}
      data-cursor-hover
      className={`prop-card group relative overflow-hidden rounded-sm ${sizeClasses[property.size]}`}
      onMouseEnter={handleEnter}
      onMouseMove={handleTilt}
      onMouseLeave={handleLeave}
    >
      <div ref={imgRef} className="absolute inset-0">
        <Image
          src={property.image}
          alt={property.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/10 to-transparent" />

      <span className="absolute right-4 top-4 rounded-full border border-[var(--color-line)] bg-[var(--color-ink)]/50 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--color-sand)] backdrop-blur-sm">
        {property.category}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-serif text-xl text-[var(--color-sand)] md:text-2xl">{property.name}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--color-sand-dim)]">
          {property.location}
        </p>
        <div className="card-details mt-3 flex translate-y-3 items-center justify-between opacity-0">
          <span ref={priceRef} className="font-serif text-lg text-[var(--color-bronze)]">
            {property.price}
          </span>
          <span className="text-[11px] text-[var(--color-sand-dim)]">
            {property.beds ? `${property.beds} bd · ` : ""}
            {property.baths ? `${property.baths} ba · ` : ""}
            {property.area}
          </span>
        </div>
      </div>
    </div>
  );
}
