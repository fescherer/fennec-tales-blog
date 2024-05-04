import { IPost } from '@/@types'
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
