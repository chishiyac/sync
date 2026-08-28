'use client'

import { useId } from 'react'
import { cn } from 'tailwind-variants'

import { dotPatternRootRecipe } from './dot-pattern.pattern.styles'

/**
 * Props for the Dot Pattern component.
 *
 * @example
 *   type Example = DotPatternProps
 */
type DotPatternProps = React.ComponentProps<'svg'> & {
  /**
   * Distance in pixels between the dot centers.
   *
   * @default 16
   */
  gap?: number
  /**
   * Radius of each dot in pixels.
   *
   * @default 1
   */
  radius?: number
  /**
   * Fill color applied to the dots.
   *
   * @default 'currentColor'
   */
  color?: string
  /**
   * Opacity applied to the dot fill.
   *
   * @default 0.25
   */
  opacity?: number
}

/**
 * Renders the Dot Pattern component.
 *
 * @example
 *   ;<DotPattern />
 */
function DotPattern({
  className,
  gap = 16,
  radius = 1,
  color = 'currentColor',
  opacity = 0.25,
  ...props
}: DotPatternProps) {
  const id = useId()
  const safeGap = Math.max(1, gap)
  const safeRadius = Math.max(0, radius)

  return (
    <svg
      aria-hidden='true'
      className={cn(dotPatternRootRecipe(), className)}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={safeGap}
          height={safeGap}
          patternUnits='userSpaceOnUse'
        >
          <circle
            cx={safeGap / 2}
            cy={safeGap / 2}
            fill={color}
            fillOpacity={opacity}
            r={safeRadius}
          />
        </pattern>
      </defs>

      <rect width='100%' height='100%' fill={`url(#${id})`} />
    </svg>
  )
}

export { DotPattern }

export type { DotPatternProps }
