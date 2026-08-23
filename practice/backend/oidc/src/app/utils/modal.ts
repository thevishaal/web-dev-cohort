import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(2).max(50).nonempty(),
  email: z.string(),
  password: z.string().min(8).nonempty(),
});

export const signInSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const userInfoSchema = z.object({
  tokenName: z.string().startsWith("refresh").nonempty(),
  token: z.string().nonempty(),
});

export const clientSchema = z.object({
  displayName: z.string().nonempty(),
  appUrl: z.string(),
  redirectUri: z.string(),
});

export const consentSchema = z.object({
  clientId: z.uuid(),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
export type SignInSchemaType = z.infer<typeof signInSchema>;
export type UserInfoSchemaType = z.infer<typeof userInfoSchema>;
export type ClientSchemaType = z.infer<typeof clientSchema>;
export type ConsentSchemaType = z.infer<typeof consentSchema>;
