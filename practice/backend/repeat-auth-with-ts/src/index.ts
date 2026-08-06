import http from "node:http";
import { env } from "./env.js";
import { createApplication } from "./app/index.js";

async function main() {
  try {
    const server = http.createServer(createApplication());

    const PORT: number = env.PORT ? +env.PORT : 8080;

    server.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  } catch (error) {
    console.log("Error coming from starting...");
    throw error;
  }
}

main();
