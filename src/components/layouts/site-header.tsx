import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useAuthStore } from '@/stores/auth-store';
import { IconLogout } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '../ui/breadcrumb';
import React from 'react';

const formatLabel = (segment: string) =>
  segment.replace(/-/g, ' ').toUpperCase();

export function SiteHeader() {
  const logout = useAuthStore((state) => state.logout);
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean); // remove empty strings

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">DASHBOARD</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {paths.map((segment, index) => {
              const key = '/' + paths.slice(0, index + 1).join('/');
              const isLast = index === paths.length - 1;

              return (
                <React.Fragment key={key}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{formatLabel(segment)}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink>{formatLabel(segment)}</BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex"
            onClick={logout}
          >
            Logout <IconLogout />
          </Button>
        </div>
      </div>
    </header>
  );
}
