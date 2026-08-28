import type React from 'react'

import {
  PROGRESSIVE_BLUR_FULL_MASK,
  PROGRESSIVE_BLUR_LAYER_STEP_PERCENTAGE
} from './progressive-blur.constants'
import type { ProgressiveBlurPosition } from './progressive-blur.core'

/**
 * Shared Progressive Blur Container Style Params type.
 *
 * @example
 *   type Example = ProgressiveBlurContainerStyleParams
 */
type ProgressiveBlurContainerStyleParams = {
  height: string
  position: ProgressiveBlurPosition
}

/**
 * Shared Progressive Blur Layer Style Params type.
 *
 * @example
 *   type Example = ProgressiveBlurLayerStyleParams
 */
type ProgressiveBlurLayerStyleParams = {
  blur: number
  maskImage: string
  zIndex: number
}

/**
 * Shared Progressive Blur Mask Image Params type.
 *
 * @example
 *   type Example = ProgressiveBlurMaskImageParams
 */
type ProgressiveBlurMaskImageParams = {
  index: number
  position: ProgressiveBlurPosition
  totalLayers: number
}

/**
 * Returns the container style for the progressive blur wrapper.
 *
 * @example
 *   const style = getProgressiveBlurContainerStyle({ height: '240px', position: 'top' })
 */
function getProgressiveBlurContainerStyle({
  height,
  position
}: ProgressiveBlurContainerStyleParams): React.CSSProperties {
  return {
    height: position === 'both' ? '100%' : height
  }
}

/**
 * Returns the blur layer style for a single progressive blur layer.
 *
 * @example
 *   const style = getProgressiveBlurLayerStyle({ blur: 12, maskImage: 'none', zIndex: 1 })
 */
function getProgressiveBlurLayerStyle({
  blur,
  maskImage,
  zIndex
}: ProgressiveBlurLayerStyleParams): React.CSSProperties {
  return {
    WebkitBackdropFilter: `blur(${blur}px)`,
    WebkitMaskImage: maskImage,
    backdropFilter: `blur(${blur}px)`,
    maskImage,
    zIndex
  }
}

/**
 * Returns the mask image for a progressive blur layer.
 *
 * @example
 *   const maskImage = getProgressiveBlurMaskImage({ index: 0, position: 'top', totalLayers: 3 })
 */
function getProgressiveBlurMaskImage({
  index,
  position,
  totalLayers
}: ProgressiveBlurMaskImageParams) {
  if (position === 'both') {
    return PROGRESSIVE_BLUR_FULL_MASK
  }

  const direction = position === 'bottom' ? 'to bottom' : 'to top'
  const isFirstLayer = index === 0
  const isLastLayer = index === totalLayers - 1

  if (isFirstLayer) {
    return `linear-gradient(${direction}, rgba(0,0,0,0) 0%, rgba(0,0,0,1) ${PROGRESSIVE_BLUR_LAYER_STEP_PERCENTAGE}%, rgba(0,0,0,1) ${PROGRESSIVE_BLUR_LAYER_STEP_PERCENTAGE * 2}%, rgba(0,0,0,0) ${PROGRESSIVE_BLUR_LAYER_STEP_PERCENTAGE * 3}%)`
  }

  if (isLastLayer) {
    return `linear-gradient(${direction}, rgba(0,0,0,0) ${PROGRESSIVE_BLUR_LAYER_STEP_PERCENTAGE * (totalLayers - 1)}%, rgba(0,0,0,1) 100%)`
  }

  const startPercent = index * PROGRESSIVE_BLUR_LAYER_STEP_PERCENTAGE
  const middlePercent =
    (index + 1) * PROGRESSIVE_BLUR_LAYER_STEP_PERCENTAGE

  const endPercent =
    (index + 2) * PROGRESSIVE_BLUR_LAYER_STEP_PERCENTAGE

  const fadeOutPercent =
    (index + 3) * PROGRESSIVE_BLUR_LAYER_STEP_PERCENTAGE

  return `linear-gradient(${direction}, rgba(0,0,0,0) ${startPercent}%, rgba(0,0,0,1) ${middlePercent}%, rgba(0,0,0,1) ${endPercent}%, rgba(0,0,0,0) ${fadeOutPercent}%)`
}

export {
  getProgressiveBlurContainerStyle,
  getProgressiveBlurLayerStyle,
  getProgressiveBlurMaskImage
}
