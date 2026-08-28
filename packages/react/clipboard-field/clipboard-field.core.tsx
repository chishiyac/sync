'use client'

import {
  Clipboard as ArkClipboard,
  useClipboardContext
} from '@ark-ui/react/clipboard'
import { CheckIcon, ClipboardIcon } from 'lucide-react'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { inputRootRecipe } from '../input'
import {
  clipboardFieldIndicatorRecipe,
  clipboardFieldRootRecipe,
  clipboardFieldValueRecipe
} from './clipboard-field.core.styles'

/**
 * Props for the Clipboard Field component.
 *
 * @example
 *   type Example = ClipboardFieldProps
 */
type ClipboardFieldProps = React.ComponentProps<
  typeof ArkClipboard.Root
> & {
  /** Styles for the root element */
  rootClassName?: string
}

/**
 * Props for the Clipboard Field Value component.
 *
 * @example
 *   type Example = ClipboardFieldValueProps
 */
type ClipboardFieldValueProps = React.ComponentProps<
  typeof ArkClipboard.ValueText
> &
  VariantProps<typeof clipboardFieldValueRecipe>

/**
 * Props for the Clipboard Field Trigger component.
 *
 * @example
 *   type Example = ClipboardFieldTriggerProps
 */
type ClipboardFieldTriggerProps = React.ComponentProps<
  typeof ArkClipboard.Trigger
>

/**
 * Props for the Clipboard Field Input component.
 *
 * @example
 *   type Example = ClipboardFieldInputProps
 */
type ClipboardFieldInputProps = React.ComponentProps<
  typeof ArkClipboard.Input
>

/**
 * Props for the Clipboard Field Indicator component.
 *
 * @example
 *   type Example = ClipboardFieldIndicatorProps
 */
type ClipboardFieldIndicatorProps = React.ComponentProps<
  typeof ArkClipboard.Indicator
>

const useClipboard = useClipboardContext

const defaultCopied = <CheckIcon />

/**
 * Renders the Clipboard Field component.
 *
 * @example
 *   ;<ClipboardField />
 */
function ClipboardField({
  rootClassName,
  className,
  children,
  ...props
}: ClipboardFieldProps) {
  return (
    <ArkClipboard.Root
      className={cn(rootClassName)}
      data-slot='clipboard'
      {...props}
    >
      <ArkClipboard.Control
        className={cn(clipboardFieldRootRecipe(), className)}
        data-slot='clipboard-control'
      >
        {children}
      </ArkClipboard.Control>
    </ArkClipboard.Root>
  )
}

/**
 * Renders the Clipboard Field Trigger component.
 *
 * @example
 *   ;<ClipboardFieldTrigger />
 */
function ClipboardFieldTrigger({
  ...props
}: ClipboardFieldTriggerProps) {
  return (
    <ArkClipboard.Trigger data-slot='clipboard-trigger' {...props} />
  )
}

/**
 * Renders the Clipboard Field Input component.
 *
 * @example
 *   ;<ClipboardFieldInput />
 */
function ClipboardFieldInput({
  className,
  ...props
}: ClipboardFieldInputProps) {
  return (
    <ArkClipboard.Input
      className={cn(inputRootRecipe(), className)}
      data-slot='clipboard-input'
      {...props}
    />
  )
}

/**
 * Renders the Clipboard Field Value component.
 *
 * @example
 *   ;<ClipboardFieldValue />
 */
function ClipboardFieldValue({
  size,
  className,
  ...props
}: ClipboardFieldValueProps) {
  return (
    <ArkClipboard.ValueText
      className={cn(clipboardFieldValueRecipe({ size }), className)}
      data-slot='clipboard-value'
      {...props}
    />
  )
}

/**
 * Renders the Clipboard Field Indicator component.
 *
 * @example
 *   ;<ClipboardFieldIndicator />
 */
function ClipboardFieldIndicator({
  copied = defaultCopied,
  className,
  children,
  ...props
}: ClipboardFieldIndicatorProps) {
  return (
    <ArkClipboard.Indicator
      className={cn(clipboardFieldIndicatorRecipe(), className)}
      copied={copied}
      data-slot='clipboard-indicator'
      {...props}
    >
      {children || <ClipboardIcon />}
    </ArkClipboard.Indicator>
  )
}

export type {
  ClipboardFieldIndicatorProps,
  ClipboardFieldInputProps,
  ClipboardFieldProps,
  ClipboardFieldTriggerProps,
  ClipboardFieldValueProps
}

export {
  ClipboardField,
  ClipboardFieldIndicator,
  ClipboardFieldInput,
  ClipboardFieldTrigger,
  ClipboardFieldValue,
  useClipboard
}
