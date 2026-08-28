'use client'

import { Tabs as ArkTabs, useTabsContext } from '@ark-ui/react/tabs'
import type React from 'react'
import { cn } from 'tailwind-variants'

import {
  tabsContentRecipe,
  tabsListRecipe,
  tabsListTriggerRecipe,
  tabsRootRecipe
} from './tabs.core.styles'

/**
 * Supported tabs list variants.
 *
 * @example
 *   type Example = TabsListVariant
 */
type TabsListVariant = 'default' | 'underline'

/**
 * Props for the Tabs component.
 *
 * @example
 *   type Example = TabsProps
 */
type TabsProps = React.ComponentProps<typeof ArkTabs.Root>

/**
 * Props for the Tabs List component.
 *
 * @example
 *   type Example = TabsListProps
 */
type TabsListProps = Omit<
  React.ComponentProps<typeof ArkTabs.List>,
  'variant'
> & {
  /**
   * Controls the visual style of the tab list.
   *
   * @default 'default'
   */
  variant?: TabsListVariant
}

/**
 * Props for the Tabs Trigger component.
 *
 * @example
 *   type Example = TabsTriggerProps
 */
type TabsTriggerProps = React.ComponentProps<typeof ArkTabs.Trigger>

/**
 * Props for the Tabs Content component.
 *
 * @example
 *   type Example = TabsContentProps
 */
type TabsContentProps = React.ComponentProps<typeof ArkTabs.Content>

const useTabs = useTabsContext

/**
 * Renders the Tabs component.
 *
 * @example
 *   ;<Tabs />
 */
function Tabs({
  lazyMount = true,
  unmountOnExit = true,
  className,
  ...props
}: TabsProps) {
  return (
    <ArkTabs.Root
      className={cn(tabsRootRecipe(), className)}
      data-slot='tabs'
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...props}
    />
  )
}

/**
 * Renders the Tabs List component.
 *
 * @example
 *   ;<TabsList />
 */
function TabsList({
  variant = 'default',
  className,
  children,
  ...props
}: TabsListProps) {
  const { tabsList, tabsListindicatorRecipe } = tabsListRecipe({
    variant
  })

  return (
    <ArkTabs.List
      className={cn(tabsList(), className)}
      data-slot='tabs-list'
      {...props}
    >
      {children}

      <ArkTabs.Indicator
        className={cn(tabsListindicatorRecipe())}
        data-slot='tab-indicator'
      />
    </ArkTabs.List>
  )
}

/**
 * Renders the Tabs Trigger component.
 *
 * @example
 *   ;<TabsTrigger />
 */
function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  return (
    <ArkTabs.Trigger
      className={cn(tabsListTriggerRecipe(), className)}
      data-slot='tabs-trigger'
      {...props}
    />
  )
}

/**
 * Renders the Tabs Content component.
 *
 * @example
 *   ;<TabsContent />
 */
function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <ArkTabs.Content
      className={cn(tabsContentRecipe(), className)}
      data-slot='tabs-content'
      {...props}
    />
  )
}

export { Tabs, TabsContent, TabsList, TabsTrigger, useTabs }

export type {
  TabsContentProps,
  TabsListProps,
  TabsListVariant,
  TabsProps
}
