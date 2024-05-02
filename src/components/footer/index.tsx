import Link from 'next/link'
import { PersonalSkills } from './personal-skills'
import { Copyright } from './copyright'

export function Footer() {
  return (
    <footer>
      <div className="m-auto flex max-w-screen-lg justify-between p-4">

        <PersonalSkills />
        {/* <SiteMap /> */}

      </div>

      <div className="h-px w-full border-b bg-primary-border" />

      <div className="flex flex-col gap-2 p-4">
        <div className="flex justify-center gap-4 text-center text-sm">
          <Link className="transition-all hover:text-accent-active" href="/privacy-policy">Privacy Policy</Link>
          <Link className="transition-all hover:text-accent-active" href="/terms-of-use">Terms of use</Link>
        </div>

        <Copyright />
      </div>
    </footer>
  )
}
