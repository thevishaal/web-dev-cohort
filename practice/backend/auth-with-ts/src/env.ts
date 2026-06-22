import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().optional(),
  DATABASE_URL: z.string(),
  JWT_ACCESS_TOKEN_SECRET: z.string(),
  JWT_ACCESS_TOKEN_EXPIRES_IN: z.string(),
  JWT_REFRESH_TOKEN_SECRET: z.string(),
  JWT_REFRESH_TOKEN_EXPIRES_IN: z.string(),
});

function createEnv(env: NodeJS.ProcessEnv) {
  const safeResult = envSchema.safeParse(env);
  if (!safeResult.success) {
    throw new Error(safeResult.error.message);
  }
  return safeResult.data;
}

export const env = createEnv(process.env);
