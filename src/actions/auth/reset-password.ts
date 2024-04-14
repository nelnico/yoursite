"use server";
import bcrypt from "bcryptjs";

import { getPasswordResetTokenByToken } from "@/data/auth/reset-token";
import { getUserByEmail } from "@/data/auth/user";
import {
  ResetPasswordFormData,
  ResetPasswordSchema,
} from "@/schemas/auth/reset-password-schema";
import db from "@/lib/db";

export const resetPassword = async (
  values: ResetPasswordFormData,
  token?: string | null
) => {
  if (!token) {
    return {
      error: "Missing token",
    };
  }

  const validatedFields = ResetPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid field",
    };
  }

  const { password } = validatedFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) {
    return {
      error: "Invalid token",
    };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) {
    return {
      error: "Token has expired",
    };
  }

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    return {
      error: "Email does not exists",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await db.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      password: hashedPassword,
    },
  });

  await db.passwordResetToken.delete({
    where: {
      id: existingToken.id,
    },
  });
  return { success: "Password updated" };
};
