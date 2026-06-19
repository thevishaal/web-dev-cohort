import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://postgres:postgres@localhost:5432/chaicode",
});

await client.connect();
console.log("Connected");
await client.end();
