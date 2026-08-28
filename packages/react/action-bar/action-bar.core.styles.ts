import { cn, tv } from 'tailwind-variants'

const actionBarContentRecipe = tv({
  base: cn(
    'fixed inset-x-0 bottom-0 z-50',
    'flex',
    'px-4 pb-[calc(var(--gutter)+env(safe-area-inset-bottom,0))]',
    'pointer-events-none',
    'data-[state=closed]:animate-out data-[state=open]:animate-in',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'data-[state=open]:slide-in-from-bottom-2 data-[state=closed]:slide-out-to-bottom-2',
    'motion-reduce:animate-none!'
  ),
  defaultVariants: {
    placement: 'bottom'
  },
  variants: {
    placement: {
      bottom: 'justify-center',
      'bottom-end': 'justify-end',
      'bottom-start': 'justify-start'
    }
  }
})

const actionBarWrapperRecipe = tv({
  base: cn(
    '[--space:--spacing(2)]',
    'flex w-fit items-center gap-1',
    'rounded-xl border shadow-lg/5',
    'px-[calc(var(--space)+2px)] py-(--space)',
    'bg-popover',
    'text-popover-foreground',
    'pointer-events-auto'
  )
})

const actionBarCloseRecipe = tv({
  base: cn(
    'opacity-64 transition-opacity',
    'hover:opacity-100',
    'motion-reduce:transition-none!'
  )
})

const actionBarBodyRecipe = tv({
  base: cn(
    'flex items-center gap-1',
    '**:data-[slot=action-bar-separator]:h-2'
  )
})

const actionBarValueRecipe = tv({
  base: cn('shrink-0 font-medium text-sm tabular-nums')
})

const actionBarSeparatorRecipe = tv({
  base: 'mx-1 h-1/2'
})

export {
  actionBarBodyRecipe,
  actionBarCloseRecipe,
  actionBarContentRecipe,
  actionBarSeparatorRecipe,
  actionBarValueRecipe,
  actionBarWrapperRecipe
}
