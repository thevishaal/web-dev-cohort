import path from "node:path";
import fs from "node:fs";

export const PRIVATE_KEY = fs.readFileSync(
  path.resolve("cert/private-key.pem"),
);
export const PUBLIC_KEY = fs.readFileSync(path.resolve("cert/public-key.pub"));
