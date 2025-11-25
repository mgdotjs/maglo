import { useEffect, useCallback, useRef } from 'react'

interface UseDynamicFaviconOptions {
  type?: string
}

export function useDynamicFavicon(
  lightIcon: string,
  darkIcon: string,
  options: UseDynamicFaviconOptions = {},
): void {
  const { type = 'image/svg+xml' } = options

  const faviconRef = useRef<HTMLLinkElement | null>(null)
  const mediaQueryRef = useRef<MediaQueryList | null>(null)

  const updateFavicon = useCallback(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (!faviconRef.current) {
      faviconRef.current =
        document.querySelector<HTMLLinkElement>("link[rel*='icon']") ||
        document.createElement('link')

      faviconRef.current.rel = 'icon'
      faviconRef.current.type = type

      if (!document.head.contains(faviconRef.current)) {
        document.head.appendChild(faviconRef.current)
      }
    }

    const newHref = isDark ? darkIcon : lightIcon
    if (faviconRef.current.href !== newHref) {
      faviconRef.current.href = newHref
    }
  }, [lightIcon, darkIcon, type])

  useEffect(() => {
    updateFavicon()

    if (!mediaQueryRef.current) {
      mediaQueryRef.current = window.matchMedia('(prefers-color-scheme: dark)')
    }

    const mq = mediaQueryRef.current
    mq.addEventListener('change', updateFavicon)

    return () => {
      mq.removeEventListener('change', updateFavicon)
    }
  }, [updateFavicon])
}

export default useDynamicFavicon
