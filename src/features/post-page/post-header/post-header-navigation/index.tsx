import { PropsWithPost } from '@/@types'
import Link from 'next/link'

export function PostHeaderNavigation({ post }: PropsWithPost) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2 text-sm capitalize">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href={`/${post.category}`}>{post.category}</Link>
        <span>/</span>
        <Link className="text-accent" href={`/${post.category}/${post.slug}`}>{post.slug}</Link>
      </div>

      <div className="flex text-sm">
        <span>In:&nbsp;</span>

        <Link href={`/${post.category}`} className="capitalize text-primary-label-secondary">
          {post.category}
        </Link>

        <span>,&nbsp;</span>

        {post.tags.map((tag, index) => (
          <span key={tag}>
            <Link className="capitalize text-primary-label-secondary" href={`/tag/${tag}`}>{tag}</Link>
            {index != post.tags.length - 1 && `, `}
            &nbsp;
          </span>
        ))}
      </div>
    </div>
  )
}
