import { cn, tv } from 'tailwind-variants'

const toggleGroupRecipe = tv({
  base: cn(
    'w-fit',
    'flex items-center gap-[--spacing(var(--gap))]',
    'rounded-lg'
  ),
  defaultVariants: {
    orientation: 'horizontal'
  },
  variants: {
    orientation: {
      horizontal: 'flex-row pointer-coarse:*:after:min-w-auto',
      vertical:
        'flex-col items-stretch pointer-coarse:*:after:min-h-auto'
    }
  }
})

const toggleGroupItemRecipe = tv({
  base: cn(
    'shrink-0 focus:z-10 focus-visible:z-10',
    'data-[spacing=0]:rounded-none',
    'data-[spacing=0]:px-2',
    'data-[orientation=horizontal]:data-[spacing=0]:first:rounded-l-lg',
    'data-[orientation=vertical]:data-[spacing=0]:first:rounded-t-lg',
    'data-[orientation=horizontal]:data-[spacing=0]:last:rounded-r-lg',
    'data-[orientation=vertical]:data-[spacing=0]:last:rounded-b-lg',
    'data-[orientation=horizontal]:data-[spacing=0]:data-[variant=outline]:border-l-0',
    'data-[orientation=vertical]:data-[spacing=0]:data-[variant=outline]:border-t-0',
    'data-[orientation=horizontal]:data-[spacing=0]:data-[variant=outline]:first:border-l'
  )
})

export { toggleGroupItemRecipe, toggleGroupRecipe }
