import { cn, tv } from 'tailwind-variants'

const fieldRootRecipe = tv({
  base: cn(
    'group/field',
    'w-full',
    'flex gap-2',
    'data-invalid:text-destructive',
    'dark:data-invalid:text-destructive-foreground'
  ),
  defaultVariants: {
    orientation: 'vertical',
    reverse: false
  },
  variants: {
    orientation: {
      horizontal: cn(
        'flex-row items-center',
        '*:data-[slot=field-label]:flex-auto',
        'has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px'
      ),
      responsive: cn(
        'flex-col *:w-full [&>.sr-only]:w-auto',
        '@md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto',
        '@md/field-group:*:data-[slot=field-label]:flex-auto',
        '@md/field-group:has-[>[data-slot=field-content]]:items-start',
        '@md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px'
      ),
      vertical: cn('flex-col *:w-full [&>.sr-only]:w-auto')
    },
    reverse: {
      true: cn(
        'data-[orientation=horizontal]:flex-row-reverse',
        'data-[orientation=vertical]:flex-col-reverse',
        'data-[orientation=responsive]:flex-col-reverse',
        'data-[orientation=responsive]:@md/field-group:flex-row-reverse'
      )
    }
  }
})

const fieldSetRecipe = tv({
  base: cn(
    'flex flex-col gap-6',
    'has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3'
  )
})

const fieldLegendRecipe = tv({
  base: cn(
    'mb-3 font-medium',
    'data-[variant=legend]:text-base',
    'data-[variant=label]:text-sm'
  )
})

const fieldGroupRecipe = tv({
  base: cn(
    'group/field-group @container/field-group',
    'flex w-full flex-col gap-4',
    'data-[data-slot=checkbox-group]:gap-3',
    '*:data-[slot=field-group]:gap-4'
  )
})

const fieldContentRecipe = tv({
  base: cn(
    'group/field-content',
    'flex flex-1 flex-col gap-1.5',
    'leading-snug'
  )
})

const fieldLabelRecipe = tv({
  base: cn(
    'group/field-label peer/field-label',
    'select-none font-medium text-sm leading-snug',
    'flex w-fit gap-1',
    'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-xl has-[>[data-slot=field]]:border *:data-[slot=field]:p-2.5',
    'has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5',
    'group-data-disabled/field:opacity-64',
    'dark:has-data-[state=checked]:bg-primary/10'
  )
})

const fieldRequiredIndicatorRecipe = tv({
  base: cn(
    'select-none text-destructive text-sm',
    'dark:text-destructive-foreground'
  )
})

const fieldTitleRecipe = tv({
  base: cn(
    'w-fit',
    'flex items-center gap-2',
    'font-medium text-sm leading-snug',
    'group-data-[disabled=true]/field:opacity-64'
  )
})

const fieldDescription = tv({
  base: cn(
    'pointer-events-none',
    'font-normal text-muted-foreground text-sm leading-normal',
    'group-has-data-[orientation=horizontal]/field:text-balance',
    '@md/field-group:group-data-[orientation=responsive]/field:text-balance',
    'nth-last-2:-mt-1 last:mt-0 [[data-variant=legend]+&]:-mt-1.5',
    'in-[[data-slot=field]:has([data-slot=radio-group-item])]:ms-6 in-[[data-slot=field]:has([data-slot=radio-group-item])]:-mt-1.5!',
    '[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4'
  )
})

const fieldSeparatorRecipe = tv({
  base: cn(
    'relative',
    'h-5',
    '-my-2 group-data-[variant=outline]/field-group:-mb-2',
    'text-sm'
  )
})

const fieldSeparatorSideRecipe = tv({
  base: 'absolute inset-0 top-1/2'
})

const fieldLabelSeparatorRecipe = tv({
  base: cn(
    'relative block',
    'w-fit',
    'mx-auto px-2',
    'bg-background',
    'text-muted-foreground text-sm'
  )
})

const fieldHelperRecipe = tv({
  base: 'text-muted-foreground text-sm'
})

const fieldErrorRecipe = tv({
  base: cn(
    'font-normal text-destructive text-sm',
    'dark:text-destructive-foreground'
  )
})

export {
  fieldContentRecipe,
  fieldDescription,
  fieldErrorRecipe,
  fieldGroupRecipe,
  fieldHelperRecipe,
  fieldLabelRecipe,
  fieldLabelSeparatorRecipe,
  fieldLegendRecipe,
  fieldRequiredIndicatorRecipe,
  fieldRootRecipe,
  fieldSeparatorRecipe,
  fieldSeparatorSideRecipe,
  fieldSetRecipe,
  fieldTitleRecipe
}
