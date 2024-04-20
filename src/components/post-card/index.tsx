import { IPost } from '@/@types'
import { getTimeFormated } from '@/utils/functions'
import Image from 'next/image'
import Link from 'next/link'
import readingTime from 'reading-time'

type PostCardProps = {
  post: IPost
  orientation?: 'horizontal' | 'vertical'
}

export function PostCard({ post, orientation = 'horizontal' }: PostCardProps) {
  const classOrientation = orientation === 'vertical' ? 'flex-col' : orientation === 'horizontal' ? 'flex-row' : ''
  const publishedDate = getTimeFormated(post.updated_at ? post.updated_at : post.published_date)
  const postTime = Math.ceil(readingTime(post.content).minutes)

  return (
    <Link href={`${post.category}/${post.slug}`} className={`group flex overflow-hidden rounded-sm ${classOrientation} w-full border border-transparent bg-secondary transition-all hover:border-secondary-disabled`} title={post.title}>

      <div className="overflow-hidden">
        <Image src={post.image} width={853} height={568} alt="image" className="transition-all group-hover:scale-110" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-2">
        {/* <small className="capitalize">{post.category}</small> */}

        <div className="my-2 h-full flex-1">
          <h2 className="mb-2 line-clamp-3 text-lg font-medium text-secondary-label-primary transition-colors group-hover:text-accent">{post.title}</h2>
          <p className="line-clamp-3 flex-1 text-secondary-label-secondary">{post.content}</p>
        </div>

        <div className="h-1 w-full border-b border-secondary-label-disabled" />

        <div className="flex justify-between text-sm text-secondary-label-tertiary">
          <time dateTime={publishedDate}>{publishedDate}</time>
          <span>{`${postTime} minute${postTime > 1 ? 's' : ''} read`}</span>
        </div>
      </div>
    </Link>
  )
}
