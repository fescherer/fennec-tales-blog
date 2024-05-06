// reference: https://stackoverflow.com/a/71356027

import { useEffect, useState } from 'react'

export function useIsScrolling() {
  const [isScrolling, setIsScrolling] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY < lastScrollY) {
        setIsScrolling(false)
      } else {
        setIsScrolling(true)
      }

      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', controlNavbar)

    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  return isScrolling
}
