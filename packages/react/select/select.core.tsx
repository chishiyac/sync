'use client'

import { ark } from '@ark-ui/react/factory'
import { Portal } from '@ark-ui/react/portal'
import {
  Select as ArkSelect,
  useSelectContext
} from '@ark-ui/react/select'
import { CheckIcon, ChevronsUpDownIcon, XIcon } from 'lucide-react'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { inputRootRecipe } from '../input'
import { Separator } from '../separator'
import {
  selectClearTriggerRecipe,
  selectContentRecipe,
  selectEmptyRecipe,
  selectGroupLabelRecipe,
  selectItemIndicatorRecipe,
  selectItemRecipe,
  selectItemTextRecipe,
  selectSeparatorRecipe,
  selectTriggerActionsRecipe,
  selectTriggerRecipe,
  selectValueRecipe
} from './select.core.styles'

/**
 * Props for the Select Trigger component.
 *
 * @example
 *   type Example = SelectTriggerProps
 */
type SelectTriggerProps = React.ComponentProps<
  typeof ArkSelect.Trigger
> &
  VariantProps<typeof inputRootRecipe> & {
    /**
     * Show clear trigger
     *
     * @default false
     */
    showClear?: boolean
  }

/**
 * Props for the Select Group component.
 *
 * @example
 *   type Example = SelectGroupProps
 */
type SelectGroupProps = React.ComponentProps<
  typeof ArkSelect.ItemGroup
> & {
  /** The heading of the group */
  heading?: string | React.ReactNode
}

/**
 * Props for the Select component.
 *
 * @example
 *   type Example = SelectProps
 */
type SelectProps = React.ComponentProps<typeof ArkSelect.Root>

/**
 * Props for the Select Separator component.
 *
 * @example
 *   type Example = SelectSeparatorProps
 */
type SelectSeparatorProps = React.ComponentProps<typeof Separator>

/**
 * Props for the Select Value component.
 *
 * @example
 *   type Example = SelectValueProps
 */
type SelectValueProps = React.ComponentProps<
  typeof ArkSelect.ValueText
>

/**
 * Props for the Select Content component.
 *
 * @example
 *   type Example = SelectContentProps
 */
type SelectContentProps = React.ComponentProps<
  typeof ArkSelect.Content
>

/**
 * Props for the Select Group Label component.
 *
 * @example
 *   type Example = SelectGroupLabelProps
 */
type SelectGroupLabelProps = React.ComponentProps<
  typeof ArkSelect.ItemGroupLabel
>
/**
 * Props for the Select Item component.
 *
 * @example
 *   type Example = SelectItemProps
 */
type SelectItemProps = React.ComponentProps<typeof ArkSelect.Item>

/**
 * Props for the Select Clear Trigger component.
 *
 * @example
 *   type Example = SelectClearTriggerProps
 */
type SelectClearTriggerProps = React.ComponentProps<
  typeof ArkSelect.ClearTrigger
>
/**
 * Props for the Select Empty component.
 *
 * @example
 *   type Example = SelectEmptyProps
 */
type SelectEmptyProps = React.ComponentProps<typeof ark.div>

const SelectContext = ArkSelect.Context

const useSelect = useSelectContext

/**
 * Renders the Select component.
 *
 * @example
 *   ;<Select />
 */
function Select({
  lazyMount = true,
  unmountOnExit = true,
  children,
  ...props
}: SelectProps) {
  return (
    <ArkSelect.Root
      data-slot='select'
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...props}
    >
      {children}

      <ArkSelect.HiddenSelect />
    </ArkSelect.Root>
  )
}

/**
 * Renders the Select Separator component.
 *
 * @example
 *   ;<SelectSeparator />
 */
function SelectSeparator({
  className,
  ...props
}: SelectSeparatorProps) {
  return (
    <Separator
      className={cn(selectSeparatorRecipe(), className)}
      data-slot='select-separator'
      {...props}
    />
  )
}

/**
 * Renders the Select Value component.
 *
 * @example
 *   ;<SelectValue />
 */
function SelectValue({ className, ...props }: SelectValueProps) {
  return (
    <ArkSelect.ValueText
      className={cn(selectValueRecipe(), className)}
      {...props}
    />
  )
}

/**
 * Renders the Select Content component.
 *
 * @example
 *   ;<SelectContent />
 */
function SelectContent({ className, ...props }: SelectContentProps) {
  return (
    <Portal>
      <ArkSelect.Positioner data-slot='select-positioner'>
        <ArkSelect.Content
          className={cn(selectContentRecipe(), className)}
          data-slot='select-content'
          {...props}
        />
      </ArkSelect.Positioner>
    </Portal>
  )
}

/**
 * Renders the Select Group Label component.
 *
 * @example
 *   ;<SelectGroupLabel />
 */
function SelectGroupLabel({
  className,
  ...props
}: SelectGroupLabelProps) {
  return (
    <ArkSelect.ItemGroupLabel
      className={cn(selectGroupLabelRecipe(), className)}
      data-slot='select-group-label'
      {...props}
    />
  )
}

/**
 * Renders the Select Group component.
 *
 * @example
 *   ;<SelectGroup />
 */
function SelectGroup({
  heading,
  children,
  ...props
}: SelectGroupProps) {
  return (
    <ArkSelect.ItemGroup data-slot='select-group' {...props}>
      {Boolean(heading) && (
        <SelectGroupLabel>{heading}</SelectGroupLabel>
      )}
      {children}
    </ArkSelect.ItemGroup>
  )
}

/**
 * Renders the Select Item component.
 *
 * @example
 *   ;<SelectItem />
 */
function SelectItem({
  className,
  children,
  ...props
}: SelectItemProps) {
  return (
    <ArkSelect.Item
      className={cn(selectItemRecipe(), className)}
      data-slot='select-item'
      {...props}
    >
      <ArkSelect.ItemText
        className={selectItemTextRecipe()}
        data-slot='select-item-text'
      >
        {children}
      </ArkSelect.ItemText>
      <span className={selectItemIndicatorRecipe()}>
        <ArkSelect.ItemIndicator data-slot='select-item-indicator'>
          <CheckIcon />
        </ArkSelect.ItemIndicator>
      </span>
    </ArkSelect.Item>
  )
}

/**
 * Renders the Select Clear Trigger component.
 *
 * @example
 *   ;<SelectClearTrigger />
 */
function SelectClearTrigger({
  className,
  ...props
}: SelectClearTriggerProps) {
  return (
    <ArkSelect.ClearTrigger
      aria-label='Clear All'
      className={cn(selectClearTriggerRecipe(), className)}
      data-slot='select-clear-trigger'
      {...props}
    />
  )
}

/**
 * Renders the Select Trigger component.
 *
 * @example
 *   ;<SelectTrigger />
 */
function SelectTrigger({
  showClear = false,
  size = 'md',
  className,
  children,
  ...props
}: SelectTriggerProps) {
  return (
    <ArkSelect.Control data-slot='select-control'>
      <ArkSelect.Trigger
        className={cn(
          inputRootRecipe({ size }),
          selectTriggerRecipe(),
          className
        )}
        data-slot='select-trigger'
        {...props}
      >
        {children}

        <div className={selectTriggerActionsRecipe()}>
          {showClear && (
            <SelectClearTrigger>
              <XIcon />
            </SelectClearTrigger>
          )}
          <ArkSelect.Indicator data-slot='select-indicator'>
            <ChevronsUpDownIcon />
          </ArkSelect.Indicator>
        </div>
      </ArkSelect.Trigger>
    </ArkSelect.Control>
  )
}

/**
 * Renders the Select Empty component.
 *
 * @example
 *   ;<SelectEmpty />
 */
function SelectEmpty({ className, ...props }: SelectEmptyProps) {
  const { empty } = useSelectContext()

  if (empty) {
    return (
      <ark.div
        className={cn(selectEmptyRecipe(), className)}
        role='presentation'
        {...props}
      />
    )
  }

  return null
}

export {
  Select,
  SelectClearTrigger,
  SelectContent,
  SelectContext,
  SelectEmpty,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  useSelect
}

export type {
  SelectClearTriggerProps,
  SelectContentProps,
  SelectEmptyProps,
  SelectGroupLabelProps,
  SelectGroupProps,
  SelectItemProps,
  SelectProps,
  SelectSeparatorProps,
  SelectTriggerProps,
  SelectValueProps
}
