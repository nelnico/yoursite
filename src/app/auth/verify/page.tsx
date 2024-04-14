import { VerifyForm } from "@/components/auth/forms/verify-form";
import { Suspense } from "react";

const NewVerificationPage = () => {
  return (
    <Suspense>
      <VerifyForm />
    </Suspense>
  );
};

export default NewVerificationPage;
