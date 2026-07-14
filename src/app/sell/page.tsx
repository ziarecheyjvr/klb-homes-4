import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/contact/Contact";
import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";
import PageReveal from "@/components/PageReveal";

export const metadata = {
  title: "Sell Your Property | KLB Homes",
  description: "Partner with KLB Homes for a seamless selling experience in Marbella.",
};

export default function SellPage() {
  return (
    <>
      <Navbar solid />
      
      <main className="min-h-screen bg-[var(--color-ink)] pt-40 md:pt-48 pb-0">
        <PageReveal>
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            
            {/* Hero Section */}
            <div className="mb-20 max-w-4xl">
              <h1 className="reveal font-serif text-5xl md:text-7xl text-[var(--color-sand)] tracking-tight mb-6">
              Sell Your Property with KLB Homes
            </h1>
            <p className="reveal text-[var(--color-sand-dim)] text-lg md:text-2xl font-light">
              Partner with Us for a Seamless Selling Experience
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
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury living room showcasing a premium property"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--color-ink)]/10"></div>
            </div>
            
            <div className="flex flex-col gap-8 text-[var(--color-sand-dim)] text-base md:text-lg leading-relaxed font-light">
              <p className="reveal">
                At KLB Homes, we understand that selling your home is more than just a financial decision — it's a personal journey. Whether you're upgrading, downsizing, or moving on to your next chapter, we’re here to guide you through every step of the process with care, expertise, and commitment.
              </p>
              <p className="reveal">
                We don’t just list properties — we represent them with purpose. When you choose KLB Homes, you’re partnering with a team that values transparency, strategy, and strong client relationships. From the moment you contact us, we’ll work closely with you to understand your goals, provide an accurate market valuation, and develop a tailored sales strategy that maximizes your property’s potential.
              </p>
              <p className="reveal">
                Our approach blends traditional values with modern tools. We combine honest, client-focused service with up-to-date market insight and innovative marketing techniques to attract the right buyers and achieve the best results.
              </p>
              <p className="reveal text-[var(--color-sand)] font-normal text-xl mt-4">
                Whether you’re ready to sell or simply exploring your options, we invite you to get in touch with us. Let’s talk about your property and how we can help you make the most of your next move.
              </p>
            </div>
          </div>

          </div>

          {/* CTA Section connecting to Contact */}
          <div className="reveal bg-[var(--color-ink-soft)] border-y border-[var(--color-bronze-soft)]/20 py-24 text-center">
            <div className="container mx-auto px-6">
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-sand)] mb-10">
                Ready To Sell Your Property?
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
