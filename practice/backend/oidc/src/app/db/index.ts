import "dotenv/config";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import { drizzle } from "drizzle-orm/node-postgres";

import PG from "pg";

const pool = new PG.Pool({
  connectionString: process.env.DATABASE_URL!,
});

pool.connect((err, _client, release) => {
  if (err) {
    console.log(`[Database] connection failed`);
    throw new Error(err.message);
  }
  release();
  console.log(`[Database] connect successfully`);
});

export const db: NodePgDatabase = drizzle({ client: pool });
