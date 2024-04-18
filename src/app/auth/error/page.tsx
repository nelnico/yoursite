import { CardWrapper } from "@/components/auth/card-wrapper";
import { ErrorCard } from "@/components/auth/error-card";
import React from "react";

const AuthErrorPage = () => {
  return (
    <CardWrapper
      headerLabel="Oops, something went wrong!"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
      showSocial
    >
      <ErrorCard />
    </CardWrapper>
  );
};

export default AuthErrorPage;
