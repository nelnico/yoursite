"use client";

import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { verify } from "@/actions/auth/verify";
import { FormError } from "@/components/form/form-error";
import { FormSuccess } from "@/components/form/form-success";

export const VerifyForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token");
      return;
    }

    verify(token)
      .then((data) => {
        setSuccess(data?.success);
        setError(data?.error);
      })
      .catch((error) => {
        setError("Something went wrong");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="flex items-center w-full justify-center">
      {!success && !error && <BeatLoader color="white" />}
      <FormSuccess message={success} />
      <FormError message={error} />
    </div>
  );
};
