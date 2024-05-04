import { PropsWithChildren } from 'react'

type CardProps = {
  title: string
}

export function Card({ title, children }: PropsWithChildren<CardProps>) {
  return (
    <div className="relative my-3 box-border rounded-sm border border-secondary-label-tertiary px-2 pb-2 pt-4 text-primary-label-secondary">
      <h2 className="absolute -top-4 bg-primary px-2 font-medium text-primary-label-primary">{title}</h2>
      {children}
    </div>
  )
}
