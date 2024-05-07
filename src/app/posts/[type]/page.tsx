import { PropsWithSearchProps } from '@/@types/props'
import { Header } from '@/components/header'
import { Menu } from '@/components/menu'
import { PostList } from '@/features/post-list'
import { getCategoriesName, getPostsData, sortPosts } from '@/utils/post-functions'
import { Suspense } from 'react'

interface PostsByCategoryProps {
  params: {
    type: string
  }
}

export function generateStaticParams() {
  const categories = getCategoriesName()
  return categories.map(category => ({ type: category }))
}

export default async function TypePage({ params: { type }, searchParams }: PropsWithSearchProps<PostsByCategoryProps>) {
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 0

  const posts = (await getPostsData()).filter(post => post.category === type).sort(sortPosts)
  return (
    <>
      <Header />

      <main className="flex-1 p-4 pt-[90px] md:pt-[66px]">
        <div className="flex gap-2">
          <Menu className="hidden md:block" />

          <Suspense key={query + currentPage} fallback={<span>Loading</span>}>
            <PostList query={searchParams?.query} page={searchParams?.page} posts={posts} type={type} />
          </Suspense>
        </div>
      </main>
    </>
  )
}
