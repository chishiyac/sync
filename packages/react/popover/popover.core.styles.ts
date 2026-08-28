import { cn, tv } from 'tailwind-variants'

const popoverTitleRecipe = tv({
  base: 'font-semibold text-base leading-none'
})

const popoverDescriptionRecipe = tv({
  base: 'text-muted-foreground text-sm'
})

const popoverHeaderRecipe = tv({
  base: cn(
    'flex flex-col gap-2 p-(--space)',
    'in-[[data-slot=popover-content]:has([data-slot=popover-body])]:pb-3'
  )
})

const popoverBodyRecipe = tv({
  base: cn(
    'flex-1',
    'p-(--space)',
    'overflow-auto',
    'in-[[data-slot=popover-content]:has([data-slot=popover-header])]:pt-1',
    'in-[[data-slot=popover-content]:has([data-slot=popover-footer]:not(.border-t))]:pb-1'
  )
})

const popoverFooterRecipe = tv({
  base: cn(
    'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
    'sm:rounded-b-[calc(var(--radius-lg)-1px)]',
    'px-(--space) py-4',
    'bg-muted/64',
    'border-t'
  )
})

const popoverContentRecipe = tv({
  base: cn(
    'relative',
    'z-[calc(50+var(--layer-index,0))]',
    '[--space:--spacing(4)]',
    'w-auto min-w-32',
    'flex flex-col',
    'bg-popover',
    'text-popover-foreground',
    'rounded-xl border shadow-lg/5',
    'outline-hidden',
    'origin-(--transform-origin)',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'data-[state=closed]:zoom-out-[98%] data-[state=open]:zoom-in-[98%]',
    'data-[state=closed]:animate-out data-[state=open]:animate-in',
    'data-[placement=bottom]:slide-in-from-top-2',
    'data-[placement=left]:slide-in-from-end-2',
    'data-[placement=right]:slide-in-from-start-2',
    'data-[placement=top]:slide-in-from-bottom-2',
    'motion-reduce:animate-none!'
  )
})

const popoverCloseRecipe = tv({
  base: 'absolute inset-e-2 top-2 opacity-64 hover:opacity-100'
})

const popoverArrowTipRecipe = tv({
  base: 'border-s border-t'
})

export {
  popoverArrowTipRecipe,
  popoverBodyRecipe,
  popoverCloseRecipe,
  popoverContentRecipe,
  popoverDescriptionRecipe,
  popoverFooterRecipe,
  popoverHeaderRecipe,
  popoverTitleRecipe
}
