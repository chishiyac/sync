'use client'

import { ark } from '@ark-ui/react/factory'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { Button } from '../button'
import { Input } from '../input'
import { Textarea } from '../textarea'
import {
  inputGroupAddonRecipe,
  inputGroupButtonRecipe,
  inputGroupInputRecipe,
  inputGroupRecipe,
  inputGroupTextRecipe,
  inputGroupTextareaRecipe
} from './input-group.core.styles'

/**
 * Props for the Input Group component.
 *
 * @example
 *   type Example = InputGroupProps
 */
type InputGroupProps = React.ComponentProps<typeof ark.div> &
  VariantProps<typeof inputGroupRecipe>

/**
 * Props for the Input Group Addon component.
 *
 * @example
 *   type Example = InputGroupAddonProps
 */
type InputGroupAddonProps = React.ComponentProps<typeof ark.div> &
  VariantProps<typeof inputGroupAddonRecipe>

/**
 * Props for the Input Group Button component.
 *
 * @example
 *   type Example = InputGroupButtonProps
 */
type InputGroupButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  'size'
> &
  VariantProps<typeof inputGroupButtonRecipe>

/**
 * Props for the Input Group Input component.
 *
 * @example
 *   type Example = InputGroupInputProps
 */
type InputGroupInputProps = React.ComponentProps<typeof Input>

/**
 * Props for the Input Group Textarea component.
 *
 * @example
 *   type Example = InputGroupTextareaProps
 */
type InputGroupTextareaProps = React.ComponentProps<typeof Textarea>

/**
 * Renders the Input Group component.
 *
 * @example
 *   ;<InputGroup />
 */
function InputGroup({
  size = 'md',
  className,
  ...props
}: InputGroupProps) {
  return (
    <ark.div
      className={cn(inputGroupRecipe({ size }), className)}
      data-size={size}
      data-slot='input-group'
      role='group'
      {...props}
    />
  )
}

/**
 * Renders the Input Group Addon component.
 *
 * @example
 *   ;<InputGroupAddon />
 */
function InputGroupAddon({
  className,
  align = 'inline-start',
  ...props
}: InputGroupAddonProps) {
  return (
    <ark.div
      className={cn(inputGroupAddonRecipe({ align }), className)}
      data-align={align}
      data-slot='input-group-addon'
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('button')) {
          return
        }
        e.currentTarget.parentElement?.querySelector('input')?.focus()
      }}
      role='group'
      {...props}
    />
  )
}

/**
 * Renders the Input Group Button component.
 *
 * @example
 *   ;<InputGroupButton />
 */
function InputGroupButton({
  className,
  type = 'button',
  variant = 'ghost',
  size = 'xs',
  ...props
}: InputGroupButtonProps) {
  return (
    <Button
      className={cn(inputGroupButtonRecipe({ size }), className)}
      data-size={size}
      data-slot='input-group-button'
      type={type}
      variant={variant}
      {...props}
    />
  )
}

/**
 * Props for the Input Group Text component.
 *
 * @example
 *   type Example = InputGroupTextProps
 */
type InputGroupTextProps = React.ComponentProps<typeof ark.span>

/**
 * Renders the Input Group Text component.
 *
 * @example
 *   ;<InputGroupText />
 */
function InputGroupText({
  className,
  ...props
}: InputGroupTextProps) {
  return (
    <ark.span
      className={cn(inputGroupTextRecipe(), className)}
      data-slot='input-group-text'
      {...props}
    />
  )
}

/**
 * Renders the Input Group Input component.
 *
 * @example
 *   ;<InputGroupInput />
 */
function InputGroupInput({
  className,
  ...props
}: InputGroupInputProps) {
  return (
    <Input
      className={cn(inputGroupInputRecipe(), className)}
      data-slot='input-group-control'
      {...props}
    />
  )
}

/**
 * Renders the Input Group Textarea component.
 *
 * @example
 *   ;<InputGroupTextarea />
 */
function InputGroupTextarea({
  className,
  ...props
}: InputGroupTextareaProps) {
  return (
    <Textarea
      className={cn(inputGroupTextareaRecipe(), className)}
      data-slot='input-group-control'
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea
}

export type {
  InputGroupAddonProps,
  InputGroupButtonProps,
  InputGroupInputProps,
  InputGroupProps,
  InputGroupTextareaProps
}
