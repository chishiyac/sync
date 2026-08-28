import { cn, tv } from 'tailwind-variants'

const dialogStackTriggerRecipe = tv({
  base: cn(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm',
    'ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    'bg-primary text-primary-foreground hover:bg-primary/90',
    'h-10 px-4 py-2'
  )
})

const dialogStackOverlayRecipe = tv({
  base: cn(
    'fixed inset-0 z-[calc(100+var(--layer-index,0))] bg-black/32 backdrop-blur-xs',
    'data-[state=closed]:animate-out data-[state=open]:animate-in',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
  )
})

const dialogStackWrapperRecipe = tv({
  base: cn(
    'flex-1 p-(--space) overflow-auto in-[[data-slot=dialog-stack-content]:has([data-slot=dialog-stack-header])]:pt-0 in-[[data-slot=dialog-stack-content]:has([data-slot=dialog-stack-footer]:not(.border-t))]:pb-1'
  )
})

const dialogStackBodyRecipe = tv({
  base: cn(
    'pointer-events-none fixed inset-0 z-[calc(101+var(--layer-index,0))] mx-auto flex w-full max-w-lg flex-col items-center justify-center'
  )
})

const dialogStackBodyInnerRecipe = tv({
  base: cn(
    'pointer-events-auto relative flex w-full flex-col items-center justify-center'
  )
})

const dialogStackContentRecipe = tv({
  base: cn(
    'h-auto w-full [--space:--spacing(6)] rounded-lg border bg-background shadow-lg transition-all duration-300'
  )
})

const dialogStackContentInnerRecipe = tv({
  base: 'size-full transition-all duration-300',
  variants: {
    active: {
      false: 'pointer-events-none select-none opacity-0',
      true: ''
    }
  }
})

const dialogStackTitleRecipe = tv({
  base: cn('font-heading font-semibold text-lg leading-none')
})

const dialogStackDescriptionRecipe = tv({
  base: cn('text-muted-foreground text-sm')
})

const dialogStackHeaderRecipe = tv({
  base: cn(
    'p-(--space) pb-0',
    'flex flex-col gap-2',
    'in-[[data-slot=dialog-stack-content]:has([data-slot=dialog-stack-wrapper])]:pb-3'
  )
})

const dialogStackFooterRecipe = tv({
  base: cn(
    'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
    'sm:rounded-b-[calc(var(--radius-2xl)-1px)]',
    'px-(--space) py-4',
    'bg-muted/48',
    'border-t'
  )
})

const dialogStackNavigationButtonRecipe = tv({
  base: cn(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm',
    'ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
  )
})

export {
  dialogStackBodyInnerRecipe,
  dialogStackBodyRecipe,
  dialogStackContentInnerRecipe,
  dialogStackContentRecipe,
  dialogStackDescriptionRecipe,
  dialogStackFooterRecipe,
  dialogStackHeaderRecipe,
  dialogStackNavigationButtonRecipe,
  dialogStackOverlayRecipe,
  dialogStackTitleRecipe,
  dialogStackTriggerRecipe,
  dialogStackWrapperRecipe
}
