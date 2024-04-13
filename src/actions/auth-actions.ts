"use server";

import db from "@/lib/db";
import bcrypt from "bcrypt";

import {
  LoginSchema,
  LoginFormData,
  RegisterFormData,
  RegisterSchema,
} from "@/lib/schemas/auth-schemas";
import { getUserByEmail } from "@/data/user";

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

  // todo: send verification token email (or sms)

  return {
    success: "User created",
  };
};

export const login = async (values: LoginFormData) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid credentials",
    };
  }

  return {
    success: "Email sent",
  };
};
