import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator
} from '@sync/react'
import type React from 'react'
import { cn } from 'tailwind-variants'

import { generateMenu } from './app-sidebar.layout.constants'
import {
  appSidebarMenuRecipe,
  appSidebarRootRecipe,
  appSidebarSeparatorRecipe
} from './app-sidebar.layout.styles'
import { NavUserLayoutBlock } from './nav-user'

type BlockProps = React.ComponentProps<typeof Sidebar>

function Block({ className, ...props }: BlockProps) {
  const items = generateMenu({})

  return (
    <Sidebar
      className={cn(appSidebarRootRecipe(), className)}
      collapsible='none'
      title='Navigation'
      {...props}
    >
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu
              aria-label='Navigation'
              className={appSidebarMenuRecipe()}
            >
              {items.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    size='sm'
                    aria-label={item.label}
                    disabled={item.disabled}
                    isActive={item.isActive}
                  >
                    <item.icon aria-hidden='true' />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarSeparator className={appSidebarSeparatorRecipe()} />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUserLayoutBlock />
      </SidebarFooter>
    </Sidebar>
  )
}

export { Block as AppSidebarBlock }

export type { BlockProps as AppSidebarBlockProps }
