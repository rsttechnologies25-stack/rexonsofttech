import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BLOG_POSTS } from "@/lib/blog-data";
import { Clock, Calendar, ArrowRight, BookOpen, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Blog & Tech Insights | RexonSoftTech",
  description: "Practical guides, technical insights, and architectural advice on custom ERPs, business automation, GST billing, and web development for Indian businesses."
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Page Hero Header */}
        <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-20 border-b border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-500/10 blur-[100px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <span className="text-xs font-bold text-accent-400 uppercase tracking-widest bg-accent-500/10 border border-accent-500/20 px-4 py-1.5 rounded-full">
              Software & Automation Insights
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              The RexonSoftTech Engineering Blog
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Actionable guides, technology breakdowns, and strategic blueprints to help Indian enterprises automate manual processes and scale digital operations.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-24 bg-lightBg relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 text-left"
                >
                  <div className="space-y-4">
                    {/* Meta info: Category & Read time */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-accent-500 uppercase tracking-wider bg-accent-500/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold text-navy-900 group-hover:text-accent-500 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer & Date */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-slate-400">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      <span>{post.date}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-xs font-bold text-accent-600 group-hover:text-accent-700 transition-colors"
                    >
                      Read Full Guide
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Have a Question / Need Consultation Callout */}
            <div className="mt-20 bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-accent-500 flex items-center justify-center mx-auto shadow-sm">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900">
                Have a specific software question for your business?
              </h3>
              <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                Our architects can evaluate your existing workflows and recommend the right software solution—whether it's an ERP, billing module, or web application.
              </p>
              <div className="pt-2">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
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
