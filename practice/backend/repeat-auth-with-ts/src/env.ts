import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().optional(),
  DATABASE_URL: z.string().describe("database url"),
  JWT_ACCESS_SECRET: z.string().describe("access token secret"),
  JWT_ACCESS_EXPIRES_IN: z
    .string()
    .describe("access token expires in")
    .nonempty(),
  JWT_REFRESH_SECRET: z.string().describe("refresh token secret"),
  JWT_REFRESH_EXPIRES_IN: z.string().describe("refresh token expires in"),
});

function createEnv(env: NodeJS.ProcessEnv) {
  const safeParseResult = envSchema.safeParse(env);

  if (!safeParseResult.success) throw new Error(safeParseResult.error.message);
  return safeParseResult.data;
}

export const env = createEnv(process.env);
