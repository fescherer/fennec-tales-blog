import { PostList } from '@/features/post-list'
import { getCategoriesName, getPostsData, sortPosts } from '@/utils/post-functions'

interface PostsByCategoryProps {
  params: {
    type: string
  }
}

export function generateStaticParams() {
  const categories = getCategoriesName()
  return categories.map(category => ({ type: category }))
}

export default async function TypePage({ params: { type } }: PostsByCategoryProps) {
  const posts = (await getPostsData()).filter(post => post.category === type).sort(sortPosts)
  return (
    <PostList posts={posts} type={type} />
  )
}
