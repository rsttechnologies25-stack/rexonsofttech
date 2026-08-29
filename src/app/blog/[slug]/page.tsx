import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { BLOG_POSTS, BlogPost } from "@/lib/blog-data";
import { ArrowLeft, Clock, Calendar, User, Share2, ArrowRight, CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Article Not Found | RexonSoftTech",
      description: "The requested blog article could not be found."
    };
  }

  return {
    title: `${post.title} | RexonSoftTech Insights`,
    description: post.excerpt
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `Check out this article: "${post.title}" - https://rexonsofttech.in/blog/${post.slug}`
  )}`;

  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24 pb-20 bg-white">
        {/* Article Header & Hero */}
        <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white py-16 sm:py-20 border-b border-white/10 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left space-y-6">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to All Articles
            </Link>

            <div className="space-y-4">
              <span className="text-xs font-bold text-accent-400 uppercase tracking-widest bg-accent-500/10 border border-accent-500/20 px-3.5 py-1 rounded-full">
                {post.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {post.title}
              </h1>
            </div>

            {/* Author and Metadata Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 pt-2 border-t border-white/10">
              <div className="flex items-center space-x-1.5">
                <User className="w-4 h-4 text-accent-400" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-4 h-4 text-accent-400" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Clock className="w-4 h-4 text-accent-400" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Article Body (8 Cols) */}
            <article className="lg:col-span-8 space-y-6 text-left text-slate-700 leading-relaxed">
              <p className="text-lg font-medium text-navy-900 leading-relaxed border-l-4 border-accent-500 pl-4 py-1 italic bg-slate-50 rounded-r-lg">
                {post.excerpt}
              </p>

              {post.content.map((paragraph, idx) => (
                <p key={idx} className="text-base text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Key Takeaways Box */}
              <div className="mt-8 p-6 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-3">
                <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                  Key Takeaways
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                  <li>• Custom software models your exact operational routines without forcing generic workarounds.</li>
                  <li>• Eliminates manual duplicate entries, human calculation errors, and data fragmentation.</li>
                  <li>• You own your data, source code, and architecture with zero recurring per-user licensing fees.</li>
                </ul>
              </div>

              {/* Share & WhatsApp Callout */}
              <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={whatsappShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-slate-700 hover:text-navy-900 border border-slate-200 px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5 mr-2" />
                  Share Article via WhatsApp
                </a>

                <Link
                  href="/#contact"
                  className="inline-flex items-center text-xs font-bold text-accent-600 hover:text-accent-700"
                >
                  Discuss this topic with our engineers →
                </Link>
              </div>
            </article>

            {/* Sidebar (4 Cols) */}
            <aside className="lg:col-span-4 space-y-8 text-left">
              {/* Consultation CTA Widget */}
              <div className="bg-navy-950 text-white p-6 rounded-2xl space-y-4 shadow-lg border border-navy-900">
                <span className="text-[10px] font-bold tracking-widest text-accent-400 uppercase bg-accent-500/10 px-2.5 py-1 rounded">
                  Free Assessment
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  Need custom software built for your business?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We analyze your manual bottlenecks and provide an exact architecture blueprint and quote.
                </p>
                <div className="pt-2 space-y-2.5">
                  <Link
                    href="/#contact"
                    className="w-full inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors"
                  >
                    Request Consultation
                  </Link>
                  <a
                    href="https://wa.me/917871654777?text=Hi%20RexonSoftTech%2C%20I%20read%20your%20blog%20post%20and%20would%20like%20to%20consult%20with%20an%20engineer."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 mr-1.5" size={14} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Related Articles */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                  More Articles
                </h4>
                <div className="space-y-3">
                  {otherPosts.map((op) => (
                    <Link
                      key={op.slug}
                      href={`/blog/${op.slug}`}
                      className="block p-4 bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 hover:border-accent-500/30 rounded-xl transition-all group"
                    >
                      <span className="text-[10px] font-bold text-accent-500 uppercase tracking-wide block mb-1">
                        {op.category}
                      </span>
                      <h5 className="text-xs font-bold text-navy-900 group-hover:text-accent-500 transition-colors leading-snug">
                        {op.title}
                      </h5>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
