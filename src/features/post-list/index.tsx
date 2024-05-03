import { PostCard } from '@/components'
import { FilterTags } from './filter-tags'
import { IPost } from '@/@types'
import { JSONLD } from '@/utils/JSONLD'
import { WebSite } from 'schema-dts'
import { websiteJSONLD } from '@/utils/JSONLD/data/website'
import { getAllTags } from '@/utils/functions'
import { Pagination } from '@/components/pagination'
import { PAGES_NUMBER } from '@/utils/consts'

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

      <div className="m-auto grid max-w-[3000px] grid-cols-[repeat(auto-fill,_minmax(315px,_1fr))] gap-4">
        {
          postsByPage.map(post => (
            <PostCard key={post.slug} post={post} />
          ))
        }
      </div>

      <Pagination posts={filteredPosts} />
    </div>
  )
}
