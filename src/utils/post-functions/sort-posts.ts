import { IPost } from '@/@types'

export function sortPosts(articleA: IPost, articleB: IPost) {
  const dateArticleA = articleA.updated_at ? new Date(articleA?.updated_at) : new Date(articleA.published_date)
  const dateArticleB = articleB.updated_at ? new Date(articleB?.updated_at) : new Date(articleB.published_date)

  if (dateArticleA > dateArticleB)
    return -1

  if (dateArticleA < dateArticleB)
    return 1

  return 0
}
