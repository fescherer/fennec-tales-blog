import { PropsWithPost } from '@/@types'

export function PostFeedback({ post }: PropsWithPost) {
  return (
    <div>
      <span>{post.title}</span>
      <span>PostFeedback</span>
    </div>
  )
}
