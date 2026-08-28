'use client'

import { Loader2Icon } from 'lucide-react'
import { cn } from 'tailwind-variants'

import { spinnerRecipe } from './spinner.core.styles'

/**
 * Props for the Spinner component.
 *
 * @example
 *   type Example = SpinnerProps
 */
type SpinnerProps = React.ComponentProps<'svg'>

/**
 * Renders the Spinner component.
 *
 * @example
 *   ;<Spinner />
 */
function Spinner({
  'aria-label': ariaLabel = 'Loading',
  className,
  ...props
}: SpinnerProps) {
  return (
    <Loader2Icon
      aria-label={ariaLabel}
      className={cn(spinnerRecipe(), className)}
      data-slot='spinner'
      role='status'
      {...props}
    />
  )
}

export { Spinner }

export type { SpinnerProps }
