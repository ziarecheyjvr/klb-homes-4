"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isCoarse = window.matchMedia("(hover: none)").matches;
    if (isCoarse) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;

    const ringX = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3.out" });
    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });

    const move = (e: MouseEvent) => {
      ringX(e.clientX);
      ringY(e.clientY);
      dotX(e.clientX);
      dotY(e.clientY);
    };

    const grow = () => gsap.to(ring, { scale: 2.4, opacity: 0.6, duration: 0.35, ease: "power3.out" });
    const shrink = () => gsap.to(ring, { scale: 1, opacity: 1, duration: 0.35, ease: "power3.out" });
    const hide = () => gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    const show = () => gsap.to([dot, ring], { opacity: 1, duration: 0.2 });

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    window.addEventListener("mouseenter", show);

    const interactive = () =>
      document.querySelectorAll("a, button, [data-cursor-hover], input, textarea, select");

    const attachHoverListeners = () => {
      interactive().forEach((el) => {
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });
    };
    attachHoverListeners();

    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
      window.removeEventListener("mouseenter", show);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden="true">
      <div
        ref={ringRef}
        className="fixed left-0 top-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-bronze)] mix-blend-difference"
      />
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-bronze)]"
      />
    </div>
  );
}
