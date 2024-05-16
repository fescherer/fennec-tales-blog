import { PostCard } from '@/components'
import { FilterTags } from './filter-tags'
import { IPost } from '@/@types'
import { JSONLD } from '@/utils/JSONLD'
import { WebSite } from 'schema-dts'
import { websiteJSONLD } from '@/utils/JSONLD/data/website'
import { getAllTags } from '@/utils/functions'
import { Pagination } from '@/features/pagination'
import { PAGES_NUMBER } from '@/utils/consts'
import { Suspense } from 'react'
import { IconNotFound } from '@/icons/not-found'

type PostListProps = {
  posts: IPost[]
  type: string
  query?: string
  page?: string
  tag?: string
}

export async function PostList({ type, posts, tag, query, page }: PostListProps) {
  const safeFilter = query?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const rg = new RegExp(`^(?=.*\\b${safeFilter}).*$`, 'gmi')

  const currentPage = Number(page) || 0
  const filteredPosts = query ? posts.filter(item => item.slug.match(rg)) : posts
  const postsByPage = filteredPosts.slice(currentPage * PAGES_NUMBER, currentPage * PAGES_NUMBER + PAGES_NUMBER)

  const alltags = await getAllTags()

  return (
    <div className="relative w-[calc(100%-208px)] flex-1">
      <FilterTags alltags={alltags} type={type} tag={tag} />
      {JSONLD<WebSite>(websiteJSONLD)}

      {!filteredPosts.length
        ? (
          <>
            <div className="flex justify-center text-accent">
              <IconNotFound />
            </div>

            <h2 className="text-center text-3xl font-medium text-primary-label-primary">Sorry, no articles were found</h2>
            <h2 className="text-center text-2xl text-primary-label-secondary">But you can take a look at our recent articles</h2>

            <div className="m-auto mt-10 grid max-w-[1200px] grid-cols-[repeat(auto-fill,_minmax(315px,_1fr))] gap-4">
              <PostCard key={posts[0].slug} post={posts[0]} />
              <PostCard key={posts[1].slug} post={posts[1]} />
              <PostCard key={posts[2].slug} post={posts[2]} />
            </div>
          </>
          )
        : (
          <div className="m-auto grid max-w-[3000px] grid-cols-[repeat(auto-fill,_minmax(315px,_1fr))] gap-4">
            {
        postsByPage.map(post => (
          <PostCard key={post.slug} post={post} />
        ))
      }
          </div>
          )}

      <Suspense key="pagination">
        <Pagination posts={filteredPosts} />
      </Suspense>
    </div>
  )
}
