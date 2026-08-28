'use client'

import { Field as ArkField } from '@ark-ui/react/field'
import type React from 'react'
import { cn } from 'tailwind-variants'

import { textareaRecipe } from './textarea.core.styles'

/**
 * Props for the Textarea component.
 *
 * @example
 *   type Example = TextareaProps
 */
type TextareaProps = React.ComponentProps<typeof ArkField.Textarea>

/**
 * Renders the Textarea component.
 *
 * @example
 *   ;<Textarea />
 */
function Textarea({ className, ...props }: TextareaProps) {
  return (
    <ArkField.Textarea
      className={cn(textareaRecipe(), className)}
      data-slot='textarea'
      {...props}
    />
  )
}

export { Textarea }

export type { TextareaProps }
