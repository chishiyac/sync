'use client'

import { Swap as ArkSwap, useSwapContext } from '@ark-ui/react/swap'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { swapIndicatorRecipe } from './swap.core.styles'

/**
 * Props for the Swap component.
 *
 * @example
 *   type Example = SwapProps
 */
type SwapProps = React.ComponentProps<typeof ArkSwap.Root> &
  VariantProps<typeof swapIndicatorRecipe>

/**
 * Props for the Swap Indicator component.
 *
 * @example
 *   type Example = SwapIndicatorProps
 */
type SwapIndicatorProps = React.ComponentProps<
  typeof ArkSwap.Indicator
>

const useSwap = useSwapContext

/**
 * Renders the Swap component.
 *
 * @example
 *   ;<Swap />
 */
function Swap({
  variant = 'fade',
  lazyMount = true,
  unmountOnExit = true,
  className,
  ...props
}: SwapProps) {
  return (
    <ArkSwap.Root
      className={cn(swapIndicatorRecipe({ variant }), className)}
      data-slot='swap'
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...props}
    />
  )
}

/**
 * Renders the Swap Indicator component.
 *
 * @example
 *   ;<SwapIndicator />
 */
function SwapIndicator({ ...props }: SwapIndicatorProps) {
  return <ArkSwap.Indicator data-slot='swap-indicator' {...props} />
}

export { Swap, SwapIndicator, swapIndicatorRecipe, useSwap }

export type { SwapIndicatorProps, SwapProps }
