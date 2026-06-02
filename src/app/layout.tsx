import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import SchemaMarkup from "@/components/SchemaMarkup";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RexonSoftTech | ERP Software & Custom Software Development Company in Chennai",
  description: "RexonSoftTech is a software development company in Chennai specializing in ERP software, custom software development, business automation, web applications, mobile apps, AI solutions, and cybersecurity services.",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://rexonsofttech.in",
  },
  openGraph: {
    title: "RexonSoftTech | ERP Software & Custom Software Development Company in Chennai",
    description: "RexonSoftTech is a software development company in Chennai specializing in ERP software, custom software development, business automation, web applications, mobile apps, AI solutions, and cybersecurity services.",
    url: "https://rexonsofttech.in",
    siteName: "RexonSoftTech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://rexonsofttech.in/logo.png",
        width: 512,
        height: 512,
        alt: "RexonSoftTech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RexonSoftTech | ERP Software & Custom Software Development Company in Chennai",
    description: "RexonSoftTech is a software development company in Chennai specializing in ERP software, custom software development, business automation, web applications, mobile apps, AI solutions, and cybersecurity services.",
    images: ["https://rexonsofttech.in/logo.png"],
  },
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
