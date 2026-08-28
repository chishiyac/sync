import { cn, tv } from 'tailwind-variants'

const clipboardFieldRootRecipe = tv({
  base: 'flex items-center gap-2'
})

const clipboardFieldValueRecipe = tv({
  base: cn(
    'inline-flex items-center',
    'px-3',
    'bg-transparent dark:bg-input/30',
    'text-base md:text-sm',
    'rounded-lg border border-input shadow-sm/5'
  ),
  defaultVariants: {
    size: 'md'
  },
  variants: {
    size: {
      lg: 'h-9',
      md: 'h-8',
      sm: 'h-7',
      xl: 'h-10',
      xs: 'h-6'
    }
  }
})

const clipboardFieldIndicatorRecipe = tv({
  base: 'pointer-events-none'
})

export {
  clipboardFieldIndicatorRecipe,
  clipboardFieldRootRecipe,
  clipboardFieldValueRecipe
}
