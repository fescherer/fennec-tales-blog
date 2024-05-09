import { ISourceReference } from '@/@types'
import { Link } from '@/components'
import { getTimeFormated } from '@/utils/functions'

interface SourceRefProps {
  item: ISourceReference
}

export function SourcesRef({ item }: SourceRefProps) {
  const dateTime = getTimeFormated(item.date)

  return (
    <p>
      <Link aria-label={`Link for source ${item.title}`} href={item.link} target="_blank">
        {`${item.title}`}
      </Link>

      <span>
        .
        {' '}
        Access at
        {' '}
        <time dateTime={dateTime}>{dateTime}</time>
      </span>
    </p>
  )
}
