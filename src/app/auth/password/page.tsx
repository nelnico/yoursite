import { CardWrapper } from "@/components/auth/card-wrapper";
import { ResetPasswordForm } from "@/components/auth/forms/reset-password-form";
import { Suspense } from "react";

const PasswordPage = () => {
  return (
    <Suspense>
      <CardWrapper
        headerLabel="Enter a new password?"
        backButtonLabel="Back to login"
        backButtonHref="/auth/login"
        showSocial
      >
        <ResetPasswordForm />
      </CardWrapper>
    </Suspense>
  );
};

export default PasswordPage;
