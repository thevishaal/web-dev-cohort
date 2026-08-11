import ApiError from "../../../common/utils/api-error.js";
import Team from "../models/team.model.js";
import Player from "../models/player.model.js";

const createPlayer = async ({ name, role, teamId }) => {
  const team = await Team.findById(teamId);

  if (!team) {
    throw ApiError.notFound("Team not found");
  }

  const player = await Player.create({
    name,
    role,
    teamId,
  });

  await player.populate("teamId", "name ownerId");
  return player;
};

const getAllPlayers = async () => {
  return await Player.find();
};

const getPlayerById = async (playerId) => {
  const player = await Player.findById(playerId).populate(
    "teamId",
    "name ownerId",
  );

  if (!player) {
    throw ApiError.notFound("Player not found");
  }

  return player;
};

const updatePlayerById = async (playerId, { name, role }) => {
  const player = await Player.findByIdAndUpdate(
    playerId,
    { name, role },
    { new: true, runValidators: true },
  );

  if (!player) {
    throw ApiError.notFound("Player not found");
  }

  return player;
};

const deletePlayer = async (playerId) => {
  const player = await Player.findByIdAndDelete(playerId);

  if (!player) {
    throw ApiError.notFound("Player not found");
  }
};

const transferPlayer = async (playerId, { newTeamId }) => {
  const team = await Team.findById(newTeamId);

  if (!team) {
    throw ApiError.notFound("Team not found");
  }

  const player = await Player.findByIdAndUpdate(
    playerId,
    { teamId: newTeamId },
    { new: true, runValidators: true },
  ).populate("teamId", "name");

  if (!player) {
    throw ApiError.notFound("Player not found");
  }

  return player;
};

const updatePlayerRole = async (playerId, { role }) => {
  const player = await Player.findByIdAndUpdate(
    playerId,
    { role },
    { new: true, runValidators: true },
  ).populate("teamId", "name");

  if (!player) {
    throw ApiError.notFound("Player not found");
  }

  return player;
};

export {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  updatePlayerById,
  deletePlayer,
  transferPlayer,
  updatePlayerRole,
};
