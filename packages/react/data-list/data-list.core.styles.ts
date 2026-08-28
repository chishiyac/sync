import { cn, tv } from 'tailwind-variants'

const dataListRootRecipe = tv({
  base: cn('group/data-list', 'flex flex-col gap-1', 'text-sm')
})

const dataListItemRecipe = tv({
  base: cn(
    'flex gap-4 py-2',
    'group-data-[orientation=horizontal]/data-list:flex-row group-data-[orientation=horizontal]/data-list:items-center',
    'group-data-[orientation=vertical]/data-list:flex-col group-data-[orientation=vertical]/data-list:gap-1'
  )
})

const dataListItemLabelRecipe = tv({
  base: cn(
    'min-w-24 shrink-0',
    'font-medium text-muted-foreground',
    'group-data-[orientation=vertical]/data-list:min-w-0'
  )
})

const dataListItemValueRecipe = tv({
  base: 'flex-1 text-foreground'
})

export {
  dataListItemLabelRecipe,
  dataListItemRecipe,
  dataListItemValueRecipe,
  dataListRootRecipe
}
