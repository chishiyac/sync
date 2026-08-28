import { cn, tv } from 'tailwind-variants'

const toggleRecipe = tv({
  base: cn(
    'relative',
    'data-[state=on]:bg-input/64 dark:data-[state=on]:bg-input/64',
    'pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11'
  ),
  defaultVariants: {
    size: 'md'
  },
  variants: {
    size: {
      lg: 'h-9 min-w-9 px-2.5',
      md: 'h-8 min-w-8 px-2',
      sm: 'h-7 min-w-7 px-1.5'
    }
  }
})

const toggleIndicatorRecipe = tv({
  base: 'flex items-center gap-2'
})

export { toggleIndicatorRecipe, toggleRecipe }
