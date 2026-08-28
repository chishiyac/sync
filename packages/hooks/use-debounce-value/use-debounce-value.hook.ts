import { useRef, useState } from 'react'

import type { UseDebounceCallbackState } from '../use-debounce-callback'
import { useDebounceCallback } from '../use-debounce-callback'

type UseDebounceValueEqualityFn<T> = (left: T, right: T) => boolean

type UseDebounceValueOptions<T> = {
  /**
   * Run the update on the leading edge of the delay window.
   *
   * @default false
   */
  leading?: boolean
  /**
   * Run the update on the trailing edge of the delay window.
   *
   * @default true
   */
  trailing?: boolean
  /**
   * Maximum time in milliseconds before the value is forced to
   * update.
   */
  maxWait?: number
  /**
   * Custom equality function used to compare the current and next
   * value.
   */
  equalityFn?: UseDebounceValueEqualityFn<T>
}

/**
 * Returns a debounced state value and a setter that updates it after
 * a delay.
 *
 * The hook only schedules an update when the incoming value differs
 * according to the provided equality function.
 */
function useDebounceValue<T>(
  initialValue: T | (() => T),
  delay: number,
  options?: UseDebounceValueOptions<T>
): [T, UseDebounceCallbackState<[T], void>] {
  const eq =
    options?.equalityFn ?? ((left: T, right: T) => left === right)
  const unwrappedInitialValue =
    typeof initialValue === 'function'
      ? (initialValue as () => T)()
      : initialValue
  const [debouncedValue, setDebouncedValue] = useState<T>(
    unwrappedInitialValue
  )
  const previousValueRef = useRef(unwrappedInitialValue)

  const updateDebouncedValue = useDebounceCallback(
    (value: T) => {
      setDebouncedValue(value)
    },
    delay,
    options
  )

  // Update the debounced value if the initial value changes
  // oxlint-disable-next-line react/refs
  if (!eq(previousValueRef.current, unwrappedInitialValue)) {
    updateDebouncedValue(unwrappedInitialValue)
    // oxlint-disable-next-line react/refs
    previousValueRef.current = unwrappedInitialValue
  }

  return [debouncedValue, updateDebouncedValue]
}

export { useDebounceValue }

export type { UseDebounceValueEqualityFn, UseDebounceValueOptions }
