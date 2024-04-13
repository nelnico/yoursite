import { NavConfig } from "@/types/nav";
import { defaultNavConfig } from "./default-nav-links";

export const getNavConfig = (role: string) => {
  let navConfig: NavConfig = defaultNavConfig;
  // if (!role) return navConfig;
  // if (role === 'OWNER') {
  //   navConfig = ownerNavConfig;
  // } else if (role === 'ADMIN') {
  //   navConfig = adminNavConfig;
  // } else if (role === 'AGENT') {
  //   navConfig = agentNavConfig;
  //    .... etc
  // }
  return navConfig;
};
