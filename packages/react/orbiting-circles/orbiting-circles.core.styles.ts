import { cn, tv } from 'tailwind-variants'

const orbitingCirclesPathRecipe = tv({
  base: 'pointer-events-none absolute inset-0 size-full'
})

const orbitingCirclesPathCircleRecipe = tv({
  base: 'stroke-1 stroke-black/10 dark:stroke-white/10'
})

const orbitingCirclesItemRecipe = tv({
  base: cn(
    'animate-orbit absolute top-[calc(50%-var(--icon-size)/2)] left-[calc(50%-var(--icon-size)/2)] flex size-(--icon-size)',
    '[animation-delay:var(--delay)]',
    'transform-gpu items-center justify-center rounded-full'
  ),
  defaultVariants: {
    reverse: false
  },
  variants: {
    reverse: {
      false: '',
      true: '[animation-direction:reverse]'
    }
  }
})

export {
  orbitingCirclesItemRecipe,
  orbitingCirclesPathCircleRecipe,
  orbitingCirclesPathRecipe
}
