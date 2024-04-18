import { CardWrapper } from "@/components/auth/card-wrapper";
import { ResetForm } from "@/components/auth/forms/reset-form";
import { Suspense } from "react";

const ResetPage = () => {
  <Suspense>
    <CardWrapper
      headerLabel="Forgot your password?"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <ResetForm />
    </CardWrapper>
  </Suspense>;
};

export default ResetPage;
