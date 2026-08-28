import { cn, tv } from 'tailwind-variants'

const comboboxControlRecipe = tv({
  base: cn(
    'group/combobox-control',
    'relative flex flex-wrap items-center gap-1'
  )
})

const comboboxTriggerRecipe = tv({
  base: 'absolute inset-e-1 inset-y-0'
})

const comboboxSubTriggerRecipe = tv({
  base: 'size-4'
})

const comboboxInputRecipe = tv({
  base: 'group-has-data-[slot=combobox-clear]/input-group:hidden'
})

const comboboxContentRecipe = tv({
  base: cn(
    'relative z-50',
    'max-h-96 min-w-48',
    'origin-(--transform-origin)',
    'p-1',
    'bg-popover',
    'text-popover-foreground',
    'rounded-xl border shadow-lg/5',
    'overflow-y-auto',
    'outline-none',
    'data-[state=closed]:animate-out data-[state=open]:animate-in',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'data-[state=open]:zoom-in-[98%] data-[state=closed]:zoom-out-[98%]',
    'data-[placement=top]:slide-in-from-bottom-2',
    'data-[placement=bottom]:slide-in-from-top-2',
    'data-[placement=right]:slide-in-from-start-2',
    'data-[placement=left]:slide-in-from-end-2',
    'motion-reduce:animate-none!'
  )
})

const comboboxGroupLabelRecipe = tv({
  base: 'px-2 py-1.5 font-semibold text-muted-foreground text-xs'
})

const comboboxItemRecipe = tv({
  base: cn(
    'relative',
    'py-1.5 ps-2',
    'text-sm',
    'flex w-full items-center gap-2',
    'rounded-xl',
    'select-none',
    'cursor-default',
    'outline-hidden',
    'data-[=checked]:bg-accent data-[state=checked]:text-accent-foreground',
    'data-highlighted:bg-accent data-highlighted:text-accent-foreground',
    'data-disabled:pointer-events-none data-disabled:opacity-64',
    "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0"
  ),
  defaultVariants: {
    showIndicator: true
  },
  variants: {
    showIndicator: {
      false: 'pe-2',
      true: 'pe-8'
    }
  }
})

const comboboxItemIndicatorRecipe = tv({
  base: 'absolute inset-e-2 flex size-3.5 items-center justify-center'
})

const comboboxEmptyRecipe = tv({
  base: cn('px-2 py-1.5', 'text-center text-muted-foreground text-sm')
})

const comboboxListRecipe = tv({
  base: 'flex flex-col'
})

export {
  comboboxContentRecipe,
  comboboxControlRecipe,
  comboboxEmptyRecipe,
  comboboxGroupLabelRecipe,
  comboboxInputRecipe,
  comboboxItemIndicatorRecipe,
  comboboxItemRecipe,
  comboboxListRecipe,
  comboboxSubTriggerRecipe,
  comboboxTriggerRecipe
}
