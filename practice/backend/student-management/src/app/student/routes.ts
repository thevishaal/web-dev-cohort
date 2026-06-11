import { Router } from "express";
import { StudentController } from "./controller.js";

const router = Router();

const controller = new StudentController();

router.get("/", controller.handleGetAllStudents.bind(controller));
router.get("/:id", controller.handleGetStudentById.bind(controller));

router.post("/", controller.handleInsertStudent.bind(controller));

router.put("/:id", controller.handleUpdateStudentById.bind(controller));
router.delete("/:id", controller.handleDeleteStudentById.bind(controller));

export default router;
