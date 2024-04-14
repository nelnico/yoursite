"use server";

import {
  LoginSchema,
  ResetFormData,
  ResetSchema,
} from "@/schemas/auth-schemas";
import { AuthError } from "next-auth";
import {
  generatePasswordResetToken,
  generateVerificationToken,
} from "@/lib/tokens";
import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail, sendVerificationEmail } from "@/lib/mail";

export const reset = async (values: ResetFormData) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid email",
    };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return { error: "Email not found!" };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );
  return { success: "Confirmation email sent" };
};
