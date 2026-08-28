import type { Placement } from '@zag-js/popper'

import type {
  HintAlign,
  HintPlacement,
  HintPositioning
} from './hint.core'
import { DEFAULT_HINT_POSITIONING } from './hint.core.constants'

/**
 * Converts a hint placement to a Popper placement string.
 *
 * @example
 *   const placement = toTooltipPlacement('top', 'start')
 */
function toTooltipPlacement(
  placement: HintPlacement,
  align: HintAlign
): Placement {
  if (align === 'center') {
    return placement as Placement
  }

  return `${placement}-${align}` as Placement
}

/**
 * Resolves the final tooltip positioning object.
 *
 * @example
 *   const positioning = getTooltipPositioning()
 */
function getTooltipPositioning(positioning?: HintPositioning) {
  const {
    align = DEFAULT_HINT_POSITIONING.align,
    gutter = DEFAULT_HINT_POSITIONING.gutter,
    placement = DEFAULT_HINT_POSITIONING.placement
  } = positioning ?? {}

  return {
    arrowPadding: DEFAULT_HINT_POSITIONING.arrowPadding,
    flip: DEFAULT_HINT_POSITIONING.flip,
    gutter,
    overflowPadding: DEFAULT_HINT_POSITIONING.overflowPadding,
    placement: toTooltipPlacement(placement, align)
  }
}

export { getTooltipPositioning }
