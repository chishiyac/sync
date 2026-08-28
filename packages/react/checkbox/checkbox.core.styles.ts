import { cn, tv } from 'tailwind-variants'

const checkboxRootRecipe = tv({
  base: cn(
    'relative',
    'inline-flex shrink-0 items-center justify-center',
    'size-4',
    'bg-transparent',
    'rounded-sm border border-input shadow-xs/5',
    'transition-shadow',
    'data-focus-visible:border-primary data-focus-visible:ring-[3px] data-focus-visible:ring-ring/32 data-focus-visible:ring-offset-1 data-focus-visible:ring-offset-background',
    'dark:data-focus-visible:data-invalid:border-destructive-foreground/64 dark:data-focus-visible:data-invalid:ring-destructive-foreground/48',
    'data-disabled:opacity-64',
    '[[data-disabled],[data-checked],[data-invalid]]:shadow-none',
    'data-invalid:border-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/24',
    'dark:data-invalid:border-destructive-foreground dark:data-invalid:text-destructive-foreground dark:data-invalid:ring-destructive-foreground/20',
    'dark:not-data-checked:bg-input/32 dark:data-invalid:ring-destructive-foreground/24',
    'motion-reduce:transition-none!'
  )
})

const checkboxGroupRecipe = tv({
  base: 'flex flex-col gap-2'
})

const checkboxIndicatorRecipe = tv({
  base: cn(
    'absolute -inset-px',
    'flex items-center justify-center',
    'rounded-sm',
    'text-primary-foreground',
    'data-[state=checked]:bg-primary',
    'data-[state=unchecked]:hidden',
    'data-[state=indeterminate]:text-foreground'
  )
})

export {
  checkboxGroupRecipe,
  checkboxIndicatorRecipe,
  checkboxRootRecipe
}
