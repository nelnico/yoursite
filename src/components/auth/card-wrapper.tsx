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
          <h1 className="text-3xl font-semibold">
            <Link href="/">{siteConfig.name}</Link>
          </h1>

          <p className="text-muted-foreground">{headerLabel}</p>
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
