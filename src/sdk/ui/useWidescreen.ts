import { useState, useEffect } from 'react'

export const useWidescreen = () => {
  const [isWidescreen, setIsWidescreen] = useState<boolean | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1280px)')

    setIsWidescreen(mediaQuery.matches)

    mediaQuery.addEventListener('change', (event: MediaQueryListEvent) => {
      setIsWidescreen(event.matches)
    })
  }, [])

  return { isWidescreen }
}
