import { PostList } from '@/features/post-list'
import { getPostsData } from '@/utils/post-functions'

interface TagProps {
  params: {
    tag: string
  }
}

export default async function Tag({ params: { tag } }: TagProps) {
  const posts = (await getPostsData()).filter(post => post.tags.includes(tag))

  return (
    <PostList posts={posts} type="" tag={tag} />
  )
}
