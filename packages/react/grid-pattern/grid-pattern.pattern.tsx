'use client'

import { useId } from 'react'
import { cn } from 'tailwind-variants'

import { gridPatternRootRecipe } from './grid-pattern.pattern.styles'

/**
 * Props for the Grid Pattern component.
 *
 * @example
 *   type Example = GridPatternProps
 */
type GridPatternProps = React.ComponentProps<'svg'> & {
  /**
   * Distance in pixels between grid lines.
   *
   * @default 24
   */
  gap?: number
  /**
   * Stroke width applied to each grid cell.
   *
   * @default 1
   */
  strokeWidth?: number
  /**
   * Stroke color used for the grid lines.
   *
   * @default 'currentColor'
   */
  color?: string
  /**
   * Stroke opacity used for the grid lines.
   *
   * @default 0.25
   */
  opacity?: number
}

/**
 * Renders the Grid Pattern component.
 *
 * @example
 *   ;<GridPattern />
 */
function GridPattern({
  className,
  gap = 24,
  strokeWidth = 1,
  color = 'currentColor',
  opacity = 0.25,
  ...props
}: GridPatternProps) {
  const id = useId()
  const safeGap = Math.max(1, gap)
  const safeStrokeWidth = Math.max(0.1, strokeWidth)

  return (
    <svg
      aria-hidden='true'
      className={cn(gridPatternRootRecipe(), className)}
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
          <path
            d={`M ${safeGap} 0 H 0 V ${safeGap}`}
            fill='none'
            stroke={color}
            strokeOpacity={opacity}
            strokeWidth={safeStrokeWidth}
          />
        </pattern>
      </defs>

      <rect width='100%' height='100%' fill={`url(#${id})`} />
    </svg>
  )
}

export { GridPattern }

export type { GridPatternProps }
