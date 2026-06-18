const express = require("express");

function block_1_basicServer() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());

    app.get("/menu", (req, res) => {
      res.json({
        items: ["thali", "biryani"],
      });
    });

    app.get("/search", (req, res) => {
      const { q, limit } = req.query;
      res.json({
        query: q,
        limit: limit || "10",
      });
    });

    app.get("/menu/:id", (req, res) => {
      const { id } = req.params;
      res.json({
        item: id,
        price: 149,
      });
    });

    app.post("/order", (req, res) => {
      const order = req.body;
      res.status(201).json({
        status: "created",
        order,
      });
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;

      try {
        const menuRes = await fetch(`${base}/menu`);
        const menuData = menuRes.json();
        console.log("GET /menu", JSON.stringify(menuData));

        console.log("+++++++++++++++++++++++++++++++++");

        const searchRes = await fetch(`${base}/search?q=biryani&limit=5`);
        const searchData = await searchRes.json();
        console.log("GET /search", JSON.stringify(searchData));
        console.log("+++++++++++++++++++++++++++++++++");

        const menuItemRes = await fetch(`${base}/menu/42`);
        const menuItemData = await menuItemRes.json();
        console.log("POST /menu", JSON.stringify(menuItemData));
        console.log("+++++++++++++++++++++++++++++++++");

        const orderRes = await fetch(`${base}/order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            body: JSON.stringify({
              dish: "biryani",
              quantity: 2,
            }),
          },
        });
        const orderData = await orderRes.json();
        console.log("POSt /order", JSON.stringify(orderData));
        console.log("+++++++++++++++++++++++++++++++++");
      } catch (error) {
        console.log(error);
      }

      server.close(() => {
        console.log("Block 1 served....");
        resolve();
      });
    });
  });
}

function block_2_response() {
  return new Promise((resolve) => {
    const app = express();

    app.get("/text", (req, res) => {
      res.send("Hello from Chaicode");
    });

    app.get("/json", (req, res) => {
      res.json({
        framework: "express",
        version: "6.1.1",
      });
    });

    app.get("/not-found", (req, res) => {
      res.status(404).json({
        error: "Page not found",
      });
    });

    app.get("/health", (req, res) => {
      res.sendStatus(200);
    });

    app.get("/old-menu", (req, res) => {
      //add entry in DB to see how many users are still visiting old route
      res.redirect(301, "/new-menu");
    });

    app.get("/xml", (req, res) => {
      res.type("application/xml").send("<dish> <name>Biryani</name></dish>");
    });

    app.get("/custom-headers", (req, res) => {
      res.set("X-powered-By", "ChaiCode");
      res.set("X-Request-Id", "123545");
      res.json({
        message: "Custom headers set",
      });
    });
    app.get("/no-content", (req, res) => {
      res.status(204).end();
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;
      try {
        //TODO:
        //#region  //*=========== complete by me ===========
        // text
        const textRes = await fetch(`${base}/text`);
        const textData = await textRes.text();
        console.log("+".repeat(50));
        console.log("Data /text:", textData);
        console.log("+".repeat(50));

        //json
        const jsonRes = await fetch(`${base}/json`);
        const jsonData = await jsonRes.json();
        console.log("Data /json:", JSON.stringify(jsonData));
        console.log("+".repeat(50));

        //not-found
        const notFoundRes = await fetch(`${base}/not-found`);
        const notFoundData = await notFoundRes.json();
        console.log("Data /not-found", JSON.stringify(notFoundData));
        console.log("+".repeat(50));

        //health
        const healthRes = await fetch(`${base}/health`);
        const status = await healthRes.status;
        const statusText = await healthRes.statusText;
        // const [...headers] = await healthRes.headers.keys()
        console.log("Status /health", status, "| StatusText", statusText);
        console.log("+".repeat(50));

        //old-menu
        const oldMenuRes = await fetch(`${base}/old-menu`);
        const redirect = await oldMenuRes.url;
        console.log("redirect /old-menu", redirect);
        console.log("+".repeat(50));

        //xml
        const xmlRes = await fetch(`${base}/xml`).then((d) => d.text());
        console.log("Data /xml", JSON.stringify(xmlRes));

        //custom-headers
        const headersRes = await fetch(`${base}/custom-headers`);
        const headersData = await headersRes.headers.get("x-powered-by");
        console.log("+".repeat(50));
        console.log("Data /custom-headers", JSON.stringify(headersData));
        console.log("+".repeat(50));

        // no-content
        const noContentRes = await fetch(`${base}/no-content`);
        console.log("/no-content", noContentRes.statusText);
        //#endregion //*=========== complete by me ===========
      } catch (error) {
        console.log(error);
      }
    });

    server.close(() => {
      console.log("Block 2 is server...");
      resolve();
    });
  });
}

async function main() {
  await block_1_basicServer();
  await block_2_response();

  process.exit(0);
}

main();
