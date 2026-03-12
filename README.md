# Aquilastrat Website

A clean, modern website for executive decision retainer and data management services, built with Next.js and TypeScript.

## 🚀 Features

- **Clean Blog System** - Centralized content management with easy-to-edit blog posts
- **Responsive Design** - Beautiful design that works on all devices
- **Fast Performance** - Optimized with Next.js static generation
- **SEO Optimized** - Built-in SEO features for better search rankings
- **Contact Forms** - Professional contact forms for different services

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   │   ├── page.tsx       # Blog listing page
│   │   └── [slug]/        # Individual blog posts
│   ├── contact/           # Contact pages
│   ├── data-management/   # Data management service page
│   └── layout.tsx        # Root layout
├── components/            # Reusable components
│   ├── layout/           # Header, footer, etc.
│   └── ui/               # UI components (buttons, cards, etc.)
├── lib/                  # Utility functions and data
│   ├── blog-data.ts      # Blog posts data (centralized)
│   └── seo.ts           # SEO configuration
└── public/               # Static assets (images, favicon, etc.)
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
npx vercel --prod
```

### Form Email Configuration
Form submissions from `/contact`, `/consulting-contact`, and `/data-contact` are sent via SMTP through `POST /api/forms`.

1. Copy `.env.example` to `.env.local`
2. Fill in your SMTP credentials
3. Set `FORMS_TO_EMAIL=contact@aquilastrat.com` (or change if needed)
4. Optionally set `FORMS_ALLOWED_ORIGINS` for stricter origin checks
5. (Optional) set `NEXT_PUBLIC_GA_MEASUREMENT_ID` to enable analytics

## 📝 Adding Blog Posts

To add a new blog post:

1. Open `lib/blog-data.ts`
2. Add a new post to the `blogPosts` array
3. Include all required fields: `slug`, `title`, `excerpt`, `category`, `readTime`, `publishDate`, `heroImage`, `content`
4. The post will automatically appear on the blog page

### Blog Post Structure
```typescript
{
  slug: "your-post-slug",
  title: "Your Post Title",
  excerpt: "Brief description of the post",
  category: "Category Name",
  readTime: "5 min read",
  publishDate: "2025-01-01",
  featured: true, // Optional: for featured posts
  heroImage: "https://your-image-url.com",
  tags: ["tag1", "tag2"], // Optional
  content: `
    <p>Your HTML content here...</p>
    <h2>Section Title</h2>
    <p>More content...</p>
  `
}
```

## 🎨 Design System

The website uses a consistent design system with:

- **Colors**: Brand navy (#002060), Brand gold (#D4AF37)
- **Typography**: Serif fonts for headings, sans-serif for body text
- **Spacing**: Consistent spacing using Tailwind CSS
- **Components**: Reusable UI components for consistency

## 🚀 Deployment

The website is deployed on Vercel with automatic deployments from the main branch.

**Live URL**: https://aquila-his28jhck-suhaas-projects-1a577bf5.vercel.app

## 📧 Contact

For questions about the website or to request changes, contact: contact@aquilastrat.com

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
