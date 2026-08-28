'use client'

import { Combobox as ArkCombobox } from '@ark-ui/react/combobox'
import { Dialog as ArkDialog } from '@ark-ui/react/dialog'
import { Portal } from '@ark-ui/react/portal'
import { SearchIcon } from 'lucide-react'
import type React from 'react'
import { cn } from 'tailwind-variants'

import type { ComboboxItem } from '../combobox'
import {
  Combobox,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxList
} from '../combobox'
import type { DialogContent } from '../dialog'
import {
  Dialog,
  DialogHeader,
  DialogOverlay,
  DialogPositioner,
  DialogTrigger
} from '../dialog'
import type { InputProps } from '../input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from '../input-group'
import { MenuShortcut } from '../menu'
import { Separator } from '../separator'
import {
  commandContentRecipe,
  commandDialogContentRecipe,
  commandDialogHeaderRecipe,
  commandEmptyRecipe,
  commandFooterRecipe,
  commandInputControlRecipe,
  commandInputGroupRecipe,
  commandInputSearchRecipe,
  commandItemRecipe,
  commandListRootRecipe,
  commandListWrapperRecipe,
  commandRootRecipe,
  commandSeparatorRecipe
} from './command.core.styles'

/**
 * Props for the Command component.
 *
 * @example
 *   type Example = CommandProps
 */
type CommandProps = React.ComponentProps<typeof Combobox>

/**
 * Props for the Command Dialog Content component.
 *
 * @example
 *   type Example = CommandDialogContentProps
 */
type CommandDialogContentProps = React.ComponentProps<
  typeof DialogContent
> & {
  /**
   * The description of the dialog
   *
   * @default 'Search for a command to run...'
   */
  description?: string
  /**
   * The title of the dialog
   *
   * @default 'Command Palette'
   */
  title?: string
}

/**
 * Props for the Command Input component.
 *
 * @example
 *   type Example = CommandInputProps
 */
type CommandInputProps = Omit<
  React.ComponentProps<typeof ArkCombobox.Input>,
  'size'
> & {
  /**
   * The size of the input
   *
   * @default 'md'
   */
  size?: InputProps['size']
}

/**
 * Props for the Command List component.
 *
 * @example
 *   type Example = CommandListProps
 */
type CommandListProps = React.ComponentProps<typeof ComboboxList>

/**
 * Props for the Command Dialog Trigger component.
 *
 * @example
 *   type Example = CommandDialogTriggerProps
 */
type CommandDialogTriggerProps = React.ComponentProps<
  typeof DialogTrigger
>

/**
 * Props for the Command Content component.
 *
 * @example
 *   type Example = CommandContentProps
 */
type CommandContentProps = React.ComponentProps<
  typeof ArkCombobox.Content
>

/**
 * Props for the Command Empty component.
 *
 * @example
 *   type Example = CommandEmptyProps
 */
type CommandEmptyProps = React.ComponentProps<typeof ComboboxEmpty>

/**
 * Props for the Command Group component.
 *
 * @example
 *   type Example = CommandGroupProps
 */
type CommandGroupProps = React.ComponentProps<typeof ComboboxGroup>

/**
 * Props for the Command Group Label component.
 *
 * @example
 *   type Example = CommandGroupLabelProps
 */
type CommandGroupLabelProps = React.ComponentProps<
  typeof ComboboxGroupLabel
>

/**
 * Props for the Command Item component.
 *
 * @example
 *   type Example = CommandItemProps
 */
type CommandItemProps = React.ComponentProps<typeof ComboboxItem>

/**
 * Props for the Command Separator component.
 *
 * @example
 *   type Example = CommandSeparatorProps
 */
type CommandSeparatorProps = React.ComponentProps<'div'>

/**
 * Props for the Command Shortcut component.
 *
 * @example
 *   type Example = CommandShortcutProps
 */
type CommandShortcutProps = React.ComponentProps<typeof MenuShortcut>

/**
 * Props for the Command Footer component.
 *
 * @example
 *   type Example = CommandFooterProps
 */
type CommandFooterProps = React.ComponentProps<'div'>

const CommandDialog = Dialog

/**
 * Renders the Command Dialog Trigger component.
 *
 * @example
 *   ;<CommandDialogTrigger />
 */
function CommandDialogTrigger({
  ...props
}: CommandDialogTriggerProps) {
  return (
    <DialogTrigger data-slot='command-dialog-trigger' {...props} />
  )
}

/**
 * Renders the Command Dialog Content component.
 *
 * @example
 *   ;<CommandDialogContent />
 */
function CommandDialogContent({
  size = 'lg',
  title,
  description,
  className,
  children,
  ...props
}: CommandDialogContentProps) {
  return (
    <Portal>
      <DialogOverlay />
      <DialogPositioner>
        <ArkDialog.Content
          className={cn(
            commandDialogContentRecipe({ size }),
            className
          )}
          data-slot='command-dialog-content'
          {...props}
        >
          <DialogHeader
            className={commandDialogHeaderRecipe()}
            description={description}
            title={title}
          />
          {children}
        </ArkDialog.Content>
      </DialogPositioner>
    </Portal>
  )
}

/**
 * Renders the Command component.
 *
 * @example
 *   ;<Command />
 */
function Command({
  lazyMount = true,
  unmountOnExit = true,
  className,
  ...props
}: CommandProps) {
  return (
    <Combobox
      className={cn(commandRootRecipe(), className)}
      closeOnSelect={false}
      disableLayer
      inputBehavior='autohighlight'
      lazyMount={lazyMount}
      loopFocus={false}
      open
      selectionBehavior='clear'
      unmountOnExit={unmountOnExit}
      {...props}
    />
  )
}

/**
 * Renders the Command Content component.
 *
 * @example
 *   ;<CommandContent />
 */
function CommandContent({
  className,
  ...props
}: CommandContentProps) {
  return (
    <ArkCombobox.Content
      className={cn(commandContentRecipe(), className)}
      data-slot='command-content'
      {...props}
    />
  )
}

/**
 * Renders the Command Input component.
 *
 * @example
 *   ;<CommandInput />
 */
function CommandInput({
  size = 'md',
  className,
  ...props
}: CommandInputProps) {
  return (
    <ComboboxControl className={commandInputControlRecipe()}>
      <InputGroup
        className={cn(commandInputGroupRecipe(), className)}
        size={size}
        {...props}
      >
        <InputGroupAddon>
          <SearchIcon
            aria-hidden
            className={commandInputSearchRecipe()}
          />
        </InputGroupAddon>
        <ArkCombobox.Input asChild data-slot='command-input'>
          <InputGroupInput autoFocus />
        </ArkCombobox.Input>
      </InputGroup>
    </ComboboxControl>
  )
}

/**
 * Renders the Command List component.
 *
 * @example
 *   ;<CommandList />
 */
function CommandList({ className, ...props }: CommandListProps) {
  return (
    <div className={commandListRootRecipe()}>
      <ComboboxList
        className={cn(commandListWrapperRecipe(), className)}
        data-slot='command-list'
        {...props}
      />
    </div>
  )
}

/**
 * Renders the Command Empty component.
 *
 * @example
 *   ;<CommandEmpty />
 */
function CommandEmpty({
  className,
  children,
  ...props
}: CommandEmptyProps) {
  return (
    <ComboboxEmpty
      className={cn(commandEmptyRecipe(), className)}
      data-slot='command-empty'
      {...props}
    >
      {children || 'Empty'}
    </ComboboxEmpty>
  )
}

/**
 * Renders the Command Group component.
 *
 * @example
 *   ;<CommandGroup />
 */
function CommandGroup({ ...props }: CommandGroupProps) {
  return <ComboboxGroup data-slot='command-group' {...props} />
}

/**
 * Renders the Command Group Label component.
 *
 * @example
 *   ;<CommandGroupLabel />
 */
function CommandGroupLabel({ ...props }: CommandGroupLabelProps) {
  return (
    <ComboboxGroupLabel data-slot='command-group-label' {...props} />
  )
}

/**
 * Renders the Command Item component.
 *
 * @example
 *   ;<CommandItem />
 */
function CommandItem({ className, ...props }: CommandItemProps) {
  return (
    <ArkCombobox.Item
      className={cn(
        commandItemRecipe({
          showIndicator: false
        }),
        className
      )}
      data-slot='command-item'
      persistFocus
      {...props}
    />
  )
}

/**
 * Renders the Command Separator component.
 *
 * @example
 *   ;<CommandSeparator />
 */
function CommandSeparator({
  className,
  ...props
}: CommandSeparatorProps) {
  return (
    <Separator
      className={cn(commandSeparatorRecipe(), className)}
      data-slot='command-separator'
      {...props}
    />
  )
}

/**
 * Renders the Command Shortcut component.
 *
 * @example
 *   ;<CommandShortcut />
 */
function CommandShortcut({ ...props }: CommandShortcutProps) {
  return <MenuShortcut data-slot='command-shortcut' {...props} />
}

/**
 * Renders the Command Footer component.
 *
 * @example
 *   ;<CommandFooter />
 */
function CommandFooter({ className, ...props }: CommandFooterProps) {
  return (
    <div
      className={cn(commandFooterRecipe(), className)}
      data-slot='command-footer'
      {...props}
    />
  )
}

export {
  Command,
  CommandContent,
  CommandDialog,
  CommandDialogContent,
  CommandDialogTrigger,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
}

export type {
  CommandContentProps,
  CommandDialogContentProps,
  CommandDialogTriggerProps,
  CommandEmptyProps,
  CommandFooterProps,
  CommandGroupLabelProps,
  CommandGroupProps,
  CommandInputProps,
  CommandItemProps,
  CommandListProps,
  CommandProps,
  CommandSeparatorProps,
  CommandShortcutProps
}
