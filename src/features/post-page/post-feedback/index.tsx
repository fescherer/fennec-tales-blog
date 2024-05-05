import { PropsWithPost } from '@/@types'
import { Card } from '@/components/card'
import { FeedbackStars } from './feedback-stars'
import { FeedbackShare } from './feedback-share'

export function PostFeedback({ post }: PropsWithPost) {
  // TODO POST FEEDBACK
  return (
    <Card title="">
      {post.title}
      <FeedbackStars />
      <FeedbackShare post={post} />
    </Card>
  )
}
