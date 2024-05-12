import { PropsWithChildren } from 'react'
import { Header } from '../header'

type ContentWrapperProps = {
  isArticle?: boolean
}

export function ContentWrapper({ children, isArticle = false }: PropsWithChildren<ContentWrapperProps>) {
  return (
    <>
      <Header isArticle={isArticle} />

      <main className="flex-1 p-4 pt-[120px] md:pt-[92px]">
        {children}
      </main>
    </>
  )
}
