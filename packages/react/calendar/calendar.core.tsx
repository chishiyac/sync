'use client'

import {
  DatePicker as ArkCalendar,
  parseDate as arkParseDate
} from '@ark-ui/react/date-picker'
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from 'lucide-react'
import type React from 'react'
import { cn } from 'tailwind-variants'

import { Button } from '../button'
import { selectTriggerRecipe } from '../select'
import {
  calendarControlRecipe,
  calendarLabelRecipe,
  calendarMonthSelectChevronRecipe,
  calendarMonthSelectRecipe,
  calendarNextTriggerChevronRecipe,
  calendarNextTriggerRecipe,
  calendarPrevTriggerChevronRecipe,
  calendarPrevTriggerRecipe,
  calendarRootRecipe,
  calendarTableCellRecipe,
  calendarTableCellTriggerRecipe,
  calendarTableHeaderRecipe,
  calendarTableRecipe,
  calendarTableRowRecipe,
  calendarViewControlRecipe,
  calendarViewDateRecipe,
  calendarViewRecipe,
  calendarYearSelectChevronRecipe,
  calendarYearSelectRecipe
} from './calendar.core.styles'

/**
 * Shared Calendar Week Days Format type.
 *
 * @example
 *   type Example = CalendarWeekDaysFormat
 */
type CalendarWeekDaysFormat = 'narrow' | 'short' | 'long'

/**
 * Props for the Calendar Week Days component.
 *
 * @example
 *   type Example = CalendarWeekDaysProps
 */
type CalendarWeekDaysProps = React.ComponentProps<
  typeof ArkCalendar.TableHead
> & {
  /**
   * The format of the week days
   *
   * @default 'narrow'
   */
  format?: CalendarWeekDaysFormat
}

/**
 * Props for the Calendar Table Next Month component.
 *
 * @example
 *   type Example = CalendarTableNextMonthProps
 */
type CalendarTableNextMonthProps = React.ComponentProps<
  typeof CalendarTableBody
> & {
  /**
   * The number of months to offset
   *
   * @default 1
   */
  months?: number
}

/**
 * Props for the Calendar component.
 *
 * @example
 *   type Example = CalendarProps
 */
type CalendarProps = React.ComponentProps<typeof ArkCalendar.Root>

/**
 * Props for the Calendar Control component.
 *
 * @example
 *   type Example = CalendarControlProps
 */
type CalendarControlProps = React.ComponentProps<
  typeof ArkCalendar.Control
>

/**
 * Props for the Calendar Label component.
 *
 * @example
 *   type Example = CalendarLabelProps
 */
type CalendarLabelProps = React.ComponentProps<
  typeof ArkCalendar.Label
>

/**
 * Props for the Calendar Trigger component.
 *
 * @example
 *   type Example = CalendarTriggerProps
 */
type CalendarTriggerProps = React.ComponentProps<
  typeof ArkCalendar.Trigger
>

/**
 * Props for the Calendar Preset Trigger component.
 *
 * @example
 *   type Example = CalendarPresetTriggerProps
 */
type CalendarPresetTriggerProps = React.ComponentProps<
  typeof ArkCalendar.PresetTrigger
>
/**
 * Props for the Calendar View Date component.
 *
 * @example
 *   type Example = CalendarViewDateProps
 */
type CalendarViewDateProps = React.ComponentProps<
  typeof ArkCalendar.RangeText
>

/**
 * Props for the Calendar Clear Trigger component.
 *
 * @example
 *   type Example = CalendarClearTriggerProps
 */
type CalendarClearTriggerProps = React.ComponentProps<
  typeof ArkCalendar.ClearTrigger
>
/**
 * Props for the Calendar Year Select component.
 *
 * @example
 *   type Example = CalendarYearSelectProps
 */
type CalendarYearSelectProps = React.ComponentProps<
  typeof ArkCalendar.YearSelect
>
/**
 * Props for the Calendar Month Select component.
 *
 * @example
 *   type Example = CalendarMonthSelectProps
 */
type CalendarMonthSelectProps = React.ComponentProps<
  typeof ArkCalendar.MonthSelect
>
/**
 * Props for the Calendar View component.
 *
 * @example
 *   type Example = CalendarViewProps
 */
type CalendarViewProps = React.ComponentProps<typeof ArkCalendar.View>

/**
 * Props for the Calendar Context component.
 *
 * @example
 *   type Example = CalendarContextProps
 */
type CalendarContextProps = React.ComponentProps<
  typeof ArkCalendar.Context
>

/**
 * Props for the Calendar Today Trigger component.
 *
 * @example
 *   type Example = CalendarTodayTriggerProps
 */
type CalendarTodayTriggerProps = React.ComponentProps<typeof Button>

/**
 * Props for the Calendar View Control component.
 *
 * @example
 *   type Example = CalendarViewControlProps
 */
type CalendarViewControlProps = React.ComponentProps<
  typeof ArkCalendar.ViewControl
>
/**
 * Props for the Calendar Prev Trigger component.
 *
 * @example
 *   type Example = CalendarPrevTriggerProps
 */
type CalendarPrevTriggerProps = React.ComponentProps<
  typeof ArkCalendar.PrevTrigger
>
/**
 * Props for the Calendar Next Trigger component.
 *
 * @example
 *   type Example = CalendarNextTriggerProps
 */
type CalendarNextTriggerProps = React.ComponentProps<
  typeof ArkCalendar.NextTrigger
>
/**
 * Props for the Calendar Table component.
 *
 * @example
 *   type Example = CalendarTableProps
 */
type CalendarTableProps = React.ComponentProps<
  typeof ArkCalendar.Table
>

/**
 * Props for the Calendar Table Head component.
 *
 * @example
 *   type Example = CalendarTableHeadProps
 */
type CalendarTableHeadProps = React.ComponentProps<
  typeof ArkCalendar.TableHead
>
/**
 * Props for the Calendar Table Row component.
 *
 * @example
 *   type Example = CalendarTableRowProps
 */
type CalendarTableRowProps = React.ComponentProps<
  typeof ArkCalendar.TableRow
>

/**
 * Props for the Calendar Table Header component.
 *
 * @example
 *   type Example = CalendarTableHeaderProps
 */
type CalendarTableHeaderProps = React.ComponentProps<
  typeof ArkCalendar.TableHeader
>
/**
 * Props for the Calendar Table Body component.
 *
 * @example
 *   type Example = CalendarTableBodyProps
 */
type CalendarTableBodyProps = React.ComponentProps<
  typeof ArkCalendar.TableBody
>

/**
 * Props for the Calendar Table Cell component.
 *
 * @example
 *   type Example = CalendarTableCellProps
 */
type CalendarTableCellProps = React.ComponentProps<
  typeof ArkCalendar.TableCell
>

/**
 * Props for the Calendar Table Days component.
 *
 * @example
 *   type Example = CalendarTableDaysProps
 */
type CalendarTableDaysProps = React.ComponentProps<
  typeof CalendarTableBody
>

const parseDate = arkParseDate

/**
 * Renders the Calendar component.
 *
 * @example
 *   ;<Calendar />
 */
function Calendar({
  lazyMount = true,
  unmountOnExit = true,
  className,
  ...props
}: CalendarProps) {
  return (
    <ArkCalendar.Root
      className={cn(calendarRootRecipe(), className)}
      data-slot='calendar'
      inline
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...props}
    />
  )
}

/**
 * Renders the Calendar Control component.
 *
 * @example
 *   ;<CalendarControl />
 */
function CalendarControl({ ...props }: CalendarControlProps) {
  return (
    <ArkCalendar.Control
      className={calendarControlRecipe()}
      data-slot='calendar-control'
      {...props}
    />
  )
}

/**
 * Renders the Calendar Label component.
 *
 * @example
 *   ;<CalendarLabel />
 */
function CalendarLabel({ ...props }: CalendarLabelProps) {
  return (
    <ArkCalendar.Label
      className={calendarLabelRecipe()}
      data-slot='calendar-label'
      {...props}
    />
  )
}

/**
 * Renders the Calendar Trigger component.
 *
 * @example
 *   ;<CalendarTrigger />
 */
function CalendarTrigger({ ...props }: CalendarTriggerProps) {
  return (
    <ArkCalendar.Trigger data-slot='calendar-trigger' {...props} />
  )
}

/**
 * Renders the Calendar Preset Trigger component.
 *
 * @example
 *   ;<CalendarPresetTrigger />
 */
function CalendarPresetTrigger({
  ...props
}: CalendarPresetTriggerProps) {
  return (
    <ArkCalendar.PresetTrigger
      data-slot='calendar-preset-trigger'
      {...props}
    />
  )
}

/**
 * Renders the Calendar View Date component.
 *
 * @example
 *   ;<CalendarViewDate />
 */
function CalendarViewDate({
  className,
  ...props
}: CalendarViewDateProps) {
  return (
    <ArkCalendar.RangeText
      className={cn(calendarViewDateRecipe(), className)}
      data-slot='calendar-range-text'
      {...props}
    />
  )
}

/**
 * Renders the Calendar Clear Trigger component.
 *
 * @example
 *   ;<CalendarClearTrigger />
 */
function CalendarClearTrigger({
  ...props
}: CalendarClearTriggerProps) {
  return (
    <ArkCalendar.ClearTrigger
      data-slot='calendar-clear-trigger'
      {...props}
    />
  )
}

/**
 * Renders the Calendar Year Select component.
 *
 * @example
 *   ;<CalendarYearSelect />
 */
function CalendarYearSelect({ ...props }: CalendarYearSelectProps) {
  return (
    <div
      className={calendarYearSelectRecipe()}
      data-slot='calendar-year-select-wrapper'
    >
      <ArkCalendar.YearSelect
        className={cn(selectTriggerRecipe())}
        data-slot='calendar-year-select'
        {...props}
      />
      <ChevronDownIcon
        className={calendarYearSelectChevronRecipe()}
        data-slot='calendar-year-select-icon'
      />
    </div>
  )
}

/**
 * Renders the Calendar Month Select component.
 *
 * @example
 *   ;<CalendarMonthSelect />
 */
function CalendarMonthSelect({
  className,
  ...props
}: CalendarMonthSelectProps) {
  return (
    <div
      className={calendarMonthSelectRecipe()}
      data-slot='calendar-month-select-wrapper'
    >
      <ArkCalendar.MonthSelect
        className={cn(selectTriggerRecipe(), className)}
        data-slot='calendar-month-select'
        {...props}
      />
      <ChevronDownIcon
        className={calendarMonthSelectChevronRecipe()}
        data-slot='calendar-month-select-icon'
      />
    </div>
  )
}

/**
 * Renders the Calendar View component.
 *
 * @example
 *   ;<CalendarView />
 */
function CalendarView({ className, ...props }: CalendarViewProps) {
  return (
    <ArkCalendar.View
      className={cn(calendarViewRecipe(), className)}
      data-slot='calendar-view'
      {...props}
    />
  )
}

/**
 * Renders the Calendar Context component.
 *
 * @example
 *   ;<CalendarContext />
 */
function CalendarContext({ ...props }: CalendarContextProps) {
  return (
    <ArkCalendar.Context data-slot='calendar-context' {...props} />
  )
}

/**
 * Renders the Calendar Today Trigger component.
 *
 * @example
 *   ;<CalendarTodayTrigger />
 */
function CalendarTodayTrigger({
  variant = 'outline',
  size = 'lg',
  ...props
}: CalendarTodayTriggerProps) {
  return (
    <CalendarContext>
      {(calendar) => (
        <Button
          data-slot='calendar-today-trigger'
          onClick={() => calendar.selectToday()}
          size={size}
          variant={variant}
          {...props}
        >
          Today
        </Button>
      )}
    </CalendarContext>
  )
}

/**
 * Renders the Calendar View Control component.
 *
 * @example
 *   ;<CalendarViewControl />
 */
function CalendarViewControl({
  className,
  ...props
}: CalendarViewControlProps) {
  return (
    <ArkCalendar.ViewControl
      className={cn(calendarViewControlRecipe(), className)}
      data-slot='calendar-view-control'
      {...props}
    />
  )
}

/**
 * Renders the Calendar Prev Trigger component.
 *
 * @example
 *   ;<CalendarPrevTrigger />
 */
function CalendarPrevTrigger({ ...props }: CalendarPrevTriggerProps) {
  return (
    <ArkCalendar.PrevTrigger
      asChild
      data-slot='calendar-prev-trigger'
      {...props}
    >
      <Button
        className={calendarPrevTriggerRecipe()}
        size='icon-md'
        variant='ghost'
      >
        <ChevronLeftIcon
          aria-hidden
          className={calendarPrevTriggerChevronRecipe()}
        />
      </Button>
    </ArkCalendar.PrevTrigger>
  )
}

/**
 * Renders the Calendar Next Trigger component.
 *
 * @example
 *   ;<CalendarNextTrigger />
 */
function CalendarNextTrigger({ ...props }: CalendarNextTriggerProps) {
  return (
    <ArkCalendar.NextTrigger
      asChild
      data-slot='calendar-next-trigger'
      {...props}
    >
      <Button
        className={calendarNextTriggerRecipe()}
        size='icon-md'
        variant='ghost'
      >
        <ChevronRightIcon
          aria-hidden
          className={calendarNextTriggerChevronRecipe()}
        />
      </Button>
    </ArkCalendar.NextTrigger>
  )
}

/**
 * Renders the Calendar Table component.
 *
 * @example
 *   ;<CalendarTable />
 */
function CalendarTable({ className, ...props }: CalendarTableProps) {
  return (
    <ArkCalendar.Table
      className={cn(calendarTableRecipe(), className)}
      data-slot='calendar-table'
      {...props}
    />
  )
}

/**
 * Renders the Calendar Table Head component.
 *
 * @example
 *   ;<CalendarTableHead />
 */
function CalendarTableHead({ ...props }: CalendarTableHeadProps) {
  return (
    <ArkCalendar.TableHead
      data-slot='calendar-table-head'
      {...props}
    />
  )
}

/**
 * Renders the Calendar Table Row component.
 *
 * @example
 *   ;<CalendarTableRow />
 */
function CalendarTableRow({
  className,
  ...props
}: CalendarTableRowProps) {
  return (
    <ArkCalendar.TableRow
      className={cn(calendarTableRowRecipe(), className)}
      data-slot='calendar-table-row'
      {...props}
    />
  )
}

/**
 * Renders the Calendar Table Header component.
 *
 * @example
 *   ;<CalendarTableHeader />
 */
function CalendarTableHeader({
  className,
  ...props
}: CalendarTableHeaderProps) {
  return (
    <ArkCalendar.TableHeader
      className={cn(calendarTableHeaderRecipe(), className)}
      data-slot='calendar-table-header'
      {...props}
    />
  )
}

/**
 * Renders the Calendar Week Days component.
 *
 * @example
 *   ;<CalendarWeekDays />
 */
function CalendarWeekDays({
  format = 'narrow',
  ...props
}: CalendarWeekDaysProps) {
  return (
    <CalendarContext>
      {(calendar) => (
        <CalendarTableHead data-slot='calendar-table-head' {...props}>
          <CalendarTableRow>
            {calendar.weekDays.map((weekDay) => (
              <CalendarTableHeader key={weekDay.short}>
                {weekDay[format]}
              </CalendarTableHeader>
            ))}
          </CalendarTableRow>
        </CalendarTableHead>
      )}
    </CalendarContext>
  )
}

/**
 * Renders the Calendar Table Body component.
 *
 * @example
 *   ;<CalendarTableBody />
 */
function CalendarTableBody({ ...props }: CalendarTableBodyProps) {
  return (
    <ArkCalendar.TableBody
      data-slot='calendar-table-body'
      {...props}
    />
  )
}

/**
 * Renders the Calendar Table Cell component.
 *
 * @example
 *   ;<CalendarTableCell />
 */
function CalendarTableCell({
  value,
  visibleRange,
  className,
  ...props
}: CalendarTableCellProps) {
  return (
    <ArkCalendar.TableCell
      className={calendarTableCellRecipe()}
      data-slot='calendar-table-cell'
      value={value}
      visibleRange={visibleRange}
    >
      <ArkCalendar.TableCellTrigger
        className={cn(calendarTableCellTriggerRecipe(), className)}
        data-slot='calendar-table-cell-trigger'
        {...props}
      />
    </ArkCalendar.TableCell>
  )
}

/**
 * Renders the Calendar Table Days component.
 *
 * @example
 *   ;<CalendarTableDays />
 */
function CalendarTableDays({
  tabIndex,
  ...props
}: CalendarTableDaysProps) {
  return (
    <CalendarContext>
      {(calendar) => (
        <CalendarTableBody {...props}>
          {calendar.weeks.map((week, index) => (
            <CalendarTableRow key={index}>
              {week.map((day) => (
                <CalendarTableCell
                  key={day.day}
                  tabIndex={tabIndex ?? undefined}
                  value={day}
                >
                  {day.day}
                </CalendarTableCell>
              ))}
            </CalendarTableRow>
          ))}
        </CalendarTableBody>
      )}
    </CalendarContext>
  )
}

/**
 * Renders the Calendar Table Next Month component.
 *
 * @example
 *   ;<CalendarTableNextMonth />
 */
function CalendarTableNextMonth({
  months = 1,
  tabIndex,
  ...props
}: CalendarTableNextMonthProps) {
  return (
    <CalendarContext>
      {(calendar) => {
        const offset = calendar.getOffset({ months })

        return (
          <CalendarTableBody {...props}>
            {offset.weeks.map((week, index) => (
              <CalendarTableRow key={index}>
                {week.map((day) => (
                  <CalendarTableCell
                    key={day.day}
                    tabIndex={tabIndex ?? undefined}
                    value={day}
                    visibleRange={offset.visibleRange}
                  >
                    {day.day}
                  </CalendarTableCell>
                ))}
              </CalendarTableRow>
            ))}
          </CalendarTableBody>
        )
      }}
    </CalendarContext>
  )
}

export {
  Calendar,
  CalendarClearTrigger,
  CalendarContext,
  CalendarControl,
  CalendarLabel,
  CalendarMonthSelect,
  CalendarNextTrigger,
  CalendarPresetTrigger,
  CalendarPrevTrigger,
  CalendarTable,
  CalendarTableBody,
  CalendarTableCell,
  CalendarTableDays,
  CalendarTableHead,
  CalendarTableHeader,
  CalendarTableNextMonth,
  CalendarTableRow,
  CalendarTodayTrigger,
  CalendarTrigger,
  CalendarView,
  CalendarViewControl,
  CalendarViewDate,
  CalendarWeekDays,
  CalendarYearSelect,
  parseDate
}

export type {
  CalendarClearTriggerProps,
  CalendarContextProps,
  CalendarControlProps,
  CalendarLabelProps,
  CalendarMonthSelectProps,
  CalendarNextTriggerProps,
  CalendarPresetTriggerProps,
  CalendarPrevTriggerProps,
  CalendarProps,
  CalendarTableBodyProps,
  CalendarTableCellProps,
  CalendarTableDaysProps,
  CalendarTableHeaderProps,
  CalendarTableHeadProps,
  CalendarTableNextMonthProps,
  CalendarTableProps,
  CalendarTableRowProps,
  CalendarTodayTriggerProps,
  CalendarTriggerProps,
  CalendarViewControlProps,
  CalendarViewDateProps,
  CalendarViewProps,
  CalendarWeekDaysFormat,
  CalendarWeekDaysProps,
  CalendarYearSelectProps
}
