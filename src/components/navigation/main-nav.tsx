"use client";
import logoDark from "@/assets/img/logo-dark.png";
import logoLight from "@/assets/img/logo-light.png";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

import { ModeToggle } from "../misc/mode-toggle";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";
import { LoginButton } from "../auth/login-button";
import { Button } from "../ui/button";

interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

interface NavigationItem {
  title: string;
  url: string;
  description: string;
}

const navigation: NavigationSection[] = [
  {
    title: "Stuff",
    items: [
      {
        title: "About",
        url: "/about-us",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Contact",
        url: "/contact-us",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Join Us",
        url: "/join-us",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },

  {
    title: "Admin",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard/admin",
        description: "Admin dashboard for managing your site.",
      },
    ],
  },
];

export function MainNav() {
  return (
    <div className="hidden sm:flex w-full items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={logoLight}
          alt="yoursite logo"
          width={28}
          height={28}
          className=" dark:hidden"
        />
        <Image
          src={logoDark}
          alt="yoursite logo"
          width={28}
          height={28}
          className=" hidden dark:block"
        />

        <span className="hidden font-bold sm:inline-block text-md">
          {siteConfig.name}
        </span>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {navigation.map((section, sectionIndex) => (
            <NavigationMenuItem key={sectionIndex}>
              <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {section.items.map((item, itemIndex) => (
                    <Link key={`${sectionIndex}_${itemIndex}`} href={item.url}>
                      <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">
                          {item.title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center justify-between gap-4">
        <LoginButton>
          <Button>Log In</Button>
        </LoginButton>
        <ModeToggle />
      </div>
    </div>
  );
}
