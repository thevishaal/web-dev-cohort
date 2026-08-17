import express, { Request, Response } from "express";
// import { client } from "./db/index.js";
import "./db/index.js";

const app = express();

app.get("/", (_, res: Response) => {
  res.status(200).json({
    message: "Hello I am from server side",
  });
});

// const text = "INSERT INTO seats(name) VALUES($1) RETURNING *";
// const values = ["vishal"];
// const res = await client.query(text, values);

// const text = "UPDATE seats set is_booked = ($1) where id = ($2)";
// const values = [0, 1];
// const res = await client.query(text, values);

// app.get("/seats", async (req: Request, res: Response) => {
//   const result = await client.query("SELECT * FROM seats");
//   res.json(result.rows);
// });

app.listen(8000, () => {
  console.log("[Server] is running on Port: 8000");
});
