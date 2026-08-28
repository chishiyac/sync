'use client'

import * as React from 'react'
import { cn } from 'tailwind-variants'

import { SHINY_BORDER_DEFAULT_COLORS } from './shiny-border.animated.constants'
import { shinyBorderRootRecipe } from './shiny-border.animated.styles'

/**
 * Props for the Shiny Border component.
 *
 * @example
 *   type Example = ShinyBorderProps
 */
type ShinyBorderProps = React.ComponentProps<'div'> & {
  /**
   * Width of the border in pixels
   *
   * @default 1
   */
  borderWidth?: number
  /**
   * Duration of the animation in seconds
   *
   * @default 14
   */
  duration?: number
  /**
   * Color of the border, can be a single color or an array of colors
   *
   * @default ['var(--primary)', 'var(--secondary)']
   */
  shineColor?: string | string[]
}

/**
 * Renders the Shiny Border component.
 *
 * @example
 *   ;<ShinyBorder />
 */
function ShinyBorder({
  borderWidth = 1,
  duration = 14,
  // oxlint-disable-next-line react/no-object-type-as-default-prop
  shineColor = SHINY_BORDER_DEFAULT_COLORS,
  className,
  style,
  ...props
}: ShinyBorderProps) {
  return (
    <div
      style={
        {
          '--border-width': `${borderWidth}px`,
          '--duration': `${duration}s`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: 'xor',
          backgroundImage: `radial-gradient(transparent,transparent, ${
            Array.isArray(shineColor)
              ? shineColor.join(',')
              : shineColor
          },transparent,transparent)`,
          backgroundSize: '300% 300%',
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          maskComposite: 'exclude',
          padding: 'var(--border-width)',
          ...style
        } as React.CSSProperties
      }
      className={cn(shinyBorderRootRecipe(), className)}
      {...props}
    />
  )
}

export { ShinyBorder }

export type { ShinyBorderProps }
