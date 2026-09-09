import { tv } from 'tailwind-variants'

const authDialogStackContentRecipe = tv({
  base: 'border-border bg-muted/25 backdrop-blur-2xl'
})

const authFieldDescriptionRecipe = tv({
  base: 'max-w-72 text-center'
})

const authGridPatternRecipe = tv({
  base: '-skew-6 mask-t-from-50% mask-radial-[50%_90%] mask-radial-from-75% mask-radial-from-80% mask-radial-at-left opacity-10'
})

const authPrimaryGridPatternRecipe = tv({
  base: '-top-[4px] -left-[4px] -skew-6 mask-t-from-50% mask-radial-[50%_90%] mask-radial-from-75% mask-radial-from-80% mask-radial-at-left opacity-75'
})

export {
  authDialogStackContentRecipe,
  authFieldDescriptionRecipe,
  authGridPatternRecipe,
  authPrimaryGridPatternRecipe
}
