import { tv } from 'tailwind-variants'

const appSidebarRootRecipe = tv({
  base: 'bg-sidebar/50 border-r-border h-screen border-r backdrop-blur-2xl'
})

const appSidebarMenuRecipe = tv({
  base: 'gap-0.5'
})

const appSidebarSeparatorRecipe = tv({
  base: 'mx-auto my-4'
})

export {
  appSidebarMenuRecipe,
  appSidebarRootRecipe,
  appSidebarSeparatorRecipe
}
