'use client'

import { ark } from '@ark-ui/react/factory'
import type { TreeCollection as arkTreeCollection } from '@ark-ui/react/tree-view'
import {
  TreeView as ArkTreeView,
  createTreeCollection as arkCreateTreeCollection,
  useTreeViewContext as useArkTreeViewContext
} from '@ark-ui/react/tree-view'
import {
  CheckIcon,
  ChevronRightIcon,
  FileIcon,
  FolderIcon,
  FolderOpenIcon,
  MinusIcon
} from 'lucide-react'
import React from 'react'
import { cn } from 'tailwind-variants'

import { checkboxRootRecipe } from '../checkbox'
import {
  treeViewBranchContentRecipe,
  treeViewBranchIndentGuideRecipe,
  treeViewBranchIndicatorRecipe,
  treeViewBranchRecipe,
  treeViewBranchTextRecipe,
  treeViewCheckboxRecipe,
  treeViewControlRecipe,
  treeViewItemIconRecipe,
  treeViewItemInputRecipe,
  treeViewItemTitleRecipe,
  treeViewLabelRecipe,
  treeViewRootRecipe,
  treeViewTreeRecipe
} from './tree-view.core.styles'

/**
 * Shared Tree View Branch Title Keys type.
 *
 * @example
 *   type Example = TreeViewBranchTitleKeys
 */
type TreeViewBranchTitleKeys = 'icon' | 'expandedIcon'

/**
 * Supported tree node values.
 *
 * @example
 *   type Example = TreeNodeType
 */
type TreeNodeType<T = unknown> = {
  /** Child nodes for the current node. */
  children?: TreeNodeType<T>[] | undefined
  /** The icon shown when the node is expanded. */
  expandedIcon?: React.JSX.ElementType | null
  /** The default icon shown for the node. */
  icon?: React.JSX.ElementType | null
  /** The unique node identifier. */
  id: string
  /** The display name of the node. */
  name: string
}

/**
 * Shared Tree Collection type.
 *
 * @example
 *   type Example = TreeCollection
 */
type TreeCollection = arkTreeCollection

/**
 * Props for the Tree View Context component.
 *
 * @example
 *   type Example = TreeViewContextProps
 */
type TreeViewContextProps = {
  /** Custom extension icons */
  fileIcons?: Record<string, React.JSX.ElementType | null>
}

/**
 * Props for the Tree View Label component.
 *
 * @example
 *   type Example = TreeViewLabelProps
 */
type TreeViewLabelProps = React.ComponentProps<
  typeof ArkTreeView.Label
>

/**
 * Props for the Tree View Tree component.
 *
 * @example
 *   type Example = TreeViewTreeProps
 */
type TreeViewTreeProps = React.ComponentProps<typeof ArkTreeView.Tree>

/**
 * Props for the Tree View component.
 *
 * @example
 *   type Example = TreeViewProps
 */
type TreeViewProps = React.ComponentProps<typeof ArkTreeView.Root> & {
  /** Custom extension icons. */
  fileIcons?: Record<string, React.JSX.ElementType | null>
}

/**
 * Props for the Tree View Node component.
 *
 * @example
 *   type Example = TreeViewNodeProps
 */
type TreeViewNodeProps<T extends TreeNodeType = TreeNodeType> =
  ArkTreeView.NodeProviderProps<T>

/**
 * Props for the Tree View Branch component.
 *
 * @example
 *   type Example = TreeViewBranchProps
 */
type TreeViewBranchProps = React.ComponentProps<
  typeof ArkTreeView.Branch
>

/**
 * Props for the Tree View Branch Item component.
 *
 * @example
 *   type Example = TreeViewBranchItemProps
 */
type TreeViewBranchItemProps = React.ComponentProps<
  typeof ArkTreeView.BranchControl
> &
  Pick<TreeViewBranchTitleProps, TreeViewBranchTitleKeys>

/**
 * Props for the Tree View Branch Title component.
 *
 * @example
 *   type Example = TreeViewBranchTitleProps
 */
type TreeViewBranchTitleProps = React.ComponentProps<
  typeof ArkTreeView.BranchText
> & {
  /**
   * Custom expanded icon
   *
   * @default <FolderOpenIcon />
   */
  expandedIcon?: React.JSX.ElementType | null
  /**
   * Custom icon
   *
   * @default <FolderIcon />
   */
  icon?: React.JSX.ElementType | null
}

/**
 * Props for the Tree View Branch Indicator component.
 *
 * @example
 *   type Example = TreeViewBranchIndicatorProps
 */
type TreeViewBranchIndicatorProps = React.ComponentProps<
  typeof ArkTreeView.BranchIndicator
>

/**
 * Props for the Tree View Branch Content component.
 *
 * @example
 *   type Example = TreeViewBranchContentProps
 */
type TreeViewBranchContentProps = React.ComponentProps<
  typeof ArkTreeView.BranchContent
>

/**
 * Props for the Tree View Branch Indent Guide component.
 *
 * @example
 *   type Example = TreeViewBranchIndentGuideProps
 */
type TreeViewBranchIndentGuideProps = React.ComponentProps<
  typeof ArkTreeView.BranchIndentGuide
>

/**
 * Props for the Tree View Content component.
 *
 * @example
 *   type Example = TreeViewContentProps
 */
type TreeViewContentProps = React.ComponentProps<
  typeof ArkTreeView.Item
>

/**
 * Props for the Tree View Item component.
 *
 * @example
 *   type Example = TreeViewItemProps
 */
type TreeViewItemProps = TreeViewItemTitleProps & {
  /**
   * Custom file icon
   *
   * @default <FileIcon />
   */
  icon?: React.JSX.ElementType
}

/**
 * Props for the Tree View Item Icon component.
 *
 * @example
 *   type Example = TreeViewItemIconProps
 */
type TreeViewItemIconProps = React.ComponentProps<typeof ark.span>

/**
 * Props for the Tree View Item Title component.
 *
 * @example
 *   type Example = TreeViewItemTitleProps
 */
type TreeViewItemTitleProps = React.ComponentProps<
  typeof ArkTreeView.ItemText
>

/**
 * Props for the Tree View Checkbox component.
 *
 * @example
 *   type Example = TreeViewCheckboxProps
 */
type TreeViewCheckboxProps = React.ComponentProps<
  typeof ArkTreeView.NodeCheckbox
>

/**
 * Props for the Tree View Node Input component.
 *
 * @example
 *   type Example = TreeViewNodeInputProps
 */
type TreeViewNodeInputProps = React.ComponentProps<
  typeof ArkTreeView.NodeRenameInput
>

/**
 * Shared Create File Icons Args type.
 *
 * @example
 *   type Example = CreateFileIconsArgs
 */
type CreateFileIconsArgs = Record<
  `.${string}`,
  React.JSX.ElementType | null
>

const TreeViewContext = React.createContext(
  {} as TreeViewContextProps
)

const useTreeView = useArkTreeViewContext

/**
 * Returns the shared Tree View state.
 *
 * @example
 *   const treeView = _useTreeView()
 */
function _useTreeView() {
  const context = React.useContext(TreeViewContext)

  if (!context) {
    throw new Error(
      'useTreeViewContext must be used within a TreeViewProvider'
    )
  }

  return context
}

/**
 * Creates a tree collection with Tree View node mappings.
 *
 * @example
 *   const collection = createTreeCollection({ items })
 */
function createTreeCollection<T extends TreeNodeType>(
  options: Parameters<typeof arkCreateTreeCollection<T>>[0]
) {
  return arkCreateTreeCollection<T>({
    nodeToString: (node) => node.name,
    nodeToValue: (node) => node.id,
    ...options
  })
}

/**
 * Renders the Tree View component.
 *
 * @example
 *   ;<TreeView />
 */
function TreeView({
  fileIcons,
  lazyMount = true,
  unmountOnExit = true,
  className,
  collection,
  ...props
}: TreeViewProps) {
  return (
    <TreeViewContext.Provider value={{ fileIcons }}>
      <ArkTreeView.Root
        className={cn(treeViewRootRecipe(), className)}
        data-slot='tree-view'
        lazyMount={lazyMount}
        collection={collection}
        unmountOnExit={unmountOnExit}
        {...props}
      />
    </TreeViewContext.Provider>
  )
}

/**
 * Renders the Tree View Label component.
 *
 * @example
 *   ;<TreeViewLabel />
 */
function TreeViewLabel({ className, ...props }: TreeViewLabelProps) {
  return (
    <ArkTreeView.Label
      className={cn(treeViewLabelRecipe(), className)}
      data-slot='tree-view-label'
      {...props}
    />
  )
}

/**
 * Renders the Tree View Tree component.
 *
 * @example
 *   ;<TreeViewTree />
 */
function TreeViewTree({ className, ...props }: TreeViewTreeProps) {
  return (
    <ArkTreeView.Tree
      className={cn(treeViewTreeRecipe(), className)}
      data-slot='tree-view-tree'
      {...props}
    />
  )
}

/**
 * Renders the Tree View Node component.
 *
 * @example
 *   ;<TreeViewNode />
 */
function TreeViewNode<T extends TreeNodeType>({
  ...props
}: TreeViewNodeProps<T>) {
  return (
    <ArkTreeView.NodeProvider data-slot='tree-view-node' {...props} />
  )
}

/**
 * Renders the Tree View Branch component.
 *
 * @example
 *   ;<TreeViewBranch />
 */
function TreeViewBranch({
  className,
  ...props
}: TreeViewBranchProps) {
  return (
    <ArkTreeView.Branch
      className={cn(treeViewBranchRecipe(), className)}
      data-slot='tree-view-branch'
      {...props}
    />
  )
}

/**
 * Renders the Tree View Branch Indicator component.
 *
 * @example
 *   ;<TreeViewBranchIndicator />
 */
function TreeViewBranchIndicator({
  className,
  ...props
}: TreeViewBranchIndicatorProps) {
  return (
    <ArkTreeView.BranchIndicator
      className={cn(treeViewBranchIndicatorRecipe(), className)}
      data-slot='tree-view-branch-indicator'
      {...props}
    >
      <ChevronRightIcon />
    </ArkTreeView.BranchIndicator>
  )
}

/**
 * Renders the Tree View Node Input component.
 *
 * @example
 *   ;<TreeViewNodeInput />
 */
function TreeViewNodeInput({
  className,
  ...props
}: TreeViewNodeInputProps) {
  return (
    <ArkTreeView.NodeRenameInput
      className={cn(treeViewItemInputRecipe(), className)}
      data-slot='tree-view-node-rename-input'
      {...props}
    />
  )
}

/**
 * Renders the Tree View Item Icon component.
 *
 * @example
 *   ;<TreeViewItemIcon />
 */
function TreeViewItemIcon({
  className,
  ...props
}: TreeViewItemIconProps) {
  return (
    <ark.span
      className={cn(treeViewItemIconRecipe(), className)}
      data-slot='tree-view-item-icon'
      {...props}
    />
  )
}

/**
 * Renders the Tree View Item Title component.
 *
 * @example
 *   ;<TreeViewItemTitle />
 */
function TreeViewItemTitle({
  className,
  ...props
}: TreeViewItemTitleProps) {
  return (
    <ArkTreeView.ItemText
      className={cn(treeViewItemTitleRecipe(), className)}
      data-slot='tree-view-item-title'
      {...props}
    />
  )
}

/**
 * Renders the Tree View Branch Indent Guide component.
 *
 * @example
 *   ;<TreeViewBranchIndentGuide />
 */
function TreeViewBranchIndentGuide({
  className,
  ...props
}: TreeViewBranchIndentGuideProps) {
  return (
    <ArkTreeView.BranchIndentGuide
      className={cn(treeViewBranchIndentGuideRecipe(), className)}
      data-slot='tree-view-branch-indent-guide'
      {...props}
    />
  )
}

/**
 * Returns the configured file icon map.
 *
 * @example
 *   const fileIcons = createFileIcons({ '.ts': FileIcon })
 */
function createFileIcons(args: CreateFileIconsArgs) {
  return { ...args }
}

/**
 * Returns the file extension for a file name.
 *
 * @example
 *   const extension = getFileExtension('icon.svg')
 */
function getFileExtension(file: string) {
  const name = file.includes('.')
    ? file.split('.').at(-1)?.toLowerCase()
    : null

  return name ? `.${name}` : null
}

/**
 * Renders the Tree View Branch Title component.
 *
 * @example
 *   ;<TreeViewBranchTitle />
 */
function TreeViewBranchTitle({
  icon: Icon,
  expandedIcon: ExpandedIcon,
  className,
  children,
  ...props
}: TreeViewBranchTitleProps) {
  return (
    <ArkTreeView.NodeContext>
      {(nodeState) => (
        // oxlint-disable-next-line react/jsx-no-useless-fragment
        <>
          {nodeState.renaming ? (
            <TreeViewNodeInput />
          ) : (
            <ArkTreeView.BranchText
              className={cn(treeViewBranchTextRecipe(), className)}
              data-slot='tree-view-branch-title'
              {...props}
            >
              {Icon !== null && !nodeState.expanded && (
                <TreeViewItemIcon>
                  {Icon ? <Icon /> : <FolderIcon />}
                </TreeViewItemIcon>
              )}
              {ExpandedIcon !== null && nodeState.expanded && (
                <TreeViewItemIcon>
                  {ExpandedIcon ? (
                    <ExpandedIcon />
                  ) : (
                    <FolderOpenIcon />
                  )}
                </TreeViewItemIcon>
              )}
              {children}
            </ArkTreeView.BranchText>
          )}
        </>
      )}
    </ArkTreeView.NodeContext>
  )
}

/**
 * Renders the Tree View Branch Item component.
 *
 * @example
 *   ;<TreeViewBranchItem />
 */
function TreeViewBranchItem({
  icon,
  expandedIcon,
  className,
  children,
  ...props
}: TreeViewBranchItemProps) {
  return (
    <ArkTreeView.BranchControl
      className={cn(treeViewControlRecipe(), className)}
      data-slot='tree-view-branch-control'
      {...props}
    >
      <TreeViewBranchIndicator />
      <TreeViewBranchTitle expandedIcon={expandedIcon} icon={icon}>
        {children}
      </TreeViewBranchTitle>
    </ArkTreeView.BranchControl>
  )
}

/**
 * Renders the Tree View Branch Content component.
 *
 * @example
 *   ;<TreeViewBranchContent />
 */
function TreeViewBranchContent({
  className,
  children,
  ...props
}: TreeViewBranchContentProps) {
  return (
    <ArkTreeView.BranchContent
      className={cn(treeViewBranchContentRecipe(), className)}
      data-slot='tree-view-branch-content'
      {...props}
    >
      <TreeViewBranchIndentGuide />
      {children}
    </ArkTreeView.BranchContent>
  )
}

/**
 * Renders the Tree View Content component.
 *
 * @example
 *   ;<TreeViewContent />
 */
function TreeViewContent({
  className,
  ...props
}: TreeViewContentProps) {
  return (
    <ArkTreeView.Item
      className={cn(treeViewControlRecipe(), className)}
      data-slot='tree-view-item'
      {...props}
    />
  )
}

/**
 * Renders the Tree View Item component.
 *
 * @example
 *   ;<TreeViewItem />
 */
function TreeViewItem({
  icon: Icon = FileIcon,
  className: _className,
  children,
  ...props
}: TreeViewItemProps) {
  const { fileIcons } = _useTreeView()

  const getFileIcon = (value: string): React.JSX.ElementType => {
    const extension = getFileExtension(value)
    const resolved = extension ? fileIcons?.[extension] : undefined
    return resolved ?? Icon
  }

  return (
    <ArkTreeView.NodeContext>
      {(nodeState) => {
        const ResolvedIcon = getFileIcon(nodeState.value)

        return (
          <>
            <TreeViewItemIcon>
              <ResolvedIcon />
            </TreeViewItemIcon>

            {nodeState.renaming ? (
              <TreeViewNodeInput />
            ) : (
              <TreeViewItemTitle {...props}>
                {children}
              </TreeViewItemTitle>
            )}
          </>
        )
      }}
    </ArkTreeView.NodeContext>
  )
}

/**
 * Renders the Tree View Checkbox component.
 *
 * @example
 *   ;<TreeViewCheckbox />
 */
function TreeViewCheckbox({
  className,
  ...props
}: TreeViewCheckboxProps) {
  return (
    <ArkTreeView.NodeCheckbox
      className={cn(
        checkboxRootRecipe(),
        treeViewCheckboxRecipe(),
        className
      )}
      data-slot='tree-view-checkbox'
      {...props}
    >
      <ArkTreeView.NodeCheckboxIndicator
        indeterminate={<MinusIcon />}
      >
        <CheckIcon />
      </ArkTreeView.NodeCheckboxIndicator>
    </ArkTreeView.NodeCheckbox>
  )
}

export {
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchIndicator,
  TreeViewBranchItem,
  TreeViewCheckbox,
  TreeViewContent,
  TreeViewItem,
  TreeViewLabel,
  TreeViewNode,
  TreeViewTree,
  createFileIcons,
  createTreeCollection,
  useTreeView
}

export type {
  TreeCollection,
  TreeNodeType,
  TreeViewBranchContentProps,
  TreeViewBranchIndentGuideProps,
  TreeViewBranchIndicatorProps,
  TreeViewBranchItemProps,
  TreeViewBranchProps,
  TreeViewBranchTitleKeys,
  TreeViewBranchTitleProps,
  TreeViewCheckboxProps,
  TreeViewContentProps,
  TreeViewContextProps,
  TreeViewItemIconProps,
  TreeViewItemProps,
  TreeViewItemTitleProps,
  TreeViewLabelProps,
  TreeViewNodeInputProps,
  TreeViewNodeProps,
  TreeViewProps,
  TreeViewTreeProps
}
