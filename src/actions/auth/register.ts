"use server";
import bcrypt from "bcryptjs";

import db from "@/lib/db";

import { getUserByEmail } from "@/data/auth/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";
import {
  RegisterFormData,
  RegisterSchema,
} from "@/schemas/auth/register-schema";

export const register = async (values: RegisterFormData) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid credentials",
    };
  }

  const { email, password, name } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: "Email already in user",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(email, verificationToken.token);

  return {
    success: "Confirmation email sent",
  };
};
