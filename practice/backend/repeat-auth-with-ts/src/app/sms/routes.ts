import express from "express";
import { studentsController } from "./controllers.js";
import { restrictToAuthenticatedUser } from "../auth/utils/auth-middleware.js";

const controller = new studentsController();
const router = express.Router();

// routes

router.get("/", controller.handleAllStudents.bind(controller));
router.post("/", controller.handleStudents.bind(controller));

// router.get("/:id");
// router.put("/:id");

// router.delete("/:id");

export default router;
