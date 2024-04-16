import "./globals.css";
import type { Metadata } from "next";
import { auth } from "@/auth";
import { ThemeProvider } from "next-themes";
import { siteConfig } from "@/config/site";
import { BreakpointIndicator } from "@/components/misc/breakpoint-indicator";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // todo: investigate other SEO stuff that's actually useful
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider session={session}>{children}</SessionProvider>
          <BreakpointIndicator />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
