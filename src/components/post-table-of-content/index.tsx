'use client'

import { PropsWithPost } from '@/@types'
import { useState } from 'react'
import { PostTableOfContentList } from './post-table-of-content-list'
import { Card } from '../card'

export function PostTableOfContent({ post }: PropsWithPost) {
  const [isHeadingExpanded, setIsHeadingExpanded] = useState(false)
  // Use regular expression to find all headings
  const headingsMatch = post.content.match(/(#+)\s+(.+)/g) || []

  // Convert the matches into an array of objects
  const headings = headingsMatch.map((match) => {
    const levelMatch = match.match(/#+/)
    const level = levelMatch ? levelMatch[0].length : 0
    const title = match.replace(/#+\s+/, '')
    return { level, title } as any
  })

  const firstHeadings = headings.slice(0, 5)
  const hiddenHeadings = headings.slice(5, headings.length)

  return (
    <Card title="Table of Contents">
      <div className="relative flex flex-col gap-1">
        <PostTableOfContentList list={firstHeadings} />
      </div>

      <div className="grid transition-all duration-300" style={{ gridTemplateRows: isHeadingExpanded ? '1fr' : '0fr' }}>
        <PostTableOfContentList list={hiddenHeadings} />
      </div>

      {hiddenHeadings.length > 0 && (
        <button type="button" onClick={() => setIsHeadingExpanded(prev => !prev)} className="w-full py-2 text-center transition-all hover:text-primary-label-active">
          {isHeadingExpanded ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" /><path d="M9 19.8V15m0 0H4.2M9 15l-6 6" /><path d="M15 4.2V9m0 0h4.8M15 9l6-6" /><path d="M9 4.2V9m0 0H4.2M9 9 3 3" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 15 6 6" /><path d="m15 9 6-6" /><path d="M21 16v5h-5" /><path d="M21 8V3h-5" /><path d="M3 16v5h5" /><path d="m3 21 6-6" /><path d="M3 8V3h5" /><path d="M9 9 3 3" /></svg>}
        </button>
      )}
    </Card>
  )
}
