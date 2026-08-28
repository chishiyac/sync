import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { typographyRecipe } from './typography.core.styles'

/**
 * Shared Typography As type.
 *
 * @example
 *   type Example = TypographyAs
 */
type TypographyAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

/**
 * Supported typography variants.
 *
 * @example
 *   type Example = TypographyVariants
 */
type TypographyVariants = VariantProps<typeof typographyRecipe>

/**
 * Props for the Typography component.
 *
 * @example
 *   type Example = TypographyProps
 */
type TypographyProps = Omit<
  React.ComponentPropsWithoutRef<'p'>,
  keyof TypographyVariants | 'as'
> &
  TypographyVariants & {
    /**
     * The HTML element rendered by the typography component.
     *
     * @default 'h1'
     */
    as?: TypographyAs
  }

/**
 * Renders the Typography component.
 *
 * @example
 *   ;<Typography />
 */
function Typography({
  as = 'p',
  size,
  break: breakMode,
  color,
  ellipsis,
  className,
  ...props
}: TypographyProps) {
  const Component = as

  return (
    <Component
      className={cn(
        typographyRecipe({
          break: breakMode,
          color,
          ellipsis,
          size
        }),
        className
      )}
      {...props}
    />
  )
}

export { Typography }

export type { TypographyAs, TypographyProps, TypographyVariants }
