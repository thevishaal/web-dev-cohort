import { Router } from "express";
import * as controller from "../controllers/team-broadcaster.controller.js";

const router = Router();

router.post("/", controller.assignBroadcaster);

router.delete("/", controller.unassignBroadcaster);

router.get("/", controller.getAllTeamsBroadcasters);

router.get("/teams", controller.getBroadcastersByTeam);

router.get("/sponsors", controller.getTeamsByBroadcaster);

export default router;
