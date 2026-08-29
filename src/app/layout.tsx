import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import SchemaMarkup from "@/components/SchemaMarkup";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rexonsofttech.in"),
  title: {
    default: "RexonSoftTech | Custom Software Development & Flagship ERP Company Chennai",
    template: "%s | RexonSoftTech"
  },
  description: "RexonSoftTech is a premier full-service software development and custom ERP engineering company in Chennai. We engineer bespoke ERP platforms, web applications, mobile apps, business automation systems, and cybersecurity solutions.",
  keywords: [
    "ERP software Chennai",
    "Custom ERP development",
    "Software development company Chennai",
    "Custom software development India",
    "Steel fabrication ERP",
    "GST billing software",
    "Web application development",
    "Mobile app development Chennai",
    "Business automation software",
    "Cybersecurity audits Chennai",
    "RexonSoftTech",
    "Rexon Software Technologies"
  ],
  authors: [{ name: "RexonSoftTech Engineering Team", url: "https://rexonsofttech.in" }],
  creator: "RexonSoftTech",
  publisher: "RexonSoftTech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "https://rexonsofttech.in",
  },
  openGraph: {
    title: "RexonSoftTech | Custom Software Development & Flagship ERP Company Chennai",
    description: "Full-service software engineering & flagship custom ERP development company in Chennai. Bespoke systems engineered around your exact operational workflows.",
    url: "https://rexonsofttech.in",
    siteName: "RexonSoftTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://rexonsofttech.in/rst_logo.png",
        width: 640,
        height: 640,
        alt: "RexonSoftTech - Innovation in Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RexonSoftTech | Custom Software Development & Flagship ERP Company Chennai",
    description: "Full-service software engineering & flagship custom ERP development company in Chennai.",
    images: ["https://rexonsofttech.in/rst_logo.png"],
    creator: "@rexonsofttech",
  },
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
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth antialiased`}
    >
      <head>
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <meta name="geo.position" content="13.0848037;80.1983057" />
        <meta name="ICBM" content="13.0848037, 80.1983057" />
      </head>
      <body className="min-h-screen bg-[#F5F7FA] font-sans text-[#1E293B] overflow-x-hidden">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2CNVR5X55Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2CNVR5X55Y');
          `}
        </Script>
        <SchemaMarkup />
        {children}
      </body>
    </html>
  );
}
