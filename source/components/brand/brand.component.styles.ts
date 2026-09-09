import { tv } from 'tailwind-variants'

const brandRootRecipe = tv({
  base: 'size-4',
  defaultVariants: {
    color: 'default'
  },
  variants: {
    color: {
      default: 'text-white',
      primary: 'text-primary'
    }
  }
})

export { brandRootRecipe }
