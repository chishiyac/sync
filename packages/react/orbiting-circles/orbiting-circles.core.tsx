import React from 'react'
import { cn } from 'tailwind-variants'

import {
  ORBITING_CIRCLES_DURATION,
  ORBITING_CIRCLES_ICON_SIZE,
  ORBITING_CIRCLES_PATH,
  ORBITING_CIRCLES_RADIUS,
  ORBITING_CIRCLES_SPEED
} from './orbiting-circles.core.constants'
import {
  orbitingCirclesItemRecipe,
  orbitingCirclesPathCircleRecipe,
  orbitingCirclesPathRecipe
} from './orbiting-circles.core.styles'

/**
 * Props for the Orbiting Circles component.
 *
 * @example
 *   type Example = OrbitingCirclesProps
 */
type OrbitingCirclesProps = React.ComponentProps<'div'> & {
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
  iconSize?: number
  speed?: number
}

/**
 * Renders the Orbiting Circles component.
 *
 * @example
 *   ;<OrbitingCircles />
 */
function OrbitingCircles({
  className,
  children,
  reverse,
  duration = ORBITING_CIRCLES_DURATION,
  delay = 0,
  radius = ORBITING_CIRCLES_RADIUS,
  path = ORBITING_CIRCLES_PATH,
  iconSize = ORBITING_CIRCLES_ICON_SIZE,
  speed = ORBITING_CIRCLES_SPEED,
  style,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = `${duration / speed}s`
  const orbitingItems = React.Children.toArray(children)

  return (
    <>
      {path && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          className={orbitingCirclesPathRecipe()}
        >
          <circle
            className={orbitingCirclesPathCircleRecipe()}
            cx='50%'
            cy='50%'
            r={radius}
            fill='none'
          />
        </svg>
      )}
      {orbitingItems.map((child, index) => {
        const angle = (360 / orbitingItems.length) * index

        return (
          <div
            key={`${angle}-${index}`}
            style={
              {
                ...style,
                '--angle': `${angle}deg`,
                '--delay': `${delay}s`,
                '--duration': calculatedDuration,
                '--icon-size': `${iconSize}px`,
                '--negative-angle': `${-angle}deg`,
                '--radius': `${radius}px`
              } as React.CSSProperties
            }
            className={cn(
              orbitingCirclesItemRecipe({ reverse }),
              className
            )}
            {...props}
          >
            {child}
          </div>
        )
      })}
    </>
  )
}

export { OrbitingCircles }

export type { OrbitingCirclesProps }
