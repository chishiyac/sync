import { cn, tv } from 'tailwind-variants'

const collapsibleRootRecipe = tv({
  base: 'group/collapsible'
})
const collapsibleTriggerRecipe = tv({
  base: cn(
    'cursor-pointer',
    'data-disabled:pointer-events-none data-disabled:opacity-64',
    'has-data-[slot=collapsible-indicator]:[button]:justify-between'
  )
})

const collapsibleContentRecipe = tv({
  base: cn(
    'h-(--collapsed-height)',
    'group-data-partial-collapse/collapsible:h-full',
    'transition-[height] duration-200',
    'overflow-hidden',
    'data-[state=open]:animate-expand',
    'data-[state=closed]:animate-collapse',
    'motion-reduce:animate-none! motion-reduce:transition-none!'
  )
})
const collapsibleIndicatorRecipe = tv({
  base: 'data-[state=open]:[&_svg]:rotate-180'
})
const collapsibleIndicatorChevronRecipe = tv({
  base: 'transition-transform duration-200 motion-reduce:transition-none!'
})

export {
  collapsibleContentRecipe,
  collapsibleIndicatorChevronRecipe,
  collapsibleIndicatorRecipe,
  collapsibleRootRecipe,
  collapsibleTriggerRecipe
}
