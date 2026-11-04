import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BLOG_POSTS } from "@/lib/blog-data";
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Blog & Technology Insights",
  description: "Actionable engineering articles, ERP migration strategies, GST billing automation tutorials, and software architecture insights for Indian businesses and CTOs.",
  alternates: {
    canonical: "https://rexonsofttech.in/blog",
  },
  openGraph: {
    title: "Engineering Blog & Tech Insights | RexonSoftTech",
    description: "Practical guides and technical blueprints to help enterprises automate manual processes and scale digital operations.",
    url: "https://rexonsofttech.in/blog",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://rexonsofttech.in/rst_logo.png",
        width: 640,
        height: 640,
        alt: "RexonSoftTech Engineering Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Blog & Tech Insights | RexonSoftTech",
    description: "Actionable guides on custom ERPs, business automation, and web development for Indian businesses.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
  }
};

export default function BlogPage() {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://rexonsofttech.in/blog#catalog",
    "name": "RexonSoftTech Engineering Blog & Technical Insights",
    "description": "Technical insights on custom ERP systems, manufacturing software, inventory tracking, GST e-invoicing, and cybersecurity from RexonSoftTech.",
    "itemListElement": BLOG_POSTS.map((post, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "BlogPosting",
        "headline": post.title,
        "url": `https://rexonsofttech.in/blog/${post.slug}`,
        "description": post.excerpt,
        "datePublished": new Date(post.date).toISOString(),
        "author": {
          "@type": "Person",
          "name": post.author
        }
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rexonsofttech.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog & Insights",
        "item": "https://rexonsofttech.in/blog"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Page Hero Header */}
        <section className="bg-gradient-to-br from-[#260E22] via-[#381932] to-[#260E22] text-[#FFF3E6] py-20 border-b border-[#FFF3E6]/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFF3E6]/5 blur-[100px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="text-xs font-bold text-[#FFF3E6] uppercase tracking-widest bg-[#FFF3E6]/10 border border-[#FFF3E6]/20 px-4 py-1.5 rounded-full">
              Software & Automation Insights
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FFF3E6]">
              The RexonSoftTech Engineering Blog
            </h1>
            <p className="text-base sm:text-lg text-[#EAD8C7] max-w-2xl mx-auto leading-relaxed">
              Actionable guides, technology breakdowns, and strategic blueprints to help Indian enterprises automate manual processes and scale digital operations.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-24 bg-[#FFF3E6] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.slug}
                  className="bg-[#FAF0E4] border border-[#EAD8C7] rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 text-left"
                >
                  <div className="space-y-4">
                    {/* Meta info: Category & Read time */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#381932] uppercase tracking-wider bg-[#381932]/10 border border-[#381932]/20 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-[#6B4E63]">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold text-[#381932] group-hover:text-[#8C2969] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-[#5D4356] leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer & Date */}
                  <div className="pt-6 mt-6 border-t border-[#EAD8C7] flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-[#6B4E63]">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      <span>{post.date}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-xs font-bold text-[#381932] group-hover:text-[#8C2969] transition-colors"
                    >
                      Read Full Guide
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Have a Question / Need Consultation Callout */}
            <div className="mt-20 bg-[#FAF0E4] border border-[#EAD8C7] rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#FFF3E6] text-[#381932] border border-[#EAD8C7] flex items-center justify-center mx-auto shadow-sm">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#381932]">
                Have a specific software question for your business?
              </h3>
              <p className="text-sm text-[#5D4356] max-w-xl mx-auto leading-relaxed">
                Our architects can evaluate your existing workflows and recommend the right software solution—whether it's an ERP, billing module, or web application.
              </p>
              <div className="pt-2">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center bg-[#381932] hover:bg-[#2C1327] text-[#FFF3E6] text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Schedule a Technical Discussion
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
