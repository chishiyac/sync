'use client'

import { motion } from 'motion/react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import {
  DEFAULT_MORPH_SQUARE_BORDER_RADIUS,
  DEFAULT_MORPH_SQUARE_ROTATE_ANIMATION
} from './morph-square.core.constants'
import {
  morphingSquareRootRecipe,
  morphingSquareWrapperRecipe
} from './morph-square.core.styles'

/**
 * Props for the Morphing Square component.
 *
 * @example
 *   type Example = MorphingSquareProps
 */
type MorphingSquareProps = React.ComponentProps<typeof motion.div> &
  VariantProps<typeof morphingSquareRootRecipe> & {
    /** Optional message rendered below the animated square. */
    message?: string
  }

/**
 * Renders the Morphing Square component.
 *
 * @example
 *   ;<MorphingSquare />
 */
function MorphingSquare({
  className,
  message,
  messagePlacement = 'bottom',
  ...props
}: MorphingSquareProps) {
  return (
    <div
      className={cn(morphingSquareRootRecipe({ messagePlacement }))}
    >
      <motion.div
        animate={{
          borderRadius: DEFAULT_MORPH_SQUARE_BORDER_RADIUS,
          rotate: DEFAULT_MORPH_SQUARE_ROTATE_ANIMATION
        }}
        className={cn(morphingSquareWrapperRecipe(), className)}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Number.POSITIVE_INFINITY
        }}
        {...props}
      />
      {message && <span>{message}</span>}
    </div>
  )
}

export { MorphingSquare }

export type { MorphingSquareProps }
