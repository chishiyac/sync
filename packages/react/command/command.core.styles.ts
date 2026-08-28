import { cn, tv } from 'tailwind-variants'

const commandRootRecipe = tv({
  base: cn(
    'isolate',
    'flex min-h-0 flex-1 flex-col',
    'p-2',
    'bg-popover',
    'text-popover-foreground',
    'rounded-2xl border'
  )
})

const commandInputControlRecipe = tv({
  base: 'mb-2'
})

const commandInputGroupRecipe = tv({
  base: 'rounded-xl bg-input/32'
})

const commandInputSearchRecipe = tv({
  base: 'opacity-64'
})

const commandContentRecipe = tv({
  base: cn(
    'flex flex-1 flex-col',
    'max-h-(--available-height) min-h-0',
    '-mr-2',
    'outline-none',
    'scrollbar-thin scrollbar-track-transparent scrollbar-thumb-foreground/20 overflow-auto overscroll-contain',
    '[:not(.has-[+[data-slot=command-footer]])]:rounded-b-2xl [:not(.has-[+[data-slot=command-footer]])]:border-b'
  )
})

const commandDialogContentRecipe = tv({
  base: cn(
    '[--space:--spacing(6)]',
    'z-[calc(50+var(--layer-index,0))]',
    'relative',
    'p-0',
    'max-h-full min-h-0 w-full min-w-0',
    'flex flex-col',
    'bg-popover',
    'text-popover-foreground',
    'rounded-2xl border-0 shadow-lg/5',
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

const commandDialogHeaderRecipe = tv({
  base: 'sr-only'
})

const commandItemRecipe = tv({
  base: cn(
    'relative',
    'py-1.5 ps-2',
    'text-sm',
    'flex w-full items-center gap-2',
    'max-sm:row-start-1',
    'rounded-xl',
    'select-none',
    'cursor-default',
    'outline-hidden',
    'data-[=checked]:bg-accent data-[state=checked]:text-accent-foreground',
    'data-highlighted:bg-accent data-highlighted:text-accent-foreground',
    'data-disabled:pointer-events-none data-disabled:opacity-64',
    "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0"
  ),
  defaultVariants: {
    showIndicator: true
  },
  variants: {
    showIndicator: {
      false: 'pe-2',
      true: 'pe-8'
    }
  }
})

const commandListRootRecipe = tv({
  base: 'max-h-72 min-h-0 flex-1'
})

const commandListWrapperRecipe = tv({
  base: 'flex-1 pr-2.5'
})

const commandEmptyRecipe = tv({
  base: 'py-6 text-center text-sm'
})

const commandFooterRecipe = tv({
  base: cn(
    'z-10',
    'flex items-center justify-between gap-2',
    '-m-2 mt-2 px-4 py-3',
    'bg-muted/48',
    'text-muted-foreground text-xs',
    'rounded-b-[calc(var(--radius-2xl,1rem)-1px)] border-t'
  )
})

const commandSeparatorRecipe = tv({
  base: 'my-2'
})

export {
  commandContentRecipe,
  commandDialogContentRecipe,
  commandDialogHeaderRecipe,
  commandEmptyRecipe,
  commandFooterRecipe,
  commandInputControlRecipe,
  commandInputGroupRecipe,
  commandInputSearchRecipe,
  commandItemRecipe,
  commandListRootRecipe,
  commandListWrapperRecipe,
  commandRootRecipe,
  commandSeparatorRecipe
}
