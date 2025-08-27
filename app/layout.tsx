import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aquilastrat - Understated Strategy for Founders",
  description: "Strategic consulting and data management services for founders and growing companies. Understated strategy that delivers results.",
  openGraph: {
    title: "Aquilastrat - Understated Strategy for Founders",
    description: "Strategic consulting and data management services for founders and growing companies. Understated strategy that delivers results.",
    url: "https://www.aquilastrat.com",
    siteName: "Aquilastrat",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aquilastrat - Understated Strategy for Founders",
    description: "Strategic consulting and data management services for founders and growing companies. Understated strategy that delivers results.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&display=swap"
          as="style"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  );
}
