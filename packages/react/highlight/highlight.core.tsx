'use client'

import {
  Highlight as ArkHighlight,
  useHighlight as useArkHighlight
} from '@ark-ui/react/highlight'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { highlightRootRecipe } from './highlight.core.styles'

/**
 * Props for the Highlight component.
 *
 * @example
 *   type Example = HighlightProps
 */
type HighlightProps = React.ComponentProps<typeof ArkHighlight> &
  VariantProps<typeof highlightRootRecipe>

const useHighlight = useArkHighlight

/**
 * Renders the Highlight component.
 *
 * @example
 *   ;<Highlight />
 */
function Highlight({ className, variant, ...props }: HighlightProps) {
  return (
    <ArkHighlight
      className={cn(
        highlightRootRecipe({
          variant
        }),
        className
      )}
      data-slot='highlight'
      {...props}
    />
  )
}

export { Highlight, useHighlight }

export type { HighlightProps }
