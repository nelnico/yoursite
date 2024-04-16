import { useSession } from "next-auth/react";

export const useCurrentRole = () => {
  // todo: i'd like to do this with usecurrentUser instead, see comments there
  const session = useSession();
  return session.data?.user?.role;
};
