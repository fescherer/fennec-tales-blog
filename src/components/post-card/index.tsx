import { IPost } from '@/@types'
import { getTimeFormated } from '@/utils/functions'
import Image from 'next/image'
import Link from 'next/link'
import readingTime from 'reading-time'
import { Ribbon } from '../ribbon'
import { Separator } from '../separator'

type PostCardProps = {
  post: IPost
}

export function PostCard({ post }: PostCardProps) {
  const publishedDate = getTimeFormated(post.updated_at ? post.updated_at : post.published_date)
  const postTime = Math.ceil(readingTime(post.content).minutes)

  const postUpdatedTime = new Date(post.updated_at)
  const postPublishedTime = new Date(post.published_date)
  const today = new Date()
  const isRecentUpdated = postUpdatedTime.getTime() > today.getTime() - 1000 * 60 * 60 * 24 * 3 // 3 Days
  const isNew = postPublishedTime.getTime() > today.getTime() - 1000 * 60 * 60 * 24 * 3

  return (
    <Link href={`/posts/${post.category}/${post.slug}`} className="group relative flex w-full flex-col rounded-sm border border-transparent bg-secondary transition-all hover:border-secondary-border" title={post.title}>

      <div className="overflow-hidden">
        <Image src={post.image} width={720} height={404} alt="image" className="transition-all group-hover:scale-110" />
      </div>

      {isNew && <Ribbon title="New" />}
      {isRecentUpdated && <Ribbon title="Recent Updated" />}

      <div className="flex flex-1 flex-col gap-4 p-2">
        {/* <small className="capitalize">{post.category}</small> */}

        <div className="my-2 h-full flex-1">
          <h2 className="mb-2 line-clamp-3 text-lg font-medium text-secondary-label-primary transition-colors group-hover:text-accent">{post.title}</h2>
          <p className="line-clamp-3 flex-1 text-secondary-label-secondary">{post.content}</p>
        </div>

        <Separator layer="secondary" />

        <div className="flex justify-between text-sm text-secondary-label-secondary">
          <time dateTime={publishedDate}>{publishedDate}</time>
          <span>{`${postTime} minute${postTime > 1 ? 's' : ''} read`}</span>
        </div>
      </div>
    </Link>
  )
}
