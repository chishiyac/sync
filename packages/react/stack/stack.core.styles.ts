import { tv } from 'tailwind-variants'

const stackRecipe = tv({
  base: 'relative flex',
  defaultVariants: {
    orientation: 'row',
    variant: 'default'
  },
  variants: {
    align: {
      'baseline-end': 'items-baseline-last',
      'baseline-start': 'items-baseline',
      center: 'items-center',
      default: 'items-start',
      end: 'items-end',
      'safe-center': 'items-center-safe',
      'safe-end': 'items-end-safe',
      stretch: 'items-stretch'
    },
    break: {
      default: 'flex-initial',
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse'
    },
    justify: {
      around: 'justify-around',
      baseline: 'justify-baseline',
      between: 'justify-between',
      center: 'justify-center',
      default: 'justify-normal',
      end: 'justify-end',
      'items-center': 'justify-items-center',
      'items-end': 'justify-items-end',
      'items-normal': 'justify-items-normal',
      'items-safe-center': 'justify-items-center-safe',
      'items-safe-end': 'justify-items-end-safe',
      'items-stretch': 'justify-items-stretch',
      'safe-center': 'justify-center-safe',
      'safe-end': 'justify-end-safe',
      'self-center': 'justify-self-center',
      'self-end': 'justify-self-end',
      'self-normal': 'justify-self-normal',
      'self-safe-center': 'justify-self-center-safe',
      'self-safe-end': 'justify-self-end-safe',
      'self-start': 'justify-self-start',
      'self-stretch': 'justify-self-stretch',
      start: 'justify-start',
      stretch: 'justify-stretch'
    },
    orientation: {
      column: 'flex-col',
      'column-reverse': 'flex-col-reverse',
      row: 'flex-row',
      'row-reverse': 'flex-row-reverse'
    },
    variant: {
      default: 'border-0 bg-transparent p-0 shadow-none outline-none',
      outline:
        'rounded-md border border-border bg-background shadow-sm',
      secondary: 'rounded-md border-0 bg-secondary shadow-sm'
    }
  }
})

export { stackRecipe }
