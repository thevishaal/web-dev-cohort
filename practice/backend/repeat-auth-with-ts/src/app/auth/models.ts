import { z } from "zod";

export const signUpPayloadModel = z.object({
  firstName: z.string().min(2).max(50).nonempty(),
  lastName: z.string().min(2).max(45).nullable().optional(),
  email: z.email(),
  password: z.string().min(8),
});

export type SignUpPayloadType = z.infer<typeof signUpPayloadModel>;

export const signInPayloadModel = z.object({
  email: z.email(),
  password: z.string(),
});

export type SignInPayloadType = z.infer<typeof signInPayloadModel>;
