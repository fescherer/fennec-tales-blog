import { getAllCategories } from '@/utils/functions'
import { getPostsData } from '@/utils/post-functions'
import Link from 'next/link'

interface AllCategoriesProps {
  selectedCategory?: string
}

export async function AllCategories({ selectedCategory }: AllCategoriesProps) {
  const articles = await getPostsData()
  const allcategories = getAllCategories(articles)

  return (
    <div title="All categories">
      <ul className="flex list-disc flex-col gap-1 pl-4 capitalize">
        {allcategories.map(category => (
          <li key={category} className={selectedCategory === category ? 'font-bold text-accent' : ''}>
            <Link
              aria-label={`Remove category filter for ${category}`}
              target="_self"
              href={category === selectedCategory ? '/' : `/${category}`}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
