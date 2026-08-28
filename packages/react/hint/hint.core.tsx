'use client'

import { Portal } from '@ark-ui/react/portal'
import type { PresenceProps } from '@ark-ui/react/presence'
import { Presence } from '@ark-ui/react/presence'
import {
  Tooltip as ArkTooltip,
  useTooltipContext
} from '@ark-ui/react/tooltip'
import type React from 'react'
import { cn } from 'tailwind-variants'

import { DEFAULT_HINT_POSITIONING } from './hint.core.constants'
import {
  hintContentRecipe,
  hintPositionerRecipe
} from './hint.core.styles'
import { getTooltipPositioning } from './hint.core.utils'

/**
 * Shared Hint Mounting Keys type.
 *
 * @example
 *   type Example = HintMountingKeys
 */
type HintMountingKeys = 'lazyMount' | 'unmountOnExit'

/**
 * Supported hint placements.
 *
 * @example
 *   type Example = HintPlacement
 */
type HintPlacement = 'top' | 'bottom' | 'left' | 'right'

/**
 * Shared Hint Align type.
 *
 * @example
 *   type Example = HintAlign
 */
type HintAlign = 'start' | 'center' | 'end'

/**
 * Shared Hint Positioning type.
 *
 * @example
 *   type Example = HintPositioning
 */
type HintPositioning = {
  /**
   * Horizontal alignment of the tooltip.
   *
   * @default 'center'
   */
  align?: HintAlign
  /**
   * Distance in pixels between the trigger and the tooltip.
   *
   * @default 10
   */
  gutter?: number
  /**
   * Preferred side where the tooltip should appear.
   *
   * @default 'top'
   */
  placement?: HintPlacement
}

/**
 * Props for the Hint component.
 *
 * @example
 *   type Example = HintProps
 */
type HintProps = React.PropsWithChildren<{
  /**
   * Whether the hint should start open.
   *
   * @default false
   */
  defaultOpen?: boolean
  /** Called whenever the open state changes. */
  onOpenChange?: (open: boolean) => void
  /** Controls whether the hint is open. */
  open?: boolean
  /** Optional custom positioning for the tooltip. */
  positioning?: HintPositioning
}>

/**
 * Props for the Hint Content component.
 *
 * @example
 *   type Example = HintContentProps
 */
type HintContentProps = React.ComponentProps<
  typeof ArkTooltip.Content
> &
  Pick<PresenceProps, HintMountingKeys>

/**
 * Props for the Hint Trigger component.
 *
 * @example
 *   type Example = HintTriggerProps
 */
type HintTriggerProps = React.ComponentProps<
  typeof ArkTooltip.Trigger
>

/**
 * Props for the Hint Arrow component.
 *
 * @example
 *   type Example = HintArrowProps
 */
type HintArrowProps = React.ComponentProps<typeof ArkTooltip.Arrow>

/**
 * Renders the Hint component.
 *
 * @example
 *   ;<Hint />
 */
function Hint({
  children,
  defaultOpen = false,
  onOpenChange,
  open: openProp,
  positioning,
  ...props
}: HintProps) {
  return (
    <ArkTooltip.Root
      closeDelay={DEFAULT_HINT_POSITIONING.closeDelay}
      defaultOpen={defaultOpen}
      open={openProp}
      openDelay={DEFAULT_HINT_POSITIONING.openDelay}
      onOpenChange={(details) => onOpenChange?.(details.open)}
      positioning={getTooltipPositioning(positioning)}
      {...props}
    >
      {children}
    </ArkTooltip.Root>
  )
}

/**
 * Renders the Hint Trigger component.
 *
 * @example
 *   ;<HintTrigger />
 */
function HintTrigger({ ...props }: HintTriggerProps) {
  return <ArkTooltip.Trigger data-slot='hint-trigger' {...props} />
}

/**
 * Renders the Hint Arrow component.
 *
 * @example
 *   ;<HintArrow />
 */
function HintArrow({ style, ...props }: HintArrowProps) {
  return (
    <ArkTooltip.Arrow
      data-slot='hint-arrow'
      style={
        {
          '--arrow-background': 'var(--primary)',
          '--arrow-size': 'calc(1.5 * var(--spacing))',
          ...style
        } as React.CSSProperties
      }
      {...props}
    >
      <ArkTooltip.ArrowTip />
    </ArkTooltip.Arrow>
  )
}

/**
 * Renders the Hint Content component.
 *
 * @example
 *   ;<HintContent />
 */
function HintContent({
  lazyMount = true,
  unmountOnExit = true,
  className,
  children,
  ...props
}: HintContentProps) {
  const { open } = useTooltipContext()

  return (
    <Portal>
      <Presence
        asChild
        lazyMount={lazyMount}
        present={open}
        unmountOnExit={unmountOnExit}
      >
        <ArkTooltip.Positioner
          className={hintPositionerRecipe()}
          data-slot='hint-positioner'
        >
          <ArkTooltip.Content
            className={cn(hintContentRecipe(), className)}
            data-slot='hint-content'
            data-state={open ? 'open' : 'closed'}
            {...props}
          >
            {children}
            <HintArrow />
          </ArkTooltip.Content>
        </ArkTooltip.Positioner>
      </Presence>
    </Portal>
  )
}

export { Hint, HintArrow, HintContent, HintTrigger }

export type {
  HintAlign,
  HintArrowProps,
  HintContentProps,
  HintPlacement,
  HintPositioning,
  HintProps,
  HintTriggerProps
}
