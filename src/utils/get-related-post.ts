import { IPost, IRecommendedPost } from '@/@types'

export function getRelatedPost(orginalPost: IPost, allPost: IPost[]): IRecommendedPost[] {
  const recommendedPosts: IRecommendedPost[] = []

  allPost.forEach((post) => {
    if (post.slug !== orginalPost.slug) {
      let points = 0
      post.tags.forEach((tag) => {
        if (orginalPost.tags.includes(tag))
          points += 1
      })
      const uniqueId = crypto.randomUUID()
      recommendedPosts.push({ id: uniqueId, points, post })
    }
  })

  const sorted = recommendedPosts.sort(({ points: pointsA }, { points: pointsB }) => pointsB - pointsA)

  return sorted.slice(0, 3)
}
