import { tv } from 'tailwind-variants'

const alertDialogBodyRecipe = tv({
  base: 'in-[[data-slot=alert-dialog-content]:has([data-slot=alert-dialog-header])]:pt-0'
})

export { alertDialogBodyRecipe }
