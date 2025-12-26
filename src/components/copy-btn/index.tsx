'use client'

import { Tooltip } from '@/components/tooltip'
import { useState } from 'react'
interface CopyBtnProps {
  text: string
}

export function CopyBtn({ text }: CopyBtnProps) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = () => {
    void (async () => {
      await navigator.clipboard.writeText(text)
    })()

    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }

  return (
    <Tooltip tooltip="Copy code">
      <button aria-label="Copy code" type="button" disabled={isCopied} onClick={copy}>
        {isCopied ?
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 15 2 2 4-4" /><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg> :
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>}
      </button>
    </Tooltip>
  )
}
