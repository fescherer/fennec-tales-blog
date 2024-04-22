import { PropsWithPost } from '@/@types'

export function PostComments({ post }: PropsWithPost) {
  return (
    <div>
      <span>{post.title}</span>
      <span>PostComments</span>
    </div>
  )
}
