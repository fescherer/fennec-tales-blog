'use client'

import { useScrollBarPercentage } from '@/hooks/useScrollBarPercentage'

export function ScrollToTopBtn() {
  const value = useScrollBarPercentage()

  if (value !== 0)
    return (
      <div className="fixed bottom-5 right-5 z-50 flex gap-4 rounded p-1 text-accent backdrop-blur">
        <button
          aria-label="Scroll to top of page"
          onClick={() => window.scroll(0, 0)}
          type="button"
          className="mui-icon-filled text-4xl transition-all hover:accent-accent-active"
        >
          arrow_circle_up
        </button>
      </div>
    )

  return <></>
}
