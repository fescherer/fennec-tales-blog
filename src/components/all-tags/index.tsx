import { getAllTags } from '@/utils/functions'
import Link from 'next/link'
import { Card } from '../card'

interface AllTagsProps {
  selectedTag?: string[]
}

export async function AllTags({ selectedTag }: AllTagsProps) {
  const alltags = await getAllTags()

  return (
    <Card title="All tags">
      <div className="flex flex-wrap gap-1 text-xs uppercase">
        {alltags.map((tag, index) => (
          <div key={tag} className="my-1">
            <Link
              aria-label={`Remove tag selection filter for ${tag}`}
              className={`p-1 transition-all hover:bg-secondary hover:text-secondary-label-primary ${selectedTag?.includes(tag) ? 'font-bold' : ''}`}
              target="_self"
              href={selectedTag?.includes(tag) ? '/' : `/tag/${tag}`}
            >
              {tag}
            </Link>

            {index !== alltags.length - 1 ? ' |' : ''}
          </div>
        ))}
      </div>
    </Card>
  )
}
