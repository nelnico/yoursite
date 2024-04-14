"use server";

import { generatePasswordResetToken } from "@/lib/tokens";
import { getUserByEmail } from "@/data/auth/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { ResetFormData, ResetSchema } from "@/schemas/auth/reset-schema";

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
