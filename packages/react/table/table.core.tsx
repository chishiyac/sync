'use client'

import { ark } from '@ark-ui/react/factory'
import type React from 'react'
import { cn } from 'tailwind-variants'

import {
  tableBodyRecipe,
  tableCaptionRecipe,
  tableCellRecipe,
  tableFooterRecipe,
  tableHeadRecipe,
  tableHeaderRecipe,
  tableRootRecipe,
  tableRowRecipe,
  tableWrapperRecipe
} from './table.core.styles'

/**
 * Supported table variants.
 *
 * @example
 *   type Example = TableVariant
 */
type TableVariant = 'plain' | 'striped'

/**
 * Props for the Table component.
 *
 * @example
 *   type Example = TableProps
 */
type TableProps = React.ComponentProps<typeof ark.table> & {
  /**
   * Whether the table rows are hoverable.
   *
   * @default true
   */
  isHoverable?: boolean
  /**
   * The variant of the table.
   *
   * @default 'plain'
   */
  variant?: TableVariant
  /** Additional class names applied to the table wrapper. */
  rootClassName: React.ComponentProps<typeof ark.div>['className']
}

/**
 * Props for the Table Body component.
 *
 * @example
 *   type Example = TableBodyProps
 */
type TableBodyProps = React.ComponentProps<typeof ark.tbody>

/**
 * Props for the Table Header component.
 *
 * @example
 *   type Example = TableHeaderProps
 */
type TableHeaderProps = React.ComponentProps<typeof ark.thead>

/**
 * Props for the Table Footer component.
 *
 * @example
 *   type Example = TableFooterProps
 */
type TableFooterProps = React.ComponentProps<typeof ark.tfoot>

/**
 * Props for the Table Row component.
 *
 * @example
 *   type Example = TableRowProps
 */
type TableRowProps = React.ComponentProps<typeof ark.tr>

/**
 * Props for the Table Head component.
 *
 * @example
 *   type Example = TableHeadProps
 */
type TableHeadProps = React.ComponentProps<typeof ark.th>

/**
 * Props for the Table Cell component.
 *
 * @example
 *   type Example = TableCellProps
 */
type TableCellProps = React.ComponentProps<typeof ark.td>

/**
 * Props for the Table Caption component.
 *
 * @example
 *   type Example = TableCaptionProps
 */
type TableCaptionProps = React.ComponentProps<typeof ark.caption>

/**
 * Renders the Table component.
 *
 * @example
 *   ;<Table />
 */
function Table({
  variant = 'plain',
  isHoverable = true,
  className,
  rootClassName,
  ...props
}: TableProps) {
  return (
    <div
      className={cn(tableWrapperRecipe(), rootClassName)}
      data-slot='table-wrapper'
    >
      <ark.table
        className={cn(tableRootRecipe(), className)}
        data-hoverable={isHoverable}
        data-slot='table'
        data-variant={variant}
        {...props}
      />
    </div>
  )
}

/**
 * Renders the Table Header component.
 *
 * @example
 *   ;<TableHeader />
 */
function TableHeader({ className, ...props }: TableHeaderProps) {
  return (
    <ark.thead
      className={cn(tableHeaderRecipe(), className)}
      data-slot='table-header'
      {...props}
    />
  )
}

/**
 * Renders the Table Body component.
 *
 * @example
 *   ;<TableBody />
 */
function TableBody({ className, ...props }: TableBodyProps) {
  return (
    <ark.tbody
      className={cn(tableBodyRecipe(), className)}
      data-slot='table-body'
      {...props}
    />
  )
}

/**
 * Renders the Table Footer component.
 *
 * @example
 *   ;<TableFooter />
 */
function TableFooter({ className, ...props }: TableFooterProps) {
  return (
    <ark.tfoot
      className={cn(tableFooterRecipe(), className)}
      data-slot='table-footer'
      {...props}
    />
  )
}

/**
 * Renders the Table Row component.
 *
 * @example
 *   ;<TableRow />
 */
function TableRow({ className, ...props }: TableRowProps) {
  return (
    <ark.tr
      className={cn(tableRowRecipe(), className)}
      data-slot='table-row'
      {...props}
    />
  )
}

/**
 * Renders the Table Head component.
 *
 * @example
 *   ;<TableHead />
 */
function TableHead({ className, ...props }: TableHeadProps) {
  return (
    <ark.th
      className={cn(tableHeadRecipe(), className)}
      data-slot='table-head'
      {...props}
    />
  )
}

/**
 * Renders the Table Cell component.
 *
 * @example
 *   ;<TableCell />
 */
function TableCell({ className, ...props }: TableCellProps) {
  return (
    <ark.td
      className={cn(tableCellRecipe(), className)}
      data-slot='table-cell'
      {...props}
    />
  )
}

/**
 * Renders the Table Caption component.
 *
 * @example
 *   ;<TableCaption />
 */
function TableCaption({ className, ...props }: TableCaptionProps) {
  return (
    <ark.caption
      className={cn(tableCaptionRecipe(), className)}
      data-slot='table-caption'
      {...props}
    />
  )
}

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
}

export type {
  TableBodyProps,
  TableCaptionProps,
  TableCellProps,
  TableFooterProps,
  TableHeadProps,
  TableHeaderProps,
  TableProps,
  TableRowProps,
  TableVariant
}
