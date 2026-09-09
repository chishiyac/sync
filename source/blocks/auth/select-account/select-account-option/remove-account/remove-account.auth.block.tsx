import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@sync/react'

import {
  removeAccountContentRecipe,
  removeAccountPositionerRecipe
} from './remove-account.auth.styles'

type BlockProps = {
  accountName: string
  onConfirm?: () => void
  onOpenChange: (open: boolean) => void
  open: boolean
}

function Block({
  accountName,
  onConfirm,
  onOpenChange,
  open
}: BlockProps) {
  const handleConfirm = () => {
    onConfirm?.()
    onOpenChange(false)
  }

  return (
    <AlertDialog
      open={open}
      onOpenChange={(details) => onOpenChange(details.open)}
    >
      <AlertDialogContent
        showCloseButton={false}
        className={removeAccountContentRecipe()}
        positionerClassName={removeAccountPositionerRecipe()}
      >
        <AlertDialogHeader>
          <AlertDialogTitle>Remove account?</AlertDialogTitle>
          <AlertDialogDescription>
            This will remove {accountName} from your saved accounts.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirm}
            variant='destructive'
          >
            Remove
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export { Block as RemoveAccountAuthBlock }

export type { BlockProps as RemoveAccountAuthBlockProps }
