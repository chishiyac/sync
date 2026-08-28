'use client'

import { Portal } from '@ark-ui/react/portal'
import type { CreateToasterReturn } from '@ark-ui/react/toast'
import {
  Toast as ArkToast,
  Toaster as ArkToaster,
  useToastContext
} from '@ark-ui/react/toast'
import {
  CircleAlertIcon,
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  XIcon
} from 'lucide-react'
import type React from 'react'
import { cn } from 'tailwind-variants'

import { Button } from '../button'
import { Spinner } from '../spinner'
import { toast } from './toast.core.constants'
import {
  toastActionButtonRecipe,
  toastActionsRecipe,
  toastCloseButtonRecipe,
  toastDescriptionRecipe,
  toastIconWrapperRecipe,
  toastItemRecipe,
  toastRootRecipe,
  toastStackRecipe,
  toastTitleRecipe,
  toasterRootRecipe
} from './toast.core.styles'

/**
 * Shared Toaster Props Keys type.
 *
 * @example
 *   type Example = ToasterPropsKeys
 */
type ToasterPropsKeys = 'toaster' | 'children'

/**
 * Props for the Toaster component.
 *
 * @example
 *   type Example = ToasterProps
 */
type ToasterProps = Omit<
  React.ComponentProps<typeof ArkToaster>,
  ToasterPropsKeys
> & {
  /** Toaster instance */
  toaster?: CreateToasterReturn<React.ReactNode>
}

/**
 * Props for the Toast Item component.
 *
 * @example
 *   type Example = ToastItemProps
 */
type ToastItemProps = React.ComponentProps<typeof ArkToast.Root> & {
  /** The toast item data */
  toast: ArkToast.Options
}

const useToast = useToastContext

const TOAST_ICONS = {
  error: <CircleAlertIcon />,
  info: <InfoIcon />,
  loading: <Spinner />,
  success: <CircleCheckIcon />,
  warning: <TriangleAlertIcon />
} as const

/**
 * Renders the Toast Item component.
 *
 * @example
 *   ;<ToastItem />
 */
function ToastItem({
  toast: toastData,
  className,
  ...props
}: ToastItemProps) {
  const ToastIcon = toastData.type
    ? TOAST_ICONS[toastData.type as keyof typeof TOAST_ICONS]
    : null

  const isExplicitClosable = toastData.closable === false

  return (
    <ArkToast.Root
      className={cn(toastRootRecipe(), className)}
      data-slot='toast'
      {...props}
    >
      <div className={toastItemRecipe()}>
        <div
          className={toastIconWrapperRecipe()}
          data-slot='toast-icon'
        >
          {ToastIcon}
        </div>
        <div className={toastStackRecipe()}>
          <ArkToast.Title
            className={toastTitleRecipe()}
            data-slot='toast-title'
          >
            {toastData.title}
          </ArkToast.Title>

          {toastData.description && (
            <ArkToast.Description
              className={toastDescriptionRecipe()}
              data-slot='toast-description'
            >
              {toastData.description}
            </ArkToast.Description>
          )}
        </div>
      </div>
      <div className={toastActionsRecipe()}>
        {toastData.action && (
          <ArkToast.ActionTrigger
            asChild
            className={toastActionButtonRecipe()}
            data-slot='toast-action-trigger'
            // oxlint-disable-next-line react/jsx-handler-names
            onClick={toastData.action.onClick}
          >
            <Button size='sm' variant='secondary'>
              {toastData.action.label}
            </Button>
          </ArkToast.ActionTrigger>
        )}
        {!isExplicitClosable && (
          <ArkToast.CloseTrigger
            asChild
            data-slot='toast-close-trigger'
          >
            <Button
              aria-label='Close'
              className={toastCloseButtonRecipe()}
              size='icon-xs'
              variant='ghost'
            >
              <XIcon />
            </Button>
          </ArkToast.CloseTrigger>
        )}
      </div>
    </ArkToast.Root>
  )
}

/**
 * Renders the Toaster component.
 *
 * @example
 *   ;<Toaster />
 */
function Toaster({
  toaster: toasterInstance = toast,
  className,
  style,
  ...props
}: ToasterProps) {
  return (
    <Portal>
      <ArkToaster
        className={cn(toasterRootRecipe(), className)}
        style={
          {
            '--width': '356px',
            ...style
          } as React.CSSProperties
        }
        toaster={toasterInstance}
        {...props}
      >
        {(toastItem) => <ToastItem toast={toastItem} />}
      </ArkToaster>
    </Portal>
  )
}

export { ToastItem, Toaster, toast, useToast }

export type { ToastItemProps, ToasterProps }
