import { cn, tv } from 'tailwind-variants'

const avatarRootRecipe = tv({
  base: cn(
    'group/avatar',
    'relative',
    'size-8',
    'inline-flex shrink-0 items-center justify-center',
    'bg-background',
    'select-none font-medium text-xs',
    'rounded-full',
    'after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten'
  ),
  defaultVariants: {
    size: 'md'
  },
  variants: {
    size: {
      lg: 'size-10',
      md: 'size-8',
      sm: 'size-6'
    }
  }
})

const avatarImageRecipe = tv({
  base: cn(
    'size-full',
    'aspect-square object-cover',
    'rounded-[inherit]'
  )
})

const avatarFallbackRecipe = tv({
  base: cn(
    'size-full',
    'flex items-center justify-center',
    'bg-muted',
    'rounded-[inherit]',
    '[&_svg]:size-4 group-data-[size=lg]/avatar:[&_svg]:size-4.5 group-data-[size=sm]/avatar:[&_svg]:size-3'
  )
})

const avatarBadgeRecipe = tv({
  base: cn(
    'absolute inset-e-0 bottom-0 z-10',
    'flex items-center justify-center',
    'group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&_svg]:hidden',
    'group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&_svg]:size-2',
    'group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&_svg]:size-2'
  )
})

const avatarGroupRecipe = tv({
  base: cn(
    'flex -space-x-2',
    '**:data-[slot=avatar]:ring-2 **:data-[slot=avatar]:ring-background'
  )
})

const avatarGroupCountRecipe = tv({
  base: cn(
    'relative',
    'size-8',
    'flex shrink-0 items-center justify-center',
    'bg-muted',
    'select-none text-muted-foreground text-sm',
    'rounded-full',
    'ring-2 ring-background',
    '[&_svg]:size-4'
  )
})

export {
  avatarBadgeRecipe,
  avatarFallbackRecipe,
  avatarGroupCountRecipe,
  avatarGroupRecipe,
  avatarImageRecipe,
  avatarRootRecipe
}
