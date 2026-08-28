import type { CHART_THEMES } from './chart.core.constants'

/**
 * Shared Chart Config type.
 *
 * @example
 *   type Example = ChartConfig
 */
type ChartConfig = Record<
  string,
  (
    | {
        color?: never
        theme: Record<keyof typeof CHART_THEMES, string>
      }
    | { color?: string; theme?: never }
  ) & {
    /** The icon to display for this series. */
    icon?: React.ComponentType
    /** The label to display for this series. */
    label?: React.ReactNode
  }
>

/**
 * Resolves the matching chart config entry for a payload.
 *
 * @example
 *   const entry = getPayload(config, payload, 'dataKey')
 */
function getPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== 'object' || payload === null) {
    return
  }
  const payloadPayload =
    'payload' in payload &&
    typeof payload.payload === 'object' &&
    payload.payload !== null
      ? payload.payload
      : undefined
  let configLabelKey: string = key
  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === 'string'
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] ===
      'string'
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }
  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export { getPayload }

export type { ChartConfig }
