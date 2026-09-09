import { tv } from 'tailwind-variants'

const gradientBackgroundRootRecipe = tv({
  base: 'absolute inset-0 overflow-hidden'
})

const gradientBackgroundLayerRecipe = tv({
  base: 'absolute inset-0 transition-transform'
})

export { gradientBackgroundLayerRecipe, gradientBackgroundRootRecipe }
