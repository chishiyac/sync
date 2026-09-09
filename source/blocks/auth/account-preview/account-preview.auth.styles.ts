import { tv } from 'tailwind-variants'

const accountPreviewCardRecipe = tv({
  base: 'ring-none mx-auto flex h-[480px] w-full max-w-lg items-center justify-center rounded-md border-0 bg-transparent py-6 shadow-none'
})

const accountPreviewStackRecipe = tv({
  base: 'relative size-full gap-6'
})

const accountPreviewHeaderRecipe = tv({
  base: 'h-fit max-w-xs items-center gap-1 text-center'
})

const accountPreviewPatternRecipe = tv({
  base: 'text-primary absolute top-[20%] right-0 left-0 mx-auto size-64 mask-b-from-50% mask-radial-[50%_60%] mask-radial-from-80%'
})

const accountPreviewContentRecipe = tv({
  base: 'flex flex-1 items-center justify-center py-4'
})

const accountPreviewIdentityRecipe = tv({
  base: 'gap-3'
})

const accountPreviewDetailsRecipe = tv({
  base: 'gap-1'
})

const accountPreviewAvatarRecipe = tv({
  base: 'size-20'
})

const accountPreviewUsernameRecipe = tv({
  base: 'text-base'
})

const accountPreviewActionsRecipe = tv({
  base: 'w-full max-w-xs gap-4'
})

export {
  accountPreviewActionsRecipe,
  accountPreviewAvatarRecipe,
  accountPreviewCardRecipe,
  accountPreviewContentRecipe,
  accountPreviewDetailsRecipe,
  accountPreviewHeaderRecipe,
  accountPreviewIdentityRecipe,
  accountPreviewPatternRecipe,
  accountPreviewStackRecipe,
  accountPreviewUsernameRecipe
}
