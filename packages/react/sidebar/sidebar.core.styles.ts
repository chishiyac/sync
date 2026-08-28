import { cn, tv } from 'tailwind-variants'

const sidebarWrapperRecipe = tv({
  base: cn(
    'group/sidebar-wrapper',
    'flex',
    'min-h-svh w-full',
    'has-data-[variant=inset]:bg-sidebar'
  )
})

const sidebarInsetRecipe = tv({
  base: cn(
    'relative flex w-full flex-1 flex-col bg-background',
    'md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ms-2',
    'md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ms-0',
    'md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm'
  )
})

const sidebarInputRecipe = tv({
  base: 'h-8 w-full bg-background shadow-none'
})

const sidebarHeaderRecipe = tv({
  base: 'flex flex-col gap-2 p-2'
})

const sidebarFooterRecipe = tv({
  base: 'flex flex-col gap-2 p-2'
})

const sidebarSeparatorRecipe = tv({
  base: 'mx-2 w-auto bg-sidebar-border'
})

const sidebarContentViewportRecipe = tv({
  base: '[--fade-size:3rem] **:data-[slot=scroll-area-scrollbar]:hidden'
})

const sidebarContentRecipe = tv({
  base: cn(
    'min-h-0',
    'flex flex-1 flex-col gap-0',
    'overflow-auto',
    'group-data-[collapsible=icon]:overflow-hidden'
  )
})

const sidebarGroupRecipe = tv({
  base: 'relative flex w-full min-w-0 flex-col p-2'
})

const sidebarGroupLabelRecipe = tv({
  base: cn(
    'h-8',
    'px-2',
    'flex shrink-0 items-center',
    'font-medium text-sidebar-foreground/70 text-xs',
    'rounded-md',
    'transition-[margin,opacity] duration-200 ease-linear',
    'outline-hidden ring-sidebar-ring focus-visible:ring-2',
    '[&_svg]:size-4 [&_svg]:shrink-0',
    'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
    'motion-reduce:transition-none!'
  )
})

const sidebarGroupActionRecipe = tv({
  base: cn(
    'absolute inset-e-3 top-3.5',
    'text-sidebar-foreground',
    'transition-transform',
    'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
    '[&_svg]:size-4 [&_svg]:shrink-0',
    'after:absolute after:-inset-2 md:after:hidden',
    'group-data-[collapsible=icon]:hidden',
    'motion-reduce:transition-none!'
  )
})

const sidebarGroupContentRecipe = tv({
  base: 'w-full text-sm'
})

const sidebarMenuRecipe = tv({
  base: cn('w-full min-w-0', 'flex flex-col gap-0')
})

const sidebarMenuItemRecipe = tv({
  base: 'group/menu-item relative'
})

const sidebarMenuActionRecipe = tv({
  base: 'absolute inset-e-1 top-1.5 text-sidebar-foreground transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground after:absolute after:-inset-2 md:after:hidden peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=md]/menu-button:top-1.5 peer-data-[size=sm]/menu-button:top-1 group-data-[collapsible=icon]:hidden [&_svg]:size-4 [&_svg]:shrink-0 motion-reduce:transition-none!',
  variants: {
    showOnHover: {
      false:
        'group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0',
      true: ''
    }
  }
})

const sidebarMenuBadgeRecipe = tv({
  base: cn(
    'absolute inset-e-1',
    'flex items-center justify-center',
    'px-1',
    'h-5 min-w-5',
    'rounded-md',
    'select-none font-medium text-sidebar-foreground text-xs tabular-nums',
    'pointer-events-none',
    'peer-hover/menu-button:text-sidebar-accent-foreground',
    'peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
    'peer-data-[size=lg]/menu-button:top-2.5',
    'peer-data-[size=md]/menu-button:top-1.5',
    'peer-data-[size=sm]/menu-button:top-1',
    'group-data-[collapsible=icon]:hidden'
  )
})

const sidebarMenuSkeletonRecipe = tv({
  base: 'flex h-8 items-center gap-2 rounded-md px-2'
})

const sidebarMenuSkeletonIconRecipe = tv({
  base: 'size-4 rounded-md'
})

const sidebarMenuSkeletonTextRecipe = tv({
  base: 'h-4 max-w-(--skeleton-width) flex-1'
})

const sidebarMenuSubRecipe = tv({
  base: cn(
    'mx-3.5 flex min-w-0 flex-col gap-1 px-2.5 py-0.5 ltr:translate-x-px rtl:-translate-x-px',
    'border-sidebar-border border-s',
    'group-data-[collapsible=icon]:hidden'
  )
})

const sidebarMenuSubItemRecipe = tv({
  base: 'group/menu-sub-item relative'
})

const sidebarMenuSubButtonRecipe = tv({
  base: 'w-full min-w-0 justify-start px-2 text-sidebar-foreground overflow-hidden ltr:-translate-x-px rtl:translate-x-px hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground focus-visible:sidebar-ring-[3px] outline-none focus-visible:ring-sidebar-ring/32 [&>span:last-child]:truncate [&_svg]:text-sidebar-accent-foreground',
  defaultVariants: {
    size: 'md'
  },
  variants: {
    size: {
      lg: '',
      md: '',
      sm: 'text-xs'
    }
  }
})

const sidebarRootRecipe = tv({
  base: cn('group peer', 'hidden md:block', 'text-sidebar-foreground')
})

const sidebarGapRecipe = tv({
  base: 'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear group-data-[collapsible=offcanvas]:w-0 group-data-[placement=right]:rotate-180 motion-reduce:transition-none!',
  defaultVariants: {
    variant: 'sidebar'
  },
  variants: {
    variant: {
      floating:
        'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]',
      inset:
        'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]',
      sidebar:
        'group-data-[collapsible=icon]:w-(--sidebar-width-icon)'
    }
  }
})

const sidebarContainerRecipe = tv({
  base: 'fixed inset-y-0 z-10 w-(--sidebar-width) hidden md:flex h-svh transition-[inset-inline-start,inset-inline-end,width] duration-200 ease-linear motion-reduce:transition-none!',
  defaultVariants: {
    placement: 'left',
    variant: 'sidebar'
  },
  variants: {
    placement: {
      left: 'inset-s-0 group-data-[collapsible=offcanvas]:-inset-s-(--sidebar-width)',
      right:
        'inset-e-0 group-data-[collapsible=offcanvas]:-inset-e-(--sidebar-width)'
    },
    variant: {
      floating:
        'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]',
      inset:
        'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]',
      sidebar:
        'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[placement=right]:border-s group-data-[placement=left]:border-e'
    }
  }
})

const sidebarInnerRecipe = tv({
  base: cn(
    'size-full',
    'flex flex-col',
    'bg-sidebar',
    'group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow-sm'
  )
})

const sidebarStaticRecipe = tv({
  base: 'h-full w-(--sidebar-width) flex flex-col bg-sidebar text-sidebar-foreground'
})

const sidebarMobileSheetContentRecipe = tv({
  base: 'w-(--sidebar-width) p-0 bg-sidebar text-sidebar-foreground [&>button]:hidden'
})

const sidebarMobileInnerRecipe = tv({
  base: 'flex size-full flex-col'
})

const sidebarSROnlyRecipe = tv({
  base: 'sr-only'
})

const sidebarTriggerIconRecipe = tv({
  base: 'rtl:rotate-180'
})

const sidebarTriggerLabelRecipe = tv({
  base: 'sr-only'
})

const sidebarRailRecipe = tv({
  base: 'absolute inset-y-0 z-20 -translate-x-1/2 w-4 hidden sm:flex transition-all ease-linear after:absolute after:inset-s-1/2 after:inset-y-0 after:w-[2px] hover:after:bg-sidebar-border group-data-[placement=left]:-inset-e-4 group-data-[placement=right]:inset-s-0 in-data-[placement=left]:cursor-w-resize in-data-[placement=right]:cursor-e-resize [[data-placement=left][data-state=collapsed]_&]:cursor-e-resize [[data-placement=right][data-state=collapsed]_&]:cursor-w-resize group-data-[collapsible=offcanvas]:translate-x-0 hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:after:inset-s-full [[data-placement=left][data-collapsible=offcanvas]_&]:-inset-e-2 [[data-placement=right][data-collapsible=offcanvas]_&]:-inset-s-2 motion-reduce:transition-none!'
})

const sidebarMenuButtonRecipe = tv({
  base: 'peer/menu-button group/menu-button w-full justify-start gap-2 p-2 overflow-hidden transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:sidebar-ring-[3px] outline-none focus-visible:ring-sidebar-ring/32 active:bg-sidebar-accent active:text-sidebar-accent-foreground group-has-data-[sidebar=menu-action]/menu-item:pe-8 [&>span:last-child]:truncate motion-reduce:transition-none! group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! data-[size=lg]:group-data-[collapsible=icon]:p-0!',
  defaultVariants: {
    isActive: false,
    isMobile: false,
    size: 'md',
    state: 'expanded'
  },
  variants: {
    isActive: {
      false: '',
      true: 'data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground'
    },
    size: {
      lg: 'data-[size=lg]:h-12',
      md: '',
      sm: 'data-[size=sm]:text-xs'
    },
    state: {
      collapsed: 'group-data-[collapsible=icon]:size-8!',
      expanded: ''
    }
  }
})

export {
  sidebarContainerRecipe,
  sidebarContentRecipe,
  sidebarContentViewportRecipe,
  sidebarFooterRecipe,
  sidebarGapRecipe,
  sidebarGroupActionRecipe,
  sidebarGroupContentRecipe,
  sidebarGroupLabelRecipe,
  sidebarGroupRecipe,
  sidebarHeaderRecipe,
  sidebarInnerRecipe,
  sidebarInputRecipe,
  sidebarInsetRecipe,
  sidebarMenuActionRecipe,
  sidebarMenuBadgeRecipe,
  sidebarMenuButtonRecipe,
  sidebarMenuItemRecipe,
  sidebarMenuRecipe,
  sidebarMenuSkeletonIconRecipe,
  sidebarMenuSkeletonRecipe,
  sidebarMenuSkeletonTextRecipe,
  sidebarMenuSubButtonRecipe,
  sidebarMenuSubItemRecipe,
  sidebarMenuSubRecipe,
  sidebarMobileInnerRecipe,
  sidebarMobileSheetContentRecipe,
  sidebarRailRecipe,
  sidebarRootRecipe,
  sidebarSeparatorRecipe,
  sidebarSROnlyRecipe,
  sidebarStaticRecipe,
  sidebarTriggerIconRecipe,
  sidebarTriggerLabelRecipe,
  sidebarWrapperRecipe
}
