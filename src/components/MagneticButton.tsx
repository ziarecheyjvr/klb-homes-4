"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import clsx from "clsx";

export default function MagneticButton({
  children,
  className,
  as = "button",
  href,
  onClick,
  type,
  variant = "pill",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "pill" | "link";
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * 0.35, y: y * 0.45, duration: 0.6, ease: "power3.out" });
  };

  const handleLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
  };

  const Comp = as === "a" ? "a" : "button";

  if (variant === "link") {
    return (
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="inline-block"
        data-cursor-hover
      >
        <Comp
          href={href}
          onClick={onClick}
          type={as === "button" ? type ?? "button" : undefined}
          className={clsx(
            "group inline-flex items-center gap-3 border-b border-[var(--color-bronze-soft)] pb-2 text-xs uppercase tracking-[0.22em] text-[var(--color-sand)] transition-colors duration-500 hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze)]",
            className
          )}
        >
          <span>{children}</span>
          <span className="transition-transform duration-500 ease-out group-hover:translate-x-1">→</span>
        </Comp>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
      data-cursor-hover
    >
      <Comp
        href={href}
        onClick={onClick}
        type={as === "button" ? type ?? "button" : undefined}
        className={clsx(
          "group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[var(--color-bronze-soft)] px-8 py-3.5 text-xs uppercase tracking-[0.22em] text-[var(--color-sand)] transition-colors duration-500 hover:border-[var(--color-bronze)]",
          className
        )}
      >
        <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[var(--color-bronze)] transition-transform duration-500 ease-out group-hover:scale-x-100" />
        <span className="relative transition-colors duration-500 group-hover:text-[var(--color-ink)]">
          {children}
        </span>
      </Comp>
    </div>
  );
}
