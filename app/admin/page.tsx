"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageTransition } from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Calendar,
  User,
  Search,
  Filter
} from "lucide-react";
import { useState } from "react";

// Sample blog posts for admin view
const samplePosts = [
  {
    id: 1,
    title: "A CEO's Guide to Aligning Data Systems with Business Goals in Capital Markets",
    excerpt: "For CEOs in capital markets, data is not just operational fuel, it's strategic ammunition...",
    category: "Data Management",
    author: "Suhaas Chittapurath",
    publishDate: "2025-07-23",
    status: "Published",
    tags: ["Data", "ETL", "Finance", "Strategy"]
  },
  {
    id: 2,
    title: "How Does AI Impact Startup Scaling?",
    excerpt: "AI is transforming how startups scale from early-stage to growth-stage companies...",
    category: "Innovation",
    author: "Suhaas Chittapurath",
    publishDate: "2025-02-07",
    status: "Published",
    tags: ["AI", "Startups", "Scaling", "Technology"]
  },
  {
    id: 3,
    title: "The Strategic Clarity Framework: A 5-Step Process for Founders",
    excerpt: "How to systematically break down complex strategic decisions into actionable steps...",
    category: "Strategy",
    author: "Suhaas Chittapurath",
    publishDate: "2025-01-15",
    status: "Draft",
    tags: ["Strategy", "Leadership", "Decision Making", "Frameworks"]
  }
];

export default function Admin() {
  const [posts, setPosts] = useState(samplePosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCreateForm, setShowCreateForm] = useState(false);

  const categories = ["All", "Strategy", "Data Management", "Leadership", "Innovation", "Data"];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <PageTransition>
        {/* Hero Section */}
        <Section className="bg-primary text-white relative overflow-hidden">
          <div className="relative z-10 text-center">
            <FadeIn>
              <h1 className="mb-6 sm:mb-8 max-w-3xl mx-auto text-white">
                Content Management
              </h1>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Manage your strategic insights and blog content from one central location.
              </p>
            </FadeIn>
          </div>
        </Section>

        {/* Admin Controls */}
        <Section className="bg-white">
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-between mb-8">
            <FadeIn>
              <h2 className="text-2xl font-serif font-bold text-brand-navy">
                Blog Posts
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.05}>
              <Button 
                onClick={() => setShowCreateForm(!showCreateForm)}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                {showCreateForm ? 'Cancel' : 'Create New Post'}
              </Button>
            </FadeIn>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-slate-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-primary text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Create Post Form */}
          {showCreateForm && (
            <FadeIn>
              <Card className="p-8 mb-8 shadow-xl">
                <h3 className="text-xl font-semibold text-brand-navy mb-6">Create New Blog Post</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-2">
                        Title *
                      </label>
                      <Input
                        id="title"
                        type="text"
                        required
                        className="w-full"
                        placeholder="Enter post title"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">
                        Category *
                      </label>
                      <select 
                        id="category"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                      >
                        <option value="">Select category</option>
                        <option value="Strategy">Strategy</option>
                        <option value="Data Management">Data Management</option>
                        <option value="Leadership">Leadership</option>
                        <option value="Innovation">Innovation</option>
                        <option value="Data">Data</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="excerpt" className="block text-sm font-medium text-slate-700 mb-2">
                      Excerpt *
                    </label>
                    <Textarea
                      id="excerpt"
                      required
                      rows={3}
                      className="w-full"
                      placeholder="Brief description of the post"
                    />
                  </div>

                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-slate-700 mb-2">
                      Content *
                    </label>
                    <Textarea
                      id="content"
                      required
                      rows={8}
                      className="w-full"
                      placeholder="Write your blog post content here..."
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
                      Create Post
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setShowCreateForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </Card>
            </FadeIn>
          )}

          {/* Posts List */}
          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <FadeIn key={post.id} delay={index * 0.05}>
                <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          post.status === 'Published' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.status}
                        </span>
                        <span className="text-sm text-slate-500">{post.category}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-brand-navy mb-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.publishDate}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 flex-shrink-0">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDeletePost(post.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <FadeIn>
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">No posts found</h3>
                <p className="text-slate-600">Try adjusting your search or filter criteria</p>
              </div>
            </FadeIn>
          )}
        </Section>
      </PageTransition>
      <Footer />
    </div>
  );
}
