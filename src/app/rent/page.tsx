import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/contact/Contact";
import RentClient from "./RentClient";

export const metadata = {
  title: "Rent in Marbella | KLB Homes",
  description: "Let KLB Homes help you find the perfect place to stay in Marbella.",
};

export default function RentPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--color-ink)]">
        <RentClient />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
