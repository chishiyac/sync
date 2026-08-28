import { cn, tv } from 'tailwind-variants'

const aspectRatioRootRecipe = tv({
  base: cn('[--ratio:1]', 'relative', 'w-full', 'aspect-(--ratio)')
})

export { aspectRatioRootRecipe }
