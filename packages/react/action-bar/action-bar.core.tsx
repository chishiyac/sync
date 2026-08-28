'use client'

import { ark } from '@ark-ui/react/factory'
import { Portal } from '@ark-ui/react/portal'
import { Presence } from '@ark-ui/react/presence'
import React from 'react'
import { cn } from 'tailwind-variants'

import { Badge } from '../badge'
import { Separator } from '../separator'
import { DEFAULT_ACTION_BAR_POSITIONING } from './action-bar.core.constants'
import {
  actionBarBodyRecipe,
  actionBarCloseRecipe,
  actionBarContentRecipe,
  actionBarSeparatorRecipe,
  actionBarValueRecipe,
  actionBarWrapperRecipe
} from './action-bar.core.styles'

/**
 * Shared Action Bar Mounting Keys type.
 *
 * @example
 *   type Example = ActionBarMountingKeys
 */
type ActionBarMountingKeys = 'lazyMount' | 'unmountOnExit'

/**
 * Shared Action Bar Positioning type.
 *
 * @example
 *   type Example = ActionBarPositioning
 */
type ActionBarPositioning = {
  /**
   * The placement of the action bar.
   *
   * @default 'bottom'
   */
  placement?: ActionBarPlacement
  /**
   * The gutter from the edge in pixels.
   *
   * @default '16px'
   */
  gutter?: string
}

/**
 * Supported action bar placements.
 *
 * @example
 *   type Example = ActionBarPlacement
 */
type ActionBarPlacement = 'bottom' | 'bottom-start' | 'bottom-end'

/**
 * Shared Action Bar Context Value type.
 *
 * @example
 *   type Example = ActionBarContextValue
 */
type ActionBarContextValue = {
  /** The open state of the action bar */
  isOpen?: boolean
  /** Whether to lazy mount the action bar */
  lazyMount?: boolean
  /** The function to call when the action bar is closed */
  onClose?: VoidFunction
  /** The function to call when the action bar is opened */
  onOpen?: VoidFunction
  /** The positioning of the action bar. */
  positioning: ActionBarPositioning
  /** The function to call when the action bar is mounted */
  unmountOnExit?: boolean
}

/**
 * Props for the Action Bar component.
 *
 * @example
 *   type Example = ActionBarProps
 */
type ActionBarProps = Pick<
  ActionBarContextValue,
  ActionBarMountingKeys
> & {
  /**
   * Whether to close the action bar when the Escape key is pressed.
   *
   * @default true
   */
  closeOnEscape?: boolean
  /** The default open state of the action bar. */
  defaultOpen?: boolean
  /**
   * The function to call when the open state of the action bar
   * changes.
   */
  onOpenChange?: (open: boolean) => void
  /** The open state of the action bar. */
  open?: boolean
  /** Placement and gutter of the action bar. */
  positioning?: ActionBarContextValue['positioning']
}

/**
 * Props for the Action Bar Trigger component.
 *
 * @example
 *   type Example = ActionBarTriggerProps
 */
type ActionBarTriggerProps = React.ComponentProps<typeof ark.button>

/**
 * Props for the Action Bar Content component.
 *
 * @example
 *   type Example = ActionBarContentProps
 */
type ActionBarContentProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Action Bar Separator component.
 *
 * @example
 *   type Example = ActionBarSeparatorProps
 */
type ActionBarSeparatorProps = React.ComponentProps<typeof Separator>

/**
 * Props for the Action Bar Close component.
 *
 * @example
 *   type Example = ActionBarCloseProps
 */
type ActionBarCloseProps = React.ComponentProps<typeof ark.button>

/**
 * Props for the Action Bar Value component.
 *
 * @example
 *   type Example = ActionBarValueProps
 */
type ActionBarValueProps = React.ComponentProps<typeof Badge> & {
  /** The number of items selected */
  count: number
  /** The label of the selection trigger */
  label?: string
}

/**
 * Props for the Action Bar Body component.
 *
 * @example
 *   type Example = ActionBarBodyProps
 */
type ActionBarBodyProps = React.ComponentProps<typeof ark.div>

const ActionBarContext = React.createContext(
  {} as ActionBarContextValue
)

/**
 * Returns the shared Action Bar state.
 *
 * @example
 *   const actionBar = _useActionBar()
 */
function _useActionBar() {
  const context = React.useContext(ActionBarContext)

  if (!context) {
    throw new Error(
      'useActionBar must be used within a ActionBarProvider.'
    )
  }

  return context
}

/**
 * Renders the Action Bar component.
 *
 * @example
 *   ;<ActionBar />
 */
function ActionBar({
  open,
  defaultOpen = false,
  closeOnEscape = true,
  positioning,
  lazyMount = true,
  unmountOnExit = true,
  onOpenChange,
  ...props
}: React.PropsWithChildren<ActionBarProps>) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen)
  const isControlled = open !== undefined
  const isOpen = isControlled ? open : internalOpen

  const handleClose = React.useCallback(() => {
    if (!isControlled) {
      setInternalOpen(false)
    }

    onOpenChange?.(false)
  }, [isControlled, onOpenChange])

  const handleOpen = React.useCallback(() => {
    if (!isControlled) {
      setInternalOpen(true)
    }

    onOpenChange?.(true)
  }, [isControlled, onOpenChange])

  React.useEffect(() => {
    if (!isOpen) {
      return
    }

    if (!closeOnEscape) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return
      }

      if (event.defaultPrevented) {
        return
      }

      event.preventDefault()
      handleClose()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [closeOnEscape, handleClose, isOpen])

  const context = React.useMemo(
    () => ({
      isOpen,
      lazyMount,
      onClose: handleClose,
      onOpen: handleOpen,
      positioning: {
        ...DEFAULT_ACTION_BAR_POSITIONING,
        ...positioning
      },
      unmountOnExit
    }),
    [
      handleClose,
      handleOpen,
      isOpen,
      lazyMount,
      unmountOnExit,
      positioning
    ]
  )

  return <ActionBarContext.Provider value={context} {...props} />
}

/**
 * Renders the Action Bar Separator component.
 *
 * @example
 *   ;<ActionBarSeparator />
 */
function ActionBarSeparator({
  className,
  ...props
}: ActionBarSeparatorProps) {
  return (
    <Separator
      className={cn(actionBarSeparatorRecipe(), className)}
      data-slot='action-bar-separator'
      orientation='vertical'
      {...props}
    />
  )
}

/**
 * Renders the Action Bar Value component.
 *
 * @example
 *   ;<ActionBarValue />
 */
function ActionBarValue({
  label,
  count = 0,
  className,
  children,
  ...props
}: ActionBarValueProps) {
  return (
    <Badge
      className={cn(actionBarValueRecipe(), className)}
      data-slot='action-bar-value'
      variant='secondary'
      {...props}
    >
      {children ?? label ?? count}
    </Badge>
  )
}

/**
 * Renders the Action Bar Body component.
 *
 * @example
 *   ;<ActionBarBody />
 */
function ActionBarBody({ className, ...props }: ActionBarBodyProps) {
  return (
    <ark.div
      className={cn(actionBarBodyRecipe(), className)}
      {...props}
    />
  )
}

/**
 * Renders the Action Bar Trigger component.
 *
 * @example
 *   ;<ActionBarTrigger />
 */
function ActionBarTrigger({
  onClick,
  ...props
}: ActionBarTriggerProps) {
  const { onOpen, isOpen } = _useActionBar()
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onOpen?.()
    onClick?.(event)
  }
  return (
    <ark.button
      aria-expanded={isOpen}
      data-slot='action-bar-trigger'
      data-state={isOpen ? 'open' : 'closed'}
      onClick={handleClick}
      type='button'
      {...props}
    />
  )
}

/**
 * Renders the Action Bar Content component.
 *
 * @example
 *   ;<ActionBarContent />
 */
function ActionBarContent({
  'aria-labelledby': ariaLabelledby,
  className,
  ...props
}: ActionBarContentProps) {
  const { isOpen, lazyMount, unmountOnExit, positioning } =
    _useActionBar()
  const { placement } = positioning
  const { gutter } = positioning
  return (
    <Portal>
      <Presence
        asChild
        lazyMount={lazyMount}
        present={isOpen}
        unmountOnExit={unmountOnExit}
      >
        <ark.div
          className={cn(actionBarContentRecipe({ placement }))}
          data-placement={placement}
          data-slot='action-bar-positioner'
          style={{ '--gutter': gutter } as React.CSSProperties}
        >
          <ark.div
            aria-labelledby={ariaLabelledby}
            className={cn(actionBarWrapperRecipe(), className)}
            data-slot='action-bar-content'
            role='toolbar'
            {...props}
          />
        </ark.div>
      </Presence>
    </Portal>
  )
}

/**
 * Renders the Action Bar Close component.
 *
 * @example
 *   ;<ActionBarClose />
 */
function ActionBarClose({
  className,
  onClick,
  ...props
}: ActionBarCloseProps) {
  const { onClose, isOpen } = _useActionBar()

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onClose?.()
    onClick?.(event)
  }

  return (
    <ark.button
      aria-label='Close'
      className={cn(actionBarCloseRecipe(), className)}
      data-slot='action-bar-close'
      data-state={isOpen ? 'open' : 'closed'}
      onClick={handleClick}
      type='button'
      {...props}
    />
  )
}

export {
  ActionBar,
  ActionBarBody,
  ActionBarClose,
  ActionBarContent,
  ActionBarSeparator,
  ActionBarTrigger,
  ActionBarValue
}

export type {
  ActionBarBodyProps,
  ActionBarCloseProps,
  ActionBarContentProps,
  ActionBarContextValue,
  ActionBarPlacement,
  ActionBarPositioning,
  ActionBarProps,
  ActionBarSeparatorProps,
  ActionBarTriggerProps,
  ActionBarValueProps
}
