import { PropsWithPost } from '@/@types'

export function PostReference({ post }: PropsWithPost) {
  return (
    <div>
      <span>{post.title}</span>
      <span>reference</span>
    </div>
  )
}
