import { PropsWithChildren } from 'react'
import { Header } from '@/components/header'

export default function IsArticleLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header isArticle />

      <main className="flex-1 p-4 pt-[90px] md:pt-[66px]">
        {children}
      </main>
    </>
  )
}
