'use client'

import {
  ToggleGroup as ArkToggleGroup,
  useToggleGroupContext as useArkToggleGroupContext
} from '@ark-ui/react/toggle-group'
import React from 'react'
import { cn } from 'tailwind-variants'

import { Toggle } from '../toggle'
import {
  toggleGroupItemRecipe,
  toggleGroupRecipe
} from './toggle-group.core.styles'

/**
 * Shared Toggle Group Context Keys type.
 *
 * @example
 *   type Example = ToggleGroupContextKeys
 */
type ToggleGroupContextKeys = 'variant' | 'size'

/**
 * Props for the Toggle Base component.
 *
 * @example
 *   type Example = ToggleBaseProps
 */
type ToggleBaseProps = React.ComponentProps<typeof Toggle>

/**
 * Props for the Toggle Group Context component.
 *
 * @example
 *   type Example = ToggleGroupContextProps
 */
type ToggleGroupContextProps = Pick<
  ToggleBaseProps,
  ToggleGroupContextKeys
> & {
  /**
   * Gap between items.
   *
   * @default 0
   */
  spacing?: number
}

/**
 * Props for the Toggle Group component.
 *
 * @example
 *   type Example = ToggleGroupProps
 */
type ToggleGroupProps = React.ComponentProps<
  typeof ArkToggleGroup.Root
> &
  ToggleGroupContextProps

/**
 * Props for the Toggle Group Item component.
 *
 * @example
 *   type Example = ToggleGroupItemProps
 */
type ToggleGroupItemProps = React.ComponentProps<
  typeof ArkToggleGroup.Item
>

const ToggleGroupContext = React.createContext(
  {} as ToggleGroupContextProps
)

const useToggleGroup = useArkToggleGroupContext

/**
 * Renders the Toggle Group component.
 *
 * @example
 *   ;<ToggleGroup />
 */
function ToggleGroup({
  multiple = true,
  orientation = 'horizontal',
  variant = 'ghost',
  size = 'md',
  spacing = 0,
  className,
  style,
  ...props
}: ToggleGroupProps) {
  return (
    <ToggleGroupContext.Provider value={{ size, spacing, variant }}>
      <ArkToggleGroup.Root
        className={cn(toggleGroupRecipe({ orientation }), className)}
        data-slot='toggle-group'
        multiple={multiple}
        orientation={orientation}
        style={
          {
            ...style,
            '--gap': spacing
          } as React.CSSProperties
        }
        {...props}
      />
    </ToggleGroupContext.Provider>
  )
}

/**
 * Returns the shared Toggle Group state.
 *
 * @example
 *   const toggleGroup = _useToggleGroup()
 */
function _useToggleGroup() {
  const context = React.useContext(ToggleGroupContext)
  if (!context) {
    throw new Error(
      'useToggleGroupContext must be used within a ToggleGroup'
    )
  }
  return context
}

/**
 * Renders the Toggle Group Item component.
 *
 * @example
 *   ;<ToggleGroupItem />
 */
function ToggleGroupItem({
  value,
  className,
  ...props
}: ToggleGroupItemProps) {
  const { variant, size, spacing } = _useToggleGroup()
  return (
    <ArkToggleGroup.Item
      asChild
      data-slot='toggle-group-item'
      value={value}
    >
      <Toggle
        className={cn(toggleGroupItemRecipe(), className)}
        data-spacing={spacing}
        data-variant={variant}
        size={size}
        variant={variant}
        {...props}
      />
    </ArkToggleGroup.Item>
  )
}

export { ToggleGroup, ToggleGroupItem, useToggleGroup }

export type {
  ToggleBaseProps,
  ToggleGroupContextKeys,
  ToggleGroupContextProps,
  ToggleGroupItemProps,
  ToggleGroupProps
}
