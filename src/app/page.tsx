import { PropsWithSearchProps } from '@/@types/props'
import { ContentWrapper } from '@/components/content-wrapper'
import { Menu } from '@/components/menu'
import { PostList } from '@/features/post-list'
import { getPostsData, sortPosts } from '@/utils/post-functions'
import { Suspense } from 'react'

export default async function Home({ searchParams }: PropsWithSearchProps) {
  // const query = (await searchParams)?.query || ''
  // const currentPage = Number(searchParams?.page) || 0

  const posts = (await getPostsData()).sort(sortPosts)

  return (
    <ContentWrapper>
      <div className="flex gap-2">
        <Menu className="hidden md:block" />

        <Suspense fallback={<span>Loading</span>}>
          <PostList query={""} page={""} posts={posts} type="" />
        </Suspense>
      </div>
    </ContentWrapper>

  )
}
