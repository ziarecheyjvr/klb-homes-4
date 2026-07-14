import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/contact/Contact";
import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";
import PageReveal from "@/components/PageReveal";

export const metadata = {
  title: "About Us | KLB Homes",
  description: "The KLB Difference: Your Marbella Property Specialist.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar solid />

      <main className="min-h-screen bg-[var(--color-ink)] pt-40 md:pt-48 pb-0">

        {/* Section 1: About KLB Homes */}
        <PageReveal>
        <div className="container mx-auto px-6 md:px-12 lg:px-16 mb-32">

          {/* Hero Header */}
          <div className="mb-20 max-w-4xl">
            <p className="reveal mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-bronze)]">
              ABOUT KLB HOMES
            </p>
            <h1 className="reveal font-serif text-5xl md:text-7xl text-[var(--color-sand)] tracking-tight mb-6">
              The KLB Difference: <br /> Your Marbella Property Specialist
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal-img relative aspect-[4/5] w-full rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?q=80&w=2070&auto=format&fit=crop"
                alt="Beautiful Spanish architecture representing Marbella"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--color-ink)]/10"></div>
            </div>

            <div className="flex flex-col gap-8 text-[var(--color-sand-dim)] text-base md:text-lg leading-relaxed font-light">
              <p className="reveal">
                Welcome to KLB Homes, where your property dreams in Marbella become a reality. We’re not just real estate agents; we are your Personal Property Consultants, dedicated exclusively to advocating for you, the buyer.
              </p>
              <p className="reveal">
                KLB Homes is a boutique real estate agency specializing in providing personalized, all-inclusive services that cater to your unique needs. Led by Lucie Balasova, our agency combines extensive market knowledge with unwavering dedication to client satisfaction.
              </p>
              <p className="reveal">
                With years of experience navigating the prestigious Marbella property market, we understand that purchasing a home is more than a transaction—it’s a milestone in your life journey. Whether you’re seeking a luxurious villa with panoramic Mediterranean views, a charming apartment in the historic Old Town, or an investment opportunity with excellent rental potential, we’re here to make your property aspirations come true.
              </p>
            </div>
          </div>
        </div>
        </PageReveal>

        {/* Section 2: Founder Profile */}
        <div className="bg-[var(--color-ink-soft)] border-y border-[var(--color-bronze-soft)]/20 py-24 md:py-32">
          <PageReveal>
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* Text First on Desktop for this section to alternate layout */}
              <div className="flex flex-col gap-6 text-[var(--color-sand-dim)] text-base md:text-lg leading-relaxed font-light order-2 lg:order-1">
                <p className="reveal mb-2 text-xs font-bold uppercase tracking-[0.4em] text-[var(--color-bronze)]">
                  YOUR TRUSTED PARTNER IN MARBELLA
                </p>
                <h2 className="reveal font-serif text-4xl md:text-5xl text-[var(--color-sand)]">
                  Meet Lucie Balasova
                </h2>
                <p className="reveal text-xs uppercase tracking-[0.2em] text-[var(--color-sand)] mb-2">
                  Property Advisor | Founder of KLB Homes
                </p>
                <p className="reveal font-serif text-2xl italic text-[var(--color-bronze)] mb-4">
                  Marbella is more than a destination—it is a way of life.
                </p>
                <p className="reveal">
                  With over six years of experience in Marbella’s property market, Lucie Balasova helps international buyers find not only the right property, but the right place to call home on the Costa del Sol.
                </p>
                <p className="reveal">
                  Through KLB Homes, she offers a boutique, highly personalised service built on trust, transparency, and genuine care. Taking the time to understand each client’s lifestyle, priorities, and long-term goals, Lucie provides expert guidance throughout every stage of the property journey.
                </p>
                <p className="reveal">
                  More than simply helping clients buy property, she helps them navigate Marbella with confidence—sharing local insight, trusted connections, and a genuine understanding of the communities, lifestyle, and opportunities that make this region so special.
                </p>
                <p className="reveal">
                  Whether you are searching for a holiday home, a permanent residence, or an investment property, her goal is simple: to make your Marbella journey enjoyable, informed, and stress-free from the very first conversation.
                </p>
                <div className="reveal mt-8">
                  <MagneticButton as="a" href="#contact" className="!bg-[var(--color-bronze)] !text-[var(--color-ink)] hover:!text-[var(--color-sand)] border-none font-bold">
                    Meet Lucie at KLB Homes
                  </MagneticButton>
                </div>
              </div>

              {/* Founder Image */}
              <div className="reveal-img relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none rounded-sm overflow-hidden order-1 lg:order-2">
                <Image
                  src="https://klb-homes.com/wp-content/uploads/2025/05/93E1949C-0D3C-4A35-B4ED-80903A6EB7A9.jpg"
                  alt="Lucie Balasova, Founder of KLB Homes"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-image-overlay)] via-[var(--color-image-overlay)]/20 to-transparent h-1/3"></div>
              </div>

            </div>
          </div>
          </PageReveal>
        </div>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
