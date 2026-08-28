'use client'

import type React from 'react'
import { cn } from 'tailwind-variants'

import {
  PROGRESSIVE_BLUR_DEFAULT_HEIGHT,
  PROGRESSIVE_BLUR_DEFAULT_LEVELS,
  PROGRESSIVE_BLUR_DEFAULT_POSITION
} from './progressive-blur.constants'
import {
  progressiveBlurLayerRecipe,
  progressiveBlurRecipe
} from './progressive-blur.styles'
import {
  getProgressiveBlurContainerStyle,
  getProgressiveBlurLayerStyle,
  getProgressiveBlurMaskImage
} from './progressive-blur.utils'

/**
 * Shared Progressive Blur Position type.
 *
 * @example
 *   type Example = ProgressiveBlurPosition
 */
type ProgressiveBlurPosition = 'top' | 'bottom' | 'both'

/**
 * Props for the Progressive Blur component.
 *
 * @example
 *   type Example = ProgressiveBlurProps
 */
type ProgressiveBlurProps = React.ComponentProps<'div'> & {
  height?: string
  position?: ProgressiveBlurPosition
  blurLevels?: readonly number[]
}

/**
 * Renders the Progressive Blur component.
 *
 * @example
 *   ;<ProgressiveBlur />
 */
function ProgressiveBlur({
  className,
  height = PROGRESSIVE_BLUR_DEFAULT_HEIGHT,
  position = PROGRESSIVE_BLUR_DEFAULT_POSITION,
  blurLevels = PROGRESSIVE_BLUR_DEFAULT_LEVELS,
  style,
  ...props
}: ProgressiveBlurProps) {
  const resolvedBlurLevels =
    blurLevels.length > 0
      ? [...blurLevels]
      : [...PROGRESSIVE_BLUR_DEFAULT_LEVELS]

  return (
    <div
      className={cn(progressiveBlurRecipe({ position }), className)}
      data-slot='progressive-blur'
      style={{
        ...getProgressiveBlurContainerStyle({ height, position }),
        ...style
      }}
      {...props}
    >
      {resolvedBlurLevels.map((blurLevel, index) => (
        <div
          key={`blur-${index}-${blurLevel}`}
          className={progressiveBlurLayerRecipe()}
          style={getProgressiveBlurLayerStyle({
            blur: blurLevel,
            maskImage: getProgressiveBlurMaskImage({
              index,
              position,
              totalLayers: resolvedBlurLevels.length
            }),
            zIndex: index + 1
          })}
        />
      ))}
    </div>
  )
}

export { ProgressiveBlur }

export type { ProgressiveBlurPosition, ProgressiveBlurProps }
