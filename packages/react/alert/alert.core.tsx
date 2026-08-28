'use client'

import { ark } from '@ark-ui/react/factory'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import {
  alertActionRecipe,
  alertDescriptionRecipe,
  alertRootRecipe,
  alertTitleRecipe
} from './alert.core.styles'

/**
 * Props for the Alert component.
 *
 * @example
 *   type Example = AlertProps
 */
type AlertProps = React.ComponentProps<typeof ark.div> &
  VariantProps<typeof alertRootRecipe>

/**
 * Props for the Alert Description component.
 *
 * @example
 *   type Example = AlertDescriptionProps
 */
type AlertDescriptionProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Alert Title component.
 *
 * @example
 *   type Example = AlertTitleProps
 */
type AlertTitleProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Alert Action component.
 *
 * @example
 *   type Example = AlertActionProps
 */
type AlertActionProps = React.ComponentProps<typeof ark.div>

/**
 * Renders the Alert component.
 *
 * @example
 *   ;<Alert />
 */
function Alert({ variant, className, ...props }: AlertProps) {
  return (
    <ark.div
      className={cn(alertRootRecipe({ variant }), className)}
      data-slot='alert'
      {...props}
    />
  )
}

/**
 * Renders the Alert Title component.
 *
 * @example
 *   ;<AlertTitle />
 */
function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <ark.div
      className={cn(alertTitleRecipe(), className)}
      data-slot='alert-title'
      {...props}
    />
  )
}

/**
 * Renders the Alert Description component.
 *
 * @example
 *   ;<AlertDescription />
 */
function AlertDescription({
  className,
  ...props
}: AlertDescriptionProps) {
  return (
    <ark.div
      className={cn(alertDescriptionRecipe(), className)}
      data-slot='alert-description'
      {...props}
    />
  )
}

/**
 * Renders the Alert Action component.
 *
 * @example
 *   ;<AlertAction />
 */
function AlertAction({ className, ...props }: AlertActionProps) {
  return (
    <ark.div
      className={cn(alertActionRecipe(), className)}
      data-slot='alert-action'
      {...props}
    />
  )
}

export { Alert, AlertAction, AlertDescription, AlertTitle }

export type {
  AlertActionProps,
  AlertDescriptionProps,
  AlertProps,
  AlertTitleProps
}
