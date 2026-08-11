import { Router } from "express";
import * as controller from "../controllers/team.controller.js";

const router = Router();

router.post("/", controller.createTeam);
router.get("/", controller.getAllTeam);

router.get("/:id", controller.getTeamById);
router.put("/:id", controller.updateTeamById);

router.delete("/:id", controller.deleteTeam);

export default router;
