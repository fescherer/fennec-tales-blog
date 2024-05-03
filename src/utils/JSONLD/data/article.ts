import type { Article, WithContext } from 'schema-dts'
import { DATA, METADATA } from '@/app.config'
import { AUTHORS_DATA } from '@/authors.config'
import { publisherJSONLD } from './publisher'

export const articleJSONLD: WithContext<Article> = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'publisher': publisherJSONLD,
  'author': AUTHORS_DATA.map(author => ({
    '@type': 'Person',
    'name': author.full_name,
    'description': author.bio,
    'affiliation': DATA.company,
    'image': {
      '@type': 'ImageObject',
      'url': author.image,
      'width': '460px',
      'height': '460px',
    },
    'url': author.profiles.find(profile => profile.id === 'profile')?.url || METADATA.canonical_url,
    'sameAs': author.profiles.find(profile => profile.id !== 'profile')?.url || [],
  })),
}

export function getArticleJSONLD(props: Article) {
  return { ...articleJSONLD, ...props }
}
