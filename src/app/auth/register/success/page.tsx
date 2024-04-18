import { CardWrapper } from "@/components/auth/card-wrapper";
import React from "react";

const AuthRegisterSuccessPage = () => {
  return (
    <CardWrapper
      headerLabel="Welcome!"
      backButtonLabel="Go home"
      backButtonHref="/"
    >
      <h1>TODO: Proper registration success page</h1>
      <h1>Please check your email to verify your account</h1>
      <h1>
        If you did not receive your account, try again[link], try recover your
        password [link], or send us a support message
      </h1>
      <h1>very sorry if some issue</h1>
    </CardWrapper>
  );
};

export default AuthRegisterSuccessPage;
