import { ContentWrapper } from '@/components/content-wrapper'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

export default async function NotFoundPage() {
  const headersList = headers()
  const url = (await headersList).get('referer')

  const links = [
    {
      target: '_blank',
      href: `https://web.archive.org/web/*/${url}`,
      name: 'Check it out in the WaybackMachine.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>,
    },
    {
      target: '_self',
      href: '/',
      name: 'Go back to homepage.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>,
    },
  ]

  return (
    <ContentWrapper isArticle>
      <div className="m-auto flex max-w-lg flex-col items-center gap-4">
        <Image width={220} height={220} alt="Not found Image" src="/moon-not-found.svg" unoptimized />
        <h2 className="text-6xl y">Not found</h2>
        <p className="text-center">This page does not exist.</p>

        <div className="flex w-full flex-col items-center gap-2 p-4">
          {
            links.map(link => (
              <Link
                key={link.name}
                href={link.href}
                target={link.target}
                className="flex w-full items-center justify-between rounded-sm border border-primary-border p-4 hover:bg-primary transition-all"
              >
                {link.name}
                <span className="opacity-80">{link.icon}</span>
              </Link>
            ))
          }
        </div>
      </div>
    </ContentWrapper>
  )
}
