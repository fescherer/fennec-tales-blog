import { PropsWithPost } from '@/@types'
import dynamic from 'next/dynamic'

export function PostContent({ post }: PropsWithPost) {
  const MarkdownContent = dynamic(
    () => import(`@/blog/${post.category}/${post.slug}.mdx`),
  )

  return (
    <MarkdownContent />
  )
}
