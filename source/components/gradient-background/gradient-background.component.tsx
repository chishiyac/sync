import { motion } from 'motion/react'
import { useEffect, useRef } from 'react'
import { cn } from 'tailwind-variants'

import {
  GRADIENT_BACKGROUND_DEFAULT_COLORS,
  GRADIENT_BACKGROUND_DEFAULT_CONTAINER_STYLE,
  GRADIENT_BACKGROUND_DEFAULT_STOPS
} from './gradient-background.component.constants'
import {
  gradientBackgroundLayerRecipe,
  gradientBackgroundRootRecipe
} from './gradient-background.component.styles'

export type GradientBackgroundProps = React.ComponentProps<
  typeof motion.div
> & {
  animationSpeed?: number
  breathing?: boolean
  breathingRange?: number
  containerClassName?: string
  containerStyle?: React.CSSProperties
  gradientColors?: string[]
  gradientStops?: number[]
  startingGap?: number
  topOffset?: number
}

function GradientBackground({
  startingGap = 125,
  breathing = false,
  gradientColors = GRADIENT_BACKGROUND_DEFAULT_COLORS,
  gradientStops = GRADIENT_BACKGROUND_DEFAULT_STOPS,
  animationSpeed = 0.02,
  breathingRange = 5,
  containerStyle = GRADIENT_BACKGROUND_DEFAULT_CONTAINER_STYLE,
  topOffset = 0,
  containerClassName = ''
}: GradientBackgroundProps) {
  // Validation: Ensure gradientStops and gradientColors lengths match
  if (gradientColors.length !== gradientStops.length) {
    throw new Error(
      `GradientColors and GradientStops must have the same length.
     Received gradientColors length: ${gradientColors.length},
     gradientStops length: ${gradientStops.length}`
    )
  }

  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let animationFrame: number
    let width = startingGap
    let directionWidth = 1

    const animateGradient = () => {
      if (width >= startingGap + breathingRange) {
        directionWidth = -1
      }
      if (width <= startingGap - breathingRange) {
        directionWidth = 1
      }

      if (!breathing) {
        directionWidth = 0
      }
      width += directionWidth * animationSpeed

      const gradientStopsString = gradientStops
        .map((stop, index) => `${gradientColors[index]} ${stop}%`)
        .join(', ')

      const gradient = `radial-gradient(${width}% ${width + topOffset}% at 50% 20%, ${gradientStopsString})`

      if (containerRef.current) {
        containerRef.current.style.background = gradient
      }

      animationFrame = requestAnimationFrame(animateGradient)
    }

    animationFrame = requestAnimationFrame(animateGradient)

    return () => cancelAnimationFrame(animationFrame) // Cleanup animation
  }, [
    startingGap,
    breathing,
    gradientColors,
    gradientStops,
    animationSpeed,
    breathingRange,
    topOffset
  ])

  return (
    <motion.div
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 2,
          ease: [0.25, 0.1, 0.25, 1] // Cubic bezier easing
        }
      }}
      className={cn(
        gradientBackgroundRootRecipe(),
        containerClassName
      )}
      initial={{
        opacity: 0,
        scale: 1.5
      }}
      key='animated-gradient-background'
    >
      <div
        className={gradientBackgroundLayerRecipe()}
        ref={containerRef}
        style={containerStyle}
      />
    </motion.div>
  )
}

export { GradientBackground }
