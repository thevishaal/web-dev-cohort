import { z } from "zod";

export const signupPayloadModel = z.object({
  firstName: z.string().min(2).max(45).nonempty(),
  lastName: z.string().min(2).max(45).nullable().optional(),
  email: z.email(),
  password: z.string().min(8),
});

export const singinPayloadModel = z.object({
  email: z.email(),
  password: z.string(),
});
