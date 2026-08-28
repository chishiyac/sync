'use client'

import type React from 'react'

import {
  Combobox,
  ComboboxClear,
  ComboboxContent,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger
} from '../combobox'
import { Separator } from '../separator'

/**
 * Props for the Autocomplete component.
 *
 * @example
 *   type Example = AutocompleteProps
 */
type AutocompleteProps = React.ComponentProps<typeof Combobox>

/**
 * Props for the Autocomplete Control component.
 *
 * @example
 *   type Example = AutocompleteControlProps
 */
type AutocompleteControlProps = React.ComponentProps<
  typeof ComboboxControl
>

/**
 * Props for the Autocomplete Input component.
 *
 * @example
 *   type Example = AutocompleteInputProps
 */
type AutocompleteInputProps = React.ComponentProps<
  typeof ComboboxInput
>

/**
 * Props for the Autocomplete Group Label component.
 *
 * @example
 *   type Example = AutocompleteGroupLabelProps
 */
type AutocompleteGroupLabelProps = React.ComponentProps<
  typeof ComboboxGroupLabel
>
/**
 * Props for the Autocomplete Item component.
 *
 * @example
 *   type Example = AutocompleteItemProps
 */
type AutocompleteItemProps = React.ComponentProps<typeof ComboboxItem>

/**
 * Props for the Autocomplete Content component.
 *
 * @example
 *   type Example = AutocompleteContentProps
 */
type AutocompleteContentProps = React.ComponentProps<
  typeof ComboboxContent
>

/**
 * Props for the Autocomplete Trigger component.
 *
 * @example
 *   type Example = AutocompleteTriggerProps
 */
type AutocompleteTriggerProps = React.ComponentProps<
  typeof ComboboxTrigger
>

/**
 * Props for the Autocomplete Clear component.
 *
 * @example
 *   type Example = AutocompleteClearProps
 */
type AutocompleteClearProps = React.ComponentProps<
  typeof ComboboxClear
>

/**
 * Props for the Autocomplete Empty component.
 *
 * @example
 *   type Example = AutocompleteEmptyProps
 */
type AutocompleteEmptyProps = React.ComponentProps<
  typeof ComboboxEmpty
>

/**
 * Props for the Autocomplete List component.
 *
 * @example
 *   type Example = AutocompleteListProps
 */
type AutocompleteListProps = React.ComponentProps<typeof ComboboxList>

/**
 * Props for the Autocomplete Collection component.
 *
 * @example
 *   type Example = AutocompleteCollectionProps
 */
type AutocompleteCollectionProps = React.ComponentProps<
  typeof ComboboxList
>

/**
 * Props for the Autocomplete Separator component.
 *
 * @example
 *   type Example = AutocompleteSeparatorProps
 */
type AutocompleteSeparatorProps = React.ComponentProps<
  typeof Separator
>

/**
 * Renders the Autocomplete component.
 *
 * @example
 *   ;<Autocomplete />
 */
function Autocomplete({ ...props }: AutocompleteProps) {
  return (
    <Combobox
      allowCustomValue
      data-slot='autocomplete'
      inputBehavior='autocomplete'
      {...props}
    />
  )
}

/**
 * Renders the Autocomplete Control component.
 *
 * @example
 *   ;<AutocompleteControl />
 */
function AutocompleteControl({ ...props }: AutocompleteControlProps) {
  return (
    <ComboboxControl data-slot='autocomplete-control' {...props} />
  )
}

/**
 * Renders the Autocomplete Input component.
 *
 * @example
 *   ;<AutocompleteInput />
 */
function AutocompleteInput({
  showClear = false,
  showTrigger = false,
  ...props
}: AutocompleteInputProps) {
  return (
    <ComboboxInput
      data-slot='autocomplete-input'
      showClear={showClear}
      showTrigger={showTrigger}
      {...props}
    />
  )
}

/**
 * Renders the Autocomplete Group Label component.
 *
 * @example
 *   ;<AutocompleteGroupLabel />
 */
function AutocompleteGroupLabel({
  ...props
}: AutocompleteGroupLabelProps) {
  return (
    <ComboboxGroupLabel
      data-slot='autocomplete-group-label'
      {...props}
    />
  )
}

/**
 * Renders the Autocomplete Item component.
 *
 * @example
 *   ;<AutocompleteItem />
 */
function AutocompleteItem({ ...props }: AutocompleteItemProps) {
  return <ComboboxItem data-slot='autocomplete-item' {...props} />
}

/**
 * Renders the Autocomplete Content component.
 *
 * @example
 *   ;<AutocompleteContent />
 */
function AutocompleteContent({ ...props }: AutocompleteContentProps) {
  return (
    <ComboboxContent data-slot='autocomplete-content' {...props} />
  )
}

/**
 * Renders the Autocomplete Trigger component.
 *
 * @example
 *   ;<AutocompleteTrigger />
 */
function AutocompleteTrigger({ ...props }: AutocompleteTriggerProps) {
  return (
    <ComboboxTrigger data-slot='autocomplete-trigger' {...props} />
  )
}

/**
 * Renders the Autocomplete Clear component.
 *
 * @example
 *   ;<AutocompleteClear />
 */
function AutocompleteClear({ ...props }: AutocompleteClearProps) {
  return <ComboboxClear data-slot='autocomplete-clear' {...props} />
}

/**
 * Renders the Autocomplete Empty component.
 *
 * @example
 *   ;<AutocompleteEmpty />
 */
function AutocompleteEmpty({ ...props }: AutocompleteEmptyProps) {
  return <ComboboxEmpty data-slot='autocomplete-empty' {...props} />
}

/**
 * Renders the Autocomplete List component.
 *
 * @example
 *   ;<AutocompleteList />
 */
function AutocompleteList({ ...props }: AutocompleteListProps) {
  return <ComboboxList data-slot='autocomplete-list' {...props} />
}

/**
 * Renders the Autocomplete Collection component.
 *
 * @example
 *   ;<AutocompleteCollection />
 */
function AutocompleteCollection({
  ...props
}: AutocompleteCollectionProps) {
  return (
    <ComboboxList data-slot='autocomplete-collection' {...props} />
  )
}

/**
 * Renders the Autocomplete Separator component.
 *
 * @example
 *   ;<AutocompleteSeparator />
 */
function AutocompleteSeparator({
  ...props
}: AutocompleteSeparatorProps) {
  return <Separator data-slot='autocomplete-separator' {...props} />
}

export {
  Autocomplete,
  AutocompleteClear,
  AutocompleteCollection,
  AutocompleteContent,
  AutocompleteControl,
  AutocompleteEmpty,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteSeparator,
  AutocompleteTrigger
}

export type {
  AutocompleteClearProps,
  AutocompleteCollectionProps,
  AutocompleteContentProps,
  AutocompleteControlProps,
  AutocompleteEmptyProps,
  AutocompleteGroupLabelProps,
  AutocompleteInputProps,
  AutocompleteItemProps,
  AutocompleteListProps,
  AutocompleteProps,
  AutocompleteSeparatorProps,
  AutocompleteTriggerProps
}
