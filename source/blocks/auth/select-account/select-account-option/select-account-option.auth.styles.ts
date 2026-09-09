import { tv } from 'tailwind-variants'

const selectAccountOptionRecipe = tv({
  base: 'cursor-pointer hover:bg-accent'
})

const selectAccountOptionActionRecipe = tv({
  base: 'rounded-full'
})

const selectAccountOptionDescriptionRecipe = tv({
  base: 'text-xs'
})

const selectAccountOptionTitleRecipe = tv({
  base: 'text-sm'
})

const selectAccountOptionMenuRecipe = tv({
  base: 'z-[150]'
})

export {
  selectAccountOptionActionRecipe,
  selectAccountOptionDescriptionRecipe,
  selectAccountOptionMenuRecipe,
  selectAccountOptionRecipe,
  selectAccountOptionTitleRecipe
}
