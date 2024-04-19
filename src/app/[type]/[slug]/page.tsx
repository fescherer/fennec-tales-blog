import { getPostData } from '@/utils/post-functions/getPostData'
import dynamic from 'next/dynamic'

type SlugPageParams = {
  type: string
  slug: string
}

type SlugPageProps = {
  params: SlugPageParams
}

export default async function SlugPage({ params: { slug, type } }: SlugPageProps) {
  const post = await getPostData(type, slug)

  const MarkdownContent = dynamic(
    () => import(`@/blog/${post.category}/${post.slug}.mdx`),
  )

  return (
    <div>
      <MarkdownContent />
    </div>
  )
}
