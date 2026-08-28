'use client'

import { Portal } from '@ark-ui/react/portal'
import {
  Tooltip as ArkTooltip,
  useTooltipContext
} from '@ark-ui/react/tooltip'
import type React from 'react'
import { cn } from 'tailwind-variants'

import { TOOLTIP_DEFAULT_POSITIONING } from './tooltip.core.constants'
import { tooltipContentRecipe } from './tooltip.core.styles'

/**
 * Props for the Tooltip component.
 *
 * @example
 *   type Example = TooltipProps
 */
type TooltipProps = React.ComponentProps<typeof ArkTooltip.Root>

/**
 * Props for the Tooltip Trigger component.
 *
 * @example
 *   type Example = TooltipTriggerProps
 */
type TooltipTriggerProps = React.ComponentProps<
  typeof ArkTooltip.Trigger
>

/**
 * Props for the Tooltip Content component.
 *
 * @example
 *   type Example = TooltipContentProps
 */
type TooltipContentProps = React.ComponentProps<
  typeof ArkTooltip.Content
>

const useTooltip = useTooltipContext

/**
 * Renders the Tooltip component.
 *
 * @example
 *   ;<Tooltip />
 */
function Tooltip({
  positioning = TOOLTIP_DEFAULT_POSITIONING,
  lazyMount = true,
  unmountOnExit = true,
  closeDelay = 100,
  openDelay = 0,
  ...props
}: TooltipProps) {
  return (
    <ArkTooltip.Root
      closeDelay={closeDelay}
      data-slot='tooltip'
      lazyMount={lazyMount}
      openDelay={openDelay}
      positioning={positioning}
      unmountOnExit={unmountOnExit}
      {...props}
    />
  )
}

/**
 * Renders the Tooltip Trigger component.
 *
 * @example
 *   ;<TooltipTrigger />
 */
function TooltipTrigger({ ...props }: TooltipTriggerProps) {
  return <ArkTooltip.Trigger data-slot='tooltip-trigger' {...props} />
}

/**
 * Props for the Tooltip Arrow component.
 *
 * @example
 *   type Example = TooltipArrowProps
 */
type TooltipArrowProps = React.ComponentProps<typeof ArkTooltip.Arrow>

/**
 * Renders the Tooltip Arrow component.
 *
 * @example
 *   ;<TooltipArrow />
 */
function TooltipArrow({ style, ...props }: TooltipArrowProps) {
  return (
    <ArkTooltip.Arrow
      data-slot='tooltip-arrow'
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
 * Renders the Tooltip Content component.
 *
 * @example
 *   ;<TooltipContent />
 */
function TooltipContent({
  className,
  children,
  ...props
}: TooltipContentProps) {
  return (
    <Portal>
      <ArkTooltip.Positioner>
        <ArkTooltip.Content
          className={cn(tooltipContentRecipe(), className)}
          data-slot='tooltip-content'
          {...props}
        >
          <TooltipArrow />
          {children}
        </ArkTooltip.Content>
      </ArkTooltip.Positioner>
    </Portal>
  )
}

export {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
  useTooltip
}

export type {
  TooltipArrowProps,
  TooltipContentProps,
  TooltipProps,
  TooltipTriggerProps
}
