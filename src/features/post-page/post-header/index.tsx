import { PropsWithPost } from '@/@types'
import { PostHeaderNavigation } from './post-header-navigation'
import { PostHeaderTitle } from './post-header-title'
import Image from 'next/image'

export function PostHeader({ post }: PropsWithPost) {
  return (
    <div className="space-y-10">
      <PostHeaderNavigation post={post} />
      <PostHeaderTitle post={post} />

      <Image
        alt=""
        height={568}
        width={853}
        src={post.image}
        quality={100}
        className="animate__zoomIn animate__animated border-bg-background bg-bg-foreground mx-auto rounded-lg border pb-8"
      />
    </div>
  )
}
