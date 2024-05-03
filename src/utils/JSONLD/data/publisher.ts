import { DATA, METADATA } from '@/app.config'
import { WithContext, Organization } from 'schema-dts'

export const publisherJSONLD: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': DATA.company,
  'image': {
    '@type': 'ImageObject',
    'url': METADATA.thumb.url,
    'width': `${METADATA.thumb.width}px`,
    'height': `${METADATA.thumb.height}px`,
  },
  'logo': {
    '@type': 'ImageObject',
    'url': '/favicon.svg',
  },
  'url': METADATA.canonical_url,
}
