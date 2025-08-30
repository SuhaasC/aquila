"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getAllPosts, getFeaturedPosts } from "@/lib/blog-data";

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />
      <PageTransition>
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-brand-navy to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:80px_80px]"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">
                Insights & Strategy
              </h1>
              <p className="text-xl sm:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                Strategic thinking for founders and executives who move markets
              </p>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif text-brand-navy mb-4">
                Featured Insights
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Deep strategic analysis and practical guidance for scaling businesses
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.slug} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.heroImage} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold text-sm font-semibold rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar className="w-4 h-4" />
                        <span>{post.publishDate}</span>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif text-brand-navy mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" className="group-hover:text-brand-gold">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-navy mb-4">
              All Insights
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Browse our complete collection of strategic insights and analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <Card key={post.slug} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.heroImage} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-2 py-1 bg-brand-gold/10 text-brand-gold text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Calendar className="w-3 h-3" />
                      <span>{post.publishDate}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif text-brand-navy mb-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="group-hover:text-brand-gold">
                        Read
                        <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </PageTransition>
      <Footer />
    </div>
  );
}

