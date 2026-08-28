import { cn, tv } from 'tailwind-variants'

const tableWrapperRecipe = tv({
  base: 'relative w-full max-w-full min-w-0 overflow-auto'
})

const tableRootRecipe = tv({
  base: cn(
    'group/table',
    'w-full',
    'caption-bottom',
    'text-foreground text-sm'
  )
})

const tableHeaderRecipe = tv({
  base: '[&_tr]:border-b'
})

const tableBodyRecipe = tv({
  base: '[&_tr:last-child]:border-0'
})

const tableFooterRecipe = tv({
  base: cn(
    'border-t',
    'bg-muted/48',
    'font-medium',
    'last:[&>tr]:border-b-0'
  )
})

const tableRowRecipe = tv({
  base: cn(
    'border-b',
    'data-[state=selected]:bg-muted',
    'group-data-[variant=striped]/table:even:bg-muted/30',
    'group-data-[hoverable=true]/table:[&:has(td):hover]:bg-muted/48'
  )
})

const tableHeadRecipe = tv({
  base: cn(
    'h-10 px-2 whitespace-nowrap',
    'text-left align-middle',
    'font-medium text-muted-foreground',
    'rtl:text-right',
    'has-[[role=checkbox]]:ps-2 has-[[role=checkbox]]:pe-0'
  )
})

const tableCellRecipe = tv({
  base: cn(
    'whitespace-nowrap p-2 align-middle',
    'has-[[role=checkbox]]:ps-2 has-[[role=checkbox]]:pe-0'
  )
})

const tableCaptionRecipe = tv({
  base: cn('mt-4', 'text-muted-foreground text-sm')
})

export {
  tableBodyRecipe,
  tableCaptionRecipe,
  tableCellRecipe,
  tableFooterRecipe,
  tableHeaderRecipe,
  tableHeadRecipe,
  tableRootRecipe,
  tableRowRecipe,
  tableWrapperRecipe
}
