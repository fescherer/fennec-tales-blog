'use client'

import { PropsWithPost } from '@/@types'
import { useState } from 'react'
import { PostTableOfContentList } from './post-table-of-content-list'

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
    <div className="flex flex-col rounded bg-secondary p-2">
      <h2>Table of Content</h2>

      <div className="relative">

        <div className="flex flex-col gap-1">
          <PostTableOfContentList list={firstHeadings} />
        </div>
      </div>

      <div className="grid transition-all duration-300" style={{ gridTemplateRows: isHeadingExpanded ? '1fr' : '0fr' }}>
        <div className="overflow-hidden">
          <PostTableOfContentList list={hiddenHeadings} />
        </div>
      </div>

      {hiddenHeadings.length > 0
      && (
        <button type="button" onClick={() => setIsHeadingExpanded(prev => !prev)} className="self-end text-sm">
          {isHeadingExpanded ? 'Expand less' : 'Expand more'}
        </button>
      )}
    </div>
  )
}
