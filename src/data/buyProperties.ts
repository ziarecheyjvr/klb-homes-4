export type BuyProperty = {
  id: string;
  name: string;
  price: string;
  category: string;
  beds?: number | string;
  baths?: number | string;
  area?: string;
  status: string;
  featured?: boolean;
  image: string;
  description?: string[];
  location?: string;
  features?: string[];
  amenities?: string[];
  gallery?: string[];
  videoUrl?: string;
  faqs?: { question: string; answer: string }[];
};

export const allListings: BuyProperty[] = [
  { 
    id: "buenavista-ph", 
    name: "Buenavista PH", 
    price: "€1,495,000", 
    category: "Penthouse", 
    beds: 3, 
    baths: 2, 
    area: "124 sqm", 
    status: "For Sale", 
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    location: "Nueva Andalucía",
    description: [
      "Perched atop one of Nueva Andalucía's most prestigious complexes, Buenavista PH is a masterclass in modern luxury living. This fully renovated penthouse offers sweeping, panoramic views of the Mediterranean Sea, La Concha mountain, and the famed Golf Valley.",
      "Every detail has been meticulously crafted, featuring a bespoke open-plan layout that seamlessly integrates the indoor and outdoor living spaces. The expansive private terrace serves as an exclusive retreat, complete with a custom plunge pool, outdoor kitchen, and elegant lounging areas designed for the ultimate Marbella lifestyle.",
      "Inside, the property boasts premium finishes including custom oak cabinetry, state-of-the-art smart home technology, and underfloor heating throughout. This is a rare opportunity to acquire a turnkey residence in a highly sought-after location."
    ],
    features: ["South-facing orientation", "Panoramic sea views", "Custom plunge pool", "Underfloor heating", "Smart home system"],
    amenities: ["24/7 Security", "Communal swimming pool", "Underground parking", "Storage room", "Close to golf courses"],
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop"
    ]
  },
  { id: "brisas-12", name: "Brisas 12", price: "€5,950,000", category: "Villa", beds: 5, baths: 5, area: "648 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" },
  { id: "casa-k", name: "Casa K", price: "€8,250,000", category: "Villa", beds: 9, baths: 9, area: "1.177 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop" },
  { id: "casa-de-los-suenos", name: "Casa de los Sueños", price: "€13,800,000", category: "Villa", beds: 5, baths: 5, area: "1.265 sqm", status: "For Sale/For Rent", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop" },
  { id: "emerald-view", name: "Emerald View Club Residences", price: "Start from €745,000", category: "Apartment, Villa", beds: "2-3", baths: "2", area: "102,53 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" },
  { id: "casa-orquidea", name: "Casa Orquidea", price: "€19,880,000", category: "Villa", beds: 8, baths: 9, area: "1.696 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=800&auto=format&fit=crop" },
  { id: "nara-marbella", name: "NARA Marbella", price: "Start from €1,890,000", category: "Villa", beds: "4 - 5", baths: "4", area: "446 - 504 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?q=80&w=800&auto=format&fit=crop" },
  { id: "villas-sirocco", name: "Villas Sirocco", price: "Start from €3,400,000", category: "Villa", beds: 4, baths: 4, area: "454.90 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop" },
  { id: "las-palmeras", name: "Las Palmeras", price: "€8,300,000", category: "Villa", beds: 5, baths: 8, area: "816 sqm", status: "For Sale", featured: true, image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop" },
  { id: "villa-aura", name: "Villa Aura", price: "€3,250,000", category: "Villa", beds: 4, baths: 4, area: "328 sqm", status: "For Sale", featured: true, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
  { id: "mirador-4", name: "Mirador 4", price: "€1,950,000", category: "Townhouse", beds: 4, baths: 4, area: "198 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" },
  { id: "la-trinidad", name: "La Trinidad Luxe", price: "€5,425,000", category: "Apartment", beds: 4, baths: 4, area: "345 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" },
  { id: "belvederes-12", name: "Belvederes 12", price: "€2,750,000", category: "Duplex Penthouse", beds: 3, baths: 3, area: "183 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
  { id: "la-perla", name: "La Perla Business Center", price: "€6,500,000", category: "Business Center", area: "967 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop" },
  { id: "villa-ivory", name: "Villa Ivory", price: "€7,800,000", category: "Villa", area: "708 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop" },
  { id: "blume-marein", name: "BLUME by Marein", price: "Start from €4,290,000", category: "Villa", beds: 4, baths: 4, area: "762.60 - 843.86 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop" },
  { id: "villa-la-serena", name: "Villa La Serena", price: "€3,895,000", category: "Villa", beds: 5, baths: 5, area: "317 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop" },
  { id: "villas-lomas", name: "Villas Lomas", price: "Start from €6,400,000", category: "Villa", beds: 6, baths: 6, area: "647 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" },
  { id: "banus-1", name: "Banus 1", price: "€2,950,000", category: "Apartment", beds: 3, baths: 3, area: "121 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop" },
  { id: "nagueles-19", name: "Nagüeles 19", price: "€4,490,000", category: "Villa", beds: 5, baths: 5, area: "397 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop" },
  { id: "auriga-1", name: "Auriga 1", price: "€3,550,000", category: "Villa", beds: 4, baths: 4, status: "For Sale", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop" },
  { id: "orion-53", name: "Orion 53", price: "€4,995,000", category: "Villa", beds: 5, baths: 5, area: "303 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=800&auto=format&fit=crop" },
  { id: "cerquilla-59", name: "Cerquilla 59", price: "€7,950,000", category: "Villa", beds: 7, baths: 6, area: "2.548 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?q=80&w=800&auto=format&fit=crop" },
  { id: "essence-i", name: "Essence Residence Phase I", price: "Start from €820,000", category: "Apartment, Penthouse", beds: 2, baths: 2, area: "104,01 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop" },
  { id: "amaris", name: "Amaris Villas", price: "Starts from €1,520,000", category: "Villa", beds: "3 - 4", area: "259 - 397 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop" },
  { id: "essence-ii", name: "Essence Residence Phase II", price: "Start from €815,000", category: "Apartment, Penthouse", status: "For Sale", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
  { id: "altos-puente", name: "Altos de Puente Romano 13", price: "€2,150,000", category: "Townhouse", beds: 4, baths: 3, area: "217 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" },
  { id: "villa-luma", name: "Villa Luma", price: "€4,950,000", category: "Villa", beds: 5, baths: 5, area: "436 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" },
  { id: "vesta-mare", name: "Vesta Mare", price: "Start from €435,000", category: "Apartment, Penthouse", beds: "1 - 4", area: "72 - 187 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
  { id: "nubay", name: "Nubay", price: "Start from €990,000", category: "Apartment, Bungalow, Penthouse", beds: "2 - 4", baths: 3, status: "For Sale", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop" },
  { id: "imagine-marein", name: "Imagine by Marein", price: "Start from €2,400,000", category: "Villa", beds: 4, area: "581.72 sqm", status: "For Sale", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop" },
  { id: "the-hills", name: "The Hills 1", price: "€13,800,000", category: "Villa", beds: 6, baths: 6, area: "738 sqm", status: "For Sale", featured: true, image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop" }
];
