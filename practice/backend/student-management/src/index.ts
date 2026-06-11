import http from "node:http";
import { env } from "./env.js";
import { createApplicationServer } from "./app/index.js";

async function main() {
  const server = http.createServer(createApplicationServer());
  const PORT: number = env.PORT ? +env.PORT : 8080;

  server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
}

main();
