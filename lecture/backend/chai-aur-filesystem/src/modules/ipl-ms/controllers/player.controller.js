import ApiResponse from "../../../common/utils/api-response.js";
import * as playerService from "../services/player.service.js";

const createPlayer = async (req, res) => {
  const player = await playerService.createPlayer(req.body);

  ApiResponse.created(res, "Player created successfully", player);
};

const getAllPlayers = async (req, res) => {
  const players = await playerService.getAllPlayers();

  ApiResponse.ok(res, "All Players fetched successfully", players);
};

const getPlayerById = async (req, res) => {
  const player = await playerService.getPlayerById(req.params.id);

  ApiResponse.ok(res, "Player fetched successfully", player);
};

const updatePlayerById = async (req, res) => {
  const player = await playerService.updatePlayerById(req.params.id, req.body);

  ApiResponse.ok(res, "Player Updated successfully", player);
};

const deletePlayer = async (req, res) => {
  const player = await playerService.deletePlayer(req.params.id);

  ApiResponse.ok(res, "Player deleted successfully");
};

export {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  updatePlayerById,
  deletePlayer,
};
