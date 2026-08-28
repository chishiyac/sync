'use client'

import { ark } from '@ark-ui/react/factory'
import {
  Popover as ArkPopover,
  usePopoverContext
} from '@ark-ui/react/popover'
import { Portal } from '@ark-ui/react/portal'
import { XIcon } from 'lucide-react'
import { cn } from 'tailwind-variants'

import { Button } from '../button'
import { ScrollArea } from '../scroll-area'
import {
  popoverArrowTipRecipe,
  popoverBodyRecipe,
  popoverCloseRecipe,
  popoverContentRecipe,
  popoverDescriptionRecipe,
  popoverFooterRecipe,
  popoverHeaderRecipe,
  popoverTitleRecipe
} from './popover.core.styles'

/**
 * Props for the Popover component.
 *
 * @example
 *   type Example = PopoverProps
 */
type PopoverProps = React.ComponentProps<typeof ArkPopover.Root>

/**
 * Props for the Popover Header component.
 *
 * @example
 *   type Example = PopoverHeaderProps
 */
type PopoverHeaderProps = React.ComponentProps<typeof ark.div> & {
  /** The description of the popover header */
  description?: string
  /** The title of the popover header */
  title?: string
}

/**
 * Props for the Popover Content component.
 *
 * @example
 *   type Example = PopoverContentProps
 */
type PopoverContentProps = React.ComponentProps<
  typeof ArkPopover.Content
> & {
  /**
   * Show close button at the top right corner
   *
   * @default true
   */
  showCloseButton?: boolean
}

/**
 * Props for the Popover Trigger component.
 *
 * @example
 *   type Example = PopoverTriggerProps
 */
type PopoverTriggerProps = React.ComponentProps<
  typeof ArkPopover.Trigger
>

/**
 * Props for the Popover Anchor component.
 *
 * @example
 *   type Example = PopoverAnchorProps
 */
type PopoverAnchorProps = React.ComponentProps<
  typeof ArkPopover.Anchor
>

/**
 * Props for the Popover Positioner component.
 *
 * @example
 *   type Example = PopoverPositionerProps
 */
type PopoverPositionerProps = React.ComponentProps<
  typeof ArkPopover.Positioner
>
/**
 * Props for the Popover Title component.
 *
 * @example
 *   type Example = PopoverTitleProps
 */
type PopoverTitleProps = React.ComponentProps<typeof ArkPopover.Title>

/**
 * Props for the Popover Description component.
 *
 * @example
 *   type Example = PopoverDescriptionProps
 */
type PopoverDescriptionProps = React.ComponentProps<
  typeof ArkPopover.Description
>
/**
 * Props for the Popover Body component.
 *
 * @example
 *   type Example = PopoverBodyProps
 */
type PopoverBodyProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Popover Footer component.
 *
 * @example
 *   type Example = PopoverFooterProps
 */
type PopoverFooterProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Popover Close component.
 *
 * @example
 *   type Example = PopoverCloseProps
 */
type PopoverCloseProps = React.ComponentProps<
  typeof ArkPopover.CloseTrigger
>

/**
 * Props for the Popover Arrow component.
 *
 * @example
 *   type Example = PopoverArrowProps
 */
type PopoverArrowProps = React.ComponentProps<typeof ArkPopover.Arrow>

const usePopover = usePopoverContext

/**
 * Renders the Popover component.
 *
 * @example
 *   ;<Popover />
 */
function Popover({
  lazyMount = true,
  unmountOnExit = true,
  modal = true,
  ...props
}: PopoverProps) {
  return (
    <ArkPopover.Root
      data-slot='popover'
      lazyMount={lazyMount}
      modal={modal}
      unmountOnExit={unmountOnExit}
      {...props}
    />
  )
}

/**
 * Renders the Popover Trigger component.
 *
 * @example
 *   ;<PopoverTrigger />
 */
function PopoverTrigger({ ...props }: PopoverTriggerProps) {
  return <ArkPopover.Trigger data-slot='popover-trigger' {...props} />
}

/**
 * Renders the Popover Anchor component.
 *
 * @example
 *   ;<PopoverAnchor />
 */
function PopoverAnchor({ ...props }: PopoverAnchorProps) {
  return <ArkPopover.Anchor data-slot='popover-anchor' {...props} />
}

/**
 * Renders the Popover Positioner component.
 *
 * @example
 *   ;<PopoverPositioner />
 */
function PopoverPositioner({ ...props }: PopoverPositionerProps) {
  return (
    <ArkPopover.Positioner
      data-slot='popover-positioner'
      {...props}
    />
  )
}

/**
 * Renders the Popover Title component.
 *
 * @example
 *   ;<PopoverTitle />
 */
function PopoverTitle({ className, ...props }: PopoverTitleProps) {
  return (
    <ArkPopover.Title
      className={cn(popoverTitleRecipe(), className)}
      data-slot='popover-title'
      {...props}
    />
  )
}

/**
 * Renders the Popover Description component.
 *
 * @example
 *   ;<PopoverDescription />
 */
function PopoverDescription({
  className,
  ...props
}: PopoverDescriptionProps) {
  return (
    <ArkPopover.Description
      className={cn(popoverDescriptionRecipe(), className)}
      data-slot='popover-description'
      {...props}
    />
  )
}

/**
 * Renders the Popover Header component.
 *
 * @example
 *   ;<PopoverHeader />
 */
function PopoverHeader({
  title,
  description,
  children,
  className,
  ...props
}: PopoverHeaderProps) {
  return (
    <ark.div
      className={cn(popoverHeaderRecipe(), className)}
      data-slot='popover-header'
      {...props}
    >
      {!!title && <PopoverTitle>{title}</PopoverTitle>}
      {!!description && (
        <PopoverDescription>{description}</PopoverDescription>
      )}
      {!title && typeof children === 'string' ? (
        <PopoverTitle>{children}</PopoverTitle>
      ) : (
        children
      )}
    </ark.div>
  )
}

/**
 * Renders the Popover Body component.
 *
 * @example
 *   ;<PopoverBody />
 */
function PopoverBody({ className, ...props }: PopoverBodyProps) {
  return (
    <ScrollArea>
      <ark.div
        className={cn(popoverBodyRecipe(), className)}
        data-slot='popover-body'
        {...props}
      />
    </ScrollArea>
  )
}

/**
 * Renders the Popover Footer component.
 *
 * @example
 *   ;<PopoverFooter />
 */
function PopoverFooter({ className, ...props }: PopoverFooterProps) {
  return (
    <ark.div
      className={cn(popoverFooterRecipe(), className)}
      data-slot='popover-footer'
      {...props}
    />
  )
}

/**
 * Renders the Popover Close component.
 *
 * @example
 *   ;<PopoverClose />
 */
function PopoverClose({ ...props }: PopoverCloseProps) {
  return (
    <ArkPopover.CloseTrigger
      data-slot='popover-close-trigger'
      {...props}
    />
  )
}

/**
 * Renders the Popover Content component.
 *
 * @example
 *   ;<PopoverContent />
 */
function PopoverContent({
  showCloseButton = false,
  className,
  children,
  ...props
}: PopoverContentProps) {
  return (
    <Portal>
      <PopoverPositioner>
        <ArkPopover.Content
          className={cn(popoverContentRecipe(), className)}
          data-slot='popover-content'
          {...props}
        >
          {children}

          {!!showCloseButton && (
            <PopoverClose asChild>
              <Button
                aria-label='Close'
                className={popoverCloseRecipe()}
                size='icon-sm'
                variant='ghost'
              >
                <XIcon />
              </Button>
            </PopoverClose>
          )}
        </ArkPopover.Content>
      </PopoverPositioner>
    </Portal>
  )
}

/**
 * Renders the Popover Arrow component.
 *
 * @example
 *   ;<PopoverArrow />
 */
function PopoverArrow({ style, ...props }: PopoverArrowProps) {
  return (
    <ArkPopover.Arrow
      data-slot='popover-arrow'
      style={
        {
          '--arrow-background': 'var(--popover)',
          '--arrow-size': 'calc(1.5 * var(--spacing))',
          ...style
        } as React.CSSProperties
      }
      {...props}
    >
      <ArkPopover.ArrowTip className={popoverArrowTipRecipe()} />
    </ArkPopover.Arrow>
  )
}

export {
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
  usePopover
}

export type {
  PopoverAnchorProps,
  PopoverArrowProps,
  PopoverBodyProps,
  PopoverCloseProps,
  PopoverContentProps,
  PopoverDescriptionProps,
  PopoverFooterProps,
  PopoverHeaderProps,
  PopoverPositionerProps,
  PopoverProps,
  PopoverTitleProps,
  PopoverTriggerProps
}
