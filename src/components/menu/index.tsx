import { PropsWithClassName } from '@/@types/classname'
import { Separator } from '../separator'
import { MenuLink } from './MenuLink'
import { Link } from '../link'
import { DATA } from '@/app.config'
import { TiktokIcon, YoutubeIcon } from '@/icons'

export function Menu({ className }: PropsWithClassName) {
  return (
    <aside className={`${className} relative w-52 pr-2`}>
      <div className="sticky left-16 top-[110px] flex w-full flex-col text-primary-label-secondary">
        <MenuLink href="/" name="About us" icon="group" />
        <MenuLink href="/" name="Services" icon="dashboard" />
        <MenuLink href="/" name="Portifolio" icon="contact_page" />
        <Separator layer="primary" className="my-4" />
        <span>Find us in Youtube</span>
        <iframe className="mt-2" width="200" height="200" src="https://www.youtube.com/embed/tgbNymZ7vqY" />
        <iframe className="mt-2" width="200" height="200" src="https://www.youtube.com/embed/tgbNymZ7vqY" />
        <Separator layer="primary" className="my-4" />
        <span className="px-2">Subscribe to RSS</span>
        <MenuLink href="/" name="RSS" icon="rss_feed" />
        <span className="mt-4 px-2">Follow us</span>
        <MenuLink href="/" name="Youtube" iconNode={<YoutubeIcon />} />
        <MenuLink href="/" name="Tiktok" iconNode={<TiktokIcon />} />
        <Separator layer="primary" className="my-4" />

        <span>
          <span>This project is</span>
          <Link className="mx-1" target="_blank" href={DATA.repo}>open source in Github</Link>
          <span>, feel free to contribute.</span>
        </span>

      </div>
    </aside>
  )
}
