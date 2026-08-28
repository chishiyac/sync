import { ark } from '@ark-ui/react/factory'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import type { HintContentProps, HintPositioning } from '../hint'
import { Hint, HintContent, HintTrigger } from '../hint'
import { Spinner } from '../spinner'
import {
  buttonLoaderRecipe,
  buttonRootRecipe
} from './button.core.styles'

/**
 * Shared Button Hint type.
 *
 * @example
 *   type Example = ButtonHint
 */
type ButtonHint =
  | string
  | (Omit<HintContentProps, 'children'> &
      React.PropsWithChildren<{
        positioning?: HintPositioning
      }> &
      Partial<HintPositioning>)

/**
 * Props for the Button component.
 *
 * @example
 *   type Example = ButtonProps
 */
type ButtonProps = React.ComponentProps<typeof ark.button> &
  VariantProps<typeof buttonRootRecipe> & {
    /**
     * Apply a click effect to the button
     *
     * @default true
     */
    clickEffect?: boolean
    /**
     * Show a loading indicator
     *
     * @default false
     */
    isLoading?: boolean
    loadingLabel?: string
    hint?: ButtonHint
  }

/**
 * Renders the Button component.
 *
 * @example
 *   ;<Button />
 */
function Button({
  variant = 'default',
  size = 'md',
  clickEffect = true,
  pill = false,
  isLoading = false,
  loadingLabel,
  className,
  children,
  hint,
  ...props
}: ButtonProps) {
  const button = (
    <ark.button
      className={cn(
        buttonRootRecipe({
          clickEffect,
          pill,
          size,
          variant
        }),
        className
      )}
      data-size={size}
      data-slot='button'
      data-state={isLoading ? 'loading' : 'idle'}
      data-variant={variant}
      type='button'
      aria-busy={isLoading}
      aria-disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className={buttonLoaderRecipe()}>
          <Spinner aria-hidden />
          {Boolean(loadingLabel) && loadingLabel}
        </span>
      ) : (
        children
      )}
    </ark.button>
  )

  if (!hint) {
    return button
  }

  const resolvedHint =
    typeof hint === 'string' ? { children: hint } : hint

  const {
    children: hintChildren,
    gutter,
    placement,
    align,
    ...hintContentProps
  } = resolvedHint

  return (
    <Hint positioning={{ align, gutter, placement }}>
      <HintTrigger asChild>{button}</HintTrigger>
      <HintContent {...hintContentProps}>{hintChildren}</HintContent>
    </Hint>
  )
}

export { Button }

export type { ButtonProps }
