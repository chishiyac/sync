import { createToaster } from '@ark-ui/react'

const toast = createToaster({
  max: 3,
  overlap: true,
  placement: 'bottom-end'
})

export { toast }
