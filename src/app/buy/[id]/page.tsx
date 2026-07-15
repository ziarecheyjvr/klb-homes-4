import { notFound } from "next/navigation";
import Image from "next/image";
import { allListings } from "@/data/buyProperties";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/contact/Contact";
import PageReveal from "@/components/PageReveal";
import PropertyFAQ from "@/components/buy/PropertyFAQ";
import PropertyGallery from "@/components/buy/PropertyGallery";

export function generateStaticParams() {
  return allListings.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const property = allListings.find((p) => p.id === resolvedParams.id);

  if (!property) {
    notFound();
  }

  // Fallback text if the property is missing data
  const fallbackDescription = [
    "Experience unparalleled luxury in this exclusive property. Designed with meticulous attention to detail, every space reflects a commitment to elegance and comfort. From the sweeping views to the bespoke finishes, this home is a sanctuary of sophisticated living.",
    "Nestled in one of the most sought-after locations, it offers both privacy and proximity to world-class amenities. Whether you are entertaining guests or enjoying a quiet evening, the seamless indoor-outdoor flow provides the perfect setting for any occasion."
  ];

  const fallbackFeatures = ["South-facing orientation", "Panoramic views", "Premium finishes", "Underfloor heating", "Smart home system"];
  const fallbackAmenities = ["24/7 Security", "Private parking", "Swimming pool", "Close to golf courses"];

  const hasDescription = property.description && property.description.length > 0;
  const hasGallery = property.gallery && property.gallery.length > 0;
  const hasFeatures = property.features && property.features.length > 0;
  const hasAmenities = property.amenities && property.amenities.length > 0;

  const statements = [
    { prefix: "A ", highlight: "sophisticated", suffix: " lifestyle." },
    { prefix: "An ", highlight: "exclusive", suffix: " sanctuary." },
    { prefix: "Where ", highlight: "elegance", suffix: " meets comfort." },
    { prefix: "Redefining ", highlight: "modern", suffix: " luxury." },
    { prefix: "A masterpiece of ", highlight: "architectural", suffix: " design." },
    { prefix: "Uncompromising ", highlight: "quality", suffix: " and style." },
    { prefix: "The pinnacle of ", highlight: "coastal", suffix: " living." },
    { prefix: "Your ", highlight: "private", suffix: " Mediterranean oasis." },
    { prefix: "Exceptional ", highlight: "design,", suffix: " unparalleled views." },
    { prefix: "Experience ", highlight: "timeless", suffix: " sophistication." },
    { prefix: "A statement of ", highlight: "pure", suffix: " prestige." },
    { prefix: "Elevating the art of ", highlight: "fine", suffix: " living." }
  ];
  
  const hash = property.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const statement = statements[hash % statements.length];

  return (
    <>
      {/* We use solid=false so the navbar floats over the hero image transparently initially */}
      <Navbar solid={false} />
      
      <main className="min-h-screen bg-[var(--color-ink)]">
        <PageReveal>
          {/* 1. Full Bleed Hero */}
          <div className="relative w-full h-[70vh] md:h-[85vh] flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <Image 
                src={property.image} 
                alt={property.name} 
                fill 
                priority 
                className="object-cover" 
              />
            </div>
            
            <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-[var(--color-image-overlay)] via-[var(--color-image-overlay)]/15 to-[var(--color-image-overlay)]/40" />

            <div className="relative z-10 text-left px-6 md:px-12 lg:px-16 pb-16 md:pb-24">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--color-bronze)] mb-4 drop-shadow-md">
                {property.category}
              </p>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight drop-shadow-xl">
                {property.name}
              </h1>
              {property.location && (
                <div className="flex items-center gap-2 mt-6 text-white drop-shadow-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-bronze)]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span className="text-xl md:text-2xl font-serif tracking-wide">{property.location}</span>
                </div>
              )}
            </div>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 pb-24">
            {/* 2. Intro & Specs Card */}
            <div className="reveal flex flex-col lg:flex-row gap-16 lg:gap-24 py-24">
              
              {/* Left: Description */}
              <div className="flex-1">
                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-bronze)] mb-6">Property Overview</p>
                 <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-sand)] mb-8 leading-tight">
                   {statement.prefix}<span className="text-[var(--color-bronze)] italic">{statement.highlight}</span>{statement.suffix}
                 </h2>
                 <div className="space-y-6 text-[var(--color-sand-dim)] font-light leading-relaxed text-lg">
                   {(hasDescription ? property.description : fallbackDescription)!.map((p, i) => (
                     <p key={i}>{p}</p>
                   ))}
                 </div>
              </div>

              {/* Right: Specs Card */}
              <div className="w-full lg:w-[450px] shrink-0">
                <div className="bg-[var(--color-ink-soft)] border border-[var(--color-line)] p-8 md:p-10 rounded-sm">
                  <h3 className="font-serif text-2xl text-[var(--color-sand)] mb-8">Specifications</h3>
                  
                  <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-8">
                     <div>
                       <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-sand-dim)] mb-2">Bedrooms</p>
                       <p className="font-serif text-2xl text-[var(--color-sand)]">{property.beds || "-"}</p>
                     </div>
                     <div>
                       <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-sand-dim)] mb-2">Bathrooms</p>
                       <p className="font-serif text-2xl text-[var(--color-sand)]">{property.baths || "-"}</p>
                     </div>
                     <div>
                       <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-sand-dim)] mb-2">Built Area</p>
                       <p className="font-serif text-2xl text-[var(--color-sand)]">{property.area || "-"}</p>
                     </div>
                     <div>
                       <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-sand-dim)] mb-2">Type</p>
                       <p className="font-serif text-xl text-[var(--color-sand)]">{property.category}</p>
                     </div>
                     {property.location && (
                       <div className="col-span-2">
                         <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-sand-dim)] mb-2">Location</p>
                         <p className="font-serif text-xl text-[var(--color-sand)]">{property.location}</p>
                       </div>
                     )}
                  </div>

                  <div className="border-t border-[var(--color-line)] pt-8 flex items-center justify-between">
                     <div>
                       <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-sand-dim)] mb-1">Asking Price</p>
                       <p className="font-serif text-2xl md:text-3xl text-[var(--color-bronze)]">{property.price}</p>
                     </div>
                     <a href="#inquiry" className="inline-block bg-[var(--color-sand)] text-[var(--color-ink)] px-6 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-[var(--color-bronze)] hover:text-white transition-colors rounded-sm">
                       Inquire
                     </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Gallery */}
            <PropertyGallery property={property} />

            {/* 4. Map & Features (Replacing Floorplan & Surface Areas) */}
            <div className="reveal py-24 border-t border-[var(--color-line)] flex flex-col lg:flex-row gap-16 lg:gap-24">
              
              {/* Left: Map */}
              <div className="flex-1">
                <div className="w-full aspect-square md:aspect-[4/3] rounded-sm overflow-hidden border border-[var(--color-line)] p-2 bg-[var(--color-ink-soft)]">
                  <div className="w-full h-full relative rounded-sm overflow-hidden">
                    <iframe 
                      title={`${property.name} Location`} 
                      className="absolute inset-0 w-full h-full grayscale invert-[0.92] contrast-[0.9]" 
                      src="https://www.openstreetmap.org/export/embed.html?bbox=-5.05%2C36.45%2C-4.75%2C36.60&layer=mapnik&marker=36.51,-4.88" 
                    />
                  </div>
                </div>
              </div>

              {/* Right: Features List Card */}
              <div className="w-full lg:w-[450px] shrink-0">
                <div className="bg-[var(--color-ink-soft)] border border-[var(--color-line)] p-8 md:p-10 rounded-sm">
                  <h3 className="font-serif text-2xl text-[var(--color-sand)] mb-8">Features</h3>
                  <ul className="space-y-0 text-[var(--color-sand-dim)] font-light text-sm">
                    {(hasFeatures ? property.features : fallbackFeatures)!.map((f, i) => (
                      <li key={i} className="flex justify-between items-center border-b border-[var(--color-line)] py-4 first:pt-0">
                         <span>{f}</span>
                         <span className="text-[var(--color-bronze)]">✓</span>
                      </li>
                    ))}
                    {(hasAmenities ? property.amenities : fallbackAmenities)!.map((a, i) => (
                      <li key={`a-${i}`} className="flex justify-between items-center border-b border-[var(--color-line)] py-4 last:border-b-0 last:pb-0">
                         <span>{a}</span>
                         <span className="text-[var(--color-bronze)]">✓</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Video (Optional) */}
            {property.videoUrl && (
              <div className="reveal py-24 border-t border-[var(--color-line)]">
                <div className="text-center mb-12">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-bronze)] mb-3">Cinematic</p>
                  <h2 className="font-serif text-4xl text-[var(--color-sand)]">Video Tour</h2>
                </div>
                <div className="reveal-img relative w-full aspect-video overflow-hidden rounded-sm bg-black shadow-2xl">
                  <iframe
                    src={property.videoUrl}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
            )}

            {/* 6. Global FAQs */}
            <div className="pt-24 border-t border-[var(--color-line)]">
              <PropertyFAQ />
            </div>

            {/* 7. Inquiry Form */}
            <div id="inquiry" className="py-24 border-t border-[var(--color-line)]">
              <div className="max-w-2xl mx-auto">
                 <h2 className="font-serif text-3xl text-[var(--color-sand)] mb-12 text-center">Request Information</h2>
                 <div className="reveal">
                    <Contact propertyContext={{ id: property.id, name: property.name }} />
                 </div>
              </div>
            </div>
          </div>
        </PageReveal>
      </main>
      <Footer />
    </>
  );
}
