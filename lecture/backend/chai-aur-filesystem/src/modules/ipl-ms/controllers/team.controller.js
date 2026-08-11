import ApiResponse from "../../../common/utils/api-response.js";
import * as teamService from "../services/team.service.js";

// create team
const createTeam = async (req, res) => {
  const team = await teamService.createTeam(req.body);

  return ApiResponse.created(res, "Team created successfully", team);
};

// get all team
const getAllTeam = async (req, res) => {
  const teams = await teamService.getAllTeam();

  return ApiResponse.ok(res, "Teams fetched successfully", teams);
};

// get team by id
const getTeamById = async (req, res) => {
  const team = await teamService.getTeamById(req.params.id);

  return ApiResponse.ok(res, "Team fetched successfully", team);
};

// update team by id
const updateTeamById = async (req, res) => {
  const team = await teamService.updateTeamById(req.params.id, req.body);

  return ApiResponse.ok(res, "Team updated successfully", team);
};

// delete team by id
const deleteTeam = async (req, res) => {
  const team = await teamService.deleteTeam(req.params.id);

  return ApiResponse.ok(res, "Team deleted successfully");
};

export { createTeam, getAllTeam, getTeamById, updateTeamById, deleteTeam };
