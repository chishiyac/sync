import { tv } from 'tailwind-variants'

const navUserTriggerRecipe = tv({
  base: 'transition-all'
})

const navUserIdentityRecipe = tv({
  base: 'grid min-w-0 flex-1 text-left text-sm'
})

const navUserNameRecipe = tv({
  base: 'text-foreground truncate text-xs font-medium'
})

const navUserUsernameRecipe = tv({
  base: 'text-muted-foreground truncate text-xs'
})

const navUserIconRecipe = tv({
  base: 'ml-auto size-4'
})

const navUserMenuRecipe = tv({
  base: 'bg-transparent'
})

const navUserErrorRecipe = tv({
  base: 'text-destructive px-2 text-xs'
})

export {
  navUserErrorRecipe,
  navUserIconRecipe,
  navUserIdentityRecipe,
  navUserMenuRecipe,
  navUserNameRecipe,
  navUserTriggerRecipe,
  navUserUsernameRecipe
}
