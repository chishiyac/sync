'use client'

import { ark } from '@ark-ui/react/factory'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { Separator } from '../separator'
import {
  buttonGroupRootRecipe,
  buttonGroupSeparatorRecipe,
  buttonGroupTextRecipe
} from './button-group.core.styles'

/**
 * Props for the Button Group component.
 *
 * @example
 *   type Example = ButtonGroupProps
 */
type ButtonGroupProps = React.ComponentProps<typeof ark.fieldset> &
  VariantProps<typeof buttonGroupRootRecipe>

/**
 * Props for the Button Group Text component.
 *
 * @example
 *   type Example = ButtonGroupTextProps
 */
type ButtonGroupTextProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Button Group Separator component.
 *
 * @example
 *   type Example = ButtonGroupSeparatorProps
 */
type ButtonGroupSeparatorProps = React.ComponentProps<
  typeof Separator
>

/**
 * Renders the Button Group component.
 *
 * @example
 *   ;<ButtonGroup />
 */
function ButtonGroup({
  className,
  orientation,
  ...props
}: ButtonGroupProps) {
  return (
    <ark.fieldset
      className={cn(
        buttonGroupRootRecipe({ orientation }),
        className
      )}
      data-orientation={orientation}
      data-slot='button-group'
      {...props}
    />
  )
}

/**
 * Renders the Button Group Text component.
 *
 * @example
 *   ;<ButtonGroupText />
 */
function ButtonGroupText({
  className,
  ...props
}: ButtonGroupTextProps) {
  return (
    <ark.div
      className={cn(buttonGroupTextRecipe(), className)}
      data-slot='button-group-text'
      {...props}
    />
  )
}

/**
 * Renders the Button Group Separator component.
 *
 * @example
 *   ;<ButtonGroupSeparator />
 */
function ButtonGroupSeparator({
  orientation = 'vertical',
  className,
  ...props
}: ButtonGroupSeparatorProps) {
  return (
    <Separator
      className={cn(buttonGroupSeparatorRecipe(), className)}
      data-slot='button-group-separator'
      orientation={orientation}
      {...props}
    />
  )
}

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText }

export type {
  ButtonGroupProps,
  ButtonGroupSeparatorProps,
  ButtonGroupTextProps
}
