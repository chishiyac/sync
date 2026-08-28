import { tv } from 'tailwind-variants'

const animatedGradientTextRootRecipe = tv({
  base: 'animate-gradient inline-flex bg-linear-to-r from-(--color-from) via-(--color-to) to-(--color-from) bg-size-[var(--bg-size)_100%] bg-clip-text text-transparent'
})

export { animatedGradientTextRootRecipe }
