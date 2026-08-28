import { cn, tv } from 'tailwind-variants'

const datePickerTriggerRecipe = tv({
  base: cn(
    'justify-start',
    'text-left data-placeholder-shown:[&>span]:text-muted-foreground',
    'active:scale-100',
    "[&_svg:not([class*='text-'])]:opacity-64"
  )
})

const datePickerTriggerIconRecipe = tv({
  base: 'text-muted-foreground'
})

const datePickerTimerInputRecipe = tv({
  base: cn(
    '[&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
  )
})

const datePickerContentRecipe = tv({
  base: cn(
    '[--cell-size:--spacing(8)]',
    'z-[calc(50+var(--layer-index,0))]',
    'w-fit min-w-72',
    'p-3',
    'bg-popover',
    'text-popover-foreground',
    'rounded-xl border shadow-lg/5',
    'outline-none',
    'origin-(--transform-origin)',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'data-[state=closed]:animate-out data-[state=open]:animate-in',
    'data-[state=closed]:zoom-out-[98%] data-[state=open]:zoom-in-[98%]',
    'motion-reduce:animate-none!'
  )
})

const datePickerValueRecipe = tv({
  base: 'font-medium text-sm'
})

const datePickerTimerIconRecipe = tv({
  base: 'text-muted-foreground'
})

export {
  datePickerContentRecipe,
  datePickerTimerIconRecipe,
  datePickerTimerInputRecipe,
  datePickerTriggerIconRecipe,
  datePickerTriggerRecipe,
  datePickerValueRecipe
}
