import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import SchemaMarkup from "@/components/SchemaMarkup";
import MetaPixel from "@/components/MetaPixel";
import ScreenLoader from "@/components/ScreenLoader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#381932",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rexonsofttech.in"),
  title: {
    template: "%s | RexonSoftTech",
    default: "RexonSoftTech | Custom Software Development & ERP Solutions in Chennai",
  },
  description: "Custom ERP and software development in Chennai for growing businesses. Build ERP, automation, web applications and cybersecurity solutions.",
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
      <body className="min-h-screen bg-[#FFF3E6] font-sans text-[#381932] overflow-x-hidden">
        <ScreenLoader />
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
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2246501702572609');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2246501702572609&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <MetaPixel />
        <SchemaMarkup />
        {children}
      </body>
    </html>
  );
}
