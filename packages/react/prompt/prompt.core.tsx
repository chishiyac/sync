import type React from 'react'
import { cn } from 'tailwind-variants'

import {
  promptActionsRecipe,
  promptInputRecipe,
  promptRootRecipe
} from './prompt.core.styles'

/**
 * Props for the Prompt component.
 *
 * @example
 *   type Example = PromptProps
 */
type PromptProps = React.ComponentProps<'div'>

/**
 * Props for the Prompt Input component.
 *
 * @example
 *   type Example = PromptInputProps
 */
type PromptInputProps = React.ComponentProps<'textarea'>

/**
 * Props for the Prompt Actions component.
 *
 * @example
 *   type Example = PromptActionsProps
 */
type PromptActionsProps = React.ComponentProps<'div'>

/**
 * Renders the Prompt component.
 *
 * @example
 *   ;<Prompt />
 */
function Prompt({ className, ...props }: PromptProps) {
  return (
    <div
      data-slot='prompt'
      className={cn(promptRootRecipe(), className)}
      {...props}
    />
  )
}

/**
 * Renders the Prompt Input component.
 *
 * @example
 *   ;<PromptInput />
 */
function PromptInput({ className, ...props }: PromptInputProps) {
  return (
    <textarea
      data-slot='prompt-input'
      className={cn(promptInputRecipe(), className)}
      {...props}
    />
  )
}

/**
 * Renders the Prompt Actions component.
 *
 * @example
 *   ;<PromptActions />
 */
function PromptActions({ className, ...props }: PromptActionsProps) {
  return (
    <div
      data-slot='prompt-actions'
      className={cn(promptActionsRecipe(), className)}
      {...props}
    />
  )
}

export { Prompt, PromptActions, PromptInput }

export type { PromptActionsProps, PromptInputProps, PromptProps }
