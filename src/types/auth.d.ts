import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUserMembership = {
  name: string;
  expires: Date;
};

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  membership?: ExtendedUserMembership;
};
declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
