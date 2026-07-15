"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import MagneticButton from "@/components/MagneticButton";

export default function InvestClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  
  const contentRef = useRef<HTMLDivElement>(null);

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
      gsap.fromTo(".invest-text", 
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

      gsap.fromTo(".service-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 75%",
          }
        }
      );

    });

    return () => ctx.revert();
  }, []);

  const services = [
    { title: "Identifying Properties", desc: "Finding high-potential real estate with strong ROI prospects." },
    { title: "Renovation Planning", desc: "Creating a customized renovation plan tailored for maximum value." },
    { title: "Project Management", desc: "Managing permits, timelines, and budgets securely." },
    { title: "Construction Oversight", desc: "Overseeing the renovation with our trusted in-house team." },
    { title: "Styling & Marketing", desc: "Professionally staging and marketing the final product." },
    { title: "Sale or Rental", desc: "Selling or renting the property for maximum return on your capital." },
  ];

  return (
    <div className="bg-[var(--color-ink)]">
      {/* 1. Immersive Hero */}
      <section ref={heroRef} className="relative h-[85svh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div ref={heroImageRef} className="h-[120%] w-full">
            <Image
              src="/assets/KLB Homes/Properties/villas-sirocco/01-sirocco-1761905031754-155965375.webp"
              alt="Modern architectural lines representing solid real estate investment"
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
              KLB Homes Developments
            </p>
            <h1 className="font-serif text-[10vw] leading-[0.9] text-white md:text-[6.5vw] mb-6">
              Invest with <span className="italic text-gradient-bronze">Confidence</span>
            </h1>
            <p className="text-white/90 text-lg md:text-2xl font-light max-w-2xl">
              We Handle the Renovation — You Reap the Returns
            </p>
          </div>
        </div>
      </section>

      {/* 2. Content & Services */}
      <section ref={contentRef} className="relative px-6 py-24 md:px-12 md:py-40">
        <div className="absolute top-0 left-0 pointer-events-none opacity-[0.02] select-none overflow-hidden">
          <h2 className="font-serif text-[30vw] leading-none whitespace-nowrap text-white">ROI</h2>
        </div>
        
        <div className="relative mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            
            <div className="lg:col-span-5 lg:col-start-1">
              <h2 className="invest-text font-serif text-4xl md:text-5xl text-[var(--color-sand)] mb-8">
                Seamless <br/> Profitable Investment
              </h2>
              <div className="space-y-6 text-base md:text-lg text-[var(--color-sand-dim)] font-light leading-relaxed">
                <p className="invest-text">
                  At KLB Homes, we believe real estate investment should be both profitable and stress-free. Renovating a property can be one of the most rewarding strategies in the market — but it often comes with time-consuming decisions, construction oversight, and financial risk. That’s where we come in.
                </p>
                <p className="invest-text">
                  Our Property Investment & Renovation Service is built for investors who want to capitalize on the Marbella real estate market without the day-to-day hassle. Whether you’re a first-time investor or looking to expand your portfolio, we manage the entire process from acquisition to resale — all you need to do is provide the capital.
                </p>
                <p className="invest-text text-[var(--color-sand)] font-normal text-xl pt-6 border-t border-[var(--color-line)] mt-8">
                  With our local expertise, market insight, and end-to-end project management, we make investing in Marbella real estate seamless, transparent, and lucrative.
                </p>
              </div>
              <div className="invest-text mt-12">
                <MagneticButton as="a" href="/contact">
                  Discuss Investments
                </MagneticButton>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 services-grid">
              <p className="invest-text mb-8 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-bronze)]">
                We take care of everything
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((s, i) => (
                  <div key={i} className="service-card glass p-8 rounded-sm border border-[var(--color-line)] transition-colors hover:border-[var(--color-bronze-soft)]">
                    <div className="text-[var(--color-bronze)] text-2xl mb-4">✧</div>
                    <h3 className="font-serif text-xl text-[var(--color-sand)] mb-2">{s.title}</h3>
                    <p className="text-sm text-[var(--color-sand-dim)] font-light">{s.desc}</p>
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
