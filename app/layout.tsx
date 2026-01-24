import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Analytics from "../components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "FirmCorner - AI-Powered Business Tools | Email Marketing, Invoicing & Data Analysis",
  description:
    "Transform your business with FirmCorner's AI-powered suite. Smart email marketing with Firm Mailer, automated invoicing with Firm Invoice, and intelligent data analysis with Firm Viewer. Join 10,000+ users leveraging AI for business growth.",
  keywords: [
    "AI business tools",
    "AI-powered email marketing",
    "AI invoice generator",
    "AI data analysis",
    "automated email campaigns",
    "bulk email with AI",
    "smart invoicing software",
    "CSV data analyzer",
    "Excel AI tool",
    "business automation AI",
    "AI content generation",
    "intelligent email tool",
    "AI business suite",
    "machine learning business tools",
    "automated invoicing",
    "data visualization AI",
    "brand discovery platform",
    "AI productivity tools",
    "business AI assistant",
    "free AI business tools",
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
    siteName: "FirmCorner AI Business Suite",
    title: "FirmCorner - AI-Powered Business Tools for Modern Entrepreneurs",
    description:
      "Revolutionize your workflow with AI. Firm Mailer generates smart email campaigns, Firm Invoice automates billing, and Firm Viewer analyzes data intelligently. Free AI tools for 10,000+ businesses worldwide.",
    images: [
      {
        url: "https://drive.usercontent.google.com/download?id=1n_J4fHGEHjqg0hdKWioutVS-lC8YY_C8&export=view&authuser=0",
        width: 1200,
        height: 630,
        alt: "FirmCorner - AI-Powered Business Suite with Email Marketing, Invoicing & Data Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FirmCorner - AI Business Tools That Work Smarter",
    description:
      "AI-powered email marketing, automated invoicing, and intelligent data analysis. Join 10,000+ users building better businesses with FirmCorner's free AI suite.",
    images: ["/twitter-image.jpg"],
    creator: "@firmcorner",
  },
  alternates: {
    canonical: "https://firmcorner.com",
  },
  category: "Business & Productivity",
  classification: "AI-Powered Business Tools Platform",
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

        {/* Enhanced Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "FirmCorner",
              description:
                "AI-powered business tools platform providing intelligent email marketing, automated invoicing, and smart data analysis solutions for modern businesses",
              url: "https://firmcorner.com",
              logo: "https://firmcorner.com/logo.png",
              sameAs: [
                "https://twitter.com/firmcorner",
                "https://www.linkedin.com/company/firm-corner",
                "https://www.instagram.com/firmcorner",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "info@firmcorner.com",
                availableLanguage: ["English"],
              },
              foundingDate: "2024",
              numberOfEmployees: "10-50",
              industry: "Artificial Intelligence & Business Software",
              serviceArea: "Worldwide",
              slogan: "Work Smarter with AI",
              keywords:
                "AI business tools, email marketing AI, invoice automation, data analysis",
            }),
          }}
        />

        {/* Enhanced WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "FirmCorner",
              url: "https://firmcorner.com",
              description:
                "AI-powered business suite with smart email marketing, automated invoicing, and intelligent data analysis tools",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://app.firmcorner.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "FirmCorner",
              },
            }),
          }}
        />

        {/* Enhanced Software Application Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "FirmCorner AI Business Suite",
              operatingSystem: "Web Browser, Cross-Platform",
              applicationCategory: "BusinessApplication",
              applicationSubCategory: "AI Business Tools",
              description:
                "Complete AI-powered business toolkit featuring Firm Mailer for email marketing, Firm Invoice for automated billing, and Firm Viewer for data analysis",
              url: "https://app.firmcorner.com",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                priceValidUntil: "2025-12-31",
                description: "Free during launch period",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1250",
                bestRating: "5",
                worstRating: "1",
              },
              featureList: [
                "AI-powered email content generation",
                "Smart subject line creation",
                "Automated invoice generation",
                "Intelligent data analysis",
                "CSV and Excel file processing",
                "Bulk email campaigns",
                "Professional invoice templates",
                "Data visualization",
              ],
              screenshot: "https://firmcorner.com/screenshot.png",
            }),
          }}
        />

        {/* Product Schema for Firm Mailer */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Firm Mailer",
              description:
                "AI-powered email marketing tool that generates compelling content, creates smart subject lines, and personalizes campaigns at scale",
              brand: {
                "@type": "Brand",
                name: "FirmCorner",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              url: "https://mailer.firmcorner.com",
              category: "Email Marketing Software",
            }),
          }}
        />

        {/* Product Schema for Firm Invoice */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Firm Invoice",
              description:
                "AI-enhanced invoicing software with automated invoice generation, smart tax calculations, and payment prediction insights",
              brand: {
                "@type": "Brand",
                name: "FirmCorner",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              url: "https://invoice.firmcorner.com",
              category: "Invoicing Software",
            }),
          }}
        />

        {/* Product Schema for Firm Viewer */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Firm Viewer",
              description:
                "AI-driven data analysis tool for CSV and Excel files with intelligent insights, pattern detection, and automated data cleaning",
              brand: {
                "@type": "Brand",
                name: "FirmCorner",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              url: "https://viewer.firmcorner.com",
              category: "Data Analysis Software",
              isNew: true,
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://firmcorner.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "AI Tools",
                  item: "https://firmcorner.com#our-tools",
                },
              ],
            }),
          }}
        />

        {/* FAQ Schema for AI Features */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What AI features does FirmCorner offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "FirmCorner offers AI-powered email content generation, smart subject line creation, automated invoice generation with intelligent calculations, AI-driven data analysis for CSV/Excel files, pattern detection, and automated data cleaning.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are FirmCorner's AI tools free to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, all FirmCorner AI tools including Firm Mailer, Firm Invoice, and Firm Viewer are completely free during our launch period with no hidden fees or credit card required.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does AI improve email marketing with Firm Mailer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Firm Mailer uses AI to automatically generate compelling email content, create engaging subject lines, personalize messages at scale, and optimize campaigns for better engagement and conversion rates.",
                  },
                },
              ],
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
        <SpeedInsights />
      </body>
    </html>
  );
}
