import { getPostData } from '@/utils/functions/getPostData'
import dynamic from 'next/dynamic'

type SlugPageParams = {
  type: string
  slug: string
}

type SlugPageProps = {
  params: SlugPageParams
}

export default async function SlugPage({ params: { slug, type } }: SlugPageProps) {
  const article = await getPostData(type, slug)

  const MarkdownContent = dynamic(
    () => import(`@/blog/${article.category}/${article.slug}.mdx`),
  )

  return (
    <div>
      <MarkdownContent />
    </div>
  )
}
