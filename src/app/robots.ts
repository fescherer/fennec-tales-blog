import { METADATA } from '@/app.config'
import { type MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: ['/api/*'],
    },
    sitemap: `${METADATA.canonical_url}/sitemap.xml`,
  }
}
