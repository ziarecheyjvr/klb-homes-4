"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { BuyProperty } from "@/data/buyProperties";

export default function PropertyGallery({ property }: { property: BuyProperty }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  const hasGallery = property.gallery && property.gallery.length > 0;
  const images = (hasGallery ? property.gallery : [property.image])!;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -window.innerWidth * 0.5, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: window.innerWidth * 0.5, behavior: "smooth" });
    }
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex(i => i !== null ? (i === 0 ? images.length - 1 : i - 1) : null);
  };
  
  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex(i => i !== null ? (i === images.length - 1 ? 0 : i + 1) : null);
  };
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setLightboxIndex(i => i !== null ? (i === 0 ? images.length - 1 : i - 1) : null);
      if (e.key === "ArrowRight") setLightboxIndex(i => i !== null ? (i === images.length - 1 ? 0 : i + 1) : null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, images.length]);

  return (
    <div className="reveal py-24 border-t border-[var(--color-line)] relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-bronze)] mb-3">Immerse Yourself</p>
          <h2 className="font-serif text-4xl text-[var(--color-sand)]">Gallery</h2>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={scrollLeft}
            aria-label="Previous image" 
            className="w-12 h-12 rounded-full border border-[var(--color-line)] flex items-center justify-center text-[var(--color-sand-dim)] hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze)] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={scrollRight}
            aria-label="Next image" 
            className="w-12 h-12 rounded-full border border-[var(--color-line)] flex items-center justify-center text-[var(--color-sand-dim)] hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze)] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {images.map((img, i) => (
          <div 
            key={i} 
            onClick={() => openLightbox(i)}
            className="snap-center shrink-0 w-[90vw] md:w-[60vw] lg:w-[45vw] relative aspect-[4/3] rounded-sm overflow-hidden group bg-[var(--color-ink-soft)] cursor-pointer"
          >
            <Image 
              src={img} 
              alt={`Gallery ${i}`} 
              fill 
              className={`object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out ${!hasGallery ? 'opacity-50 grayscale' : ''}`} 
            />
            {!hasGallery && (
               <div className="absolute inset-0 flex items-center justify-center text-[var(--color-sand)] font-serif italic text-xl">Image coming soon</div>
            )}
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors z-[110]"
            aria-label="Close lightbox"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          
          <button 
            onClick={prevLightbox}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors z-[110]"
            aria-label="Previous image"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <button 
            onClick={nextLightbox}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors z-[110]"
            aria-label="Next image"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
          
          <div className="relative w-full h-full max-w-[90vw] max-h-[85vh] mx-auto p-4" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={images[lightboxIndex]}
              alt={`Gallery ${lightboxIndex}`}
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs font-bold uppercase tracking-[0.2em] font-sans">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
