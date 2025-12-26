'use client'

import { PropsWithClassName } from '@/@types/classname'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { ChangeEvent } from 'react'
import { useDebouncedCallback } from 'use-debounce'

export function SearchInput({ className }: PropsWithClassName) {
  // const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  // const inputValue = searchParams.get('query')?.toString()

  // const handleSearch = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault()
  //   const params = new URLSearchParams(searchParams)
  //   params.delete('page')
  //   if (e.target.value) {
  //     params.set('query', e.target.value)
  //   } else {
  //     params.delete('query')
  //   }
  //   replace(`${pathname}?${params.toString()}`)
  // }, 100)

  // TODO: clear input
  // function clearValue() {
  //   const params = new URLSearchParams(searchParams)
  //   params.delete('query')
  //   replace(`${pathname}?${params.toString()}`)
  // }
  return (
    <form className={`${className} w-full rounded-full border bg-primary pr-2 transition-all has-focus:border-accent `} onSubmit={e => e.preventDefault()}>
      <label htmlFor="default-search " className="pl-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
      </label>

      <div className="my-1 flex w-full gap-1 bg-primary">
        {/* <input onChange={handleSearch} type="search" className="w-full bg-primary ring-transparent!" id="default-search" defaultValue={inputValue} placeholder="Search..." /> */}
      </div>

    </form>
  )
}
