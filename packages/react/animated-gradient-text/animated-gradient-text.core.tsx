import type React from 'react'
import { cn } from 'tailwind-variants'

import { animatedGradientTextRootRecipe } from './animated-gradient-text.core.styles'

/**
 * Props for the Animated Gradient Text component.
 *
 * @example
 *   type Example = AnimatedGradientTextProps
 */
type AnimatedGradientTextProps = React.ComponentProps<'div'> & {
  /** Controls the background animation speed multiplier. */
  /** @default 1 */
  speed?: number

  /** Sets the starting gradient color. */
  /** @default 'var(--primary)' */
  colorFrom?: string

  /** Sets the ending gradient color. */
  /** @default 'var(--ring)' */
  colorTo?: string
}

/**
 * Renders the Animated Gradient Text component.
 *
 * @example
 *   ;<AnimatedGradientText />
 */
function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = 'var(--primary)',
  colorTo = 'var(--ring)',
  ...props
}: AnimatedGradientTextProps) {
  return (
    <span
      style={
        {
          '--bg-size': `${speed * 300}%`,
          '--color-from': colorFrom,
          '--color-to': colorTo
        } as React.CSSProperties
      }
      className={cn(animatedGradientTextRootRecipe(), className)}
      {...props}
    >
      {children}
    </span>
  )
}

export { AnimatedGradientText }

export type { AnimatedGradientTextProps }
