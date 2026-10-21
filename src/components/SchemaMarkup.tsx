import React from "react";

export default function SchemaMarkup() {
  const baseUrl = "https://rexonsofttech.in";

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "RexonSoftTech",
    "legalName": "RexonSoftTech",
    "alternateName": [
      "Rexon Software Technologies",
      "RexonSoftTech Chennai",
      "RexonSoftTech Anna Nagar",
      "RST"
    ],
    "url": baseUrl,
    "foundingDate": "2025",
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/rst_logo.png`,
      "width": 512,
      "height": 512,
      "caption": "RexonSoftTech Official Logo"
    },
    "image": `${baseUrl}/rst_logo.png`,
    "description": "RexonSoftTech is a premier full-service software development and custom ERP engineering company headquartered in Anna Nagar, Chennai, India. Specializing in bespoke ERP architecture, business automation, web portals, mobile apps, and cybersecurity.",
    "disambiguatingDescription": "RexonSoftTech is a bespoke software development and custom ERP engineering company headquartered at Anna Nagar West, Chennai (PIN 600040), operating officially at https://rexonsofttech.in. It is distinct and unaffiliated with Rexontech IT Solutions in Pallikaranai.",
    "email": "info@rexonsofttech.in",
    "telephone": "+91 78716 54777",
    "knowsAbout": [
      "Custom ERP Software Development",
      "Enterprise Resource Planning",
      "GST Billing & E-Invoicing Engines",
      "Multi-Warehouse Inventory Management",
      "Steel Fabrication Production Software",
      "Manufacturing & Industrial Engineering ERP",
      "Wholesale Trading & B2B Distribution Systems",
      "Multi-Branch Retail & Point-of-Sale ERP",
      "Construction & Infrastructure Operations Software",
      "Custom Software Development",
      "Web Application Development",
      "Next.js High-Performance Web Engineering",
      "Mobile App Development",
      "React Native Enterprise Mobility",
      "Cybersecurity & VAPT Auditing",
      "OWASP Top 10 Security Assessment",
      "Business Process Automation",
      "Cloudflare Edge Deployment"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 78716 54777",
        "contactType": "customer service",
        "areaServed": ["IN", "AE", "US", "SG"],
        "availableLanguage": ["English", "Tamil"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91 78716 54777",
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
      "https://wa.me/917871654777",
      "https://github.com/rsttechnologies25-stack",
      "https://www.linkedin.com/company/rexonsofttech"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${baseUrl}/#local-business`,
    "parentOrganization": {
      "@id": `${baseUrl}/#organization`
    },
    "name": "RexonSoftTech",
    "image": `${baseUrl}/rst_logo.png`,
    "url": baseUrl,
    "telephone": "+91 78716 54777",
    "email": "info@rexonsofttech.in",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR, USD",
    "paymentAccepted": "Bank Transfer, UPI, Credit Card, Cash",
    "hasMap": "https://maps.google.com/?q=13.0848037,80.1983057",
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
        "@type": "AdministrativeArea",
        "name": "Ambattur Industrial Estate"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Sriperumbudur & Oragadam"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Guindy Industrial Estate"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Old Mahabalipuram Road (OMR)"
      },
      {
        "@type": "City",
        "name": "Coimbatore"
      },
      {
        "@type": "City",
        "name": "Hosur"
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
            "description": "Bespoke ERP architecture tailored to unique enterprise workflows, steel fabrication, inventory tracking, and GST e-invoicing.",
            "url": `${baseUrl}/services/erp-development`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Tailor-made software packages, invoicing billing engines, advanced CRMs, and internal business management panels.",
            "url": `${baseUrl}/services/custom-software-development`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development",
            "description": "High-conversion responsive websites, corporate portals, and brand digital touchpoints built with Next.js.",
            "url": `${baseUrl}/services/website-development`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Application Development",
            "description": "High-performance multi-tenant web portals, internal dashboards, and database-driven cloud applications.",
            "url": `${baseUrl}/services/web-application-development`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Application Development",
            "description": "Cross-platform and native iOS & Android applications with offline data synchronization.",
            "url": `${baseUrl}/services/mobile-app-development`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Automation Solutions",
            "description": "Customer intelligence tools, AI chatbots, automated PDF reporting, and predictive analytics dashboards.",
            "url": `${baseUrl}/services/ai-automation`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cyber Security Audits & VAPT",
            "description": "Comprehensive vulnerability assessments, penetration testing, and security audits to protect corporate assets.",
            "url": `${baseUrl}/services/cybersecurity-vapt`
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
    "inLanguage": "en-IN",
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/services?q={search_term_string}`,
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
