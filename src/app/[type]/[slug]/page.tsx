import { PostPage } from '@/features/post-page'
import { getPostData } from '@/utils/post-functions/getPostData'

type SlugPageParams = {
  type: string
  slug: string
}

type SlugPageProps = {
  params: SlugPageParams
}

export default async function SlugPage({ params: { slug, type } }: SlugPageProps) {
  const post = await getPostData(type, slug)

  return (
    <PostPage post={post} />
  )
}
