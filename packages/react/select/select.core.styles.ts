import { cn, tv } from 'tailwind-variants'

const selectSeparatorRecipe = tv({
  base: 'pointer-events-none -mx-1 my-1 h-px bg-border'
})

const selectValueRecipe = tv({
  base: cn(
    'min-w-0',
    'flex items-center gap-2',
    'truncate text-nowrap'
  )
})

const selectContentRecipe = tv({
  base: cn(
    'z-50',
    'relative',
    'max-h-96 min-w-(--reference-width)',
    'p-1',
    'bg-popover',
    'text-popover-foreground',
    'rounded-xl border shadow-lg/5',
    'origin-(--transform-origin)',
    'outline-none',
    'overflow-y-auto',
    'duration-100',
    'data-[state=open]:animate-in',
    'data-[state=open]:fade-in-0',
    'data-[state=open]:zoom-in-[98%]',
    'data-[placement=bottom]:slide-in-from-top-2',
    'data-[placement=left]:slide-in-from-end-2',
    'data-[placement=right]:slide-in-from-start-2',
    'data-[placement=top]:slide-in-from-bottom-2',
    'motion-reduce:animate-none!'
  )
})

const selectGroupLabelRecipe = tv({
  base: cn(
    'px-2 py-1.5',
    'font-semibold text-muted-foreground text-xs'
  )
})

const selectItemRecipe = tv({
  base: cn(
    'relative',
    'w-full',
    'py-1.5 ps-2 pe-8',
    'flex items-center gap-2',
    'select-none text-base md:text-sm',
    'rounded-md',
    'cursor-default',
    'outline-hidden',
    'data-[state=checked]:bg-muted',
    'in-[[data-slot=select-content]:has([data-slot=select-group-label])]:ps-4',
    'data-highlighted:bg-accent data-highlighted:text-accent-foreground',
    'data-disabled:pointer-events-none data-disabled:opacity-64',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:text-muted-foreground"
  )
})

const selectItemTextRecipe = tv({
  base: 'flex w-full flex-1 text-sm items-center gap-2'
})

const selectItemIndicatorRecipe = tv({
  base: 'absolute inset-e-2 flex size-4 items-center justify-center'
})

const selectClearTriggerRecipe = tv({
  base: cn(
    '[&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground',
    'transition-opacity',
    'opacity-64',
    'outline-none focus-visible:opacity-100',
    'hover:opacity-100',
    'motion-reduce:transition-none!'
  )
})

const selectTriggerRecipe = tv({
  base: cn(
    'w-fit',
    'flex items-center gap-2',
    'text-sm',
    'data-placeholder-shown:text-muted-foreground/64',
    'data-[state=open]:border-primary data-[state=open]:ring-[3px] data-[state=open]:ring-ring/32',
    '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground'
  )
})

const selectTriggerActionsRecipe = tv({
  base: 'ms-auto flex items-center gap-1 rtl:me-auto'
})

const selectEmptyRecipe = tv({
  base: cn('px-2 py-1.5', 'text-center text-muted-foreground text-sm')
})

export {
  selectClearTriggerRecipe,
  selectContentRecipe,
  selectEmptyRecipe,
  selectGroupLabelRecipe,
  selectItemIndicatorRecipe,
  selectItemRecipe,
  selectItemTextRecipe,
  selectSeparatorRecipe,
  selectTriggerActionsRecipe,
  selectTriggerRecipe,
  selectValueRecipe
}
