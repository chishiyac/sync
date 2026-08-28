import { cn, tv } from 'tailwind-variants'

const tooltipContentRecipe = tv({
  base: cn(
    'z-50 w-fit',
    'px-2 py-1',
    'bg-primary',
    'text-background font-medium dark:text-foreground text-xs',
    'rounded-lg shadow-lg/5',
    'origin-(--transform-origin) animate-in',
    'fade-in-0 zoom-in-[98%]',
    'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[98%]',
    'data-[state=closed]:animate-out',
    'data-[placement=bottom]:slide-in-from-top-2',
    'data-[placement=left]:slide-in-from-end-2',
    'data-[placement=right]:slide-in-from-start-2',
    'data-[placement=top]:slide-in-from-bottom-2',
    'motion-reduce:animate-none!'
  )
})

export { tooltipContentRecipe }
