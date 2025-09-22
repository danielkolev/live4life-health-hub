// SEO utilities for generating structured data and meta tags

export const generateMedicalOrganizationSchema = (
  name: string,
  description: string,
  url: string,
  address: {
    streetAddress: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  },
  contact: {
    telephone: string;
    email: string;
  },
  coordinates?: {
    latitude: string;
    longitude: string;
  },
  services?: string[],
  specialties?: string[]
) => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": name,
    "description": description,
    "url": url,
    "telephone": contact.telephone,
    "email": contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.city,
      "addressRegion": address.region,
      "postalCode": address.postalCode,
      "addressCountry": address.country
    },
    ...(coordinates && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": coordinates.latitude,
        "longitude": coordinates.longitude
      }
    }),
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    ...(specialties && { "medicalSpecialty": specialties }),
    ...(services && {
      "availableService": services.map(service => ({
        "@type": "MedicalProcedure",
        "name": service
      }))
    }),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Медицински услуги",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Профилактични прегледи"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "MedicalTest",
            "name": "Лабораторни изследвания"
          }
        }
      ]
    }
  };
};

export const generateWebPageSchema = (
  name: string,
  description: string,
  url: string,
  breadcrumbs?: Array<{ name: string; url: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "url": url,
    "publisher": {
      "@type": "Organization",
      "name": "Медицински център Live4Life",
      "url": "https://live4life-medical.com"
    },
    "potentialAction": {
      "@type": "ReadAction",
      "target": [url]
    },
    ...(breadcrumbs && {
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      }
    })
  };
};

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateLocalBusinessSchema = (
  name: string,
  description: string,
  url: string,
  address: {
    streetAddress: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  },
  contact: {
    telephone: string;
    email: string;
  },
  coordinates?: {
    latitude: string;
    longitude: string;
  }
) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": url,
    "name": name,
    "description": description,
    "url": url,
    "telephone": contact.telephone,
    "email": contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.city,
      "addressRegion": address.region,
      "postalCode": address.postalCode,
      "addressCountry": address.country
    },
    ...(coordinates && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": coordinates.latitude,
        "longitude": coordinates.longitude
      }
    }),
    "openingHours": ["Mo-Fr 08:00-18:00"],
    "priceRange": "$$",
    "currenciesAccepted": "BGN",
    "paymentAccepted": "Cash, Credit Card",
    "areaServed": {
      "@type": "City",
      "name": "София"
    }
  };
};

// Generate meta tags for better SEO
export const generateMetaTags = (
  title: string,
  description: string,
  keywords?: string,
  canonical?: string,
  ogImage?: string
) => {
  return [
    { name: "description", content: description },
    { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    ...(keywords ? [{ name: "keywords", content: keywords }] : []),
    ...(canonical ? [{ property: "og:url", content: canonical }] : []),
    ...(ogImage ? [
      { property: "og:image", content: ogImage },
      { name: "twitter:image", content: ogImage }
    ] : [])
  ];
};