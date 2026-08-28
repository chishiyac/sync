import { tv } from 'tailwind-variants'

const hoverCardRecipe = tv({
  base: ''
})

const hoverCardArrowTipRecipe = tv({
  base: 'border-s border-t'
})

const hoverCardContentRecipe = tv({
  base: 'z-50 w-64 p-4 bg-popover text-popover-foreground origin-(--transform-origin) rounded-xl border shadow-lg/5 outline-hidden data-[state=closed]:zoom-out-[98%] data-[state=open]:zoom-in-[98%] data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=closed]:animate-out data-[state=open]:animate-in data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-end-2 data-[placement=right]:slide-in-from-start-2 data-[placement=top]:slide-in-from-bottom-2 motion-reduce:animate-none!'
})

export {
  hoverCardArrowTipRecipe,
  hoverCardContentRecipe,
  hoverCardRecipe
}
