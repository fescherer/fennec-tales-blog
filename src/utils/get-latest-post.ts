import { IPost } from '@/@types'

export function getLastestPost(posts: IPost[]) {
  let latest = posts[0]
  let latestDate = new Date(posts[0].updated_at)
  posts.forEach((post) => {
    const postDate = new Date(post.updated_at)
    if (postDate.getTime() > latestDate.getTime()) {
      latest = post
      latestDate = postDate
    }
  })

  return latest
}
