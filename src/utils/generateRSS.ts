import { Feed } from 'feed'
import { getPostsData } from './post-functions'
import { DATA, METADATA } from '@/app.config'
import { AUTHORS_DATA } from '@/authors.config'

export async function generateRss() {
  const feed = new Feed({
    title: DATA.appName,
    description: METADATA.description,
    id: METADATA.canonical_url,
    link: METADATA.canonical_url,
    language: 'en',
    image: `${METADATA.canonical_url}${METADATA.thumb}`,
    favicon: `${METADATA.canonical_url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${DATA.appName}`,
    updated: new Date(),
    feedLinks: {
      json: `${METADATA.canonical_url}/feed.json`,
      atom: `${METADATA.canonical_url}/feed.atom`,
      rss: `${METADATA.canonical_url}/feed.xml`,
    },
    author: {
      name: AUTHORS_DATA[0].full_name,
      email: AUTHORS_DATA[0].profiles[0].url,
      link: AUTHORS_DATA[0].profiles[0].url,
    },
  })

  const articles = await getPostsData()
  articles.map((post) => {
    return feed.addItem({
      title: post.title,
      id: `${METADATA.canonical_url}/posts/${post.category}/${post.slug}`,
      guid: `${METADATA.canonical_url}/posts/${post.category}/${post.slug}`,
      link: `${METADATA.canonical_url}/posts/${post.category}/${post.slug}`,
      date: new Date(post.published_date),
      description: post.content.slice(0, 300),
      author: [{ name: post.author, link: AUTHORS_DATA[0].profiles[0].url, email: AUTHORS_DATA[0].profiles[0].url }],
      content: 'post.content',
      image: post.image,
    })
  })

  feed.addCategory('Technology')

  feed.addContributor({ name: AUTHORS_DATA[0].full_name, link: AUTHORS_DATA[0].profiles[0].url, email: AUTHORS_DATA[0].profiles[0].url })

  return {
    rss: feed.rss2(),
    atom: feed.atom1(),
    json: feed.json1(),
  }
}
