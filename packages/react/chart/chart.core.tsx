'use client'

import React from 'react'
import type {
  LegendPayload,
  LegendProps,
  TooltipContentProps,
  TooltipPayloadEntry,
  TooltipValueType
} from 'recharts'
import { Legend, ResponsiveContainer, Tooltip } from 'recharts'
import { cn } from 'tailwind-variants'

import { CHART_THEMES } from './chart.core.constants'
import {
  chartLegendItemRecipe,
  chartLegendMarkerRecipe,
  chartLegendRecipe,
  chartLegendVerticalAlignClassNames,
  chartRootRecipe,
  chartTooltipContentRecipe,
  chartTooltipIndicatorClassNames,
  chartTooltipIndicatorNestedRecipe,
  chartTooltipIndicatorRecipe,
  chartTooltipItemRecipe,
  chartTooltipItemsRecipe,
  chartTooltipLabelRecipe,
  chartTooltipSeriesLabelRecipe,
  chartTooltipValueGroupRecipe,
  chartTooltipValueRecipe
} from './chart.core.styles'
import type { ChartConfig } from './chart.core.util'
import { getPayload } from './chart.core.util'

/**
 * Supported chart name values.
 *
 * @example
 *   type Example = ChartNameType
 */
type ChartNameType = number | string

/**
 * Supported chart tooltip values.
 *
 * @example
 *   type Example = ChartTooltipType
 */
type ChartTooltipType = 'none'

/**
 * Shared Chart Tooltip Indicator type.
 *
 * @example
 *   type Example = ChartTooltipIndicator
 */
type ChartTooltipIndicator = 'dashed' | 'dot' | 'line'

/**
 * Shared Chart Formatter type.
 *
 * @example
 *   type Example = ChartFormatter
 */
type ChartFormatter<
  TValue extends TooltipValueType = TooltipValueType,
  TName extends ChartNameType = ChartNameType
> = (
  value: TValue | undefined,
  name: TName | undefined,
  item: TooltipPayloadEntry<TValue, TName>,
  index: number,
  payload: readonly TooltipPayloadEntry<TValue, TName>[]
) => [React.ReactNode, TName] | React.ReactNode

/**
 * Props for the Chart Legend Content component.
 *
 * @example
 *   type Example = ChartLegendContentProps
 */
type ChartLegendContentProps = {
  /** Additional class names for the legend container. */
  className?: string
  /**
   * Whether to hide the icon for each legend item.
   *
   * @default false
   */
  hideIcon?: boolean
  /** The key used to resolve the item name. */
  nameKey?: string
  /** The legend payload to render. */
  payload?: LegendPayload[]
  /** Vertical alignment of the legend. */
  verticalAlign?: LegendProps['verticalAlign']
}

/**
 * Props for the Chart Tooltip component.
 *
 * @example
 *   type Example = ChartTooltipProps
 */
type ChartTooltipProps = Partial<
  TooltipContentProps<TooltipValueType, ChartNameType>
> & {
  /** Additional class names for the tooltip container. */
  className?: string
  /** The color used for the tooltip indicator. */
  color?: string
  /** Custom formatter for tooltip values. */
  formatter?: ChartFormatter
  /**
   * Whether to hide the indicator.
   *
   * @default false
   */
  hideIndicator?: boolean
  /**
   * Whether to hide the label.
   *
   * @default false
   */
  hideLabel?: boolean
  /**
   * The style used for the tooltip indicator.
   *
   * @default 'dot'
   */
  indicator?: ChartTooltipIndicator
  /** Additional class names for the label container. */
  labelClassName?: string
  /** Custom formatter for the tooltip label. */
  labelFormatter?: (
    label: TooltipContentProps<number, string>['label'],
    payload: TooltipContentProps<number, string>['payload']
  ) => React.ReactNode
  /** The key used to resolve the label. */
  labelKey?: string
  /** The key used to resolve the name. */
  nameKey?: string
}

/**
 * Props for the Chart Context component.
 *
 * @example
 *   type Example = ChartContextProps
 */
type ChartContextProps = {
  /** The chart configuration used by descendants. */
  config: ChartConfig
}

/**
 * Props for the Chart Container component.
 *
 * @example
 *   type Example = ChartContainerProps
 */
type ChartContainerProps = React.ComponentProps<'div'> & {
  /** The chart children to render inside the responsive container. */
  children: React.ComponentProps<
    typeof ResponsiveContainer
  >['children']
  /** The chart configuration. */
  config: ChartConfig
}

/**
 * Props for the Chart Style component.
 *
 * @example
 *   type Example = ChartStyleProps
 */
type ChartStyleProps = {
  /** The chart configuration. */
  config: ChartConfig
  /** The chart style id. */
  id: string
}

const ChartContext = React.createContext<ChartContextProps | null>(
  null
)

const ChartTooltip = Tooltip

const ChartLegend = Legend

/**
 * Returns the shared chart context.
 *
 * @example
 *   const chart = useChart()
 */
function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error(
      'useChart must be used within a <ChartContainer />'
    )
  }

  return context
}

/**
 * Renders the Chart Style component.
 *
 * @example
 *   ;<ChartStyle />
 */
function ChartStyle({ config, id }: ChartStyleProps) {
  const colorConfig = Object.entries(config).filter(
    ([, configItem]) => configItem.theme || configItem.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      // oxlint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: Object.entries(CHART_THEMES)
          .map(
            ([theme, prefix]) => `
            ${prefix} [data-chart=${id}] {
            ${colorConfig
              .map(([key, itemConfig]) => {
                const color =
                  itemConfig.theme?.[
                    theme as keyof typeof itemConfig.theme
                  ] || itemConfig.color
                return color ? `  --color-${key}: ${color};` : null
              })
              .join('\n')}
            }
            `
          )
          .join('\n')
      }}
    />
  )
}

/**
 * Renders the Chart Container component.
 *
 * @example
 *   ;<ChartContainer />
 */
function ChartContainer({
  children,
  className,
  config,
  id,
  ...props
}: ChartContainerProps) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replaceAll(':', '')}`
  return (
    // oxlint-disable-next-line react/jsx-no-constructed-context-values
    <ChartContext.Provider value={{ config }}>
      <div
        className={cn(chartRootRecipe(), className)}
        data-chart={chartId}
        data-slot='chart'
        {...props}
      >
        <ChartStyle config={config} id={chartId} />
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

/**
 * Renders the Chart Tooltip Content component.
 *
 * @example
 *   ;<ChartTooltipContent />
 */
function ChartTooltipContent({
  active,
  className,
  color,
  formatter,
  hideIndicator = false,
  hideLabel = false,
  indicator = 'dot',
  label,
  labelClassName,
  labelFormatter,
  labelKey,
  nameKey,
  payload
}: ChartTooltipProps) {
  const { config } = useChart()
  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null
    }

    const [item] = payload
    const key = `${labelKey || item?.dataKey || item?.name || 'value'}`
    const itemConfig = getPayload(config, item, key)
    const value = (() => {
      const v =
        !labelKey && typeof label === 'string'
          ? (config[label as keyof typeof config]?.label ?? label)
          : itemConfig?.label

      return typeof v === 'string' || typeof v === 'number'
        ? v
        : undefined
    })()

    if (labelFormatter) {
      return (
        <div
          className={cn(chartTooltipLabelRecipe(), labelClassName)}
        >
          {labelFormatter(value, payload)}
        </div>
      )
    }

    if (!value) {
      return null
    }

    return (
      <div className={cn(chartTooltipLabelRecipe(), labelClassName)}>
        {value}
      </div>
    )
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey
  ])

  if (!(active && payload?.length)) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== 'dot'
  const tooltipIndicatorClassName =
    chartTooltipIndicatorClassNames[indicator]

  return (
    <div className={cn(chartTooltipContentRecipe(), className)}>
      {nestLabel ? null : tooltipLabel}
      <div className={chartTooltipItemsRecipe()}>
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || 'value'}`
          const itemConfig = getPayload(config, item, key)
          const indicatorColor =
            color || item.payload.fill || item.color

          return (
            <div
              className={cn(
                chartTooltipItemRecipe(),
                indicator === 'dot' && 'items-center'
              )}
              key={key}
            >
              {/* oxlint-disable-next-line sonarjs/expression-complexity */}
              {formatter && item?.value !== undefined && item.name ? (
                formatter(
                  item.value,
                  item.name,
                  item,
                  index,
                  item.payload
                )
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          chartTooltipIndicatorRecipe(),
                          tooltipIndicatorClassName,
                          nestLabel &&
                            indicator === 'dashed' &&
                            chartTooltipIndicatorNestedRecipe()
                        )}
                        style={
                          {
                            '--color-bg': indicatorColor,
                            '--color-border': indicatorColor
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={chartTooltipValueGroupRecipe({
                      nestLabel
                    })}
                  >
                    <div className='grid gap-1.5'>
                      {nestLabel ? tooltipLabel : null}
                      <span
                        className={chartTooltipSeriesLabelRecipe()}
                      >
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span className={chartTooltipValueRecipe()}>
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/**
 * Renders the Chart Legend Content component.
 *
 * @example
 *   ;<ChartLegendContent />
 */
function ChartLegendContent({
  className,
  hideIcon = false,
  nameKey,
  payload,
  verticalAlign = 'bottom'
}: ChartLegendContentProps) {
  const { config } = useChart()
  const resolvedVerticalAlign = verticalAlign ?? 'bottom'
  const verticalAlignClassName =
    chartLegendVerticalAlignClassNames[resolvedVerticalAlign]

  if (!payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        chartLegendRecipe(),
        verticalAlignClassName,
        className
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || 'value'}`
        const itemConfig = getPayload(config, item, key)

        return (
          <div className={chartLegendItemRecipe()} key={item.value}>
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className={chartLegendMarkerRecipe()}
                style={{
                  backgroundColor: item.color
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        )
      })}
    </div>
  )
}

export {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
  useChart
}

export type {
  ChartConfig,
  ChartFormatter,
  ChartNameType,
  ChartTooltipProps,
  ChartTooltipType
}
