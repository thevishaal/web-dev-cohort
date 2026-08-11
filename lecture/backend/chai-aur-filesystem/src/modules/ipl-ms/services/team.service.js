import ApiError from "../../../common/utils/api-error.js";
import Team from "../models/team.model.js";
import Owner from "../models/owner.model.js";

// create team
const createTeam = async ({ teamName, ownerId }) => {
  const existingTeam = await Team.findOne({ name: teamName });

  if (existingTeam) {
    throw ApiError.conflict(`Team already exist with this name ${teamName}`);
  }

  const team = await Team.create({ name: teamName, ownerId });

  await team.populate("ownerId", "name email company");

  return team;
};

// get all team
const getAllTeam = async () => {
  return await Team.find().populate("ownerId", "name email company");
};

// get team by id
const getTeamById = async (teamId) => {
  const team = await Team.findById(teamId).populate(
    "ownerId",
    "name email company",
  );

  if (!team) {
    throw ApiError.notFound("Team not found");
  }

  return team;
};

// update team by id
const updateTeamById = async (teamId, { teamName, ownerId }) => {
  const team = await Team.findById(teamId);

  if (!team) {
    throw ApiError.notFound("Team not found");
  }

  const owner = await Owner.findById(ownerId);

  if (!owner) {
    throw ApiError.notFound("Owner not found");
  }

  const updateTeam = await Team.findByIdAndUpdate(
    teamId,
    {
      name: teamName,
      ownerId,
    },
    { new: true, runValidators: true },
  ).populate("ownerId", "name email company");

  return updateTeam;
};

// delete team by id
const deleteTeam = async (teamId) => {
  const team = await Team.findByIdAndDelete(teamId);

  if (!team) {
    throw ApiError.notFound("Team not found");
  }
};

export { createTeam, getAllTeam, getTeamById, updateTeamById, deleteTeam };
