import { IPost, IRecommendedPost } from '@/@types'
import { getPostsData } from './post-functions'

export function getTimeFormated(dateString: string) {
  const date = new Date(dateString)
  const publishedDate = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date)

  return publishedDate
}

export function getRecommendedPosts(post: IPost, allPost: IPost[]): IRecommendedPost[] {
  const recommendedPosts: IRecommendedPost[] = []

  allPost.forEach((item) => {
    if (item.slug !== post.slug) {
      let points = 0
      item.tags.forEach((tag) => {
        if (post.tags.includes(tag))
          points += 1
      })
      recommendedPosts.push({ id: item.slug, points, post: item })
    }
  })

  const sorted = recommendedPosts.sort(({ points: pointsA }, { points: pointsB }) => pointsB - pointsA)

  return sorted.slice(0, 3)
}

export async function getAllTags() {
  const posts = await getPostsData()

  const contentField: string[] = []
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!contentField.includes(tag))
        contentField.push(tag)
    })
  })
  return contentField
}

export async function getAllCategories() {
  const posts = await getPostsData()

  const contentField: string[] = []
  posts.forEach((post) => {
    if (!contentField.includes(post.category))
      contentField.push(post.category)
  })

  return contentField
}

export function getPostsSortedByDate(postA: IPost, postB: IPost) {
  const datePostA = postA.updated_at ? new Date(postA?.updated_at) : new Date(postA.published_date)
  const datePostB = postB.updated_at ? new Date(postB?.updated_at) : new Date(postB.published_date)

  if (datePostA > datePostB)
    return -1

  if (datePostA < datePostB)
    return 1

  return 0
}
