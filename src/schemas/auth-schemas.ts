import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Please enter your password",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});
export type RegisterFormData = z.infer<typeof RegisterSchema>;

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "Please enter your password",
  }),
});
export type LoginFormData = z.infer<typeof LoginSchema>;

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});
export type ResetFormData = z.infer<typeof ResetSchema>;
