'use client'

import { ark } from '@ark-ui/react/factory'
import { cn } from 'tailwind-variants'

import {
  skeletonCircleRecipe,
  skeletonRootRecipe,
  skeletonTextRecipe,
  skeletonTextRowRecipe
} from './skeleton.core.styles'

/**
 * Props for the Skeleton component.
 *
 * @example
 *   type Example = SkeletonProps
 */
type SkeletonProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Skeleton Text component.
 *
 * @example
 *   type Example = SkeletonTextProps
 */
type SkeletonTextProps = React.ComponentProps<typeof ark.div> & {
  /**
   * The number of lines of the skeleton text.
   *
   * @default 1
   */
  lines?: number
}

/**
 * Props for the Skeleton Circle component.
 *
 * @example
 *   type Example = SkeletonCircleProps
 */
type SkeletonCircleProps = React.ComponentProps<typeof ark.div>

/**
 * Renders the Skeleton component.
 *
 * @example
 *   ;<Skeleton />
 */
function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <ark.div
      className={cn(skeletonRootRecipe(), className)}
      data-slot='skeleton'
      {...props}
    />
  )
}

/**
 * Renders the Skeleton Circle component.
 *
 * @example
 *   ;<SkeletonCircle />
 */
function SkeletonCircle({
  className,
  ...props
}: SkeletonCircleProps) {
  return (
    <ark.div
      className={cn(skeletonCircleRecipe(), className)}
      data-slot='skeleton-circle'
      {...props}
    />
  )
}

/**
 * Renders the Skeleton Text component.
 *
 * @example
 *   ;<SkeletonText />
 */
function SkeletonText({
  className,
  lines = 2,
  ...props
}: SkeletonTextProps) {
  return (
    <ark.div
      className={cn(skeletonTextRecipe(), className)}
      data-slot='skeleton-text'
      {...props}
    >
      {Array.from({ length: lines }).map((_, index) => {
        const key = `skeleton-text-${index}`

        return <div className={skeletonTextRowRecipe()} key={key} />
      })}
    </ark.div>
  )
}

export { Skeleton, SkeletonCircle, SkeletonText }

export type { SkeletonCircleProps, SkeletonProps, SkeletonTextProps }
