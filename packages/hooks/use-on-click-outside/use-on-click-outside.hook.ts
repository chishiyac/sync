import type { RefObject } from 'react'

import { useEventListener } from '../use-event-listener'
import type { UseEventListenerOptions } from '../use-event-listener'

type UseOnClickOutsideEventType =
  | 'mousedown'
  | 'mouseup'
  | 'touchstart'
  | 'touchend'
  | 'focusin'
  | 'focusout'

type UseOnClickOutsideRef<T extends HTMLElement = HTMLElement> =
  | RefObject<T>
  | RefObject<T>[]

type UseOnClickOutsideHandler = (
  event: MouseEvent | TouchEvent | FocusEvent
) => void

type UseOnClickOutsideEventListenerOptions = UseEventListenerOptions

/** Options for `useOnClickOutside`. */
type UseOnClickOutsideOptions<T extends HTMLElement = HTMLElement> = {
  /** One or more refs that define the allowed inside area. */
  ref: UseOnClickOutsideRef<T>
  /**
   * Called when the pointer, touch, or focus event happens outside
   * the ref.
   */
  handler: UseOnClickOutsideHandler
  /**
   * Event name used to detect interactions outside the ref.
   *
   * @default 'mousedown'
   */
  eventType?: UseOnClickOutsideEventType
  /**
   * Options forwarded to `addEventListener`.
   *
   * @default {}
   */
  eventListenerOptions?: UseOnClickOutsideEventListenerOptions
}

function useOnClickOutside<T extends HTMLElement = HTMLElement>({
  ref,
  handler,
  eventType = 'mousedown',
  eventListenerOptions = {}
}: UseOnClickOutsideOptions<T>): void {
  useEventListener(
    eventType,
    (event) => {
      const { target } = event

      if (!(target instanceof Node)) {
        return
      }

      const { isConnected } = target

      if (!isConnected) {
        return
      }

      const refs = Array.isArray(ref) ? ref : [ref]
      const isInside = refs.some((currentRef) =>
        currentRef.current?.contains(target)
      )

      if (!isInside) {
        handler(event)
      }
    },
    undefined,
    eventListenerOptions
  )
}

export { useOnClickOutside }

export type {
  UseOnClickOutsideEventListenerOptions,
  UseOnClickOutsideEventType,
  UseOnClickOutsideHandler,
  UseOnClickOutsideOptions,
  UseOnClickOutsideRef
}
