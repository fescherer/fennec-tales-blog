import { slugyfy } from '@/utils/slugfy'
import Link from 'next/link'

type PostIndexListProps = {
  list: any[]
}

export function getStyleForHeading(level: number) {
  switch (level) {
    case 1: {
      return 'text-base'
    }
    case 2: {
      return 'text-sm'
    }
    case 3: {
      return 'text-xs ml-2'
    }
    default: {
      return 'text-xs'
    }
  }
}

export function PostTableOfContentList({ list }: PostIndexListProps) {
  return (
    <nav className="flex flex-col overflow-hidden ">
      {list.map(heading => (
        <Link
          target="_self"
          href={`#${slugyfy(heading.title)}`}
          key={heading.title}
          className={`p-2 transition-all hover:bg-secondary hover:text-secondary-label-primary ${getStyleForHeading(heading.level)}`}
        >
          {heading.title}
        </Link>
      ))}
    </nav>
  )
}
