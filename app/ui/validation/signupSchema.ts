import { z } from "zod/v4";

export const signupSchema = z.object({
  email: z.email(),
  name: z.string(),
  password: z.string().min(6),
});

export type SignupSchema = z.infer<typeof signupSchema>;
