import { cn, tv } from 'tailwind-variants'

const buttonGroupRootRecipe = tv({
  base: cn(
    'flex w-fit items-stretch',
    '*:not([class*"w"]):w-fi',
    '*:not([class*"flex"]):flex-',
    '*:focus-visible:relative *:focus-visible:z-10',
    'has-[>[data-slot=button-group]]:gap-2',
    'has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-e-md'
  ),
  defaultVariants: {
    orientation: 'horizontal'
  },
  variants: {
    orientation: {
      horizontal: cn(
        '[&>*:not(:first-child)]:rounded-l-none',
        '[&>*:not(:first-child)]:border-s-0',
        '[&>*:not(:last-child)]:rounded-e-none'
      ),
      vertical: cn(
        'flex-col',
        '[&>*:not(:first-child)]:rounded-t-none',
        '[&>*:not(:first-child)]:border-t-0',
        '[&>*:not(:last-child)]:rounded-b-none [&>*:not(:last-child)]:shadow-none'
      )
    }
  }
})

const buttonGroupTextRecipe = tv({
  base: cn(
    'flex items-center gap-2 px-4',
    'font-medium text-sm',
    'rounded-md border bg-muted shadow-xs',
    '[&_svg:not([class*="size-"])]:size-4 [&_svg]:pointer-events-none'
  )
})

const buttonGroupSeparatorRecipe = tv({
  base: cn(
    'relative',
    'self-stretch',
    'bg-input',
    'data-[orientation=vertical]:h-auto',
    'm-0!'
  )
})

export {
  buttonGroupRootRecipe,
  buttonGroupSeparatorRecipe,
  buttonGroupTextRecipe
}
