import { tv } from 'tailwind-variants'

const selectAccountCardRecipe = tv({
  base: 'ring-none mx-auto flex h-[480px] w-full max-w-lg items-center justify-center rounded-md border-0 bg-transparent py-6 shadow-none'
})

const selectAccountStackRecipe = tv({
  base: 'size-full'
})

const selectAccountHeaderRecipe = tv({
  base: 'h-fit max-w-xs gap-6'
})

const selectAccountHeaderStackRecipe = tv({
  base: 'gap-1'
})

const selectAccountScrollRecipe = tv({
  base: 'relative w-full flex-1'
})

const selectAccountItemGroupRecipe = tv({
  base: 'mx-auto max-w-xs flex-1 gap-2 px-0 py-4'
})

const selectAccountFooterRecipe = tv({
  base: 'w-full gap-6 border-t-0 bg-transparent'
})

const selectAccountBackButtonRecipe = tv({
  base: 'mx-auto w-full max-w-xs'
})

export {
  selectAccountBackButtonRecipe,
  selectAccountCardRecipe,
  selectAccountFooterRecipe,
  selectAccountHeaderRecipe,
  selectAccountHeaderStackRecipe,
  selectAccountItemGroupRecipe,
  selectAccountScrollRecipe,
  selectAccountStackRecipe
}
