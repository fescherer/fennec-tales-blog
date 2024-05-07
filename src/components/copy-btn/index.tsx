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
      <button className="mui-icon-filled" aria-label="Copy code" type="button" disabled={isCopied} onClick={copy}>
        {isCopied ? 'file_copy' : 'content_copy'}
      </button>
    </Tooltip>
  )
}
