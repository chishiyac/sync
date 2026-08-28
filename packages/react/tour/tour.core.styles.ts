import { cn, tv } from 'tailwind-variants'

const tourOverlayRecipe = tv({
  base: 'duration-initial'
})

const tourPositionerRecipe = tv({
  base: cn(
    'z-50',
    'flex items-center justify-center',
    'data-[type=dialog]:fixed data-[type=dialog]:inset-0',
    'data-[type=tooltip]:absolute'
  )
})

const tourSpotlightRecipe = tv({
  base: 'z-50 border-2 border-primary'
})

const tourContentRecipe = tv({
  base: cn(
    '[--space:--spacing(4)]',
    'z-[calc(50+var(--layer-index,0))]',
    'relative',
    'w-full max-w-md',
    'flex flex-col gap-4',
    'bg-background',
    'rounded-lg border shadow-lg',
    'focus:outline-none focus:ring-0',
    'data-[state=closed]:animate-out data-[state=open]:animate-in',
    'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
    'data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95',
    'motion-reduce:animate-none!'
  )
})

const tourCloseButtonBaseRecipe = tv({
  base: 'size-8 border-none opacity-70 hover:opacity-100'
})

const tourCloseButtonLabelRecipe = tv({
  base: 'sr-only'
})

const tourCloseButtonRecipe = tv({
  base: 'absolute top-4 right-4'
})

const tourTitleRecipe = tv({
  base: 'font-semibold text-base leading-none tracking-tight'
})

const tourDescriptionRecipe = tv({
  base: 'text-muted-foreground text-sm'
})

const tourProgressTextRecipe = tv({
  base: 'text-muted-foreground text-sm'
})

const tourActionsRecipe = tv({
  base: 'flex flex-wrap gap-2'
})

export {
  tourActionsRecipe,
  tourCloseButtonBaseRecipe,
  tourCloseButtonLabelRecipe,
  tourCloseButtonRecipe,
  tourContentRecipe,
  tourDescriptionRecipe,
  tourOverlayRecipe,
  tourPositionerRecipe,
  tourProgressTextRecipe,
  tourSpotlightRecipe,
  tourTitleRecipe
}
