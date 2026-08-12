import * as teamBroadcasterService from "../services/team-broadcaster.service.js";
import ApiResponse from "../../../common/utils/api-response.js";

const assignBroadcaster = async (req, res) => {
  const teamBroadcaster = await teamBroadcasterService.assignBroadcaster(
    req.body,
  );

  ApiResponse.created(
    res,
    "Team broadcaster assign successfully",
    teamBroadcaster,
  );
};

const unassignBroadcaster = async (req, res) => {
  await teamBroadcasterService.unassignBroadcaster(req.body);

  ApiResponse.ok(res, "Team broadcaster detach successfully");
};

const getAllTeamsBroadcasters = async (req, res) => {
  const teamBroadcasters =
    await teamBroadcasterService.getAllTeamsBroadcasters();

  ApiResponse.ok(
    res,
    "All TeamBroadcasters fetched successfully",
    teamBroadcasters,
  );
};

const getBroadcastersByTeam = async (req, res) => {
  const broadcastersByTeam = await teamBroadcasterService.getBroadcastersByTeam(
    req.body,
  );

  ApiResponse.ok(res, "All broadcasters by Team", broadcastersByTeam);
};

const getTeamsByBroadcaster = async (req, res) => {
  const teamsByBroadcaster = await teamBroadcasterService.getTeamsByBroadcaster(
    req.body,
  );

  ApiResponse.ok(res, "All teams by broadcaster", teamsByBroadcaster);
};

export {
  assignBroadcaster,
  unassignBroadcaster,
  getAllTeamsBroadcasters,
  getBroadcastersByTeam,
  getTeamsByBroadcaster,
};
