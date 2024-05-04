import { PropsWithPost } from '@/@types'
import { Card } from '@/components/card'
import { PostAsideLink } from './post-aside-link'

export function PostAsideLinks({ post }: PropsWithPost) {
  const hasItems = post.project_url || post.figma_url || post.github_url || post.video_url

  if (hasItems) {
    return (
      <Card title="Links">
        <div className="flex flex-col">
          <PostAsideLink url={post.project_url} label="Link to post's project deploy">
            Deploy
          </PostAsideLink>

          <PostAsideLink url={post.figma_url} label="Link to post's project Figma page">
            Figma
          </PostAsideLink>

          <PostAsideLink url={post.github_url} label="Link to post's source code on Github">
            Github
          </PostAsideLink>

          <PostAsideLink url={post.video_url} label="Link to post's video on Youtube">
            Video
          </PostAsideLink>
        </div>
      </Card>
    )
  } else {
    return null
  }
}
