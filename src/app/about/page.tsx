import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/contact/Contact";
import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Us | KLB Homes",
  description: "The KLB Difference: Your Marbella Property Specialist.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--color-ink)]">
        <AboutClient />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
