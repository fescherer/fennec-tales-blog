import { METADATA } from '@/app.config'
import { getAllCategories, getAllTags } from '@/utils/functions'
import { getPostsData } from '@/utils/post-functions'

export default async function Sitemap() {
  const articles = await getPostsData()

  const posts = articles.map(post => ({
    url: `${METADATA.canonical_url}/${post.category}/${post.slug}`,
    lastModified: post.updated_at,
  }))

  const tags = (await getAllTags()).map(tag => ({
    url: `${METADATA.canonical_url}/tag/${tag}`,
    lastModified: new Date(),
  }))

  const categories = (await getAllCategories()).map(category => ({
    url: `${METADATA.canonical_url}/${category}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: METADATA.canonical_url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...categories,
    ...tags,
    ...posts,
  ]
}
