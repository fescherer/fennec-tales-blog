import Link, { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, PropsWithChildren } from 'react'

type LinkType = LinkProps & AnchorHTMLAttributes<any>

export function BioBtn({ children, href, ...props }: PropsWithChildren<LinkType>) {
  return (
    <Link target="_blank" href={href} {...props} className="flex w-full gap-4 rounded border border-primary-border p-4 font-medium transition-all hover:border-accent">
      {children}
    </Link>
  )
}
