import { Header } from '@/components/header'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

export default async function NotFoundPage() {
  const headersList = headers()
  const url = headersList.get('referer')

  const links = [
    {
      target: '_blank',
      href: `https://web.archive.org/web/*/${url}`,
      name: 'Check it out in the WaybackMachine.',
      icon: 'open_in_new',
    },
    {
      target: '_self',
      href: '/',
      name: 'Go back to homepage.',
      icon: 'home',
    },
  ]

  return (
    <>
      <Header isArticle />

      <main className="flex-1 p-4 pt-[90px] md:pt-[66px]">
        <div className="m-auto flex max-w-lg flex-col items-center gap-4">
          <Image width={220} height={220} alt="Not found Image" src="/moon-not-found.svg" unoptimized />
          <h2 className="text-6xl text-primary-label-primary">Not found</h2>
          <p className="text-center">This page does not exist.</p>

          <div className="flex w-full flex-col items-center gap-2 bg-primary p-4">
            {
              links.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.target}
                  className="flex w-full items-center justify-between rounded border border-primary-border p-4 text-primary-label-secondary transition-all hover:border-primary-label-primary hover:text-primary-label-primary"
                >
                  {link.name}
                  <span className="mui-icon-filled opacity-80">{link.icon}</span>
                </Link>
              ))
            }
          </div>
        </div>
      </main>
    </>

  )
}
