import type { Metadata } from "next";

export const siteConfig = {
      name: "Techpotli",
  description: "Complete digital solutions company in New Delhi, India. We provide website development, e-commerce platforms, SEO services, social media marketing, Google & Meta ads, custom software, CRM development, and full IT services.",
  url: "https://www.techpotlidigital.com",
  ogImage: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
  logo: "https://www.techpotlidigital.com/New_Techpotli_Logo_(2)[2].png",
  keywords: [
    "Techpotli",
    "website development company India",
    "e-commerce development",
    "SEO services New Delhi",
    "social media marketing",
    "Google ads management",
    "Meta ads management",
    "custom software development",
    "CRM development",
    "full stack development",
    "IT services",
    "digital marketing services",
    "web design New Delhi",
    "online business solutions"
  ],
  authors: [
    {
      name: "Techpotli",
      url: "https://www.techpotlidigital.com",
    },
  ],
  creator: "Techpotli",
  publisher: "Techpotli",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.techpotlidigital.com",
    siteName: "Techpotli",
    title: "Techpotli - Complete Digital Solutions & Web Development Services",
    description: "Complete digital solutions company in New Delhi, India. We provide website development, e-commerce platforms, SEO services, social media marketing, Google & Meta ads, custom software, CRM development, and full IT services.",
    images: [
      {
        url: "https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png",
        width: 1200,
        height: 630,
        alt: "Techpotli - Complete Digital Solutions & Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techpotli - Complete Digital Solutions & Web Development Services",
    description: "Complete digital solutions company in New Delhi, India. We provide website development, e-commerce platforms, SEO services, social media marketing, Google & Meta ads, custom software, CRM development, and full IT services.",
    images: ["https://res.cloudinary.com/dieth2xb3/image/upload/v1755799085/ssimage_bxr8i6.png"],
    creator: "@techpotlidigital",
  },
  verification: {
    google: "your-google-verification-code", 
  },
  alternates: {
    canonical: "https://www.techpotlidigital.com",
  },
  category: "technology",
};


export const pageMetadata = {
  home: {
    title: "Techpotli - Complete Digital Solutions & Web Development Services in New Delhi",
    description: "Techpotli helps businesses in New Delhi and across India grow online. We build websites, e-commerce stores, handle SEO, manage social media, run Google & Meta ads, develop custom software, and provide complete IT services. Get your business online today.",
    keywords: [
      "Techpotli",
      "website development New Delhi",
      "e-commerce development India",
      "SEO services",
      "social media marketing",
      "Google ads management",
      "web development company",
      "digital marketing services",
      "custom software development",
      "IT services New Delhi"
    ],
    openGraph: {
      title: "Techpotli - Complete Digital Solutions & Web Development Services",
      description: "Techpotli helps businesses in New Delhi and across India grow online. We build websites, e-commerce stores, handle SEO, manage social media, run Google & Meta ads, develop custom software, and provide complete IT services.",
      url: "https://www.techpotlidigital.com",
      type: "website",
    },
    twitter: {
      title: "Techpotli - Complete Digital Solutions & Web Development Services",
      description: "Techpotli helps businesses in New Delhi and across India grow online. We build websites, e-commerce stores, handle SEO, manage social media, run Google & Meta ads, develop custom software, and provide complete IT services.",
    },
    alternates: {
      canonical: "https://www.techpotlidigital.com",
    },
  },
  about: {
    title: "About Techpotli - Complete Digital Solutions Partner",
    description: "Learn about Techpotli - your trusted partner for e-commerce platforms, IT services, and digital marketing solutions. Based in New Delhi, we transform businesses with innovative technology.",
    keywords: [
      "Techpotli",
      "Techpotli",
      "e-commerce platform",
      "IT services",
      "digital marketing",
      "website development",
      "New Delhi",
      "full stack development",
      "CRM development",
      "SEO services"
    ],
    openGraph: {
      title: "About Techpotli - Complete Digital Solutions Partner",
      description: "Learn about Techpotli - your trusted partner for e-commerce platforms, IT services, and digital marketing solutions. Based in New Delhi, we transform businesses with innovative technology.",
      url: "https://www.techpotlidigital.com/about",
      type: "website",
    },
    twitter: {
      title: "About Techpotli - Complete Digital Solutions Partner",
      description: "Learn about Techpotli - your trusted partner for e-commerce platforms, IT services, and digital marketing solutions. Based in New Delhi, we transform businesses with innovative technology.",
    },
    alternates: {
      canonical: "https://www.techpotlidigital.com/about",
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Techpotli",
      "description": "Complete digital solutions company providing e-commerce platforms, IT services, and digital marketing solutions",
      "url": "https://www.techpotlidigital.com",
      "logo": "https://www.techpotlidigital.com/New_Techpotli_Logo_(2)[2].png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C52A, LGF, Kalka Ji",
        "addressLocality": "New Delhi",
        "postalCode": "110019",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-11-47200987",
        "contactType": "customer service"
      },
      "knowsAbout": [
        "E-Commerce Development",
        "Full Stack Development",
        "IT Services",
        "Digital Marketing",
        "SEO Services",
        "Social Media Marketing",
        "CRM Development",
        "Custom Software Development"
      ]
    }
  },
  blog: {
    title: "Digital Marketing & Web Development Blog - Techpotli",
    description: "Learn about website development, SEO tips, social media marketing strategies, Google ads best practices, and digital marketing insights from Techpotli's expert team.",
    keywords: [
      "digital marketing blog",
      "SEO tips",
      "website development blog",
      "social media marketing tips",
      "Google ads strategies",
      "web development insights",
      "digital marketing articles",
      "online business growth"
    ],
    openGraph: {
      title: "Digital Marketing & Web Development Blog - Techpotli",
      description: "Learn about website development, SEO tips, social media marketing strategies, Google ads best practices, and digital marketing insights from Techpotli's expert team.",
      url: "https://www.techpotlidigital.com/blog",
      type: "website",
    },
    twitter: {
      title: "Digital Marketing & Web Development Blog - Techpotli",
      description: "Learn about website development, SEO tips, social media marketing strategies, Google ads best practices, and digital marketing insights from Techpotli's expert team.",
    },
    alternates: {
      canonical: "https://www.techpotlidigital.com/blog",
    },
  },
};

export function generatePageMetadata(
  page: keyof typeof pageMetadata,
  customMetadata?: Partial<Metadata>
): Metadata {
  const baseMetadata = pageMetadata[page];
  
  return {
    title: baseMetadata.title,
    description: baseMetadata.description,
    keywords: baseMetadata.keywords,
    openGraph: {
      ...siteConfig.openGraph,
      ...baseMetadata.openGraph,
    },
    twitter: {
      ...siteConfig.twitter,
      ...baseMetadata.twitter,
    },
    alternates: baseMetadata.alternates,
    robots: siteConfig.robots,
    verification: siteConfig.verification,
    ...customMetadata,
  };
}


export function generateBlogPostMetadata(
  title: string,
  description: string,
  publishedTime: string,
  slug: string,
  image?: string
): Metadata {
  const blogUrl = `https://www.techpotlidigital.com/blog/${slug}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title: `${title} - Techpotli Blog`,
    description,
    keywords: [
      ...siteConfig.keywords,
      "digital marketing blog post",
      "web development article",
      "SEO insights"
    ],
    openGraph: {
      ...siteConfig.openGraph,
      title: `${title} - Techpotli Blog`,
      description,
      url: blogUrl,
      type: "article",
      publishedTime,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...siteConfig.twitter,
      title: `${title} - Techpotli Blog`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: blogUrl,
    },
    robots: siteConfig.robots,
  };
}


export function generateBlogPostStructuredData(
  title: string,
  description: string,
  publishedTime: string,
  slug: string,
  author?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    datePublished: publishedTime,
    dateModified: publishedTime,
    description,
    url: `https://www.techpotlidigital.com/blog/${slug}`,
    author: {
      "@type": "Person",
      name: author || "Techpotli Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Techpotli",
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.techpotlidigital.com/blog/${slug}`,
    },
  };
}


export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  robots: siteConfig.robots,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  verification: siteConfig.verification,
  alternates: siteConfig.alternates,
  category: siteConfig.category,
};
