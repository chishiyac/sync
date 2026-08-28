import { cn, tv } from 'tailwind-variants'

const numberInputRootRecipe = tv({
  base: cn(
    'group/number-field flex w-full flex-col items-start gap-2',
    'has-data-[slot=number-field-increment]:has-data-[slot=number-field-decrement]:**:data-[slot=number-field-input]:text-center'
  )
})

const numberInputGroupRecipe = tv({
  base: cn(
    'relative',
    'flex w-full justify-between',
    'bg-transparent dark:bg-input/30',
    'text-base',
    'rounded-lg border border-input shadow-xs/5 ring-ring/32',
    'transition-shadow',
    'focus-within:border-primary focus-within:ring-[3px] focus-within:ring-ring/32',
    'data-disabled:pointer-events-none data-disabled:opacity-64',
    'aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/24',
    'dark:aria-invalid:border-destructive-foreground dark:aria-invalid:text-destructive-foreground dark:aria-invalid:ring-destructive-foreground/20',
    'motion-reduce:transition-none!'
  )
})

const numberInputDecrementRecipe = tv({
  base: cn(
    'relative',
    'h-8 in-data-[size=lg]:h-9 in-data-[size=sm]:h-7',
    'flex shrink-0',
    'text-foreground',
    'rounded-none rounded-s-[calc(var(--radius-lg)+1px)]',
    'cursor-pointer',
    'pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11'
  )
})

const numberInputIncrementRecipe = tv({
  base: cn(
    'relative',
    'h-8 in-data-[size=lg]:h-9 in-data-[size=sm]:h-7',
    'flex shrink-0',
    'text-foreground',
    'rounded-none rounded-e-[calc(var(--radius-lg)+1px)]',
    'cursor-pointer',
    'pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11'
  )
})

const numberInputInputRecipe = tv({
  base: cn(
    'grow',
    'h-8 in-data-[size=lg]:h-9 in-data-[size=sm]:h-7',
    'tabular-nums',
    'border-0 shadow-none ring-0',
    'focus-visible:ring-0 aria-invalid:ring-0 data-invalid:ring-0',
    'dark:bg-transparent'
  )
})

const numberInputScrubberRecipe = tv({
  base: 'flex cursor-ew-resize'
})

export {
  numberInputDecrementRecipe,
  numberInputGroupRecipe,
  numberInputIncrementRecipe,
  numberInputInputRecipe,
  numberInputRootRecipe,
  numberInputScrubberRecipe
}
