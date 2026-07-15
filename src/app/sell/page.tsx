import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/contact/Contact";
import SellClient from "./SellClient";

export const metadata = {
  title: "Sell Your Property | KLB Homes",
  description: "Partner with KLB Homes for a seamless selling experience in Marbella.",
};

export default function SellPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--color-ink)]">
        <SellClient />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
