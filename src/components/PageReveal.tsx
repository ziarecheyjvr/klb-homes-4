"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { usePathname } from "next/navigation";

export default function PageReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".reveal", 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.1,
          clearProps: "all"
        }
      );

      gsap.fromTo(".reveal-img", 
        { scale: 1.05, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          delay: 0.2,
          clearProps: "all"
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [pathname]);

  return <div ref={ref} className="contents">{children}</div>;
}
