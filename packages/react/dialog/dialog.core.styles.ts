import { cn, tv } from 'tailwind-variants'

const dialogOverlayRecipe = tv({
  base: cn(
    'fixed inset-0 z-50',
    'bg-black/32 backdrop-blur-xs',
    'duration-200',
    'peer peer-data-[slot=dialog-overlay]:hidden',
    'data-[state=open]:fade-in-0 data-[state=open]:animate-in',
    'data-[state=closed]:fade-out-0 data-[state=closed]:animate-out',
    'motion-reduce:animate-none!'
  )
})

const dialogPositionerRecipe = tv({
  base: cn(
    'fixed inset-0 z-50',
    'h-svh w-screen',
    'grid place-items-center',
    'p-4'
  ),
  variants: {
    bottomStickOnMobile: {
      true: cn(
        'max-sm:items-end',
        'max-sm:justify-items-center',
        'max-sm:p-0 max-sm:pt-12'
      )
    }
  }
})

const dialogContentRecipe = tv({
  base: cn(
    '[--space:--spacing(6)]',
    'z-[calc(50+var(--layer-index,0))]',
    'relative',
    'max-h-full min-h-0 w-full min-w-0',
    'flex flex-col bg-background',
    'text-popover-foreground',
    'rounded-2xl border shadow-lg/5',
    'outline-none',
    'translate-y-[calc(-1.25rem*var(--nested-layer-count))]',
    'transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform',
    'data-[nested=dialog]:data-[state=closed]:slide-in-from-bottom-10 data-[nested=dialog]:data-[state=open]:slide-in-from-bottom-10 data-[has-nested=dialog]:origin-top',
    'scale-[calc(1-0.1*var(--nested-layer-count))] opacity-[calc(1-0.1*var(--nested-layer-count))]',
    'data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[98%] data-[state=closed]:animate-out',
    'data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[98%] data-[state=open]:animate-in',
    'motion-reduce:animate-none! motion-reduce:transition-none!'
  ),
  defaultVariants: {
    size: 'md'
  },
  variants: {
    bottomStickOnMobile: {
      true: cn(
        'max-sm:max-w-none',
        'max-sm:rounded-none max-sm:rounded-t-2xl max-sm:border-x-0 max-sm:border-t max-sm:border-b-0',
        'max-sm:opacity-[calc(1-min(var(--nested-dialogs),1))]',
        'max-sm:data-[state=closed]:slide-out-to-bottom-5 max-sm:data-[state=open]:slide-in-from-bottom-5',
        'max-sm:data-[state=closed]:zoom-out-100 max-sm:data-[state=open]:zoom-in-100'
      )
    },
    size: {
      '2xl': cn('max-w-3xl'),
      '3xl': cn('max-w-4xl'),
      '4xl': cn('max-w-5xl'),
      '5xl': cn('max-w-6xl'),
      '6xl': cn('max-w-7xl'),
      fullscreen: cn('size-full'),
      lg: cn('max-w-xl'),
      md: cn('max-w-lg'),
      sm: cn('max-w-md'),
      xl: cn('max-w-2xl')
    }
  }
})

const dialogBodyRecipe = tv({
  base: cn(
    'flex-1',
    'p-(--space)',
    'overflow-auto',
    'in-[[data-slot=dialog-content]:has([data-slot=dialog-header])]:pt-0',
    'in-[[data-slot=dialog-content]:has([data-slot=dialog-footer]:not(.border-t))]:pb-1'
  )
})

const dialogTitleRecipe = tv({
  base: cn('font-heading font-semibold text-lg leading-none')
})

const dialogDescriptionRecipe = tv({
  base: cn('text-muted-foreground text-sm')
})

const dialogHeaderRecipe = tv({
  base: cn(
    'p-(--space)',
    'flex flex-col gap-2',
    'in-[[data-slot=dialog-content]:has([data-slot=dialog-body])]:pb-3'
  )
})

const dialogFooterRecipe = tv({
  base: cn(
    'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
    'sm:rounded-b-[calc(var(--radius-2xl)-1px)]',
    'px-(--space) py-4',
    'bg-muted/48',
    'border-t'
  )
})

const dialogCloseButtonRecipe = tv({
  base: cn(
    'absolute -inset-e-2.5 -top-2.5',
    'motion-reduce:transition-none! rounded-full'
  )
})

export {
  dialogBodyRecipe,
  dialogCloseButtonRecipe,
  dialogContentRecipe,
  dialogDescriptionRecipe,
  dialogFooterRecipe,
  dialogHeaderRecipe,
  dialogOverlayRecipe,
  dialogPositionerRecipe,
  dialogTitleRecipe
}
