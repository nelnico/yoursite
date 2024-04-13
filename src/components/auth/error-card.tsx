import React from "react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { CardWrapper } from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops, something went wrong!"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
      showSocial
    >
      <div className="w-full flex items-center justify-center">
        <ExclamationTriangleIcon className="h-6 w-6" />
      </div>
    </CardWrapper>
  );
};
