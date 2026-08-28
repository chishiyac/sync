import { tv } from 'tailwind-variants'

const highlightRootRecipe = tv({
  base: 'box-decoration-clone rounded-md',
  defaultVariants: {
    variant: 'default'
  },
  variants: {
    variant: {
      default: 'text-primary bg-transparent font-medium px-0',
      surface: 'bg-primary/20 text-primary px-1'
    }
  }
})

export { highlightRootRecipe }
