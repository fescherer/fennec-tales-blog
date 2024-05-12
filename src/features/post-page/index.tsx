import { PropsWithPost } from '@/@types'
import { PostContent } from './post-content'
import { PostFeedback } from './post-feedback'
import { RelatedPosts } from '../../components/related-posts'
import { PostAside } from './post-aside'
import { PostTableOfContent } from '@/components/post-table-of-content'
import { PostHeader } from './post-header'
import { PostEditThisArticle } from './post-edit-this-article'
import { ScrollToTopBtn } from '@/components/scroll-to-top-btn'
import { ReadingBarIndicator } from './reading-bar-indicator'
import { PostReference } from './post-reference'
import { PostAuthor } from './post-author'

export function PostPage({ post }: PropsWithPost) {
  return (
    <>
      <ReadingBarIndicator />

      <div className="m-auto max-w-6xl">

        <div
          style={{ backgroundImage: `url(${post.image})` }}
          className="absolute left-0 top-0 -z-10 h-1/2 w-full bg-cover blur-sm brightness-75"
        />

        <div className="relative mt-12 flex flex-col-reverse gap-8 rounded bg-primary p-4 lg:flex-row">
          <article className="space-y-10">
            <PostHeader post={post} />

            <div className="block pt-8 lg:hidden">
              <PostTableOfContent post={post} />
            </div>

            <PostContent post={post} />
            <PostReference post={post} />
            <PostAuthor post={post} />
            <PostFeedback post={post} />
            <PostEditThisArticle post={post} />

            <div className="block md:hidden">
              <RelatedPosts post={post} orientation="vertical" />
            </div>

            <div className="hidden md:block">
              <RelatedPosts post={post} orientation="horizontal" />
            </div>

            {/* TODO POST COMMENTS */}
            {/* <PostComments post={post} /> */}
          </article>

          <PostAside post={post} />
          <ScrollToTopBtn />
        </div>

      </div>
    </>
  )
}
