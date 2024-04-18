import { UserRole } from "@prisma/client";
import * as z from "zod";
export const SettingsSchema = z
  .object({
    name: z.string().optional(),
    role: z.enum([UserRole.ADMIN, UserRole.USER, UserRole.PROVIDER]),
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
    newPassword: z.string().min(6).optional(),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    { message: "New password is required", path: ["newPassword"] }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    { message: "Password is required", path: ["password"] }
  );
export type SettingsFormData = z.infer<typeof SettingsSchema>;
