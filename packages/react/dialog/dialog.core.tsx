'use client'

import {
  Dialog as ArkDialog,
  useDialogContext
} from '@ark-ui/react/dialog'
import { ark } from '@ark-ui/react/factory'
import { Portal } from '@ark-ui/react/portal'
import { XIcon } from 'lucide-react'
import React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import type { ButtonProps } from '../button'
import { Button } from '../button'
import { ScrollArea } from '../scroll-area'
import {
  dialogBodyRecipe,
  dialogCloseButtonRecipe,
  dialogContentRecipe,
  dialogDescriptionRecipe,
  dialogFooterRecipe,
  dialogHeaderRecipe,
  dialogOverlayRecipe,
  dialogPositionerRecipe,
  dialogTitleRecipe
} from './dialog.core.styles'

/**
 * Props for the Dialog Context component.
 *
 * @example
 *   type Example = DialogContextProps
 */
type DialogContextProps = {
  /**
   * Used internally to show or hide overlay
   *
   * @default true
   */
  modal?: boolean
}

/**
 * Props for the Dialog component.
 *
 * @example
 *   type Example = DialogProps
 */
type DialogProps = React.ComponentProps<typeof ArkDialog.Root>

/**
 * Props for the Dialog Content component.
 *
 * @example
 *   type Example = DialogContentProps
 */
type DialogContentProps = React.ComponentProps<
  typeof ArkDialog.Content
> &
  VariantProps<typeof dialogContentRecipe> & {
    /**
     * Stick the dialog to the bottom of the screen on mobile
     *
     * @default true
     */
    bottomStickOnMobile?: boolean
    /**
     * Show close button at the top right corner
     *
     * @default true
     */
    showCloseButton?: boolean
  }

/**
 * Props for the Dialog Body component.
 *
 * @example
 *   type Example = DialogBodyProps
 */
type DialogBodyProps = React.ComponentProps<typeof ark.div> & {
  /**
   * Add a fade effect to the scroll area
   *
   * @default false
   */
  scrollFade?: boolean
}

/**
 * Props for the Dialog Header component.
 *
 * @example
 *   type Example = DialogHeaderProps
 */
type DialogHeaderProps = React.ComponentProps<typeof ark.div> & {
  /** The description of the dialog */
  description?: string
  /** The title of the dialog */
  title?: string
}

/**
 * Props for the Dialog Trigger component.
 *
 * @example
 *   type Example = DialogTriggerProps
 */
type DialogTriggerProps = React.ComponentProps<
  typeof ArkDialog.Trigger
>

/**
 * Props for the Dialog Positioner component.
 *
 * @example
 *   type Example = DialogPositionerProps
 */
type DialogPositionerProps = React.ComponentProps<
  typeof ArkDialog.Positioner
>

/**
 * Props for the Dialog Positioner Recipe component.
 *
 * @example
 *   type Example = DialogPositionerRecipeProps
 */
type DialogPositionerRecipeProps = VariantProps<
  typeof dialogPositionerRecipe
>

/**
 * Props for the Dialog Title component.
 *
 * @example
 *   type Example = DialogTitleProps
 */
type DialogTitleProps = React.ComponentProps<typeof ArkDialog.Title>

/**
 * Props for the Dialog Description component.
 *
 * @example
 *   type Example = DialogDescriptionProps
 */
type DialogDescriptionProps = React.ComponentProps<
  typeof ArkDialog.Description
>

/**
 * Props for the Dialog Close component.
 *
 * @example
 *   type Example = DialogCloseProps
 */
type DialogCloseProps = React.ComponentProps<
  typeof ArkDialog.CloseTrigger
> &
  ButtonProps

/**
 * Props for the Dialog Footer component.
 *
 * @example
 *   type Example = DialogFooterProps
 */
type DialogFooterProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Dialog Overlay component.
 *
 * @example
 *   type Example = DialogOverlayProps
 */
type DialogOverlayProps = React.ComponentProps<
  typeof ArkDialog.Backdrop
>

const useDialog = useDialogContext

const DialogContext = React.createContext({} as DialogContextProps)

/**
 * Renders the Dialog component.
 *
 * @example
 *   ;<Dialog />
 */
function Dialog({
  modal = true,
  lazyMount = true,
  unmountOnExit = true,
  ...props
}: DialogProps) {
  return (
    <DialogContext.Provider value={{ modal }}>
      <ArkDialog.Root
        lazyMount={lazyMount}
        modal={modal}
        unmountOnExit={unmountOnExit}
        {...props}
      />
    </DialogContext.Provider>
  )
}

/**
 * Renders the Dialog Positioner component.
 *
 * @example
 *   ;<DialogPositioner />
 */
function DialogPositioner({
  bottomStickOnMobile = false,
  className,
  ...props
}: DialogPositionerProps & DialogPositionerRecipeProps) {
  return (
    <ArkDialog.Positioner
      className={cn(
        dialogPositionerRecipe({ bottomStickOnMobile }),
        className
      )}
      data-slot='dialog-positioner'
      {...props}
    />
  )
}

/**
 * Renders the Dialog Body component.
 *
 * @example
 *   ;<DialogBody />
 */
function DialogBody({
  scrollFade = false,
  className,
  ...props
}: DialogBodyProps) {
  return (
    <ScrollArea scrollFade={scrollFade}>
      <ark.div
        className={cn(dialogBodyRecipe(), className)}
        data-slot='dialog-body'
        {...props}
      />
    </ScrollArea>
  )
}

/**
 * Renders the Dialog Title component.
 *
 * @example
 *   ;<DialogTitle />
 */
function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <ArkDialog.Title
      className={cn(dialogTitleRecipe(), className)}
      data-slot='dialog-title'
      {...props}
    />
  )
}

/**
 * Renders the Dialog Description component.
 *
 * @example
 *   ;<DialogDescription />
 */
function DialogDescription({
  className,
  ...props
}: DialogDescriptionProps) {
  return (
    <ArkDialog.Description
      className={cn(dialogDescriptionRecipe(), className)}
      data-slot='dialog-description'
      {...props}
    />
  )
}

/**
 * Renders the Dialog Header component.
 *
 * @example
 *   ;<DialogHeader />
 */
function DialogHeader({
  className,
  title,
  description,
  children,
  ...props
}: DialogHeaderProps) {
  return (
    <ark.div
      className={cn(dialogHeaderRecipe(), className)}
      data-slot='dialog-header'
      {...props}
    >
      {!!title && <DialogTitle>{title}</DialogTitle>}

      {!!description && (
        <DialogDescription>{description}</DialogDescription>
      )}

      {!title && typeof children === 'string' ? (
        <DialogTitle>{children}</DialogTitle>
      ) : (
        children
      )}
    </ark.div>
  )
}

/**
 * Renders the Dialog Trigger component.
 *
 * @example
 *   ;<DialogTrigger />
 */
function DialogTrigger({ ...props }: DialogTriggerProps) {
  return <ArkDialog.Trigger {...props} />
}

/**
 * Renders the Dialog Close component.
 *
 * @example
 *   ;<DialogClose />
 */
function DialogClose({ ...props }: DialogCloseProps) {
  return (
    <ArkDialog.CloseTrigger
      data-slot='dialog-close-trigger'
      {...props}
    >
      <Button
        aria-label='Close'
        size='icon-xs'
        variant='outline'
        className={dialogCloseButtonRecipe()}
        {...props}
      >
        <XIcon />
      </Button>
    </ArkDialog.CloseTrigger>
  )
}

/**
 * Renders the Dialog Footer component.
 *
 * @example
 *   ;<DialogFooter />
 */
function DialogFooter({ className, ...props }: DialogFooterProps) {
  return (
    <ark.div
      className={cn(dialogFooterRecipe(), className)}
      data-slot='dialog-footer'
      {...props}
    />
  )
}

/**
 * Returns the shared Dialog state.
 *
 * @example
 *   const dialog = _useDialog()
 */
function _useDialog() {
  const context = React.useContext(DialogContext)
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider')
  }
  return context
}

/**
 * Renders the Dialog Overlay component.
 *
 * @example
 *   ;<DialogOverlay />
 */
function DialogOverlay({ className, ...props }: DialogOverlayProps) {
  const { modal } = _useDialog()
  if (!modal) {
    return null
  }
  return (
    <ArkDialog.Backdrop
      className={cn(dialogOverlayRecipe(), className)}
      data-slot='dialog-overlay'
      {...props}
    />
  )
}

/**
 * Renders the Dialog Content component.
 *
 * @example
 *   ;<DialogContent />
 */
function DialogContent({
  showCloseButton = true,
  bottomStickOnMobile = true,
  size = 'md',
  className,
  children,
  ...props
}: DialogContentProps) {
  return (
    <Portal>
      <DialogOverlay />
      <DialogPositioner bottomStickOnMobile={bottomStickOnMobile}>
        <ArkDialog.Content
          className={cn(
            dialogContentRecipe({ bottomStickOnMobile, size }),
            className
          )}
          data-slot='dialog-content'
          {...props}
        >
          {children}
          {showCloseButton && <DialogClose />}
        </ArkDialog.Content>
      </DialogPositioner>
    </Portal>
  )
}

export {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPositioner,
  DialogTitle,
  DialogTrigger,
  useDialog
}

export type {
  DialogBodyProps,
  DialogCloseProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogOverlayProps,
  DialogPositionerProps,
  DialogPositionerRecipeProps,
  DialogProps,
  DialogTitleProps,
  DialogTriggerProps
}
