import { DATA } from '@/app.config'
import { DiscordIcon, FigmaIcon, GithubIcon, InstagramIcon, LinkedinIcon, PinterestIcon, RedditIcon, TiktokIcon, TwitterIcon } from '@/icons'
import { YoutubeIcon } from '@/icons/youtube'
import Link from 'next/link'

export function Bio() {
  return (
    <div className="flex flex-col gap-2 ">

      <span>logo</span>
      <p className="max-w-prose text-sm">{DATA.company_bio}</p>

      <div className="flex gap-4">
        <Link className="mui-icon-filled" aria-label="Go to RSS's author" href="/feed.xml">rss_feed</Link>
        <Link aria-label="Go to Linkedin's author" href=""><LinkedinIcon /></Link>
        <Link aria-label="Go to Github's author" href=""><GithubIcon /></Link>
        <Link aria-label="Go to 's author" href=""><YoutubeIcon /></Link>
        <Link aria-label="Go to 's author" href=""><DiscordIcon /></Link>
        <Link aria-label="Go to 's author" href=""><FigmaIcon /></Link>
        <Link aria-label="Go to 's author" href=""><TiktokIcon /></Link>
        <Link aria-label="Go to 's author" href=""><RedditIcon /></Link>
        <Link aria-label="Go to 's author" href=""><PinterestIcon /></Link>
        <Link aria-label="Go to 's author" href=""><InstagramIcon /></Link>
        <Link aria-label="Go to 's author" href=""><TwitterIcon /></Link>
      </div>
    </div>
  )
}
