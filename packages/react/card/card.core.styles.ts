import { cn, tv } from 'tailwind-variants'

const cardRootRecipe = tv({
  base: cn(
    '[--space:--spacing(4)]',
    'group/card',
    'py-(--space)',
    'flex flex-col gap-4',
    'bg-card',
    'text-foreground',
    'has-data-[variant=image]:pt-0 has-data-[slot=card-footer]:pb-0',
    'rounded-xl border shadow-xs/5'
  )
})

const cardMediaRecipe = tv({
  base: cn(
    'flex shrink-0 items-center gap-2',
    '[&_svg]:pointer-events-none',
    'px-(--space)'
  ),
  defaultVariants: {
    variant: 'default'
  },
  variants: {
    variant: {
      default: 'bg-transparent',
      icon: "[&_svg:not([class*='size-'])]:size-4",
      image: cn(
        'overflow-hidden rounded-t-sm',
        'px-0',
        '[&_img]:size-full [&_img]:object-cover'
      )
    }
  }
})

const cardHeaderRecipe = tv({
  base: cn('flex flex-col gap-1', 'px-(--space)', 'items-start')
})

const cardTitleRecipe = tv({
  base: 'font-heading font-semibold text-foreground text-sm'
})

const cardDescriptionRecipe = tv({
  base: cn('row-start-2', 'text-muted-foreground text-sm')
})

const cardActionRecipe = tv({
  base: 'col-start-2 row-span-2 row-start-1 self-start justify-self-end'
})

const cardContentRecipe = tv({
  base: 'px-(--space)'
})

const cardFooterRecipe = tv({
  base: cn(
    'flex justify-end items-center gap-2',
    'px-(--space)',
    'bg-muted/48',
    'rounded-b-xl border-t',
    'py-(--space)'
  )
})

export {
  cardActionRecipe,
  cardContentRecipe,
  cardDescriptionRecipe,
  cardFooterRecipe,
  cardHeaderRecipe,
  cardMediaRecipe,
  cardRootRecipe,
  cardTitleRecipe
}
