import { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | Aquilastrat',
  defaultTitle: 'Aquilastrat - Understated Strategy for Founders',
  description: 'Strategic consulting and data management services for founders and growing companies. Understated strategy that delivers results.',
  canonical: 'https://www.aquilastrat.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.aquilastrat.com',
    siteName: 'Aquilastrat',
    title: 'Aquilastrat - Understated Strategy for Founders',
    description: 'Strategic consulting and data management services for founders and growing companies.',
    images: [
      {
        url: 'https://www.aquilastrat.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aquilastrat - Strategic Consulting',
      },
    ],
  },
  twitter: {
    handle: '@aquilastrat',
    site: '@aquilastrat',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#002060',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.png',
      type: 'image/png',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon.png',
      sizes: '180x180',
    },
  ],
};
