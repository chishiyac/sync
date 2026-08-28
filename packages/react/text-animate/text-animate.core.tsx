'use client'

import type {
  DOMMotionComponents,
  MotionProps,
  Variants
} from 'motion/react'
import { AnimatePresence, motion } from 'motion/react'
import { memo } from 'react'
import { cn } from 'tailwind-variants'

import {
  TEXT_ANIMATE_DEFAULT_ITEM_ANIMATION_VARIANTS,
  TEXT_ANIMATE_MOTION_ELEMENTS,
  TEXT_ANIMATE_STAGGER_TIMINGS
} from './text-animate.core.constants'

/**
 * Supported text animate animation values.
 *
 * @example
 *   type Example = TextAnimateAnimationType
 */
type TextAnimateAnimationType = 'text' | 'word' | 'character' | 'line'
/**
 * Supported text animate animation variants.
 *
 * @example
 *   type Example = TextAnimateAnimationVariant
 */
type TextAnimateAnimationVariant =
  | 'fadeIn'
  | 'blurIn'
  | 'blurInUp'
  | 'blurInDown'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'scaleUp'
  | 'scaleDown'

/**
 * Supported motion element values.
 *
 * @example
 *   type Example = MotionElementType
 */
type MotionElementType = Extract<
  keyof DOMMotionComponents,
  keyof typeof TEXT_ANIMATE_MOTION_ELEMENTS
>

/**
 * Props for the Text Animate component.
 *
 * @example
 *   type Example = TextAnimateProps
 */
type TextAnimateProps = Omit<MotionProps, 'children'> & {
  /** The text content to animate */
  children: string
  /** The class name to be applied to the component */
  className?: string
  /** The class name to be applied to each segment */
  segmentClassName?: string
  /** The delay before the animation starts */
  delay?: number
  /** The duration of the animation */
  duration?: number
  /** Custom motion variants for the animation */
  variants?: Variants
  /** The element type to render */
  as?: MotionElementType
  /** How to split the text ("text", "word", "character") */
  by?: TextAnimateAnimationType
  /** Whether to start animation when component enters viewport */
  startOnView?: boolean
  /** Whether to animate only once */
  once?: boolean
  /** The animation preset to use */
  animation?: TextAnimateAnimationVariant
  /** Whether to enable accessibility features (default: true) */
  accessible?: boolean
}

const TextAnimate = memo(
  ({
    children,
    delay = 0,
    duration = 0.3,
    variants,
    className,
    segmentClassName,
    as: Component = 'p',
    startOnView = true,
    once = false,
    by = 'word',
    animation = 'fadeIn',
    accessible = true,
    ...props
  }: TextAnimateProps) => {
    const MotionComponent = TEXT_ANIMATE_MOTION_ELEMENTS[Component]

    let segments: string[] = []
    switch (by) {
      case 'word': {
        segments = children.split(/(?<whitespace>\s+)/u)
        break
      }
      case 'character': {
        segments = [...children]
        break
      }
      case 'line': {
        segments = children.split('\n')
        break
      }
      default: {
        segments = [children]
        break
      }
    }

    const staggerChildren = duration / Math.max(segments.length, 1)

    let finalVariants: { container: Variants; item: Variants }

    if (variants) {
      finalVariants = {
        container: {
          exit: {
            opacity: 0,
            transition: {
              staggerChildren,
              staggerDirection: -1
            }
          },
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              delayChildren: delay,
              opacity: { delay, duration: 0.01 },
              staggerChildren
            }
          }
        },
        item: variants
      }
    } else {
      const preset =
        TEXT_ANIMATE_DEFAULT_ITEM_ANIMATION_VARIANTS[animation]

      finalVariants = {
        container: {
          exit: {
            ...preset.container.exit,
            transition: {
              staggerChildren,
              staggerDirection: -1
            }
          },
          hidden: preset.container.hidden,
          show: {
            ...preset.container.show,
            transition: {
              delayChildren: delay,
              staggerChildren
            }
          }
        },
        item: preset.item
      }
    }

    return (
      <AnimatePresence mode='popLayout'>
        <MotionComponent
          variants={finalVariants.container as Variants}
          initial='hidden'
          whileInView={startOnView ? 'show' : undefined}
          animate={startOnView ? undefined : 'show'}
          exit='exit'
          className={cn('whitespace-pre-wrap', className)}
          viewport={{ once }}
          aria-label={accessible ? children : undefined}
          {...props}
        >
          {accessible && <span className='sr-only'>{children}</span>}
          {segments.map((segment, i) => (
            <motion.span
              key={`${by}-${segment}-${i}`}
              variants={finalVariants.item}
              custom={i * TEXT_ANIMATE_STAGGER_TIMINGS[by]}
              className={cn(
                by === 'line'
                  ? 'block'
                  : 'inline-block whitespace-pre',
                by === 'character' && '',
                segmentClassName
              )}
              aria-hidden={accessible ? true : undefined}
            >
              {segment}
            </motion.span>
          ))}
        </MotionComponent>
      </AnimatePresence>
    )
  }
)

export { TextAnimate }

export type {
  MotionElementType,
  TextAnimateAnimationType,
  TextAnimateAnimationVariant,
  TextAnimateProps
}
