import { PropsWithSearchProps } from '@/@types/props'
import { Header } from '@/components/header'
import { Menu } from '@/components/menu'
import { PostList } from '@/features/post-list'
import { getPostsData, sortPosts } from '@/utils/post-functions'
import { Suspense } from 'react'

interface TagProps {
  params: {
    tag: string
  }
}

export default async function Tag({ params: { tag }, searchParams }: PropsWithSearchProps<TagProps>) {
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 0

  const posts = (await getPostsData()).filter(post => post.tags.includes(tag)).sort(sortPosts)
  return (
    <>
      <Header />

      <main className="flex-1 p-4 pt-[90px] md:pt-[66px]">
        <div className="flex gap-2">
          <Menu className="hidden md:block" />

          <Suspense key={query + currentPage} fallback={<span>Loading</span>}>
            <PostList query={searchParams?.query} page={searchParams?.page} posts={posts} type="" tag={tag} />
          </Suspense>
        </div>
      </main>
    </>
  )
}
