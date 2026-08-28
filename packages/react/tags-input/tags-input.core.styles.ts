import { cn, tv } from 'tailwind-variants'

const tagsInputRootRecipe = tv({
  base: cn('group/tags-input', 'flex w-full flex-col gap-2')
})

const tagsInputRootProviderRecipe = tv({
  base: cn('group/tags-input', 'flex w-full flex-col gap-2')
})

const tagsInputControlRecipe = tv({
  base: cn(
    'h-auto in-data-[size=lg]:min-h-9 in-data-[size=sm]:min-h-7 min-h-8',
    'p-1',
    'flex-wrap content-start items-center gap-1',
    'data-disabled:pointer-events-none data-disabled:opacity-64'
  )
})

const tagsInputItemPreviewRecipe = tv({
  base: 'inline-flex max-w-full items-center gap-1'
})

const tagsInputItemTextRecipe = tv({
  base: 'truncate'
})

const tagsInputItemDeleteTriggerRecipe = tv({
  base: cn(
    'in-data-[size=lg]:size-6 in-data-[size=sm]:size-4 size-5',
    'shrink-0',
    'text-muted-foreground',
    'rounded-[calc(var(--radius)-5px)]',
    "[&_svg:not([class*='size-'])]:size-3",
    'hover:text-foreground'
  )
})

const tagsInputItemInputRecipe = tv({
  base: cn(
    'px-1 text-xs',
    'h-6 in-data-[size=lg]:h-7 in-data-[size=sm]:h-5'
  )
})

const tagsInputItemRecipe = tv({
  base: cn(
    'h-6 in-data-[size=lg]:h-7 in-data-[size=sm]:h-5 max-w-full',
    'pr-0.5 in-data-[size=lg]:pl-2 in-data-[size=sm]:pl-1 pl-1.5',
    'inline-flex shrink-0 items-center gap-1',
    'bg-secondary',
    'in-data-[size=lg]:text-sm text-secondary-foreground text-xs',
    'rounded-md border outline-none',
    'data-highlighted:border-primary/30 data-highlighted:bg-primary/10'
  )
})

const tagsInputInputRecipe = tv({
  base: cn(
    'w-auto min-w-18 max-w-full flex-auto shrink basis-auto',
    'h-7 in-data-[size=lg]:h-8 in-data-[size=sm]:h-6'
  )
})

const tagsInputClearTriggerRecipe = tv({
  base: 'ms-auto shrink-0 self-center text-muted-foreground hover:text-foreground'
})

export {
  tagsInputClearTriggerRecipe,
  tagsInputControlRecipe,
  tagsInputInputRecipe,
  tagsInputItemDeleteTriggerRecipe,
  tagsInputItemInputRecipe,
  tagsInputItemPreviewRecipe,
  tagsInputItemRecipe,
  tagsInputItemTextRecipe,
  tagsInputRootProviderRecipe,
  tagsInputRootRecipe
}
