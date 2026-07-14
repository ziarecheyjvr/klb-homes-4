"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { allListings, BuyProperty } from "@/data/buyProperties";

export default function BuyListings() {
  const [city, setCity] = useState("All Cities");
  const [type, setType] = useState("All Types");
  const [status, setStatus] = useState("All Status");
  const [bedrooms, setBedrooms] = useState("Bedrooms");
  const [bathrooms, setBathrooms] = useState("Bathrooms");
  const [minPrice, setMinPrice] = useState("Min. Price");
  const [maxPrice, setMaxPrice] = useState("Max. Price");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  const [propertyId, setPropertyId] = useState("");

  const [visibleCount, setVisibleCount] = useState(9);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const types = Array.from(new Set(allListings.flatMap(p => p.category.split(',').map(c => c.trim()))));
  const statuses = Array.from(new Set(allListings.map(p => p.status)));

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("category");
      if (cat) {
        setType(cat);
      }
    }
  }, []);

  const filteredListings = useMemo(() => {
    return allListings.filter(property => {
      // Name / ID Match
      if (propertyId && !property.name.toLowerCase().includes(propertyId.toLowerCase())) return false;
      
      // Type Match
      if (type !== "All Types" && !property.category.includes(type)) return false;
      
      // Status Match
      if (status !== "All Status" && property.status !== status) return false;
      
      // Beds Match
      if (bedrooms !== "Bedrooms") {
        const bedVal = property.beds ? parseInt(property.beds.toString()) : 0;
        const targetBed = parseInt(bedrooms);
        if (bedrooms.includes("+")) {
          if (bedVal < targetBed) return false;
        } else if (bedVal !== targetBed) return false;
      }

      // Baths Match
      if (bathrooms !== "Bathrooms") {
        const bathVal = property.baths ? parseInt(property.baths.toString()) : 0;
        const targetBath = parseInt(bathrooms);
        if (bathrooms.includes("+")) {
          if (bathVal < targetBath) return false;
        } else if (bathVal !== targetBath) return false;
      }

      // Price Match
      const priceVal = parseInt(property.price.replace(/[^0-9]/g, '')) || 0;
      if (minPrice !== "Min. Price") {
        const minP = parseInt(minPrice.replace(/[^0-9]/g, '')) * (minPrice.includes('k') ? 1000 : minPrice.includes('M') ? 1000000 : 1);
        if (priceVal < minP) return false;
      }
      if (maxPrice !== "Max. Price") {
        const maxP = parseInt(maxPrice.replace(/[^0-9]/g, '')) * (maxPrice.includes('k') ? 1000 : maxPrice.includes('M') ? 1000000 : 1);
        if (priceVal > maxP) return false;
      }

      // Area Match
      const areaVal = property.area ? parseInt(property.area.replace(/[^0-9]/g, '')) : 0;
      if (minArea && areaVal < parseInt(minArea)) return false;
      if (maxArea && areaVal > parseInt(maxArea)) return false;

      // City Match - mock since we don't have location in buyProperties data
      if (city !== "All Cities") {
        // If we had location, we would check it here. For now, let it pass or fail.
      }

      return true;
    });
  }, [city, type, status, bedrooms, bathrooms, minPrice, maxPrice, minArea, maxArea, propertyId]);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(9);
  }, [filteredListings]);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentListings = filteredListings.slice(0, visibleCount);

  return (
    <div className="w-full relative">
      {/* Advanced Search Bar */}
      <div className="mb-16 bg-[var(--color-ink-soft)] border border-[var(--color-bronze-soft)]/20 p-4 md:p-6 rounded-sm shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
          <SearchSelect value={city} onChange={setCity} options={["All Cities", "Marbella", "Puerto Banús", "Benahavís", "Estepona"]} />
          <SearchSelect value={type} onChange={setType} options={["All Types", ...types]} />
          <SearchSelect value={status} onChange={setStatus} options={["All Status", ...statuses]} />
          <SearchSelect value={bedrooms} onChange={setBedrooms} options={["Bedrooms", "1", "2", "3", "4", "5+"]} />
          <SearchSelect value={bathrooms} onChange={setBathrooms} options={["Bathrooms", "1", "2", "3", "4", "5+"]} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          <SearchSelect value={minPrice} onChange={setMinPrice} options={["Min. Price", "€500k", "€1M", "€2M", "€5M", "€10M"]} />
          <SearchSelect value={maxPrice} onChange={setMaxPrice} options={["Max. Price", "€1M", "€2M", "€5M", "€10M", "€20M+"]} />
          <SearchInput value={minArea} onChange={setMinArea} placeholder="Min. Area (sqm)" />
          <SearchInput value={maxArea} onChange={setMaxArea} placeholder="Max. Area (sqm)" />
          <SearchInput value={propertyId} onChange={setPropertyId} placeholder="Property ID / Name" />
          <button 
            className="bg-[var(--color-bronze)] text-[var(--color-ink)] font-bold uppercase tracking-[0.2em] text-[10px] h-[50px] w-full rounded-sm hover:bg-white hover:text-[var(--color-sand)] transition-colors duration-300"
            onClick={() => { /* Instant filtering is used, so button is mostly for UX */ }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Grid */}
      {filteredListings.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentListings.map((property) => (
              <Link key={property.id} href={`/buy/${property.id}`} className="block h-full">
                <PropertyCard property={property} />
              </Link>
            ))}
          </div>
          
          {visibleCount < filteredListings.length && (
            <div className="mt-16 flex justify-center">
              <button 
                onClick={() => setVisibleCount(v => v + 9)}
                className="px-10 py-4 border border-[var(--color-bronze-soft)] rounded-full text-xs uppercase tracking-widest text-[var(--color-sand)] hover:border-[var(--color-bronze)] hover:bg-[var(--color-bronze)] hover:text-[var(--color-ink)] font-bold transition-all duration-300"
              >
                Load More Properties
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="py-20 text-center">
          <p className="text-[var(--color-sand-dim)] text-xl mb-6">No properties found matching your extensive criteria.</p>
          <button 
            onClick={() => { 
              setCity("All Cities"); setType("All Types"); setStatus("All Status");
              setBedrooms("Bedrooms"); setBathrooms("Bathrooms"); setMinPrice("Min. Price");
              setMaxPrice("Max. Price"); setMinArea(""); setMaxArea(""); setPropertyId("");
            }}
            className="text-[var(--color-bronze)] underline uppercase text-xs tracking-widest hover:text-white transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-ink)] border border-[var(--color-bronze-soft)] text-[var(--color-bronze)] shadow-2xl transition-all duration-500 hover:bg-[var(--color-bronze)] hover:text-[var(--color-ink)] ${showTopBtn ? 'translate-y-0 opacity-100 visible' : 'translate-y-8 opacity-0 invisible'}`}
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
}

function SearchSelect({ value, onChange, options }: { value: string, onChange: (v: string) => void, options: string[] }) {
  return (
    <div className="relative w-full">
      <select 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-[var(--color-ink)]/50 border border-[var(--color-bronze-soft)]/20 rounded-sm px-4 h-[50px] text-sm text-[var(--color-sand)] focus:outline-none focus:border-[var(--color-bronze)] transition-colors cursor-pointer"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-[var(--color-ink)] text-[var(--color-sand)]">{o}</option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-sand-dim)] text-[10px]">
        ▼
      </div>
    </div>
  );
}

function SearchInput({ value, onChange, placeholder }: { value: string, onChange: (v: string) => void, placeholder: string }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-[var(--color-ink)]/50 border border-[var(--color-bronze-soft)]/20 rounded-sm px-4 h-[50px] text-sm text-[var(--color-sand)] placeholder:text-[var(--color-sand-dim)]/50 focus:outline-none focus:border-[var(--color-bronze)] transition-colors"
    />
  );
}

function PropertyCard({ property }: { property: BuyProperty }) {
  return (
    <div className="group flex flex-col w-full h-full overflow-hidden rounded-sm cursor-pointer bg-[var(--color-ink-soft)] border border-[var(--color-bronze-soft)]/30 hover:border-[var(--color-bronze)] transition-colors">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {property.featured && (
          <div className="absolute top-4 left-4 bg-[var(--color-bronze)] text-[var(--color-ink)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest z-10 rounded-sm">
            Featured
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 md:p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="pr-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-bronze)] mb-2">
              {property.category}
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-sand)] leading-tight">
              {property.name}
            </h3>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-sand-dim)] mb-2">
              {property.status}
            </p>
            <p className="text-[var(--color-bronze)] font-serif text-xl md:text-2xl font-semibold">
              {property.price}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 border-t border-[var(--color-bronze-soft)]/20 pt-6 mt-auto">
          {property.beds && (
            <div>
              <p className="text-[var(--color-sand)] font-serif text-lg">{property.beds}</p>
              <p className="text-[var(--color-sand-dim)] text-[9px] uppercase tracking-widest">Beds</p>
            </div>
          )}
          {property.baths && (
            <div>
              <p className="text-[var(--color-sand)] font-serif text-lg">{property.baths}</p>
              <p className="text-[var(--color-sand-dim)] text-[9px] uppercase tracking-widest">Baths</p>
            </div>
          )}
          {property.area && (
            <div>
              <p className="text-[var(--color-sand)] font-serif text-lg whitespace-nowrap overflow-hidden text-ellipsis">
                {property.area.replace(/sqm|m²|SQM/gi, '').trim()}
              </p>
              <p className="text-[var(--color-sand-dim)] text-[9px] uppercase tracking-widest">
                {property.area.match(/sqm|m²/i)?.[0] || 'SQM'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
