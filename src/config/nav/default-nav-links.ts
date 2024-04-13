import { NavConfig } from "@/types/nav";

export const defaultNavConfig: NavConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about-us",
    },
    {
      title: "Contact Us",
      href: "/contact-us",
    },
    {
      title: "Join Us",
      href: "/join-us",
    },
  ],
  sidebarNav: [
    // {
    //   title: 'Getting Started x ',
    //   items: [
    //     {
    //       title: 'Introduction',
    //       href: '/y',
    //       items: [],
    //     },
    //   ],
    // },
    // {
    //   title: 'More public stuff',
    //   items: [
    //     {
    //       title: 'Someting',
    //       href: '/z',
    //       items: [],
    //     },
    //   ],
    // },
  ],
};
