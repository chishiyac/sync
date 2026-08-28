import { cn, tv } from 'tailwind-variants'

const calendarRootRecipe = tv({
  base: cn('[--cell-size:--spacing(9)]', 'w-fit')
})

const calendarControlRecipe = tv({
  base: 'inline-flex items-center gap-2'
})

const calendarLabelRecipe = tv({
  base: 'font-medium text-sm'
})

const calendarViewDateRecipe = tv({
  base: 'font-medium text-sm'
})

const calendarYearSelectRecipe = tv({
  base: 'relative w-fit has-[select:disabled]:opacity-64'
})

const calendarYearSelectChevronRecipe = tv({
  base: cn(
    'absolute inset-e-2.5 top-1/2 -translate-y-1/2',
    'size-4',
    'select-none text-muted-foreground',
    'pointer-events-none'
  )
})

const calendarMonthSelectRecipe = tv({
  base: 'relative w-fit has-[select:disabled]:opacity-64'
})

const calendarMonthSelectChevronRecipe = tv({
  base: cn(
    'absolute inset-e-2.5 top-1/2 -translate-y-1/2',
    'size-4',
    'select-none text-muted-foreground',
    'pointer-events-none'
  )
})

const calendarViewRecipe = tv({
  base: 'flex flex-col gap-1'
})

const calendarViewControlRecipe = tv({
  base: cn('relative', 'h-auto w-full', 'flex items-center gap-1.5')
})

const calendarPrevTriggerRecipe = tv({
  base: 'me-auto'
})

const calendarPrevTriggerChevronRecipe = tv({
  base: 'rtl:rotate-180'
})

const calendarNextTriggerRecipe = tv({
  base: 'ms-auto'
})

const calendarNextTriggerChevronRecipe = tv({
  base: 'rtl:rotate-180'
})

const calendarTableRecipe = tv({
  base: cn('group', 'w-full min-w-60', 'border-collapse')
})

const calendarTableRowRecipe = tv({
  base: 'mt-1 flex w-full'
})

const calendarTableHeaderRecipe = tv({
  base: cn(
    'h-(--cell-size) w-full',
    'flex items-center justify-center',
    'select-none font-medium text-muted-foreground/64 text-xs',
    'rounded-lg'
  )
})

const calendarTableCellRecipe = tv({
  base: cn(
    'relative',
    'h-(--cell-size) w-full',
    'select-none text-center',
    '[&:first-child[aria-selected=true]_div]:rounded-l-lg',
    '[&:last-child[aria-selected=true]_div]:rounded-r-lg'
  )
})

const calendarTableCellTriggerRecipe = tv({
  base: cn(
    'inline-flex items-center justify-center gap-1',
    'h-(--cell-size) w-full min-w-(--cell-size) data-[view=day]:h-(--cell-size)',
    'select-none whitespace-nowrap font-normal text-base text-foreground leading-none sm:text-sm',
    'rounded-lg border border-transparent',
    'hover:bg-accent hover:text-accent-foreground',
    'data-today:data-selected:after:bg-background data-today:after:absolute data-today:after:bottom-1 data-today:after:left-1/2 data-today:after:size-1 data-today:after:-translate-x-1/2 data-today:after:rounded-full data-today:after:bg-primary',
    'data-focus:border-primary data-focus:bg-accent/30 data-focus:text-primary data-focus:ring-[3px] data-focus:ring-ring/32',
    'outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32',
    'data-disabled:pointer-events-none data-disabled:opacity-64',
    'data-unavailable:pointer-events-none data-unavailable:line-through data-unavailable:opacity-64',
    'data-[view=day]:data-in-range:rounded-none data-[view=day]:data-in-range:not-[data-selected]:bg-primary/10',
    'data-selected:bg-primary! data-selected:text-primary-foreground!',
    'data-hover-range-start:rounded-l-lg! data-range-start:rounded-l-lg!',
    'data-hover-range-end:rounded-r-lg! data-range-end:rounded-r-lg!',
    '[&_svg:not([class*="size-"])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0'
  )
})

export {
  calendarControlRecipe,
  calendarLabelRecipe,
  calendarMonthSelectChevronRecipe,
  calendarMonthSelectRecipe,
  calendarNextTriggerChevronRecipe,
  calendarNextTriggerRecipe,
  calendarPrevTriggerChevronRecipe,
  calendarPrevTriggerRecipe,
  calendarRootRecipe,
  calendarTableCellRecipe,
  calendarTableCellTriggerRecipe,
  calendarTableHeaderRecipe,
  calendarTableRecipe,
  calendarTableRowRecipe,
  calendarViewControlRecipe,
  calendarViewDateRecipe,
  calendarViewRecipe,
  calendarYearSelectChevronRecipe,
  calendarYearSelectRecipe
}
