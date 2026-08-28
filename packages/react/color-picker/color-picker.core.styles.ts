import { cn, tv } from 'tailwind-variants'

const colorPickerRootRecipe = tv({
  base: cn('group/color-picker', 'w-fit', 'flex gap-2')
})

const colorPickerControlRecipe = tv({
  base: 'flex flex-row items-center gap-2'
})

const colorPickerTransparencyGridRecipe = tv({
  base: cn(
    'size-full rounded-[calc(var(--radius-sm)-0.5px)]',
    'bg-[linear-gradient(45deg,#e4e4e4_25%,transparent_25%),linear-gradient(-45deg,#e4e4e4_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#e4e4e4_75%),linear-gradient(-45deg,transparent_75%,#e4e4e4_75%)]',
    'bg-position-[0_0,0_4px,4px_-4px,-4px_0] bg-size-(--spacing(2))'
  )
})

const colorPickerContentRecipe = tv({
  base: cn(
    '[--space:--spacing(3)]',
    'z-50',
    'relative',
    'w-full min-w-56',
    'flex flex-col gap-4',
    'p-(--space)',
    'bg-popover',
    'rounded-xl border shadow-lg/5',
    'outline-none',
    'origin-(--transform-origin)',
    'data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[98%] data-[state=open]:animate-in',
    'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[98%] data-[state=closed]:animate-out',
    'motion-reduce:animate-none!'
  )
})

const colorPickerViewRecipe = tv({
  base: 'relative flex size-full flex-1 flex-col gap-4'
})

const colorPickerSliderRecipe = tv({
  base: cn(
    'relative',
    'flex items-center',
    'touch-none select-none',
    'rounded-full border',
    'data-[orientation=horizontal]:w-full',
    'data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
    'group-data-disabled/color-picker:pointer-events-none group-data-disabled/color-picker:cursor-not-allowed group-data-disabled/color-picker:opacity-64'
  )
})

const colorPickerSliderTrackRecipe = tv({
  base: cn(
    'grow',
    'rounded-full',
    'select-none overflow-hidden',
    'data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full',
    'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2'
  )
})

const colorPickerSliderThumbRecipe = tv({
  base: cn(
    'relative shrink-0',
    'size-4.5',
    '-translate-1/2',
    'rounded-full border-[3px] border-white shadow-[0_0_0_1px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(0,0,0,0.1)]',
    'outline-none ring-1 ring-border/64',
    'origin-left data-[orientation=vertical]:origin-bottom'
  )
})

const colorPickerSwatchGroupRecipe = tv({
  base: 'flex flex-wrap items-center gap-2'
})

const colorPickerSwatchTriggerRecipe = tv({
  base: cn(
    'relative',
    'size-8',
    'flex items-center justify-center',
    'rounded-full',
    'transition-[border-color,box-shadow] duration-100 ease-out will-change-transform',
    'outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'data-disabled:pointer-events-none data-disabled:opacity-64',
    'data-[state=checked]:shadow-sm/5 data-[state=checked]:ring-(--color) data-[state=checked]:ring-2',
    'motion-reduce:transition-none!'
  )
})

const colorPickerSwatchRootRecipe = tv({
  base: cn(
    'size-full',
    'shrink-0',
    'overflow-hidden',
    'rounded-[inherit]',
    'transition-transform duration-100 ease-out will-change-transform',
    'not-[data-state=checked]:hover:scale-110',
    'data-[state=checked]:scale-[0.8]',
    'motion-reduce:transition-none!'
  )
})

const colorPickerSwatchIndicatorRecipe = tv({
  base: cn(
    'absolute inset-0 z-10',
    'flex items-center justify-center',
    'text-white',
    'pointer-events-none',
    'zoom-in-5 animate-in blur-in-md',
    '[&_svg]:size-1/2',
    'motion-reduce:animate-none!'
  )
})

const colorPickerValueRecipe = tv({
  base: 'font-medium text-sm'
})

const colorPickerValueSwatchRecipe = tv({
  base: cn(
    'relative size-8 shrink-0',
    'overflow-hidden',
    'rounded-full border'
  )
})

const colorPickerAreaRecipe = tv({
  base: cn(
    'relative',
    'aspect-square size-full',
    'rounded-xl border',
    'touch-none'
  ),
  defaultVariants: {
    withDots: false
  },
  variants: {
    withDots: {
      false: '',
      true: 'after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(circle,#fff3_1px,#0000_1px)] after:bg-size-[8px_8px]'
    }
  }
})

const colorPickerAreaBackgroundRecipe = tv({
  base: 'size-full rounded-[inherit]'
})

const colorPickerAreaThumbRecipe = tv({
  base: cn(
    'size-4.5',
    'rounded-full border-[3px] border-white shadow-[0_0_0_1px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(0,0,0,0.1)]',
    'outline-none ring-border/64',
    'data-disabled:pointer-events-none data-disabled:opacity-64'
  )
})

const colorPickerSwatchPreviewRecipe = tv({
  base: cn(
    'relative',
    'size-8',
    'shrink-0',
    'rounded-full border',
    'pointer-events-none overflow-hidden',
    'group-data-[size=lg]/input-group:size-5',
    'group-data-[size=md]/input-group:size-4',
    'group-data-[size=sm]/input-group:size-3.5',
    'group-data-disabled/color-input:opacity-64'
  )
})

export {
  colorPickerAreaBackgroundRecipe,
  colorPickerAreaRecipe,
  colorPickerAreaThumbRecipe,
  colorPickerContentRecipe,
  colorPickerControlRecipe,
  colorPickerRootRecipe,
  colorPickerSliderRecipe,
  colorPickerSliderThumbRecipe,
  colorPickerSliderTrackRecipe,
  colorPickerSwatchGroupRecipe,
  colorPickerSwatchIndicatorRecipe,
  colorPickerSwatchPreviewRecipe,
  colorPickerSwatchRootRecipe,
  colorPickerSwatchTriggerRecipe,
  colorPickerTransparencyGridRecipe,
  colorPickerValueRecipe,
  colorPickerValueSwatchRecipe,
  colorPickerViewRecipe
}
