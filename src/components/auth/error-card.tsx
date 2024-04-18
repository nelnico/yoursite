import React from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <ExclamationTriangleIcon className="h-6 w-6" />
    </div>
  );
};
