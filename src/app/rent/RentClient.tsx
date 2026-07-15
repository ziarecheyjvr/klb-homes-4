"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import MagneticButton from "@/components/MagneticButton";

export default function RentClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  
  const contentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Parallax
      gsap.fromTo(
        heroImageRef.current,
        { scale: 1.1, yPercent: -5 },
        {
          scale: 1,
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.to(heroTextRef.current, {
        yPercent: 30,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Content Reveal
      gsap.fromTo(".rent-text", 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 70%",
          }
        }
      );
      
      gsap.fromTo(".rent-img",
        { clipPath: "inset(0% 100% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 60%",
          }
        }
      );

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: contentRef.current,
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
    <div className="bg-[var(--color-ink)]">
      {/* 1. Immersive Hero */}
      <section ref={heroRef} className="relative h-[85svh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div ref={heroImageRef} className="h-[120%] w-full">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
              alt="Beautiful Marbella rental property with a pool"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#4a3b32]/90 to-[#2d261e]/40" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-48 md:h-72 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/20 to-transparent" />
        
        <div className="relative z-20 flex h-full flex-col justify-end px-6 pb-40 md:px-12 md:pb-56 max-w-[1600px] mx-auto">
          <div ref={heroTextRef} className="max-w-4xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-bronze)]">
              Rent in Marbella
            </p>
            <h1 className="font-serif text-[10vw] leading-[0.9] text-white md:text-[7vw] mb-6">
              The Perfect <br/> <span className="italic text-gradient-bronze pr-2">Place to Stay</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Content Section */}
      <section ref={contentRef} className="relative px-6 py-24 md:px-12 md:py-40">
        <div className="relative mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            <div className="lg:col-span-5 lg:col-start-1 relative pl-8 md:pl-12">
              <div ref={lineRef} className="absolute left-0 top-0 h-full w-[1px] bg-[var(--color-bronze-soft)]/40 origin-top" />
              
              <h2 className="rent-text font-serif text-3xl md:text-5xl text-[var(--color-sand)] mb-8">
                Your Ideal Lifestyle <br/> Awaits
              </h2>
              <div className="space-y-6 text-base md:text-lg text-[var(--color-sand-dim)] font-light leading-relaxed">
                <p className="rent-text">
                  Whether you're relocating, planning a long-term stay, or simply searching for the ideal holiday rental, KLB Homes is here to guide you through the Marbella rental market with ease and confidence.
                </p>
                <p className="rent-text">
                  We know that finding the right home to rent is about more than just price and location — it’s about lifestyle, comfort, and peace of mind. That’s why we take the time to understand what matters most to you, then match you with properties that align with your needs, preferences, and budget.
                </p>
                <p className="rent-text font-serif text-[var(--color-sand)] text-2xl italic mt-6">
                  With access to an exclusive portfolio of villas, apartments, and townhouses across Marbella and surrounding areas, our local expertise ensures you’ll discover the best options — whether you’re looking for beachfront luxury, golf-side tranquility, or something in between.
                </p>
              </div>
              <div className="rent-text mt-12">
                <MagneticButton as="a" href="/contact">
                  Tell Us What You Need
                </MagneticButton>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="rent-img relative aspect-square w-full max-w-xl mx-auto overflow-hidden rounded-sm">
                <Image
                  src="https://klb-homes.com/wp-content/uploads/2026/04/Las-Palmeras-Exteriors-10mb-28-scaled.jpg"
                  alt="Luxury lifestyle in Marbella"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--color-ink)]/10 mix-blend-multiply" />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
