'use client'

import {
  ScrollArea as ArkScrollArea,
  useScrollAreaContext
} from '@ark-ui/react/scroll-area'
import type React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from 'tailwind-variants'

import {
  scrollAreaFadeRecipe,
  scrollAreaRootRecipe,
  scrollAreaScrollbarRecipe,
  scrollAreaThumbRecipe,
  scrollAreaWrapperRecipe
} from './scroll-area.core.styles'

/**
 * Props for the Scroll Area component.
 *
 * @example
 *   type Example = ScrollAreaProps
 */
type ScrollAreaProps = React.ComponentProps<
  typeof ArkScrollArea.Root
> & {
  scrollFade?: boolean
}

/**
 * Props for the Scroll Area Scrollbar component.
 *
 * @example
 *   type Example = ScrollAreaScrollbarProps
 */
type ScrollAreaScrollbarProps = React.ComponentProps<
  typeof ArkScrollArea.Scrollbar
>

/**
 * Supported scroll area fade states.
 *
 * @example
 *   type Example = ScrollAreaFadeState
 */
type ScrollAreaFadeState = {
  bottom: boolean
  top: boolean
}

const SCROLL_AREA_EDGE_THRESHOLD = 1

const useScrollArea = useScrollAreaContext

/**
 * Renders the Scroll Area Scrollbar component.
 *
 * @example
 *   ;<ScrollAreaScrollbar />
 */
function ScrollAreaScrollbar({
  orientation,
  className,
  ...props
}: ScrollAreaScrollbarProps) {
  return (
    <ArkScrollArea.Scrollbar
      className={cn(scrollAreaScrollbarRecipe(), className)}
      data-slot='scroll-area-scrollbar'
      orientation={orientation}
      {...props}
    >
      <ArkScrollArea.Thumb
        className={scrollAreaThumbRecipe()}
        data-slot='scroll-area-thumb'
      />
    </ArkScrollArea.Scrollbar>
  )
}

/**
 * Renders the Scroll Area component.
 *
 * @example
 *   ;<ScrollArea />
 */
function ScrollArea({
  scrollFade = false,
  className,
  children,
  ...props
}: ScrollAreaProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [fadeState, setFadeState] = useState<ScrollAreaFadeState>({
    bottom: false,
    top: false
  })

  const updateFadeState = useCallback(() => {
    const viewport = viewportRef.current

    if (!scrollFade || !viewport) {
      setFadeState((currentState) =>
        currentState.bottom || currentState.top
          ? { bottom: false, top: false }
          : currentState
      )
      return
    }

    const maxScrollTop = viewport.scrollHeight - viewport.clientHeight
    const nextState = {
      bottom:
        viewport.scrollTop <
        maxScrollTop - SCROLL_AREA_EDGE_THRESHOLD,
      top: viewport.scrollTop > SCROLL_AREA_EDGE_THRESHOLD
    }

    setFadeState((currentState) =>
      currentState.bottom === nextState.bottom &&
      currentState.top === nextState.top
        ? currentState
        : nextState
    )
  }, [scrollFade])

  useEffect(() => {
    const viewport = viewportRef.current

    updateFadeState()

    if (!scrollFade || !viewport) {
      return
    }

    const resizeObserver = new ResizeObserver(updateFadeState)
    resizeObserver.observe(viewport)

    const contentElement = viewport.firstElementChild

    if (contentElement) {
      resizeObserver.observe(contentElement)
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [scrollFade, updateFadeState])

  return (
    <ArkScrollArea.Root
      className={cn(scrollAreaRootRecipe(), className)}
      data-slot='scroll-area'
      {...props}
    >
      <ArkScrollArea.Viewport
        className={cn(scrollAreaWrapperRecipe())}
        data-slot='scroll-area-viewport'
        onScroll={updateFadeState}
        ref={viewportRef}
      >
        <ArkScrollArea.Content data-slot='scroll-area-content'>
          {children}
        </ArkScrollArea.Content>
      </ArkScrollArea.Viewport>

      {scrollFade && (
        <>
          <div
            aria-hidden
            className={scrollAreaFadeRecipe({
              placement: 'top',
              visible: fadeState.top
            })}
            data-slot='scroll-area-fade-top'
          />
          <div
            aria-hidden
            className={scrollAreaFadeRecipe({
              placement: 'bottom',
              visible: fadeState.bottom
            })}
            data-slot='scroll-area-fade-bottom'
          />
        </>
      )}

      <ScrollAreaScrollbar orientation='vertical' />
      <ScrollAreaScrollbar orientation='horizontal' />

      <ArkScrollArea.Corner data-slot='scroll-area-corner' />
    </ArkScrollArea.Root>
  )
}

export { ScrollArea, ScrollAreaScrollbar, useScrollArea }

export type { ScrollAreaProps, ScrollAreaScrollbarProps }
