import { BioBtn } from '@/components/bio-btn'
import { ContentWrapper } from '@/components/content-wrapper'
import { YoutubeIcon } from '@/icons'

export default function Bio() {
  return (
    <ContentWrapper isArticle>
      <div className="m-auto flex max-w-md flex-col items-center justify-between gap-2">
        <p>Hello. We are a company that produces content about coding, specially web development, but also design and game design</p>

        <BioBtn href="/">
          <span className="mui-icon-filled">rss_feed</span>
          <span>Written blog</span>
        </BioBtn>

        <BioBtn href="youtube.com">
          <YoutubeIcon />
          <span>Youtube Channel</span>
        </BioBtn>
      </div>
    </ContentWrapper>
  )
}
