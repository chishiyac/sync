import { cn, tv } from 'tailwind-variants'

const floatRecipe = tv({
  base: cn('absolute z-10'),
  defaultVariants: {
    placement: 'top-end'
  },
  variants: {
    placement: {
      'bottom-center':
        'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
      'bottom-end':
        'inset-e-0 bottom-0 translate-x-1/2 translate-y-1/2',
      'bottom-start':
        'inset-s-0 bottom-0 -translate-x-1/2 translate-y-1/2',
      'middle-center': '-translate-1/2 top-1/2 left-1/2',
      'middle-end':
        'inset-e-0 top-1/2 translate-x-1/2 -translate-y-1/2',
      'middle-start': '-translate-1/2 inset-s-0 top-1/2',
      'top-center': '-translate-1/2 top-0 left-1/2',
      'top-end': 'inset-e-0 top-0 translate-x-1/2 -translate-y-1/2',
      'top-start': '-translate-1/2 inset-s-0 top-0'
    }
  }
})

export { floatRecipe }
