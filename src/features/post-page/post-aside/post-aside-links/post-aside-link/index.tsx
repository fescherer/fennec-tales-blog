import Link from 'next/link'
import { PropsWithChildren } from 'react'

type PostAsideLinkProps = {
  url: string
  label: string
}

export function PostAsideLink({ children, url, label }: PropsWithChildren<PostAsideLinkProps>) {
  if (url)
    return (
      <Link aria-label={label} href={url} target="_blank" className="flex justify-between p-2 text-sm transition-all hover:bg-secondary hover:text-secondary-label-primary">
        <div className="flex items-center gap-1">
          {children}
        </div>

        <span className="mui-icon-filled opacity-80">open_in_new</span>
      </Link>
    )
  return <></>
}
