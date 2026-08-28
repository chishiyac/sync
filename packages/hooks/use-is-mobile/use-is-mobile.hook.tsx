import React from 'react'

import { MOBILE_BREAKPOINT } from './use-is-mobile.hook.constants'

/**
 * Returns whether the current viewport matches a mobile breakpoint.
 *
 * @param defaultValue - Maximum width used to define the mobile
 *   breakpoint.
 */
function useIsMobile(defaultValue: number = MOBILE_BREAKPOINT) {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const mql = window.matchMedia(
      `(max-width: ${defaultValue - 1}px)`
    )

    const onChange = () => {
      setIsMobile(mql.matches)
    }

    mql.addEventListener('change', onChange)

    // oxlint-disable-next-line react/set-state-in-effect
    setIsMobile(mql.matches)

    return () => mql.removeEventListener('change', onChange)
  }, [defaultValue])

  return isMobile
}

export { useIsMobile }
