'use client'

import {
  HoverCard as ArkHoverCard,
  useHoverCardContext
} from '@ark-ui/react/hover-card'
import { Portal } from '@ark-ui/react/portal'
import type React from 'react'
import { cn } from 'tailwind-variants'

import { DEFAULT_HOVER_CARD_POSITIONING } from './hover-card.core.constants'
import {
  hoverCardArrowTipRecipe,
  hoverCardContentRecipe
} from './hover-card.core.styles'

/**
 * Props for the Hover Card component.
 *
 * @example
 *   type Example = HoverCardProps
 */
type HoverCardProps = React.ComponentProps<typeof ArkHoverCard.Root>

/**
 * Props for the Hover Card Trigger component.
 *
 * @example
 *   type Example = HoverCardTriggerProps
 */
type HoverCardTriggerProps = React.ComponentProps<
  typeof ArkHoverCard.Trigger
>

/**
 * Props for the Hover Card Arrow component.
 *
 * @example
 *   type Example = HoverCardArrowProps
 */
type HoverCardArrowProps = React.ComponentProps<
  typeof ArkHoverCard.Arrow
>
/**
 * Props for the Hover Card Content component.
 *
 * @example
 *   type Example = HoverCardContentProps
 */
type HoverCardContentProps = React.ComponentProps<
  typeof ArkHoverCard.Content
>

const useHoverCard = useHoverCardContext

/**
 * Renders the Hover Card component.
 *
 * @example
 *   ;<HoverCard />
 */
function HoverCard({
  lazyMount = true,
  unmountOnExit = true,
  closeDelay = 100,
  openDelay = 10,
  positioning = DEFAULT_HOVER_CARD_POSITIONING,
  ...props
}: HoverCardProps) {
  return (
    <ArkHoverCard.Root
      closeDelay={closeDelay}
      data-slot='hover-card'
      lazyMount={lazyMount}
      openDelay={openDelay}
      positioning={positioning}
      unmountOnExit={unmountOnExit}
      {...props}
    />
  )
}

/**
 * Renders the Hover Card Trigger component.
 *
 * @example
 *   ;<HoverCardTrigger />
 */
function HoverCardTrigger({ ...props }: HoverCardTriggerProps) {
  return (
    <ArkHoverCard.Trigger data-slot='hover-card-trigger' {...props} />
  )
}

/**
 * Renders the Hover Card Arrow component.
 *
 * @example
 *   ;<HoverCardArrow />
 */
function HoverCardArrow({ style, ...props }: HoverCardArrowProps) {
  return (
    <ArkHoverCard.Arrow
      data-slot='hover-card-arrow'
      style={
        {
          '--arrow-background': 'var(--popover)',
          '--arrow-size': 'calc(1.5 * var(--spacing))',
          ...style
        } as React.CSSProperties
      }
      {...props}
    >
      <ArkHoverCard.ArrowTip className={hoverCardArrowTipRecipe()} />
    </ArkHoverCard.Arrow>
  )
}

/**
 * Renders the Hover Card Content component.
 *
 * @example
 *   ;<HoverCardContent />
 */
function HoverCardContent({
  className,
  children,
  ...props
}: HoverCardContentProps) {
  return (
    <Portal>
      <ArkHoverCard.Positioner data-slot='hover-card-positioner'>
        <ArkHoverCard.Content
          className={cn(hoverCardContentRecipe(), className)}
          data-slot='hover-card-content'
          {...props}
        >
          {children}

          <HoverCardArrow />
        </ArkHoverCard.Content>
      </ArkHoverCard.Positioner>
    </Portal>
  )
}

export {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
  useHoverCard
}

export type {
  HoverCardArrowProps,
  HoverCardContentProps,
  HoverCardProps,
  HoverCardTriggerProps
}
