import { IPost } from '@/@types'

type RelatedPostsProps = {
  post: IPost
  orientation?: 'vertical' | 'horizontal'
}

export function RelatedPosts({ post, orientation = 'vertical' }: RelatedPostsProps) {
  return (
    <div>
      <span>{post.title}</span>
      <span>RelatedPosts</span>
      <span>{orientation}</span>
    </div>
  )
}
