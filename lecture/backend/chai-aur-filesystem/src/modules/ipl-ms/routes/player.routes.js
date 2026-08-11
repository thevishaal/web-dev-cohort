import { Router } from "express";
import * as controller from "../controllers/player.controller.js";

const router = Router();

// Create a new player
router.post("/", controller.createPlayer);

// get all player
router.get("/", controller.getAllPlayers);

// get player by id
router.get("/:id", controller.getPlayerById);

// update player by id
router.put("/:id", controller.updatePlayerById);

// delete player by id
router.delete("/:id", controller.deletePlayer);

export default router;
