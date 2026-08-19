import express, { urlencoded } from "express";
import authRouter from "./module/auth/user.routes.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import ApiResponse from "./common/utils/api-response.js";
import path from "node:path";
import fs from "node:fs";

export default function createApplication() {
  const app = express();

  app.use(express.json());
  app.use(urlencoded({ extended: true }));
  app.use(cookieParser());

  // const storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, "public/uploads");
  //   },
  //   filename: function (req, file, cb) {
  //     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  //     const ext = path.extname(file.originalname);
  //     cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  //   },
  // });

  const storage = multer.memoryStorage();

  const upload = multer({ storage, limits: { fileSize: 1024 * 1024 * 2 } });

  app.post("/upload", upload.single("file"), (req, res) => {
    console.log(req.file.buffer);

    // const buffer = req.file.buffer;

    // const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
    // const ext = path.extname(req.file.originalname);
    // const filename = req.file.fieldname + uniqueSuffix + ext;

    // fs.writeFile(filename, buffer, (err) => {
    //   if (err) {
    //     console.log(err);
    //   }

    //   console.log("Buffer save");
    // });

    ApiResponse.ok(res, "File uploaded");
  });

  app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to my application" });
  });

  app.use("/api/auth", authRouter);
  return app;
}
