import { tv } from 'tailwind-variants'

const hexagonPatternRootRecipe = tv({
  base: 'pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30'
})

const hexagonPatternSVGRecipe = tv({
  base: 'overflow-visible'
})

export { hexagonPatternRootRecipe, hexagonPatternSVGRecipe }
