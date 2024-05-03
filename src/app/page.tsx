import { PostList } from '@/features/post-list'
import { getPostsData, sortPosts } from '@/utils/post-functions'

export default async function Home() {
  const posts = (await getPostsData()).sort(sortPosts)

  return (
    <PostList posts={posts} type="" />
  )
}
