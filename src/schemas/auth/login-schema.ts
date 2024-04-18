import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "Please enter your password (min 6 characters)",
  }),
  code: z.string().optional(),
});
export type LoginFormData = z.infer<typeof LoginSchema>;
