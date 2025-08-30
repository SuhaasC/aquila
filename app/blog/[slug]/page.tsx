import { PageTransition } from "@/components/ui/page-transition";
import { Footer } from "@/components/layout/footer";
import FadeIn from "@/components/FadeIn";
import { Calendar, Clock } from "lucide-react";
import { getBlogPost, getAllPosts } from "@/lib/blog-data";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        <PageTransition>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
            <h1 className="text-3xl font-serif text-brand-navy mb-4">Post Not Found</h1>
            <p className="text-slate-600">The blog post you're looking for doesn't exist.</p>
          </div>
        </PageTransition>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <PageTransition>
        {/* Hero Section with Image */}
        <div className="relative bg-gradient-to-br from-brand-navy to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:80px_80px]"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-gold/10 rounded-full">
                  <span className="text-xs font-semibold tracking-wider text-brand-gold uppercase">{post.category}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                  {post.title}
                </h1>
                <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              
              {/* Hero Image */}
              <div className="relative">
                <div className="w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={post.heroImage} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <FadeIn>
            <article className="prose prose-lg max-w-none 
              prose-headings:font-serif prose-headings:text-brand-navy prose-headings:font-bold 
              prose-h1:text-4xl prose-h1:mt-16 prose-h1:mb-8
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-brand-navy
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-brand-navy
              prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6
              prose-strong:text-brand-navy prose-strong:font-semibold
              prose-em:text-brand-navy prose-em:font-medium
              prose-ul:my-8 prose-ul:list-disc prose-ul:pl-6
              prose-li:my-3 prose-li:text-slate-700 prose-li:leading-relaxed
              prose-ol:my-8 prose-ol:list-decimal prose-ol:pl-6
              prose-blockquote:border-l-4 prose-blockquote:border-brand-gold prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-600
              prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-slate-900 prose-pre:text-slate-100
              prose-a:text-brand-gold prose-a:no-underline prose-a:font-semibold hover:prose-a:text-brand-navy
              prose-img:rounded-lg prose-img:shadow-lg
              prose-hr:border-slate-200 prose-hr:my-12
            ">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
          </FadeIn>
        </div>
      </PageTransition>
      <Footer />
    </div>
  );
}
