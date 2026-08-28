'use client'

import { ark } from '@ark-ui/react/factory'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { badgeRootRecipe } from './badge.core.styles'

/**
 * Props for the Badge component.
 *
 * @example
 *   type Example = BadgeProps
 */
type BadgeProps = React.ComponentProps<typeof ark.span> &
  VariantProps<typeof badgeRootRecipe>

/**
 * Renders the Badge component.
 *
 * @example
 *   ;<Badge />
 */
function Badge({
  variant = 'default',
  size = 'md',
  pill = false,
  className,
  ...props
}: BadgeProps) {
  return (
    <ark.span
      className={cn(
        badgeRootRecipe({ pill, size, variant }),
        className
      )}
      data-size={size}
      data-slot='badge'
      data-variant={variant}
      {...props}
    />
  )
}

export { Badge }
export type { BadgeProps }
