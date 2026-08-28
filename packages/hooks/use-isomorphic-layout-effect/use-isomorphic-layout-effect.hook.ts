import { useEffect, useLayoutEffect } from 'react'

/**
 * Uses `useLayoutEffect` in the browser and `useEffect` during
 * server-side rendering.
 */
const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect

export { useIsomorphicLayoutEffect }
