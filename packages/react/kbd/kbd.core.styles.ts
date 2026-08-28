import { cn, tv } from 'tailwind-variants'

const kbdRecipe = tv({
  base: cn(
    'h-5 min-w-5',
    'px-1',
    'inline-flex items-center justify-center gap-1',
    'select-none font-medium font-sans text-foreground text-xs',
    'rounded-sm border border-transparent',
    'pointer-events-none',
    'in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background',
    "[&_svg:not([class*='size-'])]:size-3"
  ),
  defaultVariants: {
    variant: 'default'
  },
  variants: {
    variant: {
      default: 'bg-muted',
      outline: 'border border-border'
    }
  }
})

export { kbdRecipe }
