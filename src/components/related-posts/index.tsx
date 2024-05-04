import { IPost } from '@/@types'
import { getRelatedPost } from '@/utils/get-related-post'
import { getPostsData } from '@/utils/post-functions'
import { Card } from '../card'
import Image from 'next/image'
import Link from 'next/link'

type RelatedPostsProps = {
  post: IPost
  orientation?: 'vertical' | 'horizontal'
}

export async function RelatedPosts({ post, orientation = 'vertical' }: RelatedPostsProps) {
  const allPosts = await getPostsData()
  const recommendedArticles = getRelatedPost(post, allPosts)

  return (
    <Card title="You may also like">
      <div className={`flex ${orientation === 'vertical' ? 'flex-col' : 'flex-row'}`}>
        {
          recommendedArticles.map(relatedPost => (
            <Link href={`/posts/${relatedPost.post.category}/${relatedPost.post.slug}`} target="_self" key={relatedPost.id} className={`flex gap-1 p-2 transition-all hover:bg-secondary hover:text-secondary-label-primary ${orientation === 'vertical' ? 'flex-row' : 'mx-4 flex-col'}`}>
              <div>
                <Image src={relatedPost.post.image} alt={relatedPost.post.title} width={720} height={404} className={`bg-secondary bg-no-repeat object-contain ${orientation === 'vertical' ? 'h-12' : ''}`} />
              </div>

              <div title={relatedPost.post.title} className="max-w-52">
                <h3 className={`font-medium text-primary-label-primary ${orientation === 'vertical' ? 'truncate' : 'line-clamp-2'}`}>{relatedPost.post.title}</h3>
                <p className={` flex-1 text-secondary-label-secondary ${orientation === 'vertical' ? 'line-clamp-1' : 'line-clamp-3'}`}>{relatedPost.post.content}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </Card>
  )
}
