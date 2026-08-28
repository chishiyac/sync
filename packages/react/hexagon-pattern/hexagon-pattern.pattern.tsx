import { useId } from 'react'
import { cn } from 'tailwind-variants'

import {
  hexagonPatternRootRecipe,
  hexagonPatternSVGRecipe
} from './hexagon-pattern.pattern.styles'
import {
  collectUniqueHexEdges,
  edgeLexKey,
  getTileGeometry,
  hexCenter,
  hexPoints,
  isSolidStrokeDasharray
} from './hexagon-pattern.pattern.util'

/**
 * Supported hexagon pattern directions.
 *
 * @example
 *   type Example = HexagonPatternDirection
 */
type HexagonPatternDirection = 'horizontal' | 'vertical'

/**
 * Props for the Hexagon Pattern component.
 *
 * @example
 *   type Example = HexagonPatternProps
 */
type HexagonPatternProps = React.ComponentProps<'svg'> & {
  /**
   * The radius of each hexagon (center to vertex).
   *
   * @default 40
   */
  radius?: number
  /**
   * Spacing in pixels between adjacent hexagons. The tile grows by
   * this amount while the visual radius stays fixed, so the gap is
   * evenly distributed on all sides of each hexagon.
   *
   * @default 0
   */
  gap?: number
  /**
   * Offset applied to the pattern origin on the x-axis.
   *
   * @default -1
   */
  x?: number
  /**
   * Offset applied to the pattern origin on the y-axis.
   *
   * @default -1
   */
  y?: number
  /**
   * Controls the orientation of the hexagons. - `"horizontal"` —
   * flat-top hexagons tiled in a horizontal honeycomb grid. -
   * `"vertical"` — pointy-top hexagons tiled in a vertical honeycomb
   * grid.
   *
   * @default 'horizontal'
   */
  direction?: HexagonPatternDirection
  /**
   * SVG stroke-dasharray applied to each hexagon outline.
   *
   * @default '0'
   */
  strokeDasharray?: string
  /**
   * Array of [col, row] coordinates for hexagons that should be
   * highlighted (filled) on top of the repeating pattern — mirrors
   * the `squares` prop of GridPattern.
   */
  hexagons?: [col: number, row: number][]
  [key: string]: unknown
}

/**
 * Renders the Hexagon Pattern component.
 *
 * @example
 *   ;<HexagonPattern />
 */
function HexagonPattern({
  radius = 40,
  gap = 0,
  x = -1,
  y = -1,
  strokeDasharray = '0',
  direction = 'horizontal',
  hexagons,
  className,
  ...props
}: HexagonPatternProps) {
  const id = useId()

  const { tileW, tileH, centers } = getTileGeometry(
    radius,
    direction,
    gap
  )
  const solidStroke = isSolidStrokeDasharray(strokeDasharray)
  const dashedEdges = solidStroke
    ? null
    : collectUniqueHexEdges(centers, radius, direction)

  return (
    <svg
      aria-hidden='true'
      className={cn(hexagonPatternRootRecipe(), className)}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={tileW}
          height={tileH}
          patternUnits='userSpaceOnUse'
          x={x}
          y={y}
        >
          {solidStroke
            ? centers.map(([cx, cy]) => (
                <polygon
                  className='fill-none'
                  key={`${cx}-${cy}`}
                  points={hexPoints(cx, cy, radius, direction)}
                  strokeDasharray={strokeDasharray}
                />
              ))
            : dashedEdges?.map(([a, b]) => (
                <line
                  className='fill-none'
                  key={edgeLexKey(a, b)}
                  x1={a[0]}
                  x2={b[0]}
                  y1={a[1]}
                  y2={b[1]}
                  strokeDasharray={strokeDasharray}
                />
              ))}
        </pattern>
      </defs>

      <rect
        width='100%'
        height='100%'
        fill={`url(#${id})`}
        stroke='none'
      />

      {hexagons && hexagons.length > 0 && (
        <svg
          aria-hidden='true'
          className={hexagonPatternSVGRecipe()}
          x={x}
          y={y}
        >
          {hexagons.map(([col, row]) => {
            const [cx, cy] = hexCenter(
              col,
              row,
              radius,
              direction,
              gap
            )
            return (
              <polygon
                key={`${col}-${row}`}
                points={hexPoints(cx, cy, radius - 1, direction)}
                strokeWidth='0'
              />
            )
          })}
        </svg>
      )}
    </svg>
  )
}

export { HexagonPattern }

export type { HexagonPatternDirection, HexagonPatternProps }
