import { PropsWithPost } from '@/@types'
import { Card } from '@/components/card'
import { SourcesRef } from './sources-ref'

export function PostReference({ post }: PropsWithPost) {
  return (
    <Card title="References">
      {
        post.sources.map(item => (<SourcesRef key={item.title} item={item} />))
      }
    </Card>
  )
}
