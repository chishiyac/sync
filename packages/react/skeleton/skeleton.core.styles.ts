import { cn, tv } from 'tailwind-variants'

const skeletonRootRecipe = tv({
  base: cn(
    'rounded-md bg-muted',
    'animate-pulse',
    'motion-reduce:animate-none!'
  )
})

const skeletonCircleRecipe = tv({
  base: cn(
    'size-10',
    'shrink-0',
    'bg-muted',
    'rounded-full',
    'animate-pulse',
    'motion-reduce:animate-none!'
  )
})

const skeletonTextRecipe = tv({
  base: cn(
    'w-full',
    'flex flex-col gap-2',
    'animate-pulse',
    '**:[div]:h-4',
    'motion-reduce:animate-none!'
  )
})

const skeletonTextRowRecipe = tv({
  base: 'w-full rounded-md bg-muted last:w-3/4'
})

export {
  skeletonCircleRecipe,
  skeletonRootRecipe,
  skeletonTextRecipe,
  skeletonTextRowRecipe
}
