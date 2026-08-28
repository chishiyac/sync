'use client'

import {
  DatePicker as ArkDatePicker,
  useDatePickerContext
} from '@ark-ui/react/date-picker'
import { Portal } from '@ark-ui/react/portal'
import { CalendarIcon, ClockIcon } from 'lucide-react'
import type React from 'react'
import { cn } from 'tailwind-variants'

import { Button } from '../button'
import { Calendar, CalendarPresetTrigger } from '../calendar'
import type { Input, InputProps } from '../input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from '../input-group'
import {
  datePickerContentRecipe,
  datePickerTimerIconRecipe,
  datePickerTimerInputRecipe,
  datePickerTriggerIconRecipe,
  datePickerTriggerRecipe,
  datePickerValueRecipe
} from './date-picker.core.styles'

/**
 * Props for the Date Picker component.
 *
 * @example
 *   type Example = DatePickerProps
 */
type DatePickerProps = React.ComponentProps<typeof Calendar>

/**
 * Props for the Date Picker Input component.
 *
 * @example
 *   type Example = DatePickerInputProps
 */
type DatePickerInputProps = Omit<
  React.ComponentProps<typeof ArkDatePicker.Input>,
  'size'
> &
  InputProps

/**
 * Props for the Date Picker Trigger component.
 *
 * @example
 *   type Example = DatePickerTriggerProps
 */
type DatePickerTriggerProps = React.ComponentProps<
  typeof ArkDatePicker.Trigger
>

/**
 * Props for the Date Picker Timer component.
 *
 * @example
 *   type Example = DatePickerTimerProps
 */
type DatePickerTimerProps = React.ComponentProps<typeof Input>

/**
 * Props for the Date Picker Content component.
 *
 * @example
 *   type Example = DatePickerContentProps
 */
type DatePickerContentProps = React.ComponentProps<
  typeof ArkDatePicker.Content
>

/**
 * Props for the Date Picker Value component.
 *
 * @example
 *   type Example = DatePickerValueProps
 */
type DatePickerValueProps = React.ComponentProps<
  typeof ArkDatePicker.ValueText
>

/**
 * Props for the Date Picker Preset Trigger component.
 *
 * @example
 *   type Example = DatePickerPresetTriggerProps
 */
type DatePickerPresetTriggerProps = React.ComponentProps<
  typeof ArkDatePicker.PresetTrigger
>

const useDatePicker = useDatePickerContext

const defaultPositioning = { placement: 'top' } as const

/**
 * Renders the Date Picker component.
 *
 * @example
 *   ;<DatePicker />
 */
function DatePicker({
  positioning = defaultPositioning,
  ...props
}: DatePickerProps) {
  return (
    <Calendar
      data-slot='date-picker'
      inline={false}
      positioning={positioning}
      {...props}
    />
  )
}

/**
 * Renders the Date Picker Trigger component.
 *
 * @example
 *   ;<DatePickerTrigger />
 */
function DatePickerTrigger({
  className,
  children,
  ...props
}: DatePickerTriggerProps) {
  return (
    <ArkDatePicker.Control data-slot='date-picker-control'>
      <ArkDatePicker.Trigger
        className={cn(datePickerTriggerRecipe(), className)}
        data-slot='date-picker-trigger'
        {...props}
      >
        {children}
      </ArkDatePicker.Trigger>
    </ArkDatePicker.Control>
  )
}

/**
 * Renders the Date Picker Input component.
 *
 * @example
 *   ;<DatePickerInput />
 */
function DatePickerInput({ size, ...props }: DatePickerInputProps) {
  return (
    <ArkDatePicker.Control data-slot='date-picker-control'>
      <InputGroup size={size}>
        <ArkDatePicker.Input
          asChild
          data-slot='date-picker-input'
          {...props}
        >
          <InputGroupInput />
        </ArkDatePicker.Input>

        <InputGroupAddon align='inline-end'>
          <InputGroupButton
            asChild
            data-slot='input-group-button'
            size='icon-xs'
            variant='ghost'
          >
            <ArkDatePicker.Trigger
              asChild
              data-slot='date-picker-trigger'
            >
              <Button size='icon-md' variant='ghost'>
                <CalendarIcon
                  aria-hidden
                  className={datePickerTriggerIconRecipe()}
                />
              </Button>
            </ArkDatePicker.Trigger>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </ArkDatePicker.Control>
  )
}

/**
 * Renders the Date Picker Timer component.
 *
 * @example
 *   ;<DatePickerTimer />
 */
function DatePickerTimer({
  id,
  value,
  defaultValue,
  className,
  ...props
}: DatePickerTimerProps) {
  return (
    <InputGroup {...props}>
      <InputGroupAddon>
        <ClockIcon className={datePickerTimerIconRecipe()} />
      </InputGroupAddon>
      <InputGroupInput
        className={cn(datePickerTimerInputRecipe(), className)}
        defaultValue={defaultValue}
        id={id}
        step='1'
        type='time'
        value={value}
      />
    </InputGroup>
  )
}

/**
 * Renders the Date Picker Content component.
 *
 * @example
 *   ;<DatePickerContent />
 */
function DatePickerContent({
  className,
  ...props
}: DatePickerContentProps) {
  return (
    <Portal>
      <ArkDatePicker.Positioner data-slot='date-picker-positioner'>
        <ArkDatePicker.Content
          className={cn(datePickerContentRecipe(), className)}
          data-slot='date-picker-content'
          {...props}
        />
      </ArkDatePicker.Positioner>
    </Portal>
  )
}

/**
 * Renders the Date Picker Value component.
 *
 * @example
 *   ;<DatePickerValue />
 */
function DatePickerValue({
  className,
  ...props
}: DatePickerValueProps) {
  return (
    <ArkDatePicker.ValueText
      className={cn(datePickerValueRecipe(), className)}
      data-slot='date-picker-value'
      {...props}
    />
  )
}

/**
 * Renders the Date Picker Preset Trigger component.
 *
 * @example
 *   ;<DatePickerPresetTrigger />
 */
function DatePickerPresetTrigger({
  ...props
}: DatePickerPresetTriggerProps) {
  return (
    <CalendarPresetTrigger
      data-slot='date-picker-preset-trigger'
      {...props}
    />
  )
}

export {
  DatePicker,
  DatePickerContent,
  DatePickerInput,
  DatePickerPresetTrigger,
  DatePickerTimer,
  DatePickerTrigger,
  DatePickerValue,
  useDatePicker
}

export type {
  DatePickerContentProps,
  DatePickerInputProps,
  DatePickerPresetTriggerProps,
  DatePickerProps,
  DatePickerTimerProps,
  DatePickerTriggerProps,
  DatePickerValueProps
}
