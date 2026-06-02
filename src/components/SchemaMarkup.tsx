import React from "react";

export default function SchemaMarkup() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RexonSoftTech",
    "alternateName": "Rexon Software Technologies",
    "url": "https://rexonsofttech.in",
    "logo": "https://rexonsofttech.in/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-95662-61950",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "ta"]
    },
    "sameAs": [
      "https://rexonsofttech.in",
      "https://wa.me/919566261950"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "RexonSoftTech",
    "image": "https://rexonsofttech.in/logo.png",
    "@id": "https://rexonsofttech.in/#local-business",
    "url": "https://rexonsofttech.in",
    "telephone": "+919566261950",
    "priceRange": "$$",
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
    "openingHoursSpecification": {
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
      "closes": "18:00"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RexonSoftTech",
    "url": "https://rexonsofttech.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://rexonsofttech.in/?s={search_term_string}"
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
