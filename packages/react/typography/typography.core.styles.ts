import { tv } from 'tailwind-variants'

const typographyRecipe = tv({
  base: 'font-normal leading-[-2%]',
  defaultVariants: {
    break: 'default',
    color: 'default',
    ellipsis: false,
    size: 'default'
  },
  variants: {
    break: {
      default: '',
      nowrap: 'text-nowrap whitespace-nowrap',
      warp: 'text-wrap wrap-break-word'
    },
    color: {
      default: 'text-foreground',
      destructive: 'text-destructive',
      info: 'text-info',
      'muted-foreground': 'text-muted-foreground',
      primary: 'text-primary',
      success: 'text-success',
      warning: 'text-warning'
    },
    ellipsis: {
      false: '',
      true: 'text-ellipsis'
    },
    size: {
      '2xl':
        'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold',
      '3xl':
        'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold',
      '4xl':
        'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold',
      '5xl':
        'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold',
      '6xl':
        'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold',
      default: 'text-base font-medium',
      lg: 'text-lg font-medium',
      sm: 'text-sm font-medium',
      xl: 'text-xl font-semibold',
      xs: 'text-xs font-semibold'
    }
  }
})

export { typographyRecipe }
