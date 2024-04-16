import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
  const session = useSession();
  // todo: can we get a strongly typed object with
  // user details
  // role
  // membership
  // permissions / addons / etc
  return session.data?.user;
};
