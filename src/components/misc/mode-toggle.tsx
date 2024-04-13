"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      <SunIcon className="h-6 w-6  rotate-0 scale-100 transition-all dark:hidden" />
      <MoonIcon className=" hidden h-6 w-6 rotate-0 scale-100 transition-all dark:block" />
      <span className="sr-only">Toggle theme </span>
    </button>
  );
}
