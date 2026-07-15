"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, Flip, ScrollTrigger } from "@/lib/gsap";
import { allListings as properties, BuyProperty as Property } from "@/data/buyProperties";
import { useEffect } from "react";
import { useLineReveal } from "@/hooks/useTextReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import clsx from "clsx";
import MagneticButton from "../MagneticButton";

const CATEGORIES = ["All", "Villas", "Apartments", "Penthouses", "Plots"] as const;

export default function PropertyShowcase() {
  const { t } = useLanguage();
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const gridRef = useRef<HTMLDivElement>(null);
  const headingRef = useLineReveal<HTMLHeadingElement>();
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => {
      const base = properties.slice(5);
      return active === "All" ? base : base.filter((p) => p.category.includes(active.slice(0, -1)));
    },
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
        onComplete: () => ScrollTrigger.refresh(),
      });
    });
  };

  return (
    <section id="showcase" ref={sectionRef} className="relative bg-[var(--color-ink)] px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-bronze)]">Properties</p>
            <h2 ref={headingRef} className="max-w-2xl font-serif text-4xl leading-tight text-[var(--color-sand)] md:text-6xl">
              {t("showcase", "title")}
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 md:pt-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                data-cursor-hover
                onClick={() => handleFilter(cat)}
                className={clsx(
                  "rounded-full border px-5 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-400",
                  active === cat
                    ? "border-[var(--color-bronze)] bg-[var(--color-bronze)] text-[var(--color-ink)]"
                    : "border-[var(--color-line)] text-[var(--color-sand-dim)] hover:border-[var(--color-bronze-soft)] hover:text-[var(--color-sand)]"
                )}
              >
                {t("showcase", `filter${cat.replace(" ", "")}`)}
              </button>
            ))}
          </div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, 6).map((property) => (
            <Link href={`/buy/${property.id}`} key={property.id} className="block group">
              <PropertyCard property={property} />
            </Link>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <MagneticButton as="a" href="/buy" className="px-10 py-4 border border-[var(--color-bronze-soft)] hover:border-[var(--color-bronze)] bg-transparent text-[var(--color-sand)] hover:opacity-70 transition-all font-bold uppercase tracking-widest text-xs">
            View more properties
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property }: { property: Property }) {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLSpanElement>(null);

  const handleEnter = () => {
    gsap.to(imgRef.current, { scale: 1.12, duration: 1.1, ease: "power3.out" });
  };

  const handleLeave = () => {
    gsap.to(imgRef.current, { scale: 1, duration: 1.1, ease: "power3.out" });
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
      className="prop-card relative aspect-[4/5] overflow-hidden rounded-sm w-full h-full"
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
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-image-overlay)] via-[var(--color-image-overlay)]/10 to-transparent" />

      <span className="absolute right-4 top-4 rounded-full border border-[var(--color-line)] bg-[var(--color-ink)]/50 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--color-sand)] backdrop-blur-sm">
        {property.category}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-serif text-xl text-[var(--color-bronze)] md:text-2xl">{property.name}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/90">
          {property.location}
        </p>
        <div className="card-details mt-3 flex translate-y-3 items-center justify-between opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span ref={priceRef} className="font-serif text-lg text-[var(--color-bronze)]">
            {property.price}
          </span>
          <span className="text-[11px] text-white/80">
            {property.beds ? `${property.beds} ${t("showcase", "beds")} · ` : ""}
            {property.baths ? `${property.baths} ${t("showcase", "baths")} · ` : ""}
            {property.area}
          </span>
        </div>
      </div>
    </div>
  );
}
