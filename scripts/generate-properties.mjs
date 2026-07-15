import fs from 'fs';
import path from 'path';

const markdownPath = path.join(process.cwd(), 'public/assets/KLB Homes/Property-Details.md');
const propertiesDir = path.join(process.cwd(), 'public/assets/KLB Homes/Properties');
const outputPath = path.join(process.cwd(), 'src/data/buyProperties.ts');

const content = fs.readFileSync(markdownPath, 'utf-8');

// Split by horizontal rules
const blocks = content.split(/\n---\n/);
blocks.shift(); // Remove the header block

const properties = [];

for (const block of blocks) {
  if (!block.trim()) continue;

  const extract = (regex) => {
    const match = block.match(regex);
    return match ? match[1].trim() : null;
  };

  const name = extract(/##\s+(.*)/);
  let slug = extract(/- \*\*Slug \/ Image folder:\*\*\s+`?([^`\n\r]+)`?/);
  if (slug && slug.includes('`')) slug = slug.replace(/`/g, '');
  const price = extract(/- \*\*Price:\*\*\s+(.*)/);
  const bedrooms = extract(/- \*\*Bedrooms:\*\*\s+(.*)/);
  const bathrooms = extract(/- \*\*Bathrooms:\*\*\s+(.*)/);
  const status = extract(/- \*\*Status:\*\*\s+(.*)/);
  const category = extract(/- \*\*Type:\*\*\s+(.*)/);
  let location = extract(/- \*\*Location:\*\*\s+(.*)/);
  const video = extract(/- \*\*Video:\*\*\s+(.*)/);
  const featuresRaw = extract(/- \*\*Features:\*\*\s+(.*)/);

  // Extract description
  const descIndex = block.indexOf('**Description:**');
  let description = [];
  if (descIndex !== -1) {
    const rawDesc = block.slice(descIndex + '**Description:**'.length).trim();
    description = rawDesc.split('\n\n').map(p => p.trim()).filter(p => p);
  }

  // Parse features
  const features = featuresRaw && featuresRaw !== 'None' ? featuresRaw.split(',').map(f => f.trim()) : [];

  // Parse location to simplify (e.g. "Manilva, Costa Del Sol, Manilva, Andalusia, Spain" -> "Manilva")
  if (location && location.includes(',')) {
    location = location.split(',')[0].trim();
  }

  let videoUrl = video !== 'None' && video ? video : undefined;
  if (videoUrl && (videoUrl.includes('youtu.be') || videoUrl.includes('youtube.com/watch'))) {
    videoUrl = videoUrl.replace('youtu.be/', 'youtube.com/embed/').replace('youtube.com/watch?v=', 'youtube.com/embed/');
  }

  let beds = bedrooms && bedrooms !== 'N/A' ? bedrooms : undefined;
  let baths = bathrooms && bathrooms !== 'N/A' ? bathrooms : undefined;
  if (beds && !isNaN(Number(beds))) beds = Number(beds);
  if (baths && !isNaN(Number(baths))) baths = Number(baths);

  const propFolder = path.join(propertiesDir, slug);
  let image = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"; // fallback
  let gallery = [];

  if (fs.existsSync(propFolder)) {
    const files = fs.readdirSync(propFolder).filter(f => f.match(/\.(webp|jpg|jpeg|png)$/i));
    files.sort();
    if (files.length > 0) {
      const publicPaths = files.map(f => `/assets/KLB Homes/Properties/${slug}/${f}`);
      image = publicPaths[0]; // first image as highlight
      gallery = publicPaths; // all images in gallery
    }
  }

  // We are missing area? I will add it as empty or undefined since it's missing in markdown
  properties.push({
    id: slug,
    name,
    price: price || 'Price on Application',
    category: category || 'Villa',
    beds,
    baths,
    status: status || 'For Sale',
    image,
    location,
    description,
    features,
    gallery,
    videoUrl
  });
}

const featuredSlugs = ['salvia-ii', 'imagine-by-marein', 'nara-marbella', 'blume-by-marein', 'villas-sirocco', 'casa-orquidea'];

properties.forEach(p => {
  if (featuredSlugs.includes(p.id)) p.featured = true;
});

const tsCode = `export type BuyProperty = {
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

export const allListings: BuyProperty[] = ${JSON.stringify(properties, null, 2)};

export const featured = allListings.filter(p => p.featured);
`;

fs.writeFileSync(outputPath, tsCode, 'utf-8');
console.log('Successfully generated buyProperties.ts with', properties.length, 'properties.');
