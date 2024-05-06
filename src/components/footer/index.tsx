import { Bio } from './bio'
import { Copyright } from './copyright'
import { SiteMap } from './site-map'

export function Footer() {
  return (
    <footer>
      <div className="bg-secondary">
        <div className="m-auto flex max-w-6xl flex-col items-center justify-between gap-4 p-4 md:flex-row md:p-16">
          <Bio />
          <SiteMap />
        </div>
      </div>

      <hr className="h-px w-full border-b bg-primary-border" />
      <Copyright />
    </footer>
  )
}
