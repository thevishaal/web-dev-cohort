import http from "http";
import path from "path";

import express from "express";
import { Server } from "socket.io";

import { publisher, redis, subscriber } from "./redis-connection.js";

const CHECKBOX_SIZE = 100;
const CHECKBOX_KEY = "checkbox-state:v3";
const state = {
  checkboxes: new Array(CHECKBOX_SIZE).fill(false),
};

async function main() {
  const PORT = process.env.PORT || 9000;
  const app = express();
  const server = http.createServer(app);
  const io = new Server();
  io.attach(server);

  // middlewares
  app.use(express.static(path.resolve("./public")));

  // subscribe redis
  subscriber.subscribe("internal:server:checkbox:change");
  subscriber.on("message", (channel, message) => {
    if (channel === "internal:server:checkbox:change") {
      //* saare servers ko bata do
      io.emit("server:checkbox:change", JSON.parse(message));
    }
  });

  // socket handles
  io.on("connection", (socket) => {
    console.log(`[Socket] connected... id: ${socket.id}`);

    socket.on("client:checkbox:change", async (data) => {
      console.log(`[Socket:${socket.id}]:client:checkbox:change`, data);

      //* State maintain in server
      state.checkboxes[data.index] = data.checked;

      //* State maintain in redis
      const existingData = await redis.get(CHECKBOX_KEY);
      if (existingData) {
        const remoteData = JSON.parse(existingData);
        remoteData[data.index] = data.checked;
        await redis.set(CHECKBOX_KEY, JSON.stringify(remoteData));
      } else {
        await redis.set(
          CHECKBOX_KEY,
          JSON.stringify(new Array(CHECKBOX_SIZE).fill(false)),
        );
      }

      //* publish to redis
      publisher.publish(
        "internal:server:checkbox:change",
        JSON.stringify(data),
      );

      //* ws server emit everyone
      // io.emit("server:checkbox:change", data);
    });
  });

  // Express handles route
  app.get("/health", (_, res) => {
    res.status(200).json({
      success: true,
      healthy: true,
      message: "Hello, I am from checkboxes",
    });
  });

  app.get("/checkboxes", async (req, res) => {
    const existingData = await redis.get(CHECKBOX_KEY);
    if (existingData) {
      return res.status(200).json({ checkboxes: JSON.parse(existingData) });
    }
    res.status(200).json({ checkboxes: new Array(CHECKBOX_SIZE).fill(false) });
  });

  server.listen(PORT, () => {
    console.log(`[Server] is running on PORT: ${PORT}`);
  });
}

main().catch((err) => {
  console.log("[Error] coming from starting...");
  throw err;
});
