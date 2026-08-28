import { tv } from 'tailwind-variants'

const morphingSquareRootRecipe = tv({
  base: 'flex items-center justify-center gap-2',
  defaultVariants: {
    messagePlacement: 'bottom'
  },
  variants: {
    messagePlacement: {
      bottom: 'flex-col',
      left: 'flex-row-reverse',
      right: 'flex-row',
      top: 'flex-col-reverse'
    }
  }
})

const morphingSquareWrapperRecipe = tv({
  base: 'size-4 bg-primary'
})

export { morphingSquareRootRecipe, morphingSquareWrapperRecipe }
