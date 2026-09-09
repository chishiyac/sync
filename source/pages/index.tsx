import { Stack } from '@sync/react'
import { createFileRoute, redirect } from '@tanstack/react-router'

import { AuthBlock } from '@/blocks/auth'
import { proxy } from '@/router/proxies/proxy'

function RouteComponent() {
  return (
    <Stack className='h-dvh w-svw overflow-hidden'>
      <AuthBlock />
    </Stack>
  )
}

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    if (proxy().isAuthenticated()) {
      throw redirect({ to: '/app' })
    }
  },
  component: RouteComponent
})
