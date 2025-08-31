"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Search,
  Filter,
  TrendingUp
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { getAllPosts, getFeaturedPosts } from "@/lib/blog-data";

const categories = ["All", "Strategy", "Data Management", "Leadership", "Innovation", "Data"];

export default function Blog() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = featuredPosts[0]; // Get the first featured post

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <PageTransition>
        {/* Hero Section */}
        <section className="py-20 sm:py-24 md:py-32 bg-brand-navy text-white relative overflow-hidden">
          <div className="relative z-10 w-full px-8 sm:px-12 md:px-16 lg:px-24 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 sm:mb-8 leading-tight text-brand-gold">
              Strategic Insights
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Deep dives into strategy, leadership, and the art of making complex decisions simple.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="w-full px-8 sm:px-12 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text/40" />
                  <input
                    type="text"
                    placeholder="Search insights..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-text/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy/50 focus:border-brand-navy/50 transition-all duration-300"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-text/60" />
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
                          selectedCategory === category
                            ? "bg-brand-navy text-white shadow-md"
                            : "bg-slate-100 text-text/70 hover:bg-slate-200 hover:text-text/90"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 sm:py-20 bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="w-full px-8 sm:px-12 md:px-16 lg:px-24">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-text mb-4">
                    Featured Insight
                  </h2>
                  <p className="text-text/60 max-w-2xl mx-auto">
                    Our most popular strategic framework, trusted by hundreds of founders
                  </p>
                </div>

                <Card className="p-8 sm:p-12 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-brand-navy/10 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-brand-navy" />
                        </div>
                        <span className="text-sm font-medium text-brand-navy bg-brand-navy/10 px-3 py-1 rounded-full">
                          {featuredPost.category}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-text mb-4 group-hover:text-brand-navy transition-colors duration-300">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-text/70 text-lg leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm text-text/50 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(featuredPost.publishDate).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>

                      <Link href={`/blog/${featuredPost.slug}`}>
                        <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 group-hover:bg-brand-navy/80 group-hover:shadow-lg">
                          Read Full Article
                          <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>

                    <div className="relative">
                      {featuredPost.heroImage ? (
                        <div className="w-full h-64 lg:h-80 rounded-2xl overflow-hidden">
                          <img 
                            src={featuredPost.heroImage} 
                            alt={featuredPost.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-brand-navy/10 to-brand-navy/20 rounded-2xl flex items-center justify-center">
                          <TrendingUp className="w-24 h-24 text-brand-navy/40" />
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="w-full px-8 sm:px-12 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-gold mb-4">
                  All Insights
                </h2>
                <p className="text-text/60 max-w-2xl mx-auto">
                  Explore our complete collection of strategic insights and frameworks
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.filter(post => !post.featured).map((post) => (
                  <Card key={post.slug} className="p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                    {/* Hero Image */}
                    {post.heroImage && (
                      <div className="mb-4">
                        <div className="aspect-[16/9] rounded-lg overflow-hidden">
                          <img 
                            src={post.heroImage} 
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-brand-navy/10 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-brand-navy" />
                      </div>
                      <span className="text-sm font-medium text-brand-navy bg-brand-navy/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-serif font-bold text-text mb-3 group-hover:text-brand-navy transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-text/70 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-text/50 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" className="w-full text-brand-navy hover:text-brand-navy/80 hover:bg-brand-navy/5 px-4 py-3 h-auto text-base font-medium">
                        Read More
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </Card>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">No insights found</h3>
                  <p className="text-text/60">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </PageTransition>
      <Footer />
    </div>
  );
}

