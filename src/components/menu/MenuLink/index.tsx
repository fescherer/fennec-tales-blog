import Link, { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

type TNextLink = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>

interface MenuLinkProps extends TNextLink {
  icon?: string
  iconNode?: ReactNode
  name: string
}

export function MenuLink({ icon, name, iconNode, ...props }: MenuLinkProps) {
  return (
    <Link {...props} target="_blank" className="flex items-center gap-6 rounded p-2 text-primary-label-secondary transition-all hover:bg-secondary hover:text-primary-label-primary">
      {!!icon && <span className="mui-icon-filled">{icon}</span>}
      {!!iconNode && iconNode}
      <span className="font-medium">{name}</span>
    </Link>
  )
}
