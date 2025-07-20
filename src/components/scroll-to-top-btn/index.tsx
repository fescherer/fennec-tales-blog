'use client'

import { useScrollBarPercentage } from '@/hooks/useScrollBarPercentage'

export function ScrollToTopBtn() {
  const value = useScrollBarPercentage()

  if (value !== 0)
    return (
      <div className="fixed bottom-5 right-5 z-50 flex gap-4 rounded-sm p-1 text-accent backdrop-blur-sm">
        <button
          aria-label="Scroll to top of page"
          onClick={() => window.scroll(0, 0)}
          type="button"
          className="text-4xl transition-all hover:accent-accent-active"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="12" cy="12" r="10" /><path d="m8 14 4-4 4 4" /></svg>
        </button>
      </div>
    )

  return <></>
}
