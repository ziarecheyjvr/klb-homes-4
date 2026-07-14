import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BuyListings from "./BuyListings";
import PageReveal from "@/components/PageReveal";

export const metadata = {
  title: "Buy | KLB Homes",
  description: "Discover our exclusive collection of premium real estate properties.",
};

export default function BuyPage() {
  return (
    <>
      <Navbar solid />
      <main className="min-h-screen bg-[var(--color-ink)] pt-40 md:pt-48 pb-24">
        <PageReveal>
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="mb-12 max-w-2xl">
              <h1 className="reveal font-serif text-5xl md:text-7xl text-[var(--color-sand)] tracking-tight mb-4">
                Exclusive Properties
              </h1>
              <p className="reveal text-[var(--color-sand-dim)] text-lg font-light">
                Discover our curated collection of Marbella's finest homes, from beachfront villas to modern golf-side apartments.
              </p>
            </div>

            <BuyListings />
          </div>
        </PageReveal>
      </main>
      <Footer />
    </>
  );
}
