import { CardWrapper } from "@/components/auth/card-wrapper";
import { LoginForm } from "@/components/auth/forms/login-form";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <Suspense>
      <CardWrapper
        headerLabel="Welcome Back!"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
      >
        <LoginForm />
      </CardWrapper>
    </Suspense>
  );
};

export default LoginPage;
