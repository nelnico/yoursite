import type { Metadata } from "next";
import { SiteHeader } from "@/components/navigation/site-header";
import { siteConfig } from "@/config/site";
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
    <div className="mx-2 sm:mx-4 md:mx-5 lg:mx-8 xl:mx-10 2xl:mx-12">
      <SiteHeader />
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default RootLayout;
