import type { Dispatch, SetStateAction } from 'react'
import { useCallback, useState } from 'react'

type UseBooleanReturn = {
  /** Current boolean value. */
  value: boolean
  /** Direct setter for the boolean state. */
  setValue: Dispatch<SetStateAction<boolean>>
  /** Sets the value to `true`. */
  setTrue: () => void
  /** Sets the value to `false`. */
  setFalse: () => void
  /** Toggles the current boolean value. */
  toggle: () => void
}

/**
 * Returns a boolean state helper with convenience actions.
 *
 * @default false
 * @param defaultValue - Initial boolean value.
 */
function useBoolean(defaultValue = false): UseBooleanReturn {
  if (typeof defaultValue !== 'boolean') {
    throw new TypeError('defaultValue must be `true` or `false`')
  }

  const [value, setValue] = useState(defaultValue)

  const setTrue = useCallback(() => {
    setValue(true)
  }, [])

  const setFalse = useCallback(() => {
    setValue(false)
  }, [])

  const toggle = useCallback(() => {
    setValue((x) => !x)
  }, [])

  return { setFalse, setTrue, setValue, toggle, value }
}

export { useBoolean }

export type { UseBooleanReturn }
