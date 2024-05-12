'use client'

import Link from 'next/link'
import { MenuBtn } from './menu-btn'
import { SearchInput } from './search-input'
import { LogoIcon } from '@/icons/logo'

type HeaderProps = {
  isArticle?: boolean
}

export function Header({ isArticle }: HeaderProps) {
  return (
    <header className="fixed z-50 w-full bg-primary p-2 md:p-4">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-1">
          <MenuBtn />

          <Link href="/">
            <LogoIcon />
          </Link>
        </div>

        {!isArticle && <SearchInput className="hidden items-center md:flex md:w-64" />}
        {/* <div className="flex items-center gap-1">
          <ThemeBtn />
        </div> */}
      </div>

      {!isArticle && <SearchInput className="my-2 flex w-full items-center md:hidden md:w-1 " />}
    </header>
  )
}
