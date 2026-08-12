import { Router } from "express";
import * as controller from "../controllers/broadcaster.controller.js";

const router = Router();

// Create a new broadcaster
router.post("/", controller.createBroadcaster);

// get all broadcasters
router.get("/", controller.getAllBroadcasters);

// get broadcaster by id
router.get("/:id", controller.getBroadcasterById);

// update broadcaster by id
router.put("/:id", controller.updateBroadcaster);

// delete broadcaster by id
router.delete("/:id", controller.deleteBroadcaster);

export default router;
