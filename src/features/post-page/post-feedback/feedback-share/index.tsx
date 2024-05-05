import { PropsWithPost } from '@/@types'
import { METADATA } from '@/app.config'
import Link from 'next/link'

export function FeedbackShare({ post }: PropsWithPost) {
  const postLink = `${METADATA.canonical_url}/posts/${post.category}/${post.slug}`

  const links = [
    {
      id: crypto.randomUUID(),
      name: 'Facebook',
      icon: null,
      link: `https://www.facebook.com/sharer/sharer.php?u=${postLink}`,
    },
    {
      id: crypto.randomUUID(),
      name: 'X | Twitter',
      icon: null,
      link: `https://twitter.com/intent/tweet?text=${post.title}%20%23Fennec%20Tales%20Studio%20${postLink}`,
    },
  ]

  return (
    <div className="flex items-center gap-1">
      <span>Share this article: </span>

      {
        links.map(link => (
          <div key={link.id}>
            <Link href={link.link}>{link.name}</Link>
          </div>
        ))
      }
    </div>
  )
}
