import http from "http";
import { createApplication } from "./app/index.js";

export const PORT = process.env.PORT ?? 8080;
async function main() {
  const server = http.createServer(createApplication());

  server.listen(PORT, () => {
    console.log("[Server] is running on PORT:", PORT);
  });
}

main().catch((err) => {
  console.log("[Error] coming from starting...");
  throw err;
});
