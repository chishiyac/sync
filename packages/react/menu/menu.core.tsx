'use client'

import { ark } from '@ark-ui/react/factory'
import type { MenuContentProps } from '@ark-ui/react/menu'
import { Menu as ArkMenu, useMenuContext } from '@ark-ui/react/menu'
import { Portal } from '@ark-ui/react/portal'
import { CheckIcon, ChevronRight } from 'lucide-react'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { DEFAULT_MENU_POSITIONING } from './menu.core.constants'
import {
  menuArrowTipRecipe,
  menuContentRecipe,
  menuGroupLabelRecipe,
  menuIndicatorRecipe,
  menuItemRecipe,
  menuPositionerRecipe,
  menuQuickItemRecipe,
  menuSeparatorRecipe,
  menuShortcutRecipe
} from './menu.core.styles'

/**
 * Supported menu item variants.
 *
 * @example
 *   type Example = MenuItemVariant
 */
type MenuItemVariant = 'default' | 'destructive'

/**
 * Props for the Menu Group component.
 *
 * @example
 *   type Example = MenuGroupProps
 */
type MenuGroupProps = React.ComponentProps<
  typeof ArkMenu.ItemGroup
> & {
  /** The heading of the menu item group. */
  heading?: string
}

/**
 * Props for the Menu Item component.
 *
 * @example
 *   type Example = MenuItemProps
 */
type MenuItemProps = React.ComponentProps<typeof ArkMenu.Item> &
  VariantProps<typeof menuItemRecipe> & {
    /**
     * The visual variant of the menu item.
     *
     * @default 'default'
     */
    variant?: MenuItemVariant
  }

/**
 * Props for the Menu Radio Group component.
 *
 * @example
 *   type Example = MenuRadioGroupProps
 */
type MenuRadioGroupProps = React.ComponentProps<
  typeof ArkMenu.RadioItemGroup
> & {
  /** The heading of the menu radio item group. */
  heading?: string
}

/**
 * Props for the Menu Trigger component.
 *
 * @example
 *   type Example = MenuTriggerProps
 */
type MenuTriggerProps = React.ComponentProps<typeof ArkMenu.Trigger>

/**
 * Props for the Menu Positioner component.
 *
 * @example
 *   type Example = MenuPositionerProps
 */
type MenuPositionerProps = React.ComponentProps<
  typeof ArkMenu.Positioner
>

/**
 * Props for the Menu Separator component.
 *
 * @example
 *   type Example = MenuSeparatorProps
 */
type MenuSeparatorProps = React.ComponentProps<
  typeof ArkMenu.Separator
>

/**
 * Props for the Menu Checkbox Item component.
 *
 * @example
 *   type Example = MenuCheckboxItemProps
 */
type MenuCheckboxItemProps = React.ComponentProps<
  typeof ArkMenu.CheckboxItem
>

/**
 * Props for the Menu Group Label component.
 *
 * @example
 *   type Example = MenuGroupLabelProps
 */
type MenuGroupLabelProps = React.ComponentProps<
  typeof ArkMenu.ItemGroupLabel
>

/**
 * Props for the Menu Radio Item component.
 *
 * @example
 *   type Example = MenuRadioItemProps
 */
type MenuRadioItemProps = React.ComponentProps<
  typeof ArkMenu.RadioItem
>

/**
 * Props for the Menu Sub component.
 *
 * @example
 *   type Example = MenuSubProps
 */
type MenuSubProps = React.ComponentProps<typeof Menu>

/**
 * Props for the Menu Sub Content component.
 *
 * @example
 *   type Example = MenuSubContentProps
 */
type MenuSubContentProps = React.ComponentProps<
  typeof ArkMenu.Content
>

/**
 * Props for the Menu Shortcut component.
 *
 * @example
 *   type Example = MenuShortcutProps
 */
type MenuShortcutProps = React.ComponentProps<typeof ark.span>

/**
 * Props for the Menu Sub Trigger component.
 *
 * @example
 *   type Example = MenuSubTriggerProps
 */
type MenuSubTriggerProps = React.ComponentProps<
  typeof ArkMenu.TriggerItem
>

/**
 * Props for the Menu Arrow component.
 *
 * @example
 *   type Example = MenuArrowProps
 */
type MenuArrowProps = React.ComponentProps<typeof ArkMenu.Arrow>

/**
 * Props for the Menu component.
 *
 * @example
 *   type Example = MenuProps
 */
type MenuProps = React.ComponentProps<typeof ArkMenu.Root>

const useMenu = useMenuContext

/**
 * Renders the Menu component.
 *
 * @example
 *   ;<Menu />
 */
function Menu({
  lazyMount = true,
  positioning = DEFAULT_MENU_POSITIONING,
  unmountOnExit = true,
  ...props
}: MenuProps) {
  return (
    <ArkMenu.Root
      data-slot='menu'
      lazyMount={lazyMount}
      positioning={positioning}
      unmountOnExit={unmountOnExit}
      {...props}
    />
  )
}

/**
 * Renders the Menu Trigger component.
 *
 * @example
 *   ;<MenuTrigger />
 */
function MenuTrigger({ ...props }: MenuTriggerProps) {
  return <ArkMenu.Trigger data-slot='menu-trigger' {...props} />
}

/**
 * Renders the Menu Positioner component.
 *
 * @example
 *   ;<MenuPositioner />
 */
function MenuPositioner({
  className,
  ...props
}: MenuPositionerProps) {
  return (
    <ArkMenu.Positioner
      className={cn(menuPositionerRecipe(), className)}
      data-slot='menu-positioner'
      {...props}
    />
  )
}

/**
 * Renders the Menu Content component.
 *
 * @example
 *   ;<MenuContent />
 */
function MenuContent({
  className,
  children,
  ...props
}: MenuContentProps) {
  return (
    <Portal>
      <MenuPositioner>
        <ArkMenu.Content
          className={cn(menuContentRecipe(), className)}
          data-slot='menu-content'
          {...props}
        >
          {children}
        </ArkMenu.Content>
      </MenuPositioner>
    </Portal>
  )
}

/**
 * Renders the Menu Separator component.
 *
 * @example
 *   ;<MenuSeparator />
 */
function MenuSeparator({ className, ...props }: MenuSeparatorProps) {
  return (
    <ArkMenu.Separator
      className={cn(menuSeparatorRecipe(), className)}
      data-slot='menu-separator'
      {...props}
    />
  )
}

/**
 * Renders the Menu Item component.
 *
 * @example
 *   ;<MenuItem />
 */
function MenuItem({
  variant = 'default',
  className,
  ...props
}: MenuItemProps) {
  return (
    <ArkMenu.Item
      className={cn(menuItemRecipe({ variant }), className)}
      data-variant={variant}
      {...props}
    />
  )
}

/**
 * Renders the Menu Quick Item component.
 *
 * @example
 *   ;<MenuQuickItem />
 */
function MenuQuickItem({
  variant = 'default',
  className,
  ...props
}: MenuItemProps) {
  return (
    <ArkMenu.Item
      className={cn(
        menuItemRecipe({ variant }),
        menuQuickItemRecipe(),
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the Menu Checkbox Item component.
 *
 * @example
 *   ;<MenuCheckboxItem />
 */
function MenuCheckboxItem({
  className,
  children,
  ...props
}: MenuCheckboxItemProps) {
  return (
    <ArkMenu.CheckboxItem
      className={cn(
        menuItemRecipe({ variant: 'default' }),
        'ps-8',
        className
      )}
      {...props}
    >
      <ArkMenu.ItemIndicator className={menuIndicatorRecipe()}>
        <CheckIcon />
      </ArkMenu.ItemIndicator>

      <ArkMenu.ItemText>{children}</ArkMenu.ItemText>
    </ArkMenu.CheckboxItem>
  )
}

/**
 * Renders the Menu Group Label component.
 *
 * @example
 *   ;<MenuGroupLabel />
 */
function MenuGroupLabel({
  className,
  ...props
}: MenuGroupLabelProps) {
  return (
    <ArkMenu.ItemGroupLabel
      className={cn(menuGroupLabelRecipe(), className)}
      data-slot='menu-group-label'
      {...props}
    />
  )
}

/**
 * Renders the Menu Group component.
 *
 * @example
 *   ;<MenuGroup />
 */
function MenuGroup({ heading, children, ...props }: MenuGroupProps) {
  return (
    <ArkMenu.ItemGroup data-slot='menu-group' {...props}>
      {!!heading && <MenuGroupLabel>{heading}</MenuGroupLabel>}

      {children}
    </ArkMenu.ItemGroup>
  )
}

/**
 * Renders the Menu Radio Group component.
 *
 * @example
 *   ;<MenuRadioGroup />
 */
function MenuRadioGroup({
  heading,
  children,
  ...props
}: MenuRadioGroupProps) {
  return (
    <ArkMenu.RadioItemGroup data-slot='menu-radio-group' {...props}>
      {!!heading && <MenuGroupLabel>{heading}</MenuGroupLabel>}

      {children}
    </ArkMenu.RadioItemGroup>
  )
}

/**
 * Renders the Menu Radio Item component.
 *
 * @example
 *   ;<MenuRadioItem />
 */
function MenuRadioItem({
  className,
  children,
  ...props
}: MenuRadioItemProps) {
  return (
    <ArkMenu.RadioItem
      className={cn(
        menuItemRecipe({ variant: 'default' }),
        'ps-8',
        className
      )}
      data-slot='menu-radio-item'
      {...props}
    >
      <ArkMenu.ItemIndicator className={menuIndicatorRecipe()}>
        <CheckIcon />
      </ArkMenu.ItemIndicator>

      <ArkMenu.ItemText data-slot='menu-radio-item-text'>
        {children}
      </ArkMenu.ItemText>
    </ArkMenu.RadioItem>
  )
}

/**
 * Renders the Menu Sub component.
 *
 * @example
 *   ;<MenuSub />
 */
function MenuSub({ ...props }: MenuSubProps) {
  return <Menu data-slot='menu-sub' {...props} />
}

/**
 * Renders the Menu Sub Content component.
 *
 * @example
 *   ;<MenuSubContent />
 */
function MenuSubContent({
  className,
  ...props
}: MenuSubContentProps) {
  return (
    <Portal>
      <MenuPositioner data-slot='menu-sub-positioner'>
        <ArkMenu.Content
          className={cn(menuContentRecipe(), className)}
          data-slot='menu-sub-content'
          {...props}
        />
      </MenuPositioner>
    </Portal>
  )
}

/**
 * Renders the Menu Shortcut component.
 *
 * @example
 *   ;<MenuShortcut />
 */
function MenuShortcut({ className, ...props }: MenuShortcutProps) {
  return (
    <ark.span
      className={cn(menuShortcutRecipe(), className)}
      data-slot='menu-shortcut'
      {...props}
    />
  )
}

/**
 * Renders the Menu Sub Trigger component.
 *
 * @example
 *   ;<MenuSubTrigger />
 */
function MenuSubTrigger({
  className,
  children,
  ...props
}: MenuSubTriggerProps) {
  return (
    <ArkMenu.TriggerItem
      className={cn(
        menuItemRecipe({ variant: 'default' }),
        className
      )}
      data-slot='menu-sub-trigger'
      {...props}
    >
      {children}

      <MenuShortcut>
        <ChevronRight />
      </MenuShortcut>
    </ArkMenu.TriggerItem>
  )
}

/**
 * Renders the Menu Arrow component.
 *
 * @example
 *   ;<MenuArrow />
 */
function MenuArrow({ style, ...props }: MenuArrowProps) {
  return (
    <ArkMenu.Arrow
      style={
        {
          '--arrow-background': 'var(--popover)',
          '--arrow-size': 'calc(1.5 * var(--spacing))',
          ...style,
          left: '20px'
        } as React.CSSProperties
      }
      {...props}
    >
      <ArkMenu.ArrowTip className={menuArrowTipRecipe()} />
    </ArkMenu.Arrow>
  )
}

export {
  Menu,
  MenuArrow,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPositioner,
  MenuQuickItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
  useMenu
}

export type {
  MenuArrowProps,
  MenuCheckboxItemProps,
  MenuContentProps,
  MenuGroupLabelProps,
  MenuGroupProps,
  MenuItemProps,
  MenuItemVariant,
  MenuPositionerProps,
  MenuProps,
  MenuRadioGroupProps,
  MenuRadioItemProps,
  MenuSeparatorProps,
  MenuShortcutProps,
  MenuSubContentProps,
  MenuSubProps,
  MenuSubTriggerProps,
  MenuTriggerProps
}
