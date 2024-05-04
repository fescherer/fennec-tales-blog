import { getAllCategories } from '@/utils/functions'
import Link from 'next/link'
import { Card } from '../card'

interface AllCategoriesProps {
  selectedCategory?: string
}

export async function AllCategories({ selectedCategory }: AllCategoriesProps) {
  const allcategories = await getAllCategories()

  return (
    <Card title="All categories">
      <div className="flex flex-col text-sm capitalize">
        {allcategories.map(category => (
          <Link
            key={category}
            className={`p-2 transition-all hover:bg-secondary hover:text-secondary-label-primary ${selectedCategory === category ? 'font-bold' : ''}`}
            aria-label={`Remove category filter for ${category}`}
            target="_self"
            href={category === selectedCategory ? '/' : `/posts/${category}`}
          >
            {category}
          </Link>
        ))}
      </div>
    </Card>
  )
}
