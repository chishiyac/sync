'use client'

import { ark } from '@ark-ui/react/factory'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { floatRecipe } from './float.core.styles'

/**
 * Props for the Float component.
 *
 * @example
 *   type Example = FloatProps
 */
type FloatProps = React.ComponentProps<typeof ark.div> &
  VariantProps<typeof floatRecipe>

/**
 * Renders the Float component.
 *
 * @example
 *   ;<Float />
 */
function Float({
  placement = 'top-end',
  className,
  ...props
}: FloatProps) {
  return (
    <ark.div
      className={cn(floatRecipe({ placement }), className)}
      data-placement={placement}
      data-slot='float'
      {...props}
    />
  )
}

export { Float }

export type { FloatProps }
