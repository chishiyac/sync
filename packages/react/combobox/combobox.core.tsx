'use client'

import type { ComboboxList as ArkComboboxList } from '@ark-ui/react/combobox'
import {
  Combobox as ArkCombobox,
  useComboboxContext as useArkComboboxContext
} from '@ark-ui/react/combobox'
import { Portal } from '@ark-ui/react/portal'
import { CheckIcon, ChevronsUpDownIcon, XIcon } from 'lucide-react'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { Button } from '../button'
import type { inputRootRecipe } from '../input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from '../input-group'
import {
  comboboxContentRecipe,
  comboboxControlRecipe,
  comboboxEmptyRecipe,
  comboboxGroupLabelRecipe,
  comboboxInputRecipe,
  comboboxItemIndicatorRecipe,
  comboboxItemRecipe,
  comboboxListRecipe,
  comboboxSubTriggerRecipe,
  comboboxTriggerRecipe
} from './combobox.core.styles'

/**
 * Props for the Combobox component.
 *
 * @example
 *   type Example = ComboboxProps
 */
type ComboboxProps = React.ComponentProps<typeof ArkCombobox.Root>

/**
 * Props for the Combobox Input component.
 *
 * @example
 *   type Example = ComboboxInputProps
 */
type ComboboxInputProps = Omit<
  React.ComponentProps<typeof ArkCombobox.Input>,
  'size'
> &
  VariantProps<typeof inputRootRecipe> & {
    /**
     * Whether the control is disabled.
     *
     * @default false
     */
    disabled?: boolean

    /**
     * Whether to show the clear button.
     *
     * @default false
     */
    showClear?: boolean

    /**
     * Whether to show the trigger button.
     *
     * @default true
     */
    showTrigger?: boolean
  }

/**
 * Props for the Combobox Group component.
 *
 * @example
 *   type Example = ComboboxGroupProps
 */
type ComboboxGroupProps = React.ComponentProps<
  typeof ArkCombobox.ItemGroup
> & {
  /** The heading of the group */
  heading?: string | React.ReactNode
}

/**
 * Props for the Combobox Control component.
 *
 * @example
 *   type Example = ComboboxControlProps
 */
type ComboboxControlProps = React.ComponentProps<
  typeof ArkCombobox.Control
>

/**
 * Props for the Combobox Trigger component.
 *
 * @example
 *   type Example = ComboboxTriggerProps
 */
type ComboboxTriggerProps = React.ComponentProps<
  typeof ArkCombobox.Trigger
>

/**
 * Props for the Combobox Clear component.
 *
 * @example
 *   type Example = ComboboxClearProps
 */
type ComboboxClearProps = React.ComponentProps<
  typeof ArkCombobox.ClearTrigger
>

/**
 * Props for the Combobox Field Input component.
 *
 * @example
 *   type Example = ComboboxFieldInputProps
 */
type ComboboxFieldInputProps = React.ComponentProps<
  typeof ArkCombobox.Input
>

/**
 * Props for the Combobox Positioner component.
 *
 * @example
 *   type Example = ComboboxPositionerProps
 */
type ComboboxPositionerProps = React.ComponentProps<
  typeof ArkCombobox.Positioner
>

/**
 * Props for the Combobox Content component.
 *
 * @example
 *   type Example = ComboboxContentProps
 */
type ComboboxContentProps = React.ComponentProps<
  typeof ArkCombobox.Content
>

/**
 * Props for the Combobox Group Label component.
 *
 * @example
 *   type Example = ComboboxGroupLabelProps
 */
type ComboboxGroupLabelProps = React.ComponentProps<
  typeof ArkCombobox.ItemGroupLabel
>

/**
 * Props for the Combobox Empty component.
 *
 * @example
 *   type Example = ComboboxEmptyProps
 */
type ComboboxEmptyProps = React.ComponentProps<
  typeof ArkCombobox.Empty
>

/**
 * Props for the Combobox List component.
 *
 * @example
 *   type Example = ComboboxListProps
 */
type ComboboxListProps = React.ComponentProps<typeof ArkComboboxList>

/**
 * Props for the Combobox Item component.
 *
 * @example
 *   type Example = ComboboxItemProps
 */
type ComboboxItemProps = React.ComponentProps<
  typeof ArkCombobox.Item
> &
  VariantProps<typeof comboboxItemRecipe>

const ComboboxContext = ArkCombobox.Context

const useCombobox = useArkComboboxContext

/**
 * Renders the Combobox component.
 *
 * @example
 *   ;<Combobox />
 */
function Combobox({
  openOnClick = true,
  lazyMount = true,
  unmountOnExit = true,
  ...props
}: ComboboxProps) {
  return (
    <ArkCombobox.Root
      data-slot='combobox'
      lazyMount={lazyMount}
      openOnClick={openOnClick}
      unmountOnExit={unmountOnExit}
      {...props}
    />
  )
}

/**
 * Renders the Combobox Control component.
 *
 * @example
 *   ;<ComboboxControl />
 */
function ComboboxControl({
  className,
  ...props
}: ComboboxControlProps) {
  return (
    <ArkCombobox.Control
      className={cn(comboboxControlRecipe(), className)}
      data-slot='combobox-control'
      {...props}
    />
  )
}

/**
 * Renders the Combobox Trigger component.
 *
 * @example
 *   ;<ComboboxTrigger />
 */
function ComboboxTrigger({
  className,
  children,
  ...props
}: ComboboxTriggerProps) {
  return (
    <ArkCombobox.Trigger
      className={cn(comboboxTriggerRecipe(), className)}
      data-slot='combobox-trigger'
      {...props}
      asChild
    >
      {children ?? (
        <Button
          className={comboboxSubTriggerRecipe()}
          variant='ghost'
        >
          <ChevronsUpDownIcon />
        </Button>
      )}
    </ArkCombobox.Trigger>
  )
}

/**
 * Renders the Combobox Clear component.
 *
 * @example
 *   ;<ComboboxClear />
 */
function ComboboxClear({ ...props }: ComboboxClearProps) {
  return (
    <ArkCombobox.ClearTrigger data-slot='combobox-clear' {...props} />
  )
}

/**
 * Renders the Combobox Input component.
 *
 * @example
 *   ;<ComboboxInput />
 */
function ComboboxInput({
  size = 'md',
  showTrigger = true,
  showClear = false,
  className,
  children,
  ...props
}: ComboboxInputProps) {
  const { inputValue } = useCombobox()
  return (
    <ComboboxControl data-size={size}>
      <InputGroup className={cn(className)} size={size}>
        {children}
        <ArkCombobox.Input asChild>
          <InputGroupInput {...props} />
        </ArkCombobox.Input>
        <InputGroupAddon align='inline-end'>
          {showTrigger && (
            <InputGroupButton
              asChild
              className={comboboxInputRecipe()}
              size='icon-xs'
              variant='ghost'
            >
              <ComboboxTrigger />
            </InputGroupButton>
          )}
          {showClear && inputValue && (
            <ComboboxClear asChild>
              <InputGroupButton size='icon-xs' variant='ghost'>
                <XIcon />
              </InputGroupButton>
            </ComboboxClear>
          )}
        </InputGroupAddon>
      </InputGroup>
    </ComboboxControl>
  )
}

/**
 * Renders the Combobox Field Input component.
 *
 * @example
 *   ;<ComboboxFieldInput />
 */
function ComboboxFieldInput({ ...props }: ComboboxFieldInputProps) {
  return (
    <ArkCombobox.Input data-slot='combobox-field-input' {...props} />
  )
}

/**
 * Renders the Combobox Positioner component.
 *
 * @example
 *   ;<ComboboxPositioner />
 */
function ComboboxPositioner({ ...props }: ComboboxPositionerProps) {
  return (
    <ArkCombobox.Positioner
      data-slot='combobox-positioner'
      {...props}
    />
  )
}

/**
 * Renders the Combobox Content component.
 *
 * @example
 *   ;<ComboboxContent />
 */
function ComboboxContent({
  className,
  children,
  ...props
}: ComboboxContentProps) {
  return (
    <Portal>
      <ComboboxPositioner>
        <ArkCombobox.Content
          className={cn(comboboxContentRecipe(), className)}
          data-slot='combobox-content'
          {...props}
        >
          {children}
        </ArkCombobox.Content>
      </ComboboxPositioner>
    </Portal>
  )
}

/**
 * Renders the Combobox Group Label component.
 *
 * @example
 *   ;<ComboboxGroupLabel />
 */
function ComboboxGroupLabel({
  className,
  ...props
}: ComboboxGroupLabelProps) {
  return (
    <ArkCombobox.ItemGroupLabel
      className={cn(comboboxGroupLabelRecipe(), className)}
      data-slot='combobox-group-label'
      {...props}
    />
  )
}

/**
 * Renders the Combobox Group component.
 *
 * @example
 *   ;<ComboboxGroup />
 */
function ComboboxGroup({
  heading,
  children,
  ...props
}: ComboboxGroupProps) {
  return (
    <ArkCombobox.ItemGroup data-slot='combobox-group' {...props}>
      {!!heading && (
        <ComboboxGroupLabel>{heading}</ComboboxGroupLabel>
      )}
      {children}
    </ArkCombobox.ItemGroup>
  )
}

/**
 * Renders the Combobox Item component.
 *
 * @example
 *   ;<ComboboxItem />
 */
function ComboboxItem({
  showIndicator = true,
  className,
  children,
  ...props
}: ComboboxItemProps) {
  return (
    <ArkCombobox.Item
      className={cn(comboboxItemRecipe({ showIndicator }), className)}
      data-slot='combobox-item'
      persistFocus
      {...props}
    >
      {children}

      {showIndicator && (
        <span className={comboboxItemIndicatorRecipe()}>
          <ArkCombobox.ItemIndicator data-slot='combobox-item-indicator'>
            <CheckIcon />
          </ArkCombobox.ItemIndicator>
        </span>
      )}
    </ArkCombobox.Item>
  )
}

/**
 * Renders the Combobox Empty component.
 *
 * @example
 *   ;<ComboboxEmpty />
 */
function ComboboxEmpty({
  className,
  children,
  ...props
}: ComboboxEmptyProps) {
  return (
    <ArkCombobox.Empty
      className={cn(comboboxEmptyRecipe(), className)}
      data-slot='combobox-empty'
      {...props}
    >
      {children || 'Empty'}
    </ArkCombobox.Empty>
  )
}

/**
 * Renders the Combobox List component.
 *
 * @example
 *   ;<ComboboxList />
 */
function ComboboxList({ className, ...props }: ComboboxListProps) {
  return (
    <ArkCombobox.List
      className={cn(comboboxListRecipe(), className)}
      data-slot='combobox-list'
      {...props}
    />
  )
}

export {
  Combobox,
  ComboboxClear,
  ComboboxContent,
  ComboboxContext,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxFieldInput,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPositioner,
  ComboboxTrigger,
  useCombobox
}

export type {
  ComboboxClearProps,
  ComboboxContentProps,
  ComboboxControlProps,
  ComboboxEmptyProps,
  ComboboxFieldInputProps,
  ComboboxGroupLabelProps,
  ComboboxGroupProps,
  ComboboxInputProps,
  ComboboxItemProps,
  ComboboxListProps,
  ComboboxPositionerProps,
  ComboboxProps,
  ComboboxTriggerProps
}
