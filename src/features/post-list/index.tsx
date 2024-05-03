import { PostCard } from '@/components'
import { Menu } from '@/components/menu'
import { FilterTags } from './filter-tags'
import { IPost } from '@/@types'
import { JSONLD } from '@/utils/JSONLD'
import { WebSite } from 'schema-dts'
import { websiteJSONLD } from '@/utils/JSONLD/data/website'
import { getAllTags } from '@/utils/functions'

type PostListProps = {
  posts: IPost[]
  type: string
  tag?: string
}

export async function PostList({ type, posts, tag }: PostListProps) {
  const alltags = getAllTags(posts)

  return (
    <div className="flex gap-2">
      <Menu className="hidden md:block" />

      <div className="relative w-[calc(100%-208px)] flex-1">
        <FilterTags alltags={alltags} type={type} tag={tag} />
        {JSONLD<WebSite>(websiteJSONLD)}

        <div className="m-auto grid max-w-[3000px] grid-cols-[repeat(auto-fill,_minmax(315px,_1fr))] gap-4">
          {
            posts.map(post => (
              <PostCard key={post.slug} post={post} />
            ))
          }
        </div>
      </div>

    </div>
  )
}
