import { cn, tv } from 'tailwind-variants'

const sheetPositionerRecipe = tv({
  base: cn('fixed inset-0 z-50 grid h-svh w-screen'),
  defaultVariants: {
    variant: 'default'
  },
  variants: {
    placement: {
      bottom: 'grid grid-rows-[1fr_auto] pt-12',
      left: 'flex justify-start',
      right: 'flex justify-end',
      top: 'grid grid-rows-[auto_1fr] pb-12'
    },
    variant: {
      default: '',
      inset: 'sm:p-4'
    }
  }
})

const sheetContentRecipe = tv({
  base: cn(
    '[--space:--spacing(6)]',
    'relative',
    'flex flex-col',
    'max-h-full min-h-0 w-full min-w-0',
    'bg-popover',
    'text-popover-foreground',
    'shadow-lg/5',
    'transition-[opacity,translate] duration-200 ease-in-out will-change-transform',
    'data-[state=closed]:fade-out-0 data-[state=closed]:animate-out',
    'data-[state=open]:fade-in-0 data-[state=open]:animate-in',
    'motion-reduce:animate-none! motion-reduce:transition-none!'
  ),
  defaultVariants: {
    placement: 'right',
    variant: 'default'
  },
  variants: {
    placement: {
      bottom: cn(
        'row-start-2 border-t',
        'data-[state=closed]:slide-in-from-bottom-10 data-[state=open]:slide-in-from-bottom-10'
      ),
      left: cn(
        'w-[calc(100%-(--spacing(12)))] max-w-md',
        'col-start-2',
        'border-e',
        'data-[state=closed]:slide-out-to-start-10 data-[state=open]:slide-in-from-start-10'
      ),
      right: cn(
        'w-[calc(100%-(--spacing(12)))] max-w-md',
        'col-start-2',
        'border-s',
        'data-[state=closed]:slide-out-to-end-10 data-[state=open]:slide-in-from-end-10'
      ),
      top: cn(
        'border-b',
        'data-[state=closed]:slide-out-to-top-10 data-[state=open]:slide-in-from-top-10'
      )
    },
    variant: {
      default: '',
      inset: cn(
        'sm:rounded-2xl sm:border',
        'sm:**:data-[slot=sheet-footer]:rounded-b-[calc(var(--radius-2xl)-1px)]'
      )
    }
  }
})

const sheetBodyRecipe = tv({
  base: 'in-[[data-slot=sheet-content]:has([data-slot=sheet-header])]:pt-0'
})

const sheetCloseButtonRecipe = tv({
  base: 'absolute inset-e-2 top-2 opacity-64 hover:opacity-100'
})

const sheetFooterRecipe = tv({
  base: 'sm:rounded-none'
})

export {
  sheetBodyRecipe,
  sheetCloseButtonRecipe,
  sheetContentRecipe,
  sheetFooterRecipe,
  sheetPositionerRecipe
}
