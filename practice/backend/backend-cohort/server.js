import "dotenv/config";
import http from "node:http";
import createApplication from "./src/app.js";
import connecDB from "./src/common/config/db.js";

const start = async () => {
  const PORT = process.env.PORT || 5000;

  await connecDB();

  const server = http.createServer(createApplication());

  server.listen(PORT, () => {
    console.log(
      `Server is running on PORT: ${PORT} in ${process.env.NODE_ENV} mode`,
    );
  });
};

start().catch((err) => {
  console.log(`Server is crush`, err);
  process.exit(1);
});
