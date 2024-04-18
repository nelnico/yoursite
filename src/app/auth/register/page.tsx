import { CardWrapper } from "@/components/auth/card-wrapper";
import { RegisterForm } from "@/components/auth/forms/register-form";
import { Suspense } from "react";

const RegisterPage = () => {
  return (
    <Suspense>
      <CardWrapper
        headerLabel="Join Us Today!"
        backButtonLabel="Already have an account?"
        backButtonHref="/auth/login"
        showSocial
      >
        <RegisterForm />
      </CardWrapper>
    </Suspense>
  );
};

export default RegisterPage;
