'use client'

import {
  Checkbox as ArkCheckbox,
  useCheckboxContext
} from '@ark-ui/react/checkbox'
import { CheckIcon, MinusIcon } from 'lucide-react'
import type React from 'react'
import { cn } from 'tailwind-variants'

import {
  checkboxGroupRecipe,
  checkboxIndicatorRecipe,
  checkboxRootRecipe
} from './checkbox.core.styles'

/**
 * Props for the Checkbox Group component.
 *
 * @example
 *   type Example = CheckboxGroupProps
 */
type CheckboxGroupProps = React.ComponentProps<
  typeof ArkCheckbox.Group
>

/**
 * Props for the Checkbox Indicator component.
 *
 * @example
 *   type Example = CheckboxIndicatorProps
 */
type CheckboxIndicatorProps = React.ComponentProps<
  typeof ArkCheckbox.Indicator
>

/**
 * Props for the Checkbox component.
 *
 * @example
 *   type Example = CheckboxProps
 */
type CheckboxProps = React.ComponentProps<typeof ArkCheckbox.Root>

const useCheckbox = useCheckboxContext

/**
 * Renders the Checkbox Group component.
 *
 * @example
 *   ;<CheckboxGroup />
 */
function CheckboxGroup({ className, ...props }: CheckboxGroupProps) {
  return (
    <ArkCheckbox.Group
      className={cn(checkboxGroupRecipe(), className)}
      data-slot='checkbox-group'
      {...props}
    />
  )
}

/**
 * Renders the Checkbox Indicator component.
 *
 * @example
 *   ;<CheckboxIndicator />
 */
function CheckboxIndicator({
  className,
  ...props
}: CheckboxIndicatorProps) {
  return (
    <ArkCheckbox.Indicator
      className={cn(checkboxIndicatorRecipe(), className)}
      data-slot='checkbox-indicator'
      {...props}
    />
  )
}

/**
 * Renders the Checkbox component.
 *
 * @example
 *   ;<Checkbox />
 */
function Checkbox({
  className,
  checked,
  tabIndex,
  ...props
}: CheckboxProps) {
  return (
    <ArkCheckbox.Root
      className={cn(checkboxRootRecipe(), className)}
      data-slot='checkbox'
      role='checkbox'
      checked={checked}
      aria-checked={checked ? 'true' : 'false'}
      {...props}
    >
      <ArkCheckbox.Control data-slot='checkbox-control'>
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
        <CheckboxIndicator indeterminate>
          <MinusIcon />
        </CheckboxIndicator>
      </ArkCheckbox.Control>
      <ArkCheckbox.HiddenInput tabIndex={tabIndex} />
    </ArkCheckbox.Root>
  )
}

export { Checkbox, CheckboxGroup, CheckboxIndicator, useCheckbox }

export type {
  CheckboxGroupProps,
  CheckboxIndicatorProps,
  CheckboxProps
}
