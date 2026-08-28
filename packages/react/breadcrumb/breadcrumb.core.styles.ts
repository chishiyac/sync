import { cn, tv } from 'tailwind-variants'

const breadcrumbListRecipe = tv({
  base: cn(
    'flex flex-wrap items-center gap-1.5 sm:gap-2.5',
    'wrap-break-word text-muted-foreground text-sm'
  )
})

const breadcrumbItemRecipe = tv({
  base: 'inline-flex items-center gap-1.5'
})

const breadcrumbLinkRecipe = tv({
  base: cn(
    'text-nowrap',
    'rounded-md border border-transparent',
    'transition-colors',
    'hover:text-foreground',
    'outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'motion-reduce:transition-none!'
  )
})

const breadcrumbPageRecipe = tv({
  base: 'font-normal text-foreground'
})

const breadcrumbSeparatorRecipe = tv({
  base: 'opacity-64 [&_svg]:size-4'
})

const breadcrumbEllipsisIconRecipe = tv({
  base: 'size-4'
})

export {
  breadcrumbEllipsisIconRecipe,
  breadcrumbItemRecipe,
  breadcrumbLinkRecipe,
  breadcrumbListRecipe,
  breadcrumbPageRecipe,
  breadcrumbSeparatorRecipe
}
