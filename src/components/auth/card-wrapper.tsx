import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Social } from "@/components/auth/social";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

import logoDark from "@/assets/img/logo-dark.png";
import logoLight from "@/assets/img/logo-light.png";
import Image from "next/image";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}
export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <div className="w-full flex flex-col gap-y-4 ">
        <CardHeader className="text-center">
          <Link
            href="/"
            className="flex items-center gap-2 justify-center mb-1"
          >
            <Image
              src={logoLight}
              alt={`${siteConfig.name} logo`}
              width={32}
              height={32}
              className=" dark:hidden"
            />
            <Image
              src={logoDark}
              alt={`${siteConfig.name} logo`}
              width={32}
              height={32}
              className=" hidden dark:block"
            />

            <span className="hidden font-bold sm:inline-block text-xl">
              {siteConfig.name}
            </span>
          </Link>
          <p className="text-muted-foreground ms-8 text-lg  ">{headerLabel}</p>
        </CardHeader>
        <CardContent>{children}</CardContent>
        {showSocial && (
          <CardFooter className="w-full">
            <Social />
          </CardFooter>
        )}
        <CardFooter>
          <Button
            variant="link"
            className="font-normal w-full"
            size="sm"
            asChild
          >
            <Link href={backButtonHref}>{backButtonLabel}</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};
