'use client'

import {
  Progress as ArkProgress,
  useProgressContext
} from '@ark-ui/react/progress'
import type React from 'react'
import { cn } from 'tailwind-variants'

import { FieldLabel } from '../field'
import {
  progressRangeRecipe,
  progressRootRecipe,
  progressTrackRecipe,
  progressValueRecipe
} from './progress.core.styles'

/**
 * Props for the Progress component.
 *
 * @example
 *   type Example = ProgressProps
 */
type ProgressProps = Omit<
  React.ComponentProps<typeof ArkProgress.Root>,
  'value'
> & {
  /**
   * Shows indeterminate progress
   *
   * @default false
   */
  indeterminate?: boolean
  /**
   * The value of the progress bar
   *
   * @default 0
   */
  value?: number
}

/**
 * Props for the Progress Track component.
 *
 * @example
 *   type Example = ProgressTrackProps
 */
type ProgressTrackProps = React.ComponentProps<
  typeof ArkProgress.Track
>

/**
 * Props for the Progress Range component.
 *
 * @example
 *   type Example = ProgressRangeProps
 */
type ProgressRangeProps = React.ComponentProps<
  typeof ArkProgress.Range
>

/**
 * Props for the Progress Value component.
 *
 * @example
 *   type Example = ProgressValueProps
 */
type ProgressValueProps = React.ComponentProps<
  typeof ArkProgress.ValueText
>

const useProgress = useProgressContext

/**
 * Renders the Progress Track component.
 *
 * @example
 *   ;<ProgressTrack />
 */
function ProgressTrack({ className, ...props }: ProgressTrackProps) {
  return (
    <ArkProgress.Track
      className={cn(progressTrackRecipe(), className)}
      data-slot='progress-track'
      {...props}
    />
  )
}

/**
 * Renders the Progress Range component.
 *
 * @example
 *   ;<ProgressRange />
 */
function ProgressRange({ className, ...props }: ProgressRangeProps) {
  return (
    <ArkProgress.Range
      className={cn(progressRangeRecipe(), className)}
      data-slot='progress-range'
      {...props}
    />
  )
}

/**
 * Renders the Progress component.
 *
 * @example
 *   ;<Progress />
 */
function Progress({
  value,
  orientation = 'horizontal',
  indeterminate = false,
  className,
  children,
  ...props
}: ProgressProps) {
  return (
    <ArkProgress.Root
      className={cn(progressRootRecipe(), className)}
      data-slot='progress'
      orientation={orientation}
      value={indeterminate ? null : value}
      {...props}
    >
      {children}

      <ProgressTrack>
        <ProgressRange />
      </ProgressTrack>
    </ArkProgress.Root>
  )
}

/**
 * Renders the Progress Value component.
 *
 * @example
 *   ;<ProgressValue />
 */
function ProgressValue({ className, ...props }: ProgressValueProps) {
  return (
    <FieldLabel asChild>
      <ArkProgress.ValueText
        className={cn(progressValueRecipe(), className)}
        data-slot='progress-value'
        {...props}
      />
    </FieldLabel>
  )
}

export {
  Progress,
  ProgressRange,
  ProgressTrack,
  ProgressValue,
  useProgress
}

export type {
  ProgressProps,
  ProgressRangeProps,
  ProgressTrackProps,
  ProgressValueProps
}
