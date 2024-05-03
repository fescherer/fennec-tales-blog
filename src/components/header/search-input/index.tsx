'use client'

import { PropsWithClassName } from '@/@types/classname'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { ChangeEvent } from 'react'
import { useDebouncedCallback } from 'use-debounce'

export function SearchInput({ className }: PropsWithClassName) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const inputValue = searchParams.get('query')?.toString()

  const handleSearch = useDebouncedCallback((e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    params.delete('page')
    if (e.target.value) {
      params.set('query', e.target.value)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 100)

  // TODO: clear input
  // function clearValue() {
  //   const params = new URLSearchParams(searchParams)
  //   params.delete('query')
  //   replace(`${pathname}?${params.toString()}`)
  // }

  return (
    <form className={`${className} w-full rounded-full border bg-secondary pr-2 transition-all has-[:focus]:border-accent `} onSubmit={e => e.preventDefault()}>
      <label htmlFor="default-search " className="mui-icon-filled pl-2">search</label>

      <div className="my-1 flex w-full gap-1 bg-secondary">
        <input onChange={handleSearch} type="search" className="w-full bg-secondary !ring-transparent" id="default-search" defaultValue={inputValue} placeholder="Search" />
        {/* {inputValue && <button type="button" onClick={clearValue} className="mui-icon-filled text-secondary-label-tertiary">clear</button> } */}
      </div>

    </form>
  )
}
