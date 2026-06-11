const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/menu") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ items: ["thali", "biryani"] }));
  } else if (req.method === "POST" && req.url === "/order") {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => {
      const order = JSON.parse(data);
      res.writeHead(200, { "Content-Type": "application/jsom" });
      res.end(JSON.stringify({ status: "received", order }));
    });
  }
});

// const server = http.createServer((req, res) => {});

server.listen(8000, () => {
  console.log(`Server is runnig on PORT ${8000}`);
});

console.log("Libuv version", process.versions.uv);
