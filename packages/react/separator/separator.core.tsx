'use client'

import { ark } from '@ark-ui/react/factory'
import { cn } from 'tailwind-variants'

import { separatorRootRecipe } from './separator.core.styles'

/**
 * Supported separator orientations.
 *
 * @example
 *   type Example = SeparatorOrientation
 */
type SeparatorOrientation = 'horizontal' | 'vertical'

/**
 * Props for the Separator component.
 *
 * @example
 *   type Example = SeparatorProps
 */
type SeparatorProps = React.ComponentProps<typeof ark.div> & {
  /**
   * The orientation of the separator.
   *
   * @default 'horizontal'
   */
  orientation?: SeparatorOrientation
}

/**
 * Renders the Separator component.
 *
 * @example
 *   ;<Separator />
 */
function Separator({
  orientation = 'horizontal',
  className,
  ...props
}: SeparatorProps) {
  return (
    <ark.div
      aria-orientation={orientation}
      className={cn(separatorRootRecipe(), className)}
      data-orientation={orientation}
      data-slot='separator'
      role='separator'
      {...props}
    />
  )
}

export { Separator }

export type { SeparatorProps }
