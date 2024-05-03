import { getAllTags } from '@/utils/functions'
import Link from 'next/link'

interface AllTagsProps {
  selectedTag?: string
}

export async function AllTags({ selectedTag }: AllTagsProps) {
  const alltags = await getAllTags()

  return (
    <div title="All tags">
      <div className="flex flex-wrap gap-1 text-xs uppercase">
        {alltags.map((tag, index) => (
          <Link
            aria-label={`Remove tag selection filter for ${tag}`}
            className={selectedTag === tag ? 'font-bold text-accent' : ''}
            target="_self"
            href={selectedTag === tag ? '/' : `/tag/${tag}`}
            key={tag}
          >
            {tag}
            {index !== alltags.length - 1 ? ' /' : ''}
          </Link>
        ))}
      </div>
    </div>
  )
}
