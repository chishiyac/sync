'use client'

import type { MotionStyle, Transition } from 'motion/react'
import { motion } from 'motion/react'
import type React from 'react'
import { cn } from 'tailwind-variants'

import {
  borderBeamRootRecipe,
  borderBeamWrapperRecipe
} from './border-beam.animated.styles'

/**
 * Props for the Border Beam component.
 *
 * @example
 *   type Example = BorderBeamProps
 */
type BorderBeamProps = React.ComponentProps<typeof motion.div> & {
  /** The size of the border beam. */
  size?: number
  /** The duration of the border beam. */
  duration?: number
  /** The delay of the border beam. */
  delay?: number
  /** The color of the border beam from. */
  colorFrom?: string
  /** The color of the border beam to. */
  colorTo?: string
  /** The motion transition of the border beam. */
  transition?: Transition
  /** The style of the border beam. */
  style?: React.CSSProperties
  /** Whether to reverse the animation direction. */
  reverse?: boolean
  /** The initial offset position (0-100). */
  initialOffset?: number
  /** The border width of the beam. */
  borderWidth?: number
}

/**
 * Renders the Border Beam component.
 *
 * @example
 *   ;<BorderBeam />
 */
function BorderBeam({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = '#ffaa40',
  colorTo = '#9c40ff',
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
  ...props
}: BorderBeamProps) {
  const offsetDistance = `${initialOffset}%`
  const offsetPath = `rect(0 auto auto 0 round ${size}px)`

  return (
    <div
      className={borderBeamRootRecipe()}
      style={
        {
          '--border-beam-width': `${borderWidth}px`
        } as React.CSSProperties
      }
    >
      <motion.div
        className={cn(borderBeamWrapperRecipe(), className)}
        style={
          {
            '--color-from': colorFrom,
            '--color-to': colorTo,
            offsetPath,
            width: size,
            ...style
          } as MotionStyle
        }
        initial={{ offsetDistance }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`]
        }}
        transition={{
          delay: -delay,
          duration,
          ease: 'linear',
          repeat: Infinity,
          ...transition
        }}
        {...props}
      />
    </div>
  )
}

export { BorderBeam }

export type { BorderBeamProps }
