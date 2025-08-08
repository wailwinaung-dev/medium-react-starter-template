import * as React from 'react';
import {
  IconDashboard,
  IconInnerShadowTop,
  IconListDetails,
  IconReportAnalytics,
  IconSettingsCog
} from '@tabler/icons-react';

import { NavUser } from './nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import { NavMain } from './nav-main';

const menuData = [
  {
    title: 'Dashboard',
    url: '',
    icon: IconDashboard
  },
  {
    title: 'Transactions',
    url: 'transactions',
    icon: IconListDetails
  },
  {
    title: 'CBM Reports',
    url: 'cbm-reports',
    icon: IconReportAnalytics,
    items: [
      {
        title: 'Inward Transactions',
        url: 'inward-transactions'
      }
    ]
  },
  {
    title: 'Setup',
    url: 'setup',
    icon: IconSettingsCog,
    items: [
      {
        title: 'Exchange Rates',
        url: 'exchange-rate'
      }
    ]
  }
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">
                  Reporting System
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={menuData} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
