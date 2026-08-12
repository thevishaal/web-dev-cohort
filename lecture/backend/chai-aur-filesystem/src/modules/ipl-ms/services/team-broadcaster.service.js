import ApiError from "../../../common/utils/api-error.js";
import Team from "../models/team.model.js";
import Broadcaster from "../models/broadcaster.model.js";
import TeamBroadcaster from "../models/team-broadcaster.model.js";

const assignBroadcaster = async ({ teamId, broadcasterId }) => {
  const team = await Team.findById(teamId);
  if (!team) {
    throw ApiError.notFound("Team not found");
  }

  const broadcaster = await Broadcaster.findById(broadcasterId);
  if (!broadcaster) {
    throw ApiError.notFound("Broadcaster not found");
  }

  const existing = await TeamBroadcaster.findOne({ teamId, broadcasterId });
  if (existing) {
    throw ApiError.conflict("Broadcaster already assigned to this team");
  }

  const teamBroadcaster = await TeamBroadcaster.create({
    teamId,
    broadcasterId,
  });
  return teamBroadcaster;
};

const unassignBroadcaster = async ({ teamId, broadcasterId }) => {
  const team = await Team.findById(teamId);
  if (!team) {
    throw ApiError.notFound("Team not found");
  }

  const broadcaster = await Broadcaster.findById(broadcasterId);
  if (!broadcaster) {
    throw ApiError.notFound("Broadcaster not found");
  }

  const existing = await TeamBroadcaster.findOneAndDelete({
    teamId,
    broadcasterId,
  });

  if (!existing) {
    throw ApiError.notFound(
      `Broadcaster ${broadcaster.name} not broadcast this team ${team.name} `,
    );
  }
};

const getAllTeamsBroadcasters = async () => {
  const teamsBroadcasters = await TeamBroadcaster.find();

  return teamsBroadcasters;
};

const getBroadcastersByTeam = async ({ teamId }) => {
  const team = await Team.findById(teamId);

  if (!team) {
    throw ApiError.notFound("Team not found");
  }

  const teamBroadcasters = await TeamBroadcaster.find({ teamId });

  if (teamBroadcasters.length === 0 && !teamBroadcasters) {
    throw ApiError.notFound(
      `Team ${team.name} not broadcast by any Broadcaster`,
    );
  }

  return teamBroadcasters;
};

const getTeamsByBroadcaster = async ({ broadcasterId }) => {
  const broadcaster = await Broadcaster.findById(broadcasterId);

  if (!broadcaster) {
    throw ApiError.notFound("broadcaster not found");
  }

  const teamBroadcaster = await TeamBroadcaster.find({ broadcasterId });

  if (teamBroadcaster.length === 0 && !teamBroadcaster) {
    throw ApiError.notFound(
      `Broadcaster ${broadcaster.name} not broadcasting any team`,
    );
  }

  return teamBroadcaster;
};

export {
  assignBroadcaster,
  unassignBroadcaster,
  getAllTeamsBroadcasters,
  getBroadcastersByTeam,
  getTeamsByBroadcaster,
};
