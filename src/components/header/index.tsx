'use client'

import Link from 'next/link'
import { ThemeBtn } from './theme-btn'
import { MenuBtn } from './menu-btn'
import { SearchInput } from './search-input'
import { useIsScrolling } from '@/hooks/useIsScrolling'

type HeaderProps = {
  isArticle?: boolean
}

export function Header({ isArticle }: HeaderProps) {
  const isScrolling = useIsScrolling()

  if (isScrolling && isArticle) return <></>
  return (
    <header className="fixed z-50 w-full bg-primary p-2 md:p-4">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-1">
          <MenuBtn />
          <Link href="/">Logo</Link>
        </div>

        {!isArticle && <SearchInput className="hidden items-center md:flex md:w-64" />}

        <div className="flex gap-1">
          <ThemeBtn />

          <button type="button" className="mui-icon-filled">
            notifications
          </button>

          <button type="button" className="mui-icon-filled">
            bookmark
          </button>
        </div>
      </div>

      {!isArticle && <SearchInput className="my-2 flex w-full items-center md:hidden md:w-1 " />}
    </header>
  )
}
