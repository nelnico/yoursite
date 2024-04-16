import { auth } from "@/auth";

// todo: what do we need this for?  A: this is for server components (see await?)  the hooks are for client components,
// like useCurrentUser, useCurrentRole, etc.
export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const currentRole = async () => {
  const session = await auth();

  return session?.user?.role;
};
