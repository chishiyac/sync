const MEDIA_QUERY_SIZES = [
  'default',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl'
] as const

type MediaQueryResponsiveSize = (typeof MEDIA_QUERY_SIZES)[number]
type MediaQueryResponsiveValue<Value extends string> =
  | Value
  | Partial<
      Record<MediaQueryResponsiveSize, '' | Value | null | undefined>
    >
type MediaQueryResponsiveClassNames<Value extends string> = Record<
  Value,
  Record<MediaQueryResponsiveSize, string>
>

const isMediaQueryResponsiveValue = <Value extends string>(
  value: MediaQueryResponsiveValue<Value> | undefined
): value is Partial<
  Record<MediaQueryResponsiveSize, '' | Value | null | undefined>
> => typeof value === 'object' && value !== null

const getMediaQueryResponsiveClassName = <Value extends string>(
  value: MediaQueryResponsiveValue<Value> | undefined,
  classNames: MediaQueryResponsiveClassNames<Value>
) => {
  if (!isMediaQueryResponsiveValue(value)) {
    return
  }

  return MEDIA_QUERY_SIZES.flatMap((size) => {
    const variant = value[size]

    if (!variant) {
      return []
    }

    const className = classNames[variant]?.[size]

    if (!className) {
      return []
    }

    return [className]
  }).join(' ')
}

export {
  getMediaQueryResponsiveClassName,
  isMediaQueryResponsiveValue
}

export type {
  MediaQueryResponsiveClassNames,
  MediaQueryResponsiveSize,
  MediaQueryResponsiveValue
}
