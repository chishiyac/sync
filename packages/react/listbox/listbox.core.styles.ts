import { cn, tv } from 'tailwind-variants'

const listboxRootRecipe = tv({
  base: cn('w-full', 'flex flex-col gap-1.5', 'text-foreground')
})

const listboxContentRecipe = tv({
  base: cn(
    'w-full',
    'flex flex-col gap-1',
    'outline-hidden',
    'overflow-hidden',
    'data-[orientation=horizontal]:max-h-none data-[orientation=horizontal]:flex-row'
  )
})

const listboxItemRecipe = tv({
  base: cn(
    'group/listbox-item',
    'relative',
    'flex items-center gap-2',
    'px-2.5 py-2',
    'rounded-xl',
    'select-none text-sm',
    'cursor-pointer',
    'outline-hidden',
    'data-disabled:pointer-events-none data-disabled:opacity-64',
    "[&_svg:not([class*='size-'])]:size-3.5 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0"
  ),
  defaultVariants: {
    variant: 'default'
  },
  variants: {
    variant: {
      default: cn(
        'text-popover-foreground',
        'data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground',
        'hover:bg-accent hover:text-accent-foreground',
        'data-highlighted:bg-accent data-highlighted:text-accent-foreground'
      ),
      destructive: cn(
        'text-destructive dark:text-destructive-foreground',
        'hover:bg-destructive/10 dark:hover:bg-destructive-foreground/10',
        'data-highlighted:bg-destructive/10 dark:data-highlighted:bg-destructive-foreground/10',
        '**:[svg]:text-destructive! dark:**:[svg]:text-destructive-foreground!'
      )
    }
  }
})

const listboxItemTextRecipe = tv({
  base: cn(
    'min-w-0',
    'flex-1',
    'text-ellipsis whitespace-nowrap',
    'overflow-hidden'
  )
})

const listboxItemGroupLabelRecipe = tv({
  base: cn(
    'px-2.5 py-2',
    'font-medium text-muted-foreground',
    'pointer-events-none'
  )
})

const listboxItemGroupRecipe = tv({
  base: 'flex flex-col gap-1'
})

const listboxValueText = tv({
  base: 'font-normal'
})

const listboxItemIndicatorRecipe = tv({
  base: cn(
    'flex shrink-0 items-center justify-center',
    '[&_svg]:text-primary!',
    'zoom-in-95 fade-in-0 animate-in',
    'motion-reduce:animate-none!'
  )
})

const listboxEmptyRecipe = tv({
  base: cn('px-2 py-1.5', 'text-center text-muted-foreground text-sm')
})

export {
  listboxContentRecipe,
  listboxEmptyRecipe,
  listboxItemGroupLabelRecipe,
  listboxItemGroupRecipe,
  listboxItemIndicatorRecipe,
  listboxItemRecipe,
  listboxItemTextRecipe,
  listboxRootRecipe,
  listboxValueText
}
