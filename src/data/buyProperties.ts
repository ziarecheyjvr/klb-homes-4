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
    "id": "salvia-ii",
    "name": "Salvia II",
    "price": "Start from €890,000",
    "category": "Apartment",
    "beds": "2 - 4",
    "baths": "2 - 3",
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/salvia-ii/01-2_SALVIA-2-ABU-NVOGA-Developments-General-scaled-1.webp",
    "location": "Marbella",
    "description": [
      "We present you with a new standard in lifestyle in our unbeatable new project, carefully designed to bring you the best in comfort, functionality and location. At SALVIA II, we have fused the practical with the functional to offer you a unique living experience. SALVIA II is strategically located in the heart of San Pedro ensuring that everything you need is just a few steps away. From supermarkets, stores to pharmacies and medical services, as well as one of the best paddle tennis clubs in the area, golf courses, restaurants and beach clubs.",
      "The apartments will be built with top materials and qualities throughout, open plan living areas illuminated. Ranging from 2 to 4 bedrooms, apartments and penthouses, with spacious interiors of up to 195 m2 and fabulous terraces of up to 189 m2, each apartment is a testament to contemporary design and elegance. All the properties will have at least one parking space and store room included in the price and all the apartments are customizable according to the buyer’s taste. Our communal areas are no less impressive, immerse yourself in state-of-the-art facilities such as a dedicated coworking space for the modern professional, EV charging points for the environmentally conscious, indoor heated swimming pool, gym and spa. The complex will be completely gated, with security entrance and control gate.In short, SALVIA II stands out as the best project in the area due to its unique and avant-garde design that combines aesthetics and functionality in an exceptional way. Join us and experience a new level of unbeatable living!"
    ],
    "features": [
      "2 - 3 Bathrooms",
      "2 - 4 Bedrooms",
      "Gym",
      "Spa",
      "Swimming Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/salvia-ii/01-2_SALVIA-2-ABU-NVOGA-Developments-General-scaled-1.webp",
      "/assets/KLB Homes/Properties/salvia-ii/02-1_SALVIA-2-ABU-NVOGA-Developments-Entrance.webp",
      "/assets/KLB Homes/Properties/salvia-ii/03-2_SALVIA-2-ABU-NVOGA-Developments-General-scaled-1.webp",
      "/assets/KLB Homes/Properties/salvia-ii/04-9_SALVIA-2-ABU-NVOGA-Developments-SPA-scaled-1.webp",
      "/assets/KLB Homes/Properties/salvia-ii/05-11_SALVIA-2-ABU-NVOGA-Developments-Gym-scaled-1.webp",
      "/assets/KLB Homes/Properties/salvia-ii/06-12_05-ATICO-scaled-1.webp",
      "/assets/KLB Homes/Properties/salvia-ii/07-13_TerrazaAtardecer-scaled-1.webp",
      "/assets/KLB Homes/Properties/salvia-ii/08-14_Balcon-scaled-1.webp",
      "/assets/KLB Homes/Properties/salvia-ii/09-15_Salon01-scaled-1.webp",
      "/assets/KLB Homes/Properties/salvia-ii/10-16_salon02-scaled-1.webp",
      "/assets/KLB Homes/Properties/salvia-ii/11-17_SALVIA-2-ABU-NVOGA-Developments-Master-Bedroom-scaled-1.webp"
    ],
    "featured": true
  },
  {
    "id": "nubay",
    "name": "Nubay",
    "price": "Start from €990,000",
    "category": "Apartment, Bungalow, Penthouse",
    "beds": "2 - 4",
    "baths": 3,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/nubay/01-14.-NUBAY-Costa-del-Sol-Manilva-NVOGA-Developments-Villa-scaled-1.webp",
    "location": "Manilva",
    "description": [
      "NUBAY is a complex of 2 and 3 bedroom apartments, 3 and 4 bedroom penthouses and 5 large bungalows with 3 bedrooms 3 bathrooms plus a guest cloakroom. located on the first line of the beach.",
      "All homes will have spectacular sea views in an extraordinary location. The project combines modern design architecture with perfectly studied landscaping that surrounds the building with its large gardens and common leisure areas that allow the client to enjoy a unique concept in the first line of the beach.",
      "The location of Nubay is simply unrivalled, on the shores of the Mediterranean, close to Estepona known as the ‘jewel of the Costa del Sol’, and Sotogrande, famous for its marina and polo fields. This enclave allows you to enjoy the serenity of the sea and the tranquillity of an uncrowded environment.\nWith proximity to unique destinations such as Marbella, Gibraltar and Tarifa, and less than an hour’s drive from the airports an hour from the airports of Malaga, Gibraltar and Jerez."
    ],
    "features": [
      "2 - 4 Bedrooms"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/nubay/01-14.-NUBAY-Costa-del-Sol-Manilva-NVOGA-Developments-Villa-scaled-1.webp",
      "/assets/KLB Homes/Properties/nubay/02-1.-NUBAY-Costa-del-Sol-Manilva-NVOGA-Developments-Green-Area-light-scaled-1.webp",
      "/assets/KLB Homes/Properties/nubay/03-3.-NUBAY-Costa-del-Sol-Manilva-NVOGA-Developments-Pool-Bloque-scaled-1.webp",
      "/assets/KLB Homes/Properties/nubay/04-4.-NUBAY-Costa-del-Sol-Manilva-NVOGA-Developments-Pool-scaled-1.webp",
      "/assets/KLB Homes/Properties/nubay/05-5.-NUBAY-Costa-del-Sol-Manilva-NVOGA-Developments-Pool-Views-scaled-1.webp",
      "/assets/KLB Homes/Properties/nubay/06-8.-NUBAY-Frontline-Beach-Hercesa-NVOGA-Developments-comun-terrace-scaled-1.webp",
      "/assets/KLB Homes/Properties/nubay/07-9.-NUBAY-Costa-del-Sol-Manilva-NVOGA-Developments-Gym-scaled-1.webp",
      "/assets/KLB Homes/Properties/nubay/08-10.-Nubay_Coworking01_hd3.0000-scaled-1.webp",
      "/assets/KLB Homes/Properties/nubay/09-11.-Nubay_Coworking02_hd3.0000-scaled-1.webp",
      "/assets/KLB Homes/Properties/nubay/10-12.-Nubay_hall02_hd2.0000-scaled-1.webp",
      "/assets/KLB Homes/Properties/nubay/11-14.-NUBAY-Costa-del-Sol-Manilva-NVOGA-Developments-Villa-scaled-1.webp",
      "/assets/KLB Homes/Properties/nubay/12-15.-NUBAY-Costa-del-Sol-Manilva-NVOGA-Developments-Living-Room-scaled-1.webp",
      "/assets/KLB Homes/Properties/nubay/13-16.-NUBAY-Costa-del-Sol-Manilva-NVOGA-Developments-Villa-Views-scaled-1.webp",
      "/assets/KLB Homes/Properties/nubay/14-17.NUBAY-Costa-del-Sol-Manilva-NVOGA-Developments-Bedroom-1-scaled-1.webp",
      "/assets/KLB Homes/Properties/nubay/15-19.-NUBAY-Frontline-Beach-Hercesa-NVOGA-Developments-kitchen-scaled-1.webp",
      "/assets/KLB Homes/Properties/nubay/16-21.-NUBAY-Frontline-Beach-Hercesa-NVOGA-Developments-Master-bedroom-scaled-1.webp",
      "/assets/KLB Homes/Properties/nubay/17-24.-Nubay_Solarium02_hd.0000-scaled-1.webp",
      "/assets/KLB Homes/Properties/nubay/18-25.-Nubay_Solarium03_HD.0000-scaled-1.webp",
      "/assets/KLB Homes/Properties/nubay/19-29.-NUBAY-Frontline-Beach-Hercesa-NVOGA-Developments-terrace-below-scaled-1.webp"
    ]
  },
  {
    "id": "imagine-by-marein",
    "name": "Imagine by Marein",
    "price": "Start from €2,400,000",
    "category": "Villa",
    "beds": 4,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/imagine-by-marein/01-Fachada-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Facade-Night-1-scaled-1.webp",
    "location": "New Golden Mile",
    "description": [
      "Welcome to a private enclave of 15 exclusive villas, located in the prestigious Bel Air area of Estepona. An exceptional opportunity to embrace the luxury lifestyle of the Costa del Sol.",
      "This gated community offers southeast-facing villas, each meticulously designed across two spacious levels, with the option to add a basement and solarium to further personalize your dream home. With high-end finishes, private swimming pools, and lush private gardens, these villas are a sanctuary of style, comfort, and elegance.",
      "Enjoy breathtaking sea views from the upper floors, and unwind in spaces bathed in natural light, crafted for both serene living and sophisticated entertaining.",
      "Each villa includes private parking for two vehicles, complete with a dedicated electric car charging station, perfectly aligned with modern, eco-conscious living.",
      "Set in an unbeatable location, this refined development is surrounded by some of the Costa del Sol’s most elite destinations.\nJust minutes away is the iconic Anantara Villa Padierna Palace Hotel & Golf Resort, offering world-class spa treatments, championship golf, and fine dining.\nAlso nearby is the vibrant METT Hotel & Beach Resort, known for its stylish energy, four international restaurants, and a fun, upscale beach club.\nPerfect for relaxed days and lively nights by the sea.",
      "Within walking distance, you’ll find shops, restaurants, schools, and golden beaches. The area is also surrounded by top-tier golf courses, 5-star hotels, and exclusive beach clubs, adding to the allure of the lifestyle on offer.",
      "With direct and easy access to the A7 highway, you’re perfectly connected to Marbella, Puerto Banús, and Malaga Airport.",
      "In this prestigious development, every detail has been thoughtfully considered to offer you a life of ease, elegance, and elevated living on the Costa del Sol."
    ],
    "features": [
      "2 Parking Slots",
      "4 Bathrooms",
      "4 Bedrooms",
      "Indoor Gym",
      "Private Garden",
      "Swimming Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/imagine-by-marein/01-Fachada-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Facade-Night-1-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/02-Bano-principal-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Bathroom-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/03-Cocina-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Comedor-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/04-Cocina-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Comedor-Views-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/05-Cocina-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Kitchen-3-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/06-Dormitorio-principal-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Master-Bedroom-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/07-Exterior-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Exterior-Area-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/08-Exterior-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Exterior-Kitchen-Area-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/09-Exterior-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Exterior-Kitchen-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/10-Fachada-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Facade-Night-1-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/11-Fachada-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Facade-Pool-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/12-Fachada-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Kitchen-Pool-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/13-Salon-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Kitchen-Living-Room-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/14-Salon-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Living-Room-Views-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/15-Sotano-Dormitorio-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Basement-Bedroom-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/16-Sotano-Gym-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Basement-Billard-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/17-Sotano-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Basement-Gym-Wine-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/18-Sotano-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Kitchen-Area-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/19-Sotano-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Kitchen-scaled-1.webp",
      "/assets/KLB Homes/Properties/imagine-by-marein/20-Vestidor-imagine-MAREIN-New-Golden-Mile-Estepona-Independent-Villa-NVOGA-Marbella-Realty-Vestidor-1-scaled-1.webp"
    ],
    "featured": true
  },
  {
    "id": "zew-elviria",
    "name": "Zew Elviria",
    "price": "Start from €740,000",
    "category": "Duplex Penthouse, Villa",
    "beds": "2 - 4",
    "baths": "2 - 5",
    "status": "N/A",
    "image": "/assets/KLB Homes/Properties/zew-elviria/01-Edificio_Lateral_ZEW-scaled-1.webp",
    "location": "Marbella",
    "description": [
      "Zew Elviria West is an exclusive residential complex comprised of 88 duplex apartments that combine contemporary elegance with the comfort of living in the heart of nature. The homes offer 2 and 3-bedroom configurations, and some 3-bedroom units have the possibility of incorporating an additional fourth bedroom, ideal as an office, study or guest space.",
      "Located at the top of Elviria Hill, one of the most sought-after areas of Marbella East, ZEW is distinguished by its serene and natural setting, surrounded by lush pine forests and open views of the mountains. This enclave is designed for those who desire a quiet life, with a Zen feeling, in harmony with the environment and away from the hustle and bustle, without sacrificing modern comforts.",
      "ZEW’s architecture reflects a minimalist and sophisticated style, perfectly integrated with its natural surroundings. The community will offer ample green areas, walking paths, common spaces for relaxation and wellness, 4 community pools, gym and a co-working area, designed for those who value flexibility and balance between work and rest.",
      "The location of ZEW is exceptional. Although surrounded by nature, the complex is only:",
      "5 minutes drive from the supermarkets, restaurants and stores of Elviria\n10 minutes to the best beaches of Marbella East\n15 minutes to Marbella center\n30 minutes from Malaga International Airport\nSurrounded by several prestigious golf courses such as Santa Maria Golf, Rio Real Golf, Santa Clara Golf and Marbella Golf Country Club.",
      "This strategic location allows residents to enjoy the best of both worlds: the peace of nature and the proximity to the most emblematic services, leisure and destinations of the Costa del Sol.",
      "ZEW [Zen Elviria West] is not just a place to live. It is an invitation to reconnect with oneself, with nature and with a more conscious, modern and balanced lifestyle."
    ],
    "features": [
      "2 - 4 Bedrooms",
      "2 - 5 Bathrooms",
      "Co-Working",
      "Garden",
      "Gym",
      "Spa",
      "Swimming Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/zew-elviria/01-Edificio_Lateral_ZEW-scaled-1.webp",
      "/assets/KLB Homes/Properties/zew-elviria/02-Atardecer_Jardin-scaled-1.webp",
      "/assets/KLB Homes/Properties/zew-elviria/03-Atico_Solarium_Esquina-scaled-1.webp",
      "/assets/KLB Homes/Properties/zew-elviria/04-Co-working_ZEW-scaled-1.webp",
      "/assets/KLB Homes/Properties/zew-elviria/05-Cocina-scaled-1.webp",
      "/assets/KLB Homes/Properties/zew-elviria/06-Dormitorio_ZEW-scaled-1.webp",
      "/assets/KLB Homes/Properties/zew-elviria/07-Edificio_Lateral_ZEW-scaled-1.webp",
      "/assets/KLB Homes/Properties/zew-elviria/08-Exterior_Chill_out-scaled-1.webp",
      "/assets/KLB Homes/Properties/zew-elviria/09-GYM_ZEW-scaled-1.webp",
      "/assets/KLB Homes/Properties/zew-elviria/10-Jardin_frontal-scaled-1.webp",
      "/assets/KLB Homes/Properties/zew-elviria/11-Oficina_Jardin-scaled-1.webp",
      "/assets/KLB Homes/Properties/zew-elviria/12-Piscina_Principal_ZEW-scaled-1.webp",
      "/assets/KLB Homes/Properties/zew-elviria/13-Sala_estar_Jardin-scaled-1.webp",
      "/assets/KLB Homes/Properties/zew-elviria/14-Salon__-scaled-1.webp",
      "/assets/KLB Homes/Properties/zew-elviria/15-Solarium_esquina-scaled-1.webp",
      "/assets/KLB Homes/Properties/zew-elviria/16-SPA_ZEW-scaled-1.webp"
    ]
  },
  {
    "id": "vesta-mare",
    "name": "Vesta Mare",
    "price": "Start from €435,000",
    "category": "Apartment, Penthouse",
    "beds": "1 - 4",
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/vesta-mare/01-20251101-Manilva-Project-3-V06-1-scaled-1.webp",
    "location": "Málaga",
    "description": [
      "Imagine waking up each morning with the sun rising over the Mediterranean, enjoying views that stretch endlessly from your home. Welcome to Vesta Mare, the new development by Grupo ABU in prime beachfront Manilva, a project where history and Mediterranean lifestyle merge to create something truly unique.",
      "Located next to the Duquesa Castle and just minutes from Duquesa Marina, Vesta Mare enjoys a privileged setting, where historical heritage meets a vibrant offer of leisure, sports, gastronomy, and entertainment. This location combines the tranquility of a coastal town with the vitality of the Costa del Sol, an area in growth with very few new-build opportunities right on the beach.",
      "The development will feature three buildings and 145 unique residences, with a carefully curated selection of modern homes designed to suit every lifestyle: 1, 2, 3 and 4-bedroom residences. Each home combines sustainable architecture, premium finishes, and first-class amenities, creating the perfect balance of comfort, style, and exclusivity.",
      "Shared amenities include a communal pool, landscaped gardens, central plaza, and private parking, creating a safe, elegant, and functional environment for the whole family.",
      "Every residence at Vesta Mare has been designed to offer the perfect combination of elegance, comfort, lifestyle and design. The homes feature spacious open-plan living and dining areas that maximize natural light and seamlessly connect to the terraces. Designer kitchens allow for both style and functionality, while minimalist, elegant bathrooms complement the avant-garde aesthetic.",
      "The common areas have been thoughtfully designed to enhance well-being, foster community, and celebrate the natural beauty of the Costa del Sol. Residents will enjoy an infinity-edge swimming pool overlooking the Mediterranean, a children’s pool in a safe, separate area, and a fully equipped indoor gym. A multipurpose room provides space for co-working, meetings, or events, while underground parking with assigned spaces and private storage rooms included with each unit ensure comfort and convenience. The on-site Interpretive Museum, open to residents and the public, adds a unique cultural dimension to everyday life.\nVesta Mare by ABU is not just a residence—it’s a lifestyle, a cultural experience, and a front-row seat to one of the Costa del Sol’s most exclusive locations."
    ],
    "features": [
      "1 - 2 Bathrooms",
      "1 - 4 Bedroom",
      "Co-Working",
      "Communal Garden",
      "Indoor Gym",
      "Parking",
      "Swimming Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/vesta-mare/01-20251101-Manilva-Project-3-V06-1-scaled-1.webp",
      "/assets/KLB Homes/Properties/vesta-mare/02-20250808-Manilva-Project-_Aerial-1-scaled-1.webp",
      "/assets/KLB Homes/Properties/vesta-mare/03-20250808-Manilva-Project-_eye-level-2-scaled-1.webp",
      "/assets/KLB Homes/Properties/vesta-mare/04-20251101-Manilva-Project-3-V03-1-scaled-1.webp",
      "/assets/KLB Homes/Properties/vesta-mare/05-20251101-Manilva-Project-3-V05-1-scaled-1.webp",
      "/assets/KLB Homes/Properties/vesta-mare/06-20251101-Manilva-Project-3-V06-1-scaled-1.webp",
      "/assets/KLB Homes/Properties/vesta-mare/07-20251101-Manilva-Project-3-V08-1-scaled-1.webp",
      "/assets/KLB Homes/Properties/vesta-mare/08-20251101-Manilva-Project-3-V09-1-scaled-1.webp",
      "/assets/KLB Homes/Properties/vesta-mare/09-20251101-Manilva-Project-3-V10-1-scaled-1.webp",
      "/assets/KLB Homes/Properties/vesta-mare/10-20251101-Manilva-Project-3-V073-1-scaled-1.webp",
      "/assets/KLB Homes/Properties/vesta-mare/11-20251110-Manilva-Project-3-V04_rev-1-scaled-1.webp"
    ]
  },
  {
    "id": "nara-marbella",
    "name": "NARA Marbella",
    "price": "Start from €1,890,000",
    "category": "Villa",
    "beds": "4 - 5",
    "baths": 4,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/nara-marbella/01-nara-cam-01-v04b-r5k.webp",
    "location": "Marbella",
    "description": [
      "This exclusive development in Marbella consists of a boutique collection of 8 contemporary villas, located in the quiet residential area of Valdeolletas, just five minutes from Marbella town centre and La Cañada shopping centre. Of the eight villas, one has already been completed and is ready to move into, two have already been sold, and the remaining five villas are currently under construction, offering a unique opportunity to acquire a modern home in a privileged location that combines privacy, comfort and proximity to all amenities. It is an ideal choice for families seeking quality of life on the Costa del Sol.",
      "Each villa will be built with top-quality materials from Porcelanosa and will feature a modern and functional design distributed over three floors plus a spectacular solarium. The plots will offer elegant outdoor areas with private swimming pools and waterfalls, perfect for enjoying the Mediterranean climate all year round.",
      "The main floor will include a bright living-dining room with an open-plan kitchen, a guest toilet and access to a Thyssenkrupp lift connecting all levels of the property. The first floor, finished with natural wood flooring, will offer three spacious and sunny double bedrooms. The master bedroom will feature a dressing room and en-suite bathroom, while the other two bedrooms will share a full bathroom.",
      "The lower level will provide a versatile space with a large multipurpose room ideal as a cinema, gym or games room, as well as an additional bedroom with bathroom. This floor will also give access to a private garage with space for two cars.",
      "The solarium, designed as a unique leisure area, will include a toilet, pre-installation for an outdoor kitchen and spectacular panoramic views of the sea and mountains.",
      "Among the features are large windows, underfloor heating, air conditioning, home automation system and luxury finishes throughout. The villas will also offer spacious terraces that enhance natural light and create a sense of openness, making them perfect family homes.",
      "The location is excellent and unbeatable: close to schools such as CEIP Juan Ramón Jiménez, CEIP Valdeolletas, Colegio María Auxiliadora II and IES Guadalpín, as well as nurseries, supermarkets including Mercadona, DIA and Supercor, pharmacies, medical and veterinary clinics. Nearby you will also find El Mirador Padel Club, Monte Paraíso Golf, gyms and Marbella’s beaches. The area is well connected by public transport and offers quick access to the AP-7 motorway, providing easy communication with the entire Costa del Sol."
    ],
    "features": [
      "4 Bathrooms",
      "4 Bedrooms",
      "5 Bedrooms",
      "Swimming Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/nara-marbella/01-nara-cam-01-v04b-r5k.webp",
      "/assets/KLB Homes/Properties/nara-marbella/02-NVOGA-HOMES-Marbella-Realty-Nara-Marbella-Valdeolletas-3.webp",
      "/assets/KLB Homes/Properties/nara-marbella/03-NVOGA-HOMES-Marbella-Realty-Nara-Marbella-Valdeolletas-4.webp",
      "/assets/KLB Homes/Properties/nara-marbella/04-NVOGA-HOMES-Marbella-Realty-Nara-Marbella-Valdeolletas-5-1.webp",
      "/assets/KLB Homes/Properties/nara-marbella/05-NVOGA-HOMES-Marbella-Realty-Nara-Marbella-Valdeolletas-6.webp",
      "/assets/KLB Homes/Properties/nara-marbella/06-NVOGA-HOMES-Marbella-Realty-Nara-Marbella-Valdeolletas-8.webp",
      "/assets/KLB Homes/Properties/nara-marbella/07-NVOGA-HOMES-Marbella-Realty-Nara-Marbella-Valdeolletas-10.webp",
      "/assets/KLB Homes/Properties/nara-marbella/08-NVOGA-HOMES-Marbella-Realty-Nara-Marbella-Valdeolletas-11.webp",
      "/assets/KLB Homes/Properties/nara-marbella/09-NVOGA-HOMES-Marbella-Realty-Nara-Marbella-Valdeolletas-12.webp",
      "/assets/KLB Homes/Properties/nara-marbella/10-NVOGA-HOMES-Marbella-Realty-Nara-Marbella-Valdeolletas-13.webp",
      "/assets/KLB Homes/Properties/nara-marbella/11-nara-cam-01-v04b-r5k.webp",
      "/assets/KLB Homes/Properties/nara-marbella/12-nara-cam-02-terraza-v04-r5k.webp"
    ],
    "featured": true
  },
  {
    "id": "milabeka-boutique-residences",
    "name": "Milabeka Boutique Residences",
    "price": "Start from €560,000",
    "category": "Apartment",
    "beds": "2 - 3",
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/milabeka-boutique-residences/01-MILABEKA_NVOGA-DEVELOPMENTS_MALAGA_Calle_HD-1-scaled-1.webp",
    "location": "Málaga",
    "description": [
      "Milabeka presents an exclusive boutique development of just 10 contemporary residences.",
      "Located on the historic Milagrosa Street in Málaga, next to Parque del Oeste and within walking distance of all services, restaurants and leisure areas, this development offers the perfect balance between urban living and coastal lifestyle, just 200 metres from the beach and with pleasant open views.\nThe project offers 2 and 3-bedroom homes, designed with modern architecture, functional layouts and high-quality finishes, ensuring comfort and a refined lifestyle.",
      "The development stands out for its carefully designed communal areas, including a spectacular rooftop “Sky & Sea” with swimming pool and chill-out area, ideal for enjoying Málaga’s climate all year round. In addition, it features semi-automated parking, providing maximum convenience and efficiency.",
      "A unique opportunity as a primary residence, second home or investment in one of Málaga’s most promising areas."
    ],
    "features": [
      "2 bedrooms",
      "3 Bedrooms",
      "Chill-Out Lounge",
      "Infinity Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/milabeka-boutique-residences/01-MILABEKA_NVOGA-DEVELOPMENTS_MALAGA_Calle_HD-1-scaled-1.webp",
      "/assets/KLB Homes/Properties/milabeka-boutique-residences/02-DJI_20241112152056_0374_D-HDRtorres-scaled-1.webp",
      "/assets/KLB Homes/Properties/milabeka-boutique-residences/03-MILABEKA_NVOGA-DEVELOPMENTS_MALAGA_Calle_HD-1-scaled-1.webp",
      "/assets/KLB Homes/Properties/milabeka-boutique-residences/04-MILABEKA_NVOGA-DEVELOPMENTS_MALAGA_Dormitorio_HD-scaled-1.webp",
      "/assets/KLB Homes/Properties/milabeka-boutique-residences/05-MILABEKA_NVOGA-DEVELOPMENTS_MALAGA_Dormitorio.webp",
      "/assets/KLB Homes/Properties/milabeka-boutique-residences/06-MILABEKA_NVOGA-DEVELOPMENTS_MALAGA_INTEGRACION-2_HD-scaled-1.webp",
      "/assets/KLB Homes/Properties/milabeka-boutique-residences/07-MILABEKA_NVOGA-DEVELOPMENTS_MALAGA_RoofTop_noche_HD-scaled-1.webp",
      "/assets/KLB Homes/Properties/milabeka-boutique-residences/08-MILABEKA_NVOGA-DEVELOPMENTS_MALAGA_Salon_HD-scaled-1.webp",
      "/assets/KLB Homes/Properties/milabeka-boutique-residences/09-MILABEKA_NVOGA-DEVELOPMENTS_MALAGA_Terraza-HD-scaled-1.webp",
      "/assets/KLB Homes/Properties/milabeka-boutique-residences/10-MILABEKA_NVOGA-DEVELOPMENTS_MALAGA_Tumbonas-scaled-1.webp"
    ]
  },
  {
    "id": "blume-by-marein",
    "name": "BLUME by Marein",
    "price": "Start from €4,290,000",
    "category": "Villa",
    "beds": 4,
    "baths": 4,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/blume-by-marein/01-V1_BLUME_01EXT_01_V16_R5K-1-scaled-1.webp",
    "location": "Marbella",
    "description": [
      "Blume presents an exclusive boutique development of only 3 contemporary villas developed by the renowned Marein Group.",
      "Located in the prestigious Cortijo Blanco residential area of Marbella, between Puerto Banús and San Pedro de Alcántara, this development offers the perfect balance between privacy, design and Mediterranean lifestyle, just a short walk from the beach, promenade, beach clubs, restaurants and all amenities.",
      "The project features exclusive villas designed with elegant and timeless architecture, spacious open-plan layouts and finishes by leading international brands. Each home includes a Bulthaup kitchen with Miele appliances, minimalist Technal carpentry, LUTRON home automation system, underfloor heating and carefully selected materials designed to ensure maximum comfort and sophistication.",
      "The development stands out for its spectacular outdoor spaces, featuring a private 60 m² swimming pool, covered pool bar, landscaped gardens and an exclusive optional rooftop solarium with plunge pool and pergola. In addition, the villas include premium integrated sound systems and a comprehensive smart security system, offering complete privacy and peace of mind.",
      "A unique opportunity as a primary residence, second home or investment in one of Marbella’s most sought-after and prestigious locations."
    ],
    "features": [
      "4 Bathrooms",
      "4 Bedrooms",
      "Garage",
      "Garden",
      "Swimming Pool",
      "Terraces"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/blume-by-marein/01-V1_BLUME_01EXT_01_V16_R5K-1-scaled-1.webp",
      "/assets/KLB Homes/Properties/blume-by-marein/02-V1_BLUME_01EXT_01_V16_R5K-1-scaled-1.webp",
      "/assets/KLB Homes/Properties/blume-by-marein/03-V1_BLUME_01EXT_03_V16_R5K-scaled-1.webp",
      "/assets/KLB Homes/Properties/blume-by-marein/04-V1_BLUME_01EXT_04_V16_R5K-scaled-1.webp",
      "/assets/KLB Homes/Properties/blume-by-marein/05-V1_BLUME_01EXT_05_V16_R5K-scaled-1.webp",
      "/assets/KLB Homes/Properties/blume-by-marein/06-V1_BLUME_01EXT_20_V16_R5K-scaled-1.webp",
      "/assets/KLB Homes/Properties/blume-by-marein/07-V1_BLUME_03_COCINA_01_V28_R5K-scaled-1.webp",
      "/assets/KLB Homes/Properties/blume-by-marein/08-V1_BLUME_03_COCINA_02_V28_R5K-scaled-1.webp",
      "/assets/KLB Homes/Properties/blume-by-marein/09-V1_BLUME_05_SLRM_03_V21_R2K.webp",
      "/assets/KLB Homes/Properties/blume-by-marein/10-V1_BLUME_05_SLRM_07_V23_R2K.webp",
      "/assets/KLB Homes/Properties/blume-by-marein/11-V1_BLUME_05_SLRM_08_V23_R2K.webp",
      "/assets/KLB Homes/Properties/blume-by-marein/12-V1_BLUME_06_MASTER_01_V14_R5K-scaled-1.webp",
      "/assets/KLB Homes/Properties/blume-by-marein/13-V1_BLUME_06_VESTIDOR_01_V15_R5K-scaled-1.webp",
      "/assets/KLB Homes/Properties/blume-by-marein/14-V1_BLUME_06_VESTIDOR_02_V15_R5K-scaled-1.webp",
      "/assets/KLB Homes/Properties/blume-by-marein/15-V1_BLUME_07_BANO_02_V07_R5K-scaled-1.webp"
    ],
    "featured": true
  },
  {
    "id": "royal-park-residence",
    "name": "Royal Park Residence",
    "price": "Start from €780,000",
    "category": "Apartment",
    "beds": "2-4",
    "baths": 2,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/royal-park-residence/01-royal-park-residence-1761819669109-839191843.webp",
    "location": "Estepona",
    "description": [
      "The development redefines luxury apartment living in an unmatched location. Comprising 57 south-facing residences, this exceptional project was crafted by the renowned architectural studio Villarroel.",
      "Standing as an architectural landmark in the region, the development combines contemporary design, abundant greenery with native plants, and sustainable facilities. Every element has been thoughtfully integrated to create a harmonious environment that sets a new benchmark for luxury, comfort, and tranquility.",
      "Collaborating with renowned architect Pablo Villarroel, we developed this residential complex to deliver an exceptional living experience, thoughtfully designed around your needs and aspirations.",
      "The high-end apartments feature expansive layouts, floor-to-ceiling windows, and breathtaking sea views. Every detail, from the premium finishes to the carefully considered design, has been crafted to create a private oasis of tranquility and sophistication."
    ],
    "features": [
      "2 Bathrooms",
      "2 bedrooms",
      "4 Bedrooms"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/royal-park-residence/01-royal-park-residence-1761819669109-839191843.webp",
      "/assets/KLB Homes/Properties/royal-park-residence/02-royal-park-residence-1761819666896-951923422.webp",
      "/assets/KLB Homes/Properties/royal-park-residence/03-royal-park-residence-1761819668631-942000516.webp",
      "/assets/KLB Homes/Properties/royal-park-residence/04-royal-park-residence-1761819668806-486357032.webp",
      "/assets/KLB Homes/Properties/royal-park-residence/05-royal-park-residence-1761819668970-759940900.webp",
      "/assets/KLB Homes/Properties/royal-park-residence/06-royal-park-residence-1761819669109-839191843.webp",
      "/assets/KLB Homes/Properties/royal-park-residence/07-royal-park-residence-1761819670343-379949624.webp",
      "/assets/KLB Homes/Properties/royal-park-residence/08-royal-park-residence-1761819670522-737119322.webp",
      "/assets/KLB Homes/Properties/royal-park-residence/09-royal-park-residence-1761819670689-871190192.webp",
      "/assets/KLB Homes/Properties/royal-park-residence/10-royal-park-residence-1770991187131-462442552.webp"
    ]
  },
  {
    "id": "la-perla-busineness-center",
    "name": "La Perla Busineness Center",
    "price": "€6,500,000",
    "category": "Business Center",
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/la-perla-busineness-center/01-la-perla-1766126658255-711835878.webp",
    "location": "Benahavís",
    "description": [
      "La Perla Business Center blends classic sophistication with modern adaptability. Its elegant architecture and flexible layouts make it the perfect setting for boutique offices, luxury showrooms, creative studios, or wellness centers — a place where every detail inspires productivity, creativity, and prestige.",
      "Discover a business setting that reflects your vision and elevates your brand.",
      "La Perla boasts an exceptional location, just minutes from Marbella, Puerto Banús, and Estepona.",
      "Nestled in the very heart of the Costa del Sol’s most distinguished and dynamic enclave, it offers a prestigious address for discerning businesses seeking visibility and convenience.",
      "With seamless access to the main motorway, La Perla ensures effortless connectivity to the region’s most coveted commercial, residential, and lifestyle destinations — providing a setting where accessibility meets sophistication."
    ],
    "features": [
      "3 FLOORS",
      "FLEXIBLE LAYOUTS",
      "Parking",
      "PRIVATE COURTYARD"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/la-perla-busineness-center/01-la-perla-1766126658255-711835878.webp",
      "/assets/KLB Homes/Properties/la-perla-busineness-center/02-la-perla-1765967773045-69365222.webp",
      "/assets/KLB Homes/Properties/la-perla-busineness-center/03-la-perla-1766126654109-288133512.webp",
      "/assets/KLB Homes/Properties/la-perla-busineness-center/04-la-perla-1766126655540-957128135.webp",
      "/assets/KLB Homes/Properties/la-perla-busineness-center/05-la-perla-1766126656920-404947741.webp",
      "/assets/KLB Homes/Properties/la-perla-busineness-center/06-la-perla-1766126658255-711835878.webp",
      "/assets/KLB Homes/Properties/la-perla-busineness-center/07-la-perla-1766126659497-686166584.webp",
      "/assets/KLB Homes/Properties/la-perla-busineness-center/08-la-perla-1766126661030-111168983.webp",
      "/assets/KLB Homes/Properties/la-perla-busineness-center/09-la-perla-1766126662450-998700.webp",
      "/assets/KLB Homes/Properties/la-perla-busineness-center/10-la-perla-1766126663647-319245971.webp"
    ]
  },
  {
    "id": "villas-lomas",
    "name": "Villas Lomas",
    "price": "Start from €6,400,000",
    "category": "Villa",
    "beds": 6,
    "baths": 6,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/villas-lomas/01-las-lomas-del-marbella-club-1761903982104-379276953.webp",
    "location": "Marbella Golden Mile - Marbella",
    "description": [
      "Sophisticated detached villas are located in a prestigious urbanization on Marbella’s Golden Mile — Lomas de Marbella Club. It is one of the most popular luxury residential areas in Marbella, maintaining its elegant and original appearance, with spacious and perfectly maintained green areas, 24-hour security, exceptional quality of life, and distinguished architecture.",
      "The urbanization is located just 10 minutes from the center of Marbella, 40 km from Malaga International Airport, 50 km from the AVE station, and 85 km from Gibraltar Airport.",
      "Marbella’s Golden Mile is home to the most exclusive amenities for leisure, entertainment, and an active lifestyle. From world-class beach clubs and fine dining to luxury spas, golf courses, and premium fitness centers, everything is designed for exceptional living.",
      "The area enjoys a sunny, healthy Mediterranean climate with over 300 days of sunshine each year. Nestled between the sea and the mountains, the Golden Mile offers a unique natural setting where breathtaking landscapes meet some of the finest beaches on the Costa del Sol — creating the perfect balance of relaxation, sport, and vibrant social life."
    ],
    "features": [
      "Basement",
      "Garage",
      "Gym",
      "Large Terraces",
      "Solarium",
      "Swimming Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/villas-lomas/01-las-lomas-del-marbella-club-1761903982104-379276953.webp",
      "/assets/KLB Homes/Properties/villas-lomas/02-las-lomas-del-marbella-club-1761903907207-665244075.webp",
      "/assets/KLB Homes/Properties/villas-lomas/03-las-lomas-del-marbella-club-1761903908446-128344468.webp",
      "/assets/KLB Homes/Properties/villas-lomas/04-las-lomas-del-marbella-club-1761903976303-469115484.webp",
      "/assets/KLB Homes/Properties/villas-lomas/05-las-lomas-del-marbella-club-1761903982104-379276953.webp",
      "/assets/KLB Homes/Properties/villas-lomas/06-las-lomas-del-marbella-club-1761904246721-898867032.webp",
      "/assets/KLB Homes/Properties/villas-lomas/07-las-lomas-del-marbella-club-1761904250440-558216525.webp",
      "/assets/KLB Homes/Properties/villas-lomas/08-las-lomas-del-marbella-club-1761904251768-876346985.webp",
      "/assets/KLB Homes/Properties/villas-lomas/09-las-lomas-del-marbella-club-1761904253099-543431545.webp",
      "/assets/KLB Homes/Properties/villas-lomas/10-las-lomas-del-marbella-club-1761904253285-329865754.webp"
    ]
  },
  {
    "id": "villas-sirocco",
    "name": "Villas Sirocco",
    "price": "Start from €3,400,000",
    "category": "Villa",
    "beds": 4,
    "baths": 4,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/villas-sirocco/01-sirocco-1761905031754-155965375.webp",
    "location": "Marbella",
    "description": [
      "A new exclusive collection of villas perfectly blends the serenity of coastal living with the sophistication of modern design. Nestled close to the pristine beaches, Villas Sirocco offers a unique opportunity to experience the best of both worlds—where nature meets contemporary luxury.",
      "The beach is a canvas of natural beauty, from the golden sands to the calming Mediterranean Sea. Every day brings a new opportunity to enjoy the simple pleasures of beach life. For the adventurous of heart, the beach offers a wealth of activities. Surfing, paddleboarding, and beach volleyball are just a few of the ways to stay active. If you prefer a more relaxed pace, there’s nothing like a lazy afternoon spent sunbathing or reading a book under the shade of a palm tree.",
      "A place where modern design meets natural beauty and a perfect location.",
      "Each villa is thoughtfully designed to maximize the stunning surroundings while offering the comforts of modern living. With open-plan layouts, expansive glass windows, and high-quality materials, these homes seamlessly blend indoor and outdoor spaces.",
      "The architecture complements the landscape, creating a harmonious environment where you can relax, entertain, and enjoy life to the fullest."
    ],
    "features": [
      "Basement",
      "Beach Side",
      "Garage",
      "Gym",
      "Sauna",
      "Sea View",
      "Solarium",
      "Swimming Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/villas-sirocco/01-sirocco-1761905031754-155965375.webp",
      "/assets/KLB Homes/Properties/villas-sirocco/02-sirocco-1761905031754-155965375.webp",
      "/assets/KLB Homes/Properties/villas-sirocco/03-sirocco-1761905032027-292181855.webp",
      "/assets/KLB Homes/Properties/villas-sirocco/04-sirocco-1761905032336-452169671.webp",
      "/assets/KLB Homes/Properties/villas-sirocco/05-sirocco-1761905032532-91657660.webp",
      "/assets/KLB Homes/Properties/villas-sirocco/06-sirocco-1761905032779-867400614.webp",
      "/assets/KLB Homes/Properties/villas-sirocco/07-sirocco-1761905033635-798840645.webp",
      "/assets/KLB Homes/Properties/villas-sirocco/08-sirocco-1761905034830-125294947.webp",
      "/assets/KLB Homes/Properties/villas-sirocco/09-sirocco-1761905036186-721043149.webp",
      "/assets/KLB Homes/Properties/villas-sirocco/10-sirocco-1761905038879-4061770.webp"
    ],
    "featured": true
  },
  {
    "id": "sunway-residence",
    "name": "Sunway Residence",
    "price": "Start from €495,000",
    "category": "Apartment, Penthouse",
    "beds": 2,
    "baths": 2,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/sunway-residence/01-sunway-residenve-1761859852170-885331363.webp",
    "location": "Estepona",
    "description": [
      "From golden beaches and golf courses to vibrant marinas and fine dining, Estepona offers an exceptional Mediterranean lifestyle all year round.",
      "Designed by the renowned architectural studio Villarroel, Sunway Residence is a contemporary development defined by elegant architecture, spacious terraces and beautifully integrated surroundings.",
      "The project offers a selection of 2 and 3-bedroom residences and exclusive penthouses, designed to maximise natural light and outdoor living.",
      "Each home features a fully equipped kitchen, complete bathrooms, private parking and storage room, while incorporating energy-efficient solutions and modern technologies for greater comfort and sustainability."
    ],
    "features": [
      "2 Bathrooms",
      "2 bedrooms",
      "Parking",
      "Swimming Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/sunway-residence/01-sunway-residenve-1761859852170-885331363.webp",
      "/assets/KLB Homes/Properties/sunway-residence/02-sunway-residenve-1761859848841-248644045.webp",
      "/assets/KLB Homes/Properties/sunway-residence/03-sunway-residenve-1761859850292-114678152.webp",
      "/assets/KLB Homes/Properties/sunway-residence/04-sunway-residenve-1761859852170-885331363.webp",
      "/assets/KLB Homes/Properties/sunway-residence/05-sunway-residenve-1761859852345-946987635.webp",
      "/assets/KLB Homes/Properties/sunway-residence/06-sunway-residenve-1761859854049-132863903.webp",
      "/assets/KLB Homes/Properties/sunway-residence/07-sunway-residenve-1761859855598-803747191.webp",
      "/assets/KLB Homes/Properties/sunway-residence/08-sunway-residenve-1761859858283-925109414.webp",
      "/assets/KLB Homes/Properties/sunway-residence/09-sunway-residenve-1761859861910-77546732.webp",
      "/assets/KLB Homes/Properties/sunway-residence/10-sunway-residenve-1761859863982-424590072.webp"
    ]
  },
  {
    "id": "villas-seven-pearls",
    "name": "Villas Seven Pearls",
    "price": "Start from €1,975,000",
    "category": "Villa",
    "beds": 4,
    "baths": 4,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/villas-seven-pearls/01-seven-pearls-1761898420096-667312217.webp",
    "location": "Mijas",
    "description": [
      "Villas Seven Pearls in Mijas is an exceptional collection of exclusive four-bedroom residences that boast spectacular sea views, contemporary architecture, and the latest in smart home technology.",
      "Each villa has been carefully designed to offer the perfect balance between modern comfort and natural beauty. These stunning homes invite you to experience the harmony of sea, sun, and mountains, surrounded by the serene landscapes of the Costa del Sol.",
      "The villas are an ideal place to embrace the Mediterranean lifestyle. Here, you will discover countless well-kept golden sand beaches with crystal clear water. For golf enthusiasts, the area offers a wide selection of world-class courses, allowing you to enjoy the game every day under the warm Spanish sun.",
      "Living here means having everything you need within easy reach — supermarkets, international schools, health clinics, beach bars, and restaurants, as well as a variety of shopping and leisure areas."
    ],
    "features": [
      "4 En-Suite Baths",
      "4 En-Suite Bedrooms",
      "Private Garage",
      "Swimming Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/villas-seven-pearls/01-seven-pearls-1761898420096-667312217.webp",
      "/assets/KLB Homes/Properties/villas-seven-pearls/02-seven-pearls-1761898420096-667312217.webp",
      "/assets/KLB Homes/Properties/villas-seven-pearls/03-seven-pearls-1761898420843-966914251.webp",
      "/assets/KLB Homes/Properties/villas-seven-pearls/04-seven-pearls-1761898422127-136636609.webp",
      "/assets/KLB Homes/Properties/villas-seven-pearls/05-seven-pearls-1761898422728-37447934.webp",
      "/assets/KLB Homes/Properties/villas-seven-pearls/06-seven-pearls-1761898424112-846465479.webp",
      "/assets/KLB Homes/Properties/villas-seven-pearls/07-seven-pearls-1761898424877-882169484.webp",
      "/assets/KLB Homes/Properties/villas-seven-pearls/08-villas-seven-pearls-1768833901531-655726860.webp",
      "/assets/KLB Homes/Properties/villas-seven-pearls/09-villas-seven-pearls-1768833933477-125404375.webp",
      "/assets/KLB Homes/Properties/villas-seven-pearls/10-villas-seven-pearls-1768834169838-497222420.webp"
    ]
  },
  {
    "id": "villa-ivory",
    "name": "Villa Ivory",
    "price": "€7,800,000",
    "category": "Villa",
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/villa-ivory/01-ivory-1761899834242-469314880.webp",
    "location": "Marbella Golden Mile",
    "description": [
      "Cascada de Camoján is one of the most prestigious and beautiful areas of Marbella with an incredible atmosphere and nature. One of the biggest advantages of luxury living in urb. Cascada de Camoján is the sense of privacy and serenity it offers. Away from the noise of urban life, residents can relax and rejuvenate in a tranquil setting. Whether it is a walk in the natural surroundings or simply admiring the breathtaking views.",
      "Located on Marbella’s prestigious Golden Mile, Cascada de Camoján is a true testament to opulence and natural beauty. It offers an unparalleled lifestyle, combining the allure of luxurious living with the breathtaking surroundings. This exclusive residential community is conveniently located just a short distance from beautiful beaches and Marbella with its amenities. World-class golf courses, shopping centers and exclusive yacht clubs are also within easy reach."
    ],
    "features": [
      "6 En-suite Bedrooms",
      "Basement",
      "BBQ Zone",
      "Garage",
      "Gated Community",
      "Mountain View",
      "Private Garden",
      "Private Pool",
      "Sea View",
      "Solarium"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/villa-ivory/01-ivory-1761899834242-469314880.webp",
      "/assets/KLB Homes/Properties/villa-ivory/02-ivory-1761899834242-469314880.webp",
      "/assets/KLB Homes/Properties/villa-ivory/03-ivory-1761899834363-364609457.webp",
      "/assets/KLB Homes/Properties/villa-ivory/04-ivory-1761899834466-785973659.webp",
      "/assets/KLB Homes/Properties/villa-ivory/05-ivory-1761899834523-464991437.webp",
      "/assets/KLB Homes/Properties/villa-ivory/06-ivory-1761899834587-384286983.webp",
      "/assets/KLB Homes/Properties/villa-ivory/07-ivory-1761899834612-27327953.webp",
      "/assets/KLB Homes/Properties/villa-ivory/08-ivory-1761899834739-513322505.webp",
      "/assets/KLB Homes/Properties/villa-ivory/09-ivory-1761899834863-516988250.webp",
      "/assets/KLB Homes/Properties/villa-ivory/10-ivory-1761899835090-865781562.webp"
    ]
  },
  {
    "id": "essence-residence-phase-ii",
    "name": "Essence Residence Phase II",
    "price": "Start from €815",
    "category": "Apartment, Penthouse",
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/essence-residence-phase-ii/01-essence-residence-phase-ii-1776433933687-108944485.webp",
    "location": "NEW GOLDEN MILE",
    "description": [
      "At Essence Residence, we believe a home is more than just a place—it is an experience. Our vision is to create spaces that inspire comfortable, harmonious living, where each day is enriched with a sense of wellbeing and positive emotion.",
      "This thoughtfully planned gated community offers the perfect balance of privacy, exclusive amenities, and natural beauty. Surrounded by serene landscapes and ideally located near stunning beaches and world-class golf courses, Essence Residence delivers a lifestyle defined by comfort, convenience, and refined living.",
      "The modern architecture of the complex reflects a seamless balance of elegance, innovation, and functionality. Designed by renowned architectural studios Pablo Villarroel and Yodezeen, the development showcases a wealth of expertise and a shared vision for creating exceptional living environments tailored to modern lifestyles.",
      "The collection includes beautifully designed 2, 3, and 4-bedroom apartments, along with exclusive penthouses. Every residence has been thoughtfully planned to provide comfort, sophistication, and practicality, meeting the expectations of those seeking a truly elevated standard of living."
    ],
    "features": [
      "Co-Working",
      "Gym",
      "Lounge",
      "Parking",
      "Spa",
      "Swimming Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/essence-residence-phase-ii/01-essence-residence-phase-ii-1776433933687-108944485.webp",
      "/assets/KLB Homes/Properties/essence-residence-phase-ii/02-essence-residence-phase-ii-1776433932343-41596508.webp",
      "/assets/KLB Homes/Properties/essence-residence-phase-ii/03-essence-residence-phase-ii-1776433933133-522720745.webp",
      "/assets/KLB Homes/Properties/essence-residence-phase-ii/04-essence-residence-phase-ii-1776433933687-108944485.webp",
      "/assets/KLB Homes/Properties/essence-residence-phase-ii/05-essence-residence-phase-ii-1776433934604-70357984.webp",
      "/assets/KLB Homes/Properties/essence-residence-phase-ii/06-essence-residence-phase-ii-1776433935107-447860418.webp",
      "/assets/KLB Homes/Properties/essence-residence-phase-ii/07-essence-residence-phase-ii-1776433935649-944682189.webp",
      "/assets/KLB Homes/Properties/essence-residence-phase-ii/08-essence-residence-phase-ii-1776433936255-885307596.webp",
      "/assets/KLB Homes/Properties/essence-residence-phase-ii/09-essence-residence-phase-ii-1776433936932-34906043.webp",
      "/assets/KLB Homes/Properties/essence-residence-phase-ii/10-essence-residence-phase-ii-1776433941500-421752625.webp"
    ]
  },
  {
    "id": "essence-residence-phase-i",
    "name": "Essence Residence Phase I",
    "price": "Start from €820,000",
    "category": "Apartment, Penthouse",
    "beds": 2,
    "baths": 2,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/essence-residence-phase-i/01-essence-residence-1768811371088-975020345.webp",
    "location": "New Golden Mile",
    "description": [
      "Welcome to Essence Residence",
      "At Essence Residence, we believe a home is more than just a place—it is an experience. Our mission is to create spaces that inspire comfortable, harmonious living, where every day is enriched by a sense of wellbeing and positive emotion.",
      "This carefully designed gated community offers the perfect balance of privacy, exclusive amenities, and natural surroundings. Ideally positioned near pristine beaches and renowned golf courses, Essence Residence provides an exceptional lifestyle where tranquility, convenience, and sophistication come together.",
      "The modern architecture of the complex seamlessly blends refined aesthetics with exceptional design expertise. Created by renowned architectural studios Pablo Villarroel and Yodezeen, the project reflects a wealth of experience and a commitment to delivering homes that meet the highest standards of contemporary living.",
      "The development offers a selection of 2, 3, and 4-bedroom apartments, as well as exclusive penthouses. Every detail has been carefully considered to meet the needs and expectations of discerning residents, creating spaces that combine comfort, functionality, and timeless elegance."
    ],
    "features": [
      "2 Bathrooms",
      "2 bedrooms",
      "Co-Working",
      "Gym",
      "Lounge",
      "Parking",
      "Spa",
      "Swimming Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/essence-residence-phase-i/01-essence-residence-1768811371088-975020345.webp",
      "/assets/KLB Homes/Properties/essence-residence-phase-i/02-essence-residence-1761812007491-38027085.webp",
      "/assets/KLB Homes/Properties/essence-residence-phase-i/03-essence-residence-1761812008186-695301100.webp",
      "/assets/KLB Homes/Properties/essence-residence-phase-i/04-essence-residence-1761812491586-33472859.webp",
      "/assets/KLB Homes/Properties/essence-residence-phase-i/05-essence-residence-1761812492503-197560376.webp",
      "/assets/KLB Homes/Properties/essence-residence-phase-i/06-essence-residence-1761812492895-492189439.webp",
      "/assets/KLB Homes/Properties/essence-residence-phase-i/07-essence-residence-1761813172366-915895999.webp",
      "/assets/KLB Homes/Properties/essence-residence-phase-i/08-essence-residence-1761813172929-517055424.webp",
      "/assets/KLB Homes/Properties/essence-residence-phase-i/09-essence-residence-1761813296539-525277220.webp",
      "/assets/KLB Homes/Properties/essence-residence-phase-i/10-essence-residence-1768811371088-975020345.webp"
    ]
  },
  {
    "id": "emerald-view-club-residences",
    "name": "Emerald View Club Residences",
    "price": "Stat from €745,000",
    "category": "Apartment, Villa",
    "beds": "2-3",
    "baths": 2,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/emerald-view-club-residences/01-emerald-view-club-residences-1767622799043-647714597.webp",
    "location": "Buenavista",
    "description": [
      "Welcome to Emerald View Club Residences",
      "An exclusive hillside community in the tranquil heights of Mijas, just minutes from the vibrant coastline of the Costa del Sol. Here, elevated living unfolds through wellness-driven spaces, natural surroundings, and uninterrupted Mediterranean views, creating a sense of calm sophistication. Every residence is thoughtfully designed for those who value privacy, inspiration, and the privilege of belonging to a community defined by nature, serenity, and distinction.",
      "Lush Landscaped Gardens, softly shaded pathways and tranquil green retreats create a calming rhythm that invites residents to pause, unwind, and reconnect with nature. Carefully curated Mediterranean flora blends seamlessly with refined landscaping, shaping a serene, sensory environment where beauty, wellbeing, and privacy naturally align."
    ],
    "features": [
      "2 Bathrooms",
      "3 Bedrooms",
      "Gym",
      "Swimming Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/emerald-view-club-residences/01-emerald-view-club-residences-1767622799043-647714597.webp",
      "/assets/KLB Homes/Properties/emerald-view-club-residences/02-emerald-view-club-residences-1767622799043-647714597.webp",
      "/assets/KLB Homes/Properties/emerald-view-club-residences/03-emerald-view-club-residences-1767622800281-359160112.webp",
      "/assets/KLB Homes/Properties/emerald-view-club-residences/04-emerald-view-club-residences-1767622801592-344831783.webp",
      "/assets/KLB Homes/Properties/emerald-view-club-residences/05-emerald-view-club-residences-1767622803354-482046541.webp",
      "/assets/KLB Homes/Properties/emerald-view-club-residences/06-emerald-view-club-residences-1767622805304-994876249.webp",
      "/assets/KLB Homes/Properties/emerald-view-club-residences/07-emerald-view-club-residences-1767622807791-365386944.webp",
      "/assets/KLB Homes/Properties/emerald-view-club-residences/08-emerald-view-club-residences-1767622809885-301457278-scaled.webp",
      "/assets/KLB Homes/Properties/emerald-view-club-residences/09-emerald-view-club-residences-1767622811459-261375466.webp",
      "/assets/KLB Homes/Properties/emerald-view-club-residences/10-emerald-view-club-residences-1767622814111-467360791.webp"
    ]
  },
  {
    "id": "amaris-villas",
    "name": "Amaris Villas",
    "price": "Starts from €1,520,000",
    "category": "Villa",
    "beds": "3 - 4",
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/amaris-villas/01-Amaris_View03_Unit2_01-Optimised.jpg-scaled.webp",
    "location": "Estepona",
    "description": [
      "Amaris sits within the gentle landscape of Estepona, where the coast meets the foothills of the Sierra Bermeja. Here, native butterflies move among wild herbs, citrus and warm garden terraces. The development draws from this natural setting, offering calm light filled spaces that feel connected to their surroundings. Amaris is a place to live with ease, in a setting shaped by nature and refined by thoughtful design.",
      "From its hillside perspective, the 17 villas that make up the stylish modern Amaris community look out over the nearby golf course, the Mediterranean Sea, and the coastline that stretches east towards Estepona. Look back and you will see the fairways meander in the direction of Los Reales, the mighty mountain that watches over this part of the Costa del Sol. The Amaris Villas are the product of a design concept that underlies a new collection of homes by boutique developer Siesta Homes and launches a fresh perspective for the creation of homes and the accompanying lifestyle in specially selected locations across the Costa del Sol.",
      "Amaris Villas is the latest offering from a boutique developer that specialises in creating design-led and lifestyle-driven projects aimed at bringing together the very best elements in prime locations along the Costa del Sol. The 17 villas stand out for their clean architectural lines, flowing and spacious interiors, high build and quality standards, as well as attention to the kind of details that truly make a difference. This is where experience and passion for building exceptional homes come together."
    ],
    "features": [
      "Landscaped Garden",
      "Private Garage",
      "Swimming Pool",
      "Unimpaired Views"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/amaris-villas/01-Amaris_View03_Unit2_01-Optimised.jpg-scaled.webp",
      "/assets/KLB Homes/Properties/amaris-villas/02-Amaris-Villas-Dining-b.webp",
      "/assets/KLB Homes/Properties/amaris-villas/03-Amaris-Villas-Estepona-1.webp",
      "/assets/KLB Homes/Properties/amaris-villas/04-Amaris-Villas-Estepona-2.webp",
      "/assets/KLB Homes/Properties/amaris-villas/05-Amaris-Villas-Estepona-3.webp",
      "/assets/KLB Homes/Properties/amaris-villas/06-Amaris-Villas-Estepona-5.webp",
      "/assets/KLB Homes/Properties/amaris-villas/07-Amaris-Villas-Estepona-7.webp",
      "/assets/KLB Homes/Properties/amaris-villas/08-Amaris-Villas-Living-Dining-B.webp",
      "/assets/KLB Homes/Properties/amaris-villas/09-Amaris-Villas-Living-Sea-views-b.webp",
      "/assets/KLB Homes/Properties/amaris-villas/10-Amaris-Villas-Open-plan-Kitchen-b.webp",
      "/assets/KLB Homes/Properties/amaris-villas/11-Amaris_View02_Unit1_01-Optimised.jpg-scaled.webp",
      "/assets/KLB Homes/Properties/amaris-villas/12-Amaris_View03_Unit2_01-Optimised.jpg-scaled.webp",
      "/assets/KLB Homes/Properties/amaris-villas/13-Estepona_View04_Overview_01-Optimised.jpg-scaled.webp"
    ]
  },
  {
    "id": "villa-aura",
    "name": "Villa Aura",
    "price": "€3,250,000",
    "category": "Villa",
    "beds": 4,
    "baths": 4,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/villa-aura/01-MAY1038-2-scaled.webp",
    "location": "Las Brisas",
    "description": [
      "Introducing this fully renovated villa, ideally situated on a quiet cul-de-sac in the highly sought-after area of Las Brisas, just a short walk from Las Brisas Golf Club. Meticulously designed and finished to an exceptional standard, this home seamlessly blends contemporary interiors with striking modern architecture, enhanced by elegant stonework. Set on a private, mature landscaped plot, the villa offers complete privacy and a tranquil living environment. Upon arrival, the property immediately impresses with its clean architectural lines and sense of scale, framed by the iconic La Concha Mountain as a breath taking backdrop. Inside, the villa welcomes you with beautifully curated light-filled interiors, neutral spaces where expansive windows flood the home with natural light from every angle. The ground floor features a stylish, fully equipped kitchen with adjoining utility room, direct access to a guest en-suite bedroom, and a spacious open-plan living and dining area.",
      "A striking modern double-sided fireplace serves as the focal point, offering flexibility to create both formal and informal living spaces. Floor-to-ceiling windows blur the boundary between indoors and out, bringing the lush greenery of the garden into the heart of the home and creating a calm, inviting atmosphere. From both the living area and kitchen, there is direct access to the terrace and landscaped garden. Thoughtfully designed, the terrace provides ample shaded areas for comfortable summer living, while the lower level of the plot features an expansive swimming pool and sunbathing area, perfectly positioned to enjoy sunlight throughout the day and into the evening. Ascending the impressive triple-height staircase, the upper level hosts three additional en-suite bedrooms.",
      "The principal suite is particularly luxurious, featuring both a bathtub and walk-in shower and large wrap around terrace, perfect to enjoy the stunning La Concha views. Three of the four bedrooms enjoy stunning views towards La Concha, further enhancing the villa’s appeal. The property is equipped with underfloor heating, hot and cold air conditioning, a security alarm system, and electric blinds for added comfort, privacy, and ease of living. A gated driveway with space for two vehicles completes this exceptional offering. This villa is ideal for those looking to upgrade from an apartment without the upkeep of a large estate, or for buyers seeking a refined holiday home that is both low-maintenance and generously proportioned. Located within close proximity to some of Marbella’s finest golf courses, as well as a short drive from a wide selection of restaurants, cafés, shops, and amenities, this property represents a superb opportunity to enjoy the Marbella lifestyle all year round. For those looking for a smart investment vehicle, this property would also be prime for high rental returns all year around."
    ],
    "features": [
      "4 Bathrooms",
      "4 Bedrooms"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/villa-aura/01-MAY1038-2-scaled.webp",
      "/assets/KLB Homes/Properties/villa-aura/02-DJI_0324-scaled.webp",
      "/assets/KLB Homes/Properties/villa-aura/03-MAY0855-scaled.webp",
      "/assets/KLB Homes/Properties/villa-aura/04-MAY0865-scaled.webp",
      "/assets/KLB Homes/Properties/villa-aura/05-MAY0880-scaled.webp",
      "/assets/KLB Homes/Properties/villa-aura/06-MAY0883-scaled.webp",
      "/assets/KLB Homes/Properties/villa-aura/07-MAY0894-scaled.webp",
      "/assets/KLB Homes/Properties/villa-aura/08-MAY0921-scaled.webp",
      "/assets/KLB Homes/Properties/villa-aura/09-MAY0930-scaled.webp",
      "/assets/KLB Homes/Properties/villa-aura/10-MAY0942-scaled.webp",
      "/assets/KLB Homes/Properties/villa-aura/11-MAY0951-scaled.webp",
      "/assets/KLB Homes/Properties/villa-aura/12-MAY0978-scaled.webp",
      "/assets/KLB Homes/Properties/villa-aura/13-MAY0994-scaled.webp",
      "/assets/KLB Homes/Properties/villa-aura/14-MAY1008-scaled.webp",
      "/assets/KLB Homes/Properties/villa-aura/15-MAY1038-2-scaled.webp",
      "/assets/KLB Homes/Properties/villa-aura/16-MAY1009-scaled.webp",
      "/assets/KLB Homes/Properties/villa-aura/17-MAY1041-scaled.webp",
      "/assets/KLB Homes/Properties/villa-aura/18-MAY1044-scaled.webp",
      "/assets/KLB Homes/Properties/villa-aura/19-DJI_0307-scaled.webp"
    ],
    "videoUrl": "https://youtube.com/embed/vFuNg30pxs4"
  },
  {
    "id": "cerquilla-57b-2",
    "name": "Cerquilla 57B",
    "price": "€4,300,000",
    "category": "Villa",
    "beds": 4,
    "baths": 5,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/cerquilla-57b-2/01-PISCINA-B_R00-scaled.webp",
    "location": "La Cerquilla",
    "description": [
      "Situated in the exclusive neighbourhood of La Cerquilla, this exceptional modern villa, designedby Jacobsen Arquitectura, is currently under construction and promises to deliver a seamlessfusion of contemporary elegance and natural beauty. The striking architectural designincorporates natural materials that blend effortlessly with the surrounding landscape, creating ahome that is both bold and harmonious. Set on a generous plot in the heart of the Golf Valley,the villa offers captivating views of the Mediterranean Sea, a meticulously landscaped garden,and expansive outdoor areas, including a private pool, an outdoor kitchenette, and spaciousterraces ideal for alfresco dining and unwinding in style.",
      "The interiors are crafted with precision, combining sophisticated aesthetics with functional design. The open-plan layout connects the kitchen, living, and dining areas, all enhanced by floor-to-ceiling glass doors that flood the space with natural light and provide direct access to the outdoor spaces. The upper floor is dedicated to the luxurious master suite, complete with a walk-in wardrobe and an en-suite bathroom, along with well-appointed guest bedrooms designed for maximum comfort and privacy. On the lower level, the villa offers a variety of amenities, including a large garage, an entertainment room, a home office, and a state-of-the-art spa and gym, ensuring every lifestyle need is met.",
      "Located in the prestigious and peaceful La Cerquilla community, the property provides a private and secure environment while remaining within close proximity to key amenities, renowned international schools, and the lively Puerto Banús marina. This remarkable villa represents the pinnacle of modern living in one of Marbella’s most coveted areas."
    ],
    "features": [
      "1 Guest Toilet",
      "2 Parking Slots",
      "4 Bedrooms",
      "5 bathrooms",
      "Private Garage",
      "Private Garden",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/cerquilla-57b-2/01-PISCINA-B_R00-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57b-2/02-FACHADA-B_R00_2-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57b-2/03-FACHADA-B_R00-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57b-2/04-GERAL_R00-1-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57b-2/05-GOURMET-B_R00-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57b-2/06-KITCHEN-B_R00-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57b-2/07-LIVING-B_R00-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57b-2/08-MS_R01-1-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57b-2/09-OUTDOOR-1PAV_-2-R00-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57b-2/10-PISCINA-B_R00-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57b-2/11-TERRACE-1_R00-1-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57b-2/12-TERRACE-2_R00-1-scaled.webp"
    ]
  },
  {
    "id": "cerquilla-57a",
    "name": "Cerquilla 57A",
    "price": "€4,100,000",
    "category": "Villa",
    "beds": 4,
    "baths": 6,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/cerquilla-57a/01-GERAL_R00-scaled.webp",
    "location": "La Cerquilla",
    "description": [
      "Nestled in the prestigious enclave of La Cerquilla, this stunning modern villa is a masterpiece under construction, promising a harmonious blend of contemporary design and natural beauty.Commanding attention with its striking architecture, the villa showcases the use of natural materials that seamlessly integrate with its surroundings. Positioned on an ample plot in the heart of the Golf Valley, the property boasts breathtaking sea views, a manicured garden, and expansive outdoor entertainment spaces, including a private pool, an outdoor kitchenette, and generous terraces designed for alfresco dining and relaxation.",
      "Inside, the villa offers immaculate interior design that balances aesthetics with practicality. The open-plan kitchen, living, and dining areas are crafted to create a sense of flow, while floor-to-ceiling glass sliding doors allow for a seamless connection to the exterior. The upper level houses the master suite with its elegant walk-in wardrobe and en-suite bathroom, alongside guest bedrooms that prioritise comfort and privacy. Meanwhile, the lower level is dedicated to indulgent living, featuring a spacious garage, entertainment room, home office, and state-of-the-art spa and gym facilities.",
      "Situated within the esteemed and tranquil community of La Cerquilla, this villa ensures privacy and security while remaining conveniently close to essential amenities, international schools, and the vibrant marina of Puerto Banús. A truly exceptional property, it offers an unparalleled lifestyle in one of Marbella's most sought-after locations."
    ],
    "features": [
      "2 Parking Slots",
      "4 Bedrooms",
      "6 Bathrooms",
      "Private Garage",
      "Private Garden",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/cerquilla-57a/01-GERAL_R00-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57a/02-FACHADA-A_R00-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57a/03-GERAL_R00-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57a/04-GOURMET-A_R00-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57a/05-KITCHEN-A_R00-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57a/06-LIVING-A_R01-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57a/07-MS_R01-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57a/08-OUTDOOR-1PAV_R00-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57a/09-TERRACE-1_R00-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-57a/10-TERRACE-2_R00-scaled.webp"
    ]
  },
  {
    "id": "cerquilla-39-b-2",
    "name": "Cerquilla 39 B",
    "price": "€3,900,000",
    "category": "Plot",
    "beds": 7,
    "baths": 8,
    "status": "N/A",
    "image": "/assets/KLB Homes/Properties/cerquilla-39-b-2/01-MIX_38-scaled.webp",
    "location": "La Cerquilla",
    "description": [
      "This remarkable plot enjoys a prestigious position in the heart of La Cerquilla, an elite residential neighbourhood. It includes a thoughtfully designed project by Diego Tobal, with the option to incorporate interiors by the esteemed Pedro Peña. This project in La Cerquilla showcases cutting-edge architectural design, blending harmoniously with the surrounding natural landscape. Premium materials and sophisticated design elements elevate this project to a new standard of luxury. Cerquilla 39B is a rare gem, situated in La Cerquilla, one of Marbella’s most coveted residential areas. The plot offers unparalleled privacy and exclusivity, nestled within the prestigious Golf Valley. Combining seclusion with convenience, this address is within easy reach of world-class golf courses, luxury shopping, and top-tier international schools.Located in Nueva Andalucía, it provides quick access to Marbella’s iconic Golden Mile, the vibrant Puerto Banús, and the charming town centre."
    ],
    "features": [
      "1 Guest Toilet",
      "7 Bedrooms",
      "8 Bathrooms",
      "Private Garage",
      "Private Garden",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/cerquilla-39-b-2/01-MIX_38-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-39-b-2/02-DJI_0056-mod-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-39-b-2/03-DJI_0905-mod-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-39-b-2/04-MIX_8-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-39-b-2/05-MIX_9-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-39-b-2/06-MIX_22-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-39-b-2/07-MIX_24-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-39-b-2/08-MIX_27-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-39-b-2/09-MIX_28-1-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-39-b-2/10-MIX_28-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-39-b-2/11-MIX_30-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-39-b-2/12-MIX_32-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-39-b-2/13-MIX_38-scaled.webp"
    ]
  },
  {
    "id": "casa-orquidea",
    "name": "Casa Orquidea",
    "price": "€19,880,000",
    "category": "Villa",
    "beds": 8,
    "baths": 9,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/casa-orquidea/01-Orquidea_Small_-83-of-107-scaled.webp",
    "location": "La Quinta",
    "description": [
      "Perched atop Herrojo Alto with sweeping panoramic views, Casa Orquídea is a true architectural masterpiece.",
      "The journey begins along the scenic, tree-lined roads of the exclusive El Herrojo Alto gated                     community, leading you to the grand entrance of this remarkable residence. A spacious driveway welcomes you to a strikingly modern home accented with natural materials.",
      "Inside, sunlight floods the foyer through expansive floor-to-ceiling windows, framing breathtaking vistas. The main living area features a stylish lounge with a fireplace that elegantly separates it from the large dining room and contemporary kitchen. An adjoining outdoor kitchen enhances the culinary experience, perfect for entertaining. This level also offers two guest bedrooms, each with a private en-suite bath.",
      "Upstairs, you’ll find three additional en-suite bedrooms, including a magnificent master suite of over 70 m². The master retreat boasts a walk-in closet, luxurious bath, and a private terrace with a jacuzzi overlooking the stunning landscape.",
      "The lower level unfolds nearly 800 m² of lavish space, all designed to capture natural light and views through its generous windows. Here you’ll discover multiple lounges for relaxing or entertaining, a playroom, cinema room, fully equipped gym, and an indoor spa complete with pool and jacuzzi.",
      "Additional features include a dedicated home office, a garage accommodating up to six cars, and three more en-suite bedrooms—one with a private"
    ],
    "features": [
      "1 Guest Toilet",
      "6 Parking Slots",
      "8 Bedrooms",
      "9 Bathrooms",
      "Private Garage",
      "Private Garden",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/casa-orquidea/01-Orquidea_Small_-83-of-107-scaled.webp",
      "/assets/KLB Homes/Properties/casa-orquidea/02-Orquidea_Small_-4-of-107-scaled.webp",
      "/assets/KLB Homes/Properties/casa-orquidea/03-Orquidea_Small_-14-of-107-scaled.webp",
      "/assets/KLB Homes/Properties/casa-orquidea/04-Orquidea_Small_-20-of-107-scaled.webp",
      "/assets/KLB Homes/Properties/casa-orquidea/05-Orquidea_Small_-25-of-107-scaled.webp",
      "/assets/KLB Homes/Properties/casa-orquidea/06-Orquidea_Small_-48-of-107-scaled.webp",
      "/assets/KLB Homes/Properties/casa-orquidea/07-Orquidea_Small_-56-of-107-scaled.webp",
      "/assets/KLB Homes/Properties/casa-orquidea/08-Orquidea_Small_-67-of-107-scaled.webp",
      "/assets/KLB Homes/Properties/casa-orquidea/09-Orquidea_Small_-71-of-107-scaled.webp",
      "/assets/KLB Homes/Properties/casa-orquidea/10-Orquidea_Small_-81-of-107-scaled.webp",
      "/assets/KLB Homes/Properties/casa-orquidea/11-Orquidea_Small_-83-of-107-scaled.webp",
      "/assets/KLB Homes/Properties/casa-orquidea/12-Orquidea_Small_-102-of-107-scaled.webp"
    ],
    "videoUrl": "https://youtube.com/embed/kdoNvB-Nej0",
    "featured": true
  },
  {
    "id": "casa-k",
    "name": "Casa K",
    "price": "€8,250,000",
    "category": "Villa",
    "beds": 9,
    "baths": 9,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/casa-k/01-CasaK_Small-78-scaled.webp",
    "location": "Puerto del Almendro",
    "description": [
      "A south-facing villa in Puerto del Almendro, Benahavís with nine bedrooms and nine en-suite bathrooms, arranged across a main residence and an independent guest house on a 7,881 m²plot, offering approximately 1,177 m² of built space, 140 m² of terraces, two outdoor swimming pools, and far-reaching sea and mountain views across the Mediterranean coastline.",
      "Casa K occupies a privileged hillside position that brings light, space and outlook into daily living.The architecture follows a contemporary Mediterranean style with generous interior volumes, extensive glazing and a natural flow between indoor areas and the surrounding terraces. Access is discreet via a private driveway with substantial parking capacity of up to eighteen vehicles. The independent guest house allows visitors or extended family to stay comfortably while preserving privacy within the main residence.",
      "The interior leisure spaces are practical and well considered, including a dedicated cinema room, wine bodega and fully equipped home gym. These areas are designed for regular use rather than occasional display, supporting both permanent living and extended stays. Outdoors, the estate is thoughtfully distributed with landscaped terraces, two swimming pools serving different parts of the plot, and varied viewpoints across sea, countryside and garden. The scale of the land provides a sense of calm and separation without feeling remote.",
      "Puerto del Almendro is a well established residential enclave offering privacy and tranquillity while remaining close to Marbella, Puerto Banús, golf courses, schools and everyday amenities. It appeals to buyers seeking space and discretion without sacrificing accessibility or lifestyle convenience.",
      "If you are looking for a property that offers genuine scale, independence for guests and a setting that enhances daily living, a private viewing is recommended. Walking the plot and moving through the spaces gives a far clearer sense of how the property works as a whole."
    ],
    "features": [
      "18 Parking Slots",
      "9 Bathrooms",
      "9 Bedrooms",
      "9 En-suite Baths",
      "Private Garage",
      "Private Garden",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/casa-k/01-CasaK_Small-78-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/02-CasaK_Small-1-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/03-CasaK_Small-6-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/04-CasaK_Small-7-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/05-CasaK_Small-8-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/06-CasaK_Small-9-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/07-CasaK_Small-10-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/08-CasaK_Small-13-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/09-CasaK_Small-14-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/10-CasaK_Small-21-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/11-CasaK_Small-23-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/12-CasaK_Small-27-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/13-CasaK_Small-30-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/14-CasaK_Small-33-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/15-CasaK_Small-35-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/16-CasaK_Small-37-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/17-CasaK_Small-41-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/18-CasaK_Small-44-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/19-CasaK_Small-45-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/20-CasaK_Small-57-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/21-CasaK_Small-59-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/22-CasaK_Small-25-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/23-CasaK_Small-62-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/24-CasaK_Small-64-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/25-CasaK_Small-67-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/26-CasaK_Small-71-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/27-CasaK_Small-77-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/28-CasaK_Small-78-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/29-CasaK_Small-79-scaled.webp",
      "/assets/KLB Homes/Properties/casa-k/30-CasaK_Small-85-scaled.webp"
    ],
    "videoUrl": "https://youtube.com/embed/-6TUptqXnQ8"
  },
  {
    "id": "casa-de-los-suenos",
    "name": "Casa de los Sueños",
    "price": "€13,800,000",
    "category": "Villa",
    "beds": 5,
    "baths": 5,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/casa-de-los-suenos/01-DJI_0454-scaled.webp",
    "location": "Altos Reales",
    "description": [
      "Located in the prestigious community of Altos Reales, this exceptional Mediterranean villa offersan unparalleled blend of elegance, comfort and privacy. Set on a generous plot of almost 4,000m², the property is embraced by greenery, creating a tranquil retreat with breathtaking views.",
      "The villa is surrounded by a meticulously manicured garden that enhances its atmosphere,complete with a private swimming pool designed for year-round enjoyment. Expansive terracescater to alfresco dining and relaxation, seamlessly blending indoor and outdoor living. At theheart of the property lies a captivating courtyard adorned with charming décor and a fountain,adding to the villa’s timeless appeal.",
      "A private driveway leads to the residence, where classical interiors pay homage to traditionalMediterranean design. Inside, high ceilings with striking wooden beams enhance the sense ofgrandeur, while an effortless flow between the living, dining and kitchen areas creates awelcoming ambience. The kitchen itself is generously sized, both highly functional andconvenient for everyday living.",
      "Boasting seven luxurious bedrooms, the villa offers an exceptional level of comfort, with themaster suite taking centre stage. Every detail of this home reflects a refined lifestyle, making it atrue embodiment of Mediterranean luxury in one of Marbella’s most sought-after locations."
    ],
    "features": [
      "2 Guest Toilets",
      "3 Parking Slots",
      "5 bathrooms",
      "5 Bedrooms",
      "Private Garage",
      "Private Garden",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/casa-de-los-suenos/01-DJI_0454-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/02-DJI_0416-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/03-DJI_0421-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/04-DJI_0454-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/05-PRO_1083-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/06-PRO_1090-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/07-PRO_1096-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/08-PRO_1098-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/09-PRO_1111-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/10-PRO_1118-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/11-PRO_1122-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/12-PRO_1143-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/13-PRO_1147-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/14-PRO_1162-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/15-PRO_1175-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/16-PRO_1182-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/17-PRO_1209-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/18-PRO_1217-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/19-PRO_1219-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/20-PRO_1221-scaled.webp",
      "/assets/KLB Homes/Properties/casa-de-los-suenos/21-PRO_1224-scaled.webp"
    ]
  },
  {
    "id": "casa-cazorla",
    "name": "Casa Cazorla",
    "price": "€5,995,000",
    "category": "Villa",
    "beds": 5,
    "baths": 7,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/casa-cazorla/01-Casa-Cazorla-Small-60-scaled.webp",
    "location": "Golden Mile",
    "description": [
      "Casa Cazorla, developed by Casas Fintech, is a masterpiece of contemporary architecture located in the prestigious Lomas de Marbella Club on Marbella’s Golden Mile. Built across 1,460m² on a 1,010 m² plot, this 7-bedroom residence embodies a perfect balance between elegance, privacy, and Mediterranean serenity. Designed with wood and stone as its main elements, the home exudes an organic warmth—giving the inside a sense of green tranquility and the outside a calm, natural harmony.",
      "The layout of Casa Cazorla is delicately planned, seamlessly dividing spaces for both privacy and social living. Upon entering, you are greeted by a generous open-plan living room and dining area, complemented by a light-wood kitchen that overlooks the social heart of the home. Floor-to-ceiling glass doors open to expansive terraces and a landscaped garden, inviting natural light and the outdoors in. This level also offers a private guest suite with its own terrace access, ensuring comfort and independence for visitors. Upstairs, three serene bedrooms include two guest suites opening onto the terrace, and a master suite featuring a walk-in closet and a luxurious bathroom with a rain shower and bathtub.The lower level of Casa Cazorla is dedicated to wellness and relaxation. Here, you can unwind in the spa and hammam, stay active in the home gym, enjoy a glass of wine in the wine room, or focus in your private home office. This floor also includes a playroom and an additional en-suite"
    ],
    "features": [
      "2 Guest Toilets",
      "5 Bedrooms",
      "7 Bathrooms",
      "Carport Garage",
      "Private Garden",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/casa-cazorla/01-Casa-Cazorla-Small-60-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/02-Casa-Cazorla-Small-1-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/03-Casa-Cazorla-Small-2-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/04-Casa-Cazorla-Small-3-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/05-Casa-Cazorla-Small-4-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/06-Casa-Cazorla-Small-6-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/07-Casa-Cazorla-Small-8-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/08-Casa-Cazorla-Small-9-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/09-Casa-Cazorla-Small-11-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/10-Casa-Cazorla-Small-13-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/11-Casa-Cazorla-Small-15-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/12-Casa-Cazorla-Small-17-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/13-Casa-Cazorla-Small-21-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/14-Casa-Cazorla-Small-22-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/15-Casa-Cazorla-Small-23-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/16-Casa-Cazorla-Small-25-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/17-Casa-Cazorla-Small-28-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/18-Casa-Cazorla-Small-30-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/19-Casa-Cazorla-Small-33-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/20-Casa-Cazorla-Small-35-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/21-Casa-Cazorla-Small-36-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/22-Casa-Cazorla-Small-38-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/23-Casa-Cazorla-Small-44-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/24-Casa-Cazorla-Small-48-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/25-Casa-Cazorla-Small-55-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/26-Casa-Cazorla-Small-57-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/27-Casa-Cazorla-Small-59-scaled.webp",
      "/assets/KLB Homes/Properties/casa-cazorla/28-Casa-Cazorla-Small-60-scaled.webp"
    ],
    "videoUrl": "https://youtube.com/embed/O8Xo87poVYs"
  },
  {
    "id": "brisas-12",
    "name": "Brisas 12",
    "price": "€5,950,000",
    "category": "Villa",
    "beds": 5,
    "baths": 5,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/brisas-12/01-LasBrisas12_Small-24-scaled.webp",
    "location": "Nueva Andalucia",
    "description": [
      "This luxurious property, designed by a renowned architect firm and developed by the Nordi Group, exemplifies modern Scandinavian elegance blended with high-end comfort.",
      "Occupying an impressive 648 square meters over three levels, this villa offers an abundance of natural light and breathtaking views from nearly every room. The property is fully equipped with top-tier Siemens appliances and features exquisite oak flooring that complements its warm, contemporary style. The ground floor of Brisas 12 is meticulously designed to foster a welcoming atmosphere. A spacious kitchen with a dining area seamlessly transitions into a cozy living room. Additionally, this level includes a guest room with an en-suite bathroom and an extra guest toilet, ensuring functionality and privacy"
    ],
    "features": [
      "1 Guest Toilet",
      "2 Parking Slots",
      "5 bathrooms",
      "5 Bedrooms",
      "Private Garage",
      "Private Garden",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/brisas-12/01-LasBrisas12_Small-24-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/02-LasBrisas12_Small-1-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/03-LasBrisas12_Small-2-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/04-LasBrisas12_Small-3-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/05-LasBrisas12_Small-5-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/06-LasBrisas12_Small-6-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/07-LasBrisas12_Small-7-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/08-LasBrisas12_Small-10-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/09-LasBrisas12_Small-11-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/10-LasBrisas12_Small-12-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/11-LasBrisas12_Small-13-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/12-LasBrisas12_Small-14-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/13-LasBrisas12_Small-15-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/14-LasBrisas12_Small-16-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/15-LasBrisas12_Small-17-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/16-LasBrisas12_Small-18-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/17-LasBrisas12_Small-20-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/18-LasBrisas12_Small-21-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/19-LasBrisas12_Small-24-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/20-LasBrisas12_Small-25-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/21-LasBrisas12_Small-26-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/22-LasBrisas12_Small-35-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/23-LasBrisas12_Small-37-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/24-LasBrisas12_Small-38-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/25-LasBrisas12_Small-43-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/26-LasBrisas12_Small-47-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/27-LasBrisas12_Small-48-scaled.webp",
      "/assets/KLB Homes/Properties/brisas-12/28-LasBrisas12_Small-52-scaled.webp"
    ],
    "videoUrl": "https://youtube.com/embed/jIzcwqzF1cc"
  },
  {
    "id": "belvederes-12",
    "name": "Belvederes 12",
    "price": "€2,750,000",
    "category": "Duplex Penthouse",
    "beds": 3,
    "baths": 3,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/belvederes-12/01-Belvederes12-48-scaled.webp",
    "location": "Palacetes Los Belvederes",
    "description": [
      "This exceptional duplex penthouse, offered exclusively through sole agency, is situated in the prestigious Palacetes de los Belvederes development in Nueva Andalucia, Marbella, Malaga. The property boasts a recently renovated interior that harmoniously blends contemporary design with a warm Scandinavian style, creating an inviting yet sophisticated atmosphere. With a built area of 183m² and an expansive 181m² of terraces, this home provides ample space for both indoor and outdoor living.",
      "The residence comprises three spacious bedrooms, each with its own en-suite bathroom, alongside an additional guest toilet. The bathrooms are enhanced with underfloor heating, while the entire property features herringbone oak flooring, ultra-UV triple-glazed windows, and double glazing for optimal comfort and energy efficiency. The open-plan living area seamlessly connects to a generous private terrace, offering breathtaking sea and mountain views. The outdoor space is further complemented by a fully equipped outdoor kitchen and barbecue area, perfect for entertaining or relaxing while enjoying the panoramic vistas. There are also high quality UV plants installed.",
      "On the upper floor, residents benefit from a private pool and large terraces that provide stunning views of the sea, lake, and mountains. The property is fully furnished and features a fully fitted kitchen, fitted wardrobes and air conditioning. Additional amenities include 2underground garage spaces, 2 golf buggy spaces, a storage room, and access to a communal pool & garden within a secure gated community.The penthouse is presented in excellent condition, having been recently refurbished to a high standard. Strategically located close to the sea, beaches, renowned golf courses, and the vibrant attractions of Puerto Banús, this penthouse also offers proximity to essential amenities such as schools and shops. Its prime position in the sought-after La Cerquilla area of Nueva Andalucia ensures both convenience and exclusivity, making it an ideal choice for those seeking a luxurious and modern lifestyle on the Costa del Sol."
    ],
    "features": [
      "1 Guest Toilet",
      "3 bathrooms",
      "3 Bedrooms",
      "3 En-suite Baths",
      "Communal Garden",
      "Private Garage",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/belvederes-12/01-Belvederes12-48-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/02-Belvederes12_Details_Small-4-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/03-Belvederes12_Details_Small-5-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/04-Belvederes12_Details_Small-6-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/05-Belvederes12-1-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/06-Belvederes12-3-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/07-Belvederes12-6-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/08-Belvederes12-9-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/09-Belvederes12-12-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/10-Belvederes12-13-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/11-Belvederes12-14-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/12-Belvederes12-15-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/13-Belvederes12-17-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/14-Belvederes12-18-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/15-Belvederes12-26-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/16-Belvederes12-30-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/17-Belvederes12-32-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/18-Belvederes12-34-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/19-Belvederes12-43-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/20-Belvederes12-46-scaled.webp",
      "/assets/KLB Homes/Properties/belvederes-12/21-Belvederes12-48-scaled.webp"
    ],
    "videoUrl": "https://youtube.com/embed/mCj7g9-udzM"
  },
  {
    "id": "banus-1-2",
    "name": "Banus 1",
    "price": "€2,950,000",
    "category": "Apartment",
    "beds": 3,
    "baths": 3,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/banus-1-2/01-spca_visual_marbella__MG_8771-Edit.webp",
    "location": "Puerto Banus",
    "description": [
      "A sleek contemporary apartment located within the the famous Puerto Banus Marina, showcasing jetliner panoramic views to the Mediterranean Sea and harbour. Experience luxurious coastal living in Puerto Banus, with endless designer stores, avant-garde restaurants and luxury leisure activities to enjoy under the spectacular Marbella climate. Recently renovated with the highest qualities and complemented with refined contemporary design, each division has been maximised to its full potential and ensures that the distinguishable features are the magnificent panoramic sea and port views. Throughout the property discover top-of-the-line features such as an open plan living with almond wood panelling incorporated LED lighting, leading directly to the exterior terrace with frontline views towards the port, a sleek fitted kitchen complete with top-level Gaggenau appliances and 3 opulent bedrooms, each with their own en-suite bathrooms. Discover a lavish apartment with all the best Marbella has to offer at your fingertips"
    ],
    "features": [
      "3 bathrooms",
      "3 Bedrooms"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/banus-1-2/01-spca_visual_marbella__MG_8771-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1-2/02-spca_visual_marbella__MG_8408-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1-2/03-spca_visual_marbella__MG_8444-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1-2/04-spca_visual_marbella__MG_8461-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1-2/05-spca_visual_marbella__MG_8547-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1-2/06-spca_visual_marbella__MG_8552-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1-2/07-spca_visual_marbella__MG_8669-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1-2/08-spca_visual_marbella__MG_8691-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1-2/09-spca_visual_marbella__MG_8699-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1-2/10-spca_visual_marbella__MG_8750-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1-2/11-spca_visual_marbella__MG_8771-Edit.webp"
    ],
    "videoUrl": "https://youtube.com/embed/HDk6xLH2c3w"
  },
  {
    "id": "auriga-12b",
    "name": "Auriga 12B",
    "price": "€4,250,000",
    "category": "Villa",
    "beds": 4,
    "baths": 4,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/auriga-12b/01-Auriga-12B-Solvilla-Velmure-1-scaled.webp",
    "location": "Nueva Andalucia",
    "description": [
      "A four-bedroom villa in Nueva Andalucía with open golf and sea views, arranged over multiple levels with a garden-level pool, integrated outdoor kitchen, generous terraces and a private garage.",
      "This is not your average Golf Valley villa. It has been redesigned with a clear architectural direction, where proportions, materials and flow have been carefully selected. From the entrance, the detailing is evident: herringbone oak flooring, bespoke walnut joinery, fluted cabinetry and dark-veined marble, all brought together with consistency rather than contrast for effect.",
      "The main living area connects directly to the garden level, where the pool, sun deck and built-in barbecue are positioned as a natural continuation of the house. The kitchen and dining space open outward without interruption, creating a layout that works as well for daily use as it does for hosting. The outdoor areas are generous yet private, framed by mature planting and oriented towards the golf course.",
      "Upstairs, the principal suite benefits from vaulted timber ceilings, open dressing, sculptural stone basins and a walk-in marble shower. Full-height glazing frames the views to the golf and sea, while maintaining privacy. The additional bedrooms follow the same standard of finish and proportion, each thoughtfully designed to maximise comfort. Practical elements, such as a separate utility room, integrated wine storage, custom carpentry and layered lighting, are integrated discreetly throughout.",
      "Nueva Andalucía remains one of the most established addresses in the area, with leading golf courses nearby, Puerto Banús within easy reach and international schools and restaurants close at hand. The setting offers elevation, views and convenience in equal measure.For a buyer seeking a four-bedroom home in the Golf Valley that combines architectural integrity, refined materials and seamless indoor–outdoor living, this property deserves your attention."
    ],
    "features": [
      "4 Bathrooms",
      "4 Bedrooms"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/auriga-12b/01-Auriga-12B-Solvilla-Velmure-1-scaled.webp",
      "/assets/KLB Homes/Properties/auriga-12b/02-Auriga-12B-Solvilla-Velmure-1-scaled.webp",
      "/assets/KLB Homes/Properties/auriga-12b/03-Auriga-12B-Solvilla-Velmure-3-scaled.webp",
      "/assets/KLB Homes/Properties/auriga-12b/04-Auriga-12B-Solvilla-Velmure-4-scaled.webp",
      "/assets/KLB Homes/Properties/auriga-12b/05-Auriga-12B-Solvilla-Velmure-6-scaled.webp",
      "/assets/KLB Homes/Properties/auriga-12b/06-Auriga-12B-Solvilla-Velmure-8-scaled.webp",
      "/assets/KLB Homes/Properties/auriga-12b/07-Auriga-12B-Solvilla-Velmure-17-scaled.webp",
      "/assets/KLB Homes/Properties/auriga-12b/08-Auriga-12B-Solvilla-Velmure-18-scaled.webp",
      "/assets/KLB Homes/Properties/auriga-12b/09-Auriga-12B-Solvilla-Velmure-22-scaled.webp",
      "/assets/KLB Homes/Properties/auriga-12b/10-Auriga-12B-Solvilla-Velmure-23-scaled.webp",
      "/assets/KLB Homes/Properties/auriga-12b/11-Auriga-12B-Solvilla-Velmure-29-scaled.webp",
      "/assets/KLB Homes/Properties/auriga-12b/12-Auriga-12B-Solvilla-Velmure-30-scaled.webp",
      "/assets/KLB Homes/Properties/auriga-12b/13-Auriga-12B-Solvilla-Velmure-32-scaled.webp",
      "/assets/KLB Homes/Properties/auriga-12b/14-Auriga-12B-Solvilla-Velmure-38-scaled.webp",
      "/assets/KLB Homes/Properties/auriga-12b/15-Auriga-12B-Solvilla-Velmure-39-scaled.webp",
      "/assets/KLB Homes/Properties/auriga-12b/16-Auriga-12B-Solvilla-Velmure-40-scaled.webp",
      "/assets/KLB Homes/Properties/auriga-12b/17-Auriga-12B-Solvilla-Velmure-41-scaled.webp"
    ],
    "videoUrl": "https://youtube.com/embed/N7TrwQPQaRc"
  },
  {
    "id": "auriga-1",
    "name": "Auriga 1",
    "price": "€3,550,000",
    "category": "Villa",
    "beds": 4,
    "baths": 4,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/auriga-1/01-spca_visual_marbella_DJI_0028-Edit.webp",
    "location": "Nueva Andalucia",
    "description": [
      "Welcome to Auriga 1, an exceptional modern villa located in the heart of Nueva Andalucía, offering a seamless blend of style, luxury and comfort. Set on a generous plot of 1,038m², this beautifully crafted home boasts four spacious bedrooms and four elegant bathrooms, all designed with meticulous attention to detail. The interiors are flooded with natural light thanks to expansive floor-to-ceiling windows, highlighting the sophisticated neutral palette, high-end finishes, and open-plan living spaces that create a warm, inviting atmosphere.",
      "Step inside to discover a state-of-the-art kitchen, a refined dining area, and a cozy lounge, all framed by contemporary architectural lines and tasteful décor. The principal bedroom suite is a true sanctuary, featuring a spa-like en-suite and views to the landscaped gardens. A unique highlight is the seamless transition between indoor and outdoor living, with large sliding doors opening onto a private oasis complete with a spectacular pool, lush green garden, and stylish chill-out zones – perfect for entertaining or relaxing under the Mediterranean sun.",
      "Auriga 1 offers the ultimate lifestyle in one of Marbella’s most sought-after neighbourhoods, Nueva Andalucía – known for its prestigious golf courses, fine dining, luxury boutiques, and proximity to Puerto Banús. This property is a rare gem, combining modern design, privacy, and prime location to create the perfect home or investment opportunity on the Costa del Sol."
    ],
    "features": [
      "1 Guest Toilet",
      "2 Parking Slots",
      "4 Bathrooms",
      "4 Bedrooms",
      "Carport Garage",
      "Private Garden",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/auriga-1/01-spca_visual_marbella_DJI_0028-Edit.webp",
      "/assets/KLB Homes/Properties/auriga-1/02-spca_visual_marbella__MG_8062-Edit.webp",
      "/assets/KLB Homes/Properties/auriga-1/03-spca_visual_marbella__MG_8083-Edit.webp",
      "/assets/KLB Homes/Properties/auriga-1/04-spca_visual_marbella__MG_8126-Edit.webp",
      "/assets/KLB Homes/Properties/auriga-1/05-spca_visual_marbella__MG_8205-Edit.webp",
      "/assets/KLB Homes/Properties/auriga-1/06-spca_visual_marbella__MG_8227-Edit.webp",
      "/assets/KLB Homes/Properties/auriga-1/07-spca_visual_marbella__MG_8287-Edit.webp",
      "/assets/KLB Homes/Properties/auriga-1/08-spca_visual_marbella__MG_8380-Edit-1.webp",
      "/assets/KLB Homes/Properties/auriga-1/09-spca_visual_marbella__MG_8410-Edit.webp",
      "/assets/KLB Homes/Properties/auriga-1/10-spca_visual_marbella__MG_8437-Edit.webp",
      "/assets/KLB Homes/Properties/auriga-1/11-spca_visual_marbella__MG_8511-HDR-Edit.webp",
      "/assets/KLB Homes/Properties/auriga-1/12-spca_visual_marbella__MG_8643-Edit.webp",
      "/assets/KLB Homes/Properties/auriga-1/13-spca_visual_marbella__MG_8647-Edit.webp",
      "/assets/KLB Homes/Properties/auriga-1/14-spca_visual_marbella__MG_8703-Edit.webp",
      "/assets/KLB Homes/Properties/auriga-1/15-spca_visual_marbella_DJI_0009-Edit.webp",
      "/assets/KLB Homes/Properties/auriga-1/16-spca_visual_marbella_DJI_0028-Edit.webp"
    ],
    "videoUrl": "https://youtube.com/embed/nbhGJScT_-c"
  },
  {
    "id": "altos-de-puente-romano-13",
    "name": "Altos de Puente Romano 13",
    "price": "€2,150,000",
    "category": "Townhouse",
    "beds": 4,
    "baths": 3,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/altos-de-puente-romano-13/01-AltosDePR-58-of-58-scaled.webp",
    "location": "Monte Marbella Club",
    "description": [
      "Altos de Puente Romano 13 offers a prime opportunity to own a fully renovated 4-bedroom residence on Marbella’s prestigious Golden Mile. Spanning 217m² of interior space plus 134m²of terraces, this property delivers both comfort and functionality. The open-plan main floor connects a modern kitchen with high-end appliances to a spacious dining and living area, leading directly onto a private garden and covered terrace. Natural light, clean lines, and contemporary finishes define every space, creating a refined yet practical home.",
      "The upper levels feature generously sized bedrooms, including a master suite with a walk-in wardrobe and a designer en-suite bathroom. Multiple terraces provide options for outdoor dining, lounging, and entertaining, including a rooftop solarium complete with built-in BBQ, jacuzzi, and panoramic views of the surrounding greenery. A private garage ensures convenience and security, while the layout maximizes privacy for all residents.",
      "Located within a secure gated community, this property combines a prime location with exclusive amenities and low-maintenance luxury. Just minutes from the beach, Marbella Club,Puente Romano, and Puerto Banús, Altos de Puente Romano 13 is an ideal choice for both a permanent residence and a high-return investment on the Golden Mile."
    ],
    "features": [
      "1 Guest Toilet",
      "2 Parking Slots",
      "3 bathrooms",
      "4 Bedrooms",
      "Communal Garden",
      "Communal Swimming Pool",
      "Private Garage"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/01-AltosDePR-58-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/02-AltosDePR-1-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/03-AltosDePR-2-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/04-AltosDePR-4-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/05-AltosDePR-5-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/06-AltosDePR-11-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/07-AltosDePR-12-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/08-AltosDePR-15-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/09-AltosDePR-17-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/10-AltosDePR-19-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/11-AltosDePR-20-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/12-AltosDePR-26-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/13-AltosDePR-27-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/14-AltosDePR-33-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/15-AltosDePR-41-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/16-AltosDePR-43-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/17-AltosDePR-46-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/18-AltosDePR-48-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/19-AltosDePR-51-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/20-AltosDePR-54-of-58-scaled.webp",
      "/assets/KLB Homes/Properties/altos-de-puente-romano-13/21-AltosDePR-58-of-58-scaled.webp"
    ],
    "videoUrl": "https://youtube.com/embed/M0PeZ0ek78E"
  },
  {
    "id": "aloha-40",
    "name": "Aloha 40",
    "price": "€10,395,000",
    "category": "Villa",
    "beds": 6,
    "baths": 6,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/aloha-40/01-spca_visual_marbella__MG_8380-Edit-scaled.webp",
    "location": "Aloha",
    "description": [
      "Aloha 40 is a private oasis nestled in the luxurious Aloha area of Marbella's Golf Valley. This magnificent mansion sits in a prestigious gated community and boasts an enviable front-line position overlooking Aloha Golf Course. Its timeless exterior and top-of-the-line interior finishes strike the perfect balance between classic elegance and modern sophistication. The property strikes a perfect balance between classic elegance and modern sophistication, featuring a timeless exterior and top-of-the-line interior finishes. The colour pallet used to decorate the interior is soft and inviting, exuding a calming atmosphere that one expects when coming back home.",
      "The property comprises a main residence with 5 generously sized bedrooms, including a luxurious master suite with a dressing room. The bedrooms exude individuality with their distinct touches, yet their cohesiveness is a testament to the clever design decisions. There is a separate 1-bedroom guest house, perfect for accommodating staff or visitors. The allure of this property lies in its enchanting outdoor areas, where a lush green garden and spacious terraces offer the ideal setting for enjoying Marbella's perfect climate throughout the year. The verdant surroundings of the main house are adorned with greenery, which seamlessly blends with the other green areas of the property. This unique mansion boasts spectacular views and luxurious amenities, making it an unparalleled gem in the highly sought-after area of Marbella."
    ],
    "features": [
      "2 Parking Slots",
      "3 Guest Toilets",
      "6 Bathrooms",
      "6 Bedrooms",
      "Private Garage",
      "Private Garden",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/aloha-40/01-spca_visual_marbella__MG_8380-Edit-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/02-Aloha40NewSmall-1-of-7-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/03-Aloha40NewSmall-4-of-7-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/04-Aloha40NewSmall-7-of-7-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/05-spca_visual_marbella__MG_7438-Edit-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/06-spca_visual_marbella__MG_7454-Edit-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/07-spca_visual_marbella__MG_7517-Edit-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/08-spca_visual_marbella__MG_7804-Edit-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/09-spca_visual_marbella__MG_7827-Edit-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/10-spca_visual_marbella__MG_7845-Edit-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/11-spca_visual_marbella__MG_7941-Edit-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/12-spca_visual_marbella__MG_8022-Edit-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/13-spca_visual_marbella__MG_8038-Edit-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/14-spca_visual_marbella__MG_8138-Edit-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/15-spca_visual_marbella__MG_8201-Edit-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/16-spca_visual_marbella__MG_8210-Edit-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/17-spca_visual_marbella__MG_8213-Edit-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/18-spca_visual_marbella__MG_8246-Edit-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/19-spca_visual_marbella__MG_8380-Edit-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/20-spca_visual_marbella__MG_8395-Edit-scaled.webp",
      "/assets/KLB Homes/Properties/aloha-40/21-spca_visual_marbella_DJI_0020-Edit-scaled.webp"
    ],
    "videoUrl": "https://youtube.com/embed/iU3suw4G3MM"
  },
  {
    "id": "villa-sirius",
    "name": "Villa Sirius",
    "price": "€5,995,000",
    "category": "Villa",
    "beds": 5,
    "baths": 5,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/villa-sirius/01-spca_visual_marbella__MG_0800.webp",
    "location": "Las Brisas",
    "description": [
      "Villa Sirius is a modern villa located in the desirable area of Las Brisas, Nueva Andalucía. Theproperty features a beautifully landscaped garden with a private swimming pool and a sunkenchill-out area. Spacious terraces provide an outdoor kitchenette, dining area, and multiplelounge spaces, offering the perfect setting for entertaining or relaxing in the sun.",
      "The interior boasts an open-plan design with a bright living room, dining area, and a fullyequipped modern kitchen with high-end appliances. The villa offers five well-sized bedrooms,including a large master suite with a walk-in wardrobe and an en-suite bathroom with premiumfinishes. Floor-to-ceiling windows throughout the home create a seamless flow between indoorand outdoor living spaces.",
      "Additional amenities include an entertainment level with a billiard table, sauna, and a gym/yogaroom. Located in the heart of Nueva Andalucía, Villa Sirius is just minutes from top golf courses,international schools, shops, and restaurants, making it an excellent choice for both permanentliving and holiday stays."
    ],
    "features": [
      "2 Guest Toilets",
      "5 bathrooms",
      "5 Bedrooms",
      "Carport Garage",
      "Private Garden",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/villa-sirius/01-spca_visual_marbella__MG_0800.webp",
      "/assets/KLB Homes/Properties/villa-sirius/02-spca_visual_marbella__MG_0034-Edit.webp",
      "/assets/KLB Homes/Properties/villa-sirius/03-spca_visual_marbella__MG_0048-Edit.webp",
      "/assets/KLB Homes/Properties/villa-sirius/04-spca_visual_marbella__MG_0078-Edit.webp",
      "/assets/KLB Homes/Properties/villa-sirius/05-spca_visual_marbella__MG_0093-Edit.webp",
      "/assets/KLB Homes/Properties/villa-sirius/06-spca_visual_marbella__MG_0140-Edit.webp",
      "/assets/KLB Homes/Properties/villa-sirius/07-spca_visual_marbella__MG_0188-Edit.webp",
      "/assets/KLB Homes/Properties/villa-sirius/08-spca_visual_marbella__MG_0289-Edit.webp",
      "/assets/KLB Homes/Properties/villa-sirius/09-spca_visual_marbella__MG_0341-Edit.webp",
      "/assets/KLB Homes/Properties/villa-sirius/10-spca_visual_marbella__MG_0445-Edit.webp",
      "/assets/KLB Homes/Properties/villa-sirius/11-spca_visual_marbella__MG_0554-Edit.webp",
      "/assets/KLB Homes/Properties/villa-sirius/12-spca_visual_marbella__MG_0560-Edit.webp",
      "/assets/KLB Homes/Properties/villa-sirius/13-spca_visual_marbella__MG_0577-Edit.webp",
      "/assets/KLB Homes/Properties/villa-sirius/14-spca_visual_marbella__MG_0662-Edit.webp",
      "/assets/KLB Homes/Properties/villa-sirius/15-spca_visual_marbella__MG_0698.webp",
      "/assets/KLB Homes/Properties/villa-sirius/16-spca_visual_marbella__MG_0733-HDR-Pano.webp",
      "/assets/KLB Homes/Properties/villa-sirius/17-spca_visual_marbella__MG_0782.webp",
      "/assets/KLB Homes/Properties/villa-sirius/18-spca_visual_marbella__MG_0800.webp"
    ]
  },
  {
    "id": "villa-luma",
    "name": "Villa Luma",
    "price": "€4,950,000",
    "category": "Villa",
    "beds": 5,
    "baths": 5,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/villa-luma/01-9-scaled.webp",
    "location": "Las Lomas",
    "description": [
      "Welcome to Villa Luma, a beautifully reimagined Mediterranean residence located in the prestigious enclave of Las Lomas de Nueva Andalucía. South-facing and drenched in natural light, this home offers some of the most breathtaking sea views in the entire Nueva Andalucía area. Set across three levels, the home features five bedrooms, one currently serving as an office, and is designed to blend elegant indoor living with expansive outdoor enjoyment.",
      "The villa's interior is defined by soft neutral tones, high-end materials, and generous spaces. The heart of the home is the open-plan living area, seamlessly connected to a sleek modern kitchen and formal dining space, all leading out to large terraces perfect for entertaining or simply soaking in the views. The master suite occupies the top floor, offering ultimate privacy along with a spacious walk-in wardrobe and serene vistas that stretch out to the Mediterranean Sea.The lower level includes a cozy lounge area ideal as an entertainment space or TV room.",
      "Outside, Villa Luma excels with its meticulous landscaping, multiple lounging zones, and a stunning infinity pool that visually merges with the horizon. While there is no garage or lift, the property comfortably accommodates up to four cars within the gated area, with additional parking for three more vehicles just outside the upper entrance. With its unbeatable orientation, refined style, and rare coastal views, Villa Luma represents a unique opportunity to own a"
    ],
    "features": [
      "4 Parking Slots",
      "5 bathrooms",
      "5 Bedrooms",
      "Private Garage",
      "Private Garden",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/villa-luma/01-9-scaled.webp",
      "/assets/KLB Homes/Properties/villa-luma/02-1-scaled.webp",
      "/assets/KLB Homes/Properties/villa-luma/03-2-scaled.webp",
      "/assets/KLB Homes/Properties/villa-luma/04-7-scaled.webp",
      "/assets/KLB Homes/Properties/villa-luma/05-9-scaled.webp",
      "/assets/KLB Homes/Properties/villa-luma/06-13-scaled.webp",
      "/assets/KLB Homes/Properties/villa-luma/07-15-scaled.webp",
      "/assets/KLB Homes/Properties/villa-luma/08-25-scaled.webp",
      "/assets/KLB Homes/Properties/villa-luma/09-27-scaled.webp",
      "/assets/KLB Homes/Properties/villa-luma/10-26-scaled.webp",
      "/assets/KLB Homes/Properties/villa-luma/11-28-scaled.webp",
      "/assets/KLB Homes/Properties/villa-luma/12-29-scaled.webp",
      "/assets/KLB Homes/Properties/villa-luma/13-33-scaled.webp",
      "/assets/KLB Homes/Properties/villa-luma/14-40-scaled.webp",
      "/assets/KLB Homes/Properties/villa-luma/15-43-scaled.webp",
      "/assets/KLB Homes/Properties/villa-luma/16-51-scaled.webp"
    ]
  },
  {
    "id": "las-palmeras",
    "name": "Las Palmeras",
    "price": "€8,300,000",
    "category": "Villa",
    "beds": 5,
    "baths": 8,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/las-palmeras/01-Las-Palmeras-Exteriors-10mb-28-scaled.webp",
    "location": "Las Brisas",
    "description": [
      "Villa Las Palmeras is nestled within the exclusive enclave of Las Brisas in Nueva Andalucia. This brand-new epitomises sophistication and comfort. Spanning 983m2, this architectural marvel is poised majestically on an expansive 2560m2 plot, , enveloped by a manicured garden and offering plenty of privacy.",
      "Spread across 3 floors, Villa Las Palmeras boasts an incredible lower level, exceeding 300 m2with a 3-metre ceiling. This expansive space promises endless possibilities for entertainment and relaxation, featuring a private garage, a driveway complete with a car turning plate and a lavish spa offering a sauna and steam room. There is also a state-of-the-art indoor gym available for residents to enjoy, as well as a home cinema.",
      "Embracing the essence of Andalusian charm, Villa Las Palmeras also offers timeless elements such as a charming patio, an outdoor master shower boasting panoramic views of the surrounding golf course. Also, there is not one, but 3 distinct TV rooms available."
    ],
    "features": [
      "5 Bedrooms",
      "8 Bathrooms",
      "Private Garage",
      "Private Garden",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/las-palmeras/01-Las-Palmeras-Exteriors-10mb-28-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/02-Las-Palmeras-Exteriors-10mb-3-1-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/03-Las-Palmeras-Exteriors-10mb-3-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/04-Las-Palmeras-Exteriors-10mb-4-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/05-Las-Palmeras-Exteriors-10mb-5-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/06-Las-Palmeras-Exteriors-10mb-8-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/07-Las-Palmeras-Exteriors-10mb-10-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/08-Las-Palmeras-Exteriors-10mb-13-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/09-Las-Palmeras-Exteriors-10mb-14-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/10-Las-Palmeras-Exteriors-10mb-15-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/11-Las-Palmeras-Exteriors-10mb-21-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/12-Las-Palmeras-Exteriors-10mb-23-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/13-Las-Palmeras-Exteriors-10mb-24-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/14-Las-Palmeras-Exteriors-10mb-28-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/15-Las-Palmeras-Exteriors-10mb-32-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/16-Villas-Las-Palmeras-10mb-2-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/17-Villas-Las-Palmeras-10mb-4-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/18-Villas-Las-Palmeras-10mb-11-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/19-Villas-Las-Palmeras-10mb-23-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/20-Villas-Las-Palmeras-10mb-26-scaled.webp",
      "/assets/KLB Homes/Properties/las-palmeras/21-Villas-Las-Palmeras-10mb-28-scaled.webp"
    ],
    "videoUrl": "https://youtube.com/embed/W-QA7gh_ykg"
  },
  {
    "id": "villa-la-serena",
    "name": "Villa La Serena",
    "price": "€3,895,000",
    "category": "Villa",
    "beds": 5,
    "baths": 5,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/villa-la-serena/01-LucianoElviriaPicutresSmall-28-scaled.webp",
    "location": "El Rosario",
    "description": [
      "Set on an expansive, impeccably manicured plot in the sought-after enclave of El Rosario, this villa offers an exceptional sense of space, privacy and tranquility. Its single-level design blendsAndalusian charm with contemporary elegance, framed by sea and mountain views. The exterior is defined by lush green grass, a private swimming pool, an enclosed two-car garage, and generous terraces that seamlessly connect indoor and outdoor living, perfect for enjoying the Mediterranean climate year-round.",
      "Inside, the villa showcases a refined minimalist aesthetic, where natural light pours through large floor-to-ceiling windows and skylights, illuminating every corner of the home. Soft neutral tones, high-quality finishes, and thoughtfully curated materials create an atmosphere of calm sophistication. The open-concept living areas flow effortlessly between the lounge, dining space and designer kitchen, while the bedrooms enjoy access to the gardens or terraces.",
      "The bedrooms and bathrooms continue the theme of understated luxury, offering serene retreats with garden and sea views. Spa-inspired bathrooms feature elegant fixtures, warm textures, and modern walk-in showers or a sculptural freestanding bathtub. This villa represents a rare opportunity to own a contemporary sanctuary on an extraordinary plot, where design, comfort, and nature converge in one of Marbella’s most desirable residential areas."
    ],
    "features": [
      "5 bathrooms",
      "5 Bedrooms",
      "5 Guest Toilets",
      "Private Garage",
      "Private Garden",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/villa-la-serena/01-LucianoElviriaPicutresSmall-28-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/02-LucianoElviriaPicutresSmall-1-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/03-LucianoElviriaPicutresSmall-2-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/04-LucianoElviriaPicutresSmall-5-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/05-LucianoElviriaPicutresSmall-8-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/06-LucianoElviriaPicutresSmall-10-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/07-LucianoElviriaPicutresSmall-11-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/08-LucianoElviriaPicutresSmall-16-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/09-LucianoElviriaPicutresSmall-20-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/10-LucianoElviriaPicutresSmall-22-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/11-LucianoElviriaPicutresSmall-23-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/12-LucianoElviriaPicutresSmall-24-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/13-LucianoElviriaPicutresSmall-26-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/14-LucianoElviriaPicutresSmall-27-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/15-LucianoElviriaPicutresSmall-28-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/16-LucianoElviriaPicutresSmall-30-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/17-LucianoElviriaPicutresSmall-31-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/18-LucianoElviriaPicutresSmall-32-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/19-LucianoElviriaPicutresSmall-33-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/20-LucianoElviriaPicutresSmall-35-scaled.webp",
      "/assets/KLB Homes/Properties/villa-la-serena/21-LucianoElviriaPicutresSmall-36-scaled.webp"
    ]
  },
  {
    "id": "orion-53",
    "name": "Orion 53",
    "price": "€4,995,000",
    "category": "Villa",
    "beds": 5,
    "baths": 5,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/orion-53/01-Orion-53_19-scaled.webp",
    "location": "Los Naranjos",
    "description": [
      "A front line golf villa in Nueva Andalucía with 5 bedrooms, 5 bathrooms, a multi level layout, and standout features including retractable floor to ceiling windows, a heated infinity pool, cinema room, and advanced eco technology.",
      "Set directly on the fairway, the villa is built around its views, with nothing interrupting them. Glass walls slide away completely, drawing the outdoors into the living space and allowing each area to open with intent. The main level is structured yet fluid, with an open plan living area centred around a floating fireplace, a kitchen with a bar designed for informal use, and a dining space that extends naturally onto the terrace. Outside, the heated infinity pool runs parallel to the views, while a rising wooden solarium and pergola with outdoor kitchen create defined zones without closing the space. A separate garden lounge and a discreetly positioned Jacuzzi offer quieter areas without disconnecting from the overall layout.",
      "The interior approach is controlled and consistent. Polished white cement floors, matching walls, and high ceilings with timber beams create volume while keeping the aesthetic restrained.Light is constant throughout, with carefully positioned windows, including in the bathrooms, framing greenery while maintaining privacy. The main floor also includes three en suite bedrooms and a principal suite with a freestanding bath, walk in shower, and a glass enclosed dressing room.",
      "The lower level adds further functionality with a cinema room, an additional bedroom with its own dressing area and glass enclosed bathroom, a laundry room, and guest facilities. Every space serves a purpose without excess.",
      "Nueva Andalucía continues to hold its position as one of Marbella’s most established residential areas, offering immediate access to golf courses, proximity to Puerto Banús, and a practical balance between privacy and convenience. International schools, dining, and essential services are all within easy reach, making it a straightforward choice for those who want accessibility without compromise.",
      "For a buyer who values clarity in design, strong positioning, and a home that functions as well for daily living as it does for hosting, this property deserves attention."
    ],
    "features": [
      "2 Parking Slots",
      "5 bathrooms",
      "5 Bedrooms",
      "Private Garage",
      "Private Garden",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/orion-53/01-Orion-53_19-scaled.webp",
      "/assets/KLB Homes/Properties/orion-53/02-Orion-53_1-scaled.webp",
      "/assets/KLB Homes/Properties/orion-53/03-Orion-53_2-scaled.webp",
      "/assets/KLB Homes/Properties/orion-53/04-Orion-53_3-scaled.webp",
      "/assets/KLB Homes/Properties/orion-53/05-Orion-53_5-scaled.webp",
      "/assets/KLB Homes/Properties/orion-53/06-Orion-53_11-scaled.webp",
      "/assets/KLB Homes/Properties/orion-53/07-Orion-53_12-scaled.webp",
      "/assets/KLB Homes/Properties/orion-53/08-Orion-53_13-scaled.webp",
      "/assets/KLB Homes/Properties/orion-53/09-Orion-53_19-scaled.webp",
      "/assets/KLB Homes/Properties/orion-53/10-Orion-53_25-scaled.webp",
      "/assets/KLB Homes/Properties/orion-53/11-Orion-53_32-scaled.webp"
    ]
  },
  {
    "id": "oasis-club-10",
    "name": "Oasis Club 10",
    "price": "€5,995,000",
    "category": "Semi Detached Villa",
    "beds": 3,
    "baths": 3,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/oasis-club-10/01-72-of-79-scaled.webp",
    "location": "Marbella Golden Mile",
    "description": [
      "Discover this exceptional semi-detached home in the exclusive Oasis Club, one of the most desirable beach front communities on Marbella’s Golden Mile. Recently renovated with Marbella Club–inspired design, the property blends timeless elegance with modern comfort.",
      "The entrance level welcomes you with natural light and an open-plan layout connecting the living room, dining area, and social kitchen. Large sliding doors lead out to a private garden designed for outdoor living, featuring a heated pool, summer kitchen, and stylish lounge and dining areas – your own secluded retreat by the sea. A guest suite with en suite bathroom and a guest toilet complete this level.",
      "Upstairs you’ll find two more bedroom suites, both with panoramic sea views. The principal suite offers a Mediterranean ambiance with en suite bathroom and a chic walk-in closet, while the second suite opens onto a spacious terrace with lounge and wet bar – the perfect setting to enjoy Marbella’s sunsets. With direct access from the community to the beachfront promenade, you can stroll to Puente Romano, Marbella Club, or even Puerto Banús. Fine dining, beach clubs, and world-class amenities are all within walking distance. This property combines prime location, refined design, and true beach front living – a rare opportunity on the Golden Mile."
    ],
    "features": [
      "1 Guest Toilet",
      "3 bathrooms",
      "3 Bedrooms",
      "Communal Garden",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/oasis-club-10/01-72-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/02-2-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/03-6-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/04-9-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/05-14-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/06-16-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/07-21-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/08-27-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/09-29-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/10-30-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/11-31-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/12-35-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/13-37-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/14-44-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/15-46-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/16-48-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/17-53-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/18-56-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/19-72-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/20-73-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/21-78-of-79-scaled.webp",
      "/assets/KLB Homes/Properties/oasis-club-10/22-2-1-of-1-scaled.webp"
    ],
    "videoUrl": "https://youtube.com/embed/SWZIHFP4sVI"
  },
  {
    "id": "nagueles-19",
    "name": "Nagüeles 19",
    "price": "€4,490,000",
    "category": "Villa",
    "beds": 5,
    "baths": 5,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/nagueles-19/01-imagen_02.webp",
    "location": "Nagüeles",
    "description": [
      "Situated on Marbella’s prestigious Golden Mile, this beautifully renovated villa offers luxury, privacy, and sustainability in one of the area’s most sought-after locations. Thoughtfully designed, the home features high-quality finishes, advanced installations, and a seamless indoor-outdoor flow. The open-plan living area, bathed in natural light, boasts a cosy fireplace and direct access to a spacious terrace with stunning south-western sea views. The elegant kitchen, complete with a central island and premium finishes, perfectly blends style and practicality.",
      "The villa includes five beautifully appointed bedrooms, each designed with neutral tones and luxurious finishes. Outdoors, the property showcases landscaped gardens, a private swimming pool, and multiple chill-out areas, all oriented to capture Marbella’s stunning sunsets.Sustainability features such as solar energy systems and a septic tank with grey water recycling for garden irrigation further enhance its appeal.",
      "Located close to Marbella’s centre and the renowned Swan School, the villa ensures both convenience and security with 12-hour patrols and additional measures approved for enhanced safety. The property also offers approximately 40 m² of unused gross construction area, providing potential for customisation or expansion. Combining modern comfort, environmental consciousness, and prime positioning, this is a truly exceptional home."
    ],
    "features": [
      "1 Guest Toilet",
      "4 En-Suite Baths",
      "5 bathrooms",
      "5 Bedrooms",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/nagueles-19/01-imagen_02.webp",
      "/assets/KLB Homes/Properties/nagueles-19/02-imagen_00.webp",
      "/assets/KLB Homes/Properties/nagueles-19/03-imagen_02.webp",
      "/assets/KLB Homes/Properties/nagueles-19/04-imagen_04-scaled.webp",
      "/assets/KLB Homes/Properties/nagueles-19/05-imagen_09-scaled.webp",
      "/assets/KLB Homes/Properties/nagueles-19/06-imagen_10-scaled.webp",
      "/assets/KLB Homes/Properties/nagueles-19/07-imagen_11-scaled.webp",
      "/assets/KLB Homes/Properties/nagueles-19/08-imagen_12-scaled.webp",
      "/assets/KLB Homes/Properties/nagueles-19/09-imagen_13.webp",
      "/assets/KLB Homes/Properties/nagueles-19/10-imagen_14.webp",
      "/assets/KLB Homes/Properties/nagueles-19/11-view_01.webp",
      "/assets/KLB Homes/Properties/nagueles-19/12-view_02.webp",
      "/assets/KLB Homes/Properties/nagueles-19/13-view_05.webp",
      "/assets/KLB Homes/Properties/nagueles-19/14-view_06.webp",
      "/assets/KLB Homes/Properties/nagueles-19/15-view_07.webp"
    ]
  },
  {
    "id": "mirador-4",
    "name": "Mirador 4",
    "price": "€1,950,000",
    "category": "Townhouse",
    "beds": 4,
    "baths": 4,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/mirador-4/01-LaQuintaSeba-3-scaled.webp",
    "location": "La Quinta",
    "description": [
      "This exceptional 4-bedroom, 4-bathroom townhouse has been meticulously renovated to thehighest standards and offers an unbeatable lifestyle in the sought-after area of La Quinta,Benahavís. Set frontline to the prestigious La Quinta Golf Course, the property enjoysbreathtaking golf views, elevated sea vistas, and the serene beauty of the surroundingmountains and countryside.",
      "Spread across three levels, this elegant home boasts a generous built area of 198 m² and over82 m² of terraces, offering multiple outdoor spaces to relax and entertain. With four terracesand a private garden area, you can soak in the sun from morning to evening while enjoyingpanoramic views.",
      "The south-east orientation ensures abundant natural light throughout the home. Inside, theopen-plan layout features a stylish, fully fitted kitchen, modern finishes, fitted wardrobes, a cozyfireplace, and high-quality furnishings—all included in the sale. The property also offerspractical features such as air conditioning, a storage room, and a guest toilet.",
      "Enjoy access to a beautifully maintained communal pool and the convenience of a carport forone vehicle. Located just moments from La Quinta Golf and a short drive to Marbella andPuerto Banús, this is an ideal home for those seeking luxury, comfort, and convenience in oneof Costa del Sol’s most exclusive areas."
    ],
    "features": [
      "3 En-suite Baths",
      "3 Guest Toilets",
      "4 Bathrooms",
      "4 Bedrooms",
      "Carport Garage",
      "Communal Swimming Pool",
      "Private Garden"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/mirador-4/01-LaQuintaSeba-3-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/02-LaQuintaSeba-1-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/03-LaQuintaSeba-2-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/04-LaQuintaSeba-3-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/05-LaQuintaSeba-4-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/06-LaQuintaSeba-5-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/07-LaQuintaSeba-8-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/08-LaQuintaSeba-9-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/09-LaQuintaSeba-15-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/10-LaQuintaSeba-16-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/11-LaQuintaSeba-17-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/12-LaQuintaSeba-18-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/13-LaQuintaSeba-20-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/14-LaQuintaSeba-21-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/15-LaQuintaSeba-23-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/16-LaQuintaSeba-24-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/17-LaQuintaSeba-29-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/18-LaQuintaSeba-32-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/19-LaQuintaSeba-33-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/20-LaQuintaSeba-36-scaled.webp",
      "/assets/KLB Homes/Properties/mirador-4/21-LaQuintaSeba-38-scaled.webp"
    ]
  },
  {
    "id": "la-trinidad-luxe",
    "name": "La Trinidad Luxe",
    "price": "€5,425,000",
    "category": "Apartment",
    "beds": 4,
    "baths": 4,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/la-trinidad-luxe/01-RimvyTrinidadSmallDrone-5-of-5-scaled.webp",
    "location": "La Trinidad de Marbella",
    "description": [
      "Located within the exclusive gated community of La Trinidad, this impressive double apartment offers the perfect blend of space, style, and sophistication in one of Marbella’s most coveted addresses. Just minutes from Puente Romano, the Marbella Club, and the beach, it enjoys a prime position on the Golden Mile, surrounded by lush gardens and luxury amenities.",
      "Spanning 344.5 m² of interior space with an additional 63.5 m² of terraces, the residence boasts four spacious bedrooms, each with ensuite bathrooms, ensuring privacy and comfort for every family member or guest. The interiors are designed with refined modern elegance — an open- plan living area connects seamlessly to generous terraces, creating an ideal setting for relaxing or entertaining while enjoying the tranquil views of the community’s gardens.",
      "The fully equipped contemporary kitchen complements the apartment’s sophisticated design, featuring sleek finishes and top-quality appliances. Every detail, from the ambient lighting to the high-end furnishings, has been curated to provide a sense of effortless luxury.",
      "Residents of La Trinidad enjoy access to beautifully landscaped communal gardens, multiple swimming pools, and a private clubhouse, all within a secure and peaceful environment. This property represents a rare opportunity to own a spacious, turnkey home in one of Marbella’s most desirable gated communities."
    ],
    "features": [
      "1 Guest Toilet",
      "4 Bathrooms",
      "4 Bedrooms",
      "Garage"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/la-trinidad-luxe/01-RimvyTrinidadSmallDrone-5-of-5-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/02-RimvyTrinidadSmall-1-of-39-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/03-RimvyTrinidadSmall-2-of-39-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/04-RimvyTrinidadSmall-4-of-39-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/05-RimvyTrinidadSmall-5-of-39-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/06-RimvyTrinidadSmall-8-of-39-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/07-RimvyTrinidadSmall-9-of-39-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/08-RimvyTrinidadSmall-12-of-39-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/09-RimvyTrinidadSmall-13-of-39-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/10-RimvyTrinidadSmall-14-of-39-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/11-RimvyTrinidadSmall-17-of-39-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/12-RimvyTrinidadSmall-22-of-39-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/13-RimvyTrinidadSmall-23-of-39-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/14-RimvyTrinidadSmall-25-of-39-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/15-RimvyTrinidadSmall-28-of-39-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/16-RimvyTrinidadSmall-30-of-39-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/17-RimvyTrinidadSmall-31-of-39-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/18-RimvyTrinidadSmall-37-of-39-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/19-RimvyTrinidadSmall-39-of-39-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/20-RimvyTrinidadSmallDrone-1-of-5-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/21-RimvyTrinidadSmallDrone-2-of-5-scaled.webp",
      "/assets/KLB Homes/Properties/la-trinidad-luxe/22-RimvyTrinidadSmallDrone-5-of-5-scaled.webp"
    ],
    "videoUrl": "https://youtube.com/embed/aEKei8-JDao"
  },
  {
    "id": "epic-13",
    "name": "Epic 13",
    "price": "€6,195,000",
    "category": "Duplex",
    "beds": 5,
    "baths": 5,
    "status": "For Sale",
    "image": "/assets/KLB Homes/Properties/epic-13/01-Epic13_20-scaled.webp",
    "location": "Marbella",
    "description": [
      "This bespoke duplex ground floor apartment showcases five spacious en-suite bedrooms, spread across two levels for optimal privacy and flow. Three bedrooms sit on the main floor, while two are located on the lower level, which also has a separate entrance from the garage.The open-concept living area connects to a sleek kitchen and flows out to a generous terrace by Minotti, complete with a fully equipped outdoor kitchen, heated lounge zone, and dining area. Expansive floor-to-ceiling windows frame uninterrupted views of the Mediterranean and La Concha, with added privacy ensured by automatic curtains.",
      "The home is finished to exacting standards, featuring FENDI-designed cabinetry, Travertine marble bathrooms, custom wood panelling, and a curated mix of materials including Carrara marble, natural stone, onyx, and premium leather. Interiors by GC Studio incorporate pieces from top-tier Italian brands such as Gallotti & Radice and Giorgetti. The lower floor includes a large entertainment lounge with Bang & Olufsen home cinema system, custom cabinetry, and statement marble furniture, alongside a spacious utility area, three covered parking bays withEV charging, and additional storage. This is more than a residence—it’s a statement of style anda gateway to the Epic lifestyle.Situated in Marbella’s prestigious Golden Mile, EPIC Marbella offers an unmatched lifestyle within a gated community of refined residences designed and furnished by FENDI CASA. Just minutes from Marbella Club, Puente Romano, and the beach, this development delivers resort-style living with a full suite of high-end amenities. Residents enjoy 24-hour concierge service, advanced security, and an extensive social and wellness hub that includes a luxury spa, indoor pool, kids’ club, and an indoor sports centre equipped with basketball, Techno gym, boxing, golf simulator, yoga, and Pilates. Outdoor facilities include two tennis courts, two paddle courts, a pickleball court, and multiple pools—some heated and others tailored for either training or relaxation."
    ],
    "features": [
      "5 bathrooms",
      "5 Bedrooms"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/epic-13/01-Epic13_20-scaled.webp",
      "/assets/KLB Homes/Properties/epic-13/02-Epic13_1-scaled.webp",
      "/assets/KLB Homes/Properties/epic-13/03-Epic13_2-scaled.webp",
      "/assets/KLB Homes/Properties/epic-13/04-Epic13_6-scaled.webp",
      "/assets/KLB Homes/Properties/epic-13/05-Epic13_7-scaled.webp",
      "/assets/KLB Homes/Properties/epic-13/06-Epic13_8-scaled.webp",
      "/assets/KLB Homes/Properties/epic-13/07-Epic13_9-scaled.webp",
      "/assets/KLB Homes/Properties/epic-13/08-Epic13_10-scaled.webp",
      "/assets/KLB Homes/Properties/epic-13/09-Epic13_11-scaled.webp",
      "/assets/KLB Homes/Properties/epic-13/10-Epic13_12-scaled.webp",
      "/assets/KLB Homes/Properties/epic-13/11-Epic13_13-scaled.webp",
      "/assets/KLB Homes/Properties/epic-13/12-Epic13_19-scaled.webp",
      "/assets/KLB Homes/Properties/epic-13/13-Epic13_20-scaled.webp",
      "/assets/KLB Homes/Properties/epic-13/14-Epic13_21-scaled.webp",
      "/assets/KLB Homes/Properties/epic-13/15-Epic13_22-scaled.webp"
    ]
  },
  {
    "id": "cerquilla-59",
    "name": "Cerquilla 59",
    "price": "€7,950,000",
    "category": "Villa",
    "beds": 7,
    "baths": 6,
    "status": "For Rent",
    "image": "/assets/KLB Homes/Properties/cerquilla-59/01-Cerquilla59-41-scaled.webp",
    "location": "La Cerquilla",
    "description": [
      "Introducing Cerquilla 59, a stunning contemporary villa located in the prestigious neighbourhood of La Cerquilla, nestled in the heart of Nueva Andalucía’s Golf Valley. This exclusive 7-bedroom residence sits on a generous 2,548m² plot, offering unmatched privacy and panoramic views of Marbella’s iconic La Concha mountain and the Mediterranean coastline. Its prime location places it within close proximity to top golf courses, international schools, upscale restaurants, and the vibrant Puerto Banús marina, making it an exceptional investment and lifestyle choice.",
      "Step inside to discover expansive interiors thoughtfully designed with natural textures and rich finishes. The villa boasts soaring ceilings, elegant lighting features, and a harmonious flow between indoor and outdoor living. The main living areas are spacious and inviting, adorned with custom furnishings, organic materials, and curated decor elements such as woven wall art and hand-crafted ceramics. The upper floor showcases a tranquil gallery-style corridor overlooking the main level, with direct access to bedrooms that enjoy sweeping views and private terraces.",
      "At the heart of the home is a modern kitchen outfitted with premium appliances, sleek cabinetry, and a large glass dining area framed by floor-to-ceiling windows. The seamless connection to the outdoor living spaces includes an impressive pool with a jacuzzi, Balinese- style sun loungers, and a covered dining terrace with a fireplace and barbecue setup—perfect for entertaining. What's best is the private pristine tennis court at the foot of the garden, ideal for residents to use all year round. Cerquilla 59 epitomises contemporary luxury in a Mediterranean setting, offering an unparalleled blend of comfort, sophistication, and location."
    ],
    "features": [
      "6 Bathrooms",
      "7 Bedrooms",
      "Swimming Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/cerquilla-59/01-Cerquilla59-41-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/02-Cerquilla59-1-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/03-Cerquilla59-3-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/04-Cerquilla59-4-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/05-Cerquilla59-6-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/06-Cerquilla59-7-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/07-Cerquilla59-10-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/08-Cerquilla59-11-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/09-Cerquilla59-13-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/10-Cerquilla59-15-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/11-Cerquilla59-18-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/12-Cerquilla59-19-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/13-Cerquilla59-22-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/14-Cerquilla59-26-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/15-Cerquilla59-27-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/16-Cerquilla59-35-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/17-Cerquilla59-36-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/18-Cerquilla59-40-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/19-Cerquilla59-41-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/20-Cerquilla59-43-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/21-Cerquilla59-45-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/22-Cerquilla59-46-scaled.webp",
      "/assets/KLB Homes/Properties/cerquilla-59/23-Cerquilla59-49-scaled.webp"
    ],
    "videoUrl": "https://youtube.com/embed/-EBuBmqYDfY"
  },
  {
    "id": "the-hills-1",
    "name": "The Hills 1",
    "price": "€13,800,000",
    "category": "Villa",
    "beds": 6,
    "baths": 6,
    "status": "N/A",
    "image": "/assets/KLB Homes/Properties/the-hills-1/01-spca_visual_marbella_V9A2687-scaled.webp",
    "location": "La Quinta",
    "description": [
      "The Hills 1 is an architectural masterpiece designed by the esteemed Tobal, located in the exclusive gated community of The Hills in La Quinta. Nestled at the end of the development, the villa offers unmatched privacy and breathtaking panoramic views of the Mediterranean coastline. Set on an expansive plot of over 1,700m², this property represents the pinnacle of modern luxury living, blending innovative design with the tranquillity of its surroundings.",
      "Every detail of The Hills 1 has been meticulously crafted, from its open-plan interior spaces to its serene outdoor living areas. The villa welcomes you with expansive windows that frame stunning views and flood the home with natural light. The interiors, styled by Aalto Exclusive Design, balance neutral tones with bright accents to create an atmosphere of sophistication and comfort. The ground floor features four beautifully appointed bedrooms, including a master suite with a walk-in wardrobe and en-suite bathroom, while the lower level offers a gym, spa, and an entertainment area complete with a billiard table, poker table, and home cinema.",
      "The outdoor areas are equally impressive, featuring a manicured garden, a private pool, and a jacuzzi that invite relaxation. Thoughtfully designed to ensure privacy and seamless integration with the interior living spaces, these outdoor features provide the perfect setting for enjoying the Mediterranean lifestyle. Conveniently situated in Benahavis, The Hills 1 offers easy access to nearby destinations such as San Pedro de Alcántara, Puerto Banús, and Nueva Andalucía, making it an ideal retreat for those seeking luxury, privacy, and convenience."
    ],
    "features": [
      "3 Guest Toilets",
      "3 Parking Slots",
      "6 Bathrooms",
      "6 Bedrooms",
      "Private Garage",
      "Private Garden",
      "Private Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/the-hills-1/01-spca_visual_marbella_V9A2687-scaled.webp",
      "/assets/KLB Homes/Properties/the-hills-1/02-spca_visual_marbella_V9A2307-scaled.webp",
      "/assets/KLB Homes/Properties/the-hills-1/03-spca_visual_marbella_V9A2687-scaled.webp",
      "/assets/KLB Homes/Properties/the-hills-1/04-spca_visual_marbellaDJI_0071-scaled.webp",
      "/assets/KLB Homes/Properties/the-hills-1/05-spca_visual_marbella_V9A2408-scaled.webp",
      "/assets/KLB Homes/Properties/the-hills-1/06-spca_visual_marbella_V9A2280-scaled.webp",
      "/assets/KLB Homes/Properties/the-hills-1/07-spca_visual_marbella_V9A1861-scaled.webp",
      "/assets/KLB Homes/Properties/the-hills-1/08-spca_visual_marbella_V9A1609-scaled.webp",
      "/assets/KLB Homes/Properties/the-hills-1/09-spca_visual_marbella_V9A1566-scaled.webp",
      "/assets/KLB Homes/Properties/the-hills-1/10-spca_visual_marbella_V9A1417-scaled.webp",
      "/assets/KLB Homes/Properties/the-hills-1/11-spca_visual_marbella_V9A1492-scaled.webp"
    ]
  },
  {
    "id": "buenavista-ph",
    "name": "Buenavista PH",
    "price": "€1,495,000",
    "category": "Penthouse",
    "beds": 3,
    "baths": 2,
    "status": "N/A",
    "image": "/assets/KLB Homes/Properties/buenavista-ph/01-WebSize_LaQuinta_Michel-30-scaled.webp",
    "location": "Benahavís",
    "description": [
      "Discover the epitome of luxury living with this exceptional penthouse in Buenavista, La Quinta, perfectly situated to enjoy panoramic views of the sea, mountains and surrounding golf greens. This prime residence features terraces designed for all-season use, ideal for alfresco dining or relaxing in style.",
      "Inside, the penthouse showcases a seamless open-plan layout that blends modern elegance with functional design. The living space flows effortlessly into a state-of-the-art kitchen equipped with top-tier appliances, ample storage, and generous counter space to elevate both daily living and entertaining. Offering 3 stunning bedrooms, with the master suite standing out as a true sanctuary, complete with awe-inspiring views and an impeccable master bathroom.",
      "Set within a gated community, residents benefit from access to communal facilities and a location that provides convenient access to a wealth of amenities and nearby attractions. This remarkable penthouse embodies sophistication and offers a lifestyle where comfort meets the stunning natural beauty of La Quinta."
    ],
    "features": [
      "1 En-suite Baths",
      "2 Bathrooms",
      "2 Parking Slots",
      "3 Bedrooms",
      "Communal Garden",
      "Communal Swimming Pool",
      "Private Garage"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/buenavista-ph/01-WebSize_LaQuinta_Michel-30-scaled.webp",
      "/assets/KLB Homes/Properties/buenavista-ph/02-WebSize_LaQuinta_Michel-30-scaled.webp",
      "/assets/KLB Homes/Properties/buenavista-ph/03-WebSize_LaQuinta_Michel-19-scaled.webp",
      "/assets/KLB Homes/Properties/buenavista-ph/04-WebSize_LaQuinta_Michel-17-scaled.webp",
      "/assets/KLB Homes/Properties/buenavista-ph/05-WebSize_LaQuinta_Michel-12-scaled.webp",
      "/assets/KLB Homes/Properties/buenavista-ph/06-WebSize_LaQuinta_Michel-11-scaled.webp",
      "/assets/KLB Homes/Properties/buenavista-ph/07-WebSize_LaQuinta_Michel-8-scaled.webp",
      "/assets/KLB Homes/Properties/buenavista-ph/08-WebSize_LaQuinta_Michel-6-scaled.webp",
      "/assets/KLB Homes/Properties/buenavista-ph/09-WebSize_LaQuinta_Michel-4-scaled.webp",
      "/assets/KLB Homes/Properties/buenavista-ph/10-WebSize_LaQuinta_Michel-2-scaled.webp",
      "/assets/KLB Homes/Properties/buenavista-ph/11-WebSize_LaQuinta_Michel-1-1-scaled.webp"
    ],
    "videoUrl": "https://youtube.com/embed/b0rPuKApbBE?si=wydUho7-wuUkPrFn"
  },
  {
    "id": "banus-1",
    "name": "Banus 1",
    "price": "€2,950,000",
    "category": "Apartment",
    "beds": 3,
    "baths": 3,
    "status": "N/A",
    "image": "/assets/KLB Homes/Properties/banus-1/01-spca_visual_marbella__MG_8750-Edit.webp",
    "location": "Puerto Banús",
    "description": [
      "A sleek contemporary apartment located within the the famous Puerto Banus Marina, showcasing jetliner panoramic views to the Mediterranean Sea and harbour. Experience luxurious coastal living in Puerto Banus, with endless designer stores, avant-garde restaurants and luxury leisure activities to enjoy under the spectacular Marbella climate. Recently renovated with the highest qualities and complemented with refined contemporary design, each division has been maximised to its full potential and ensures that the distinguishable features are the magnificent panoramic sea and port views.",
      "Throughout the property discover top-of-the-line features such as an open plan living with almond wood panelling incorporated LED lighting, leading directly to the exterior terrace with frontline views towards the port, a sleek fitted kitchen complete with top-level Gaggenau appliances and 3 opulent bedrooms, each with their own en-suite bathrooms. Discover a lavish apartment with all the best Marbella has to offer at your fingertips."
    ],
    "features": [
      "3 bathrooms",
      "3 Bedrooms"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/banus-1/01-spca_visual_marbella__MG_8750-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1/02-spca_visual_marbella__MG_8408-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1/03-spca_visual_marbella__MG_8461-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1/04-spca_visual_marbella__MG_8477-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1/05-spca_visual_marbella__MG_8497-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1/06-spca_visual_marbella__MG_8547-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1/07-spca_visual_marbella__MG_8575-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1/08-spca_visual_marbella__MG_8669-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1/09-spca_visual_marbella__MG_8699-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1/10-spca_visual_marbella__MG_8750-Edit.webp",
      "/assets/KLB Homes/Properties/banus-1/11-spca_visual_marbella__MG_8803-Edit.webp"
    ],
    "videoUrl": "https://youtube.com/embed/FOXZdJmASZA?si=oFRTbXhMszkOe2Ny"
  },
  {
    "id": "andara-2",
    "name": "Andara 2",
    "price": "€3,500,000",
    "category": "Villa",
    "beds": 7,
    "baths": 9,
    "status": "N/A",
    "image": "/assets/KLB Homes/Properties/andara-2/01-image0-1-scaled.webp",
    "location": "Nagüeles",
    "description": [
      "This astounding villa situated in the prestigious area of Nagüeles, where tranquillity and security are guaranteed. Andara 2 is an ode to the extravagant lifestyle one obtains when living in Marbella. Ample outdoor terraces and an expansive garden is ideal to enjoy Marbella’s warm and sunny climate.",
      "Architecture by Archidom Studio brings forth a conceptual design with the use of natural materials, whilst interior design by Vasco Trigo provides a high-end lifestyle seamlessly blended with every-day comfort. Its prime location minutes from the Marbella Golden Mile ensures easy access to local amenities"
    ],
    "features": [
      "3 Guest Toilets",
      "3 Parking Slots",
      "Garage",
      "Garden",
      "Swimming Pool"
    ],
    "gallery": [
      "/assets/KLB Homes/Properties/andara-2/01-image0-1-scaled.webp",
      "/assets/KLB Homes/Properties/andara-2/02-IMG_9364.webp",
      "/assets/KLB Homes/Properties/andara-2/03-IMG_9362.webp",
      "/assets/KLB Homes/Properties/andara-2/04-IMG_9363.webp",
      "/assets/KLB Homes/Properties/andara-2/05-IMG_9356.webp",
      "/assets/KLB Homes/Properties/andara-2/06-IMG_9357.webp",
      "/assets/KLB Homes/Properties/andara-2/07-IMG_9361.webp",
      "/assets/KLB Homes/Properties/andara-2/08-IMG_9355.webp",
      "/assets/KLB Homes/Properties/andara-2/09-IMG_9353.webp",
      "/assets/KLB Homes/Properties/andara-2/10-IMG_9354.webp",
      "/assets/KLB Homes/Properties/andara-2/11-IMG_8454.webp",
      "/assets/KLB Homes/Properties/andara-2/12-IMG_8453.webp",
      "/assets/KLB Homes/Properties/andara-2/13-image1-1-scaled.webp",
      "/assets/KLB Homes/Properties/andara-2/14-IMG_8452.webp",
      "/assets/KLB Homes/Properties/andara-2/15-image0-1-scaled.webp"
    ]
  }
];

export const featured = allListings.filter(p => p.featured);
