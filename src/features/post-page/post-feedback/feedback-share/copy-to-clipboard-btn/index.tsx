'use client'

import * as Popover from '@radix-ui/react-popover'
import { useState } from 'react'

type CopyToClipboardBtnProps = {
  copyText: string
}

export function CopyToClipboardBtn({ copyText }: CopyToClipboardBtnProps) {
  const [isCopied, setIsCopied] = useState(false)

  async function handleCopy() {
    copyTextFn()
      .then(() => {
        setIsCopied(true)
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  async function copyTextFn() {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(copyText)
    } else {
      return document.execCommand('copy', true, copyText)
    }
  }

  return (
    <Popover.Root open={isCopied}>
      <Popover.Trigger asChild>
        <button onClick={handleCopy} type="button" className="mui-icon-filled">content_copy</button>
      </Popover.Trigger>

      <Popover.Anchor />

      <Popover.Portal>
        <Popover.Content
          className="rounded bg-secondary p-5 will-change-[transform,opacity]"
          sideOffset={5}
        >
          Copied
          <Popover.Arrow className="fill-secondary" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>

  )
}
