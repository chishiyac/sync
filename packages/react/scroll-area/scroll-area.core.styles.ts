import { cn, tv } from 'tailwind-variants'

const scrollAreaWrapperRecipe = tv({
  base: [
    'h-full',
    'rounded-[inherit]',
    'outline-none',
    'scrollbar-none',
    'outline-none'
  ]
})

const scrollAreaFadeRecipe = tv({
  base: cn(
    'pointer-events-none',
    'absolute inset-x-0 z-10',
    'h-(--fade-size)',
    'transition-opacity duration-150',
    'motion-reduce:transition-none!'
  ),
  defaultVariants: {
    visible: false
  },
  variants: {
    placement: {
      bottom: 'bottom-0 bg-linear-to-t from-card to-transparent',
      top: 'top-0 bg-linear-to-b from-card to-transparent'
    },
    visible: {
      false: 'opacity-0',
      true: 'opacity-100'
    }
  }
})

const scrollAreaRootRecipe = tv({
  base: 'relative size-full min-h-0 [--fade-size:1.5rem]'
})

const scrollAreaScrollbarRecipe = tv({
  base: cn(
    'flex',
    'm-1',
    'bg-transparent',
    'opacity-0 transition-opacity delay-300',
    'data-[orientation=vertical]:w-1.5',
    'data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:flex-col',
    'data-hover:opacity-100 data-hover:delay-0 data-hover:duration-100',
    'data-scrolling:opacity-100 data-scrolling:delay-0 data-scrolling:duration-100',
    'data-[orientation=vertical]:in-[[data-slot=scroll-area]:not([data-overflow-y])]:hidden',
    'data-[orientation=horizontal]:in-[[data-slot=scroll-area]:not([data-overflow-x])]:hidden',
    'motion-reduce:transition-none!'
  )
})

const scrollAreaThumbRecipe = tv({
  base: 'relative flex-1 rounded-full bg-foreground/20'
})

export {
  scrollAreaFadeRecipe,
  scrollAreaRootRecipe,
  scrollAreaScrollbarRecipe,
  scrollAreaThumbRecipe,
  scrollAreaWrapperRecipe
}
