import { cn, tv } from 'tailwind-variants'

const switchRootRecipe = tv({
  base: cn(
    'group/switch',
    '[--thumb-size:--spacing(5)] sm:[--thumb-size:--spacing(4)]',
    'h-[calc(var(--thumb-size)+2px)] w-[calc(var(--thumb-size)*2-2px)]',
    'p-px cursor-pointer',
    'inline-flex shrink-0 items-center',
    'rounded-full border border-transparent',
    'transition-all',
    'outline-none [[data-focus-visible],[data-invalid]]:ring-[3px]',
    'data-focus-visible:border-primary data-focus-visible:ring-ring/32',
    'data-invalid:border-destructive data-invalid:ring-destructive/24',
    'dark:data-invalid:border-destructive-foreground dark:data-invalid:ring-destructive-foreground/20',
    'data-[state=checked]:bg-primary',
    'data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input',
    'data-disabled:pointer-events-none data-disabled:opacity-64',
    'motion-reduce:transition-none!'
  )
})

const switchControlRecipe = tv({
  base: 'flex size-full items-center'
})

const switchThumbRecipe = tv({
  base: cn(
    'block',
    'aspect-square h-full w-auto',
    'bg-background',
    'rounded-full ring-0',
    'pointer-events-none',
    'transition-transform',
    'data-[state=checked]:translate-x-[calc(var(--thumb-size)-4px)]',
    'dark:data-[state=checked]:bg-primary-foreground',
    'data-[state=unchecked]:translate-x-0',
    'dark:data-[state=unchecked]:bg-foreground',
    'motion-reduce:transition-none!'
  )
})

export { switchControlRecipe, switchRootRecipe, switchThumbRecipe }
