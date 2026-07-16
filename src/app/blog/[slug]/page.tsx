import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageReveal from "@/components/PageReveal";
import MagneticButton from "@/components/MagneticButton";
import { blogPosts } from "@/data/blogPosts";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    return { title: "Post Not Found | KLB Homes" };
  }

  return {
    title: `${post.title} | KLB Homes Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative bg-[var(--color-ink)] min-h-screen">
      <PageReveal>
        <Navbar solid={false} />

      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] w-full flex items-end">
        <div className="absolute inset-0">
          <Image 
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-ink)]/20 bg-gradient-to-t from-[var(--color-ink)] from-10% via-[var(--color-ink)]/80 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full px-6 md:px-12 pb-16 mx-auto max-w-[1200px]">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-bronze)] mb-6">
            {post.category} • {post.date} • {post.readTime}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-[var(--color-sand)] max-w-4xl leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 mx-auto max-w-[800px]">
        <div className="text-lg md:text-xl text-[var(--color-sand)] font-serif italic mb-12 border-l-2 border-[var(--color-bronze)] pl-6">
          {post.excerpt}
        </div>

        <div className="space-y-8 text-[var(--color-sand-dim)] leading-relaxed text-base md:text-lg font-light">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Footer / CTA inside blog */}
        <div className="mt-24 pt-12 border-t border-[var(--color-line)] text-center">
          <p className="font-serif text-2xl text-[var(--color-sand)] mb-6">
            Ready to explore Marbella's finest properties?
          </p>
          <div className="flex justify-center gap-6">
            <MagneticButton as="a" href="/buy">View Properties</MagneticButton>
            <MagneticButton as="a" href="/contact" variant="link">Contact Us</MagneticButton>
          </div>
        </div>
        
        {/* Back to Blog */}
        <div className="mt-20 text-center">
          <Link href="/blog" className="text-xs uppercase tracking-[0.2em] text-[var(--color-bronze)] hover:text-[var(--color-sand)] transition-colors">
            ← Back to Journal
          </Link>
        </div>
      </section>

        <Footer />
      </PageReveal>
    </main>
  );
}
