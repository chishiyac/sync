import { cn, tv } from 'tailwind-variants'

const buttonRootRecipe = tv({
  base: cn(
    'group/button',
    'relative',
    'inline-flex shrink-0 items-center justify-center gap-2',
    'whitespace-nowrap font-medium text-sm',
    'rounded-lg',
    'transition-all',
    'outline-none focus-visible:ring-[3px] focus-visible:ring-ring/32',
    'disabled:shadow-none disabled:select-none disabled:pointer-events-none disabled:opacity-64 disabled:bg-secondary disabled:text-secondary-foreground',
    'data-disabled:shadow-none data-disabled:select-none data-disabled:pointer-events-none data-disabled:opacity-64 data-disabled:bg-secondary data-disabled:text-secondary-foreground',
    'aria-disabled:shadow-none aria-disabled:select-none aria-disabled:pointer-events-none aria-disabled:opacity-64 aria-disabled:bg-secondary aria-disabled:text-secondary-foreground',
    'data-[state=loading]:shadow-none data-[state=loading]:select-none data-[state=loading]:pointer-events-none data-[state=loading]:bg-secondary data-[state=loading]:text-secondary-foreground',
    'aria-invalid:border-destructive aria-invalid:ring-destructive/24',
    '[&_svg:not([class*="size-"])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0',
    'motion-reduce:transition-none!'
  ),
  defaultVariants: {
    clickEffect: true,
    pill: false,
    size: 'md',
    variant: 'default'
  },
  variants: {
    clickEffect: {
      true: 'active:not-aria-[haspopup]:scale-[0.99]'
    },
    pill: {
      true: cn(
        'rounded-full',
        'has-[>svg]:data-[size=xs]:pe-3',
        'has-[>svg]:data-[size=sm]:pe-3.5',
        'has-[>svg]:data-[size=md]:pe-4',
        'has-[>svg]:data-[size=lg]:pe-4.5',
        'has-[>svg]:data-[size=xl]:pe-5'
      )
    },
    size: {
      'icon-lg': 'size-9',
      'icon-md': 'size-8',
      'icon-sm': 'size-7',
      'icon-xl': 'size-10 [&_svg:not([class*="size-"])]:size-5',
      'icon-xs': 'size-6 rounded-lg',
      lg: cn('h-9', 'px-3.5'),
      md: cn('h-8', 'px-3', 'py-2'),
      sm: cn(
        'h-7',
        'px-2.5',
        'gap-1.5',
        '[&_svg:not([class*="size-"])]:size-3.5'
      ),
      xl: cn('h-10', 'text-base', 'px-4'),
      xs: cn(
        'h-6',
        'gap-1.5',
        'px-2',
        'text-xs',
        'rounded-sm',
        '[&_svg:not([class*="size-"])]:size-2.5'
      )
    },
    variant: {
      default: cn(
        'bg-primary',
        'border border-transparent shadow-primary/24 shadow-sm',
        'text-primary-foreground',
        'hover:bg-primary/90',
        'focus-visible:border-background'
      ),
      destructive: cn(
        'bg-destructive',
        'text-white',
        'border border-transparent shadow-destructive/24 shadow-sm',
        'hover:bg-destructive/90',
        'focus-visible:border-background focus-visible:ring-destructive-foreground/32'
      ),
      ghost: cn(
        'hover:bg-accent hover:text-accent-foreground',
        'border border-transparent',
        'focus-visible:border-primary'
      ),
      link: cn(
        'text-primary',
        'underline-offset-4',
        'border border-transparent',
        'hover:underline',
        'focus-visible:border-primary'
      ),
      'link-native': cn(
        'px-0',
        'hover:underline',
        'border-0 shadow-none',
        'bg-transparent hover:bg-transparent',
        'text-foreground hover:text-foreground/90'
      ),
      outline: cn(
        'bg-transparent',
        'text-foreground',
        'border border-input shadow-sm/5',
        'hover:bg-accent hover:text-accent-foreground',
        'dark:bg-input/32 dark:hover:bg-input/64',
        'focus-visible:border-primary'
      ),
      secondary: cn(
        'bg-secondary',
        'text-secondary-foreground',
        'border border-transparent',
        'focus-visible:border-primary',
        'hover:bg-secondary/80'
      )
    }
  }
})

const buttonLoaderRecipe = tv({
  base: 'inline-flex gap-1 items-center justify-center'
})

export { buttonLoaderRecipe, buttonRootRecipe }
