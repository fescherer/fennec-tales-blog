import { IPost } from '@/@types'
import { PostCard } from '@/components'
import { IconNotFound } from '@/icons/not-found'

type SearchNotFoundProps = {
  posts: IPost[]
}

export function SearchNotFound({ posts }: SearchNotFoundProps) {
  return (
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
}
