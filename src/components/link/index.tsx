import { cn } from '@/utils/cn'
import type { LinkProps } from 'next/link'
import NextLink from 'next/link'
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'

type LinkType = LinkProps & AnchorHTMLAttributes<any>

export function Link({ children, className, href, ...props }: PropsWithChildren<LinkType>) {
  return <NextLink className={cn('text-accent underline transition-all hover:text-accent-active', className)} href={href} {...props}>{children}</NextLink>
}
