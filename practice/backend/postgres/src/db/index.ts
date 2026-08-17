import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client, Pool } from "pg";

const pool = new Pool({
  host: process.env.PG_HOST,
  max: 10,
  connectionString: process.env.DATABASE_URL,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 10000,
  maxLifetimeSeconds: 60,
});

pool.connect((err, _client, release) => {
  if (err) {
    console.log(`[DB] connection failed:`, err.message);
    process.exit(1);
  }
  release();
  console.log("[DB] connection successfully");
});

// export const client = await pool.connect();

// pool.on("connect", (client: Client): void => {
//   console.log(`[Postgres DB client] connect ${client.host}`);
// });

const db = drizzle(process.env.DATABASE_URL!);
export { pool };
