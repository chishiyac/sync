import { cn, tv } from 'tailwind-variants'

const tabsRootRecipe = tv({
  base: cn(
    'flex flex-col gap-2',
    'data-[orientation=vertical]:flex-row'
  )
})

const tabsListRecipe = tv({
  defaultVariants: {
    variant: 'default'
  },
  slots: {
    tabsList: cn(
      'relative z-0',
      'w-fit',
      'text-muted-foreground',
      'flex items-center justify-center gap-x-0.5',
      'data-[orientation=vertical]:flex-col'
    ),
    tabsListindicatorRecipe: cn(
      'absolute inset-s-0 bottom-0',
      'h-(--height) w-(--width)',
      'transition-[width,translate] duration-200 ease-in-out',
      'motion-reduce:transition-none!'
    )
  },
  variants: {
    variant: {
      default: {
        tabsList: cn('rounded-lg'),
        tabsListindicatorRecipe: cn('-z-1 rounded-lg bg-accent')
      },
      underline: {
        tabsList: cn(
          'data-[orientation=vertical]:px-1',
          'data-[orientation=horizontal]:py-1',
          '*:data-[slot=tabs-tab]:hover:bg-accent'
        ),
        tabsListindicatorRecipe: cn(
          'z-10',
          'absolute bottom-0',
          'bg-primary',
          'data-[orientation=horizontal]:h-0.5',
          'data-[orientation=vertical]:w-0.5'
        )
      }
    }
  }
})

const tabsListTriggerRecipe = tv({
  base: cn(
    'relative',
    'h-9 sm:h-8',
    'flex shrink-0 grow items-center justify-center gap-1.5',
    'px-[calc(--spacing(2.5)-1px)]',
    'whitespace-nowrap font-medium text-sm',
    'rounded-lg border border-transparent',
    'cursor-pointer',
    'transition-[color,background-color,box-shadow]',
    'data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start',
    'hover:text-foreground/72',
    'aria-selected:text-foreground',
    'outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32',
    'data-disabled:pointer-events-none data-disabled:opacity-64',
    "[&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:-mx-0.5 [&_svg]:shrink-0",
    'motion-reduce:transition-none!'
  )
})

const tabsContentRecipe = tv({
  base: 'flex-1 outline-none'
})

export {
  tabsContentRecipe,
  tabsListRecipe,
  tabsListTriggerRecipe,
  tabsRootRecipe
}
