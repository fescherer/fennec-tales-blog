import { AUTHORS_DATA } from '@/authors.config'
import Link from 'next/link'

export function PersonalSkills() {
  const author = AUTHORS_DATA.find(author => author.id === 'fescherer')

  if (author)
    return (
      <div className="flex flex-col gap-2 ">

        <span>logo</span>
        <p className="max-w-prose text-sm">{author.bio}</p>

        <div className="flex gap-4">
          <Link className="mui-icon-filled" aria-label="Go to RSS's author" href="/feed.xml">rss_feed</Link>
          <Link aria-label="Go to Linkedin's author" href={author.profiles.find(author => author.id === 'linkedin')?.url || ''}>linkedin</Link>
          <Link aria-label="Go to Github's author" href={author.profiles.find(author => author.id === 'github')?.url || ''}>bug_report</Link>
          {/* <Link aria-label="Go to Figma's author" href={ownerConfigs.figmaLink}>
          <FigmaLogo size={20} />
        </Link>
        <Link aria-label="Go to Youtube's author" href={ownerConfigs.youtubeLink}>
          <YoutubeLogo size={20} />
        </Link>
        <Link aria-label="Go to Twitter's author" href={ownerConfigs.twitterLink}>
          <TwitterLogo size={20} />
        </Link>
        <Link aria-label="Go to Tiktok's author" href={ownerConfigs.tiktokLink}>
          <TiktokLogo size={20} />
        </Link> */}
        </div>
      </div>
    )
  else return <></>
}
