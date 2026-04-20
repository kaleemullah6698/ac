import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: 'https://acprojeddah.sa/sitemap.xml',
    host: 'https://acprojeddah.sa',
  };
}
