"use client";

import { useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import FloatingField from "./FloatingField";
import FloatingSelect from "./FloatingSelect";
import MagneticButton from "../MagneticButton";

const INQUIRY_TYPES = ["Buying", "Selling", "Renting", "Investment", "General Inquiry"];

export default function Contact({ propertyContext }: { propertyContext?: { id: string; name: string } }) {
  const [submitted, setSubmitted] = useState(false);
  const [gdprError, setGdprError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const confirmRef = useRef<HTMLDivElement>(null);
  const gdprRef = useRef<HTMLLabelElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const required = form.querySelectorAll("[required]");
    let valid = true;
    required.forEach((el) => {
      if ((el as HTMLInputElement).value.trim() === "") valid = false;
    });

    const gdprChecked = (form.elements.namedItem("gdpr") as HTMLInputElement)?.checked;
    if (!gdprChecked) {
      setGdprError(true);
      gsap.fromTo(gdprRef.current, { x: -6 }, { x: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
      valid = false;
    } else {
      setGdprError(false);
    }

    if (!valid) {
      gsap.fromTo(form, { x: -8 }, { x: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
      return;
    }

    const formData = new FormData(form);
    formData.append("access_key", "ad1794e7-9886-4532-befd-ab8e30e3da2e");

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).catch(err => console.error("Web3Forms error:", err));

    gsap.to(formRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power3.in",
      onComplete: () => {
        setSubmitted(true);
        gsap.fromTo(
          confirmRef.current,
          { opacity: 0, y: 20, clipPath: "inset(0% 0% 100% 0%)" },
          { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "expo.out" }
        );
      },
    });
  };

  return (
    <section id="contact" className={`relative bg-[var(--color-ink)] ${propertyContext ? '' : 'px-6 py-32 md:px-12'}`}>
      <div className={`mx-auto ${propertyContext ? 'max-w-2xl' : 'grid max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-2'}`}>
        {!propertyContext && (
          <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-bronze)]">Contact KLB HOMES</p>
          <h2 className="max-w-md font-serif text-4xl leading-tight text-[var(--color-sand)] md:text-5xl">
            Begin your Marbella property journey
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--color-sand-dim)]">
            Ready to find your perfect property in the sunshine? Whether you&apos;re looking for
            a permanent residence, holiday home, or investment opportunity, KLB Homes is here to
            guide your journey.
          </p>

          <div className="mt-8 space-y-2">
            <a
              href="mailto:info@klb-homes.com"
              data-cursor-hover
              className="block text-sm text-[var(--color-sand)] transition-colors hover:text-[var(--color-bronze)]"
            >
              info@klb-homes.com
            </a>
            <a
              href="tel:+34600145534"
              data-cursor-hover
              className="block text-sm text-[var(--color-sand)] transition-colors hover:text-[var(--color-bronze)]"
            >
              +34 600 145 534
            </a>
          </div>

          <div className="mt-10 aspect-video w-full overflow-hidden rounded-sm border border-[var(--color-line)]">
            <iframe
              title="Marbella location map"
              className="h-full w-full grayscale invert-[0.92] contrast-[0.9]"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-5.05%2C36.45%2C-4.75%2C36.60&layer=mapnik&marker=36.51,-4.88"
            />
          </div>
        </div>
        )}

        <div className="relative">
          {!submitted && (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              {propertyContext && (
                <input type="hidden" name="Property Inquiry" value={`${propertyContext.name} (${propertyContext.id})`} />
              )}
              <FloatingSelect label="Inquiry Type" name="inquiryType" options={INQUIRY_TYPES} required />

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <FloatingField label="First Name" name="firstName" required />
                <FloatingField label="Last Name" name="lastName" required />
              </div>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <FloatingField label="Email Address" type="email" name="email" required />
                <FloatingField label="Phone" type="tel" name="phone" />
              </div>
              <FloatingField label="What are you looking for?" name="message" as="textarea" required />

              <label ref={gdprRef} className="flex items-start gap-3 text-xs text-[var(--color-sand-dim)]">
                <input
                  type="checkbox"
                  name="gdpr"
                  onChange={() => setGdprError(false)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-bronze)]"
                />
                <span className={gdprError ? "text-red-400/80" : ""}>
                  I consent to having this website store my submitted information
                </span>
              </label>

              <MagneticButton as="button" type="submit" className="w-full justify-center">
                Submit
              </MagneticButton>
            </form>
          )}

          {submitted && (
            <div ref={confirmRef} className="glass flex h-full flex-col items-center justify-center rounded-sm p-16 text-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-bronze)]">
                <span className="font-serif text-2xl text-[var(--color-bronze)]">✓</span>
              </div>
              <h3 className="font-serif text-2xl text-[var(--color-sand)]">Request received</h3>
              <p className="mt-3 max-w-xs text-sm text-[var(--color-sand-dim)]">
                An advisor will reach out shortly to guide your Marbella property journey.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
