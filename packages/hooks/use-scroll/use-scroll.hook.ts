import { useCallback, useEffect, useState } from 'react'

/**
 * Returns `true` once the window scroll position passes the given
 * threshold.
 *
 * @param threshold - Scroll offset in pixels that activates the
 *   returned state.
 */
function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState<boolean>(false)

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold)
  }, [threshold])

  useEffect(() => {
    // oxlint-disable-next-line github/prefer-observers
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  // also check on first load
  useEffect(() => {
    // oxlint-disable-next-line react/set-state-in-effect
    onScroll()
  }, [onScroll])

  return scrolled
}

export { useScroll }
