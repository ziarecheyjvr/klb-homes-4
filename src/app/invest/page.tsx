import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/contact/Contact";
import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";
import PageReveal from "@/components/PageReveal";

export const metadata = {
  title: "Invest in Real Estate | KLB Homes",
  description: "Invest in Real Estate with Confidence. We Handle the Renovation — You Reap the Returns.",
};

export default function InvestPage() {
  return (
    <>
      <Navbar solid />
      
      <main className="min-h-screen bg-[var(--color-ink)] pt-40 md:pt-48 pb-0">
        <PageReveal>
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            
            {/* Hero Section */}
            <div className="mb-20 max-w-4xl">
              <h1 className="reveal font-serif text-5xl md:text-7xl text-[var(--color-sand)] tracking-tight mb-6">
              Invest in Real Estate with Confidence
            </h1>
            <p className="reveal text-[var(--color-sand-dim)] text-lg md:text-2xl font-light">
              We Handle the Renovation — You Reap the Returns
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
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop" 
                alt="Modern architectural lines representing solid real estate investment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--color-ink)]/10"></div>
            </div>
            
            <div className="flex flex-col gap-8 text-[var(--color-sand-dim)] text-base md:text-lg leading-relaxed font-light">
              <p className="reveal">
                At KLB Homes, we believe real estate investment should be both profitable and stress-free. Renovating a property can be one of the most rewarding strategies in the market — but it often comes with time-consuming decisions, construction oversight, and financial risk. That’s where we come in.
              </p>
              <p className="reveal">
                Our Property Investment & Renovation Service is built for investors who want to capitalize on the Marbella real estate market without the day-to-day hassle. Whether you’re a first-time investor or looking to expand your portfolio, we manage the entire process from acquisition to resale — all you need to do is provide the capital.
              </p>
              <div className="reveal bg-[var(--color-ink-soft)] border border-[var(--color-bronze-soft)]/30 p-8 rounded-sm my-4">
                <p className="text-[var(--color-sand)] font-serif text-xl mb-6">We take care of everything:</p>
                <ul className="space-y-4 text-[var(--color-sand-dim)]">
                  <li className="flex gap-4">
                    <span className="text-[var(--color-bronze)]">✧</span> Identifying high-potential properties
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[var(--color-bronze)]">✧</span> Creating a renovation plan with strong ROI potential
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[var(--color-bronze)]">✧</span> Managing permits, timelines, and budgets
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[var(--color-bronze)]">✧</span> Overseeing the renovation with our trusted in-house team
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[var(--color-bronze)]">✧</span> Styling and marketing the final product
                  </li>
                  <li className="flex gap-4">
                    <span className="text-[var(--color-bronze)]">✧</span> Selling or renting the property for maximum return
                  </li>
                </ul>
              </div>
              <p className="reveal text-[var(--color-sand)] font-normal text-xl mt-4">
                With our local expertise, market insight, and end-to-end project management, we make investing in Marbella real estate seamless, transparent, and lucrative.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Section connecting to Contact */}
        <div className="reveal bg-[var(--color-ink-soft)] border-y border-[var(--color-bronze-soft)]/20 py-24 text-center">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-sand)] mb-10 mx-auto leading-tight">
              Interested in Investing with KLB Homes?
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
