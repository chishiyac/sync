import { cn, tv } from 'tailwind-variants'

const itemRootRecipe = tv({
  base: cn(
    '[--space:--spacing(3)]',
    'group/item',
    'flex w-full flex-wrap items-center',
    'gap-(--space) p-(--space)',
    'in-data-[slot=menu-content]:p-0',
    'text-sm',
    'rounded-xl border',
    'transition-colors duration-100',
    '[a]:transition-colors [a]:hover:bg-muted',
    'outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32',
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
  ),
  defaultVariants: {
    variant: 'default'
  },
  variants: {
    variant: {
      default: 'border-transparent',
      muted:
        'border-transparent bg-muted/48 shadow-muted/5 shadow-xs',
      outline: 'border-border shadow-xs/5'
    }
  }
})

const itemMediaRecipe = tv({
  base: cn(
    'flex shrink-0 items-center justify-center gap-2',
    'group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start',
    '[&_svg]:pointer-events-none'
  ),
  defaultVariants: {
    variant: 'default'
  },
  variants: {
    variant: {
      default: 'bg-transparent',
      icon: cn("[&_svg:not([class*='size-'])]:size-4"),
      image: cn(
        'size-10',
        'rounded-xl',
        'overflow-hidden',
        '[&_img]:size-full [&_img]:object-cover'
      )
    }
  }
})

const itemGroupRecipe = tv({
  base: cn('group/item-group', 'flex w-full flex-col gap-4')
})

const itemSeparatorRecipe = tv({
  base: 'my-2'
})

const itemContentRecipe = tv({
  base: cn(
    'flex flex-1 flex-col gap-0.5',
    '[&+[data-slot=item-content]]:flex-none'
  )
})

const itemTitleRecipe = tv({
  base: cn(
    'w-fit',
    'flex items-center gap-2',
    'line-clamp-1 font-medium text-sm leading-snug',
    'underline-offset-4'
  )
})

const itemDescriptionRecipe = tv({
  base: cn(
    'line-clamp-2 text-left font-normal text-muted-foreground text-sm leading-normal',
    '[&>a:hover]:text-primary',
    '[&>a]:underline [&>a]:underline-offset-4'
  )
})

const itemActionsRecipe = tv({
  base: 'flex items-center gap-2'
})

const itemHeaderRecipe = tv({
  base: cn(
    'flex basis-full items-center justify-between gap-2',
    '[&_img]:size-full [&_img]:rounded-xl [&_img]:object-cover'
  )
})

const itemFooterRecipe = tv({
  base: 'flex basis-full items-center justify-between gap-2'
})

export {
  itemActionsRecipe,
  itemContentRecipe,
  itemDescriptionRecipe,
  itemFooterRecipe,
  itemGroupRecipe,
  itemHeaderRecipe,
  itemMediaRecipe,
  itemRootRecipe,
  itemSeparatorRecipe,
  itemTitleRecipe
}
