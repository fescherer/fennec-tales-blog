import { PropsWithPost } from '@/@types'

export function PostAuthor({ post }: PropsWithPost) {
  return (
    <div>
      <span>{post.title}</span>
      <span>PostAuthor</span>
    </div>
  )
}
