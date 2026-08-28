'use client'

import { ark } from '@ark-ui/react/factory'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { statusRecipe } from './status.core.styles'

/**
 * Props for the Status component.
 *
 * @example
 *   type Example = StatusProps
 */
type StatusProps = React.ComponentProps<typeof ark.span> &
  VariantProps<typeof statusRecipe>

/**
 * Renders the Status component.
 *
 * @example
 *   ;<Status />
 */
function Status({
  variant,
  animated,
  size,
  className,
  ...props
}: StatusProps) {
  return (
    <ark.span
      className={cn(
        statusRecipe({ animated, size, variant }),
        className
      )}
      data-size={size}
      data-slot='status-indicator'
      {...props}
    />
  )
}

export { Status }

export type { StatusProps }
