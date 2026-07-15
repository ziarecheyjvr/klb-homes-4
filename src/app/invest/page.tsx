import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/contact/Contact";
import InvestClient from "./InvestClient";

export const metadata = {
  title: "Invest in Real Estate | KLB Homes",
  description: "Invest in Real Estate with Confidence. We Handle the Renovation — You Reap the Returns.",
};

export default function InvestPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--color-ink)]">
        <InvestClient />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
