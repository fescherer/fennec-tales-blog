import { AUTHORS_DATA } from '@/authors.config'
import Link from 'next/link'

export function Copyright() {
  const initialDate = new Date('2023-08-20')
  const today = new Date()

  const author = AUTHORS_DATA.find(author => author.id === 'fescherer')

  if (author)
    return (
      <div className="m-auto flex max-w-screen-lg flex-col items-center">
        <small>
          Copyright © 🞄
          {`${initialDate.getFullYear().toString()} - ${today.getFullYear().toString()}`}
        </small>

        <small>
          <Link aria-label={`Go to Github's ${author.full_name} page`} className="transition-all hover:text-accent-active" href={author.profiles[1].url} target="_blank">
            {author.id}
            {' '}
            |
            {' '}
            {author.full_name}
          </Link>
        </small>
      </div>
    )
  else {
    <></>
  }
}
