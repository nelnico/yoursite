"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // perform some server stuff before the user leave?
  await signOut();
};
