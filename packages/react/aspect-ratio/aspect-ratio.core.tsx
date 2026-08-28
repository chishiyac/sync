'use client'

import { ark } from '@ark-ui/react/factory'
import type React from 'react'
import { cn } from 'tailwind-variants'

import { aspectRatioRootRecipe } from './aspect-ratio.core.styles'

/**
 * Props for the Aspect Ratio component.
 *
 * @example
 *   type Example = AspectRatioProps
 */
type AspectRatioProps = React.ComponentProps<typeof ark.div>

/**
 * Renders the Aspect Ratio component.
 *
 * @example
 *   ;<AspectRatio />
 */
function AspectRatio({ className, ...props }: AspectRatioProps) {
  return (
    <ark.div
      className={cn(aspectRatioRootRecipe(), className)}
      data-slot='aspect-ratio'
      {...props}
    />
  )
}

export { AspectRatio }

export type { AspectRatioProps }
