import { SidebarProvider, Stack } from '@sync/react'
import {
  createFileRoute,
  Outlet,
  redirect
} from '@tanstack/react-router'
import React from 'react'

import { AppSidebarBlock } from '@/blocks/layout'
import { GradientBackground } from '@/components'
import { ANIMATED_BACKGROUND_PALETTE } from '@/constants'
import { proxy } from '@/router/proxies/proxy'

function AppLayout() {
  return (
    <Stack
      justify='center'
      align='center'
      className='relative h-dvh w-full overflow-hidden'
    >
      <GradientBackground
        gradientColors={ANIMATED_BACKGROUND_PALETTE.low}
      />
      <SidebarProvider
        style={
          {
            '--sidebar-width': '17rem',
            '--sidebar-width-icon': '3.2rem'
          } as React.CSSProperties
        }
      >
        <Stack className='z-50 size-full'>
          <AppSidebarBlock />
          <Stack>
            <Outlet />
          </Stack>
        </Stack>
      </SidebarProvider>
    </Stack>
  )
}

export const Route = createFileRoute('/app')({
  beforeLoad: () => {
    if (!proxy().isAuthenticated()) {
      throw redirect({ to: '/' })
    }
  },
  component: AppLayout
})
