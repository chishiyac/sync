'use client'

import { motion } from 'motion/react'
import type { RefObject } from 'react'
import React, { forwardRef, useEffect, useId, useState } from 'react'
import { cn } from 'tailwind-variants'

import {
  ANIMATED_BEAM_GRADIENT_START_COLOR,
  ANIMATED_BEAM_GRADIENT_STOP_COLOR,
  INITIAL_ANIMATED_BEAM_LINEAR_GRADIENT_POSITION
} from './animated-beam.animated.constants'
import { animatedBeamRootRecipe } from './animated-beam.animated.styles'

/**
 * Props for the Animated Beam component.
 *
 * @example
 *   type Example = AnimatedBeamProps
 */
type AnimatedBeamProps = React.ComponentProps<'div'> & {
  /** Reference to the container used as the coordinate system. */
  containerRef: RefObject<HTMLElement | null>

  /** Reference to the element where the beam starts. */
  fromRef: RefObject<HTMLElement | null>

  /** Reference to the element where the beam ends. */
  toRef: RefObject<HTMLElement | null>

  /** Adjusts the vertical bend of the quadratic path. */
  /** @default 0 */
  curvature?: number

  /** Reverses the animated gradient direction along the path. */
  /** @default false */
  reverse?: boolean

  /** Sets the base stroke color of the beam path. */
  /** @default 'gray' */
  pathColor?: string

  /** Sets the stroke width of both beam paths. */
  /** @default 2 */
  pathWidth?: number

  /** Sets the opacity of the static background path. */
  /** @default 0.2 */
  pathOpacity?: number

  /** Sets the starting color of the animated gradient. */
  /** @default ANIMATED_BEAM_GRADIENT_START_COLOR */
  gradientStartColor?: string

  /** Sets the ending color of the animated gradient. */
  /** @default ANIMATED_BEAM_GRADIENT_STOP_COLOR */
  gradientStopColor?: string

  /** Delays the gradient animation start time in seconds. */
  /** @default 0 */
  delay?: number

  /** Controls how long one animation cycle lasts in seconds. */
  /** @default 5 */
  duration?: number

  /** Controls how many times the animation repeats. */
  /** @default Infinity */
  repeat?: number

  /** Adds a delay between repeated animation cycles in seconds. */
  /** @default 0 */
  repeatDelay?: number

  /** Offsets the start point on the X axis. */
  /** @default 0 */
  startXOffset?: number

  /** Offsets the start point on the Y axis. */
  /** @default 0 */
  startYOffset?: number

  /** Offsets the end point on the X axis. */
  /** @default 0 */
  endXOffset?: number

  /** Offsets the end point on the Y axis. */
  /** @default 0 */
  endYOffset?: number
}

/**
 * Props for the Animated Beam Circle component.
 *
 * @example
 *   type Example = AnimatedBeamCircleProps
 */
type AnimatedBeamCircleProps = React.ComponentProps<'div'>

/**
 * Renders the Animated Beam component.
 *
 * @example
 *   ;<AnimatedBeam />
 */
function AnimatedBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 5,
  delay = 0,
  pathColor = 'gray',
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = ANIMATED_BEAM_GRADIENT_START_COLOR,
  gradientStopColor = ANIMATED_BEAM_GRADIENT_STOP_COLOR,
  repeat = Infinity,
  repeatDelay = 0,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0
}: AnimatedBeamProps) {
  const id = useId()
  const [pathD, setPathD] = useState('')
  const [svgDimensions, setSvgDimensions] = useState({
    height: 0,
    width: 0
  })

  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates = reverse
    ? {
        x1: ['90%', '-10%'],
        x2: ['100%', '0%'],
        y1: ['0%', '0%'],
        y2: ['0%', '0%']
      }
    : {
        x1: ['10%', '110%'],
        x2: ['0%', '100%'],
        y1: ['0%', '0%'],
        y2: ['0%', '0%']
      }

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect =
          containerRef.current.getBoundingClientRect()
        const rectA = fromRef.current.getBoundingClientRect()
        const rectB = toRef.current.getBoundingClientRect()

        const svgWidth = containerRect.width
        const svgHeight = containerRect.height
        setSvgDimensions({ height: svgHeight, width: svgWidth })

        const startX =
          rectA.left -
          containerRect.left +
          rectA.width / 2 +
          startXOffset
        const startY =
          rectA.top -
          containerRect.top +
          rectA.height / 2 +
          startYOffset
        const endX =
          rectB.left -
          containerRect.left +
          rectB.width / 2 +
          endXOffset
        const endY =
          rectB.top -
          containerRect.top +
          rectB.height / 2 +
          endYOffset

        const controlY = startY - curvature
        const d = `M ${startX},${startY} Q ${
          (startX + endX) / 2
        },${controlY} ${endX},${endY}`
        setPathD(d)
      }
    }

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      updatePath()
    })

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    // Call the updatePath initially to set the initial path
    updatePath()

    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect()
    }
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset
  ])

  return (
    <svg
      fill='none'
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns='http://www.w3.org/2000/svg'
      className={cn(animatedBeamRootRecipe(), className)}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap='round'
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity='1'
        strokeLinecap='round'
      />
      <defs>
        <motion.linearGradient
          className='transform-gpu'
          id={id}
          gradientUnits='userSpaceOnUse'
          initial={INITIAL_ANIMATED_BEAM_LINEAR_GRADIENT_POSITION}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat,
            repeatDelay
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity='0' />
          <stop stopColor={gradientStartColor} />
          <stop offset='32.5%' stopColor={gradientStopColor} />
          <stop
            offset='100%'
            stopColor={gradientStopColor}
            stopOpacity='0'
          />
        </motion.linearGradient>
      </defs>
    </svg>
  )
}

const AnimatedBeamCircle = forwardRef<
  HTMLDivElement,
  AnimatedBeamCircleProps
>(({ className, children }, ref) => (
  <div
    ref={ref}
    className={cn(
      'z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]',
      className
    )}
  >
    {children}
  </div>
))

export { AnimatedBeam, AnimatedBeamCircle }

export type { AnimatedBeamCircleProps, AnimatedBeamProps }
