import type {
  ClipboardEvent,
  InputChangeEvent,
  InputFileChangeEvent,
  KeyboardEvent,
  MouseEvent,
  SyntheticEvent
} from '@sync/types'
import type React from 'react'

/** Debounce delay options. */
type DebounceOptions = {
  wait: number
}

/** Throttle delay options. */
type ThrottleOptions = {
  wait: number
}

/**
 * Stops event bubbling.
 *
 * @example
 *   stopPropagation(event)
 */
function stopPropagation(event: SyntheticEvent): void {
  event.stopPropagation()
}

/**
 * Prevents the default browser behavior.
 *
 * @example
 *   preventDefault(event)
 */
function preventDefault(event: SyntheticEvent): void {
  event.preventDefault()
}

/**
 * Prevents the default browser behavior and stops bubbling.
 *
 * @example
 *   preventDefaultAndStopPropagation(event)
 */
function preventDefaultAndStopPropagation(
  event: SyntheticEvent
): void {
  event.preventDefault()
  event.stopPropagation()
}

/**
 * Checks whether a keyboard event is Enter.
 *
 * @example
 *   isEnter(event) // true
 */
function isEnter(event: KeyboardEvent): boolean {
  return event.key === 'Enter'
}

/**
 * Checks whether a keyboard event is Escape.
 *
 * @example
 *   isEscape(event) // true
 */
function isEscape(event: KeyboardEvent): boolean {
  return event.key === 'Escape'
}

/**
 * Checks whether a keyboard event is Tab.
 *
 * @example
 *   isTab(event) // true
 */
function isTab(event: KeyboardEvent): boolean {
  return event.key === 'Tab'
}

/**
 * Checks whether a keyboard event is Space.
 *
 * @example
 *   isSpace(event) // true
 */
function isSpace(event: KeyboardEvent): boolean {
  return event.key === ' '
}

/**
 * Checks whether a mouse event is a left click.
 *
 * @example
 *   isLeftClick(event) // true
 */
function isLeftClick(event: MouseEvent): boolean {
  return event.button === 0
}

/**
 * Checks whether a mouse event is a middle click.
 *
 * @example
 *   isMiddleClick(event) // true
 */
function isMiddleClick(event: MouseEvent): boolean {
  return event.button === 1
}

/**
 * Checks whether a mouse event is a right click.
 *
 * @example
 *   isRightClick(event) // true
 */
function isRightClick(event: MouseEvent): boolean {
  return event.button === 2
}

/**
 * Checks whether modifier keys are pressed.
 *
 * @example
 *   isCtrlPressed(event) // true
 */
function isCtrlPressed(event: KeyboardEvent | MouseEvent): boolean {
  return event.ctrlKey
}

/**
 * Checks whether modifier keys are pressed.
 *
 * @example
 *   isShiftPressed(event) // true
 */
function isShiftPressed(event: KeyboardEvent | MouseEvent): boolean {
  return event.shiftKey
}

/**
 * Checks whether modifier keys are pressed.
 *
 * @example
 *   isAltPressed(event) // true
 */
function isAltPressed(event: KeyboardEvent | MouseEvent): boolean {
  return event.altKey
}

/**
 * Checks whether modifier keys are pressed.
 *
 * @example
 *   isMetaPressed(event) // true
 */
function isMetaPressed(event: KeyboardEvent | MouseEvent): boolean {
  return event.metaKey
}

/**
 * Returns the value from an input change event.
 *
 * @example
 *   getValue(event) // 'hello'
 */
function getValue(event: InputChangeEvent): string {
  return event.target.value
}

/**
 * Returns the checked state from a checkbox change event.
 *
 * @example
 *   getChecked(event) // true
 */
function getChecked(
  event: React.ChangeEvent<HTMLInputElement>
): boolean {
  return event.target.checked
}

/**
 * Returns the selected files from a file input event.
 *
 * @example
 *   getFiles(event) // [file]
 */
function getFiles(event: InputFileChangeEvent): File[] {
  return [...(event.target.files ?? [])]
}

/**
 * Returns the first selected file from a file input event.
 *
 * @example
 *   getFirstFile(event) // file
 */
function getFirstFile(event: InputFileChangeEvent): File | undefined {
  return event.target.files?.[0]
}

/**
 * Returns the clipboard text from a paste or copy event.
 *
 * @example
 *   getClipboardText(event) // 'hello'
 */
function getClipboardText(event: ClipboardEvent): string {
  return event.clipboardData.getData('text')
}

/**
 * Intentionally does nothing.
 *
 * @example
 *   noop()
 */
function noop(): void {
  return undefined
}

/**
 * Returns the provided value.
 *
 * @example
 *   identity(1) // 1
 */
function identity<T>(value: T): T {
  return value
}

/**
 * Executes a callback only once and caches the result.
 *
 * @example
 *   const getValueOnce = once(() => Math.random())
 */
function once<TArgs extends unknown[], TReturn>(
  fn: (...args: TArgs) => TReturn
): (...args: TArgs) => TReturn {
  let called = false
  let result: TReturn

  return (...args: TArgs) => {
    if (!called) {
      result = fn(...args)
      called = true
    }

    return result
  }
}

/**
 * Delays callback execution until the wait period ends.
 *
 * @example
 *   const onInput = debounce(handleInput, { wait: 300 })
 */
function debounce<TArgs extends unknown[]>(
  fn: (...args: TArgs) => void,
  { wait }: DebounceOptions
): (...args: TArgs) => void {
  let timeout: ReturnType<typeof setTimeout>

  return (...args: TArgs) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      fn(...args)
    }, wait)
  }
}

/**
 * Limits callback execution to one call per wait period.
 *
 * @example
 *   const onScroll = throttle(handleScroll, { wait: 100 })
 */
function throttle<TArgs extends unknown[]>(
  fn: (...args: TArgs) => void,
  { wait }: ThrottleOptions
): (...args: TArgs) => void {
  let waiting = false

  return (...args: TArgs) => {
    if (waiting) {
      return
    }

    waiting = true

    fn(...args)

    setTimeout(() => {
      waiting = false
    }, wait)
  }
}

/**
 * Creates a pipe helper for a single value.
 *
 * @example
 *   pipe(1).to((value) => value + 1)
 */
function pipe<T>(value: T) {
  return {
    to<TResult>(fn: (value: T) => TResult): TResult {
      return fn(value)
    }
  }
}

/**
 * Composes functions from right to left.
 *
 * @example
 *   compose<number>((value) => value + 1, (value) => value * 2)(2)
 */
function compose<T>(...fns: ((value: T) => T)[]): (value: T) => T {
  return (value) => {
    let current = value

    for (let index = fns.length - 1; index >= 0; index -= 1) {
      current = fns[index](current)
    }

    return current
  }
}

export const fn = () => ({
  compose,
  debounce,
  getChecked,
  getClipboardText,
  getFiles,
  getFirstFile,
  getValue,
  identity,
  isAltPressed,
  isCtrlPressed,
  isEnter,
  isEscape,
  isLeftClick,
  isMetaPressed,
  isMiddleClick,
  isRightClick,
  isShiftPressed,
  isSpace,
  isTab,
  noop,
  once,
  pipe,
  preventDefault,
  preventDefaultAndStopPropagation,
  stopPropagation,
  throttle
})
