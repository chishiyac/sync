import type { HexagonPatternDirection } from './hexagon-pattern.pattern'

/**
 * Shared Hex Point type.
 *
 * @example
 *   type Example = HexPoint
 */
type HexPoint = readonly [number, number]

/**
 * Builds the six hexagon vertices for a center point.
 *
 * @example
 *   const vertices = hexVertexList(0, 0, 12, 'horizontal')
 */
function hexVertexList(
  cx: number,
  cy: number,
  r: number,
  direction: HexagonPatternDirection
): HexPoint[] {
  const startAngle = direction === 'horizontal' ? 0 : 30

  return Array.from({ length: 6 }, (_, index) => {
    const angle = ((startAngle + index * 60) * Math.PI) / 180
    return [
      cx + r * Math.cos(angle),
      cy + r * Math.sin(angle)
    ] as const
  })
}

/**
 * Serializes a hexagon into an SVG points string.
 *
 * @example
 *   const points = hexPoints(0, 0, 12, 'horizontal')
 */
function hexPoints(
  cx: number,
  cy: number,
  r: number,
  direction: HexagonPatternDirection
): string {
  return hexVertexList(cx, cy, r, direction)
    .map(([px, py]) => `${px},${py}`)
    .join(' ')
}

/**
 * Returns a stable edge key for two hex points.
 *
 * @example
 *   const key = edgeLexKey([0, 0], [1, 1])
 */
function edgeLexKey(a: HexPoint, b: HexPoint): string {
  const [p, q] =
    a[0] < b[0] || (a[0] === b[0] && a[1] <= b[1]) ? [a, b] : [b, a]

  return `${p[0].toFixed(6)},${p[1].toFixed(6)}|${q[0].toFixed(6)},${q[1].toFixed(6)}`
}

/**
 * Collects the unique edges used by a hex pattern tile.
 *
 * @example
 *   const edges = collectUniqueHexEdges([[0, 0]], 12, 'horizontal')
 */
function collectUniqueHexEdges(
  centers: [number, number][],
  r: number,
  direction: HexagonPatternDirection
): [HexPoint, HexPoint][] {
  const seen = new Set<string>()
  const edges: [HexPoint, HexPoint][] = []

  for (const [cx, cy] of centers) {
    const verts = hexVertexList(cx, cy, r, direction)

    for (let index = 0; index < 6; index += 1) {
      const a = verts[index]
      const b = verts[(index + 1) % 6]
      const key = edgeLexKey(a, b)

      if (!seen.has(key)) {
        seen.add(key)
        edges.push([a, b])
      }
    }
  }

  return edges
}

/**
 * Checks whether a stroke dasharray represents a solid line.
 *
 * @example
 *   const isSolid = isSolidStrokeDasharray('none')
 */
function isSolidStrokeDasharray(strokeDasharray: string): boolean {
  const trimmed = strokeDasharray.trim()
  return trimmed === '' || trimmed === 'none' || trimmed === '0'
}

/**
 * Calculates the spacing between hex tiles.
 *
 * @example
 *   const spacing = getHexSpacing(12, 'horizontal', 4)
 */
function getHexSpacing(
  r: number,
  direction: HexagonPatternDirection,
  gap: number
): {
  colStep: number
  rowStep: number
  tileW: number
  tileH: number
} {
  const sqrt3 = Math.sqrt(3)

  // `gap` should match the visible edge-to-edge spacing, so we add it along
  // the shared-edge normal instead of directly on the raw x/y axes.
  if (direction === 'horizontal') {
    const colStep = (3 * r) / 2 + (sqrt3 * gap) / 2
    const rowStep = sqrt3 * r + gap

    return {
      colStep,
      rowStep,
      tileH: rowStep,
      tileW: colStep * 2
    }
  }

  const colStep = sqrt3 * r + gap
  const rowStep = (3 * r) / 2 + (sqrt3 * gap) / 2

  return {
    colStep,
    rowStep,
    tileH: rowStep * 2,
    tileW: colStep
  }
}

/**
 * Appends wrapped centers that cross the tile edges.
 *
 * @example
 *   appendWrappedCenter(centers, 4, 4, 16, 16, 2)
 */
function appendWrappedCenter(
  centers: [number, number][],
  cx: number,
  cy: number,
  tileW: number,
  tileH: number,
  r: number
): void {
  centers.push([cx, cy])

  const crossesTop = cy - r < 0
  const crossesBottom = cy + r > tileH
  const crossesLeft = cx - r < 0
  const crossesRight = cx + r > tileW

  if (crossesTop) {
    centers.push([cx, cy + tileH])
  }

  if (crossesBottom) {
    centers.push([cx, cy - tileH])
  }

  if (crossesLeft) {
    centers.push([cx + tileW, cy])
  }

  if (crossesRight) {
    centers.push([cx - tileW, cy])
  }

  if (crossesTop && crossesLeft) {
    centers.push([cx + tileW, cy + tileH])
  }

  if (crossesTop && crossesRight) {
    centers.push([cx - tileW, cy + tileH])
  }

  if (crossesBottom && crossesLeft) {
    centers.push([cx + tileW, cy - tileH])
  }

  if (crossesBottom && crossesRight) {
    centers.push([cx - tileW, cy - tileH])
  }
}

/**
 * Builds the canonical tile centers for the pattern.
 *
 * @example
 *   const centers = buildTileCenters([[8, 8]], 16, 16, 4)
 */
function buildTileCenters(
  canonical: [number, number][],
  tileW: number,
  tileH: number,
  r: number
): [number, number][] {
  const centers: [number, number][] = []

  for (const [cx, cy] of canonical) {
    appendWrappedCenter(centers, cx, cy, tileW, tileH, r)
  }

  return centers
}

/**
 * Resolves the tile geometry used to draw the pattern.
 *
 * @example
 *   const geometry = getTileGeometry(12, 'horizontal', 4)
 */
function getTileGeometry(
  r: number,
  direction: HexagonPatternDirection,
  gap: number
): {
  tileW: number
  tileH: number
  centers: [number, number][]
} {
  const { colStep, rowStep, tileW, tileH } = getHexSpacing(
    r,
    direction,
    gap
  )

  const canonical =
    direction === 'horizontal'
      ? ([
          [colStep / 2, rowStep / 2],
          [(colStep * 3) / 2, rowStep]
        ] as [number, number][])
      : ([
          [colStep / 2, rowStep / 2],
          [colStep, (rowStep * 3) / 2]
        ] as [number, number][])

  return {
    centers: buildTileCenters(canonical, tileW, tileH, r),
    tileH,
    tileW
  }
}

/**
 * Returns the center point for a hex tile.
 *
 * @example
 *   const center = hexCenter(0, 0, 12, 'horizontal', 4)
 */
function hexCenter(
  col: number,
  row: number,
  r: number,
  direction: HexagonPatternDirection,
  gap: number
): [number, number] {
  const { colStep, rowStep } = getHexSpacing(r, direction, gap)

  if (direction === 'horizontal') {
    const x = col * colStep + colStep / 2
    const y =
      row * rowStep + rowStep / 2 + (col % 2 === 1 ? rowStep / 2 : 0)
    return [x, y]
  }

  const x =
    col * colStep + colStep / 2 + (row % 2 === 1 ? colStep / 2 : 0)
  const y = row * rowStep + rowStep / 2
  return [x, y]
}

export {
  collectUniqueHexEdges,
  edgeLexKey,
  getTileGeometry,
  hexCenter,
  hexPoints,
  isSolidStrokeDasharray
}
