"use client";

import { useState } from "react";
import clsx from "clsx";

export default function FloatingSelect({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  const [value, setValue] = useState("");
  const active = value.length > 0;

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className={clsx(
          "pointer-events-none absolute left-0 origin-left text-[var(--color-sand-dim)] transition-all duration-300",
          active ? "top-0 -translate-y-4 text-[10px] uppercase tracking-[0.2em] text-[var(--color-bronze)]" : "top-3 text-sm"
        )}
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full appearance-none border-b border-[var(--color-line)] bg-transparent pb-2 pt-3 text-sm text-[var(--color-sand)] outline-none transition-colors duration-300 focus:border-[var(--color-bronze)]"
      >
        <option value="" disabled hidden />
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-[var(--color-ink)] text-[var(--color-sand)]">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
