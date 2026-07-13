import Navbar from "@/components/Navbar";
import Hero from "@/components/hero/Hero";
import Manifesto from "@/components/Manifesto";
import PropertyShowcase from "@/components/showcase/PropertyShowcase";
import FeaturedProperties from "@/components/featured/FeaturedProperties";
import About from "@/components/about/About";
import Invest from "@/components/invest/Invest";
import BuyersExperience from "@/components/experience/BuyersExperience";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <PropertyShowcase />
        <FeaturedProperties />
        <About />
        <Invest />
        <BuyersExperience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
