import { cn, tv } from 'tailwind-variants'

const accordionItemRecipe = tv({
  base: 'flex flex-col border-b last:border-b-0'
})

const accordionTriggerRecipe = tv({
  base: cn(
    'flex flex-1 items-center justify-between gap-3',
    'py-4',
    'text-left font-medium text-sm',
    'rounded-md border border-transparent',
    'outline-none',
    'transition-all',
    'disabled:pointer-events-none disabled:opacity-64 disabled:grayscale',
    'focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32',
    '[&_[data-state=open]>svg]:rotate-180',
    'motion-reduce:transition-none!'
  )
})

const accordionTriggerChevronRecipe = tv({
  base: cn(
    'translate-y-0.5',
    'size-4',
    'shrink-0',
    'text-muted-foreground',
    'pointer-events-none',
    'transition-transform duration-300',
    'motion-reduce:transition-none!'
  )
})

const accordionContentRecipe = tv({
  base: cn(
    'overflow-hidden rounded-md text-sm',
    'data-[state=open]:animate-slide-down',
    'data-[state=closed]:animate-slide-up',
    'motion-reduce:animate-none!'
  )
})

const accordionWrapperRecipe = tv({
  base: 'pt-0 pb-4'
})

export {
  accordionContentRecipe,
  accordionItemRecipe,
  accordionTriggerChevronRecipe,
  accordionTriggerRecipe,
  accordionWrapperRecipe
}
