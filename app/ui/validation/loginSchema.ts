import { z } from "zod/v4";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export type LoginSchema = z.infer<typeof loginSchema>;
