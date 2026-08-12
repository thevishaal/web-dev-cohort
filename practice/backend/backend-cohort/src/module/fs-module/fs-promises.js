import fs from "node:fs/promises";

async function main() {
  const data = await fs.readFile("promis.txt", "utf-8");

  console.log(data);
}

main();
