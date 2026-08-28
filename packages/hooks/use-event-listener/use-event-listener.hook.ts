import type { RefObject } from 'react'
import { useEffect, useRef } from 'react'

import { useIsomorphicLayoutEffect } from '../use-isomorphic-layout-effect'

type UseEventListenerOptions = boolean | AddEventListenerOptions

type UseEventListenerWindowEventName = keyof WindowEventMap

type UseEventListenerDocumentEventName = keyof DocumentEventMap

type UseEventListenerElementEventName = keyof HTMLElementEventMap &
  keyof SVGElementEventMap

type UseEventListenerMediaQueryListEventName =
  keyof MediaQueryListEventMap

type UseEventListenerHandler<TEvent> = (event: TEvent) => void

type UseEventListenerWindowHandler<
  K extends UseEventListenerWindowEventName
> = UseEventListenerHandler<WindowEventMap[K]>

type UseEventListenerDocumentHandler<
  K extends UseEventListenerDocumentEventName
> = UseEventListenerHandler<DocumentEventMap[K]>

type UseEventListenerElementHandler<
  K extends UseEventListenerElementEventName
> = UseEventListenerHandler<
  HTMLElementEventMap[K] | SVGElementEventMap[K]
>

type UseEventListenerMediaQueryListHandler<
  K extends UseEventListenerMediaQueryListEventName
> = UseEventListenerHandler<MediaQueryListEventMap[K]>

type UseEventListenerWindowTarget = Window

type UseEventListenerDocumentTarget = RefObject<Document>

type UseEventListenerElementTarget<T extends Element> = RefObject<T>

type UseEventListenerMediaQueryListTarget = RefObject<MediaQueryList>

/**
 * Attaches an event listener to a window, document, element, or media
 * query list.
 *
 * The target is inferred from the provided `element` ref when
 * present; otherwise the listener is attached to `window`.
 */
function useEventListener<K extends UseEventListenerWindowEventName>(
  eventName: K,
  handler: UseEventListenerWindowHandler<K>,
  element?: undefined,
  options?: UseEventListenerOptions
): void

function useEventListener<
  K extends UseEventListenerDocumentEventName
>(
  eventName: K,
  handler: UseEventListenerDocumentHandler<K>,
  element: UseEventListenerDocumentTarget,
  options?: UseEventListenerOptions
): void

function useEventListener<
  K extends UseEventListenerElementEventName,
  T extends Element = K extends keyof HTMLElementEventMap
    ? HTMLDivElement
    : SVGElement
>(
  eventName: K,
  handler: UseEventListenerElementHandler<K>,
  element: UseEventListenerElementTarget<T>,
  options?: UseEventListenerOptions
): void

function useEventListener<
  K extends UseEventListenerMediaQueryListEventName
>(
  eventName: K,
  handler: UseEventListenerMediaQueryListHandler<K>,
  element: UseEventListenerMediaQueryListTarget,
  options?: UseEventListenerOptions
): void

function useEventListener<
  KW extends keyof WindowEventMap,
  KD extends keyof DocumentEventMap,
  KH extends keyof HTMLElementEventMap & keyof SVGElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  T extends HTMLElement | SVGAElement | MediaQueryList | Document =
    HTMLElement
>(
  eventName: KW | KD | KH | KM,
  handler: (
    event:
      | WindowEventMap[KW]
      | DocumentEventMap[KD]
      | HTMLElementEventMap[KH]
      | SVGElementEventMap[KH]
      | MediaQueryListEventMap[KM]
      | Event
  ) => void,
  element?: RefObject<T>,
  options?: UseEventListenerOptions
) {
  const savedHandler = useRef(handler)

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const targetElement: T | Window = element?.current ?? window

    if (!(targetElement && targetElement.addEventListener)) {
      return
    }

    const listener: typeof handler = (event) => {
      savedHandler.current(event)
    }

    targetElement.addEventListener(eventName, listener, options)

    return () => {
      targetElement.removeEventListener(eventName, listener, options)
    }
  }, [eventName, element, options])
}

export { useEventListener }

export type {
  UseEventListenerDocumentEventName,
  UseEventListenerDocumentHandler,
  UseEventListenerDocumentTarget,
  UseEventListenerElementEventName,
  UseEventListenerElementHandler,
  UseEventListenerElementTarget,
  UseEventListenerHandler,
  UseEventListenerMediaQueryListEventName,
  UseEventListenerMediaQueryListHandler,
  UseEventListenerMediaQueryListTarget,
  UseEventListenerOptions,
  UseEventListenerWindowEventName,
  UseEventListenerWindowHandler,
  UseEventListenerWindowTarget
}
