import React, { useId } from 'react'
import { cn } from 'tailwind-variants'

import { strippedPatternRootRecipe } from './stripped-pattern.pattern.styles'

/**
 * Supported stripped pattern directions.
 *
 * @example
 *   type Example = StrippedPatternDirection
 */
type StrippedPatternDirection = 'left' | 'right'

/**
 * Props for the Striped Pattern component.
 *
 * @example
 *   type Example = StripedPatternProps
 */
type StripedPatternProps = React.ComponentProps<'svg'> & {
  /**
   * Controls the direction of the diagonal stripes.
   *
   * @default 'left'
   */
  direction?: StrippedPatternDirection
}

/**
 * Renders the Striped Pattern component.
 *
 * @example
 *   ;<StripedPattern />
 */
function StripedPattern({
  direction = 'left',
  className,
  width = 10,
  height = 10,
  ...props
}: StripedPatternProps) {
  const id = useId()
  const w = Number(width)
  const h = Number(height)

  return (
    <svg
      aria-hidden='true'
      className={cn(strippedPatternRootRecipe(), className)}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={w}
          height={h}
          patternUnits='userSpaceOnUse'
        >
          {direction === 'left' ? (
            <>
              <line
                x1='0'
                y1={h}
                x2={w}
                y2='0'
                stroke='currentColor'
              />
              <line
                x1={-w}
                y1={h}
                x2='0'
                y2='0'
                stroke='currentColor'
              />
              <line
                x1={w}
                y1={h}
                x2={w * 2}
                y2='0'
                stroke='currentColor'
              />
            </>
          ) : (
            <>
              <line
                x1='0'
                y1='0'
                x2={w}
                y2={h}
                stroke='currentColor'
              />
              <line
                x1={-w}
                y1='0'
                x2='0'
                y2={h}
                stroke='currentColor'
              />
              <line
                x1={w}
                y1='0'
                x2={w * 2}
                y2={h}
                stroke='currentColor'
              />
            </>
          )}
        </pattern>
      </defs>
      <rect width='100%' height='100%' fill={`url(#${id})`} />
    </svg>
  )
}

export { StripedPattern }

export type { StripedPatternProps }
