import { Icons } from "@/components/icons";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export interface NavConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export interface ContactFormOptions {
  senderTypes: FormSelectOption[];
  messageTypes: FormSelectOption[];
}

export interface FormSelectOption {
  label: string;
  value: string;
}
