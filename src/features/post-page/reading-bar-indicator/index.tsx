'use client'

import { useScrollBarPercentage } from '@/hooks/useScrollBarPercentage'

export function ReadingBarIndicator() {
  const value = useScrollBarPercentage()

  return (
    <div className="sticky z-50 h-0.5 rounded-lg bg-primary-label-primary opacity-20" style={{ width: `${value}%`, top: '80px' }} />
  )
}
