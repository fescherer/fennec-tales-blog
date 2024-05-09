import { PropsWithChildren } from 'react'

type CardProps = {
  title: string
}

export function Card({ title, children }: PropsWithChildren<CardProps>) {
  return (
    <div className="relative my-3 rounded-sm border border-secondary-border pt-4 text-primary-label-secondary">
      <h2 className="absolute -top-4 mx-2 bg-primary px-2 font-medium text-primary-label-primary">{title}</h2>

      <div className="p-2">
        {children}
      </div>
    </div>
  )
}
