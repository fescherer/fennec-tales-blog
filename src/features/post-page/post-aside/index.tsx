import { PropsWithPost } from '@/@types'
import { PostAsideLinks } from './post-aside-links'
import { AllCategories } from '@/components/all-categories'
import { AllTags } from '@/components/all-tags'
import { RelatedPosts } from '@/components/related-posts'
import { PostTableOfContent } from '@/components/post-table-of-content'

// TODO: ADVERTISING, NEWSLETTER

export function PostAside({ post }: PropsWithPost) {
  return (
    <div className="relative flex w-full max-w-full items-start gap-2">
      <div className="styled-scrollbars sticky top-20 my-2 hidden max-h-[calc(100vh-6rem)] w-full min-w-80 space-y-10 overflow-y-scroll lg:flex lg:flex-col">
        {/* <div className="flex size-80 items-center justify-center bg-secondary">
          advertising
        </div> */}

        <PostTableOfContent post={post} />
        <PostAsideLinks post={post} />
        <AllCategories selectedCategory={post.category} />
        <AllTags selectedTag={post.tags} />
        {/* <PostAsideNewsletter /> */}
        <RelatedPosts post={post} orientation="vertical" />
      </div>
    </div>
  )
}
