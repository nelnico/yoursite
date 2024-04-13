import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/navigation/site-header";
import { ThemeProvider } from "next-themes";
import { siteConfig } from "@/config/site";
import { BreakpointIndicator } from "@/components/misc/breakpoint-indicator";

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

const RootLayout = ({ children }: RootLayoutProps) => {
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
          {children}
          <BreakpointIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
