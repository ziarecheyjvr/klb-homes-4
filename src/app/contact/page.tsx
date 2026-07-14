import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/contact/Contact";
import PageReveal from "@/components/PageReveal";

export const metadata = {
  title: "Contact Us | KLB Homes",
  description: "Begin your Marbella property journey with KLB Homes.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar solid />
      <main className="min-h-screen bg-[var(--color-ink)] pt-20">
        <PageReveal>
          <Contact />
        </PageReveal>
      </main>
      <Footer />
    </>
  );
}
