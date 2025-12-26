import Link from 'next/link'
import { PropsWithChildren } from 'react'

type PostAsideLinkProps = {
  url: string
  label: string
}

export function PostAsideLink({ children, url, label }: PropsWithChildren<PostAsideLinkProps>) {
  if (url)
    return (
      <Link aria-label={label} href={url} target="_blank" className="flex justify-between p-2 text-sm transition-all hover:bg-primary hover:text-secondary-label-primary">
        <div className="flex items-center gap-1">
          {children}
        </div>

        <span className="opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg></span>
      </Link>
    )
  return <></>
}
