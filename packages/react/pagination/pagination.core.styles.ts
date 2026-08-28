import { cn, tv } from 'tailwind-variants'

const paginationRootRecipe = tv({
  base: cn('mx-auto', 'w-full', 'flex justify-center gap-1')
})

const paginationItemRecipe = tv({
  base: cn(
    'tabular-nums',
    'data-selected:not-[hover]:bg-transparent dark:data-selected:not-[hover]:bg-input/30',
    'data-selected:not-[hover]:text-foreground',
    'data-selected:not-[hover]:border-input'
  )
})

const paginationEllipsisRecipe = tv({
  base: cn(
    'h-8 w-12',
    'flex items-end justify-center',
    'text-muted-foreground',
    'pointer-events-none select-none',
    '[&_svg]:size-4'
  )
})

export {
  paginationEllipsisRecipe,
  paginationItemRecipe,
  paginationRootRecipe
}
