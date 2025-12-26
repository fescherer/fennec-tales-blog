import { PropsWithChildren } from 'react'

type CardProps = {
  title: string
}

export function Card({ title, children }: PropsWithChildren<CardProps>) {
  return (
    <div className="relative my-3 rounded-xs  border-neutral border-2 pt-4 text-base-content">
      <h2 className="absolute -top-4 mx-2 bg-neutral px-2 font-medium">{title}</h2>

      <div className="p-2">
        {children}
      </div>
    </div>
  )
}
