'use client'

import { ark } from '@ark-ui/react/factory'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { kbdRecipe } from './kbd.core.styles'

/**
 * Props for the Kbd component.
 *
 * @example
 *   type Example = KbdProps
 */
type KbdProps = React.ComponentProps<typeof ark.kbd> &
  VariantProps<typeof kbdRecipe>

/**
 * Props for the Kbd Group component.
 *
 * @example
 *   type Example = KbdGroupProps
 */
type KbdGroupProps = React.ComponentProps<typeof ark.div>

/**
 * Renders the Kbd component.
 *
 * @example
 *   ;<Kbd />
 */
function Kbd({ variant = 'default', className, ...props }: KbdProps) {
  return (
    <ark.kbd
      className={cn(kbdRecipe({ variant }), className)}
      data-slot='kbd'
      {...props}
    />
  )
}

/**
 * Renders the Kbd Group component.
 *
 * @example
 *   ;<KbdGroup />
 */
function KbdGroup({ className, ...props }: KbdGroupProps) {
  return (
    <ark.div
      className={cn('inline-flex items-center gap-1', className)}
      data-slot='kbd-group'
      {...props}
    />
  )
}

export { Kbd, KbdGroup }

export type { KbdProps }
