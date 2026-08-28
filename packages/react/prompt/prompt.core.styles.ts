import { cn, tv } from 'tailwind-variants'

const promptRootRecipe = tv({
  base: cn(
    'bg-card',
    'flex flex-col',
    'group/prompt',
    'p-3 gap-2 h-fit w-full',
    'border rounded-lg border-border'
  )
})

const promptInputRecipe = tv({
  base: cn(
    'text-sm',
    'focus:outline-0 field-sizing-content',
    'size-full min-h-7 max-h-24 resize-none'
  )
})

const promptActionsRecipe = tv({
  base: cn('w-full gap-2', 'inline-flex items-center justify-between')
})

export { promptActionsRecipe, promptInputRecipe, promptRootRecipe }
