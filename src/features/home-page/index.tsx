import { PostCard } from '@/components'
import { getLastestPost } from '@/utils/get-latest-post'
import { getPostsData } from '@/utils/post-functions'

export async function HomePage() {
  const posts = await getPostsData()
  const latestPost = getLastestPost(posts)
  const recommendID = Math.floor(Math.abs(Math.random() * posts.length))
  console.log(recommendID)
  const filteredPosts = posts.filter(post => post.slug !== latestPost.slug)

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 ">
        <PostCard orientation="vertical" post={latestPost} text="Latest" />
        <PostCard post={posts[recommendID]} orientation="vertical" text="Recommended" />
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
