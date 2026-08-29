import React from "react";

export default function SchemaMarkup() {
  const baseUrl = "https://rexonsofttech.in";

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "RexonSoftTech",
    "alternateName": ["Rexon Software Technologies", "RexonSoftTech Chennai", "RST"],
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/rst_logo.png`,
      "width": 512,
      "height": 512,
      "caption": "RexonSoftTech Official Logo"
    },
    "image": `${baseUrl}/rst_logo.png`,
    "description": "RexonSoftTech is a premier full-service software development and custom ERP engineering company headquartered in Anna Nagar, Chennai, India.",
    "email": "info@rexonsofttech.in",
    "telephone": "+91-78716-54777",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-78716-54777",
        "contactType": "customer service",
        "areaServed": ["IN", "AE", "US", "SG"],
        "availableLanguage": ["English", "Tamil"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-78716-54777",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Tamil"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Block I, 5/1049, West, Aishwarya Colony, Thangam Colony, Anna Nagar",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600040",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://rexonsofttech.in",
      "https://wa.me/917871654777",
      "https://github.com/rsttechnologies25-stack"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#local-business`,
    "name": "RexonSoftTech",
    "image": `${baseUrl}/rst_logo.png`,
    "url": baseUrl,
    "telephone": "+917871654777",
    "email": "info@rexonsofttech.in",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR, USD",
    "paymentAccepted": "Bank Transfer, UPI, Credit Card, Cash",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Block I, 5/1049, West, Aishwarya Colony, Thangam Colony, Anna Nagar",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600040",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0848037,
      "longitude": 80.1983057
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Chennai"
      },
      {
        "@type": "State",
        "name": "Tamil Nadu"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:30"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Engineering & ERP Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom ERP Solutions",
            "description": "Bespoke ERP architecture tailored to unique enterprise workflows, steel fabrication, inventory tracking, and GST e-invoicing."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Tailor-made software packages, invoicing billing engines, advanced CRMs, and internal business management panels."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Application & Website Development",
            "description": "High-conversion responsive websites, e-commerce storefronts, and multi-tenant cloud applications built with Next.js."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Application Development",
            "description": "Cross-platform and native iOS & Android applications with offline data synchronization."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cyber Security Audits & VAPT",
            "description": "Comprehensive vulnerability assessments, penetration testing, and security audits to protect corporate assets."
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "name": "RexonSoftTech",
    "url": baseUrl,
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/?s={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
