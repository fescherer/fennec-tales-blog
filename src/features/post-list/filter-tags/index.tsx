import { getCategoriesName } from '@/utils/post-functions'
import Link from 'next/link'

type FilterTagsProps = {
  type: string
  alltags: string[]
  tag?: string
}

export function FilterTags({ type, alltags, tag }: FilterTagsProps) {
  const categories = getCategoriesName()

  return (
    <div className="sticky top-[66px] z-50 flex flex-wrap gap-1 bg-primary">
      <Link href="/" className={`my-2 min-w-12 rounded px-2 py-1 text-center text-sm capitalize  ${type === '' && !tag ? 'bg-secondary-label-primary text-secondary' : 'bg-secondary text-secondary-label-secondary'}`}>All</Link>

      {
        categories.map(category => (
          <Link href={`/${category}`} key={category} className={`my-2 min-w-12 rounded px-2 py-1 text-center text-sm capitalize  ${type === category ? 'bg-secondary-label-primary text-secondary' : 'bg-secondary text-secondary-label-secondary'}`}>
            {category}
          </Link>
        ))
      }

      {
        alltags.map(categoryTag => (
          <Link href={`/tag/${categoryTag}`} key={categoryTag} className={`my-2 min-w-12 rounded px-2 py-1 text-center text-sm capitalize  ${tag === categoryTag ? 'bg-secondary-label-primary text-secondary' : 'bg-secondary text-secondary-label-secondary'}`}>
            {categoryTag}
          </Link>
        ))
      }
    </div>
  )
}
