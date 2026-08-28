'use client'

import {
  Dialog as ArkDialog,
  useDialogContext
} from '@ark-ui/react/dialog'
import { Portal } from '@ark-ui/react/portal'
import { XIcon } from 'lucide-react'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { Button } from '../button'
import {
  Dialog,
  DialogBody,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle
} from '../dialog'
import {
  sheetBodyRecipe,
  sheetCloseButtonRecipe,
  sheetContentRecipe,
  sheetFooterRecipe,
  sheetPositionerRecipe
} from './sheet.core.styles'

/**
 * Supported sheet placements.
 *
 * @example
 *   type Example = SheetPlacement
 */
type SheetPlacement = 'bottom' | 'left' | 'right' | 'top'

/**
 * Supported sheet variants.
 *
 * @example
 *   type Example = SheetVariant
 */
type SheetVariant = 'default' | 'inset'

const useSheet = useDialogContext

/**
 * Props for the Sheet component.
 *
 * @example
 *   type Example = SheetProps
 */
type SheetProps = React.ComponentProps<typeof Dialog>

/**
 * Props for the Sheet Trigger component.
 *
 * @example
 *   type Example = SheetTriggerProps
 */
type SheetTriggerProps = React.ComponentProps<
  typeof ArkDialog.Trigger
>

/**
 * Props for the Sheet Overlay component.
 *
 * @example
 *   type Example = SheetOverlayProps
 */
type SheetOverlayProps = React.ComponentProps<typeof DialogOverlay>

/**
 * Props for the Sheet Header component.
 *
 * @example
 *   type Example = SheetHeaderProps
 */
type SheetHeaderProps = React.ComponentProps<typeof DialogHeader>

/**
 * Props for the Sheet Title component.
 *
 * @example
 *   type Example = SheetTitleProps
 */
type SheetTitleProps = React.ComponentProps<typeof DialogTitle>

/**
 * Props for the Sheet Description component.
 *
 * @example
 *   type Example = SheetDescriptionProps
 */
type SheetDescriptionProps = React.ComponentProps<
  typeof DialogDescription
>

/**
 * Props for the Sheet Body component.
 *
 * @example
 *   type Example = SheetBodyProps
 */
type SheetBodyProps = React.ComponentProps<typeof DialogBody>

/**
 * Props for the Sheet Close component.
 *
 * @example
 *   type Example = SheetCloseProps
 */
type SheetCloseProps = React.ComponentProps<
  typeof ArkDialog.CloseTrigger
>

/**
 * Props for the Sheet Footer component.
 *
 * @example
 *   type Example = SheetFooterProps
 */
type SheetFooterProps = React.ComponentProps<typeof DialogFooter>

/**
 * Props for the Sheet Positioner component.
 *
 * @example
 *   type Example = SheetPositionerProps
 */
type SheetPositionerProps = React.ComponentProps<
  typeof ArkDialog.Positioner
> &
  VariantProps<typeof sheetPositionerRecipe> & {
    /**
     * The placement of the sheet.
     *
     * @default 'right'
     */
    placement?: SheetPlacement
    /**
     * The visual variant of the sheet.
     *
     * @default 'default'
     */
    variant?: SheetVariant
  }

/**
 * Props for the Sheet Content component.
 *
 * @example
 *   type Example = SheetContentProps
 */
type SheetContentProps = React.ComponentProps<
  typeof ArkDialog.Content
> &
  VariantProps<typeof sheetContentRecipe> & {
    /**
     * Stick the sheet to the bottom of the screen on mobile.
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
 * Renders the Sheet component.
 *
 * @example
 *   ;<Sheet />
 */
function Sheet({ ...props }: SheetProps) {
  return <Dialog data-slot='sheet' {...props} />
}

/**
 * Renders the Sheet Trigger component.
 *
 * @example
 *   ;<SheetTrigger />
 */
function SheetTrigger({ ...props }: SheetTriggerProps) {
  return <ArkDialog.Trigger data-slot='sheet-trigger' {...props} />
}

/**
 * Renders the Sheet Overlay component.
 *
 * @example
 *   ;<SheetOverlay />
 */
function SheetOverlay({ ...props }: SheetOverlayProps) {
  return <DialogOverlay data-slot='sheet-overlay' {...props} />
}

/**
 * Renders the Sheet Positioner component.
 *
 * @example
 *   ;<SheetPositioner />
 */
function SheetPositioner({
  variant = 'default',
  placement,
  className,
  ...props
}: SheetPositionerProps) {
  return (
    <ArkDialog.Positioner
      className={cn(
        sheetPositionerRecipe({ placement, variant }),
        className
      )}
      data-slot='sheet-positioner'
      {...props}
    />
  )
}

/**
 * Renders the Sheet Header component.
 *
 * @example
 *   ;<SheetHeader />
 */
function SheetHeader({ ...props }: SheetHeaderProps) {
  return <DialogHeader data-slot='sheet-header' {...props} />
}

/**
 * Renders the Sheet Title component.
 *
 * @example
 *   ;<SheetTitle />
 */
function SheetTitle({ ...props }: SheetTitleProps) {
  return <DialogTitle data-slot='sheet-title' {...props} />
}

/**
 * Renders the Sheet Description component.
 *
 * @example
 *   ;<SheetDescription />
 */
function SheetDescription({ ...props }: SheetDescriptionProps) {
  return (
    <DialogDescription data-slot='sheet-description' {...props} />
  )
}

/**
 * Renders the Sheet Body component.
 *
 * @example
 *   ;<SheetBody />
 */
function SheetBody({ className, ...props }: SheetBodyProps) {
  return (
    <DialogBody
      className={cn(sheetBodyRecipe(), className)}
      data-slot='sheet-body'
      {...props}
    />
  )
}

/**
 * Renders the Sheet Close component.
 *
 * @example
 *   ;<SheetClose />
 */
function SheetClose({ ...props }: SheetCloseProps) {
  return <ArkDialog.CloseTrigger data-slot='sheet-close' {...props} />
}

/**
 * Renders the Sheet Content component.
 *
 * @example
 *   ;<SheetContent />
 */
function SheetContent({
  showCloseButton = true,
  placement = 'right',
  variant = 'default',
  className,
  children,
  ...props
}: SheetContentProps) {
  return (
    <Portal>
      <SheetOverlay />
      <SheetPositioner placement={placement} variant={variant}>
        <ArkDialog.Content
          className={cn(
            sheetContentRecipe({ placement, variant }),
            className
          )}
          data-slot='sheet-content'
          {...props}
        >
          {children}

          {!!showCloseButton && (
            <SheetClose asChild>
              <Button
                aria-label='Close'
                className={sheetCloseButtonRecipe()}
                size='icon-sm'
                variant='ghost'
              >
                <XIcon />
              </Button>
            </SheetClose>
          )}
        </ArkDialog.Content>
      </SheetPositioner>
    </Portal>
  )
}

/**
 * Renders the Sheet Footer component.
 *
 * @example
 *   ;<SheetFooter />
 */
function SheetFooter({ className, ...props }: SheetFooterProps) {
  return (
    <DialogFooter
      className={cn(sheetFooterRecipe(), className)}
      data-slot='sheet-footer'
      {...props}
    />
  )
}

export {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPositioner,
  SheetTitle,
  SheetTrigger,
  useSheet
}

export type {
  SheetBodyProps,
  SheetCloseProps,
  SheetContentProps,
  SheetDescriptionProps,
  SheetFooterProps,
  SheetHeaderProps,
  SheetOverlayProps,
  SheetPlacement,
  SheetPositionerProps,
  SheetProps,
  SheetTitleProps,
  SheetTriggerProps,
  SheetVariant
}
