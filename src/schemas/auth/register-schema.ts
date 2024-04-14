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
