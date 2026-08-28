import { useEffect, useRef } from 'react'

/**
 * Runs a cleanup callback when the component unmounts.
 *
 * @param func - Cleanup callback executed when the component
 *   unmounts.
 */
function useUnmount(func: () => void) {
  const funcRef = useRef(func)

  // oxlint-disable-next-line react/refs
  funcRef.current = func

  useEffect(
    () => () => {
      funcRef.current()
    },
    []
  )
}

export { useUnmount }
