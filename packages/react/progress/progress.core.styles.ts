import { cn, tv } from 'tailwind-variants'

const progressRootRecipe = tv({
  base: cn(
    'flex flex-wrap gap-3',
    'data-[orientation=horizontal]:w-full',
    'data-[orientation=vertical]:-scale-y-100'
  )
})

const progressTrackRecipe = tv({
  base: cn(
    'bg-input',
    'rounded-full',
    'overflow-x-hidden',
    'data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full',
    'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2'
  )
})

const progressRangeRecipe = tv({
  base: cn(
    'bg-primary',
    'transition-all duration-300 ease-out',
    'data-[orientation=horizontal]:h-full',
    'data-[orientation=vertical]:h-full',
    'motion-reduce:animate-none! motion-reduce:transition-none!',
    'data-[state=indeterminate]:w-1/3 data-[state=indeterminate]:animate-indeterminate! data-[state=indeterminate]:duration-100'
  )
})

const progressValueRecipe = tv({
  base: 'ms-auto tabular-nums'
})

export {
  progressRangeRecipe,
  progressRootRecipe,
  progressTrackRecipe,
  progressValueRecipe
}
