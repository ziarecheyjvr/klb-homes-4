export type Property = {
  id: string;
  name: string;
  location: string;
  price: string;
  beds?: number;
  baths?: number;
  area: string;
  category: "Villa" | "Apartment" | "Penthouse" | "Estate" | "Residence";
  image: string;
  gallery?: string[];
};

// Real KLB Homes listings
export const properties: Property[] = [
  {
    id: "villa-ivory",
    name: "Villa Ivory",
    location: "Marbella Golden Mile",
    price: "€7,800,000",
    area: "708 m²",
    category: "Villa",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "oasis-club-10",
    name: "Oasis Club 10",
    location: "Marbella Golden Mile",
    price: "€5,995,000",
    beds: 3,
    baths: 3,
    area: "194 m²",
    category: "Villa",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "villa-aura",
    name: "Villa Aura",
    location: "Las Brisas, Nueva Andalucía",
    price: "€3,250,000",
    beds: 4,
    baths: 4,
    area: "328 m²",
    category: "Villa",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "salvia-ii",
    name: "Salvia II",
    location: "Marbella",
    price: "From €890,000",
    area: "2–4 bed · 2–3 bath",
    category: "Apartment",
    image:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "residence-cliffside",
    name: "Cliffside Residence",
    location: "Estepona, Costa del Sol",
    price: "€3,400,000",
    beds: 5,
    baths: 6,
    area: "890 m²",
    category: "Residence",
    image:
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "penthouse-banus",
    name: "Meridian Sky Penthouse",
    location: "Puerto Banús, Marbella",
    price: "€6,200,000",
    beds: 4,
    baths: 4,
    area: "412 m²",
    category: "Penthouse",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "estate-zagaleta",
    name: "La Zagaleta Estate",
    location: "Benahavís, Marbella",
    price: "€12,500,000",
    beds: 8,
    baths: 9,
    area: "1,570 m²",
    category: "Estate",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "villa-sotogrande",
    name: "Villa Serenissima",
    location: "Sotogrande, Costa del Sol",
    price: "€5,420,000",
    beds: 6,
    baths: 6,
    area: "690 m²",
    category: "Villa",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "villa-amara",
    name: "Amara Villa",
    location: "Nueva Andalucía, Marbella",
    price: "€4,150,000",
    beds: 5,
    baths: 5,
    area: "470 m²",
    category: "Villa",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "residence-sierra-blanca",
    name: "Sierra Blanca Residence",
    location: "Sierra Blanca, Marbella",
    price: "€8,600,000",
    beds: 6,
    baths: 7,
    area: "780 m²",
    category: "Residence",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "penthouse-puente-romano",
    name: "Puente Romano Penthouse",
    location: "Puente Romano, Marbella",
    price: "€9,750,000",
    beds: 4,
    baths: 4,
    area: "365 m²",
    category: "Penthouse",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
  },
];

const additionalFeatured: Property[] = [
  {
    id: "villa-encanto",
    name: "Villa Encanto",
    location: "Nueva Andalucía, Marbella",
    price: "€4,750,000",
    beds: 5,
    baths: 5,
    area: "512 m²",
    category: "Villa",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "ocean-terrace-penthouse",
    name: "Ocean Terrace Penthouse",
    location: "Puerto Banús, Marbella",
    price: "€8,900,000",
    beds: 4,
    baths: 4,
    area: "380 m²",
    category: "Penthouse",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "finca-del-sol",
    name: "Finca Del Sol",
    location: "Benahavís, Marbella",
    price: "€6,300,000",
    beds: 6,
    baths: 7,
    area: "940 m²",
    category: "Estate",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "casa-marea",
    name: "Casa Marea",
    location: "Marbella Golden Mile",
    price: "€5,100,000",
    beds: 4,
    baths: 5,
    area: "460 m²",
    category: "Villa",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
  },
];

export const featured = [properties[0], properties[1], properties[2], ...additionalFeatured];
