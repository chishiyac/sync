import { cn, tv } from 'tailwind-variants'

const menuContentRecipe = tv({
  base: cn(
    'z-[calc(50+var(--nested-layer-count,0))]',
    "max-h-(--available-height) not-[class*='w-']:min-w-32",
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

const menuItemRecipe = tv({
  base: cn(
    'group/menu-item',
    'relative',
    'w-full',
    'px-2.5 py-1.5',
    'flex items-center gap-2',
    'select-none text-sm',
    'rounded-lg',
    'outline-hidden',
    'group-data-[date=open]/trigger-item:bg-accent group-data-[date=open]/trigger-item:text-accent-foreground',
    'data-disabled:pointer-events-none data-disabled:opacity-64',
    "[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:pointer-events-none [&_svg]:shrink-0"
  ),
  defaultVariants: {
    variant: 'default'
  },
  variants: {
    variant: {
      default: cn(
        'data-highlighted:bg-accent data-highlighted:text-accent-foreground'
      ),
      destructive: cn(
        'text-destructive dark:text-destructive-foreground',
        'data-highlighted:bg-destructive/10 dark:data-highlighted:bg-destructive-foreground/10',
        '**:[svg]:text-destructive! dark:**:[svg]:text-destructive-foreground!'
      )
    }
  }
})

const menuPositionerRecipe = tv({
  base: 'outline-none'
})

const menuSeparatorRecipe = tv({
  base: 'my-1 h-px bg-border'
})

const menuQuickItemRecipe = tv({
  base: cn('flex-col gap-1', "[&_svg:not([class*='size-'])]:size-4.5")
})

const menuIndicatorRecipe = tv({
  base: 'pointer-events-none absolute inset-s-2 flex size-3.5 items-center justify-center'
})

const menuGroupLabelRecipe = tv({
  base: cn(
    'px-2 py-1.5',
    'font-medium text-muted-foreground text-sm',
    'pointer-events-none'
  )
})

const menuShortcutRecipe = tv({
  base: cn(
    'ms-auto rtl:me-auto',
    'text-muted-foreground text-xs tracking-widest',
    'group-data-highlighted/menu-item:group-data-[variant=destructive]/menu-item:text-destructive dark:group-data-highlighted/menu-item:group-data-[variant=destructive]/menu-item:text-destructive-foreground'
  )
})

const menuArrowTipRecipe = tv({
  base: 'border-s border-t'
})

export {
  menuArrowTipRecipe,
  menuContentRecipe,
  menuGroupLabelRecipe,
  menuIndicatorRecipe,
  menuItemRecipe,
  menuPositionerRecipe,
  menuQuickItemRecipe,
  menuSeparatorRecipe,
  menuShortcutRecipe
}
