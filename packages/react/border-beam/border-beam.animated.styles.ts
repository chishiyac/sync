import { cn, tv } from 'tailwind-variants'

const borderBeamRootRecipe = tv({
  base: 'pointer-events-none absolute inset-0 rounded-[inherit] border-(length:--border-beam-width) border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect [mask-clip:padding-box,border-box]'
})

const borderBeamWrapperRecipe = tv({
  base: cn(
    'absolute aspect-square',
    'bg-linear-to-l from-(--color-from) via-(--color-to) to-transparent'
  )
})

export { borderBeamRootRecipe, borderBeamWrapperRecipe }
