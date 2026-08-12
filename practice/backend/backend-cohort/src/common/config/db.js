import "dotenv/config";
import mongoose from "mongoose";

export default async function connectDB() {
  const conn = await mongoose.connect(process.env.MONGODB_URI);

  //   console.log(conn);
  console.log(`Mongo Connected: ${conn.connection.host}`);
}
