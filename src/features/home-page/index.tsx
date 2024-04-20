import { PostCard } from '@/components'
import { PostCardBig } from '@/components/post-card-big'
import { getLastestPost } from '@/utils/get-latest-post'
import { getPostsData } from '@/utils/post-functions'

export async function HomePage() {
  const posts = await getPostsData()
  const latestPost = getLastestPost(posts)
  const recommendID = Math.floor(Math.random() * posts.length - 1)

  const filteredPosts = posts.filter(post => post.slug !== latestPost.slug)

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="col-span-4 flex flex-col xs:col-span-1 md:col-span-1 lg:col-span-2">
          <span>Latest</span>
          <PostCard orientation="vertical" post={latestPost} />
        </div>

        <div className="col-span-4 flex flex-col xs:col-span-1 md:col-span-2 lg:col-span-2">
          <span>Recommended</span>
          <PostCardBig post={posts[recommendID]} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          filteredPosts.map(post => (
            <PostCard orientation="vertical" key={post.slug} post={post} />
          ))
        }
      </div>
    </div>
  )
}
