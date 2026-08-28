'use client'

import type { ColorPickerValueChangeDetails } from '@ark-ui/react/color-picker'
import {
  ColorPicker as ArkColorPicker,
  parseColor as parseColorArk,
  useColorPickerContext
} from '@ark-ui/react/color-picker'
import { ark } from '@ark-ui/react/factory'
import { Portal } from '@ark-ui/react/portal'
import { CheckIcon, Pipette } from 'lucide-react'
import React from 'react'
import { cn } from 'tailwind-variants'

import type { ButtonProps } from '../button'
import { Button } from '../button'
import { DEFAULT_COLOR_PICKER_POSITIONING } from './color-picker.core.constants'
import {
  colorPickerAreaBackgroundRecipe,
  colorPickerAreaRecipe,
  colorPickerAreaThumbRecipe,
  colorPickerContentRecipe,
  colorPickerControlRecipe,
  colorPickerRootRecipe,
  colorPickerSliderRecipe,
  colorPickerSliderThumbRecipe,
  colorPickerSliderTrackRecipe,
  colorPickerSwatchGroupRecipe,
  colorPickerSwatchIndicatorRecipe,
  colorPickerSwatchPreviewRecipe,
  colorPickerSwatchRootRecipe,
  colorPickerSwatchTriggerRecipe,
  colorPickerTransparencyGridRecipe,
  colorPickerValueRecipe,
  colorPickerValueSwatchRecipe,
  colorPickerViewRecipe
} from './color-picker.core.styles'

/**
 * Shared Color Picker Controlled Keys type.
 *
 * @example
 *   type Example = ColorPickerControlledKeys
 */
type ColorPickerControlledKeys = 'defaultValue' | 'value'

/**
 * Props for the Color Picker component.
 *
 * @example
 *   type Example = ColorPickerProps
 */
type ColorPickerProps = Omit<
  React.ComponentProps<typeof ArkColorPicker.Root>,
  ColorPickerControlledKeys
> & {
  /** The default value of the color picker. */
  defaultValue?: string
  /** The value of the color picker. */
  value?: string
}

/**
 * Props for the Color Picker Eye Dropper Trigger component.
 *
 * @example
 *   type Example = ColorPickerEyeDropperTriggerProps
 */
type ColorPickerEyeDropperTriggerProps = React.ComponentProps<
  typeof ArkColorPicker.EyeDropperTrigger
> &
  ButtonProps

/**
 * Props for the Color Picker Area component.
 *
 * @example
 *   type Example = ColorPickerAreaProps
 */
type ColorPickerAreaProps = React.ComponentProps<
  typeof ArkColorPicker.Area
> & {
  /**
   * Whether to show the dotted overlay.
   *
   * @default false
   */
  withDots?: boolean
}

/**
 * Props for the Color Picker Control component.
 *
 * @example
 *   type Example = ColorPickerControlProps
 */
type ColorPickerControlProps = React.ComponentProps<
  typeof ArkColorPicker.Control
>

/**
 * Props for the Color Picker Trigger component.
 *
 * @example
 *   type Example = ColorPickerTriggerProps
 */
type ColorPickerTriggerProps = React.ComponentProps<
  typeof ArkColorPicker.Trigger
>

/**
 * Props for the Color Picker Transparency Grid component.
 *
 * @example
 *   type Example = ColorPickerTransparencyGridProps
 */
type ColorPickerTransparencyGridProps = React.ComponentProps<
  typeof ArkColorPicker.TransparencyGrid
>

/**
 * Props for the Color Picker Content component.
 *
 * @example
 *   type Example = ColorPickerContentProps
 */
type ColorPickerContentProps = React.ComponentProps<
  typeof ArkColorPicker.Content
>

/**
 * Props for the Color Picker View component.
 *
 * @example
 *   type Example = ColorPickerViewProps
 */
type ColorPickerViewProps = React.ComponentProps<
  typeof ArkColorPicker.View
>

/**
 * Props for the Color Picker Slider component.
 *
 * @example
 *   type Example = ColorPickerSliderProps
 */
type ColorPickerSliderProps = React.ComponentProps<
  typeof ArkColorPicker.ChannelSlider
>

/**
 * Props for the Color Picker Swatch Group component.
 *
 * @example
 *   type Example = ColorPickerSwatchGroupProps
 */
type ColorPickerSwatchGroupProps = React.ComponentProps<
  typeof ArkColorPicker.SwatchGroup
>

/**
 * Props for the Color Picker Swatch Trigger component.
 *
 * @example
 *   type Example = ColorPickerSwatchTriggerProps
 */
type ColorPickerSwatchTriggerProps = React.ComponentProps<
  typeof ArkColorPicker.SwatchTrigger
>

/**
 * Props for the Color Picker Swatch component.
 *
 * @example
 *   type Example = ColorPickerSwatchProps
 */
type ColorPickerSwatchProps = React.ComponentProps<
  typeof ArkColorPicker.Swatch
>

/**
 * Props for the Color Picker Swatch Indicator component.
 *
 * @example
 *   type Example = ColorPickerSwatchIndicatorProps
 */
type ColorPickerSwatchIndicatorProps = React.ComponentProps<
  typeof ArkColorPicker.SwatchIndicator
>

/**
 * Props for the Color Picker Value component.
 *
 * @example
 *   type Example = ColorPickerValueProps
 */
type ColorPickerValueProps = React.ComponentProps<
  typeof ArkColorPicker.ValueText
>

/**
 * Props for the Color Picker Value Swatch component.
 *
 * @example
 *   type Example = ColorPickerValueSwatchProps
 */
type ColorPickerValueSwatchProps = React.ComponentProps<
  typeof ArkColorPicker.ValueSwatch
>

/**
 * Props for the Color Picker Area Thumb component.
 *
 * @example
 *   type Example = ColorPickerAreaThumbProps
 */
type ColorPickerAreaThumbProps = React.ComponentProps<
  typeof ArkColorPicker.AreaThumb
>

/**
 * Props for the Color Picker Input component.
 *
 * @example
 *   type Example = ColorPickerInputProps
 */
type ColorPickerInputProps = Partial<
  React.ComponentProps<typeof ArkColorPicker.ChannelInput>
>

/**
 * Props for the Color Picker Swatch Preview component.
 *
 * @example
 *   type Example = ColorPickerSwatchPreviewProps
 */
type ColorPickerSwatchPreviewProps = React.ComponentProps<
  typeof ark.div
>

const parseColor = parseColorArk

const useColorPicker = useColorPickerContext

/**
 * Renders the Color Picker component.
 *
 * @example
 *   ;<ColorPicker />
 */
function ColorPicker({
  value,
  defaultValue,
  positioning = DEFAULT_COLOR_PICKER_POSITIONING,
  lazyMount = true,
  unmountOnExit = true,
  onValueChange,
  className,
  children,
  ...props
}: ColorPickerProps) {
  const [internalValue, setInternalValue] =
    React.useState(defaultValue)
  const isControlled = value !== undefined

  const handleValueChange = (e: ColorPickerValueChangeDetails) => {
    if (isControlled) {
      onValueChange?.(e)
    } else {
      setInternalValue(e.valueAsString)
    }
  }

  return (
    <ArkColorPicker.Root
      className={cn(colorPickerRootRecipe(), className)}
      data-slot='color-picker'
      defaultValue={
        internalValue ? parseColor(internalValue) : undefined
      }
      lazyMount={lazyMount}
      onValueChange={handleValueChange}
      positioning={positioning}
      unmountOnExit={unmountOnExit}
      value={isControlled ? parseColor(value) : undefined}
      {...props}
    >
      {children}

      <ArkColorPicker.HiddenInput />
    </ArkColorPicker.Root>
  )
}

/**
 * Renders the Color Picker Control component.
 *
 * @example
 *   ;<ColorPickerControl />
 */
function ColorPickerControl({
  className,
  ...props
}: ColorPickerControlProps) {
  return (
    <ArkColorPicker.Control
      className={cn(colorPickerControlRecipe(), className)}
      data-slot='color-picker-control'
      {...props}
    />
  )
}

/**
 * Renders the Color Picker Trigger component.
 *
 * @example
 *   ;<ColorPickerTrigger />
 */
function ColorPickerTrigger({ ...props }: ColorPickerTriggerProps) {
  return (
    <ArkColorPicker.Trigger
      data-slot='color-picker-trigger'
      {...props}
    />
  )
}

/**
 * Renders the Color Picker Transparency Grid component.
 *
 * @example
 *   ;<ColorPickerTransparencyGrid />
 */
function ColorPickerTransparencyGrid({
  className,
  ...props
}: ColorPickerTransparencyGridProps) {
  return (
    <ArkColorPicker.TransparencyGrid
      className={cn(colorPickerTransparencyGridRecipe(), className)}
      {...props}
    />
  )
}

/**
 * Renders the Color Picker Content component.
 *
 * @example
 *   ;<ColorPickerContent />
 */
function ColorPickerContent({
  className,
  ...props
}: ColorPickerContentProps) {
  return (
    <Portal>
      <ArkColorPicker.Positioner data-slot='color-picker-positioner'>
        <ArkColorPicker.Content
          className={cn(colorPickerContentRecipe(), className)}
          data-slot='color-picker-content'
          {...props}
        />
      </ArkColorPicker.Positioner>
    </Portal>
  )
}

/**
 * Renders the Color Picker View component.
 *
 * @example
 *   ;<ColorPickerView />
 */
function ColorPickerView({
  className,
  ...props
}: ColorPickerViewProps) {
  return (
    <ArkColorPicker.View
      className={cn(colorPickerViewRecipe(), className)}
      data-slot='color-picker-view'
      {...props}
    />
  )
}

/**
 * Renders the Color Picker Slider component.
 *
 * @example
 *   ;<ColorPickerSlider />
 */
function ColorPickerSlider({
  className,
  children,
  ...props
}: ColorPickerSliderProps) {
  return (
    <ArkColorPicker.ChannelSlider
      className={cn(colorPickerSliderRecipe(), className)}
      data-slot='color-picker-channel-slider'
      {...props}
    >
      {children}

      <ArkColorPicker.ChannelSliderTrack
        className={colorPickerSliderTrackRecipe()}
        data-slot='color-picker-channel-slider-track'
      />
      <ArkColorPicker.ChannelSliderThumb
        className={colorPickerSliderThumbRecipe()}
        data-slot='color-picker-channel-slider-thumb'
      />
    </ArkColorPicker.ChannelSlider>
  )
}

/**
 * Renders the Color Picker Eye Dropper Trigger component.
 *
 * @example
 *   ;<ColorPickerEyeDropperTrigger />
 */
function ColorPickerEyeDropperTrigger({
  variant = 'outline',
  size = 'icon-md',
  children,
  ...props
}: ColorPickerEyeDropperTriggerProps) {
  return (
    <ArkColorPicker.EyeDropperTrigger
      data-slot='color-picker-eye-dropper'
      {...props}
      asChild
    >
      <Button size={size} variant={variant}>
        {children || <Pipette />}
      </Button>
    </ArkColorPicker.EyeDropperTrigger>
  )
}

/**
 * Renders the Color Picker Swatch Group component.
 *
 * @example
 *   ;<ColorPickerSwatchGroup />
 */
function ColorPickerSwatchGroup({
  className,
  ...props
}: ColorPickerSwatchGroupProps) {
  return (
    <ArkColorPicker.SwatchGroup
      className={cn(colorPickerSwatchGroupRecipe(), className)}
      data-slot='color-picker-swatch-group'
      {...props}
    />
  )
}

/**
 * Renders the Color Picker Swatch Trigger component.
 *
 * @example
 *   ;<ColorPickerSwatchTrigger />
 */
function ColorPickerSwatchTrigger({
  className,
  ...props
}: ColorPickerSwatchTriggerProps) {
  return (
    <ArkColorPicker.SwatchTrigger
      className={cn(colorPickerSwatchTriggerRecipe(), className)}
      data-slot='color-picker-swatch-trigger'
      {...props}
    />
  )
}

/**
 * Renders the Color Picker Swatch component.
 *
 * @example
 *   ;<ColorPickerSwatch />
 */
function ColorPickerSwatch({
  className,
  ...props
}: ColorPickerSwatchProps) {
  return (
    <ArkColorPicker.Swatch
      className={cn(colorPickerSwatchRootRecipe(), className)}
      data-slot='color-picker-swatch'
      {...props}
    />
  )
}

/**
 * Renders the Color Picker Swatch Indicator component.
 *
 * @example
 *   ;<ColorPickerSwatchIndicator />
 */
function ColorPickerSwatchIndicator({
  className,
  children,
  ...props
}: ColorPickerSwatchIndicatorProps) {
  return (
    <ArkColorPicker.SwatchIndicator
      className={cn(colorPickerSwatchIndicatorRecipe(), className)}
      data-slot='color-picker-swatch-indicator'
      {...props}
    >
      {children || <CheckIcon />}
    </ArkColorPicker.SwatchIndicator>
  )
}

/**
 * Renders the Color Picker Value component.
 *
 * @example
 *   ;<ColorPickerValue />
 */
function ColorPickerValue({
  className,
  ...props
}: ColorPickerValueProps) {
  return (
    <ArkColorPicker.ValueText
      className={cn(colorPickerValueRecipe(), className)}
      data-slot='color-picker-value'
      {...props}
    />
  )
}

/**
 * Renders the Color Picker Value Swatch component.
 *
 * @example
 *   ;<ColorPickerValueSwatch />
 */
function ColorPickerValueSwatch({
  className,
  ...props
}: ColorPickerValueSwatchProps) {
  return (
    <ArkColorPicker.ValueSwatch
      className={cn(colorPickerValueSwatchRecipe(), className)}
      data-slot='color-picker-value-swatch'
      {...props}
    />
  )
}

/**
 * Renders the Color Picker Area component.
 *
 * @example
 *   ;<ColorPickerArea />
 */
function ColorPickerArea({
  className,
  withDots = false,
  children,
  ...props
}: ColorPickerAreaProps) {
  return (
    <ArkColorPicker.Area
      className={cn(colorPickerAreaRecipe({ withDots }), className)}
      data-slot='color-picker-area'
      {...props}
    >
      <ArkColorPicker.AreaBackground
        className={colorPickerAreaBackgroundRecipe()}
        data-slot='color-picker-area-background'
      />

      {children}
    </ArkColorPicker.Area>
  )
}

/**
 * Renders the Color Picker Area Thumb component.
 *
 * @example
 *   ;<ColorPickerAreaThumb />
 */
function ColorPickerAreaThumb({
  className,
  ...props
}: ColorPickerAreaThumbProps) {
  return (
    <ArkColorPicker.AreaThumb
      className={cn(colorPickerAreaThumbRecipe(), className)}
      data-slot='color-picker-area-thumb'
      {...props}
    />
  )
}

/**
 * Renders the Color Picker Input component.
 *
 * @example
 *   ;<ColorPickerInput />
 */
function ColorPickerInput({
  channel = 'hex',
  ...props
}: ColorPickerInputProps) {
  return (
    <ArkColorPicker.ChannelInput
      channel={channel}
      data-slot='color-picker-input'
      {...props}
    />
  )
}

/**
 * Renders the Color Picker Swatch Preview component.
 *
 * @example
 *   ;<ColorPickerSwatchPreview />
 */
function ColorPickerSwatchPreview({
  className,
  ...props
}: ColorPickerSwatchPreviewProps) {
  return (
    <ark.div
      className={cn(colorPickerSwatchPreviewRecipe(), className)}
      data-slot='color-picker-input-swatch'
      {...props}
    >
      <ArkColorPicker.TransparencyGrid
        className={cn(colorPickerTransparencyGridRecipe())}
      />
      <ArkColorPicker.ValueSwatch className='z-1 size-full' />
    </ark.div>
  )
}

export {
  ColorPicker,
  ColorPickerArea,
  ColorPickerAreaThumb,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerEyeDropperTrigger,
  ColorPickerInput,
  ColorPickerSlider,
  ColorPickerSwatch,
  ColorPickerSwatchGroup,
  ColorPickerSwatchIndicator,
  ColorPickerSwatchPreview,
  ColorPickerSwatchTrigger,
  ColorPickerTransparencyGrid,
  ColorPickerTrigger,
  ColorPickerValue,
  ColorPickerValueSwatch,
  ColorPickerView,
  parseColor,
  useColorPicker
}

export type {
  ColorPickerAreaProps,
  ColorPickerAreaThumbProps,
  ColorPickerContentProps,
  ColorPickerControlProps,
  ColorPickerEyeDropperTriggerProps,
  ColorPickerInputProps,
  ColorPickerProps,
  ColorPickerSliderProps,
  ColorPickerSwatchGroupProps,
  ColorPickerSwatchIndicatorProps,
  ColorPickerSwatchPreviewProps,
  ColorPickerSwatchProps,
  ColorPickerSwatchTriggerProps,
  ColorPickerTransparencyGridProps,
  ColorPickerTriggerProps,
  ColorPickerValueProps,
  ColorPickerValueSwatchProps,
  ColorPickerViewProps
}
