const STACK_RESPONSIVE_ALIGN_VARIANTS = {
  'baseline-end': {
    '2xl': '2xl:items-baseline-last',
    default: 'items-baseline-last',
    lg: 'lg:items-baseline-last',
    md: 'md:items-baseline-last',
    sm: 'sm:items-baseline-last',
    xl: 'xl:items-baseline-last'
  },
  'baseline-start': {
    '2xl': '2xl:items-baseline',
    default: 'items-baseline',
    lg: 'lg:items-baseline',
    md: 'md:items-baseline',
    sm: 'sm:items-baseline',
    xl: 'xl:items-baseline'
  },
  center: {
    '2xl': '2xl:items-center',
    default: 'items-center',
    lg: 'lg:items-center',
    md: 'md:items-center',
    sm: 'sm:items-center',
    xl: 'xl:items-center'
  },
  default: {
    '2xl': '2xl:items-start',
    default: 'items-start',
    lg: 'lg:items-start',
    md: 'md:items-start',
    sm: 'sm:items-start',
    xl: 'xl:items-start'
  },
  end: {
    '2xl': '2xl:items-end',
    default: 'items-end',
    lg: 'lg:items-end',
    md: 'md:items-end',
    sm: 'sm:items-end',
    xl: 'xl:items-end'
  },
  'safe-center': {
    '2xl': '2xl:items-center-safe',
    default: 'items-center-safe',
    lg: 'lg:items-center-safe',
    md: 'md:items-center-safe',
    sm: 'sm:items-center-safe',
    xl: 'xl:items-center-safe'
  },
  'safe-end': {
    '2xl': '2xl:items-end-safe',
    default: 'items-end-safe',
    lg: 'lg:items-end-safe',
    md: 'md:items-end-safe',
    sm: 'sm:items-end-safe',
    xl: 'xl:items-end-safe'
  },
  stretch: {
    '2xl': '2xl:items-stretch',
    default: 'items-stretch',
    lg: 'lg:items-stretch',
    md: 'md:items-stretch',
    sm: 'sm:items-stretch',
    xl: 'xl:items-stretch'
  }
} as const

const STACK_RESPONSIVE_JUSTIFY_VARIANTS = {
  around: {
    '2xl': '2xl:justify-around',
    default: 'justify-around',
    lg: 'lg:justify-around',
    md: 'md:justify-around',
    sm: 'sm:justify-around',
    xl: 'xl:justify-around'
  },
  baseline: {
    '2xl': '2xl:justify-baseline',
    default: 'justify-baseline',
    lg: 'lg:justify-baseline',
    md: 'md:justify-baseline',
    sm: 'sm:justify-baseline',
    xl: 'xl:justify-baseline'
  },
  between: {
    '2xl': '2xl:justify-between',
    default: 'justify-between',
    lg: 'lg:justify-between',
    md: 'md:justify-between',
    sm: 'sm:justify-between',
    xl: 'xl:justify-between'
  },
  center: {
    '2xl': '2xl:justify-center',
    default: 'justify-center',
    lg: 'lg:justify-center',
    md: 'md:justify-center',
    sm: 'sm:justify-center',
    xl: 'xl:justify-center'
  },
  default: {
    '2xl': '2xl:justify-normal',
    default: 'justify-normal',
    lg: 'lg:justify-normal',
    md: 'md:justify-normal',
    sm: 'sm:justify-normal',
    xl: 'xl:justify-normal'
  },
  end: {
    '2xl': '2xl:justify-end',
    default: 'justify-end',
    lg: 'lg:justify-end',
    md: 'md:justify-end',
    sm: 'sm:justify-end',
    xl: 'xl:justify-end'
  },
  'items-center': {
    '2xl': '2xl:justify-items-center',
    default: 'justify-items-center',
    lg: 'lg:justify-items-center',
    md: 'md:justify-items-center',
    sm: 'sm:justify-items-center',
    xl: 'xl:justify-items-center'
  },
  'items-end': {
    '2xl': '2xl:justify-items-end',
    default: 'justify-items-end',
    lg: 'lg:justify-items-end',
    md: 'md:justify-items-end',
    sm: 'sm:justify-items-end',
    xl: 'xl:justify-items-end'
  },
  'items-normal': {
    '2xl': '2xl:justify-items-normal',
    default: 'justify-items-normal',
    lg: 'lg:justify-items-normal',
    md: 'md:justify-items-normal',
    sm: 'sm:justify-items-normal',
    xl: 'xl:justify-items-normal'
  },
  'items-safe-center': {
    '2xl': '2xl:justify-items-center-safe',
    default: 'justify-items-center-safe',
    lg: 'lg:justify-items-center-safe',
    md: 'md:justify-items-center-safe',
    sm: 'sm:justify-items-center-safe',
    xl: 'xl:justify-items-center-safe'
  },
  'items-safe-end': {
    '2xl': '2xl:justify-items-end-safe',
    default: 'justify-items-end-safe',
    lg: 'lg:justify-items-end-safe',
    md: 'md:justify-items-end-safe',
    sm: 'sm:justify-items-end-safe',
    xl: 'xl:justify-items-end-safe'
  },
  'items-stretch': {
    '2xl': '2xl:justify-items-stretch',
    default: 'justify-items-stretch',
    lg: 'lg:justify-items-stretch',
    md: 'md:justify-items-stretch',
    sm: 'sm:justify-items-stretch',
    xl: 'xl:justify-items-stretch'
  },
  'safe-center': {
    '2xl': '2xl:justify-center-safe',
    default: 'justify-center-safe',
    lg: 'lg:justify-center-safe',
    md: 'md:justify-center-safe',
    sm: 'sm:justify-center-safe',
    xl: 'xl:justify-center-safe'
  },
  'safe-end': {
    '2xl': '2xl:justify-end-safe',
    default: 'justify-end-safe',
    lg: 'lg:justify-end-safe',
    md: 'md:justify-end-safe',
    sm: 'sm:justify-end-safe',
    xl: 'xl:justify-end-safe'
  },
  'self-center': {
    '2xl': '2xl:justify-self-center',
    default: 'justify-self-center',
    lg: 'lg:justify-self-center',
    md: 'md:justify-self-center',
    sm: 'sm:justify-self-center',
    xl: 'xl:justify-self-center'
  },
  'self-end': {
    '2xl': '2xl:justify-self-end',
    default: 'justify-self-end',
    lg: 'lg:justify-self-end',
    md: 'md:justify-self-end',
    sm: 'sm:justify-self-end',
    xl: 'xl:justify-self-end'
  },
  'self-normal': {
    '2xl': '2xl:justify-self-normal',
    default: 'justify-self-normal',
    lg: 'lg:justify-self-normal',
    md: 'md:justify-self-normal',
    sm: 'sm:justify-self-normal',
    xl: 'xl:justify-self-normal'
  },
  'self-safe-center': {
    '2xl': '2xl:justify-self-center-safe',
    default: 'justify-self-center-safe',
    lg: 'lg:justify-self-center-safe',
    md: 'md:justify-self-center-safe',
    sm: 'sm:justify-self-center-safe',
    xl: 'xl:justify-self-center-safe'
  },
  'self-safe-end': {
    '2xl': '2xl:justify-self-end-safe',
    default: 'justify-self-end-safe',
    lg: 'lg:justify-self-end-safe',
    md: 'md:justify-self-end-safe',
    sm: 'sm:justify-self-end-safe',
    xl: 'xl:justify-self-end-safe'
  },
  'self-start': {
    '2xl': '2xl:justify-self-start',
    default: 'justify-self-start',
    lg: 'lg:justify-self-start',
    md: 'md:justify-self-start',
    sm: 'sm:justify-self-start',
    xl: 'xl:justify-self-start'
  },
  'self-stretch': {
    '2xl': '2xl:justify-self-stretch',
    default: 'justify-self-stretch',
    lg: 'lg:justify-self-stretch',
    md: 'md:justify-self-stretch',
    sm: 'sm:justify-self-stretch',
    xl: 'xl:justify-self-stretch'
  },
  start: {
    '2xl': '2xl:justify-start',
    default: 'justify-start',
    lg: 'lg:justify-start',
    md: 'md:justify-start',
    sm: 'sm:justify-start',
    xl: 'xl:justify-start'
  },
  stretch: {
    '2xl': '2xl:justify-stretch',
    default: 'justify-stretch',
    lg: 'lg:justify-stretch',
    md: 'md:justify-stretch',
    sm: 'sm:justify-stretch',
    xl: 'xl:justify-stretch'
  }
} as const

export {
  STACK_RESPONSIVE_ALIGN_VARIANTS,
  STACK_RESPONSIVE_JUSTIFY_VARIANTS
}
