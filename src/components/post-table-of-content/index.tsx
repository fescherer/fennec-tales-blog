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
        <button type="button" onClick={() => setIsHeadingExpanded(prev => !prev)} className="mui-icon-filled w-full py-2 text-center transition-all hover:text-primary-label-active">
          {isHeadingExpanded ? 'expand_less' : 'expand_more'}
        </button>
      )}
    </Card>
  )
}
