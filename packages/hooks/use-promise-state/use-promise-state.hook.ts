import React from 'react'

export type PromiseStatus =
  | 'pending'
  | 'rejected'
  | 'fulfilled'
  | null

interface PromiseState<T> {
  data: T | null
  error: Error | null
  status: PromiseStatus
}

interface UsePromiseStateOptions {
  cacheKey?: string
  enabled?: boolean
  staleTime?: number
}

interface CacheEntry<T> {
  data: T
  updatedAt: number
}

const promiseStateCache = new Map<string, CacheEntry<unknown>>()

const INITIAL_STATE = {
  data: null,
  error: null,
  status: null
}

/**
 * Tracks the lifecycle of an async factory and exposes its current
 * promise state.
 *
 * The hook supports optional caching, a stale-time window, and an
 * enabled flag to skip execution entirely.
 */
export function usePromiseState<T>(
  factory: () => Promise<T>,
  deps?: React.DependencyList,
  options?: UsePromiseStateOptions
) {
  const [state, setState] =
    React.useState<PromiseState<T>>(INITIAL_STATE)

  React.useEffect(() => {
    if (options?.enabled === false) {
      setState(INITIAL_STATE)
      return
    }

    const staleTime = options?.staleTime ?? 0
    const cacheKey = options?.cacheKey
    const cacheEntry = cacheKey
      ? (promiseStateCache.get(cacheKey) as CacheEntry<T> | undefined)
      : undefined
    const hasFreshCache =
      cacheEntry !== undefined &&
      Date.now() - cacheEntry.updatedAt <= staleTime

    if (hasFreshCache) {
      setState({
        data: cacheEntry.data,
        error: null,
        status: 'fulfilled'
      })
      return
    }

    let isCancelled = false

    setState((currentState) => ({
      data: cacheEntry?.data ?? currentState.data,
      error: null,
      status: 'pending'
    }))

    factory()
      .then((data) => {
        if (cacheKey) {
          promiseStateCache.set(cacheKey, {
            data,
            updatedAt: Date.now()
          })
        }

        if (!isCancelled) {
          setState({ data, error: null, status: 'fulfilled' })
        }
      })
      .catch((error) => {
        if (!isCancelled) {
          setState({
            data: cacheEntry?.data ?? null,
            error,
            status: 'rejected'
          })
        }
      })

    return () => {
      isCancelled = true
    }
  }, [
    options?.cacheKey,
    options?.enabled,
    options?.staleTime,
    ...(deps ?? [])
  ])

  return state
}
