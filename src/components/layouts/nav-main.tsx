import { type Icon } from '@tabler/icons-react';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from '@/components/ui/sidebar';
import { Link, useLocation } from 'react-router';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '../ui/collapsible';
import { ChevronRight } from 'lucide-react';

interface Item {
  title: string;
  url: string;
  icon?: Icon;
  items?: { title: string; url: string }[];
}
interface NavMainProps {
  items: Item[];
}
export function NavMain({ items }: NavMainProps) {
  const location = useLocation();
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => {
            const isActive =
              item.url === ''
                ? location.pathname === '/' // root path
                : location.pathname.startsWith(`/${item.url}`);
            if (item.items) {
              return (
                <CollapsibleSidebarMenuItem key={item.title} item={item} />
              );
            }
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={`py-6 ${isActive ? 'bg-muted text-primary font-semibold' : 'hover:bg-muted/50 text-muted-foreground'}
`}
                  isActive={isActive}
                >
                  <Link to={item.url}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

function CollapsibleSidebarMenuItem({ item }: { item: Item }) {
  const location = useLocation();
  const isOpen = location.pathname.startsWith(`/${item.url}`);
  return (
    <Collapsible asChild className="group/collapsible" defaultOpen={isOpen}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            tooltip={item.title}
            className={
              isOpen
                ? 'text-primary font-normal'
                : 'text-muted-foreground hover:text-primary'
            }
          >
            {item.icon && <item.icon />}
            <span>{item.title}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.items?.map((subItem) => {
              const isSubActive = location.pathname.startsWith(
                `/${item.url}/${subItem.url}`
              );
              return (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton
                    asChild
                    className={
                      isSubActive
                        ? 'text-primary font-semibold'
                        : 'text-muted-foreground hover:text-primary'
                    }
                  >
                    <Link to={`${item.url}/${subItem.url}`}>
                      {subItem.title}
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              );
            })}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}
