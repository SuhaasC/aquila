import { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | Aquilastrat',
  defaultTitle: 'Strategic Clarity for Founders | Aquilastrat',
  description:
    'Executive decision retainer and data management services for founders navigating complex decisions.',
  canonical: 'https://www.aquilastrat.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.aquilastrat.com',
    siteName: 'Aquilastrat',
    title: 'Aquilastrat | Strategic Clarity for Founders',
    description:
      'Executive decision retainer and data management services for founders navigating complex decisions.',
    images: [
      {
        url: 'https://www.aquilastrat.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aquilastrat - Strategic Clarity for Founders',
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
      href: '/favicon.ico',
      type: 'image/x-icon',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon.png',
      sizes: '180x180',
    },
  ],
};
