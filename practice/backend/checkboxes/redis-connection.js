import Redis from "ioredis";

function createRedisServer() {
  return new Redis({
    host: "localhost",
    port: 6379,
  });
}

export const publisher = createRedisServer();

export const subscriber = createRedisServer();

export const redis = createRedisServer();
