import { cn, tv } from 'tailwind-variants'

const warpDialogOverlayRecipe = tv({
  base: cn(
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'fixed inset-0 z-50 bg-primary/10'
  )
})

const warpDialogContentPositionerRecipe = tv({
  base: cn('fixed inset-0 z-[1000] flex items-center justify-center')
})

const warpDialogContentRecipe = tv({
  base: cn('relative flex flex-col items-center justify-center gap-4')
})

const warpDialogAnimationRootRecipe = tv({
  base: cn('absolute')
})

const warpDialogAnimationPrimaryRecipe = tv({
  base: cn(
    'absolute top-[100%] left-[25%] h-1/2 w-1/2',
    'origin-center rounded-full blur-lg will-change-transform'
  )
})

const warpDialogAnimationPrimaryHaloRecipe = tv({
  base: cn(
    'absolute top-[-25%] left-[-50%] h-full w-full',
    'rounded-full bg-primary/90 blur-[100px]'
  )
})

const warpDialogAnimationSecondaryHaloRecipe = tv({
  base: cn(
    'absolute top-[25%] left-[50%] h-full w-full',
    'rounded-full bg-secondary/80 blur-[100px]'
  )
})

export {
  warpDialogAnimationPrimaryHaloRecipe,
  warpDialogAnimationPrimaryRecipe,
  warpDialogAnimationRootRecipe,
  warpDialogAnimationSecondaryHaloRecipe,
  warpDialogContentPositionerRecipe,
  warpDialogContentRecipe,
  warpDialogOverlayRecipe
}
