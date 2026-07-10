import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-ink)] px-6 py-16 md:px-12">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-12 md:flex-row md:justify-between">
        <div>
          <div className="inline-flex items-center rounded-sm bg-[var(--color-sand)] px-4 py-2.5">
            <span className="relative block h-7 w-[124px]">
              <Image
                src="https://klb-homes.com/wp-content/uploads/2026/06/Untitled-design-20.png"
                alt="KLB Homes"
                fill
                className="object-contain"
              />
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-[var(--color-sand-dim)]">
            Marbella&apos;s premier boutique real estate agency, led by Lucie Balasova.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[var(--color-bronze)]">Navigace</p>
            <ul className="space-y-2 text-sm text-[var(--color-sand-dim)]">
              <li><a href="#hero" data-cursor-hover className="hover:text-[var(--color-sand)]">Domů</a></li>
              <li><a href="#contact" data-cursor-hover className="hover:text-[var(--color-sand)]">Prodej</a></li>
              <li><a href="#contact" data-cursor-hover className="hover:text-[var(--color-sand)]">Pronájem</a></li>
              <li><a href="#invest" data-cursor-hover className="hover:text-[var(--color-sand)]">Investice</a></li>
              <li><a href="#about" data-cursor-hover className="hover:text-[var(--color-sand)]">O nás</a></li>
              <li><a href="#contact" data-cursor-hover className="hover:text-[var(--color-sand)]">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[var(--color-bronze)]">Legal</p>
            <ul className="space-y-2 text-sm text-[var(--color-sand-dim)]">
              <li><a href="#" data-cursor-hover className="hover:text-[var(--color-sand)]">Zásady ochrany osobních údajů</a></li>
              <li><a href="#" data-cursor-hover className="hover:text-[var(--color-sand)]">Obchodní podmínky</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[var(--color-bronze)]">Connect</p>
            <ul className="space-y-2 text-sm text-[var(--color-sand-dim)]">
              <li><a href="#" data-cursor-hover className="hover:text-[var(--color-sand)]">Instagram</a></li>
              <li><a href="#" data-cursor-hover className="hover:text-[var(--color-sand)]">Youtube</a></li>
              <li><a href="mailto:info@klb-homes.com" data-cursor-hover className="hover:text-[var(--color-sand)]">info@klb-homes.com</a></li>
              <li><a href="tel:+34600145534" data-cursor-hover className="hover:text-[var(--color-sand)]">+34 600 145 534</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1600px] flex-col items-center justify-between gap-2 border-t border-[var(--color-line)] pt-8 text-center text-xs text-[var(--color-sand-dim)] md:flex-row md:text-left">
        <p>© {new Date().getFullYear()} KLB Homes. All rights reserved.</p>
        <p>KLB Homes is a lead generation site from KLB Solutions FZCO.</p>
      </div>
    </footer>
  );
}
