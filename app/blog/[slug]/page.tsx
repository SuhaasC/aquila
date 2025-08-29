import { PageTransition } from "@/components/ui/page-transition";
import { Footer } from "@/components/layout/footer";
import FadeIn from "@/components/FadeIn";

// Static blog posts for static export
const blogPosts = [
  {
    slug: "strategic-clarity",
    title: "Strategic Clarity: The Foundation of Growth",
    excerpt: "How to identify and focus on the problems that actually matter.",
    content: "Strategic clarity isn't about having all the answers, it's about knowing which questions to ask. In today's complex business environment, founders and executives face an overwhelming number of decisions, opportunities, and challenges. The key to success isn't doing more; it's doing the right things with precision and focus...",
    date: "2024-08-27",
    readTime: "5 min read"
  },
  {
    slug: "data-driven-decisions",
    title: "Data-Driven Decisions: Beyond the Numbers",
    excerpt: "Making strategic decisions that combine data insights with human judgment.",
    content: "Data is everywhere, but insight is rare. The difference between a company that uses data effectively and one that drowns in it often comes down to how they translate information into action. True data-driven decision making isn't about replacing human judgment, it's about enhancing it...",
    date: "2024-08-26",
    readTime: "4 min read"
  }
];

// This makes the route compatible with static export
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-surface">
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
    <div className="min-h-screen bg-surface">
      <PageTransition>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
          <FadeIn>
            <div className="mb-8">
              <div className="text-sm text-slate-500 mb-2">{post.date} • {post.readTime}</div>
              <h1 className="text-4xl md:text-5xl font-serif text-brand-navy mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6">
                {post.content}
              </p>
              <p className="text-slate-700 leading-relaxed mb-6">
                This is a sample blog post demonstrating the structure. In a real implementation, 
                you would have full content here with proper formatting, images, and interactive elements.
              </p>
              <p className="text-slate-700 leading-relaxed">
                The key insight is that strategic clarity comes from asking the right questions, 
                not from having all the answers. Focus on what matters most to your business 
                and execute with precision.
              </p>
            </div>
          </FadeIn>
        </div>
      </PageTransition>
      <Footer />
    </div>
  );
}
