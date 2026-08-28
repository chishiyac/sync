'use client'

import { motion } from 'motion/react'
import * as React from 'react'
import { cn } from 'tailwind-variants'

import {
  DEFAULT_SHINY_TEXT_COLOR,
  DEFAULT_SHINY_TEXT_DURATION,
  DEFAULT_SHINY_TEXT_SHIMMERING_COLOR,
  DEFAULT_SHINY_TEXT_WAVE,
  SHINY_TEXT_ANIMATE_WAVE_STATE,
  SHINY_TEXT_CHARACTER_STYLE,
  SHINY_TEXT_COLOR_SEQUENCE,
  SHINY_TEXT_INITIAL_WAVE_STATE,
  SHINY_TEXT_REPEAT_DELAY_FACTOR,
  SHINY_TEXT_TRANSITION_EASE,
  SHINY_TEXT_WRAPPER_STYLE
} from './shiny-text.core.constants'

/**
 * Props for the Shiny Text component.
 *
 * @example
 *   type Example = ShinyTextProps
 */
type ShinyTextProps = Omit<
  React.ComponentProps<typeof motion.span>,
  'children'
> & {
  /**
   * Optional React children. When `text` is not provided, a string or
   * number child is used as the source text.
   */
  children?: React.ReactNode
  /**
   * Animation duration for each character cycle.
   *
   * @default 1
   */
  duration?: number
  /**
   * Stops the animation and renders the text statically.
   *
   * @default false
   */
  paused?: boolean
  /**
   * Source text to animate. Takes precedence over `children` when
   * provided.
   */
  text?: string
  /**
   * Enables the 3D wave motion per character.
   *
   * @default false
   */
  wave?: boolean
  /**
   * Base text color used by the shimmer effect.
   *
   * @default 'var(--color-neutral-500)'
   */
  color?: string
  /**
   * Highlight color used during the shimmer pass.
   *
   * @default 'var(--color-neutral-300)'
   */
  shimmeringColor?: string
}

/**
 * Renders the Shiny Text component.
 *
 * @example
 *   ;<ShinyText />
 */
function ShinyText({
  children,
  text,
  duration = DEFAULT_SHINY_TEXT_DURATION,
  transition,
  paused = false,
  wave = DEFAULT_SHINY_TEXT_WAVE,
  color = DEFAULT_SHINY_TEXT_COLOR,
  shimmeringColor = DEFAULT_SHINY_TEXT_SHIMMERING_COLOR,
  ...props
}: ShinyTextProps) {
  const sourceText =
    text ??
    (typeof children === 'string' || typeof children === 'number'
      ? String(children)
      : '')
  const characters = [...sourceText]
  const characterCount = characters.length || 1

  return (
    <motion.span
      style={
        {
          '--color': color,
          '--shimmering-color': shimmeringColor,
          ...SHINY_TEXT_WRAPPER_STYLE,
          color: 'var(--color)'
        } as React.CSSProperties
      }
      {...props}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          style={SHINY_TEXT_CHARACTER_STYLE}
          className={cn(paused && 'text-foreground!')}
          initial={
            wave && !paused
              ? {
                  ...SHINY_TEXT_INITIAL_WAVE_STATE,
                  color: 'var(--color)'
                }
              : {
                  color: 'var(--color)'
                }
          }
          animate={
            paused
              ? {
                  color: 'var(--color)'
                }
              : {
                  ...(wave ? SHINY_TEXT_ANIMATE_WAVE_STATE : {}),
                  color: SHINY_TEXT_COLOR_SEQUENCE
                }
          }
          transition={{
            delay: (index * duration) / characterCount,
            duration,
            ease: SHINY_TEXT_TRANSITION_EASE,
            repeat: paused ? 0 : Infinity,
            repeatDelay: paused
              ? 0
              : characterCount * SHINY_TEXT_REPEAT_DELAY_FACTOR,
            repeatType: 'loop',
            ...transition
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export { ShinyText }

export type { ShinyTextProps }
