import { PropsWithPost } from '@/@types'
import { AUTHORS_DATA } from '@/authors.config'
import { Card } from '@/components/card'
import { Tooltip } from '@/components/tooltip'
import { SocialIcon } from '@/icons/social-icon'
import Image from 'next/image'
import Link from 'next/link'

export function PostAuthor({ post }: PropsWithPost) {
  const author = AUTHORS_DATA.find(item => item.id === post.author)
  if (!author) {
    return <></>
  } else {
    return (
      <Card title="About the author">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <Image
            className="rounded-full border-2 border-accent"
            src={author.image}
            width={80}
            height={80}
            unoptimized
            alt={`Profile of ${author.full_name}`}
          />

          <div className="flex-1">
            <small className="text-xs">Written by:</small>

            <div className="flex items-center gap-1">
              <h3>{author.full_name}</h3>
              {' - '}
              <small className="text-xs">{author.profession}</small>
            </div>

            <p className="mt-2">{author.bio}</p>

            <div className="flex items-center py-4">
              {author.profiles.map(social => (
                <Tooltip key={social.id} tooltip={social.name}>
                  <Link className="rounded p-2 transition-all hover:bg-secondary hover:text-secondary-label-primary" rel="noopener" target="_blank" href={social.url} title={social.name}><SocialIcon id={social.id as any} /></Link>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </Card>
    )
  }
}
