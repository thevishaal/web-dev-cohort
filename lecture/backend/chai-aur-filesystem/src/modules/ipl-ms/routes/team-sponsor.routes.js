import { Router } from "express";
import * as controller from "../controllers/team-sponsor.controller.js";

const router = Router();

router.post("/", controller.attachSponsor);

router.delete("/", controller.detachSponsor);

router.get("/", controller.getAllTeamSponsors);

router.get("/teams", controller.getSponsorsByTeam);

router.get("/sponsors", controller.getTeamsBySponsor);

export default router;
