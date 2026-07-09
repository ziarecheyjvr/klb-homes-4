"use client";

import { useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import clsx from "clsx";

export default function FloatingField({
  label,
  type = "text",
  name,
  as = "input",
  required,
}: {
  label: string;
  type?: string;
  name: string;
  as?: "input" | "textarea";
  required?: boolean;
}) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [focused, setFocused] = useState(false);
  const fieldRef = useRef<HTMLDivElement>(null);

  const active = focused || value.length > 0;

  const handleBlur = () => {
    setFocused(false);
    if (required && value.trim() === "") {
      setError(true);
      gsap.fromTo(
        fieldRef.current,
        { x: -6 },
        { x: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" }
      );
    } else {
      setError(false);
    }
  };

  const Comp = as === "textarea" ? "textarea" : "input";

  return (
    <div ref={fieldRef} className="relative">
      <label
        htmlFor={name}
        className={clsx(
          "pointer-events-none absolute left-0 origin-left text-[var(--color-sand-dim)] transition-all duration-300",
          active ? "top-0 -translate-y-4 text-[10px] uppercase tracking-[0.2em] text-[var(--color-bronze)]" : "top-3 text-sm"
        )}
      >
        {label}
      </label>
      <Comp
        id={name}
        name={name}
        type={as === "input" ? type : undefined}
        rows={as === "textarea" ? 4 : undefined}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (error) setError(false);
        }}
        onFocus={() => setFocused(true)}
        onBlur={handleBlur}
        className={clsx(
          "w-full resize-none border-b bg-transparent pb-2 pt-3 text-sm text-[var(--color-sand)] outline-none transition-colors duration-300",
          error ? "border-red-400/70" : "border-[var(--color-line)] focus:border-[var(--color-bronze)]"
        )}
      />
      {error && <p className="mt-1 text-[10px] text-red-400/80">{label} is required</p>}
    </div>
  );
}
