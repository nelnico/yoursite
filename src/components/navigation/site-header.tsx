import { getNavConfig } from "@/config/nav/nav-links";
import { NavConfig } from "@/types/nav";
import { MainNav } from "./main-nav";
import { MobileNavigation } from "./mobile-navigation";
export async function SiteHeader() {
  let navConfig: NavConfig = getNavConfig("somerole");
  return (
    <header className="sticky top-0 z-50 w-full border-b  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14  items-center justify-between">
        <MainNav />
        <MobileNavigation navConfig={navConfig} />
      </div>
    </header>
  );
}
