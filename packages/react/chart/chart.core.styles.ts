import { cn, tv } from 'tailwind-variants'

type ChartTooltipIndicator = 'dashed' | 'dot' | 'line'

type ChartLegendVerticalAlign = 'bottom' | 'middle' | 'top'

const chartRootRecipe = tv({
  base: cn(
    'flex justify-center',
    'aspect-video',
    'text-xs',
    '[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground',
    '[&_.recharts-cartesian-grid_line[stroke="#ccc"]]:stroke-border/50',
    '[&_.recharts-curve.recharts-tooltip-cursor]:stroke-border',
    '[&_.recharts-dot[stroke="#fff"]]:stroke-transparent',
    '[&_.recharts-layer]:outline-hidden',
    '[&_.recharts-polar-grid_[stroke="#ccc"]]:stroke-border',
    '[&_.recharts-radial-bar-background-sector]:fill-muted',
    '[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted'
  )
})

const chartTooltipContentRecipe = tv({
  base: cn(
    'min-w-32',
    'grid items-start gap-1.5',
    'px-2.5 py-1.5',
    'rounded-lg border border-border/50 shadow-xl',
    'bg-background',
    'text-xs'
  )
})

const chartTooltipLabelRecipe = tv({
  base: 'font-medium'
})

const chartTooltipItemsRecipe = tv({
  base: 'grid gap-1.5'
})

const chartTooltipItemRecipe = tv({
  base: cn(
    'w-full',
    'flex flex-wrap items-stretch gap-2',
    '[&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground'
  )
})

const chartTooltipIndicatorRecipe = tv({
  base: cn('shrink-0 rounded-[2px] border-border bg-(--color-bg)')
})

const chartTooltipIndicatorNestedRecipe = tv({
  base: 'my-0.5'
})

const chartTooltipValueGroupRecipe = tv({
  base: 'flex flex-1 justify-between leading-none',
  defaultVariants: {
    nestLabel: false
  },
  variants: {
    nestLabel: {
      false: 'items-center',
      true: 'items-end'
    }
  }
})

const chartTooltipSeriesLabelRecipe = tv({
  base: 'text-muted-foreground'
})

const chartTooltipValueRecipe = tv({
  base: 'font-medium font-mono text-foreground tabular-nums'
})

const chartLegendRecipe = tv({
  base: cn('flex items-center justify-center gap-4')
})

const chartLegendItemRecipe = tv({
  base: cn(
    'flex items-center gap-1.5',
    '[&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground'
  )
})

const chartLegendMarkerRecipe = tv({
  base: 'size-2 shrink-0 rounded-[2px]'
})

const chartTooltipIndicatorClassNames = {
  dashed: 'w-0 border-[1.5px] border-dashed bg-transparent',
  dot: 'h-2.5 w-2.5',
  line: 'w-1'
} satisfies Record<ChartTooltipIndicator, string>

const chartLegendVerticalAlignClassNames = {
  bottom: 'pt-3',
  middle: 'py-3',
  top: 'pb-3'
} satisfies Record<ChartLegendVerticalAlign, string>

export {
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
}

export type { ChartLegendVerticalAlign, ChartTooltipIndicator }
