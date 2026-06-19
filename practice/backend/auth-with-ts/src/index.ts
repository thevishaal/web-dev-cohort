import http from "node:http";
import { createApplicationServer } from "./app/index.js";

const main = async () => {
  try {
    const PORT = process.env.PORT ?? 8080;

    const server = http.createServer(createApplicationServer());

    server.listen(PORT, () => {
      console.log(`HTTP server is running on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(`Starting error from server`);
    throw error;
  }
};

main();
