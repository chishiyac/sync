import {
  CONTRAST_MIN_FINAL,
  CONTRAST_MULTIPLIER_FINAL,
  CONTRAST_TINY,
  MASK_RADIUS_LARGE,
  MASK_RADIUS_MEDIUM,
  MASK_RADIUS_SMALL,
  MASK_RADIUS_TINY,
  SIZE_THRESHOLD_MEDIUM,
  SIZE_THRESHOLD_SMALL,
  SIZE_THRESHOLD_TINY
} from './orb.core.constants'

const getMaskRadius = (value: number) => {
  if (value < SIZE_THRESHOLD_TINY) {
    return MASK_RADIUS_TINY
  }
  if (value < SIZE_THRESHOLD_SMALL) {
    return MASK_RADIUS_SMALL
  }
  if (value < SIZE_THRESHOLD_MEDIUM) {
    return MASK_RADIUS_MEDIUM
  }
  return MASK_RADIUS_LARGE
}

const getFinalContrast = (value: number, contrastAmount: number) => {
  if (value < SIZE_THRESHOLD_TINY) {
    return CONTRAST_TINY
  }
  if (value < SIZE_THRESHOLD_SMALL) {
    return Math.max(
      contrastAmount * CONTRAST_MULTIPLIER_FINAL,
      CONTRAST_MIN_FINAL
    )
  }
  return contrastAmount
}

export { getFinalContrast, getMaskRadius }
