/**
 * OrbBackground Component
 *
 * Animated orb background with customizable OKLCH colors
 *
 * Default Colors (Optimized for Platform):
 *
 * - Light Theme:
 *
 *   - Bg: oklch(95% 0.02 296) - Background
 *   - C1: oklch(70% 0.18 296) - Primary Purple
 *   - C2: oklch(75% 0.15 310) - Secondary Purple
 *   - C3: oklch(72% 0.16 280) - Tertiary Purple/Lavender
 * - Dark Theme:
 *
 *   - Bg: oklch(22% 0.01 304) - Background
 *   - C1: oklch(65% 0.22 296) - Primary Purple (Vibrant)
 *   - C2: oklch(60% 0.18 310) - Secondary Purple (Vibrant)
 *   - C3: oklch(58% 0.16 280) - Tertiary Purple/Lavender (Vibrant)
 */

const SIZE_THRESHOLD_TINY = 30
const SIZE_THRESHOLD_SMALL = 50
const SIZE_THRESHOLD_MEDIUM = 100
const CONTRAST_MULTIPLIER_SMALL = 0.004
const CONTRAST_MIN_SMALL = 1.2
const CONTRAST_MULTIPLIER_LARGE = 0.008
const CONTRAST_MIN_LARGE = 1.5
const DOT_SIZE_MULTIPLIER_SMALL = 0.004
const DOT_SIZE_MIN_SMALL = 0.05
const DOT_SIZE_MULTIPLIER_LARGE = 0.008
const DOT_SIZE_MIN_LARGE = 0.1
const SHADOW_MULTIPLIER_SMALL = 0.004
const SHADOW_MIN_SMALL = 0.5
const SHADOW_MULTIPLIER_LARGE = 0.008
const SHADOW_MIN_LARGE = 2
const MASK_RADIUS_TINY = '0%'
const MASK_RADIUS_SMALL = '5%'
const MASK_RADIUS_MEDIUM = '15%'
const MASK_RADIUS_LARGE = '25%'
const CONTRAST_TINY = 1.1
const CONTRAST_MULTIPLIER_FINAL = 1.2
const CONTRAST_MIN_FINAL = 1.3

export {
  CONTRAST_MIN_FINAL,
  CONTRAST_MIN_LARGE,
  CONTRAST_MIN_SMALL,
  CONTRAST_MULTIPLIER_FINAL,
  CONTRAST_MULTIPLIER_LARGE,
  CONTRAST_MULTIPLIER_SMALL,
  CONTRAST_TINY,
  DOT_SIZE_MIN_LARGE,
  DOT_SIZE_MIN_SMALL,
  DOT_SIZE_MULTIPLIER_LARGE,
  DOT_SIZE_MULTIPLIER_SMALL,
  MASK_RADIUS_LARGE,
  MASK_RADIUS_MEDIUM,
  MASK_RADIUS_SMALL,
  MASK_RADIUS_TINY,
  SHADOW_MIN_LARGE,
  SHADOW_MIN_SMALL,
  SHADOW_MULTIPLIER_LARGE,
  SHADOW_MULTIPLIER_SMALL,
  SIZE_THRESHOLD_MEDIUM,
  SIZE_THRESHOLD_SMALL,
  SIZE_THRESHOLD_TINY
}
