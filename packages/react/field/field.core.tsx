'use client'

import { ark } from '@ark-ui/react/factory'
import {
  Field as ArkField,
  useFieldContext as useArkFieldContext
} from '@ark-ui/react/field'
import { Fieldset as ArkFieldset } from '@ark-ui/react/fieldset'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { Separator } from '../separator'
import {
  fieldContentRecipe,
  fieldDescription,
  fieldErrorRecipe,
  fieldGroupRecipe,
  fieldHelperRecipe,
  fieldLabelRecipe,
  fieldLabelSeparatorRecipe,
  fieldLegendRecipe,
  fieldRequiredIndicatorRecipe,
  fieldRootRecipe,
  fieldSeparatorRecipe,
  fieldSeparatorSideRecipe,
  fieldSetRecipe,
  fieldTitleRecipe
} from './field.core.styles'

/**
 * Supported field legend variants.
 *
 * @example
 *   type Example = FieldLegendVariant
 */
type FieldLegendVariant = 'legend' | 'label'

/**
 * Props for the Field component.
 *
 * @example
 *   type Example = FieldProps
 */
type FieldProps = React.ComponentProps<typeof ArkField.Root> &
  VariantProps<typeof fieldRootRecipe>

/**
 * Props for the Field Legend component.
 *
 * @example
 *   type Example = FieldLegendProps
 */
type FieldLegendProps = React.ComponentProps<
  typeof ArkFieldset.Legend
> & {
  /** The variant of the legend. */
  variant?: FieldLegendVariant
}

/**
 * Props for the Field Set component.
 *
 * @example
 *   type Example = FieldSetProps
 */
type FieldSetProps = React.ComponentProps<typeof ArkFieldset.Root>

/**
 * Props for the Field Group component.
 *
 * @example
 *   type Example = FieldGroupProps
 */
type FieldGroupProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Field Content component.
 *
 * @example
 *   type Example = FieldContentProps
 */
type FieldContentProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Field Label component.
 *
 * @example
 *   type Example = FieldLabelProps
 */
type FieldLabelProps = React.ComponentProps<typeof ArkField.Label>

/**
 * Props for the Field Required Indicator component.
 *
 * @example
 *   type Example = FieldRequiredIndicatorProps
 */
type FieldRequiredIndicatorProps = React.ComponentProps<
  typeof ark.span
>

/**
 * Props for the Field Title component.
 *
 * @example
 *   type Example = FieldTitleProps
 */
type FieldTitleProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Field Description component.
 *
 * @example
 *   type Example = FieldDescriptionProps
 */
type FieldDescriptionProps = React.ComponentProps<typeof ark.p>

/**
 * Props for the Field Separator component.
 *
 * @example
 *   type Example = FieldSeparatorProps
 */
type FieldSeparatorProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Field Error component.
 *
 * @example
 *   type Example = FieldErrorProps
 */
type FieldErrorProps = React.ComponentProps<typeof ArkField.ErrorText>

/**
 * Props for the Field Helper component.
 *
 * @example
 *   type Example = FieldHelperProps
 */
type FieldHelperProps = React.ComponentProps<
  typeof ArkField.HelperText
>

const useField = useArkFieldContext

/**
 * Renders the Field component.
 *
 * @example
 *   ;<Field />
 */
function Field({
  orientation = 'vertical',
  reverse = false,
  className,
  ...props
}: FieldProps) {
  return (
    <ArkField.Root
      className={cn(
        fieldRootRecipe({ orientation, reverse }),
        className
      )}
      data-orientation={orientation}
      data-slot='field'
      {...props}
    />
  )
}

/**
 * Renders the Field Set component.
 *
 * @example
 *   ;<FieldSet />
 */
function FieldSet({ className, ...props }: FieldSetProps) {
  return (
    <ArkFieldset.Root
      className={cn(fieldSetRecipe(), className)}
      data-slot='field-set'
      {...props}
    />
  )
}

/**
 * Renders the Field Legend component.
 *
 * @example
 *   ;<FieldLegend />
 */
function FieldLegend({
  variant = 'legend',
  className,
  ...props
}: FieldLegendProps) {
  return (
    <ArkFieldset.Legend
      className={cn(fieldLegendRecipe(), className)}
      data-slot='field-legend'
      data-variant={variant}
      {...props}
    />
  )
}

/**
 * Renders the Field Group component.
 *
 * @example
 *   ;<FieldGroup />
 */
function FieldGroup({ className, ...props }: FieldGroupProps) {
  return (
    <ark.div
      className={cn(fieldGroupRecipe(), className)}
      data-slot='field-group'
      {...props}
    />
  )
}

/**
 * Renders the Field Content component.
 *
 * @example
 *   ;<FieldContent />
 */
function FieldContent({ className, ...props }: FieldContentProps) {
  return (
    <ark.div
      className={cn(fieldContentRecipe(), className)}
      data-slot='field-content'
      {...props}
    />
  )
}

/**
 * Renders the Field Label component.
 *
 * @example
 *   ;<FieldLabel />
 */
function FieldLabel({ className, ...props }: FieldLabelProps) {
  return (
    <ArkField.Label
      className={cn(fieldLabelRecipe(), className)}
      data-slot='field-label'
      {...props}
    />
  )
}

/**
 * Renders the Field Required Indicator component.
 *
 * @example
 *   ;<FieldRequiredIndicator />
 */
function FieldRequiredIndicator({
  className,
  children,
  ...props
}: FieldRequiredIndicatorProps) {
  return (
    <ArkField.RequiredIndicator
      aria-hidden
      className={cn(fieldRequiredIndicatorRecipe(), className)}
      data-slot='field-required-indicator'
      {...props}
    >
      {children ?? '*'}
    </ArkField.RequiredIndicator>
  )
}

/**
 * Renders the Field Title component.
 *
 * @example
 *   ;<FieldTitle />
 */
function FieldTitle({ className, ...props }: FieldTitleProps) {
  return (
    <ark.div
      className={cn(fieldTitleRecipe(), className)}
      data-slot='field-title'
      {...props}
    />
  )
}

/**
 * Renders the Field Description component.
 *
 * @example
 *   ;<FieldDescription />
 */
function FieldDescription({
  className,
  ...props
}: FieldDescriptionProps) {
  return (
    <ark.p
      className={cn(fieldDescription(), className)}
      data-slot='field-description'
      {...props}
    />
  )
}

/**
 * Renders the Field Separator component.
 *
 * @example
 *   ;<FieldSeparator />
 */
function FieldSeparator({
  className,
  children,
  ...props
}: FieldSeparatorProps) {
  return (
    <ark.div
      className={cn(fieldSeparatorRecipe(), className)}
      data-content={!!children}
      data-slot='field-separator'
      {...props}
    >
      <Separator className={fieldSeparatorSideRecipe()} />

      {!!children && (
        <span className={fieldLabelSeparatorRecipe()}>
          {children}
        </span>
      )}
    </ark.div>
  )
}

/**
 * Renders the Field Helper component.
 *
 * @example
 *   ;<FieldHelper />
 */
function FieldHelper({ className, ...props }: FieldHelperProps) {
  return (
    <ArkField.HelperText
      className={cn(fieldHelperRecipe(), className)}
      data-slot='field-helper'
      {...props}
    />
  )
}

/**
 * Renders the Field Error component.
 *
 * @example
 *   ;<FieldError />
 */
function FieldError({ className, ...props }: FieldErrorProps) {
  return (
    <ArkField.ErrorText
      className={cn(fieldErrorRecipe(), className)}
      data-slot='field-error'
      {...props}
    />
  )
}

export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldHelper,
  FieldLabel,
  FieldLegend,
  FieldRequiredIndicator,
  FieldSeparator,
  FieldSet,
  FieldTitle,
  useField
}

export type {
  FieldContentProps,
  FieldDescriptionProps,
  FieldErrorProps,
  FieldGroupProps,
  FieldHelperProps,
  FieldLabelProps,
  FieldLegendProps,
  FieldLegendVariant,
  FieldProps,
  FieldRequiredIndicatorProps,
  FieldSeparatorProps,
  FieldSetProps,
  FieldTitleProps
}
