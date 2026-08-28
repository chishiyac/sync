'use client'

import { FieldInput } from '@ark-ui/react/field'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { inputRootRecipe } from './input.core.styles'

/**
 * Props for the Input component.
 *
 * @example
 *   type Example = InputProps
 */
type InputProps = Omit<
  React.ComponentProps<typeof FieldInput>,
  'size'
> &
  VariantProps<typeof inputRootRecipe>

/**
 * Renders the Input component.
 *
 * @example
 *   ;<Input />
 */
function Input({
  size = 'md',
  type = 'text',
  className,
  ...props
}: InputProps) {
  return (
    <FieldInput
      className={cn(inputRootRecipe({ size }), className)}
      data-size={size}
      data-slot='input'
      type={type}
      {...props}
    />
  )
}

export { Input }

export type { InputProps }
