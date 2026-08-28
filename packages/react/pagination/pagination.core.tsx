'use client'

import {
  Pagination as ArkPagination,
  usePaginationContext
} from '@ark-ui/react/pagination'
import { ChevronLeft, ChevronRight, Ellipsis } from 'lucide-react'
import type React from 'react'
import { cn } from 'tailwind-variants'

import { Button } from '../button'
import {
  paginationEllipsisRecipe,
  paginationItemRecipe,
  paginationRootRecipe
} from './pagination.core.styles'

/**
 * Props for the Pagination component.
 *
 * @example
 *   type Example = PaginationProps
 */
type PaginationProps = React.ComponentProps<typeof ArkPagination.Root>

/**
 * Shared Pagination Item Link Page type.
 *
 * @example
 *   type Example = PaginationItemLinkPage
 */
type PaginationItemLinkPage = 'previous' | 'next' | number

/**
 * Props for the Pagination Item Link component.
 *
 * @example
 *   type Example = PaginationItemLinkProps
 */
type PaginationItemLinkProps = React.ComponentProps<typeof Button> & {
  /**
   * The page number to link to.
   *
   * @default undefined
   */
  page?: PaginationItemLinkPage
}

/**
 * Props for the Pagination Previous component.
 *
 * @example
 *   type Example = PaginationPreviousProps
 */
type PaginationPreviousProps = React.ComponentProps<
  typeof ArkPagination.PrevTrigger
>

/**
 * Props for the Pagination Next component.
 *
 * @example
 *   type Example = PaginationNextProps
 */
type PaginationNextProps = React.ComponentProps<
  typeof ArkPagination.NextTrigger
>

/**
 * Props for the Pagination Item component.
 *
 * @example
 *   type Example = PaginationItemProps
 */
type PaginationItemProps = React.ComponentProps<
  typeof ArkPagination.Item
>

/**
 * Props for the Pagination Ellipsis component.
 *
 * @example
 *   type Example = PaginationEllipsisProps
 */
type PaginationEllipsisProps = React.ComponentProps<
  typeof ArkPagination.Ellipsis
>

/**
 * Props for the Pagination Items component.
 *
 * @example
 *   type Example = PaginationItemsProps
 */
type PaginationItemsProps = Omit<
  React.ComponentProps<typeof ArkPagination.Context>,
  'children'
>

const usePagination = usePaginationContext

/**
 * Renders the Pagination component.
 *
 * @example
 *   ;<Pagination />
 */
function Pagination({ className, ...props }: PaginationProps) {
  return (
    <ArkPagination.Root
      className={cn(paginationRootRecipe(), className)}
      data-slot='pagination'
      {...props}
    />
  )
}

/**
 * Renders the Pagination Previous component.
 *
 * @example
 *   ;<PaginationPrevious />
 */
function PaginationPrevious({ ...props }: PaginationPreviousProps) {
  return (
    <ArkPagination.PrevTrigger
      asChild
      data-slot='pagination-previous'
      {...props}
    >
      <Button variant='ghost'>
        <ChevronLeft />
        Previous
      </Button>
    </ArkPagination.PrevTrigger>
  )
}

/**
 * Renders the Pagination Next component.
 *
 * @example
 *   ;<PaginationNext />
 */
function PaginationNext({ ...props }: PaginationNextProps) {
  return (
    <ArkPagination.NextTrigger
      asChild
      data-slot='pagination-next'
      {...props}
    >
      <Button variant='ghost'>
        Next
        <ChevronRight />
      </Button>
    </ArkPagination.NextTrigger>
  )
}

/**
 * Renders the Pagination Item component.
 *
 * @example
 *   ;<PaginationItem />
 */
function PaginationItem({
  className,
  children,
  ...props
}: PaginationItemProps) {
  return (
    <ArkPagination.Item
      asChild
      data-slot='pagination-item'
      {...props}
    >
      <Button
        className={cn(paginationItemRecipe(), className)}
        size='icon-md'
        variant='ghost'
      >
        {children}
      </Button>
    </ArkPagination.Item>
  )
}

/**
 * Renders the Pagination Item Link component.
 *
 * @example
 *   ;<PaginationItemLink />
 */
function PaginationItemLink({
  page,
  children,
  ...props
}: PaginationItemLinkProps) {
  const pagination = usePaginationContext()
  const pageValue = () => {
    if (page === 'previous') {
      return pagination.previousPage
    }

    if (page === 'next') {
      return pagination.nextPage
    }

    return page
  }
  if (typeof page === 'number') {
    return (
      <Button asChild variant='outline' {...props}>
        <a href={`?page=${pageValue()}`}>{children}</a>
      </Button>
    )
  }
  return (
    <Button asChild variant='ghost' {...props}>
      <a href={`?page=${pageValue()}`}>{children}</a>
    </Button>
  )
}

/**
 * Renders the Pagination Ellipsis component.
 *
 * @example
 *   ;<PaginationEllipsis />
 */
function PaginationEllipsis({
  className,
  ...props
}: PaginationEllipsisProps) {
  return (
    <ArkPagination.Ellipsis
      className={cn(paginationEllipsisRecipe(), className)}
      data-slot='pagination-ellipsis'
      {...props}
    >
      <Ellipsis />
    </ArkPagination.Ellipsis>
  )
}

/**
 * Renders the Pagination Items component.
 *
 * @example
 *   ;<PaginationItems />
 */
function PaginationItems({ ...props }: PaginationItemsProps) {
  return (
    <ArkPagination.Context data-slot='pagination-items' {...props}>
      {({ pages }) =>
        pages.map((page, index) =>
          page.type === 'page' ? (
            <PaginationItem
              key={page.value}
              type='page'
              value={page.value}
            >
              {page.value}
            </PaginationItem>
          ) : (
            <PaginationEllipsis
              index={index}
              key={`ellipsis-${index}`}
            />
          )
        )
      }
    </ArkPagination.Context>
  )
}

export {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationItemLink,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
  usePagination
}

export type {
  PaginationEllipsisProps,
  PaginationItemLinkPage,
  PaginationItemLinkProps,
  PaginationItemProps,
  PaginationItemsProps,
  PaginationNextProps,
  PaginationPreviousProps,
  PaginationProps
}
