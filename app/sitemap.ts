import { MetadataRoute } from 'next';
import { getAllServices } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.techpotlidigital.com';
  const now = new Date('2025-12-05T09:29:10+00:00');
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/live-projects`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    // Package pages
    {
      url: `${baseUrl}/packages/website-services`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/packages/ecommerce`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/packages/social-seo`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/packages/website-leads`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/packages/one-time-setup`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/packages/full-stack-website-services`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/packages/full-stack`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/website-design-development`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/seo-services`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/social-media-marketing`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/google-meta-ads`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/branding-creative-design`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/domain-hosting-support`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.64,
    },
    {
      url: `${baseUrl}/services/full-stack-development`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.64,
    },
    {
      url: `${baseUrl}/services/custom-software-development`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.64,
    },
    {
      url: `${baseUrl}/services/crm-development`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.64,
    },
    {
      url: `${baseUrl}/services/it-services`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.64,
    },
    // Legal pages
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/shipping-policy`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/refund-return-policy`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  // Dynamic service pages
  const services = getAllServices();
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}

