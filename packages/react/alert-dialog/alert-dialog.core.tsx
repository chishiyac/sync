'use client'

import type React from 'react'
import { cn } from 'tailwind-variants'

import type { ButtonProps } from '../button'
import { Button } from '../button'
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../dialog'
import { alertDialogBodyRecipe } from './alert-dialog.core.styles'

/**
 * Props for the Alert Dialog Action component.
 *
 * @example
 *   type Example = AlertDialogActionProps
 */
type AlertDialogActionProps = React.ComponentProps<
  typeof DialogClose
> &
  Omit<ButtonProps, 'variant'> & {
    /**
     * The variant of the action button
     *
     * @default 'default'
     */
    variant?: AlertDialogActionVariant
  }

/**
 * Props for the Alert Dialog Cancel component.
 *
 * @example
 *   type Example = AlertDialogCancelProps
 */
type AlertDialogCancelProps = React.ComponentProps<
  typeof DialogClose
> &
  Omit<ButtonProps, 'variant'>

/**
 * Props for the Alert Dialog component.
 *
 * @example
 *   type Example = AlertDialogProps
 */
type AlertDialogProps = React.ComponentProps<typeof Dialog>

/**
 * Props for the Alert Dialog Trigger component.
 *
 * @example
 *   type Example = AlertDialogTriggerProps
 */
type AlertDialogTriggerProps = React.ComponentProps<
  typeof DialogTrigger
>

/**
 * Props for the Alert Dialog Content component.
 *
 * @example
 *   type Example = AlertDialogContentProps
 */
type AlertDialogContentProps = React.ComponentProps<
  typeof DialogContent
>

/**
 * Props for the Alert Dialog Body component.
 *
 * @example
 *   type Example = AlertDialogBodyProps
 */
type AlertDialogBodyProps = React.ComponentProps<typeof DialogBody>

/**
 * Props for the Alert Dialog Header component.
 *
 * @example
 *   type Example = AlertDialogHeaderProps
 */
type AlertDialogHeaderProps = React.ComponentProps<
  typeof DialogHeader
>

/**
 * Props for the Alert Dialog Title component.
 *
 * @example
 *   type Example = AlertDialogTitleProps
 */
type AlertDialogTitleProps = React.ComponentProps<typeof DialogTitle>

/**
 * Props for the Alert Dialog Description component.
 *
 * @example
 *   type Example = AlertDialogDescriptionProps
 */
type AlertDialogDescriptionProps = React.ComponentProps<
  typeof DialogDescription
>
/**
 * Props for the Alert Dialog Footer component.
 *
 * @example
 *   type Example = AlertDialogFooterProps
 */
type AlertDialogFooterProps = React.ComponentProps<
  typeof DialogFooter
>

/**
 * Supported alert dialog action variants.
 *
 * @example
 *   type Example = AlertDialogActionVariant
 */
type AlertDialogActionVariant = 'default' | 'destructive'

/**
 * Renders the Alert Dialog component.
 *
 * @example
 *   ;<AlertDialog />
 */
function AlertDialog({ ...props }: AlertDialogProps) {
  return (
    <Dialog
      data-slot='alert-dialog-root'
      role='alertdialog'
      {...props}
    />
  )
}

/**
 * Renders the Alert Dialog Trigger component.
 *
 * @example
 *   ;<AlertDialogTrigger />
 */
function AlertDialogTrigger({ ...props }: AlertDialogTriggerProps) {
  return <DialogTrigger data-slot='alert-dialog-trigger' {...props} />
}

/**
 * Renders the Alert Dialog Content component.
 *
 * @example
 *   ;<AlertDialogContent />
 */
function AlertDialogContent({ ...props }: AlertDialogContentProps) {
  return (
    <DialogContent
      data-slot='alert-dialog-content'
      showCloseButton={false}
      {...props}
    />
  )
}

/**
 * Renders the Alert Dialog Body component.
 *
 * @example
 *   ;<AlertDialogBody />
 */
function AlertDialogBody({
  className,
  ...props
}: AlertDialogBodyProps) {
  return (
    <DialogBody
      className={cn(alertDialogBodyRecipe(), className)}
      data-slot='alert-dialog-body'
      {...props}
    />
  )
}

/**
 * Renders the Alert Dialog Header component.
 *
 * @example
 *   ;<AlertDialogHeader />
 */
function AlertDialogHeader({ ...props }: AlertDialogHeaderProps) {
  return <DialogHeader data-slot='alert-dialog-header' {...props} />
}

/**
 * Renders the Alert Dialog Title component.
 *
 * @example
 *   ;<AlertDialogTitle />
 */
function AlertDialogTitle({ ...props }: AlertDialogTitleProps) {
  return <DialogTitle data-slot='alert-dialog-title' {...props} />
}

/**
 * Renders the Alert Dialog Description component.
 *
 * @example
 *   ;<AlertDialogDescription />
 */
function AlertDialogDescription({
  ...props
}: AlertDialogDescriptionProps) {
  return (
    <DialogDescription
      data-slot='alert-dialog-description'
      {...props}
    />
  )
}

/**
 * Renders the Alert Dialog Footer component.
 *
 * @example
 *   ;<AlertDialogFooter />
 */
function AlertDialogFooter({ ...props }: AlertDialogFooterProps) {
  return <DialogFooter data-slot='alert-dialog-footer' {...props} />
}

/**
 * Renders the Alert Dialog Action component.
 *
 * @example
 *   ;<AlertDialogAction />
 */
function AlertDialogAction({
  variant = 'default',
  ...props
}: AlertDialogActionProps) {
  return <Button variant={variant} {...props} />
}

/**
 * Renders the Alert Dialog Cancel component.
 *
 * @example
 *   ;<AlertDialogCancel />
 */
function AlertDialogCancel({ ...props }: AlertDialogCancelProps) {
  return <DialogClose data-slot='alert-dialog-cancel' {...props} />
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
}

export type {
  AlertDialogActionProps,
  AlertDialogActionVariant,
  AlertDialogBodyProps,
  AlertDialogCancelProps,
  AlertDialogContentProps,
  AlertDialogDescriptionProps,
  AlertDialogFooterProps,
  AlertDialogHeaderProps,
  AlertDialogProps,
  AlertDialogTitleProps,
  AlertDialogTriggerProps
}
