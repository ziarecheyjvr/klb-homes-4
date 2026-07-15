"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import MagneticButton from "@/components/MagneticButton";

export default function SellClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
      gsap.fromTo(".sell-text", 
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

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 60%",
          }
        }
      );

    });

    return () => ctx.revert();
  }, []);

  const principles = [
    { num: "01", title: "Transparency", desc: "Honest communication and accurate market valuations." },
    { num: "02", title: "Strategy", desc: "Tailored sales strategies that maximize your property’s potential." },
    { num: "03", title: "Relationships", desc: "Building strong client relationships based on trust and care." },
    { num: "04", title: "Modern Marketing", desc: "Innovative marketing techniques to attract the right buyers." },
  ];

  return (
    <div className="bg-[var(--color-ink)]">
      {/* 1. Immersive Hero */}
      <section ref={heroRef} className="relative h-[85svh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div ref={heroImageRef} className="h-[120%] w-full">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury living room showcasing a premium property"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#4a3b32]/90 to-[#2d261e]/40" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-48 md:h-72 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/20 to-transparent" />
        
        <div className="relative z-20 flex h-full flex-col justify-end px-6 pb-40 md:px-12 md:pb-56 max-w-[1600px] mx-auto">
          <div ref={heroTextRef} className="max-w-5xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-bronze)]">
              Sell with KLB Homes
            </p>
            <h1 className="font-serif text-[10vw] leading-[0.9] text-white md:text-[6.5vw] mb-6">
              A Seamless <br/> <span className="italic text-gradient-bronze pr-2">Selling Experience</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Content & Principles */}
      <section ref={contentRef} className="relative px-6 py-24 md:px-12 md:py-40">
        <div className="absolute top-0 right-0 pointer-events-none opacity-[0.02] select-none overflow-hidden">
          <h2 className="font-serif text-[30vw] leading-none whitespace-nowrap text-white">SELL</h2>
        </div>
        
        <div className="relative mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            
            <div className="lg:col-span-5 lg:col-start-1">
              <h2 className="sell-text font-serif text-3xl md:text-5xl text-[var(--color-sand)] mb-8 leading-tight">
                More Than Just A <br/> Financial Decision
              </h2>
              <div className="space-y-6 text-base md:text-lg text-[var(--color-sand-dim)] font-light leading-relaxed">
                <p className="sell-text">
                  At KLB Homes, we understand that selling your home is more than just a financial decision — it's a personal journey. Whether you're upgrading, downsizing, or moving on to your next chapter, we’re here to guide you through every step of the process with care, expertise, and commitment.
                </p>
                <p className="sell-text">
                  We don’t just list properties — we represent them with purpose. When you choose KLB Homes, you’re partnering with a team that values transparency, strategy, and strong client relationships. From the moment you contact us, we’ll work closely with you to understand your goals, provide an accurate market valuation, and develop a tailored sales strategy that maximizes your property’s potential.
                </p>
                <p className="sell-text font-serif text-[var(--color-sand)] text-2xl italic mt-6">
                  Our approach blends traditional values with modern tools to attract the right buyers and achieve the best results.
                </p>
              </div>
              <div className="sell-text mt-12">
                <MagneticButton as="a" href="/contact">
                  Let's Talk
                </MagneticButton>
              </div>
            </div>

            <div className="lg:col-span-5 lg:col-start-7 pt-12 lg:pt-0">
              <p className="sell-text mb-8 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-bronze)]">
                Our Selling Principles
              </p>
              <div className="space-y-4">
                {principles.map((p, i) => (
                  <div 
                    key={i} 
                    ref={(el) => { cardsRef.current[i] = el; }}
                    className="glass p-6 md:p-8 rounded-sm border border-[var(--color-line)] relative overflow-hidden group"
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 right-6 text-[80px] font-serif font-bold text-[var(--color-bronze-soft)]/20 leading-none transition-transform duration-500 group-hover:scale-110">
                      {p.num}
                    </div>
                    <h3 className="font-serif text-2xl text-[var(--color-sand)] mb-2 relative z-10">{p.title}</h3>
                    <p className="text-sm text-[var(--color-sand-dim)] font-light relative z-10">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
