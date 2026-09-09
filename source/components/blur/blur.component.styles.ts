import { tv } from 'tailwind-variants'

const blurRootRecipe = tv({
  base: 'absolute to-background blur-sm z-50 pointer-events-none from-transparent',
  variants: {
    side: {
      bottom: 'bottom-0 left-0 bg-linear-to-b w-full h-10',
      left: 'left-0 top-0 bg-linear-to-l h-full w-10',
      right: 'right-0 top-0 bg-linear-to-r h-full w-10',
      top: 'top-0 left-0 bg-linear-to-t w-full h-10'
    }
  }
})

export { blurRootRecipe }
