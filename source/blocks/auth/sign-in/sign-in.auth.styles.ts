import { tv } from 'tailwind-variants'

const signInAccountAvatarRecipe = tv({
  base: 'size-6'
})

const signInCardRecipe = tv({
  base: 'ring-none mx-auto flex h-[480px] w-full max-w-lg items-center justify-center rounded-md border-0 bg-transparent p-4 shadow-none'
})

const signInFormRecipe = tv({
  base: 'flex w-full max-w-xs flex-1 flex-col items-center justify-center'
})

const signInHeaderStackRecipe = tv({
  base: 'gap-1'
})

const signInBrandRecipe = tv({
  base: 'mb-2.5 size-20 text-primary'
})

const signInFieldGroupRecipe = tv({
  base: 'h-fit gap-6'
})

const signInSubmitFieldRecipe = tv({
  base: 'mt-2.5'
})

const signInFooterRecipe = tv({
  base: 'text-center text-xs leading-5 font-normal text-muted-foreground'
})

export {
  signInAccountAvatarRecipe,
  signInBrandRecipe,
  signInCardRecipe,
  signInFieldGroupRecipe,
  signInFooterRecipe,
  signInFormRecipe,
  signInHeaderStackRecipe,
  signInSubmitFieldRecipe
}
