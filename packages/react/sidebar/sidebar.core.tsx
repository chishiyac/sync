'use client'

import { ark } from '@ark-ui/react/factory'
import { useIsMobile } from '@sync/hooks'
import { PanelLeftIcon } from 'lucide-react'
import React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { Button, buttonRootRecipe } from '../button'
import { Input } from '../input'
import { ScrollArea } from '../scroll-area'
import { Separator } from '../separator'
import { Sheet, SheetContent, SheetHeader } from '../sheet'
import { Skeleton } from '../skeleton'
import { Tooltip, TooltipContent, TooltipTrigger } from '../tooltip'
import {
  SIDEBAR_KEYBOARD_SHORTCUT,
  SIDEBAR_STORAGE_KEY,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_ICON,
  SIDEBAR_WIDTH_MOBILE
} from './sidebar.core.constants'
import {
  sidebarContainerRecipe,
  sidebarContentRecipe,
  sidebarContentViewportRecipe,
  sidebarFooterRecipe,
  sidebarGapRecipe,
  sidebarGroupActionRecipe,
  sidebarGroupContentRecipe,
  sidebarGroupLabelRecipe,
  sidebarGroupRecipe,
  sidebarHeaderRecipe,
  sidebarInnerRecipe,
  sidebarInputRecipe,
  sidebarInsetRecipe,
  sidebarMenuActionRecipe,
  sidebarMenuBadgeRecipe,
  sidebarMenuButtonRecipe,
  sidebarMenuItemRecipe,
  sidebarMenuRecipe,
  sidebarMenuSkeletonIconRecipe,
  sidebarMenuSkeletonRecipe,
  sidebarMenuSkeletonTextRecipe,
  sidebarMenuSubButtonRecipe,
  sidebarMenuSubItemRecipe,
  sidebarMenuSubRecipe,
  sidebarMobileInnerRecipe,
  sidebarMobileSheetContentRecipe,
  sidebarRailRecipe,
  sidebarRootRecipe,
  sidebarSeparatorRecipe,
  sidebarSROnlyRecipe,
  sidebarStaticRecipe,
  sidebarTriggerIconRecipe,
  sidebarTriggerLabelRecipe,
  sidebarWrapperRecipe
} from './sidebar.core.styles'

/**
 * Supported sidebar states.
 *
 * @example
 *   type Example = SidebarState
 */
type SidebarState = 'expanded' | 'collapsed'

/**
 * Shared Sidebar Collapsible type.
 *
 * @example
 *   type Example = SidebarCollapsible
 */
type SidebarCollapsible = 'offcanvas' | 'icon' | 'none'

/**
 * Props for the Sidebar Context component.
 *
 * @example
 *   type Example = SidebarContextProps
 */
type SidebarContextProps = {
  /** Whether the sidebar is currently rendered in the mobile layout. */
  isMobile: boolean
  /** The desktop open state. */
  open: boolean
  /** The mobile open state. */
  openMobile: boolean
  /** Update the desktop sidebar open state. */
  setOpen: (open: boolean) => void
  /** Update the mobile sidebar open state. */
  setOpenMobile: (open: boolean) => void
  /** The current desktop sidebar state. */
  state: SidebarState
  /** Toggle the sidebar open state. */
  toggleSidebar: VoidFunction
}

/**
 * Props for the Sidebar Provider component.
 *
 * @example
 *   type Example = SidebarProviderProps
 */
type SidebarProviderProps = React.ComponentProps<'div'> & {
  /**
   * The default open state of the sidebar.
   *
   * @default true
   */
  defaultOpen?: boolean
  /** The function to call when the open state of the sidebar changes. */
  onOpenChange?: (open: boolean) => void
  /** The open state of the sidebar. */
  open?: boolean
}

/**
 * Props for the Sidebar component.
 *
 * @example
 *   type Example = SidebarProps
 */
type SidebarProps = React.ComponentProps<typeof Sheet> & {
  /** Additional class names for the sidebar container. */
  className?: string
  /** The collapse behavior of the sidebar. */
  collapsible?: SidebarCollapsible
  /** The title shown in the sidebar header. */
  title?: string
  /** The description shown in the sidebar header. */
  description?: string
  /** The placement of the sidebar. */
  placement?: SidebarPlacement
  /** The visual variant of the sidebar. */
  variant?: SidebarVariant
}

/**
 * Props for the Sidebar Content component.
 *
 * @example
 *   type Example = SidebarContentProps
 */
type SidebarContentProps = React.ComponentProps<'div'> & {
  /**
   * Whether to add a scroll fade effect to the sidebar content.
   *
   * @default false
   */
  scrollFade?: boolean
}

/**
 * Supported sidebar placements.
 *
 * @example
 *   type Example = SidebarPlacement
 */
type SidebarPlacement = 'left' | 'right'

/**
 * Supported sidebar variants.
 *
 * @example
 *   type Example = SidebarVariant
 */
type SidebarVariant = 'sidebar' | 'floating' | 'inset'

/**
 * Props for the Sidebar Menu Button component.
 *
 * @example
 *   type Example = SidebarMenuButtonProps
 */
type SidebarMenuButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  'size'
> &
  VariantProps<typeof sidebarMenuButtonRecipe> & {
    /**
     * Whether the button is active.
     *
     * @default false
     */
    isActive?: boolean
    /** The tooltip to display when hovering over the button. */
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
  }

/**
 * Props for the Sidebar Menu Action component.
 *
 * @example
 *   type Example = SidebarMenuActionProps
 */
type SidebarMenuActionProps = React.ComponentProps<
  typeof ark.button
> & {
  /**
   * Whether the action should remain visible on hover.
   *
   * @default false
   */
  showOnHover?: boolean
}

/**
 * Props for the Sidebar Menu Skeleton component.
 *
 * @example
 *   type Example = SidebarMenuSkeletonProps
 */
type SidebarMenuSkeletonProps = React.ComponentProps<
  typeof ark.div
> & {
  /**
   * Whether to show the icon placeholder.
   *
   * @default false
   */
  showIcon?: boolean
}

/**
 * Props for the Sidebar Menu Sub Button component.
 *
 * @example
 *   type Example = SidebarMenuSubButtonProps
 */
type SidebarMenuSubButtonProps = React.ComponentProps<typeof ark.a> &
  React.ComponentProps<typeof Button> &
  VariantProps<typeof sidebarMenuSubButtonRecipe> & {
    /**
     * Whether the sub button is active.
     *
     * @default false
     */
    isActive?: boolean
  }

/**
 * Props for the Sidebar Inset component.
 *
 * @example
 *   type Example = SidebarInsetProps
 */
type SidebarInsetProps = React.ComponentProps<typeof ark.main>

/**
 * Props for the Sidebar Input component.
 *
 * @example
 *   type Example = SidebarInputProps
 */
type SidebarInputProps = React.ComponentProps<typeof Input>

/**
 * Props for the Sidebar Header component.
 *
 * @example
 *   type Example = SidebarHeaderProps
 */
type SidebarHeaderProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Sidebar Footer component.
 *
 * @example
 *   type Example = SidebarFooterProps
 */
type SidebarFooterProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Sidebar Separator component.
 *
 * @example
 *   type Example = SidebarSeparatorProps
 */
type SidebarSeparatorProps = React.ComponentProps<typeof Separator>

/**
 * Props for the Sidebar Group component.
 *
 * @example
 *   type Example = SidebarGroupProps
 */
type SidebarGroupProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Sidebar Group Label component.
 *
 * @example
 *   type Example = SidebarGroupLabelProps
 */
type SidebarGroupLabelProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Sidebar Group Action component.
 *
 * @example
 *   type Example = SidebarGroupActionProps
 */
type SidebarGroupActionProps = React.ComponentProps<typeof ark.button>

/**
 * Props for the Sidebar Group Content component.
 *
 * @example
 *   type Example = SidebarGroupContentProps
 */
type SidebarGroupContentProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Sidebar Menu component.
 *
 * @example
 *   type Example = SidebarMenuProps
 */
type SidebarMenuProps = React.ComponentProps<typeof ark.ul>

/**
 * Props for the Sidebar Menu Item component.
 *
 * @example
 *   type Example = SidebarMenuItemProps
 */
type SidebarMenuItemProps = React.ComponentProps<typeof ark.li>

/**
 * Props for the Sidebar Menu Badge component.
 *
 * @example
 *   type Example = SidebarMenuBadgeProps
 */
type SidebarMenuBadgeProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Sidebar Menu Sub component.
 *
 * @example
 *   type Example = SidebarMenuSubProps
 */
type SidebarMenuSubProps = React.ComponentProps<typeof ark.ul>

/**
 * Props for the Sidebar Menu Sub Item component.
 *
 * @example
 *   type Example = SidebarMenuSubItemProps
 */
type SidebarMenuSubItemProps = React.ComponentProps<typeof ark.li>

/**
 * Props for the Sidebar Trigger component.
 *
 * @example
 *   type Example = SidebarTriggerProps
 */
type SidebarTriggerProps = React.ComponentProps<typeof Button>

/**
 * Props for the Sidebar Rail component.
 *
 * @example
 *   type Example = SidebarRailProps
 */
type SidebarRailProps = React.ComponentProps<typeof ark.button>

const SidebarContext =
  React.createContext<SidebarContextProps | null>(null)

/**
 * Returns the shared Sidebar state.
 *
 * @example
 *   const sidebar = useSidebar()
 */
function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (context === null) {
    throw new Error(
      'useSidebar must be used within a SidebarProvider.'
    )
  }
  return context
}

/**
 * Renders the Sidebar Provider component.
 *
 * @example
 *   ;<SidebarProvider />
 */
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  ...props
}: SidebarProviderProps) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)
  // oxlint-disable-next-line react/hook-use-state
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open

  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState =
        typeof value === 'function' ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      window.localStorage.setItem(
        SIDEBAR_STORAGE_KEY,
        String(openState)
      )
    },
    [setOpenProp, open]
  )

  const toggleSidebar = React.useCallback(() => {
    if (isMobile) {
      setOpenMobile((currentOpen) => !currentOpen)
    } else {
      setOpen((currentOpen) => !currentOpen)
    }
  }, [isMobile, setOpen])

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleSidebar])

  const state = open ? 'expanded' : 'collapsed'
  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      isMobile,
      open,
      openMobile,
      setOpen,
      setOpenMobile,
      state,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <ark.div
        className={cn(sidebarWrapperRecipe(), className)}
        data-slot='sidebar-wrapper'
        style={
          {
            '--sidebar-width': SIDEBAR_WIDTH,
            '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
            ...style
          } as React.CSSProperties
        }
        {...props}
      />
    </SidebarContext.Provider>
  )
}

/**
 * Renders the Sidebar Inset component.
 *
 * @example
 *   ;<SidebarInset />
 */
function SidebarInset({ className, ...props }: SidebarInsetProps) {
  return (
    <ark.main
      className={cn(sidebarInsetRecipe(), className)}
      data-slot='sidebar-inset'
      {...props}
    />
  )
}

/**
 * Renders the Sidebar Input component.
 *
 * @example
 *   ;<SidebarInput />
 */
function SidebarInput({ className, ...props }: SidebarInputProps) {
  return (
    <Input
      className={cn(sidebarInputRecipe(), className)}
      data-sidebar='input'
      data-slot='sidebar-input'
      {...props}
    />
  )
}

/**
 * Renders the Sidebar Header component.
 *
 * @example
 *   ;<SidebarHeader />
 */
function SidebarHeader({ className, ...props }: SidebarHeaderProps) {
  return (
    <ark.div
      className={cn(sidebarHeaderRecipe(), className)}
      data-sidebar='header'
      data-slot='sidebar-header'
      {...props}
    />
  )
}

/**
 * Renders the Sidebar Footer component.
 *
 * @example
 *   ;<SidebarFooter />
 */
function SidebarFooter({ className, ...props }: SidebarFooterProps) {
  return (
    <ark.div
      className={cn(sidebarFooterRecipe(), className)}
      data-sidebar='footer'
      data-slot='sidebar-footer'
      {...props}
    />
  )
}

/**
 * Renders the Sidebar Separator component.
 *
 * @example
 *   ;<SidebarSeparator />
 */
function SidebarSeparator({
  className,
  ...props
}: SidebarSeparatorProps) {
  return (
    <Separator
      className={cn(sidebarSeparatorRecipe(), className)}
      data-sidebar='separator'
      data-slot='sidebar-separator'
      {...props}
    />
  )
}

/**
 * Renders the Sidebar Content component.
 *
 * @example
 *   ;<SidebarContent />
 */
function SidebarContent({
  scrollFade = false,
  className,
  ...props
}: SidebarContentProps) {
  return (
    <ScrollArea
      className={sidebarContentViewportRecipe()}
      scrollFade={scrollFade}
    >
      <ark.div
        className={cn(sidebarContentRecipe(), className)}
        data-sidebar='content'
        data-slot='sidebar-content'
        {...props}
      />
    </ScrollArea>
  )
}

/**
 * Renders the Sidebar Group component.
 *
 * @example
 *   ;<SidebarGroup />
 */
function SidebarGroup({ className, ...props }: SidebarGroupProps) {
  return (
    <ark.div
      className={cn(sidebarGroupRecipe(), className)}
      data-sidebar='group'
      data-slot='sidebar-group'
      {...props}
    />
  )
}

/**
 * Renders the Sidebar Group Label component.
 *
 * @example
 *   ;<SidebarGroupLabel />
 */
function SidebarGroupLabel({
  className,
  ...props
}: SidebarGroupLabelProps) {
  return (
    <ark.div
      className={cn(sidebarGroupLabelRecipe(), className)}
      data-sidebar='group-label'
      data-slot='sidebar-group-label'
      {...props}
    />
  )
}

/**
 * Renders the Sidebar Group Action component.
 *
 * @example
 *   ;<SidebarGroupAction />
 */
function SidebarGroupAction({
  className,
  ...props
}: SidebarGroupActionProps) {
  return (
    <ark.button
      className={cn(
        buttonRootRecipe({
          clickEffect: false,
          size: 'icon-xs',
          variant: 'ghost'
        }),
        sidebarGroupActionRecipe(),
        className
      )}
      data-sidebar='group-action'
      data-slot='sidebar-group-action'
      type='button'
      {...props}
    />
  )
}

/**
 * Renders the Sidebar Group Content component.
 *
 * @example
 *   ;<SidebarGroupContent />
 */
function SidebarGroupContent({
  className,
  ...props
}: SidebarGroupContentProps) {
  return (
    <ark.div
      className={cn(sidebarGroupContentRecipe(), className)}
      data-sidebar='group-content'
      data-slot='sidebar-group-content'
      {...props}
    />
  )
}

/**
 * Renders the Sidebar Menu component.
 *
 * @example
 *   ;<SidebarMenu />
 */
function SidebarMenu({ className, ...props }: SidebarMenuProps) {
  return (
    <ark.ul
      className={cn(sidebarMenuRecipe(), className)}
      data-sidebar='menu'
      data-slot='sidebar-menu'
      {...props}
    />
  )
}

/**
 * Renders the Sidebar Menu Item component.
 *
 * @example
 *   ;<SidebarMenuItem />
 */
function SidebarMenuItem({
  className,
  ...props
}: SidebarMenuItemProps) {
  return (
    <ark.li
      className={cn(sidebarMenuItemRecipe(), className)}
      data-sidebar='menu-item'
      data-slot='sidebar-menu-item'
      {...props}
    />
  )
}

/**
 * Renders the Sidebar Menu Action component.
 *
 * @example
 *   ;<SidebarMenuAction />
 */
function SidebarMenuAction({
  className,
  showOnHover = false,
  ...props
}: SidebarMenuActionProps) {
  return (
    <ark.button
      className={cn(
        buttonRootRecipe({
          clickEffect: false,
          size: 'icon-xs',
          variant: 'ghost'
        }),
        sidebarMenuActionRecipe({ showOnHover }),
        className
      )}
      data-sidebar='menu-action'
      data-slot='sidebar-menu-action'
      type='button'
      {...props}
    />
  )
}

/**
 * Renders the Sidebar Menu Badge component.
 *
 * @example
 *   ;<SidebarMenuBadge />
 */
function SidebarMenuBadge({
  className,
  ...props
}: SidebarMenuBadgeProps) {
  return (
    <ark.div
      className={cn(sidebarMenuBadgeRecipe(), className)}
      data-sidebar='menu-badge'
      data-slot='sidebar-menu-badge'
      {...props}
    />
  )
}

/**
 * Renders the Sidebar Menu Skeleton component.
 *
 * @example
 *   ;<SidebarMenuSkeleton />
 */
function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: SidebarMenuSkeletonProps) {
  const width = React.useMemo(
    // oxlint-disable-next-line sonarjs/pseudo-random
    () => `${Math.floor(Math.random() * 40) + 50}%`,
    []
  )
  return (
    <ark.div
      className={cn(sidebarMenuSkeletonRecipe(), className)}
      data-sidebar='menu-skeleton'
      data-slot='sidebar-menu-skeleton'
      {...props}
    >
      {!!showIcon && (
        <Skeleton
          className={sidebarMenuSkeletonIconRecipe()}
          data-sidebar='menu-skeleton-icon'
        />
      )}
      <Skeleton
        className={sidebarMenuSkeletonTextRecipe()}
        data-sidebar='menu-skeleton-text'
        style={
          {
            '--skeleton-width': width
          } as React.CSSProperties
        }
      />
    </ark.div>
  )
}

/**
 * Renders the Sidebar Menu Sub component.
 *
 * @example
 *   ;<SidebarMenuSub />
 */
function SidebarMenuSub({
  className,
  ...props
}: SidebarMenuSubProps) {
  return (
    <ark.ul
      className={cn(sidebarMenuSubRecipe(), className)}
      data-sidebar='menu-sub'
      data-slot='sidebar-menu-sub'
      {...props}
    />
  )
}

/**
 * Renders the Sidebar Menu Sub Item component.
 *
 * @example
 *   ;<SidebarMenuSubItem />
 */
function SidebarMenuSubItem({
  className,
  ...props
}: SidebarMenuSubItemProps) {
  return (
    <ark.li
      className={cn(sidebarMenuSubItemRecipe(), className)}
      data-sidebar='menu-sub-item'
      data-slot='sidebar-menu-sub-item'
      {...props}
    />
  )
}

/**
 * Renders the Sidebar Menu Sub Button component.
 *
 * @example
 *   ;<SidebarMenuSubButton />
 */
function SidebarMenuSubButton({
  size = 'md',
  isActive = false,
  className,
  ...props
}: SidebarMenuSubButtonProps) {
  return (
    <ark.a
      className={cn(
        buttonRootRecipe({
          clickEffect: false,
          size,
          variant: 'ghost'
        }),
        sidebarMenuSubButtonRecipe({ size }),
        className
      )}
      data-active={isActive}
      data-sidebar='menu-sub-button'
      data-size={size}
      data-slot='sidebar-menu-sub-button'
      {...props}
    />
  )
}

/**
 * Renders the Sidebar component.
 *
 * @example
 *   ;<Sidebar />
 */
function Sidebar({
  collapsible = 'offcanvas',
  placement = 'left',
  variant = 'sidebar',
  className,
  children,
  title,
  description,
  ...props
}: SidebarProps) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === 'none') {
    return (
      <ark.div
        className={cn(sidebarStaticRecipe(), className)}
        data-slot='sidebar'
        {...props}
      >
        {children}
      </ark.div>
    )
  }

  if (isMobile) {
    return (
      <Sheet
        {...props}
        onOpenChange={({ open: nextOpen }) => setOpenMobile(nextOpen)}
        open={openMobile}
      >
        <SheetContent
          className={cn(sidebarMobileSheetContentRecipe(), className)}
          data-mobile='true'
          data-sidebar='sidebar'
          data-slot='sidebar'
          placement={placement === 'left' ? 'left' : 'right'}
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH_MOBILE
            } as React.CSSProperties
          }
        >
          <SheetHeader
            className={sidebarSROnlyRecipe()}
            description={description}
            title={title}
          />
          <ark.div className={sidebarMobileInnerRecipe()}>
            {children}
          </ark.div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <ark.div
      className={cn(sidebarRootRecipe(), className)}
      data-collapsible={state === 'collapsed' ? collapsible : ''}
      data-placement={placement}
      data-slot='sidebar'
      data-state={state}
      data-variant={variant}
    >
      <ark.div
        className={sidebarGapRecipe({ variant })}
        data-slot='sidebar-gap'
      />
      <ark.div
        className={cn(
          sidebarContainerRecipe({ placement, variant }),
          className
        )}
        data-slot='sidebar-container'
        {...props}
      >
        <ark.div
          className={sidebarInnerRecipe()}
          data-sidebar='sidebar'
          data-slot='sidebar-inner'
        >
          {children}
        </ark.div>
      </ark.div>
    </ark.div>
  )
}

/**
 * Renders the Sidebar Trigger component.
 *
 * @example
 *   ;<SidebarTrigger />
 */
function SidebarTrigger({ onClick, ...props }: SidebarTriggerProps) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar='trigger'
      data-slot='sidebar-trigger'
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      size='icon-md'
      variant='ghost'
      {...props}
    >
      <PanelLeftIcon className={sidebarTriggerIconRecipe()} />
      <ark.span className={sidebarTriggerLabelRecipe()}>
        Toggle
      </ark.span>
    </Button>
  )
}

/**
 * Renders the Sidebar Rail component.
 *
 * @example
 *   ;<SidebarRail />
 */
function SidebarRail({ className, ...props }: SidebarRailProps) {
  const { toggleSidebar } = useSidebar()

  return (
    <ark.button
      aria-label='Toggle'
      className={cn(sidebarRailRecipe(), className)}
      data-sidebar='rail'
      data-slot='sidebar-rail'
      onClick={toggleSidebar}
      tabIndex={-1}
      title='Toggle'
      type='button'
      {...props}
    />
  )
}

/**
 * Renders the Sidebar Menu Button component.
 *
 * @example
 *   ;<SidebarMenuButton />
 */
function SidebarMenuButton({
  isActive = false,
  size = 'md',
  variant = 'ghost',
  className,
  tooltip,
  ...props
}: SidebarMenuButtonProps) {
  const { isMobile, state } = useSidebar()
  const button = (
    <Button
      className={cn(
        sidebarMenuButtonRecipe({ isActive, size, state }),
        className
      )}
      clickEffect={false}
      data-active={isActive}
      data-sidebar='menu-button'
      data-size={size}
      data-slot='sidebar-menu-button'
      size={size}
      variant={variant}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  const resolvedTooltip =
    typeof tooltip === 'string'
      ? {
          children: tooltip
        }
      : tooltip

  return (
    <Tooltip positioning={{ placement: 'right' }}>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        hidden={state !== 'collapsed' || isMobile}
        {...resolvedTooltip}
      />
    </Tooltip>
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar
}

export type {
  SidebarCollapsible,
  SidebarContentProps,
  SidebarContextProps,
  SidebarFooterProps,
  SidebarGroupActionProps,
  SidebarGroupContentProps,
  SidebarGroupLabelProps,
  SidebarGroupProps,
  SidebarHeaderProps,
  SidebarInputProps,
  SidebarInsetProps,
  SidebarMenuActionProps,
  SidebarMenuBadgeProps,
  SidebarMenuButtonProps,
  SidebarMenuItemProps,
  SidebarMenuProps,
  SidebarMenuSkeletonProps,
  SidebarMenuSubButtonProps,
  SidebarMenuSubItemProps,
  SidebarMenuSubProps,
  SidebarPlacement,
  SidebarProps,
  SidebarProviderProps,
  SidebarRailProps,
  SidebarSeparatorProps,
  SidebarState,
  SidebarTriggerProps,
  SidebarVariant
}
