'use client'

import { IPost } from '@/@types'
import { PAGES_NUMBER } from '@/utils/consts'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

type PaginationProps = {
  posts: IPost[]
}

export function Pagination({ posts }: PaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const totalPages = Array.from(Array(Math.ceil(posts.length / PAGES_NUMBER)).keys())
  const currentPage = Number(searchParams.get('page')) || 0

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)

    if (!pageNumber) {
      params.delete('page')
    } else {
      params.set('page', pageNumber.toString())
    }

    replace(`${pathname}?${params.toString()}`)
  }

  // TODO: Make pagination button works on SSR
  return (
    <>
      { posts.length > PAGES_NUMBER && (
        <div className="mt-8 flex items-center justify-end gap-2">
          {/* <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 0} type="button" className="hover:enabled:text-on-layer-0-l1 mui-icon-filled rounded-full transition-all disabled:cursor-not-allowed disabled:opacity-30">chevron_left</button> */}
          {totalPages.map(page => <button onClick={() => createPageURL(page)} type="button" className={`flex size-8 items-center justify-center rounded-full transition-all hover:bg-accent ${currentPage === page ? 'bg-accent text-accent-label-primary' : ''}`} key={page}>{page + 1}</button>)}
          {/* <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === totalPages.length - 1} type="button" className="hover:enabled:text-on-layer-0-l1 mui-icon-filled rounded-full transition-all disabled:cursor-not-allowed disabled:opacity-30">chevron_right</button> */}
        </div>
      )}
    </>
  )
}
