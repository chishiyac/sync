import debounce from 'lodash.debounce'
import { useEffect, useMemo, useRef } from 'react'

type UseDebounceCallbackOptions = {
  /**
   * Run the callback on the leading edge of the delay window.
   *
   * @default false
   */
  leading?: boolean
  /**
   * Run the callback on the trailing edge of the delay window.
   *
   * @default true
   */
  trailing?: boolean
  /**
   * Maximum time in milliseconds before the callback is forced to
   * run.
   */
  maxWait?: number
}

type UseDebounceCallbackControlFunctions<TResult> = {
  /** Cancels any pending invocation. */
  cancel: () => void
  /** Immediately invokes the pending callback, if any. */
  flush: () => TResult | undefined
  /** Indicates whether a callback is waiting to run. */
  isPending: () => boolean
}

type UseDebounceCallbackState<TArgs extends unknown[], TResult> = ((
  ...args: TArgs
) => TResult | undefined) &
  UseDebounceCallbackControlFunctions<TResult>

/**
 * Returns a debounced version of a callback together with control
 * helpers.
 *
 * The wrapped function preserves the original argument and return
 * types, and exposes `cancel`, `flush`, and `isPending` controls.
 */
function useDebounceCallback<TArgs extends unknown[], TResult>(
  func: (...args: TArgs) => TResult,
  delay = 500,
  options?: UseDebounceCallbackOptions
): UseDebounceCallbackState<TArgs, TResult> {
  const funcRef = useRef(func)
  const pendingRef = useRef(false)

  // oxlint-disable-next-line react/refs
  funcRef.current = func

  const debounced = useMemo(() => {
    const debouncedFuncInstance = debounce(
      // oxlint-disable-next-line react/refs
      (...args: TArgs) => {
        pendingRef.current = false
        return funcRef.current(...args)
      },
      delay,
      options
    )

    const wrappedFunc: UseDebounceCallbackState<TArgs, TResult> = (
      ...args: TArgs
    ) => {
      pendingRef.current = true
      return debouncedFuncInstance(...args)
    }

    wrappedFunc.cancel = () => {
      pendingRef.current = false
      debouncedFuncInstance.cancel()
    }

    wrappedFunc.isPending = () => pendingRef.current

    wrappedFunc.flush = () => {
      pendingRef.current = false
      return debouncedFuncInstance.flush()
    }

    return wrappedFunc
    // oxlint-disable-next-line react/memo-dependencies
  }, [delay, options])

  useEffect(() => () => debounced.cancel(), [debounced])

  return debounced
}

export { useDebounceCallback }

export type {
  UseDebounceCallbackControlFunctions,
  UseDebounceCallbackOptions,
  UseDebounceCallbackState
}
