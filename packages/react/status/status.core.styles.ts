import { cn, tv } from 'tailwind-variants'

const statusRecipe = tv({
  base: cn(
    'relative',
    'after:absolute after:opacity-50 after:rounded-full after:bg-muted',
    'shrink-0 rounded-full',
    'flex items-center justify-center',
    'font-medium text-[10px]',
    'ring-[0.5px] ring-muted/50'
  ),
  defaultVariants: {
    animated: false,
    size: 'md',
    variant: 'default'
  },
  variants: {
    animated: {
      false: '',
      true: 'after:animate-ping'
    },
    size: {
      lg: "size-3 after:size-3 [&_svg:not([class*='size-'])]:size-2.5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      md: "size-2.5 after:size-2.5 [&_svg:not([class*='size-'])]:size-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      sm: "size-2 after:size-2 [&_svg:not([class*='size-'])]:size-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0"
    },
    variant: {
      default: 'bg-muted text-muted border-border',
      destructive:
        'bg-destructive/75 text-white dark:bg-destructive-foreground after:bg-destructive',
      info: 'bg-info/75 text-white after:bg-info',
      success: 'bg-success/75 text-white after:bg-success',
      warning: 'bg-warning/75 text-white after:bg-warning'
    }
  }
})

export { statusRecipe }
