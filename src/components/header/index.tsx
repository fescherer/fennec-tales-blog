import { ThemeBtn } from './theme-btn'

export function Header() {
  return (
    <header className="m-auto flex w-full max-w-5xl p-4">
      <span>Logo</span>

      <form className="mx-auto flex max-w-md items-center bg-secondary">
        {/* <label htmlFor="default-search" className="sr-only mb-2 text-sm font-medium text-primary-label-primary">Search</label>

        <div className="relative">
          <input type="search" id="default-search" className="block w-full rounded-lg border border-secondary-label-secondary bg-secondary p-4 ps-10 text-sm text-secondary-label-primary focus:border-accent focus:ring-accent" placeholder="Search Mockups, Logos..." required />

          <button type="submit" className="mui-icon-filled absolute bottom-2.5 end-2.5 rounded-lg bg-secondary-label-secondary px-4 py-2 text-sm font-medium text-accent hover:bg-accent focus:outline-none focus:ring-4 focus:ring-accent">
            search
          </button>
        </div> */}

        <input type="search" id="default-search" />
        <label htmlFor="default-search" className="mui-icon-filled">search</label>
      </form>

      <ThemeBtn />

      <button type="button" className="mui-icon-filled">
        notifications
      </button>

      <button type="button" className="mui-icon-filled">
        bookmark
      </button>
    </header>
  )
}
