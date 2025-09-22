import React, { useEffect } from 'react';

interface EnhancedSEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  locale?: string;
  siteName?: string;
}

const EnhancedSEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  author = "Live4Life Medical Center",
  publishedTime,
  modifiedTime,
  locale = "bg_BG",
  siteName = "Медицински център Live4Life"
}: EnhancedSEOHeadProps) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Remove existing meta tags to avoid duplicates
    const existingMetas = document.querySelectorAll('meta[data-seo="true"]');
    existingMetas.forEach(meta => meta.remove());

    // Create and append meta tags
    const metaTags = [
      { name: "description", content: description },
      { name: "author", content: author },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "theme-color", content: "#E0AE18" },
      
      // Open Graph tags
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
      { property: "og:locale", content: locale },
      { property: "og:site_name", content: siteName },
      
      // Twitter tags
      { name: "twitter:card", content: twitterCard },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      
      // Additional SEO tags
      { name: "revisit-after", content: "7 days" },
      { name: "distribution", content: "global" },
      { name: "rating", content: "general" }
    ];

    // Add keywords if provided
    if (keywords) {
      metaTags.push({ name: "keywords", content: keywords });
    }

    // Add canonical URL if provided
    if (canonical) {
      metaTags.push({ property: "og:url", content: canonical });
      
      // Add canonical link
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Add OG image if provided
    if (ogImage) {
      metaTags.push(
        { property: "og:image", content: ogImage },
        { property: "og:image:alt", content: title },
        { name: "twitter:image", content: ogImage },
        { name: "twitter:image:alt", content: title }
      );
    }

    // Add published/modified time if provided
    if (publishedTime) {
      metaTags.push({ property: "article:published_time", content: publishedTime });
    }
    if (modifiedTime) {
      metaTags.push({ property: "article:modified_time", content: modifiedTime });
    }

    // Append all meta tags
    metaTags.forEach(({ name, property, content }) => {
      const meta = document.createElement('meta');
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      meta.setAttribute('content', content);
      meta.setAttribute('data-seo', 'true');
      document.head.appendChild(meta);
    });

    // Add preconnect links for performance
    const preconnectUrls = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.googletagmanager.com'
    ];

    preconnectUrls.forEach(url => {
      let link = document.querySelector(`link[href="${url}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'preconnect');
        link.setAttribute('href', url);
        if (url.includes('gstatic')) {
          link.setAttribute('crossorigin', '');
        }
        document.head.appendChild(link);
      }
    });

  }, [title, description, keywords, canonical, ogImage, ogType, twitterCard, author, publishedTime, modifiedTime, locale, siteName]);

  return null;
};

export default EnhancedSEOHead;