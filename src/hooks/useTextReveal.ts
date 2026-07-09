"use client";

import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "@/lib/gsap";

export function useCharReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const split = new SplitType(el, { types: "lines,chars", tagName: "span" });

    gsap.set(el, { opacity: 1 });
    const tl = gsap.timeline({ delay });
    tl.from(split.chars, {
      yPercent: 120,
      opacity: 0,
      duration: 1.1,
      ease: "expo.out",
      stagger: 0.018,
    });

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        split.split({ types: "lines,chars" });
        gsap.set(split.chars, { yPercent: 0, opacity: 1 });
      }, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", onResize);
      split.revert();
      tl.kill();
    };
  }, [delay]);

  return ref;
}

export function useLineReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const split = new SplitType(el, { types: "lines", tagName: "span" });
    gsap.set(el, { opacity: 1 });
    const tl = gsap.timeline({ delay });
    tl.from(split.lines, {
      yPercent: 110,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
      stagger: 0.09,
    });

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        split.split({ types: "lines" });
        gsap.set(split.lines, { yPercent: 0, opacity: 1 });
      }, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", onResize);
      split.revert();
      tl.kill();
    };
  }, [delay]);

  return ref;
}
