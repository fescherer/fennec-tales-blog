import { PropsWithPost } from '@/@types'
import { getTimeFormated } from '@/utils/functions'
import readingTime from 'reading-time'

export function PostHeaderTitle({ post }: PropsWithPost) {
  const publishedDate = getTimeFormated(post.published_date)
  const updatedDate = post.updated_at ? getTimeFormated(post.updated_at) : ''
  const postTime = Math.ceil(readingTime(post.content).minutes)

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-4xl font-medium">{post.title}</h1>

      <p className="flex flex-col gap-4 text-sm md:flex-row">
        <span>
          Published at&nbsp;
          {publishedDate}

        </span>

        <span className="hidden md:block">●</span>

        <span>
          Updated at&nbsp;
          {updatedDate}

        </span>

        <span className="hidden md:block">●</span>

        <span>
          {postTime}
          &nbsp;
          minutes read
        </span>
      </p>

      {false && (
        <div>THis post was recently updated</div>
      )}
    </div>
  )
}
