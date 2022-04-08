import { useState, useEffect } from 'react'

export const useWidescreen = (media = '(min-width: 1280px)') => {
  const [isWidescreen, setIsWidescreen] = useState<boolean | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia(media)

    setIsWidescreen(mediaQuery.matches)

    mediaQuery.addEventListener('change', (event: MediaQueryListEvent) => {
      setIsWidescreen(event.matches)
    })
  }, [media])

  return { isWidescreen }
}
