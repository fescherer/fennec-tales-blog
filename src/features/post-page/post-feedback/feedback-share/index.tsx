import { PropsWithPost } from '@/@types'
import { DATA, METADATA } from '@/app.config'
import { FacebookIcon, LinkedinIcon, PinterestIcon, RedditIcon, TelegramIcon, TwitterIcon, WhatsAppIcon } from '@/icons'
import Link from 'next/link'
import { CopyBtn } from '@/components/copy-btn'
import { Tooltip } from '@/components/tooltip'

export function FeedbackShare({ post }: PropsWithPost) {
  const postLink = encodeURIComponent(`${METADATA.canonical_url}/posts/${post.category}/${post.slug}`)
  const postTitle = encodeURIComponent(post.title)
  const postDescription = encodeURIComponent(post.content.slice(0, 300))
  const community = encodeURIComponent(DATA.company)

  const links = [
    {
      id: crypto.randomUUID(),
      name: 'WhatpsApp',
      icon: <WhatsAppIcon />,
      link: `https://wa.me/send?text=${postTitle}%0A${postLink}`,
    },
    {
      id: crypto.randomUUID(),
      name: 'Telegram',
      icon: <TelegramIcon />,
      link: `https://telegram.me/share/url?url=${postLink}&text=${postTitle}`,
    },
    {
      id: crypto.randomUUID(),
      name: 'Linkedin',
      icon: <LinkedinIcon />,
      link: `https://www.linkedin.com/shareArticle?mini=true&amp;url=${postLink}&amp;title=${postTitle}&amp;summary=${postDescription}&amp;source=${community}`,
    },
    {
      id: crypto.randomUUID(),
      name: 'Pinterest',
      icon: <PinterestIcon />,
      link: `http://pinterest.com/pin/create/button/?url=${postLink}`,
    },
    {
      id: crypto.randomUUID(),
      name: 'Facebook',
      icon: <FacebookIcon />,
      link: `https://www.facebook.com/sharer/sharer.php?u=${postLink}`,
    },
    {
      id: crypto.randomUUID(),
      name: 'X | Twitter',
      icon: <TwitterIcon />,
      link: `https://twitter.com/intent/tweet?text=${postTitle}%20%23FennecTalesStudio%20${postLink}`,
    },
    {
      id: crypto.randomUUID(),
      name: 'Reddit',
      icon: <RedditIcon />,
      link: `https://www.reddit.com/submit?url=${postLink}&amp;title=${postTitle}`,
    },
  ]

  return (
    <div className="flex items-center gap-2 px-2">
      <CopyBtn text={`${METADATA.canonical_url}/posts/${post.category}/${post.slug}`} />

      {
        links.map(link => (
          <Tooltip key={link.id} tooltip={link.name}>
            <Link className="rounded p-2 transition-all hover:bg-secondary hover:text-secondary-label-primary" rel="noopener" target="_blank" href={link.link} title={link.name}>{link.icon}</Link>
          </Tooltip>
        ))
      }
    </div>
  )
}
