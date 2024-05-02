import { PostCard } from '@/components'
import { Menu } from '@/components/menu'
import { getLastestPost } from '@/utils/get-latest-post'
import { getPostsData } from '@/utils/post-functions'

export async function HomePage() {
  const posts = await getPostsData()
  const latestPost = getLastestPost(posts)
  const filteredPosts = posts.filter(post => post.slug !== latestPost.slug)

  return (
    <div className="flex gap-2">
      <Menu className="hidden md:block" />

      <div className="w-[calc(100%-208px)] flex-1">
        <div className="m-auto grid max-w-[3000px] grid-cols-[repeat(auto-fill,_minmax(315px,_1fr))] gap-4">
          <PostCard text="Latest" post={latestPost} />

          {
            filteredPosts.map(post => (
              <PostCard key={post.slug} post={post} />
            ))
          }
        </div>
      </div>

    </div>
  )
}
