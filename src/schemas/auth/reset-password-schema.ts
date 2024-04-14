import * as z from "zod";
export const ResetPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Please enter your password (min 6 characters)",
  }),
});
export type ResetPasswordFormData = z.infer<typeof ResetPasswordSchema>;
