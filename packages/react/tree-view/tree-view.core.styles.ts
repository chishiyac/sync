import { cn, tv } from 'tailwind-variants'

const treeViewControlRecipe = tv({
  base: cn(
    'peer',
    'relative my-px',
    'flex items-center gap-(--item-gap)',
    'min-h-8 w-full',
    'py-(--padding-block) ps-[calc(var(--padding-inline)+var(--indentation)*(var(--depth)-1)+var(--icon-size)*(var(--depth)-1)*0.5)] pe-(--padding-inline)',
    'bg-transparent',
    'select-none text-start font-inherit text-muted-foreground',
    'rounded-md border-none',
    'cursor-pointer',
    'hover:bg-muted hover:text-foreground',
    'outline-none focus-visible:outline-2 focus-visible:outline-ring focus-visible:-outline-offset-2',
    'data-selected:bg-accent data-selected:text-accent-foreground',
    'data-focus:bg-muted data-focus:text-foreground',
    'data-disabled:opacity-64 data-disabled:grayscale',
    '[&_svg]:size-4 [&_svg]:shrink-0'
  )
})

const treeViewRootRecipe = tv({
  base: cn(
    '[--indentation:--spacing(4)] [--item-gap:--spacing(2)]',
    '[--padding-block:--spacing(1.5)] [--padding-inline:--spacing(3)]',
    '[--icon-size:--spacing(4)]',
    'w-full',
    'flex flex-col gap-2',
    'text-foreground'
  )
})

const treeViewLabelRecipe = tv({
  base: 'select-none font-medium text-foreground text-sm'
})

const treeViewTreeRecipe = tv({
  base: cn(
    'flex flex-col text-sm',
    '[&_svg]:size-(--icon-size) [&_svg]:shrink-0'
  )
})

const treeViewBranchRecipe = tv({
  base: 'relative'
})

const treeViewBranchIndicatorRecipe = tv({
  base: cn(
    'inline-flex shrink-0 items-center justify-center',
    'text-muted-foreground',
    'origin-center transition-transform duration-150',
    'data-[state=open]:rotate-90',
    '[&_svg]:size-3.5 [&_svg]:shrink-0',
    'motion-reduce:transition-none!'
  )
})

const treeViewItemInputRecipe = tv({
  base: cn(
    'h-full min-w-0',
    'flex-1',
    '-my-px px-2 py-0',
    'text-sm',
    'border-primary bg-popover text-foreground',
    'rounded-md border',
    'selection:bg-primary/20 selection:text-foreground',
    'outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32'
  )
})

const treeViewItemIconRecipe = tv({
  base: 'in-[[data-slot=tree-view-item]:has([data-slot=tree-view-checkbox])]:hidden'
})

const treeViewItemTitleRecipe = tv({
  base: cn(
    'flex flex-1 items-center gap-(--item-gap)',
    'text-ellipsis whitespace-nowrap',
    'overflow-hidden'
  )
})

const treeViewBranchIndentGuideRecipe = tv({
  base: cn(
    'absolute z-1',
    'h-full w-px',
    'bg-border',
    'inset-s-[calc(var(--padding-inline)+var(--indentation)*(var(--depth)-1)+var(--icon-size)*0.5*var(--depth))]',
    'pointer-events-none'
  )
})

const treeViewBranchTextRecipe = tv({
  base: 'flex flex-1 items-center gap-(--item-gap) overflow-hidden text-ellipsis whitespace-nowrap'
})

const treeViewBranchContentRecipe = tv({
  base: cn(
    'relative overflow-hidden',
    'data-[state=open]:animate-[expand_150ms_ease-out]',
    'data-[state=closed]:animate-[collapse_150ms_ease-out]',
    'motion-reduce:animate-none!'
  )
})

const treeViewCheckboxRecipe = tv({
  base: '[&_svg]:size-3!'
})

export {
  treeViewBranchContentRecipe,
  treeViewBranchIndentGuideRecipe,
  treeViewBranchIndicatorRecipe,
  treeViewBranchRecipe,
  treeViewBranchTextRecipe,
  treeViewCheckboxRecipe,
  treeViewControlRecipe,
  treeViewItemIconRecipe,
  treeViewItemInputRecipe,
  treeViewItemTitleRecipe,
  treeViewLabelRecipe,
  treeViewRootRecipe,
  treeViewTreeRecipe
}
