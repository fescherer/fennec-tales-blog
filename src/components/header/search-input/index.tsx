import { PropsWithClassName } from '@/@types/classname'

export function SearchInput({ className }: PropsWithClassName) {
  return (
    <form className={`${className} rounded-full border bg-secondary`}>
      {/* <label htmlFor="default-search" className="sr-only mb-2 text-sm font-medium text-primary-label-primary">Search</label>

    <div className="relative">
      <input type="search" id="default-search" className="block w-full rounded-lg border border-secondary-label-secondary bg-secondary p-4 ps-10 text-sm text-secondary-label-primary focus:border-accent focus:ring-accent" placeholder="Search Mockups, Logos..." required />

      <button type="submit" className="mui-icon-filled absolute bottom-2.5 end-2.5 rounded-lg bg-secondary-label-secondary px-4 py-2 text-sm font-medium text-accent hover:bg-accent focus:outline-none focus:ring-4 focus:ring-accent">
        search
      </button>
    </div> */}

      <input type="search" className="my-1 ml-2 w-full bg-secondary" id="default-search" />
      <label htmlFor="default-search" className="mui-icon-filled">search</label>
    </form>
  )
}
