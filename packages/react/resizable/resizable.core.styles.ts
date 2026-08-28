import { cn, tv } from 'tailwind-variants'

const resizableRecipe = tv({
  base: 'flex size-full'
})

const resizableResizeTriggerHandleRecipe = tv({
  base: cn(
    'relative bg-border',
    'flex w-px items-center justify-center',
    'after:-translate-x-1/2 data-[orientation=vertical]:after:-translate-y-1/2',
    'after:absolute after:inset-s-1/2 after:inset-y-0 after:w-1',
    'focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1',
    'data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full',
    'data-[orientation=vertical]:after:inset-s-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full',
    'data-[orientation=vertical]:after:translate-x-0',
    '[&[data-orientation=vertical]>div]:rotate-90'
  )
})

const resizableResizeHandleRecipe = tv({
  base: cn(
    'z-10',
    'h-4 w-3',
    'flex items-center justify-center',
    'bg-border',
    'rounded-xs border'
  )
})

const resizableResizeTriggerRecipe = tv({
  base: 'size-2.5'
})

export {
  resizableRecipe,
  resizableResizeHandleRecipe,
  resizableResizeTriggerHandleRecipe,
  resizableResizeTriggerRecipe
}
