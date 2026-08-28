'use client'

import {
  Toggle as ArkToggle,
  useToggleContext
} from '@ark-ui/react/toggle'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { buttonRootRecipe } from '../button'
import {
  toggleIndicatorRecipe,
  toggleRecipe
} from './toggle.core.styles'

/**
 * Supported toggle variants.
 *
 * @example
 *   type Example = ToggleVariant
 */
type ToggleVariant = 'outline' | 'ghost'

/**
 * Props for the Toggle component.
 *
 * @example
 *   type Example = ToggleProps
 */
type ToggleProps = React.ComponentProps<typeof ArkToggle.Root> &
  VariantProps<typeof toggleRecipe> & {
    /**
     * The variant of the toggle
     *
     * @default 'outline'
     */
    variant?: Extract<
      VariantProps<typeof buttonRootRecipe>['variant'],
      ToggleVariant
    >
  }

/**
 * Props for the Toggle Indicator component.
 *
 * @example
 *   type Example = ToggleIndicatorProps
 */
type ToggleIndicatorProps = React.ComponentProps<
  typeof ArkToggle.Indicator
>

const useToggle = useToggleContext

/**
 * Renders the Toggle component.
 *
 * @example
 *   ;<Toggle />
 */
function Toggle({
  variant = 'ghost',
  size = 'md',
  className,
  ...props
}: ToggleProps) {
  return (
    <ArkToggle.Root
      className={cn(
        buttonRootRecipe({ clickEffect: false, variant }),
        toggleRecipe({ size }),
        className
      )}
      data-slot='toggle'
      {...props}
    />
  )
}

/**
 * Renders the Toggle Indicator component.
 *
 * @example
 *   ;<ToggleIndicator />
 */
function ToggleIndicator({
  children,
  ...props
}: ToggleIndicatorProps) {
  return (
    <ArkToggle.Indicator
      className={toggleIndicatorRecipe()}
      data-slot='toggle-indicator'
      {...props}
    >
      {children}
    </ArkToggle.Indicator>
  )
}

export { Toggle, ToggleIndicator, toggleRecipe, useToggle }

export type { ToggleIndicatorProps, ToggleProps, ToggleVariant }
