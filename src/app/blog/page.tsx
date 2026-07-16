import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageReveal from "@/components/PageReveal";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog | KLB Homes",
  description: "Insights, news, and guides for the luxury real estate market in Marbella.",
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <main className="relative bg-[var(--color-ink)] min-h-screen">
      <PageReveal>
        <Navbar solid />

      <div className="pt-32 md:pt-48 pb-24 px-6 md:px-12 mx-auto max-w-[1600px]">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center">
          <p className="text-xs uppercase tracking-[0.4em] font-bold text-[var(--color-bronze)] mb-4">
            Insights & Lifestyle
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-[var(--color-sand)]">
            Journal
          </h1>
        </div>

        {/* Featured Post */}
        <Link href={`/blog/${featuredPost.slug}`} className="group block mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-8 relative aspect-[4/3] md:aspect-video w-full overflow-hidden rounded-sm">
              <Image 
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
            </div>
            <div className="lg:col-span-4 pr-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-bronze)] mb-4">
                {featuredPost.category} • {featuredPost.readTime}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-sand)] mb-6 group-hover:text-[var(--color-bronze)] transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-sm leading-relaxed text-[var(--color-sand-dim)] mb-8">
                {featuredPost.excerpt}
              </p>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-sand)] border-b border-[var(--color-bronze-soft)] pb-1 inline-block">
                Read Article
              </div>
            </div>
          </div>
        </Link>

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {regularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm mb-6">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-bronze)] mb-3">
                {post.category} • {post.readTime}
              </p>
              <h3 className="font-serif text-2xl text-[var(--color-sand)] mb-4 group-hover:text-[var(--color-bronze)] transition-colors">
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-sand-dim)] line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>

        <Footer />
      </PageReveal>
    </main>
  );
}
