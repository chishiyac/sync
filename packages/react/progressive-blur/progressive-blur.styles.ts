import { cn, tv } from 'tailwind-variants'

const progressiveBlurRecipe = tv({
  base: cn(
    'gradient-blur pointer-events-none absolute inset-x-0 z-10'
  ),
  variants: {
    position: {
      both: 'inset-y-0',
      bottom: 'bottom-0',
      top: 'top-0'
    }
  }
})

const progressiveBlurLayerRecipe = tv({
  base: 'absolute inset-0'
})

export { progressiveBlurLayerRecipe, progressiveBlurRecipe }
