import {
  getMediaQueryResponsiveClassName,
  isMediaQueryResponsiveValue
} from '@sync/utils'
import type { MediaQueryResponsiveValue } from '@sync/utils'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import {
  STACK_RESPONSIVE_ALIGN_VARIANTS,
  STACK_RESPONSIVE_JUSTIFY_VARIANTS
} from './stack.core.constants'
import { stackRecipe } from './stack.core.styles'

/**
 * Shared Stack As type.
 *
 * @example
 *   type Example = StackAs
 */
type StackAs =
  | 'div'
  | 'main'
  | 'section'
  | 'header'
  | 'nav'
  | 'footer'

/**
 * Shared Stack Justify type.
 *
 * @example
 *   type Example = StackJustify
 */
type StackJustify = NonNullable<
  VariantProps<typeof stackRecipe>['justify']
>
/**
 * Shared Stack Align type.
 *
 * @example
 *   type Example = StackAlign
 */
type StackAlign = NonNullable<
  VariantProps<typeof stackRecipe>['align']
>
/**
 * Props for the Stack Recipe component.
 *
 * @example
 *   type Example = StackRecipeProps
 */
type StackRecipeProps = Omit<
  VariantProps<typeof stackRecipe>,
  'align' | 'justify'
>

/**
 * Props for the Stack Safe component.
 *
 * @example
 *   type Example = StackSafeProps
 */
type StackSafeProps = React.ComponentProps<'div'>

/**
 * Props for the Stack component.
 *
 * @example
 *   type Example = StackProps
 */
type StackProps = Omit<
  React.ComponentProps<StackAs>,
  keyof StackRecipeProps | 'align' | 'justify'
> &
  StackRecipeProps & {
    /**
     * Sets which semantic element the stack renders as.
     *
     * @default 'div'
     */
    as?: StackAs
    justify?: MediaQueryResponsiveValue<StackJustify>
    align?: MediaQueryResponsiveValue<StackAlign>
  }

/**
 * Renders the Stack component.
 *
 * @example
 *   ;<Stack />
 */
function Stack({
  className,
  as = 'div',
  variant,
  align,
  justify,
  break: breakMode,
  orientation,
  ...props
}: StackProps) {
  const Component = as
  const responsiveAlignClassName = getMediaQueryResponsiveClassName(
    align,
    STACK_RESPONSIVE_ALIGN_VARIANTS
  )
  const responsiveJustifyClassName = getMediaQueryResponsiveClassName(
    justify,
    STACK_RESPONSIVE_JUSTIFY_VARIANTS
  )

  return (
    <Component
      className={cn(
        stackRecipe({
          align: isMediaQueryResponsiveValue(align)
            ? undefined
            : align,
          break: breakMode,
          className: cn(
            responsiveAlignClassName,
            responsiveJustifyClassName
          ),
          justify: isMediaQueryResponsiveValue(justify)
            ? undefined
            : justify,
          orientation,
          variant
        }),
        className
      )}
      {...(props as StackSafeProps)}
    />
  )
}

export { Stack }

export type { StackAs, StackProps, StackSafeProps }
