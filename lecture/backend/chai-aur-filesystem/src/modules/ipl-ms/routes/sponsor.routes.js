import { Router } from "express";
import * as controller from "../controllers/sponsor.controller.js";

const router = Router();

// create a new sponsor
router.post("/", controller.createSponsor);

// get all sponsors
router.get("/", controller.getAllSponsors);

// get sponsor by id
router.get("/:id", controller.getSponsorById);

// update sponsor by id
router.put("/:id", controller.updateSponsor);

// delete sponsor by id
router.delete("/:id", controller.deleteSponsor);

export default router;
