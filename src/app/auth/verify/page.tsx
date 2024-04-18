import { CardWrapper } from "@/components/auth/card-wrapper";
import { VerifyForm } from "@/components/auth/forms/verify-form";
import { Suspense } from "react";

const NewVerificationPage = () => {
  return (
    <Suspense>
      <CardWrapper
        headerLabel="Confirming your verification"
        backButtonLabel="Back to login"
        backButtonHref="/auth/login"
        showSocial
      >
        <VerifyForm />
      </CardWrapper>
    </Suspense>
  );
};

export default NewVerificationPage;
