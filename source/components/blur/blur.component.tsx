import React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { blurRootRecipe } from './blur.component.styles'

type ComponentProps = React.ComponentProps<'div'> &
  VariantProps<typeof blurRootRecipe>

function Component({
  className,
  side = 'bottom',
  ...props
}: ComponentProps) {
  return (
    <div
      className={cn(blurRootRecipe({ side }), className)}
      {...props}
    />
  )
}

export { Component as Blur }

export type { ComponentProps as BlurProps }
