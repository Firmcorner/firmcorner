import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import Analytics from "../components/Analytics"; // Fixed import path

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "FirmCorner - Discover & Connect with Top Brands | Brand Discovery Platform",
  description:
    "Connect with top brands, explore products by category, and vote for your favorites. Join 10,000+ brands on FirmCorner - the ultimate brand discovery and connection platform.",
  keywords: [
    "brand discovery",
    "brand platform",
    "product discovery",
    "brand voting",
    "brand profiles",
    "business networking",
    "brand marketing",
    "product categories",
    "brand community",
    "brand showcase",
    "business directory",
    "brand connection",
    "product voting",
    "brand ranking",
    "business platform",
  ],
  authors: [{ name: "FirmCorner Team" }],
  creator: "FirmCorner",
  publisher: "FirmCorner",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://firmcorner.com",
    siteName: "FirmCorner",
    title: "FirmCorner - Discover & Connect with Top Brands",
    description:
      "Connect with top brands, explore products by category, and vote for your favorites. Join 10,000+ brands on FirmCorner - the ultimate brand discovery platform.",
    images: [
      {
        url: "https://drive.usercontent.google.com/download?id=1n_J4fHGEHjqg0hdKWioutVS-lC8YY_C8&export=view&authuser=0",
        width: 1200,
        height: 630,
        alt: "FirmCorner - Brand Discovery Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FirmCorner - Discover & Connect with Top Brands",
    description:
      "Connect with top brands, explore products by category, and vote for your favorites. Join 10,000+ brands on the ultimate brand discovery platform.",
    images: ["/twitter-image.jpg"],
    creator: "@firmcorner",
  },
  alternates: {
    canonical: "https://firmcorner.com",
  },
  category: "Business",
  classification: "Brand Discovery Platform",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://firmcorner.com" />
        <meta name="theme-color" content="#7a33d1" />
        <meta name="msapplication-TileColor" content="#7a33d1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FirmCorner",
              description:
                "Brand discovery and connection platform helping businesses showcase products and connect with their audience",
              url: "https://firmcorner.com",
              logo: "https://firmcorner.com/logo.png",
              sameAs: [
                "https://twitter.com/firmcorner",
                "https://www.linkedin.com/company/firm-corner",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English",
              },
              foundingDate: "2024",
              numberOfEmployees: "10-50",
              industry: "Technology",
              serviceArea: "Worldwide",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "FirmCorner",
              url: "https://firmcorner.com",
              description:
                "Discover and connect with top brands through our innovative platform",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://app.firmcorner.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "FirmCorner",
              operatingSystem: "Web Browser",
              applicationCategory: "BusinessApplication",
              description:
                "Brand discovery platform for businesses to showcase products and connect with customers",
              url: "https://app.firmcorner.com",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1250",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VRFDPYBTR6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VRFDPYBTR6', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {children}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
