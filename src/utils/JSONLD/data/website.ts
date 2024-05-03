import type { WebSite, WithContext } from 'schema-dts'
import { DATA, METADATA } from '@/app.config'
import { publisherJSONLD } from './publisher'

export const websiteJSONLD: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': DATA.company,
  'description': METADATA.description,
  'image': {
    '@type': 'ImageObject',
    'url': METADATA.thumb.url,
    'width': `${METADATA.thumb.width}px`,
    'height': `${METADATA.thumb.height}px`,
  },
  'url': METADATA.canonical_url,
  'publisher': publisherJSONLD,
  'mainEntityOfPage': {
    '@type': 'WebPage',
    '@id': METADATA.canonical_url,
  },
}
