import { BioBtn } from '@/components/bio-btn'
import { ContentWrapper } from '@/components/content-wrapper'

export default function Bio() {
  return (
    <ContentWrapper isArticle>
      <div className="m-auto flex max-w-md flex-col items-center justify-between gap-2">
        <p>Hello. We are a company that produces content about coding, specially web development, but also design and game design</p>

        <BioBtn href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" /></svg>
          <span>Written blog</span>
        </BioBtn>

        {/* <BioBtn href="youtube.com">
          <YoutubeIcon />
          <span>Youtube Channel</span>
        </BioBtn> */}
      </div>
    </ContentWrapper>
  )
}
