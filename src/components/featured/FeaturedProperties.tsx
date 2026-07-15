"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Link from "next/link";
import { allListings, BuyProperty } from "@/data/buyProperties";
import { useLanguage } from "@/i18n/LanguageContext";

type Stat =
  | { label: string; kind: "number"; value: number; suffix: string }
  | { label: string; kind: "text"; text: string };

function buildStats(property: BuyProperty): Stat[] {
  const stats: Stat[] = [];

  if (property.beds) stats.push({ label: "Bedrooms", kind: "number", value: Number(property.beds), suffix: "" });
  if (property.baths) stats.push({ label: "Bathrooms", kind: "number", value: Number(property.baths), suffix: "" });

  if (property.area) {
    const areaMatch = property.area.match(/^([\d,]+)\s*(.*)$/);
    if (areaMatch) {
      stats.push({
        label: "Size",
        kind: "number",
        value: Number(areaMatch[1].replace(/,/g, "")),
        suffix: areaMatch[2] ? ` ${areaMatch[2]}` : "",
      });
    } else {
      stats.push({ label: "Configuration", kind: "text", text: property.area });
    }
  }

  stats.push({ label: "Type", kind: "text", text: property.category });

  return stats.slice(0, 4);
}

export default function FeaturedProperties() {
  const { t } = useLanguage();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current!;

    const setPanelWidth = () => {
      wrapper.style.setProperty("--panel-w", `${wrapper.clientWidth}px`);
    };
    setPanelWidth();

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const scrollLength = () => track.scrollWidth - wrapper.clientWidth;

      const horizontalTween = gsap.to(track, {
        x: () => -scrollLength(),
        ease: "none",
        scrollTrigger: {
          id: "featured-scroll",
          trigger: wrapperRef.current,
          start: "top top",
          end: () => `+=${scrollLength()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".stat-num").forEach((el) => {
        const target = Number(el.dataset.value);
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 1.6,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              containerAnimation: horizontalTween,
              start: "left 80%",
            },
            onUpdate: function () {
              el.textContent = Math.floor(Number(el.textContent)).toLocaleString();
            },
          }
        );
      });
    }, wrapperRef);

    const onResize = () => {
      setPanelWidth();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

  return (
    <section id="featured" ref={wrapperRef} className="relative h-screen overflow-hidden bg-[var(--color-ink-soft)]">
      <div ref={trackRef} className="flex h-full w-max">
        <div className="flex h-full w-[var(--panel-w)] flex-shrink-0 items-center px-6 md:px-16">
          <div className="max-w-md">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-bronze)]">
              {t("featured", "subtitle")}
            </p>
            <h2 className="font-serif text-4xl leading-tight text-[var(--color-sand)] md:text-6xl">
              {t("featured", "title")}
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-[var(--color-sand-dim)]">
              {t("featured", "description")}
            </p>
          </div>
        </div>

        {allListings.slice(20, 26).map((property) => (
          <FeaturedCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}

function FeaturedCard({ property }: { property: BuyProperty }) {
  return (
    <div className="relative flex h-full w-[var(--panel-w)] flex-shrink-0 items-center justify-center overflow-hidden">
      <Image
        src={property.image}
        alt={property.name}
        fill
        sizes="100vw"
        className="object-cover"
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-image-overlay)] via-[var(--color-image-overlay)]/30 to-[var(--color-image-overlay)]/10" />

      <div className="relative z-10 flex h-full w-full max-w-[1600px] flex-col justify-end px-6 pb-16 md:px-16">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-bronze)]">{property.location}</p>
        <h3 className="mt-3 font-serif text-4xl text-white md:text-6xl">{property.name}</h3>

        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {buildStats(property).map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-2xl text-white md:text-3xl">
                {stat.kind === "number" ? (
                  <>
                    <span className="stat-num" data-value={stat.value}>
                      0
                    </span>
                    {stat.suffix}
                  </>
                ) : (
                  stat.text
                )}
              </div>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-6">
          <span className="font-serif font-bold text-2xl text-[var(--color-bronze)]">{property.price}</span>
          <Link
            href={`/buy/${property.id}`}
            className="rounded-full bg-[var(--color-bronze)] px-5 py-2 text-xs uppercase tracking-[0.15em] text-[var(--color-ink)] transition-colors hover:bg-white hover:text-black font-bold"
          >
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
}
