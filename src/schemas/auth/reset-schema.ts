import * as z from "zod";
export const ResetSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});
export type ResetFormData = z.infer<typeof ResetSchema>;
