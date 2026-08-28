import { cn, tv } from 'tailwind-variants'

const carouselRootRecipe = tv({
  base: cn(
    'relative',
    'flex flex-col',
    'data-[orientation=vertical]:w-max data-[orientation=vertical]:flex-row'
  )
})

const carouselControlRecipe = tv({
  base: cn(
    'flex items-center justify-between gap-2',
    'data-[orientation=vertical]:flex-col'
  )
})

const carouselPreviousRecipe = tv({
  base: cn(
    'absolute',
    'data-[orientation=horizontal]:-inset-s-12 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:-translate-y-1/2',
    'data-[orientation=vertical]:-top-12 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:rotate-90'
  )
})

const carouselNextRecipe = tv({
  base: cn(
    'absolute',
    'data-[orientation=horizontal]:-inset-e-12 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:-translate-y-1/2',
    'data-[orientation=vertical]:-bottom-12 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:rotate-90'
  )
})

const carouselIndicatorGroupRecipe = tv({
  base: cn(
    'flex justify-center gap-2',
    'data-[orientation=vertical]:flex-col'
  )
})

const carouselContentRecipe = tv({
  base: cn(
    'min-w-0',
    '-my-4 py-4',
    'flex flex-1 gap-4',
    'overflow-hidden rounded-lg'
  )
})

const carouselItemRecipe = tv({
  base: cn(
    'min-w-0',
    'shrink-0 grow-0 basis-full',
    '[&_img]:size-full [&_img]:rounded-lg [&_img]:object-cover'
  )
})

export {
  carouselContentRecipe,
  carouselControlRecipe,
  carouselIndicatorGroupRecipe,
  carouselItemRecipe,
  carouselNextRecipe,
  carouselPreviousRecipe,
  carouselRootRecipe
}
