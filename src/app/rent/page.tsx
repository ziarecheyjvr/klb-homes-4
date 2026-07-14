import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/contact/Contact";
import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";
import PageReveal from "@/components/PageReveal";

export const metadata = {
  title: "Rent in Marbella | KLB Homes",
  description: "Let KLB Homes help you find the perfect place to stay in Marbella.",
};

export default function RentPage() {
  return (
    <>
      <Navbar solid />
      
      <main className="min-h-screen bg-[var(--color-ink)] pt-40 md:pt-48 pb-0">
        <PageReveal>
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            
            {/* Hero Section */}
            <div className="mb-20 max-w-4xl">
              <h1 className="reveal font-serif text-5xl md:text-7xl text-[var(--color-sand)] tracking-tight mb-6">
              Looking to Rent in Marbella?
            </h1>
            <p className="reveal text-[var(--color-sand-dim)] text-lg md:text-2xl font-light">
              Let KLB Homes Help You Find the Perfect Place to Stay
            </p>
            <div className="reveal mt-10">
              <MagneticButton as="a" href="#contact" className="!bg-[var(--color-bronze)] !text-[var(--color-ink)] hover:!text-[var(--color-sand)] border-none font-bold">
                Let's talk
              </MagneticButton>
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
            <div className="reveal-img relative aspect-[4/5] w-full rounded-sm overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
                alt="Beautiful Marbella rental property with a pool"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--color-ink)]/10"></div>
            </div>
            
            <div className="flex flex-col gap-8 text-[var(--color-sand-dim)] text-base md:text-lg leading-relaxed font-light">
              <p className="reveal">
                Whether you're relocating, planning a long-term stay, or simply searching for the ideal holiday rental, KLB Homes is here to guide you through the Marbella rental market with ease and confidence.
              </p>
              <p className="reveal">
                We know that finding the right home to rent is about more than just price and location — it’s about lifestyle, comfort, and peace of mind. That’s why we take the time to understand what matters most to you, then match you with properties that align with your needs, preferences, and budget.
              </p>
              <p className="reveal">
                With access to an exclusive portfolio of villas, apartments, and townhouses across Marbella and surrounding areas, our local expertise ensures you’ll discover the best options — whether you’re looking for beachfront luxury, golf-side tranquility, or something in between.
              </p>
            </div>
          </div>

          </div>

          {/* CTA Section connecting to Contact */}
          <div className="reveal bg-[var(--color-ink-soft)] border-y border-[var(--color-bronze-soft)]/20 py-24 text-center">
            <div className="container mx-auto px-6">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-sand)] mb-10 mx-auto leading-tight">
                Tell Us What You're Looking For — We’ll Take It From There
              </h2>
              <MagneticButton as="a" href="#contact" className="!bg-[var(--color-bronze)] !text-[var(--color-ink)] hover:!text-[var(--color-sand)] border-none font-bold">
                Let's talk
              </MagneticButton>
            </div>
          </div>
        </PageReveal>

        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
