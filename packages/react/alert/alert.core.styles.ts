import { cn, tv } from 'tailwind-variants'

const alertRootRecipe = tv({
  base: cn(
    'relative',
    'px-3.5 py-3',
    'grid w-full items-start gap-x-2 gap-y-0.5',
    'text-card-foreground text-sm',
    'rounded-xl border',
    'has-[>svg]:has-data-[slot=alert-action]:grid-cols-[--spacing(4)_1fr_auto] has-[>svg]:grid-cols-[--spacing(4)_1fr]',
    'has-[>svg]:gap-x-2 [&_svg]:h-lh [&_svg]:w-4',
    'has-data-[slot=alert-action]:grid-cols-[1fr_auto]'
  ),
  defaultVariants: {
    variant: 'default'
  },
  variants: {
    variant: {
      default: cn(
        'bg-input/4',
        '[&_svg]:text-muted-foreground',
        '[&_[data-slot=alert-action]_[data-variant=ghost]]:hover:bg-muted'
      ),
      destructive: cn(
        'bg-destructive/4',
        'border-destructive/32',
        '[&_svg]:text-destructive',
        '[&_[data-slot=alert-action]_[data-variant=ghost]]:hover:bg-destructive/10'
      ),
      info: cn(
        'bg-info/4',
        'border-info/32',
        '[&_svg]:text-info',
        '[&_[data-slot=alert-action]_[data-variant=ghost]]:hover:bg-info/10'
      ),
      success: cn(
        'bg-success/4',
        'border-success/32',
        '[&_svg]:text-success',
        '[&_[data-slot=alert-action]_[data-variant=ghost]]:hover:bg-success/10'
      ),
      warning: cn(
        'bg-warning/4',
        'border-warning/32',
        '[&_svg]:text-warning',
        '[&_[data-slot=alert-action]_[data-variant=ghost]]:hover:bg-warning/10'
      )
    }
  }
})

const alertTitleRecipe = tv({
  base: cn('font-heading font-medium', '[svg~&]:col-start-2')
})

const alertDescriptionRecipe = tv({
  base: cn(
    'flex flex-col gap-2.5',
    'text-muted-foreground',
    '[svg~&]:col-start-2'
  )
})

const alertActionRecipe = tv({
  base: cn(
    'flex gap-1',
    'max-sm:col-start-2 max-sm:mt-2',
    'sm:[svg~[data-slot=alert-title]~&]:col-start-3',
    'sm:row-start-1 sm:row-end-3 sm:self-center',
    'sm:[[data-slot=alert-description]~&]:col-start-2',
    'sm:[[data-slot=alert-title]~&]:col-start-2',
    'sm:[svg~&]:col-start-2',
    'sm:[svg~[data-slot=alert-description]~&]:col-start-3'
  )
})

export {
  alertActionRecipe,
  alertDescriptionRecipe,
  alertRootRecipe,
  alertTitleRecipe
}
