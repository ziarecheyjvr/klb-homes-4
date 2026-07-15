"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import MagneticButton from "@/components/MagneticButton";

export default function AboutClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  
  const storyRef = useRef<HTMLDivElement>(null);
  
  const founderSectionRef = useRef<HTMLDivElement>(null);
  const founderImageRef = useRef<HTMLDivElement>(null);
  const founderContentRef = useRef<HTMLDivElement>(null);

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

      // Story Reveal
      gsap.fromTo(".story-text", 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 70%",
          }
        }
      );

      gsap.fromTo(".story-img",
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".story-img",
            start: "top 80%",
          }
        }
      );

      // Founder Sticky
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {


        // Founder text reveal
        gsap.fromTo(".founder-text",
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: founderContentRef.current,
              start: "top 60%",
            }
          }
        );
      });
      
      mm.add("(max-width: 1023px)", () => {
         // Mobile animation for founder text
         gsap.fromTo(".founder-text",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: founderContentRef.current,
              start: "top 75%",
            }
          }
        );
      });

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
              src="/assets/KLB Homes/Properties/belvederes-12/01-Belvederes12-48-scaled.webp"
              alt="Beautiful Spanish architecture representing Marbella"
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
              About KLB Homes
            </p>
            <h1 className="font-serif text-[12vw] leading-[0.9] text-white md:text-[8vw]">
              The KLB <br/> <span className="italic text-gradient-bronze pr-2">Difference</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Story Section (Asymmetric) */}
      <section ref={storyRef} className="relative px-6 py-24 md:px-12 md:py-40">
        <div className="absolute top-0 right-0 pointer-events-none opacity-[0.02] select-none overflow-hidden">
          <h2 className="font-serif text-[30vw] leading-none whitespace-nowrap text-white">STORY</h2>
        </div>
        
        <div className="relative mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            <div className="lg:col-span-5 lg:col-start-1">
              <div className="pr-0 lg:pr-8">
                <h3 className="story-text font-serif text-4xl md:text-5xl text-[var(--color-sand)] mb-8 leading-tight">
                  Your Marbella Property Specialist
                </h3>
                <div className="space-y-6 text-base md:text-lg text-[var(--color-sand-dim)] font-light leading-relaxed">
                  <p className="story-text">
                    Welcome to KLB Homes, where your property dreams in Marbella become a reality. We’re not just real estate agents; we are your Personal Property Consultants, dedicated exclusively to advocating for you, the buyer.
                  </p>
                  <p className="story-text">
                    KLB Homes is a boutique real estate agency specializing in providing personalized, all-inclusive services that cater to your unique needs. Led by Lucie Balasova, our agency combines extensive market knowledge with unwavering dedication to client satisfaction.
                  </p>
                  <p className="story-text text-[var(--color-sand)] font-normal text-xl pt-6 border-t border-[var(--color-line)] mt-8">
                    Whether you’re seeking a luxurious villa, a charming apartment, or an investment opportunity, we’re here to make your aspirations come true.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="story-img relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                <Image
                  src="/assets/KLB Homes/Properties/las-palmeras/18-Villas-Las-Palmeras-10mb-11-scaled.webp"
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

      {/* 3. Founder Profile (Sticky Layout) */}
      <section ref={founderSectionRef} className="relative bg-[var(--color-ink-soft)] lg:min-h-screen">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left: Sticky Image */}
            <div className="relative h-[60vh] lg:h-screen w-full lg:sticky top-0">
              <div ref={founderImageRef} className="absolute inset-0 lg:p-12 pb-0">
                <div className="relative h-full w-full overflow-hidden rounded-t-sm lg:rounded-sm">
                  <Image
                    src="/assets/KLB Homes/Lucie-Balasova.webp"
                    alt="Lucie Balasova, Founder of KLB Homes"
                    fill
                    className="object-cover object-[center_20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink-soft)] via-transparent to-transparent lg:hidden" />
                </div>
              </div>
            </div>

            {/* Right: Scrolling Content */}
            <div ref={founderContentRef} className="relative px-6 py-16 md:px-12 lg:py-40 z-10 flex items-center">
              <div className="max-w-xl">
                <p className="founder-text mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-bronze)]">
                  Your Trusted Partner
                </p>
                <h2 className="founder-text font-serif text-4xl md:text-6xl text-[var(--color-sand)] mb-2">
                  Meet Lucie Balasova
                </h2>
                <p className="founder-text text-xs uppercase tracking-[0.2em] text-[var(--color-sand-dim)] mb-10">
                  Property Advisor | Founder of KLB Homes
                </p>
                
                <p className="founder-text font-serif text-2xl md:text-3xl italic text-[var(--color-bronze)] mb-8 leading-tight">
                  "Marbella is more than a destination—it is a way of life."
                </p>
                
                <div className="space-y-6 text-sm md:text-base text-[var(--color-sand-dim)] font-light leading-relaxed">
                  <p className="founder-text">
                    With over six years of experience in Marbella’s property market, Lucie Balasova helps international buyers find not only the right property, but the right place to call home on the Costa del Sol.
                  </p>
                  <p className="founder-text">
                    Through KLB Homes, she offers a boutique, highly personalised service built on trust, transparency, and genuine care. Taking the time to understand each client’s lifestyle, priorities, and long-term goals, Lucie provides expert guidance throughout every stage of the property journey.
                  </p>
                  <p className="founder-text">
                    More than simply helping clients buy property, she helps them navigate Marbella with confidence—sharing local insight, trusted connections, and a genuine understanding of the communities, lifestyle, and opportunities that make this region so special.
                  </p>
                  <p className="founder-text">
                    Whether you are searching for a holiday home, a permanent residence, or an investment property, her goal is simple: to make your Marbella journey enjoyable, informed, and stress-free from the very first conversation.
                  </p>
                </div>

                <div className="founder-text mt-12">
                  <MagneticButton as="a" href="/contact">
                    Contact Lucie
                  </MagneticButton>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
