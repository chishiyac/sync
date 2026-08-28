'use client'

import {
  NumberInput as ArkNumberInput,
  useNumberInputContext
} from '@ark-ui/react/number-input'
import { MinusIcon, PlusIcon } from 'lucide-react'
import type React from 'react'
import { cn } from 'tailwind-variants'

import { Button } from '../button'
import { FieldLabel } from '../field'
import { Input } from '../input'
import {
  numberInputDecrementRecipe,
  numberInputGroupRecipe,
  numberInputIncrementRecipe,
  numberInputInputRecipe,
  numberInputRootRecipe,
  numberInputScrubberRecipe
} from './number-input.core.styles'

/**
 * Supported number input sizes.
 *
 * @example
 *   type Example = NumberInputSize
 */
type NumberInputSize = 'sm' | 'md' | 'lg'

/**
 * Props for the Number Input component.
 *
 * @example
 *   type Example = NumberInputProps
 */
type NumberInputProps = React.ComponentProps<
  typeof ArkNumberInput.Root
> & {
  /**
   * The size of the number input.
   *
   * @default 'md'
   */
  size?: NumberInputSize
}

/**
 * Props for the Number Input Group component.
 *
 * @example
 *   type Example = NumberInputGroupProps
 */
type NumberInputGroupProps = React.ComponentProps<
  typeof ArkNumberInput.Control
>
/**
 * Props for the Number Input Decrement component.
 *
 * @example
 *   type Example = NumberInputDecrementProps
 */
type NumberInputDecrementProps = React.ComponentProps<
  typeof ArkNumberInput.DecrementTrigger
>

/**
 * Props for the Number Input Increment component.
 *
 * @example
 *   type Example = NumberInputIncrementProps
 */
type NumberInputIncrementProps = React.ComponentProps<
  typeof ArkNumberInput.IncrementTrigger
>
/**
 * Props for the Number Input Input component.
 *
 * @example
 *   type Example = NumberInputInputProps
 */
type NumberInputInputProps = Omit<
  React.ComponentProps<typeof Input>,
  'size'
>

/**
 * Props for the Number Input Scrubber component.
 *
 * @example
 *   type Example = NumberInputScrubberProps
 */
type NumberInputScrubberProps = React.ComponentProps<
  typeof ArkNumberInput.Scrubber
>

const useNumberInput = useNumberInputContext

/**
 * Renders the Number Input component.
 *
 * @example
 *   ;<NumberInput />
 */
function NumberInput({
  size = 'md',
  className,
  ...props
}: NumberInputProps) {
  return (
    <ArkNumberInput.Root
      className={cn(numberInputRootRecipe(), className)}
      data-size={size}
      data-slot='number-field'
      {...props}
    />
  )
}

/**
 * Renders the Number Input Group component.
 *
 * @example
 *   ;<NumberInputGroup />
 */
function NumberInputGroup({
  className,
  ...props
}: NumberInputGroupProps) {
  return (
    <ArkNumberInput.Control
      className={cn(numberInputGroupRecipe(), className)}
      data-slot='number-field-group'
      {...props}
    />
  )
}

/**
 * Renders the Number Input Decrement component.
 *
 * @example
 *   ;<NumberInputDecrement />
 */
function NumberInputDecrement({
  className,
  ...props
}: NumberInputDecrementProps) {
  return (
    <ArkNumberInput.DecrementTrigger
      asChild
      className={cn(numberInputDecrementRecipe(), className)}
      data-slot='number-field-decrement'
      {...props}
    >
      <Button aria-label='Decrement' variant='ghost'>
        <MinusIcon aria-hidden />
      </Button>
    </ArkNumberInput.DecrementTrigger>
  )
}

/**
 * Renders the Number Input Increment component.
 *
 * @example
 *   ;<NumberInputIncrement />
 */
function NumberInputIncrement({
  className,
  ...props
}: NumberInputIncrementProps) {
  return (
    <ArkNumberInput.IncrementTrigger
      asChild
      className={cn(numberInputIncrementRecipe(), className)}
      data-slot='number-field-increment'
      {...props}
    >
      <Button aria-label='Increment' variant='ghost'>
        <PlusIcon aria-hidden />
      </Button>
    </ArkNumberInput.IncrementTrigger>
  )
}

/**
 * Renders the Number Input Input component.
 *
 * @example
 *   ;<NumberInputInput />
 */
function NumberInputInput({
  className,
  ...props
}: NumberInputInputProps) {
  return (
    <ArkNumberInput.Input
      asChild
      data-slot='number-field-input'
      {...props}
    >
      <Input className={cn(numberInputInputRecipe(), className)} />
    </ArkNumberInput.Input>
  )
}

/**
 * Renders the Number Input Scrubber component.
 *
 * @example
 *   ;<NumberInputScrubber />
 */
function NumberInputScrubber({
  className,
  children,
  ...props
}: NumberInputScrubberProps) {
  return (
    <ArkNumberInput.Scrubber
      asChild
      className={cn(numberInputScrubberRecipe(), className)}
      data-slot='number-field-scrubber'
      {...props}
    >
      <ArkNumberInput.Label asChild>
        <FieldLabel>{children}</FieldLabel>
      </ArkNumberInput.Label>
    </ArkNumberInput.Scrubber>
  )
}

export {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputInput,
  NumberInputScrubber,
  useNumberInput
}

export type {
  NumberInputDecrementProps,
  NumberInputGroupProps,
  NumberInputIncrementProps,
  NumberInputInputProps,
  NumberInputProps,
  NumberInputScrubberProps,
  NumberInputSize
}
