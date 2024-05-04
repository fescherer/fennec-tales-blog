import { PropsWithPost } from '@/@types'
import { PostContent } from './post-content'
import { PostReference } from './post-reference'
import { PostAuthor } from './post-author'
import { PostFeedback } from './post-feedback'
import { PostComments } from './post-comments'
import { RelatedPosts } from '../../components/related-posts'
import { PostAside } from './post-aside'
import { PostTableOfContent } from '@/components/post-table-of-content'
import { PostHeader } from './post-header'

export function PostPage({ post }: PropsWithPost) {
  return (
    <div className="m-auto max-w-6xl">
      <div
        style={{ backgroundImage: `url(${post.image})` }}
        className="absolute left-0 top-0 -z-10 h-1/2 w-full bg-cover blur-sm brightness-75"
      />

      <div className="z-10 mt-12 flex flex-col-reverse gap-8 rounded bg-primary p-4 lg:flex-row">
        <div>
          <PostHeader post={post} />

          <div className="block pt-8 lg:hidden">
            <PostTableOfContent post={post} />
          </div>

          <PostContent post={post} />
          <PostReference post={post} />
          <PostAuthor post={post} />
          <PostFeedback post={post} />
          {/* <EditThisArticle /> */}
          <RelatedPosts post={post} orientation="horizontal" />
          <PostComments post={post} />
        </div>

        <PostAside post={post} />
      </div>
    </div>
  )
}
