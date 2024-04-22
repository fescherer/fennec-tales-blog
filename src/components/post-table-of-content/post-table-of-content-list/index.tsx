import { slugyfy } from '@/utils/slugfy'
import Link from 'next/link'

type PostIndexListProps = {
  list: any[]
}

export function getStyleForHeading(level: number) {
  switch (level) {
    case 1: {
      return 'text-base opacity-90'
    }
    case 2: {
      return 'text-sm opacity-80'
    }
    case 3: {
      return 'text-xs opacity-60'
    }
    default: {
      return 'text-xs opacity-60'
    }
  }
}

export function PostTableOfContentList({ list }: PostIndexListProps) {
  return (
    <div className="flex flex-col gap-1 ">
      {list.map(heading => (
        <Link
          target="_self"
          href={`#${slugyfy(heading.title)}`}
          key={heading.title}
          className={`${getStyleForHeading(heading.level)}`}
        >
          {heading.title}
        </Link>
      ))}
    </div>
  )
}
